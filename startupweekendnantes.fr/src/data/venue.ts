/**
 * Venue photos (Le Palace, Nantes) — vraies photos 2025.
 * `panoramic: true` fait occuper 2 colonnes à la photo dans la galerie.
 */

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
