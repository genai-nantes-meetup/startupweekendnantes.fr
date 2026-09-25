/**
 * Sponsors shown in the "Nos fervents partenaires" section.
 * `sponsorTiers` = one row per contribution level, biggest first. Each tier has
 * its own logo size (`size`), so the bigger the contribution, the bigger the
 * logo; logos of a row share it equally. The venue (in-kind) closes the wall.
 *
 * Source : base Notion « Sponsors » (vue SWNA 2026) — only partners with an
 * amount in the SWNA-2026 column or an in-kind contribution are listed.
 *
 * `ratio` is the width/height of the cropped file, printed by
 * scripts/normalize-sponsor-logos.mjs. `logoBox()` uses it so a stubby
 * square logo and a long wordmark end up with comparable optical weight —
 * sizing everything by height alone made the wide ones dwarf the rest.
 */

export type Sponsor = { name: string; img: string; ratio: number };

const BASE = '/assets/images/sponsors/';
/**
 * Cache-buster appended to every logo URL. /assets/* is served `immutable` for a
 * year, so a logo whose file changes under the same name stays stale in returning
 * visitors' browsers. Bump it whenever a logo file is replaced in place.
 */
const V = '?v=2026-09';

/** How hard wide logos get pulled back: 0 = size by height only, 1 = equal area. */
const COMPENSATION = 0.35;

/**
 * Display box for a logo in a tier of reference size `size` (height of a 1:1
 * logo). Wide wordmarks are damped so every logo of a row carries a comparable
 * optical weight; a square logo gets the full `size` as height.
 */
export function logoBox(ratio: number, size: number): { width: number; height: number } {
  const raw = size / Math.pow(ratio, COMPENSATION);
  const height = Math.round(Math.min(size, Math.max(size * 0.45, raw)));
  return { width: Math.round(height * ratio), height };
}

export type SponsorTier = {
  /** Contribution level, used as a CSS hook (`sponsors-tier--<id>`). */
  id: string;
  /** Reference logo height (px) for this tier — see logoBox(). */
  size: number;
  sponsors: Sponsor[];
};

const logo = (name: string, file: string, ratio: number): Sponsor => ({
  name,
  img: `${BASE}${file}${V}`,
  ratio,
});

export const sponsorTiers: SponsorTier[] = [
  // 4 000 €
  {
    id: 'platinum',
    size: 150,
    sponsors: [logo('Nantes Métropole', 'sponsor-nantes-metropole.png', 3.19)],
  },
  // 2 500 €
  {
    id: 'gold',
    size: 120,
    sponsors: [
      logo('Kiliogene', 'sponsor-kiliogene.png', 1.46),
      logo(
        'Ordre des Experts-Comptables Pays de la Loire',
        'sponsor-ordre-experts-comptables.png',
        4.86
      ),
    ],
  },
  // 750 €
  {
    id: 'silver',
    size: 96,
    sponsors: [
      logo('Clever Cloud', 'sponsor-clever-cloud.png', 4.01),
      logo('Crisp', 'sponsor-crisp.png', 3.6),
      logo('Lucca', 'sponsor-lucca.svg', 3.05),
    ],
  },
  // 500 €
  {
    id: 'bronze',
    size: 78,
    sponsors: [
      logo('Guest Suite', 'sponsor-guest-suite.png', 0.93),
      logo(
        'Kivo, incubateur Centrale Nantes, Audencia, Nantes Université',
        'sponsor-kivo.svg',
        4.82
      ),
      logo('Pépite Pays de la Loire', 'sponsor-pepite-pays-de-la-loire.png', 2.42),
    ],
  },
  // En nature : le lieu
  {
    id: 'venue',
    size: 96,
    sponsors: [logo('_icilundi', 'sponsor-icilundi.png', 4.85)],
  },
];
