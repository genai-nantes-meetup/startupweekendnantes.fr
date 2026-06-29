import './Venue.css';
import Picture from './Picture';
import { row1Photos, row2Photos } from '../data/venue';

export default function Venue() {
  return (
    <section id="venue" className="venue-section">
      <div className="venue-outer">
        <div className="venue-row venue-row-1">
          {row1Photos.map((photo, i) => (
            <div
              key={`r1-${i}`}
              className="venue-photo"
              style={{
                flexBasis: photo.basis,
                flexShrink: 0,
                flexGrow: photo.basis === 538 ? 1 : 0,
              }}
            >
              <Picture
                src={photo.src}
                alt={`Le Palace, lieu du Startup Weekend Nantes — photo ${i + 1}`}
              />
            </div>
          ))}
        </div>
        <div className="venue-row venue-row-2">
          {row2Photos.map((photo, i) => (
            <div
              key={`r2-${i}`}
              className="venue-photo"
              style={{ flexBasis: photo.basis, flexShrink: 0, flexGrow: photo.panoramic ? 1 : 0 }}
            >
              <Picture
                src={photo.src}
                alt={`Le Palace, lieu du Startup Weekend Nantes — photo ${row1Photos.length + i + 1}`}
              />
            </div>
          ))}
          <div className="venue-label">
            <h2>Le Lieu - Le Palace, Nantes</h2>
          </div>
        </div>
      </div>
    </section>
  );
}
