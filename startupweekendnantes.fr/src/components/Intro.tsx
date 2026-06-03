import './Intro.css';
import { topImages, bottomImages } from '../data/intro';

export default function Intro() {
  return (
    <section id="intro" className="intro-section">
      <div className="intro-container">
        <div className="intro-row intro-row-top">
          {topImages.map((img, i) => (
            <img
              key={img.src}
              src={img.src}
              alt={img.alt}
              className={`intro-img intro-img-${i + 1}`}
              loading="lazy"
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
            <img
              key={img.src}
              src={img.src}
              alt={img.alt}
              className={`intro-img intro-img-${i + 3}`}
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
