/**
 * Venue photos (Le Palace, Nantes) shown in 2 rows.
 * `basis` is the flex-basis in pixels; `panoramic: true` makes the photo grow
 * to fill remaining space in its row.
 */

/**
 * Venue metadata — feeds the schema.org `Place` (JSON-LD) and the venue alt text.
 * `street`/`postalCode` à confirmer ; on ne déclare que ce qui est vérifié.
 */
export const venue = {
  name: 'Le Palace',
  addressLocality: 'Nantes',
  addressRegion: 'Pays de la Loire',
  addressCountry: 'FR',
} as const;

export type VenuePhoto = { src: string; basis: number; panoramic?: boolean };

export const row1Photos: VenuePhoto[] = [
  { src: '/assets/images/venue/venue-palace-1.jpeg', basis: 367 },
  { src: '/assets/images/venue/venue-palace-2.jpg', basis: 538 },
  { src: '/assets/images/intro/event-pitch-speaker.jpg', basis: 367 },
  { src: '/assets/images/venue/venue-palace-3.jpeg', basis: 367 },
];

export const row2Photos: VenuePhoto[] = [
  { src: '/assets/images/venue/venue-palace-4.jpg', basis: 367 },
  { src: '/assets/images/venue/venue-palace-5.jpg', basis: 367 },
  { src: '/assets/images/venue/venue-palace-panoramic.jpg', basis: 915, panoramic: true },
];
