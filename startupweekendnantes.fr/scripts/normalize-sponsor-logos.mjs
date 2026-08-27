/**
 * One-off sponsor-logo normaliser (run manually, NOT part of the build).
 *
 *   node scripts/normalize-sponsor-logos.mjs
 *
 * The sponsor logos came straight out of Framer: hashed filenames, and several
 * of them are social-media squares (1080x1080) with the actual logo sitting in
 * a thin band of transparent padding. Since the logo wall sizes every image by
 * height, that padding made the biggest partners render ~10px tall.
 *
 * For each logo it:
 *   1. crops the fully-transparent margins away,
 *   2. downscales to MAX_EDGE and writes public/assets/images/sponsors/<slug>,
 *   3. prints the cropped aspect ratio to paste into src/data/sponsors.ts
 *      (consumed by logoHeight() so every logo gets the same optical weight).
 */
import { mkdir, copyFile, unlink } from 'node:fs/promises';
import { join } from 'node:path';
import sharp from 'sharp';

const SRC = 'public/assets/images';
const OUT = 'public/assets/images/sponsors';
const MAX_EDGE = 1200;
const ALPHA_THRESHOLD = 12; // ignore near-transparent halo pixels when cropping

/** Framer hash → readable slug. Two logos were also swapped: mow… is the ORDEC one. */
const LOGOS = [
  ['hEoUoeabKge2WBaQJP62xwnrEEQ.png', 'sponsor-nantes-metropole.png'],
  ['iTUR9jaNQ4EbeYEHbPH5vUWxRQ.svg', 'sponsor-allovoisins.svg'],
  ['mowMp6Vf0kSPXZHQB9N5E.png', 'sponsor-ordre-experts-comptables.png'],
  ['xgqZP9NFB8rOgqvLhHUkyDYRJYU.png', 'sponsor-crisp.png'],
  ['C7lvJXp3dybbCUCltGehqzDyw4.png', 'sponsor-clever-cloud.png'],
  ['f4AyPqq1hjMZxQxCR0mkLhZ7Q.png', 'sponsor-guest-suite.png'],
  ['2OyxeqKFVJBlpaZYbucB087OteU.png', 'sponsor-kiliogene.png'],
  ['44iQIZPqRkD7728oDk6fVdVgQ.png', 'sponsor-reseau-entreprendre-atlantique.png'],
  ['Q7FknPV2hRB0NaQJVTxDxhqy1ok.png', 'sponsor-finalli.png'],
  ['xbrzvOd572A3buGabxbYYWHMDTA.png', 'sponsor-icilundi.png'],
  ['zql7stHN2Rthx6uOdsagCNhv2M.png', 'sponsor-pepite-pays-de-la-loire.png'],
  ['0WtTlUnGSMQLo0YDGvoTdjyhMEc.png', 'sponsor-arzel.png'],
];

/** Left over from an earlier rename: mislabelled copies nothing points at. */
const STALE = ['sponsor-allovoisins.png', 'sponsor-allovoisins.avif', 'sponsor-ordre-experts-comptables.svg'];

/** Delete a file if it exists. */
const rm = async (p) => {
  try {
    await unlink(p);
  } catch {
    /* not there — fine */
  }
};

/** Bounding box of the pixels whose alpha is above ALPHA_THRESHOLD. */
async function opaqueBox(file) {
  const { data, info } = await sharp(file)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;
  let top = height, left = width, right = -1, bottom = -1;
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      if (data[(y * width + x) * channels + 3] <= ALPHA_THRESHOLD) continue;
      if (x < left) left = x;
      if (x > right) right = x;
      if (y < top) top = y;
      if (y > bottom) bottom = y;
    }
  }
  if (right < 0) throw new Error(`${file}: fully transparent`);
  return { left, top, width: right - left + 1, height: bottom - top + 1 };
}

async function run() {
  await mkdir(OUT, { recursive: true });
  const ratios = [];

  for (const name of STALE) {
    await rm(join(OUT, name));
  }

  for (const [from, to] of LOGOS) {
    const src = join(SRC, from);
    const dest = join(OUT, to);

    if (to.endsWith('.svg')) {
      // Vector logos are already tightly cropped — just move them.
      await copyFile(src, dest);
      const { width, height } = await sharp(src).metadata();
      ratios.push([to, width / height, `${width}x${height}`]);
      continue;
    }

    const box = await opaqueBox(src);
    const scale = Math.min(1, MAX_EDGE / Math.max(box.width, box.height));
    const out = {
      width: Math.round(box.width * scale),
      height: Math.round(box.height * scale),
    };
    await sharp(src)
      .extract(box)
      .resize(out.width, out.height)
      .png({ compressionLevel: 9, palette: true })
      .toFile(dest);
    ratios.push([to, box.width / box.height, `${box.width}x${box.height}`]);
  }

  console.log('\nratios to paste into src/data/sponsors.ts:\n');
  for (const [name, ratio, size] of ratios) {
    console.log(`  ${name.padEnd(34)} ratio: ${ratio.toFixed(2).padStart(5)}  (cropped ${size})`);
  }
}

run();
