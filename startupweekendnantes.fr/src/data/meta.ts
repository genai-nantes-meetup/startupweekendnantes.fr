/**
 * schema.org JSON-LD builders — assemble structured data from the existing
 * `src/data/` content (no duplication). Consumed by Layout.astro (homepage).
 * All URLs are absolute, derived from SITE.url.
 *
 * Why this matters: it exposes the event as a machine-readable entity (dates,
 * place, price, programme, speakers, FAQ) — the basis for Google rich results
 * and citation by AI answer engines (Perplexity, ChatGPT, Google AI Overviews).
 */

import { EDITION } from './edition';
import { SITE } from './site';
import { venue } from './venue';
import { tiers } from './pricing';
import { members } from './team';
import { questions } from './faq';
import { pastVideos } from './past';

/** Build an absolute URL from a site-root-relative path. */
const abs = (path: string): string => new URL(path, SITE.url).toString();

/** "59,5€" → "59.50" ; "5€" → "5.00". Keeps schema.org price numeric. */
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
    email: EDITION.contactEmail,
    // L'événement est organisé par NaoMakers — adresse déclarée sur la billetterie
    // officielle (Billetweb), reprise ici comme unique source pour rester en phase.
    address: {
      '@type': 'PostalAddress',
      streetAddress: '25 avenue des Préludes',
      postalCode: '44300',
      addressLocality: 'Nantes',
      addressCountry: 'FR',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer support',
      email: EDITION.contactEmail,
      areaServed: 'FR',
      availableLanguage: 'French',
    },
    sameAs: [SITE.linkedin, SITE.instagram, EDITION.ticketUrl],
  };
}

/** schema.org WebSite node — anchors the site as a distinct entity for AI/search. */
function website() {
  return {
    '@type': 'WebSite',
    '@id': abs('/#website'),
    name: SITE.name,
    url: SITE.url,
    inLanguage: 'fr-FR',
    publisher: { '@id': abs('/#organization') },
  };
}

/** "https://www.youtube.com/embed/ol4yYOPwQF0" → "ol4yYOPwQF0". */
const youtubeId = (embedUrl: string): string => embedUrl.split('/').pop() ?? '';

/**
 * VideoObject per recap video (PastGlimpse section) — enables video rich results /
 * carousels. `uploadDate` and `duration` are intentionally omitted: we don't have a
 * verified value for either, and Google penalises fabricated video metadata more
 * than it penalises an incomplete one.
 */
function pastVideoObjects() {
  return pastVideos.map((v) => {
    const id = youtubeId(v.embedUrl);
    return {
      '@type': 'VideoObject',
      name: v.title,
      description: `${v.label} — ${v.title}`,
      thumbnailUrl: [`https://i.ytimg.com/vi/${id}/hqdefault.jpg`],
      embedUrl: v.embedUrl,
      contentUrl: `https://www.youtube.com/watch?v=${id}`,
    };
  });
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

/** Attendee ticket tiers only (those that actually link to the ticketing URL). */
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

/** The current-edition Event. */
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

/** Homepage @graph: Event + FAQPage + Organization + WebSite + VideoObjects + BreadcrumbList. */
export function buildHomeJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      currentEvent(),
      faqPage(),
      organization(),
      website(),
      ...pastVideoObjects(),
      breadcrumb([{ name: 'Accueil', path: '/' }]),
    ],
  };
}
