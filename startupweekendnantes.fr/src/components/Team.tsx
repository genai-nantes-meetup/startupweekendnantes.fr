import './Team.css';
import Picture from './Picture';
import { speakerGroups, speakers, type Speaker } from '../data/edition_speakers';

const pad = (n: number) => String(n).padStart(2, '0');

// Un bloc par groupe (jury, speakers, coachs, mentors) : en-tête à gauche,
// grille de cartes à droite. Toutes les cartes ont le même gabarit — photo
// carrée traitée en duotone (couleur au survol), mission, nom, poste. Les groupes
// `collapsed` (facilitateurs) sont repliés dans un <details> natif : pas d'hydratation.
const groups = speakerGroups
  .map((g) => ({ ...g, members: speakers.filter((s) => s.group === g.id) }))
  .filter((g) => g.members.length > 0);

export default function Team() {
  return (
    <section id="team" className="section team-section">
      <div className="container">
        <div className="team-header">
          <div>
            <p className="kicker">✳ Mission control</p>
            <h2 className="t-title team-title">Coachs, mentors, speakers &amp; jury</h2>
          </div>
          <div className="team-header-side">
            <p className="t-body team-desc">
              Ils seront présents tout le week-end pour débloquer les équipes.
            </p>
            <span className="t-mono team-count">{speakers.length} intervenant·es à bord</span>
          </div>
        </div>

        {groups.map((g, i) => (
          <div key={g.id} className={`team-group team-group--${g.id}`}>
            <header className="team-group-head">
              <span className="t-mono team-group-idx">
                {pad(i + 1)} / {pad(groups.length)}
              </span>
              <h3 className="t-heading team-group-label">{g.label}</h3>
              <p className="t-body team-group-desc">{g.desc}</p>
              <span className="t-mono team-group-count">
                {pad(g.members.length)} profil{g.members.length > 1 ? 's' : ''}
              </span>
            </header>

            {g.collapsed ? (
              <details className="team-toggle">
                <summary className="t-mono team-toggle-btn">
                  <span className="team-toggle-open">Voir les {g.members.length} profils</span>
                  <span className="team-toggle-close">Masquer</span>
                  <span className="team-toggle-icon" aria-hidden="true">
                    +
                  </span>
                </summary>
                <MemberGrid members={g.members} />
              </details>
            ) : (
              <MemberGrid members={g.members} />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

function MemberGrid({ members }: { members: Speaker[] }) {
  return (
    <ul className="team-grid">
      {members.map((s) => (
        <li key={s.name} className="member-card">
          <div className="member-photo-wrap">
            <Picture src={s.img} alt={s.name} className="member-photo" />
            <span className="t-mono member-mission">{s.mission}</span>
          </div>
          <div className="member-info">
            <h4 className="t-heading member-name">{s.name}</h4>
            <p className="member-role">{s.role}</p>
          </div>
          {s.linkedin && (
            <a
              className="member-link"
              href={s.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${s.name} sur LinkedIn`}
            >
              in
            </a>
          )}
        </li>
      ))}
    </ul>
  );
}
