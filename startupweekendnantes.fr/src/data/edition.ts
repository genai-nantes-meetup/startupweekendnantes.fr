/**
 * Single source of truth for the current edition.
 *
 * To roll the site over to a new year, edit ONLY this file (and the data/ files
 * for people/sponsors/etc.). Everything else — Hero h1, Footer ©, Agenda day
 * labels, SEO meta, ticket URL — is derived from these constants.
 *
 * The agenda assumes a Friday→Sunday weekend; if a future edition starts on a
 * different day, update DAY_NAMES accordingly.
 */

const YEAR = 2026;
const START_DAY = 27;
const MONTH_TITLE = 'Novembre';
const MONTH_LOWER = 'novembre';
const EDITION_NUMBER = 17;
const DAY_NAMES = ['VENDREDI', 'SAMEDI', 'DIMANCHE'] as const;

const END_DAY = START_DAY + 2;

// Kickoff/wrap times — single source for both the ISO timestamps (schema/countdown)
// and the human-readable labels ("18h30"/"22h") shown on the page (e.g. Venue.tsx).
const START_HOUR = 18;
const START_MINUTE = 30;
const END_HOUR = 22;
const END_MINUTE = 0;
const frTime = (h: number, m: number) => `${h}h${m > 0 ? String(m).padStart(2, '0') : ''}`;

export const EDITION = {
  year: YEAR,
  // Pas d'archives 2025 : on renvoie vers les moments forts de l'édition 2024.
  pastYear: 2024,
  editionNumber: EDITION_NUMBER,

  startDay: START_DAY,
  endDay: END_DAY,
  month: MONTH_TITLE,

  /** Décollage : vendredi 27 nov. 2026, 18h30 (CET) — cible du compte à rebours. */
  startISO: `${YEAR}-11-${String(START_DAY).padStart(2, '0')}T${String(START_HOUR).padStart(2, '0')}:${String(START_MINUTE).padStart(2, '0')}:00+01:00`,
  /** Fin : dimanche 29 nov. 2026, 22h00 (CET) — consommé par le JSON-LD Event. */
  endISO: `${YEAR}-11-${String(END_DAY).padStart(2, '0')}T${String(END_HOUR).padStart(2, '0')}:${String(END_MINUTE).padStart(2, '0')}:00+01:00`,
  /** "18h30" — same instant as startISO, for prose (e.g. Venue.tsx). */
  startTimeLabel: frTime(START_HOUR, START_MINUTE),
  /** "22h" — same instant as endISO, for prose. */
  endTimeLabel: frTime(END_HOUR, END_MINUTE),
  /** "27.11.26" — estampille compacte du lancement pour la télémétrie. */
  launchStamp: `${String(START_DAY).padStart(2, '0')}.11.${String(YEAR).slice(2)}`,

  /** "Du 27/11 au 29/11" */
  dateRangeShort: `Du ${START_DAY}/11 au ${END_DAY}/11`,
  /** "Du 27 au 29 novembre" */
  dateRangeLong: `Du ${START_DAY} au ${END_DAY} ${MONTH_LOWER}`,
  /** "27 → 29 NOV 2026" — compact mono format for HUD / pills */
  dateRangeMono: `${START_DAY} → ${END_DAY} ${MONTH_TITLE.slice(0, 3).toUpperCase()} ${YEAR}`,

  /** Édition 2026 — thème "Houston, we have a problem!" (focus problème). */
  theme: 'Houston, we have a problem!',
  durationHours: 54,
  teamsCount: 12,
  participantsCount: 100,

  ticketUrl: `https://www.billetweb.fr/startup-weekend-nantes-${YEAR}`,
  contactEmail: 'team@naomakers.com',

  /** Used by Agenda.tsx — pre-built day headers, one per day. */
  agendaDays: DAY_NAMES.map((day, i) => ({
    date: `${START_DAY + i} ${MONTH_TITLE} ${YEAR}`,
    label: `JOUR ${i + 1}`,
    day,
  })),
} as const;
