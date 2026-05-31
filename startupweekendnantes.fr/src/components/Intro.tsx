import './Intro.css';

export default function Intro() {
  return (
    <section id="intro" className="intro-section">
      <div className="intro-images">
        <img
          src="https://framerusercontent.com/images/3icxBJ1CcHn6M34eovnFgccTZR0.jpg"
          alt="Participants au travail"
          className="intro-img intro-img-1"
        />
        <img
          src="https://framerusercontent.com/images/FS3ISXEUHf4xNgOzHz1v79bPNPo.jpg"
          alt="Moment de créativité"
          className="intro-img intro-img-2"
        />
      </div>

      <div className="intro-content">
        <h2>54 heures pour transformer ton idée en réalité 🚀</h2>
        <p>
          Au Startup Weekend Nantes, où les idées les plus folles deviennent des startups en une
          semaine.
        </p>
        <p>
          54 heures non-stop, tu vas vivre à 100 à l'heure, entouré de talents créatifs, d'experts
          prêts à révolutionner le monde avec toi. Développeurs, designers, marketeurs, entre
          autres — c'est l'endroit où tout peut arriver.
        </p>
        <p className="highlight">Tu as une idée ? Viens la tester.</p>
        <p>
          <strong>Pas d'idée, mais envie de créer ?</strong> Rejoins une équipe et participe à une
          aventure inoubliable.
        </p>
        <p>
          Pas de demi-mesure : ça va être <strong>légendaire 🔥</strong>
        </p>
      </div>
    </section>
  );
}
