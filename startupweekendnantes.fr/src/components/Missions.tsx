import './Missions.css';
import { EDITION } from '../data/edition';
import MissionPatch from './ui/MissionPatch';

export default function Missions() {
  const patches = Array.from({ length: EDITION.teamsCount }, (_, i) => i + 1);
  return (
    <section id="missions" className="section missions-section">
      <div className="container">
        <div className="missions-head">
          <div>
            <p className="kicker">✳ {EDITION.teamsCount} missions</p>
            <h2 className="t-title missions-title">
              {EDITION.teamsCount} équipes,
              <br />
              {EDITION.teamsCount} problèmes à abattre.
            </h2>
          </div>
          <span className="t-mono missions-note">Chaque équipe reçoit son patch</span>
        </div>
        <div className="missions-grid">
          {patches.map((n) => (
            <MissionPatch key={n} n={n} size={180} className="mission-patch" />
          ))}
        </div>
      </div>
    </section>
  );
}
