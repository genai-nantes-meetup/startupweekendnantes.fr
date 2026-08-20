import './Ticker.css';
import { EDITION } from '../data/edition';

const ITEMS = [
  'PROBLEM DETECTED',
  `${EDITION.teamsCount} MISSIONS // OPEN`,
  'PORTEURS DE PROBLÈMES',
  'ON NE PITCHE PAS DES IDÉES',
  'USER VALIDATED',
  'TROUVE LE BON PROBLÈME',
  `${EDITION.durationHours}H · ${EDITION.teamsCount} ÉQUIPES · ${EDITION.participantsCount} ÉQUIPIERS`,
  `#SWNA${EDITION.year}`,
];

export default function Ticker() {
  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker-track">
        {[0, 1].map((dup) => (
          <div className="ticker-group" key={dup}>
            {ITEMS.map((x) => (
              <span className="ticker-item t-mono" key={x}>
                ✳ {x}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
