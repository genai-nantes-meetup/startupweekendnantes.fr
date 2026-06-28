/**
 * Stable, year-agnostic site & SEO metadata.
 * Edition-specific values (year, dates) live in edition.ts; this file holds the
 * constants that don't change between editions — consumed by Layout.astro <head>
 * and astro.config.mjs.
 */

import { EDITION } from './edition';

export const SITE = {
  /** Brand / organisation name, used in titles and aria labels. */
  name: 'Startup Weekend Nantes',
  /** Canonical site origin — single source, also consumed by astro.config.mjs `site`. */
  url: 'https://startupweekendnantes.fr',
  /** <html lang> value. */
  lang: 'fr',
  /** Browser UI tint (<meta name="theme-color">). */
  themeColor: '#0e0218',
  /** Google Tag Manager container id (injected in <head> and the noscript iframe). */
  gtmId: 'GTM-NQ2DKKPD',
  /** Favicon path (served from public/). */
  favicon: '/favicon.jpg',
  /** iOS home-screen icon path. */
  appleTouchIcon: '/icons/icon-192.png',
  /** PWA manifest path. */
  manifest: '/manifest.json',

  /** Default <title> — falls back here when a page passes none. */
  defaultTitle: `Startup Weekend Nantes — ${EDITION.year} Edition`,
  /** Default meta description — falls back here when a page passes none. */
  defaultDescription: `Startup Weekend Nantes ${EDITION.year} — ${EDITION.dateRangeLong}. L'événement pour monter un projet et vivre en accéléré la création d'une startup, à Nantes.`,
} as const;
