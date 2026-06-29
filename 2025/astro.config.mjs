import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import { SITE } from './src/data/site.ts';

export default defineConfig({
  site: SITE.url,
  server: { port: 4323 },
  integrations: [
    react(),
    sitemap({
      // Strip trailing slashes (except root) so sitemap URLs match the canonical
      // tags and Vercel's `trailingSlash: false` (avoids 308-redirected entries).
      serialize(item) {
        const root = `${SITE.url}/`;
        if (item.url !== root && item.url.endsWith('/')) {
          item.url = item.url.replace(/\/$/, '');
        }
        return item;
      },
    }),
  ],
  vite: {
    // Force a single React instance so deps like `motion` don't get their own
    // bundled copy (avoids "Invalid hook call / more than one copy of React").
    resolve: {
      dedupe: ['react', 'react-dom'],
    },
    optimizeDeps: {
      include: ['react', 'react-dom', 'react/jsx-runtime', 'react/jsx-dev-runtime', 'motion'],
    },
  },
});
