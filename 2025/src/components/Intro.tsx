import './Intro.css';
import Picture from './Picture';

/** Intro section image rows (above and below the welcome paragraph). */
type IntroImage = { src: string; alt: string };

const topImages: IntroImage[] = [
  {
    src: '/assets/images/intro/intro-tshirt-bad-ideas-good-stories.jpg',
    alt: 'T-shirt « Bad Ideas, Good Stories » du Startup Weekend Nantes',
  },
  {
    src: '/assets/images/intro/event-pitch-speaker.jpg',
    alt: 'Participant présentant son idée lors des pitchs du Startup Weekend Nantes',
  },
];

const bottomImages: IntroImage[] = [
  {
    src: '/assets/images/intro/intro-team-brainstorming.jpg',
    alt: 'Équipe en brainstorming pendant le Startup Weekend Nantes',
  },
  {
    src: '/assets/images/intro/intro-group-photo.jpg',
    alt: 'Photo de groupe des participants au Startup Weekend Nantes',
  },
];

export default function Intro() {
  return (
    <section id="intro" className="intro-section">
      <div className="intro-container">
        <div className="intro-row intro-row-top">
          {topImages.map((img, i) => (
            <Picture
              key={img.src}
              src={img.src}
              alt={img.alt}
              className={`intro-img intro-img-${i + 1}`}
            />
          ))}
        </div>

        <div className="intro-content">
          <h2>54 heures pour transformer ton idée en réalité ! 🚀</h2>
          <p>
            Bienvenue au Startup Weekend Nantes, où les idées les plus folles deviennent des
            startups en un week-end.
          </p>
          <p>
            Le <strong>Startup Weekend</strong> est un format d'événement entrepreneurial reconnu
            mondialement&nbsp;: <strong>54 heures</strong>, du vendredi soir au dimanche, pour
            passer d'une simple idée à un prototype de startup. En équipe et accompagné de coachs et
            de mentors, tu valides un concept, construis un MVP, puis le présentes devant un jury de
            professionnels.
          </p>
          <p>
            Pendant 54 heures non-stop, tu vas vivre à 100 à l'heure, entouré de talents créatifs,
            d'experts et de passionnés, prêts à révolutionner le monde avec toi. Développeurs,
            designers, marketeurs, entrepreneurs : c'est l'endroit où tout peut arriver.
          </p>
          <p className="highlight">Tu as une idée ? Viens la tester.</p>
          <p>
            <strong>Pas d'idée, mais envie de créer ?</strong> Rejoins une équipe et participe à une
            aventure inoubliable.
          </p>
          <p>
            Pas de demi-mesure : ça va être <strong>légendaire</strong> ! 😎
          </p>
        </div>

        <div className="intro-row intro-row-bottom">
          {bottomImages.map((img, i) => (
            <Picture
              key={img.src}
              src={img.src}
              alt={img.alt}
              className={`intro-img intro-img-${i + 3}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
