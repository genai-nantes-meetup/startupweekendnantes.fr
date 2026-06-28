import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import { SITE } from './src/data/site.ts';
import { EDITION } from './src/data/edition.ts'; // edition source of truth, available to the config

void EDITION;

export default defineConfig({
  site: SITE.url,
  server: { port: 4323 },
  integrations: [
    react(),
    sitemap(),
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
