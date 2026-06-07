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

const YEAR = 2025;
const START_DAY = 21;
const MONTH_TITLE = 'Novembre';
const MONTH_LOWER = 'novembre';
const EDITION_NUMBER = 16;
const DAY_NAMES = ['VENDREDI', 'SAMEDI', 'DIMANCHE'] as const;

const END_DAY = START_DAY + 2;

export const EDITION = {
  year: YEAR,
  pastYear: YEAR - 1,
  editionNumber: EDITION_NUMBER,

  startDay: START_DAY,
  endDay: END_DAY,
  month: MONTH_TITLE,

  /** "Du 21/11 au 23/11" */
  dateRangeShort: `Du ${START_DAY}/11 au ${END_DAY}/11`,
  /** "Du 21 au 23 novembre" */
  dateRangeLong: `Du ${START_DAY} au ${END_DAY} ${MONTH_LOWER}`,

  ticketUrl: `https://www.billetweb.fr/startup-weekend-nantes-${YEAR}`,
  contactEmail: 'maxime.pitussi@gmail.com',

  /** Used by Agenda.tsx — pre-built day headers, one per day. */
  agendaDays: DAY_NAMES.map((day, i) => ({
    date: `${START_DAY + i} ${MONTH_TITLE} ${YEAR}`,
    label: `JOUR ${i + 1}`,
    day,
  })),
} as const;
