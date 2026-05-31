"""Custom HTTP server: correct MIME for .mjs, map query-string requests to files with ? in names."""

import http.server
import mimetypes
import os
import urllib.parse

mimetypes.add_type('application/javascript', '.mjs')
mimetypes.add_type('application/javascript', '.js')

SITE_DIR = os.path.dirname(os.path.abspath(__file__))

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=SITE_DIR, **kwargs)

    def translate_path(self, path):
        parsed = urllib.parse.urlsplit(path)
        std = super().translate_path(parsed.path)

        if os.path.exists(std):
            return std

        # File not found at standard path — try appending ?query to filename
        if parsed.query:
            candidate = std + '?' + urllib.parse.unquote(parsed.query)
            if os.path.exists(candidate):
                return candidate

        return std

    def guess_type(self, path):
        if isinstance(path, str) and path.endswith('.mjs'):
            return 'application/javascript'
        base = path.split('?')[0] if isinstance(path, str) else path
        mime, _ = mimetypes.guess_type(base)
        return mime or 'application/octet-stream'

    def log_message(self, fmt, *args):
        pass  # silence request logs

if __name__ == '__main__':
    with http.server.HTTPServer(('', 8080), Handler) as httpd:
        print('Serving on http://localhost:8080')
        httpd.serve_forever()
