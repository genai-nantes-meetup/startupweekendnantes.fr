/**
 * Venue photos (Le Palace, Nantes) — vraies photos 2025.
 * `panoramic: true` fait occuper 2 colonnes à la photo dans la galerie.
 */

/**
 * Lieu de l'événement (Le Palace, Nantes) — source unique pour le SEO local :
 * consommé par le JSON-LD `Place` (meta.ts), les balises geo du <head> et /llms.txt.
 */
export const venue = {
  name: 'Le Palace',
  streetAddress: '4 rue Voltaire',
  postalCode: '44000',
  addressLocality: 'Nantes',
  addressRegion: 'Pays de la Loire',
  /** Code région ISO 3166-2 — alimente la balise meta `geo.region`. */
  addressRegionCode: 'FR-PDL',
  addressCountry: 'FR',
  latitude: 47.2129216,
  longitude: -1.5644127,
} as const;

export type VenuePhoto = { src: string; basis: number; panoramic?: boolean };

export const row1Photos: VenuePhoto[] = [
  { src: '/images/palace-1.jpg', basis: 367 },
  { src: '/images/palace-2.jpg', basis: 367 },
  { src: '/images/palace-3.jpg', basis: 367 },
  { src: '/images/palace-4.jpg', basis: 367 },
];

export const row2Photos: VenuePhoto[] = [
  { src: '/images/palace-5.jpg', basis: 367 },
  { src: '/images/palace-6.jpg', basis: 367 },
  { src: '/images/palace-pano.jpg', basis: 915, panoramic: true },
];
