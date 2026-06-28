import './Team.css';
import { speakers } from '../data/edition_speakers';

export default function Team() {
  return (
    <section id="team" className="team-section">
      <div className="team-container">
        <div className="team-header">
          <div className="team-header-title">
            <h2>Ils seront de la partie</h2>
          </div>
          <div className="team-header-desc">
            <p>Coachs, speakers ou jury, ils seront présents lors de l'événement</p>
          </div>
        </div>
        <div className="team-grid">
          {speakers.map((m) => (
            <div key={m.name} className="member-card">
              <img src={m.img} alt={m.name} className="member-photo" loading="lazy" />
              <div className="member-info">
                <h6>{m.name}</h6>
                <p>{m.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
