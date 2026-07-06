/**
 * Generate the Open Graph share image (1200×630) from the hero participants
 * cut-out, letterboxed on a black background with margins.
 *
 * Run once (or whenever the source changes):
 *   node scripts/generate-og-image.mjs
 *
 * Output: public/assets/images/og/og-cover.jpg  (referenced by SITE.ogImage)
 * Replaceable later by a properly designed 1200×630 banner at the same path.
 */
import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const SRC = join(root, 'public/assets/images/hero/hero-participants.png');
const OUT_DIR = join(root, 'public/assets/images/og');
const OUT = join(OUT_DIR, 'og-cover.jpg');

const W = 1200;
const H = 630;
const BG = { r: 0, g: 0, b: 0, alpha: 1 };

await mkdir(OUT_DIR, { recursive: true });

// Scale the cut-out to ~88% of canvas height, then center it with black margins.
const foreground = await sharp(SRC)
  .resize({ height: Math.round(H * 0.88), fit: 'inside', withoutEnlargement: true })
  .toBuffer();

await sharp({ create: { width: W, height: H, channels: 4, background: BG } })
  .composite([{ input: foreground, gravity: 'center' }])
  .jpeg({ quality: 85, mozjpeg: true })
  .toFile(OUT);

console.log(`OG image written: ${OUT} (${W}x${H})`);
