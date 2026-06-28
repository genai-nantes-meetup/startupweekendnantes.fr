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

const DAYS = [21, 22, 23];
const DAY_NAMES = ['VENDREDI', 'SAMEDI', 'DIMANCHE'] as const;

export const EDITION = {
  year: 2025,
  pastYear: 2024,
  editionNumber: 16,

  startDay: 21,
  endDay: 23,
  month: 'Novembre',

  /** "Du 21/11 au 23/11" */
  dateRangeShort: `Du 21/11 au 23/11`,
  /** "Du 21 au 23 novembre" */
  dateRangeLong: `Du 21 au 23 novembre`,

  ticketUrl: `https://www.billetweb.fr/startup-weekend-nantes-2025`,
  contactEmail: 'maxime.pitussi@gmail.com',

  /** Used by Agenda.tsx — pre-built day headers, one per day. */
  agendaDays: [
    {
      date: `21 novembre 2025`,
      label: `JOUR 1`,
      day: 'VENDREDI',
    }, {
      date: `22 novembre 2025`,
      label: `JOUR 2`,
      day: 'SAMEDI',
    }, {
      date: `23 novembre 2025`,
      label: `JOUR 3`,
      day: 'DIMANCHE',
    }
  ],
} as const;
