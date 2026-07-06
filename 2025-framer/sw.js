self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', event => event.waitUntil(self.clients.claim()));

self.addEventListener('fetch', event => {
  const url = event.request.url;
  // Redirect SVG requests with %3F (encoded ?) to clean-named files served with correct MIME type
  const svgMatch = url.match(/\/images\/([^%?]+\.svg)(%3F|\?)/i);
  if (svgMatch) {
    const base = url.split('/images/')[0] + '/images/' + svgMatch[1];
    event.respondWith(fetch(base));
  }
});
