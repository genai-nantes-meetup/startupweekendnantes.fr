import './Welcome.css';

export default function Welcome() {
  return (
    <section id="welcome" className="welcome-section">
      <div className="welcome-bg">
        <img
          src="/images/njJ5WEX0VG3pn7hDzt3SU9AGg.png"
          alt=""
          aria-hidden="true"
          className="welcome-bg-img"
        />
      </div>
      <div className="welcome-overlay" />
      <div className="welcome-content">
        <h2>Tout le monde est le bienvenu 🎉</h2>
        <p>
          Que tu sois étudiant, professionnel aguerri ou simplement passionné, Startup Weekend est
          un événement <strong>ouvert à tous</strong>.
        </p>
        <ul>
          <li>Entrepreneurs en herbe 🌱</li>
          <li>Designers, développeurs, marketeurs, chefs de projet 💡</li>
          <li>Experts en finance, communication, droit ou comptabilité 💼</li>
        </ul>
        <p className="tagline">Un seul objectif : créer, innover et s'éclater ensemble. 💥</p>
      </div>
    </section>
  );
}
