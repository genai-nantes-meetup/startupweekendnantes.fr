/**
 * Programme of the weekend (3 days × N rows).
 *
 * Day headers (date, label, day) come from EDITION.agendaDays so they roll over
 * automatically with the year. Only the row content needs to be edited here.
 */

import { EDITION } from './edition';

export type Speaker = { name: string; img: string };
export type Row = {
  time: string;
  title: string;
  desc: string;
  speaker?: Speaker;
  speakers?: string[];
};
export type Day = {
  date: string;
  label: string;
  day: string;
  color: string;
  narrative: string;
  rows: Row[];
};

const dayColors = ['rgb(249, 211, 211)', 'rgb(211, 249, 216)', 'rgb(255, 249, 196)'];

// Narration de chaque jour (cadrage orga).
const dayNarratives = [
  'On se jette dans le bain',
  'On abat le boulot (et petite fiesta)',
  'On affine et on pitche',
];

const dayRows: Row[][] = [
  // JOUR 1 — Vendredi
  [
    { time: '18h', title: 'Accueil', desc: 'Enregistrement des participants et networking.' },
    {
      time: '19h',
      title: 'Pitchs des problèmes',
      desc: 'Chaque porteur de problème présente son problème en 60 secondes — pas de solution.',
    },
    {
      time: '20h',
      title: 'Vote',
      desc: "Les participants votent pour les problèmes qu'ils souhaitent attaquer.",
    },
    { time: '20h30', title: 'Repas', desc: 'Dîner ensemble.' },
    {
      time: '21h15',
      title: 'KEA sur le pitch et les startups',
      desc: 'Par Claire Bretton de Underdog',
      speaker: { name: 'Claire Bretton', img: '/images/8JSXibl4A4aZTwJgXOWiMm5Yio.jpeg' },
    },
    {
      time: '21h45',
      title: 'Formation des équipes',
      desc: "Après l'annonce des projets retenus, les participants rejoignent une équipe.",
    },
    {
      time: '22h30',
      title: 'Début du travail',
      desc: 'Les équipes découvrent leur espace de travail et démarrent le projet.',
    },
    {
      time: '1h',
      title: 'Fermeture des portes',
      desc: 'Les participants sont invités à rentrer chez eux pour ne pas se cramer.',
    },
  ],
  // JOUR 2 — Samedi
  [
    { time: '8h30', title: 'Petit déjeuner', desc: '' },
    {
      time: '9h',
      title: 'Lancement de la journée',
      desc: 'Agenda et grandes étapes de la journée.',
      speakers: [
        '/images/hnQXqgk32dqlRBwcUizHzN1Q.jpeg',
        '/images/ZxVXYgfcXSA9Icu75YPXMpFKm2Y.png',
      ],
    },
    {
      time: '9h15',
      title: 'Conférences : Marché + IA Générative',
      desc: 'Par Pauline Corriou et Simon Timssale',
      speakers: [
        '/images/VQm4I4LuWNHC0UemB1sslF3p8.jpeg',
        '/images/lyIwOv1puBWIqCuDn2zoYOXI9BY.jpeg',
      ],
    },
    { time: '9h45', title: 'Équipes au travail', desc: '' },
    { time: '12h30', title: 'Repas', desc: '' },
    {
      time: '14h',
      title: 'Coaching sessions',
      desc: 'Les coachs commencent à passer dans les équipes.',
    },
    { time: '20h', title: 'Repas du soir', desc: '' },
    { time: '22h', title: 'Fermeture des portes', desc: '' },
  ],
  // JOUR 3 — Dimanche
  [
    { time: '8h30', title: 'Petit déjeuner', desc: '' },
    { time: '9h', title: 'Help sessions', desc: 'Les coachs passent dans les équipes.' },
    { time: '12h', title: 'Repas', desc: '' },
    {
      time: '14h',
      title: 'Finalisation des pitchs',
      desc: 'Les équipes préparent leur présentation finale.',
    },
    {
      time: '16h',
      title: 'Pitch fire',
      desc: 'Chaque équipe présente son projet devant le jury.',
    },
    { time: '18h', title: 'Délibération du jury', desc: '' },
    {
      time: '18h30',
      title: 'Cérémonie de remise des prix',
      desc: `Le jury annonce les gagnants de l'édition ${EDITION.year}.`,
    },
    { time: '19h30', title: 'Fin de Startup Weekend', desc: '' },
  ],
];

export const days: Day[] = EDITION.agendaDays.map((d, i) => ({
  ...d,
  color: dayColors[i],
  narrative: dayNarratives[i],
  rows: dayRows[i],
}));
