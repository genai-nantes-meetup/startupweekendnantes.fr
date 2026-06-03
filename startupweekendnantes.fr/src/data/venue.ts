/**
 * Venue photos (Le Palace, Nantes) shown in 2 rows.
 * `basis` is the flex-basis in pixels; `panoramic: true` makes the photo grow
 * to fill remaining space in its row.
 */

export type VenuePhoto = { src: string; basis: number; panoramic?: boolean };

export const row1Photos: VenuePhoto[] = [
  { src: '/images/cq8ZzypnQ3B7cnq3vSe9YqtKZkc.jpeg', basis: 367 },
  { src: '/images/1MilzwluR4WPySgY1Nc71NA7z10.jpg', basis: 538 },
  { src: '/images/FS3ISXEUHf4xNgOzHz1v79bPNPo.jpg', basis: 367 },
  { src: '/images/LB31XkKlru3wRHoN0ROFW1Y1BE.jpeg', basis: 367 },
];

export const row2Photos: VenuePhoto[] = [
  { src: '/images/8y7OL16jlkcxqLPypsoox88cM8.jpg', basis: 367 },
  { src: '/images/cQsYNI5NzBkgWVy7WotaBRZ21X8.jpg', basis: 367 },
  { src: '/images/FeaVRWV08CQHZHnzXhBakRt95o.jpg', basis: 915, panoramic: true },
];
