import './Venue.css';
import { venue, row1Photos, row2Photos } from '../data/venue';
import { EDITION } from '../data/edition';

const allPhotos = [...row1Photos, ...row2Photos];

export default function Venue() {
  return (
    <section id="venue" className="section venue-section surface-dark">
      <div className="container">
        <div className="venue-head">
          <div>
            <p className="kicker kicker--on-dark">✳ Base de mission · le lieu</p>
            <h2 className="t-title venue-title">
              {venue.name}
              <span className="venue-dot">.</span>
            </h2>
            <p className="t-body venue-desc">
              {venue.name}, {venue.streetAddress}, chez _icilundi. En plein centre de{' '}
              {venue.addressLocality}, accessible en tram, bus ou vélo. On démarre le vendredi à{' '}
              {EDITION.startTimeLabel} et on plie bagage le dimanche à {EDITION.endTimeLabel}.
            </p>
          </div>
          <div className="venue-meta">
            <span className="pill pill--ghost">
              📍 {venue.streetAddress}, {venue.addressLocality}
            </span>
            <span className="pill pill--ghost">Tram · Bus · Vélo</span>
            <span className="t-mono venue-coords">
              Ven. {EDITION.startTimeLabel} → Dim. {EDITION.endTimeLabel}
            </span>
          </div>
        </div>

        <div className="venue-gallery">
          {allPhotos.map((photo, i) => (
            <div
              key={photo.src}
              className={`venue-photo${photo.panoramic ? ' venue-photo--wide' : ''}`}
            >
              <img
                src={photo.src}
                alt={`${venue.name}, ${venue.addressLocality} — photo ${i + 1}`}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
