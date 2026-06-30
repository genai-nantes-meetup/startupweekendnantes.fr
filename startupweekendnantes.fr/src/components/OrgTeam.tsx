import './OrgTeam.css';
import { orgs } from '../data/orgs';

export default function OrgTeam() {
  return (
    <section id="org-team" className="section org-section">
      <div className="container">
        <div className="org-head">
          <div>
            <p className="kicker">✳ Mission control crew</p>
            <h2 className="t-title org-title">La team orga</h2>
          </div>
          <span className="t-mono org-count">{orgs.length} à la barre</span>
        </div>
        <div className="org-grid">
          {orgs.map((m, i) => (
            <article key={m.name} className="org-card">
              <img src={m.img} alt={m.name} className="org-photo" loading="lazy" />
              <span className="t-mono org-id">CREW-{String(i + 1).padStart(2, '0')}</span>
              <div className="org-info">
                <h3 className="t-heading org-name">{m.name}</h3>
                <p className="org-role">{m.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
