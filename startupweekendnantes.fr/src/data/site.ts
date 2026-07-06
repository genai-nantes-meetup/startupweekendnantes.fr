/**
 * Métadonnées site & SEO stables (indépendantes de l'année).
 * Les valeurs propres à l'édition (année, dates) vivent dans edition.ts ; ce
 * fichier tient les constantes qui ne changent pas d'une édition à l'autre —
 * consommées par le <head> de Layout.astro et astro.config.mjs.
 */

import { EDITION } from './edition';

export const SITE = {
  /** Nom de marque / organisation, utilisé dans les titres et labels aria. */
  name: 'Startup Weekend Nantes',
  /** Origine canonique du site — source unique, aussi consommée par astro.config.mjs. */
  url: 'https://startupweekendnantes.fr',
  /** Valeur de <html lang>. */
  lang: 'fr',
  /** Teinte de l'UI navigateur (<meta name="theme-color">). */
  themeColor: '#0e0218',
  /** Identifiant du conteneur Google Tag Manager. */
  gtmId: 'GTM-NQ2DKKPD',
  /** Chemin du favicon (servi depuis public/). */
  favicon: '/favicon.svg',
  /** Icône écran d'accueil iOS. */
  appleTouchIcon: '/apple-touch-icon.png',

  /** Locale Open Graph (<meta property="og:locale">). */
  locale: 'fr_FR',
  /** Image de partage (Open Graph / Twitter), servie depuis public/. */
  ogImage: '/images/amb-foule.jpg',
  ogImageWidth: 1600,
  ogImageHeight: 1064,
  ogImageAlt: 'Startup Weekend Nantes — 54h pour créer une startup',
  /** Entité organisatrice (schema.org Organization / Event.organizer). */
  organizerName: 'Startup Weekend Nantes',
  /** Logo de marque (schema.org Organization.logo, servi depuis public/). */
  logo: '/apple-touch-icon.png',
  /** Page LinkedIn (lien footer + schema.org Organization.sameAs). */
  linkedin: 'https://www.linkedin.com/company/startup-weekend-nantes',

  /** <title> par défaut — utilisé quand une page n'en passe aucun. */
  defaultTitle: `Startup Weekend Nantes — ${EDITION.year} Edition`,
  /** Meta description par défaut. */
  defaultDescription: `Startup Weekend Nantes ${EDITION.year} — ${EDITION.dateRangeLong}. L'événement pour monter un projet et vivre en accéléré la création d'une startup, à Nantes.`,
} as const;
