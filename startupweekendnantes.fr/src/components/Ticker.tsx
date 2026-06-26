import './Ticker.css';

const ITEMS = [
  'PROBLEM DETECTED',
  '12 MISSIONS // OPEN',
  'PORTEURS DE PROBLÈMES',
  'ON NE PITCHE PAS DES IDÉES',
  'USER VALIDATED',
  'TROUVE LE BON PROBLÈME',
  '54H · 12 ÉQUIPES · 100 ÉQUIPIERS',
  '#SWNA2026',
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
