import './Team.css';

// Section masquée temporairement : l'équipage coachs/speakers/jury n'est pas
// encore calé. Les cartes + les données vivent dans data/edition_speakers.ts et la grille
// `.team-grid` reste stylée dans Team.css — il suffira de remettre le .map()
// (voir historique git) quand les profils seront confirmés.

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

        <div className="team-soon">
          <span className="team-soon-corner tl" aria-hidden="true"></span>
          <span className="team-soon-corner tr" aria-hidden="true"></span>
          <span className="team-soon-corner bl" aria-hidden="true"></span>
          <span className="team-soon-corner br" aria-hidden="true"></span>

          <p className="t-mono team-soon-label">
            <span className="team-soon-dot" aria-hidden="true"></span>
            Transmission en attente
          </p>
          <p className="t-title team-soon-title">Bientôt disponible</p>
          <p className="t-body team-soon-text">
            L'équipage de coachs, speakers et jury se constitue en ce moment même. Reviens vite :
            les profils seront dévoilés avant le décollage.
          </p>
        </div>
      </div>
    </section>
  );
}
