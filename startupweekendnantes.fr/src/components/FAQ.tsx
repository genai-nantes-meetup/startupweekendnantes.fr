import './FAQ.css';
import { useState } from 'react';

const questions = [
  { q: "Puis-je pitcher une idée dont le projet a déjà débuté ?", a: "Oui, tu peux pitcher un projet en cours, tant qu'il n'est pas encore commercialisé. L'essentiel est de venir avec envie d'apprendre et de construire avec une équipe." },
  { q: "Dois-je avoir constitué mon équipe en amont du weekend ?", a: "Non ! La formation des équipes se fait lors de la soirée du vendredi, après les pitchs. Chacun rejoint l'équipe du projet qui l'attire le plus." },
  { q: "J'ai combien de temps pour présenter mon idée ?", a: "60 secondes chrono. Pas de slides, juste ta voix et ton énergie pour convaincre !" },
  { q: "Est-ce que je peux pitcher 2 idées ?", a: "Non, un participant = un pitch. Choisis celle qui te tient le plus à cœur !" },
  { q: "Est-ce que je peux prévoir des objets ou des slides ?", a: "Non, le pitch se fait à l'oral uniquement, sans support visuel. C'est le format imposé pour tout le monde." },
  { q: "Combien de projets sont sélectionnés ?", a: "En général entre 10 et 15 projets sont retenus par vote des participants, selon le nombre d'inscrits." },
  { q: "Que faire si mon idée n'est pas choisie ?", a: "Tu rejoins l'équipe d'un autre projet qui t'inspire ! C'est souvent là que naissent les meilleures collaborations." },
  { q: "Qu'est-ce que je dois emmener ?", a: "Ton laptop, ton chargeur, ta bonne humeur et de l'énergie pour 54h de création intensive." },
  { q: "Comment me rendre sur place ?", a: "Le Palace est situé en plein centre de Nantes, facilement accessible en tramway, bus ou vélo." },
  { q: "Est-ce que je peux rester dormir ?", a: "Non, l'hébergement n'est pas inclus. Des hôtels partenaires à tarif préférentiel sont disponibles à proximité." },
  { q: "Est-ce que je dois prévoir à manger ?", a: "Les repas du vendredi soir, samedi et dimanche sont inclus dans le billet. Il y a aussi du café et des snacks tout au long du weekend." },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="faq-section">
      <div className="faq-container">
        <h2>FAQ</h2>
        <div className="faq-list">
          {questions.map((item, i) => (
            <div key={i} className="faq-item">
              <button
                className="faq-question"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span>{item.q}</span>
                <span className={`faq-icon ${open === i ? 'faq-icon--open' : ''}`} aria-hidden="true">+</span>
              </button>
              {open === i && (
                <div className="faq-answer">
                  <p>{item.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
