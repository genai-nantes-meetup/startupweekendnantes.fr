/**
 * Builders JSON-LD schema.org — assemblent les données structurées à partir du
 * contenu existant de `src/data/` (aucune duplication). Consommé par Layout.astro
 * (page d'accueil). Toutes les URLs sont absolues, dérivées de SITE.url.
 *
 * Pourquoi ça compte : ça expose l'événement comme une entité lisible par la
 * machine (dates, lieu, prix, programme, intervenants, FAQ) — base des rich
 * results Google et de la citation par les moteurs de réponse IA.
 */

import { EDITION } from './edition';
import { SITE } from './site';
import { venue } from './venue';
import { tiers } from './pricing';
import { members } from './team';
import { questions } from './faq';

/** Construit une URL absolue à partir d'un chemin relatif à la racine du site. */
const abs = (path: string): string => new URL(path, SITE.url).toString();

/** "59,5€" → "59.50" ; "5€" → "5.00". Garde le prix schema.org numérique. */
function parsePrice(price: string): string {
  const n = Number(price.replace(/[^0-9,.]/g, '').replace(',', '.'));
  return Number.isFinite(n) ? n.toFixed(2) : '0.00';
}

function organization() {
  return {
    '@type': 'Organization',
    '@id': abs('/#organization'),
    name: SITE.organizerName,
    alternateName: 'Techstars Startup Weekend Nantes',
    url: SITE.url,
    logo: abs(SITE.logo),
    sameAs: [SITE.linkedin],
  };
}

function place() {
  return {
    '@type': 'Place',
    '@id': abs('/#venue'),
    name: venue.name,
    address: {
      '@type': 'PostalAddress',
      streetAddress: venue.streetAddress,
      postalCode: venue.postalCode,
      addressLocality: venue.addressLocality,
      addressRegion: venue.addressRegion,
      addressCountry: venue.addressCountry,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: venue.latitude,
      longitude: venue.longitude,
    },
  };
}

/** Billets participants uniquement (ceux qui pointent vers la billetterie). */
function offers() {
  return tiers
    .filter((t) => t.href === EDITION.ticketUrl)
    .map((t) => ({
      '@type': 'Offer',
      name: t.label,
      price: parsePrice(t.price),
      priceCurrency: 'EUR',
      url: EDITION.ticketUrl,
      availability: 'https://schema.org/InStock',
      validFrom: '2025-01-01T00:00:00+01:00',
      priceValidUntil: EDITION.startISO,
    }));
}

function performers() {
  return members.map((m) => ({
    '@type': 'Person',
    name: m.name,
    jobTitle: m.role,
    image: abs(m.img),
  }));
}

/** L'Event de l'édition courante. */
function currentEvent() {
  return {
    '@type': 'Event',
    '@id': abs('/#event'),
    name: `${SITE.name} ${EDITION.year}`,
    description: SITE.defaultDescription,
    inLanguage: 'fr-FR',
    startDate: EDITION.startISO,
    endDate: EDITION.endISO,
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    eventStatus: 'https://schema.org/EventScheduled',
    image: [
      {
        '@type': 'ImageObject',
        url: abs(SITE.ogImage),
        width: SITE.ogImageWidth,
        height: SITE.ogImageHeight,
      },
    ],
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['#intro'],
    },
    url: SITE.url,
    location: place(),
    organizer: { '@id': abs('/#organization') },
    performer: performers(),
    offers: offers(),
  };
}

function faqPage() {
  return {
    '@type': 'FAQPage',
    '@id': abs('/#faq'),
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['.faq-question', '.faq-answer'],
    },
    mainEntity: questions.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };
}

type Crumb = { name: string; path: string };

function breadcrumb(items: Crumb[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: abs(it.path),
    })),
  };
}

/** @graph de la page d'accueil : Event + FAQPage + Organization + BreadcrumbList. */
export function buildHomeJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      currentEvent(),
      faqPage(),
      organization(),
      breadcrumb([{ name: 'Accueil', path: '/' }]),
    ],
  };
}
