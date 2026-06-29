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

  /** Open Graph locale (<meta property="og:locale">). */
  locale: 'fr_FR',
  /** Social share image (Open Graph / Twitter) — 1200×630, served from public/. */
  ogImage: '/assets/images/og/og-cover.jpg',
  ogImageWidth: 1200,
  ogImageHeight: 630,
  ogImageAlt: 'Startup Weekend Nantes — 54h pour créer une startup',
  /** Organising entity (schema.org Organization / Event.organizer). */
  organizerName: 'Startup Weekend Nantes',
  /** Brand logo path (schema.org Organization.logo, served from public/). */
  logo: '/assets/images/brand/logo-startup-weekend-nantes.png',
  /** LinkedIn company page (footer link + schema.org Organization.sameAs). */
  linkedin: 'https://www.linkedin.com/company/startup-weekend-nantes',

  /**
   * Archived sites of past editions (frozen history, year-agnostic).
   * Listed in the footer; prepend new entries as editions roll over.
   */
  pastEditions: [
    { year: 2025, url: 'https://2025.startupweekendnantes.fr' },
  ] as const,

  /** Default <title> — falls back here when a page passes none. */
  defaultTitle: `Startup Weekend Nantes — ${EDITION.year} Edition`,
  /** Default meta description — falls back here when a page passes none. */
  defaultDescription: `Startup Weekend Nantes ${EDITION.year} — ${EDITION.dateRangeLong}. L'événement pour monter un projet et vivre en accéléré la création d'une startup, à Nantes.`,
} as const;
