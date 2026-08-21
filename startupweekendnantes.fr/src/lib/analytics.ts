/**
 * Thin, framework-agnostic wrapper around PostHog. Application code must always
 * call `capture()` — never `window.posthog` directly — so tracking stays a safe
 * no-op before PostHog has loaded, in dev (where it's never initialized, see
 * Layout.astro), or when an ad-blocker has neutralized it.
 *
 * Event names follow the `snake_case` `object_action` convention (e.g.
 * `ticket_cta_clicked`). Keep this union in sync with the events actually fired
 * across the codebase — see the "Analytics" section in CLAUDE.md for the full list.
 */

declare global {
  interface Window {
    posthog?: {
      capture: (event: string, properties?: Record<string, unknown>) => void;
    };
  }
}

export type AnalyticsEvent =
  | 'ticket_cta_clicked'
  | 'nav_link_clicked'
  | 'contact_email_clicked'
  | 'social_link_clicked'
  | 'faq_item_opened'
  | 'video_recap_played';

export type AnalyticsProperties = Record<string, string | number | boolean>;

export function capture(event: AnalyticsEvent, properties?: AnalyticsProperties): void {
  try {
    window.posthog?.capture(event, properties);
  } catch {
    // Swallow — analytics must never break the page (blocked script, storage
    // access error in a locked-down browser, etc).
  }
}

const DATA_EVENT_ATTR = 'data-analytics-event';
const DATA_PROP_PREFIX = 'data-analytics-prop-';

let clickTrackingInitialized = false;

/**
 * Delegated click listener for components that render static (non-hydrated)
 * markup — Header, CtaBand, Pricing, Footer, Contact are plain Astro/HTML, so a
 * React `onClick` wouldn't fire there without adding a `client:*` directive to
 * each of them. A single document-level listener reads `data-analytics-event`
 * (+ `data-analytics-prop-*`) off the closest matching ancestor instead.
 *
 * Hydrated components with state already at hand (FAQ, PastGlimpse) call
 * `capture()` directly rather than going through data attributes.
 */
export function initClickTracking(): void {
  if (clickTrackingInitialized || typeof document === 'undefined') return;
  clickTrackingInitialized = true;

  document.addEventListener('click', (e) => {
    const target = e.target;
    if (!(target instanceof Element)) return;

    const el = target.closest<HTMLElement>(`[${DATA_EVENT_ATTR}]`);
    if (!el) return;

    const event = el.getAttribute(DATA_EVENT_ATTR) as AnalyticsEvent | null;
    if (!event) return;

    const properties: AnalyticsProperties = {};
    for (const { name, value } of Array.from(el.attributes)) {
      if (name.startsWith(DATA_PROP_PREFIX)) {
        properties[name.slice(DATA_PROP_PREFIX.length)] = value;
      }
    }

    capture(event, properties);
  });
}
