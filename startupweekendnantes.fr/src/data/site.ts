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
  /** Favicon path (served from public/). Généré par `node scripts/generate-favicons.mjs`. */
  favicon: '/favicon.svg',
  /** Fallback PNG 32×32 pour les navigateurs sans support SVG. */
  favicon32: '/favicon-32.png',
  /** Fallback PNG 16×16 (onglets, barre de favoris). */
  favicon16: '/favicon-16.png',
  /** iOS home-screen icon path. */
  appleTouchIcon: '/apple-touch-icon.png',
  /** Web app manifest (icônes PWA + couleurs). */
  manifest: '/manifest.json',

  /** Open Graph locale (<meta property="og:locale">). */
  locale: 'fr_FR',
  /** Social share image (Open Graph / Twitter) — stopgap : photo d'ambiance en attendant un visuel dédié 1200×630. */
  ogImage: '/assets/images/amb-foule.jpg',
  ogImageWidth: 1600,
  ogImageHeight: 1064,
  ogImageAlt: 'Startup Weekend Nantes — 54h pour créer une startup',
  /** Organising entity (schema.org Organization / Event.organizer). */
  organizerName: 'Startup Weekend Nantes',
  /** Logo de marque (schema.org Organization.logo) — favicon astérisque en attendant un PNG dédié. */
  logo: '/apple-touch-icon.png',
  /** LinkedIn company page (footer link + schema.org Organization.sameAs). */
  linkedin: 'https://www.linkedin.com/company/startup-weekend-nantes',

  /**
   * Archived sites of past editions (frozen history, year-agnostic).
   * Listed in the footer; prepend new entries as editions roll over.
   */
  pastEditions: [{ year: 2025, url: 'https://2025.startupweekendnantes.fr' }] as const,

  /** Default <title> — falls back here when a page passes none. */
  defaultTitle: `Startup Weekend Nantes — ${EDITION.year} Edition`,
  /** Default meta description — falls back here when a page passes none. */
  defaultDescription: `Startup Weekend Nantes ${EDITION.year} — ${EDITION.dateRangeLong}. L'événement pour monter un projet et vivre en accéléré la création d'une startup, à Nantes.`,
} as const;
