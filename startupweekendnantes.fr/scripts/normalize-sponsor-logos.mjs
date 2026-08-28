/**
 * One-off sponsor-logo normaliser (run manually, NOT part of the build).
 *
 *   node scripts/normalize-sponsor-logos.mjs
 *
 * The sponsor logos came straight out of Framer: hashed filenames, and several
 * of them are social-media squares (1080x1080) with the actual logo sitting in
 * a thin band of transparent padding. Since the logo wall sizes every image by
 * height, that padding made the biggest partners render ~10px tall. Two files
 * were also swapped: the one named "allovoisins" holds the ORDEC logo.
 *
 * For each logo it:
 *   1. crops the fully-transparent margins away,
 *   2. rewrites it under its correct name in public/assets/images/sponsors/,
 *   3. drops the untouched Framer originals still sitting at the images root,
 *   4. refreshes the sponsors' image-manifest entries (same shape as
 *      optimize-images.mjs, which stays the source of truth for every other
 *      image — re-running that one here would recompress ~300 unrelated files),
 *   5. prints the cropped aspect ratio to paste into src/data/sponsors.ts
 *      (consumed by logoBox() so every logo gets the same optical weight).
 *
 * Safe to re-run: cropping an already-cropped logo is a no-op.
 */
import { readFile, writeFile, unlink, access } from 'node:fs/promises';
import { join } from 'node:path';
import sharp from 'sharp';

const IMAGES = 'public/assets/images';
const DIR = 'public/assets/images/sponsors';
const MANIFEST = 'src/data/image-manifest.ts';
const MAX_EDGE = 1200;
const ALPHA_THRESHOLD = 12; // ignore near-transparent halo pixels when cropping

/** [file as it ships today, name it should have]. Same name = crop in place. */
const LOGOS = [
  ['sponsor-nantes-metropole.png', 'sponsor-nantes-metropole.png'],
  ['sponsor-ordre-experts-comptables.svg', 'sponsor-allovoisins.svg'],
  ['sponsor-allovoisins.png', 'sponsor-ordre-experts-comptables.png'],
  ['sponsor-crisp.png', 'sponsor-crisp.png'],
  ['sponsor-clever-cloud.png', 'sponsor-clever-cloud.png'],
  ['sponsor-guest-suite.png', 'sponsor-guest-suite.png'],
  ['sponsor-kiliogene.png', 'sponsor-kiliogene.png'],
  ['sponsor-reseau-entreprendre-atlantique.png', 'sponsor-reseau-entreprendre-atlantique.png'],
  ['sponsor-finalli.png', 'sponsor-finalli.png'],
  ['sponsor-icilundi.png', 'sponsor-icilundi.png'],
  ['sponsor-pepite-pays-de-la-loire.png', 'sponsor-pepite-pays-de-la-loire.png'],
  ['sponsor-arzel.png', 'sponsor-arzel.png'],
];

/** Framer originals at the images root — byte-identical duplicates of the above. */
const FRAMER_ORIGINALS = [
  'hEoUoeabKge2WBaQJP62xwnrEEQ.png',
  'mowMp6Vf0kSPXZHQB9N5E.png',
  'iTUR9jaNQ4EbeYEHbPH5vUWxRQ.svg',
  'xgqZP9NFB8rOgqvLhHUkyDYRJYU.png',
  'C7lvJXp3dybbCUCltGehqzDyw4.png',
  'f4AyPqq1hjMZxQxCR0mkLhZ7Q.png',
  '2OyxeqKFVJBlpaZYbucB087OteU.png',
  '44iQIZPqRkD7728oDk6fVdVgQ.png',
  'Q7FknPV2hRB0NaQJVTxDxhqy1ok.png',
  'xbrzvOd572A3buGabxbYYWHMDTA.png',
  'zql7stHN2Rthx6uOdsagCNhv2M.png',
  '0WtTlUnGSMQLo0YDGvoTdjyhMEc.png',
];

const exists = async (p) => {
  try {
    await access(p);
    return true;
  } catch {
    return false;
  }
};

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
  let top = height,
    left = width,
    right = -1,
    bottom = -1;
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

/**
 * Refresh the sponsors' entries in the auto-generated manifest, in place: drop
 * the files this script deleted, resize the ones it cropped, and slot the
 * renamed one back in alphabetically. Every other entry is left byte-identical
 * so the diff stays readable and optimize-images.mjs keeps owning them.
 */
async function updateManifest(sizes) {
  const source = await readFile(MANIFEST, 'utf8');
  const start = source.indexOf('= {') + 3;
  const end = source.lastIndexOf('};');
  const blocks = source
    .slice(start, end)
    .trim()
    .split(/(?<=\},)\n/)
    .map((block) => [block.match(/"([^"]+)"/)[1], block.replace(/^\s*/, '  ')]);

  const gone = new Set([
    ...FRAMER_ORIGINALS.map((f) => `/assets/images/${f}`),
    '/assets/images/sponsors/sponsor-allovoisins.png',
    '/assets/images/sponsors/sponsor-allovoisins.avif',
  ]);
  const entry = (path, { width, height }) =>
    `  "${path}": {\n    "width": ${width},\n    "height": ${height}\n  },`;

  const out = [];
  for (const [path, block] of blocks) {
    if (gone.has(path)) continue;
    const name = path.replace('/assets/images/sponsors/', '');
    out.push([path, sizes.has(name) ? entry(path, sizes.get(name)) : block]);
  }
  for (const [name, size] of sizes) {
    const path = `/assets/images/sponsors/${name}`;
    if (out.some(([p]) => p === path)) continue;
    const at = out.findIndex(([p]) => p > path);
    out.splice(at === -1 ? out.length : at, 0, [path, entry(path, size)]);
  }

  const body = out.map(([, block]) => block.replace(/,?$/, ',')).join('\n').replace(/,$/, '');
  await writeFile(MANIFEST, `${source.slice(0, start)}\n${body}\n${source.slice(end)}`);
}

async function run() {
  const ratios = [];
  const sizes = new Map();

  for (const [from, to] of LOGOS) {
    const src = join(DIR, from);
    const dest = join(DIR, to);
    // Re-run: the original name is gone, the logo already sits under its final one.
    const input = (await exists(src)) ? src : dest;

    if (to.endsWith('.svg')) {
      // Vector logos are already tightly cropped — just move them.
      const svg = await readFile(input);
      await writeFile(dest, svg);
      const { width, height } = await sharp(input).metadata();
      ratios.push([to, width / height, `${width}x${height}`]);
    } else {
      const box = await opaqueBox(input);
      const scale = Math.min(1, MAX_EDGE / Math.max(box.width, box.height));
      const out = { width: Math.round(box.width * scale), height: Math.round(box.height * scale) };
      const png = await sharp(input)
        .extract(box)
        .resize(out.width, out.height)
        .png({ compressionLevel: 9, palette: true })
        .toBuffer();
      await writeFile(dest, png);
      ratios.push([to, box.width / box.height, `${box.width}x${box.height}`]);
      sizes.set(to, out);
    }
    if (src !== dest) await rm(src);
  }

  for (const name of FRAMER_ORIGINALS) await rm(join(IMAGES, name));
  await rm(join(DIR, 'sponsor-allovoisins.avif')); // sibling of a file that no longer exists
  await updateManifest(sizes);

  console.log('\nratios to paste into src/data/sponsors.ts:\n');
  for (const [name, ratio, size] of ratios) {
    console.log(`  ${name.padEnd(44)} ratio: ${ratio.toFixed(2).padStart(5)}  (cropped ${size})`);
  }
}

run();
