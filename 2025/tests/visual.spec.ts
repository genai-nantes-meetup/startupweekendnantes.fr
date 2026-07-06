import { test, expect } from '@playwright/test';

const LEGACY_URL = 'https://startupweekendnantes.fr';
const ASTRO_URL = 'http://localhost:4323';

const SECTIONS = [
  { name: 'header', selector: 'header' },
  { name: 'hero', selector: '#hero' },
  { name: 'intro', selector: '#intro' },
  { name: 'welcome', selector: '#welcome' },
  { name: 'past', selector: '#past' },
  { name: 'team', selector: '#team' },
  { name: 'sponsors', selector: '#sponsors' },
  { name: 'pricing', selector: '#pricing' },
  { name: 'venue', selector: '#venue' },
  { name: 'agenda', selector: '#agenda' },
  { name: 'faq', selector: '#faq' },
  { name: 'org-team', selector: '#org-team' },
  { name: 'contact', selector: '#contact' },
  { name: 'footer', selector: 'footer' },
];

test.describe('Visual comparison — legacy vs Astro', () => {
  test('full page — legacy', async ({ page }) => {
    await page.goto(LEGACY_URL);
    await page.waitForLoadState('networkidle');
    await expect(page).toHaveScreenshot('legacy-full.png', { fullPage: true });
  });

  test('full page — astro', async ({ page }) => {
    await page.goto(ASTRO_URL);
    await page.waitForLoadState('networkidle');
    await expect(page).toHaveScreenshot('astro-full.png', { fullPage: true });
  });

  for (const section of SECTIONS) {
    test(`section ${section.name} — legacy`, async ({ page }) => {
      await page.goto(LEGACY_URL);
      await page.waitForLoadState('networkidle');
      const el = page.locator(section.selector).first();
      if (await el.isVisible()) {
        await expect(el).toHaveScreenshot(`legacy-${section.name}.png`);
      }
    });

    test(`section ${section.name} — astro`, async ({ page }) => {
      await page.goto(ASTRO_URL);
      await page.waitForLoadState('networkidle');
      const el = page.locator(section.selector).first();
      if (await el.isVisible()) {
        await expect(el).toHaveScreenshot(`astro-${section.name}.png`);
      }
    });
  }
});
