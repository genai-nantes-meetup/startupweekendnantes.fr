import { test } from '@playwright/test';
import { promises as fs } from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';
import type { Page } from '@playwright/test';

const LEGACY_URL = 'https://startupweekendnantes.fr';
const ASTRO_URL = 'http://localhost:4323';
const OUT = path.resolve('tests/__compare__');
const VIEWPORT = { width: 1280, height: 800 };

async function prepareDeterministic(page: Page) {
  // Disable all CSS animations/transitions and force IntersectionObserver to fire so
  // motion's whileInView and Framer scroll-triggered animations resolve immediately.
  // Also force any opacity/transform that Framer applies inline (via scroll-driven JS)
  // back to a visible state by appending a high-specificity override.
  await page.addInitScript(() => {
    const css = `*, *::before, *::after {
      animation-duration: 0s !important;
      animation-delay: 0s !important;
      transition-duration: 0s !important;
      transition-delay: 0s !important;
      scroll-behavior: auto !important;
    }`;
    const forceVisible = `[style*="opacity"], [style*="transform"], [data-framer-appear-id] {
      opacity: 1 !important;
      transform: none !important;
      visibility: visible !important;
      filter: none !important;
      clip-path: none !important;
    }`;
    const style = document.createElement('style');
    style.textContent = css + forceVisible;
    const inject = () => {
      document.head.appendChild(style);
      // Strip inline opacity/transform that Framer keeps writing on rAF.
      const strip = () => {
        document.querySelectorAll<HTMLElement>('[style]').forEach((el) => {
          const s = el.getAttribute('style')!;
          if (s.includes('opacity') || s.includes('transform') || s.includes('translate')) {
            el.style.opacity = '1';
            el.style.transform = 'none';
            el.style.visibility = 'visible';
          }
        });
      };
      strip();
      // Run again periodically to defeat any rAF/scroll loops that re-set styles.
      setInterval(strip, 100);
    };
    if (document.head) inject();
    else document.addEventListener('DOMContentLoaded', inject);

    const OriginalIO = window.IntersectionObserver;
    class FakeIO {
      private cb: IntersectionObserverCallback;
      constructor(cb: IntersectionObserverCallback) {
        this.cb = cb;
      }
      observe(el: Element) {
        const entry = {
          isIntersecting: true,
          intersectionRatio: 1,
          target: el,
          time: performance.now(),
          boundingClientRect: el.getBoundingClientRect(),
          intersectionRect: el.getBoundingClientRect(),
          rootBounds: null,
        } as IntersectionObserverEntry;
        this.cb([entry], this as unknown as IntersectionObserver);
      }
      unobserve() {}
      disconnect() {}
      takeRecords() {
        return [];
      }
    }
    (window as unknown as { IntersectionObserver: unknown }).IntersectionObserver =
      FakeIO as unknown as typeof OriginalIO;
  });
}

async function scrollThroughPage(page: Page) {
  // Trigger lazy-loaded images by scrolling progressively to the bottom.
  await page.evaluate(async () => {
    await new Promise<void>((resolve) => {
      let y = 0;
      const step = 600;
      const interval = setInterval(() => {
        window.scrollTo(0, y);
        y += step;
        if (y > document.documentElement.scrollHeight) {
          clearInterval(interval);
          window.scrollTo(0, 0);
          resolve();
        }
      }, 80);
    });
  });
  // Wait for any newly triggered network requests + image decodes.
  await page.waitForLoadState('networkidle');
  await page.evaluate(async () => {
    const imgs = Array.from(document.images);
    await Promise.all(
      imgs.map((img) =>
        img.complete
          ? Promise.resolve()
          : new Promise((res) => {
              img.onload = img.onerror = () => res(null);
            }),
      ),
    );
  });
  await page.waitForTimeout(500);
}

async function capture(page: Page, url: string, outPath: string) {
  await prepareDeterministic(page);
  await page.setViewportSize(VIEWPORT);
  await page.goto(url, { waitUntil: 'networkidle' });
  await scrollThroughPage(page);
  await page.screenshot({ path: outPath, fullPage: true, animations: 'disabled' });
}

