import './OrgTeam.css';
import { orgs } from '../data/team';

export default function OrgTeam() {
  return (
    <section id="org-team" className="org-section">
      <div className="org-container">
        <h2>La team orga de choc</h2>
        <div className="org-grid">
          {orgs.map((m) => (
            <div key={m.name} className="org-card">
              <img src={m.img} alt={m.name} className="org-photo" loading="lazy" />
              <h3>{m.name}</h3>
              <p>{m.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
