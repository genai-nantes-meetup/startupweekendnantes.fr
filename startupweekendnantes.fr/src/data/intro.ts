/**
 * Intro section image rows — vraies photos d'ambiance 2025.
 * These point at the `-thumb` (500px) variants, not the full-size originals —
 * the collage never displays them above ~226px, so PageSpeed flagged the
 * full-size files as 3-8x oversized. The `-thumb` files are separate assets
 * (see amb-*-thumb.{jpg,webp,avif} next to the originals in public/assets/images/
 * and their manifest entries in image-manifest.ts) generated at 500px width with
 * the same sharp settings as scripts/optimize-images.mjs; the full-size
 * originals are untouched and still used elsewhere (e.g. amb-foule.jpg as
 * SITE.ogImage).
 */

export type IntroImage = { src: string; alt: string };

export const topImages: IntroImage[] = [
  {
    src: '/assets/images/amb-equipe-thumb.jpg',
    alt: 'Une équipe en plein brainstorm autour des post-it',
  },
  { src: '/assets/images/amb-pitch-thumb.jpg', alt: 'Un participant pitche sur scène' },
];

export const bottomImages: IntroImage[] = [
  { src: '/assets/images/amb-foule-thumb.jpg', alt: 'La salle pendant les pitchs' },
  { src: '/assets/images/amb-oratrice-thumb.jpg', alt: 'Prise de parole au micro' },
];