async function makeSideBySide(legacyPath: string, astroPath: string, outPath: string) {
  const [legacy, astro] = await Promise.all([
    sharp(legacyPath).metadata(),
    sharp(astroPath).metadata(),
  ]);
  const targetHeight = Math.max(legacy.height!, astro.height!);
  const gap = 40;
  const labelHeight = 60;
  const w = VIEWPORT.width;

  const [legacyBuf, astroBuf] = await Promise.all([
    sharp(legacyPath).extend({
      bottom: targetHeight - legacy.height!,
      background: { r: 20, g: 20, b: 20, alpha: 1 },
    }).toBuffer(),
    sharp(astroPath).extend({
      bottom: targetHeight - astro.height!,
      background: { r: 20, g: 20, b: 20, alpha: 1 },
    }).toBuffer(),
  ]);

  const labelSvg = (text: string, width: number) => Buffer.from(
    `<svg width="${width}" height="${labelHeight}" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#000"/>
      <text x="20" y="38" font-family="system-ui, sans-serif" font-size="22" fill="#fff" font-weight="700">${text}</text>
    </svg>`,
  );

  const totalW = w * 2 + gap;
  const totalH = labelHeight + targetHeight;
  await sharp({
    create: {
      width: totalW,
      height: totalH,
      channels: 4,
      background: { r: 0, g: 0, b: 0, alpha: 1 },
    },
  })
    .composite([
      { input: labelSvg(`LEGACY (${legacy.height}px)`, w), left: 0, top: 0 },
      { input: labelSvg(`ASTRO  (${astro.height}px)`, w), left: w + gap, top: 0 },
      { input: legacyBuf, left: 0, top: labelHeight },
      { input: astroBuf, left: w + gap, top: labelHeight },
    ])
    .png()
    .toFile(outPath);
}

async function pixelDiff(legacyPath: string, astroPath: string, diffPath: string) {
  const legacy = sharp(legacyPath);
  const astro = sharp(astroPath);
  const [lm, am] = await Promise.all([legacy.metadata(), astro.metadata()]);
  const w = Math.min(lm.width!, am.width!);
  const h = Math.min(lm.height!, am.height!);

  const [legacyRaw, astroRaw] = await Promise.all([
    sharp(legacyPath).extract({ left: 0, top: 0, width: w, height: h }).removeAlpha().raw().toBuffer(),
    sharp(astroPath).extract({ left: 0, top: 0, width: w, height: h }).removeAlpha().raw().toBuffer(),
  ]);

  const diff = Buffer.alloc(legacyRaw.length);
  let diffPixels = 0;
  const total = w * h;
  for (let i = 0; i < legacyRaw.length; i += 3) {
    const dr = Math.abs(legacyRaw[i] - astroRaw[i]);
    const dg = Math.abs(legacyRaw[i + 1] - astroRaw[i + 1]);
    const db = Math.abs(legacyRaw[i + 2] - astroRaw[i + 2]);
    const isDiff = dr + dg + db > 48; // tolerance
    if (isDiff) {
      diffPixels++;
      diff[i] = 255;
      diff[i + 1] = 0;
      diff[i + 2] = 0;
    } else {
      diff[i] = 30;
      diff[i + 1] = 30;
      diff[i + 2] = 30;
    }
  }
  await sharp(diff, { raw: { width: w, height: h, channels: 3 } })
    .png()
    .toFile(diffPath);

  return {
    width: w,
    height: h,
    legacyHeight: lm.height!,
    astroHeight: am.height!,
    diffPixels,
    totalPixels: total,
    diffPercent: (diffPixels / total) * 100,
  };
}

test('full visual comparison legacy vs astro', async ({ page }) => {
  test.setTimeout(180_000);
  await fs.mkdir(OUT, { recursive: true });
  const legacyPath = path.join(OUT, 'legacy.png');
  const astroPath = path.join(OUT, 'astro.png');
  const sideBySide = path.join(OUT, 'side-by-side.png');
  const diffPath = path.join(OUT, 'diff.png');

  await capture(page, LEGACY_URL, legacyPath);
  await capture(page, ASTRO_URL, astroPath);
  await makeSideBySide(legacyPath, astroPath, sideBySide);
  const stats = await pixelDiff(legacyPath, astroPath, diffPath);

  const report = {
    legacy: legacyPath,
    astro: astroPath,
    sideBySide,
    diff: diffPath,
    ...stats,
    diffPercent: Number(stats.diffPercent.toFixed(2)),
    heightDelta: stats.astroHeight - stats.legacyHeight,
  };
  console.log('\nCOMPARE_REPORT=' + JSON.stringify(report, null, 2));
  await fs.writeFile(path.join(OUT, 'report.json'), JSON.stringify(report, null, 2));
});
