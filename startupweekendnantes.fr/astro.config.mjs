import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://startupweekendnantes.fr',
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
