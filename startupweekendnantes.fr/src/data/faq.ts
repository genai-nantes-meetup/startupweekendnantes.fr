/** FAQ items, displayed top-to-bottom in declaration order. */

export type Question = { q: string; a: string };

export const questions: Question[] = [
  {
    q: "J'ai déjà un projet en cours, je peux pitcher dessus ?",
    a: "On te le déconseille. Cette édition marche au problème, pas à la solution. Si tu arrives avec un projet déjà lancé, le risque c'est de rester accroché à ta solution plutôt que de la co-construire avec ton équipe. Le format fonctionne mieux si tu repars d'un problème brut, sans réponse toute faite en poche.",
  },
  {
    q: 'Dois-je avoir constitué mon équipe en amont du weekend ?',
    a: "Non ! La formation des équipes se fait lors de la soirée du vendredi, après les pitchs. Chacun rejoint l'équipe du problème qui l'attire le plus.",
  },
  {
    q: "J'ai combien de temps pour présenter mon problème ?",
    a: '60 secondes chrono. Pas de slides, juste ta voix et ton énergie pour convaincre !',
  },
  {
    q: 'Est-ce que je peux pitcher 2 problèmes ?',
    a: 'Non, un participant = un pitch. Choisis celui qui te tient le plus à cœur !',
  },
  {
    q: 'Est-ce que je peux prévoir des objets ou des slides ?',
    a: "Non, le pitch se fait à l'oral uniquement, sans support visuel. C'est le format imposé pour tout le monde.",
  },
  {
    q: 'Combien de problèmes sont sélectionnés ?',
    a: "En général entre 10 et 12 problèmes sont retenus par vote des participants, selon le nombre d'inscrits.",
  },
  {
    q: "Que faire si mon problème n'est pas retenu ?",
    a: "Tu rejoins l'équipe d'un autre problème qui t'inspire ! C'est souvent là que naissent les meilleures collaborations.",
  },
  {
    q: "Qu'est-ce que je dois emmener ?",
    a: "Ton laptop, ton chargeur, ta bonne humeur et de l'énergie pour 54h de création intensive.",
  },
  {
    q: 'Comment me rendre sur place ?',
    a: 'Le Palace est situé en plein centre de Nantes, facilement accessible en tramway, bus ou vélo.',
  },
  {
    q: 'Est-ce que je peux rester dormir ?',
    a: "Non, l'hébergement n'est pas inclus. Des hôtels partenaires à tarif préférentiel sont disponibles à proximité.",
  },
  {
    q: 'Est-ce que je dois prévoir à manger ?',
    a: 'Les repas du vendredi soir, samedi et dimanche sont inclus dans le billet. Il y a aussi du café et des snacks tout au long du weekend.',
  },
];
