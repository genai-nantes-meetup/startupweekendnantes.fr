import './Venue.css';
import { row1Photos, row2Photos } from '../data/venue';

const allPhotos = [...row1Photos, ...row2Photos];

export default function Venue() {
  return (
    <section id="venue" className="section venue-section surface-dark">
      <div className="container">
        <div className="venue-head">
          <div>
            <p className="kicker kicker--on-dark">✳ Base de mission · le lieu</p>
            <h2 className="t-title venue-title">
              Le Palace<span className="venue-dot">.</span>
            </h2>
            <p className="t-body venue-desc">
              Le Palace, 4 rue Voltaire, chez _icilundi. En plein centre de Nantes, accessible en
              tram, bus ou vélo. On démarre le vendredi à 18h30 et on plie bagage le dimanche à 22h.
            </p>
          </div>
          <div className="venue-meta">
            <span className="pill pill--ghost">📍 4 rue Voltaire, Nantes</span>
            <span className="pill pill--ghost">Tram · Bus · Vélo</span>
            <span className="t-mono venue-coords">Ven. 18h30 → Dim. 22h</span>
          </div>
        </div>

        <div className="venue-gallery">
          {allPhotos.map((photo, i) => (
            <div
              key={photo.src}
              className={`venue-photo${photo.panoramic ? ' venue-photo--wide' : ''}`}
            >
              <img src={photo.src} alt={`Le Palace, Nantes — photo ${i + 1}`} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
