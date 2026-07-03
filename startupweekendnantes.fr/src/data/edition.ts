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

export const EDITION = {
  year: YEAR,
  // Pas d'archives 2025 : on renvoie vers les moments forts de l'édition 2024.
  pastYear: 2024,
  editionNumber: EDITION_NUMBER,

  startDay: START_DAY,
  endDay: END_DAY,
  month: MONTH_TITLE,

  /** Décollage : vendredi 27 nov. 2026, 18h30 (CET) — cible du compte à rebours. */
  startISO: `${YEAR}-11-${String(START_DAY).padStart(2, '0')}T18:30:00+01:00`,
  /** "27.11.26" — estampille compacte du lancement pour la télémétrie. */
  launchStamp: `${String(START_DAY).padStart(2, '0')}.11.${String(YEAR).slice(2)}`,

  /** "Du 21/11 au 23/11" */
  dateRangeShort: `Du ${START_DAY}/11 au ${END_DAY}/11`,
  /** "Du 21 au 23 novembre" */
  dateRangeLong: `Du ${START_DAY} au ${END_DAY} ${MONTH_LOWER}`,
  /** "21 → 23 NOV 2026" — compact mono format for HUD / pills */
  dateRangeMono: `${START_DAY} → ${END_DAY} ${MONTH_TITLE.slice(0, 3).toUpperCase()} ${YEAR}`,

  /** Édition 2026 — thème "Houston, we have a problem!" (focus problème). */
  theme: 'Houston, we have a problem!',
  durationHours: 54,
  teamsCount: 12,
  participantsCount: 100,

  ticketUrl: `https://www.billetweb.fr/startup-weekend-nantes-${YEAR}`,
  contactEmail: 'florence@flythenest.io',

  /** Used by Agenda.tsx — pre-built day headers, one per day. */
  agendaDays: DAY_NAMES.map((day, i) => ({
    date: `${START_DAY + i} ${MONTH_TITLE} ${YEAR}`,
    label: `JOUR ${i + 1}`,
    day,
  })),
} as const;
