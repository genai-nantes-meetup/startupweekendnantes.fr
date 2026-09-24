/**
 * Coachs, mentors, speakers et jury affichés dans la section « Mission control ».
 *
 * Source : base Notion « Coachs, mentors, jury, speakers » (vue SWNA 2026) — seuls
 * les profils au statut « Participation validée » / « Communication faite » sont
 * listés ici. Photos : champ Photo de Notion, sinon photo de profil LinkedIn,
 * recadrées en carré 600×600 dans `public/assets/images/speakers/prenom-nom.jpeg`.
 *
 * Le composant Team regroupe les cartes par `group` (ordre de `speakerGroups`) ;
 * dans un groupe, l'ordre de ce tableau = ordre d'affichage. Les noms servent aussi
 * de clé de jointure pour les créneaux de l'agenda (`edition_schedule.ts`).
 */

export type SpeakerGroupId = 'jury' | 'speaker' | 'coach' | 'mentor' | 'facilitateur';

export type SpeakerGroup = {
  id: SpeakerGroupId;
  label: string;
  desc: string;
  /** Grille repliée par défaut derrière un bouton « Voir » (groupes nombreux et secondaires). */
  collapsed?: boolean;
};

export type Speaker = {
  name: string;
  /** Poste @ structure. */
  role: string;
  img: string;
  group: SpeakerGroupId;
  /** Ce que la personne fait pendant le week-end (« Coach Tech », « Atelier IA »…). */
  mission: string;
  linkedin?: string;
};

export const speakerGroups: SpeakerGroup[] = [
  {
    id: 'jury',
    label: 'Jury',
    desc: 'Ils écoutent les pitchs du dimanche et désignent les équipes lauréates.',
  },
  {
    id: 'speaker',
    label: 'Speakers',
    desc: "Conférences, ateliers et retours d'expérience pour lancer chaque étape.",
  },
  {
    id: 'coach',
    label: 'Coachs',
    desc: 'Tech, design, business, pitch : ils passent dans les équipes pour les débloquer.',
  },
  {
    id: 'mentor',
    label: 'Mentors',
    desc: 'Entrepreneurs aguerris, ils suivent les équipes de bout en bout.',
  },
  {
    id: 'facilitateur',
    label: 'Facilitateurs',
    desc: 'Ils animent les temps forts et font tourner le week-end.',
    collapsed: true,
  },
];

