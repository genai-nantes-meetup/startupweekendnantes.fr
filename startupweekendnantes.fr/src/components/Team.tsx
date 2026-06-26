import './Team.css';
import { members } from '../data/team';

export default function Team() {
  return (
    <section id="team" className="section team-section">
      <div className="container">
        <div className="team-header">
          <div>
            <p className="kicker">✳ Mission control</p>
            <h2 className="t-title team-title">Coachs, speakers &amp; jury</h2>
          </div>
          <p className="t-body team-desc">
            Ils seront présents tout le week-end pour débloquer les équipes.
          </p>
        </div>
        <div className="team-grid">
          {members.map((m) => (
            <article key={m.name} className="member-card">
              <div className="member-photo-wrap">
                <img src={m.img} alt={m.name} className="member-photo" loading="lazy" />
              </div>
              <div className="member-info">
                <h3 className="t-heading member-name">{m.name}</h3>
                <p className="t-mono member-role">{m.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
