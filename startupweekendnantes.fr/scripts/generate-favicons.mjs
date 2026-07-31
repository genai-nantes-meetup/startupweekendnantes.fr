/**
 * One-off script (pas dans le build) : génère tous les PNG de favicon depuis
 * `public/favicon.svg` (astérisque de la DA sur fond prune).
 *
 *   node scripts/generate-favicons.mjs
 *
 * Sortie : favicon-16/32.png, apple-touch-icon.png, icons/icon-192/512.png.
 * Les variantes « pleines » (apple-touch + icônes PWA) retirent l'arrondi :
 * iOS et Android masquent eux-mêmes les coins.
 */
import sharp from 'sharp';
import { readFile, writeFile } from 'node:fs/promises';

const rounded = await readFile('public/favicon.svg');
const square = Buffer.from(rounded.toString().replace(' rx="20"', ''));

const targets = [
  ['public/favicon-16.png', rounded, 16],
  ['public/favicon-32.png', rounded, 32],
  ['public/apple-touch-icon.png', square, 180],
  ['public/icons/icon-192.png', square, 192],
  ['public/icons/icon-512.png', square, 512],
];

for (const [out, src, size] of targets) {
  const buf = await sharp(src, { density: 512 })
    .resize(size, size)
    .png({ compressionLevel: 9 })
    .toBuffer();
  await writeFile(out, buf);
  console.log(`${out} — ${size}px, ${buf.length} B`);
}