export const speakers: Speaker[] = [
  // ── Jury ─────────────────────────────────────────────────────────
  {
    name: 'Franz Jarry',
    role: 'Directeur général @ ADN Ouest',
    img: '/assets/images/speakers/franz-jarry.jpeg',
    group: 'jury',
    mission: 'Jury',
    linkedin: 'https://www.linkedin.com/in/franz-jarry-a09b3410/',
  },
  {
    name: 'Mathilde Bour',
    role: 'Business Angel @ Femmes Business Angels',
    img: '/assets/images/speakers/mathilde-bour.jpeg',
    group: 'jury',
    mission: 'Jury',
    linkedin: 'https://www.linkedin.com/in/mathilde-bour-17912a3',
  },

  // ── Speakers ─────────────────────────────────────────────────────
  {
    name: 'Marie Louppe',
    role: 'Co-fondatrice @ Sylvie-René',
    img: '/assets/images/speakers/marie-louppe.jpeg',
    group: 'speaker',
    mission: 'REX équipe gagnante 2025',
    linkedin: 'https://www.linkedin.com/in/marielouppe/',
  },
  {
    name: 'Marion Guerchet',
    role: 'Directrice UX Research @ Jujotte',
    img: '/assets/images/speakers/marion-guerchet.jpeg',
    group: 'speaker',
    mission: 'Conférence User Tests',
    linkedin: 'https://www.linkedin.com/in/marion-guerchet-692abab/',
  },
  {
    name: 'Yannis Sulfourt',
    role: 'Designer spécialisé IA générative',
    img: '/assets/images/speakers/yannis-sulfourt.jpeg',
    group: 'speaker',
    mission: 'Atelier IA',
    linkedin: 'https://www.linkedin.com/in/yannissulfourt/',
  },

  // ── Coachs ───────────────────────────────────────────────────────
  {
    name: 'Benjamin Guillet',
    role: 'Customer Success Manager @ TGS France',
    img: '/assets/images/speakers/benjamin-guillet.jpeg',
    group: 'coach',
    mission: 'Coach Finance',
    linkedin: 'https://www.linkedin.com/in/benjamin-guillet-71275712b',
  },
  {
    name: 'Godefroy de Compreignac',
    role: 'CEO @ Lonestone',
    img: '/assets/images/speakers/godefroy-de-compreignac.jpeg',
    group: 'coach',
    mission: 'Coach Tech',
    linkedin: 'https://www.linkedin.com/in/godefroy',
  },
  {
    name: 'Jean de Maupeou',
    role: 'Directeur des partenariats @ Kelvin',
    img: '/assets/images/speakers/jean-de-maupeou.jpeg',
    group: 'coach',
    mission: 'Coach Biz Dev',
    linkedin: 'https://www.linkedin.com/in/jeandemaupeou/',
  },
  {
    name: 'Jordan Boutin',
    role: 'UX/UI Designer indépendant',
    img: '/assets/images/speakers/jordan-boutin.jpeg',
    group: 'coach',
    mission: 'Coach Design UX/UI',
    linkedin: 'https://www.linkedin.com/in/jordanboutin/',
  },
  {
    name: 'Lucie Valette',
    role: 'Coach prise de parole & Responsable coworking @ La Cantine French Tech',
    img: '/assets/images/speakers/lucie-valette.jpeg',
    group: 'coach',
    mission: 'Coach Pitch',
    linkedin: 'https://www.linkedin.com/in/lucievalette/',
  },
  {
    name: 'Mathieu Le Gac',
    role: 'CEO @ Wattflow & Co-fondateur @ _icilundi',
    img: '/assets/images/speakers/mathieu-le-gac.jpeg',
    group: 'coach',
    mission: 'Coach Biz Dev',
    linkedin: 'https://www.linkedin.com/in/mathieulegac',
  },
  {
    name: 'Mathilde Bermond',
    role: 'Coach pitch & posture indépendante',
    img: '/assets/images/speakers/mathilde-bermond.jpeg',
    group: 'coach',
    mission: 'Coach Posture',
    linkedin: 'https://www.linkedin.com/in/mathilde-uxdesigner/',
  },
  {
    name: 'Samuel Berthe',
    role: 'Software Engineer indépendant',
    img: '/assets/images/speakers/samuel-berthe.jpeg',
    group: 'coach',
    mission: 'Coach Tech',
    linkedin: 'https://www.linkedin.com/in/samuelberthe',
  },
  {
    name: 'Simon Timssale',
    role: 'Co-founder @ Explore the Vault',
    img: '/assets/images/speakers/simon-timssale.jpeg',
    group: 'coach',
    mission: 'Coach IA & Design',
    linkedin: 'https://www.linkedin.com/in/simon-timssale-bourrioux-746a1aa5/',
  },

  // ── Mentors ──────────────────────────────────────────────────────
  {
    name: 'Florian Hervéou',
    role: 'Co-fondateur @ Startup Palace',
    img: '/assets/images/speakers/florian-herveou.jpeg',
    group: 'mentor',
    mission: 'Mentor',
    linkedin: 'https://www.linkedin.com/in/florianherveou',
  },
  {
    name: 'Grégory Thibord',
    role: 'Co-fondateur @ Bon Air Club & _icilundi',
    img: '/assets/images/speakers/gregory-thibord.jpeg',
    group: 'mentor',
    mission: 'Mentor',
    linkedin: 'https://www.linkedin.com/in/gregorythibord',
  },

  // ── Facilitateurs ────────────────────────────────────────────────
  {
    name: 'Aurore Viaud',
    role: 'Directrice générale adjointe @ ADN Ouest',
    img: '/assets/images/speakers/aurore-viaud.jpeg',
    group: 'facilitateur',
    mission: 'Facilitatrice',
    linkedin: 'https://www.linkedin.com/in/aurore-viaud-a489024b/',
  },
  {
    name: 'Benjamin Communier',
    role: 'Program Manager @ Incubateur Kivo',
    img: '/assets/images/speakers/benjamin-communier.jpeg',
    group: 'facilitateur',
    mission: 'Facilitateur',
    linkedin: 'https://www.linkedin.com/in/benjamincommunier/',
  },
  {
    name: 'Clément Spiers',
    role: 'Marketing Lead @ Claap',
    img: '/assets/images/speakers/clement-spiers.jpeg',
    group: 'facilitateur',
    mission: 'Facilitateur',
    linkedin: 'https://www.linkedin.com/in/clementspiers/',
  },
  {
    name: 'Clémentine Guillaud',
    role: 'Ex-associée @ Fly The Nest',
    img: '/assets/images/speakers/clementine-guillaud.jpeg',
    group: 'facilitateur',
    mission: 'Facilitatrice',
    linkedin: 'https://www.linkedin.com/in/clementine-guillaud/',
  },
  {
    name: 'Erwann Rozier',
    role: 'Associé @ Fly The Nest',
    img: '/assets/images/speakers/erwann-rozier.jpeg',
    group: 'facilitateur',
    mission: 'Facilitateur',
    linkedin: 'https://www.linkedin.com/in/erwannrozier/',
  },
  {
    name: 'Hugues de Saint Vincent',
    role: 'Associé @ Avolaré',
    img: '/assets/images/speakers/hugues-de-saint-vincent.jpeg',
    group: 'facilitateur',
    mission: 'Facilitateur',
    linkedin: 'https://www.linkedin.com/in/hdesaintvincent/',
  },
  {
    name: 'Marc Guesneau',
    role: 'Directeur des opérations @ Intuiti',
    img: '/assets/images/speakers/marc-guesneau.jpeg',
    group: 'facilitateur',
    mission: 'Facilitateur',
    linkedin: 'https://www.linkedin.com/in/marc-guesneau/',
  },
  {
    name: 'Maxime Pitussi',
    role: 'Growth Outbound Specialist',
    img: '/assets/images/speakers/maxime-pitussi.jpeg',
    group: 'facilitateur',
    mission: 'Facilitateur',
    linkedin: 'https://www.linkedin.com/in/maximepitussi/',
  },
];
