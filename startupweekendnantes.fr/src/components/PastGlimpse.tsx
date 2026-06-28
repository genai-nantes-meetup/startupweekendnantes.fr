import './PastGlimpse.css';
import { EDITION } from '../data/edition';
import { pastEditions } from '../data/videos';

export default function PastGlimpse() {
  const pastEdition = pastEditions.find((e) => e.year === EDITION.pastYear) ?? pastEditions[0];
  return (
    <section id="past" className="past-section">
      <div className="past-container">
        <h2>Revivez les moments forts de l'édition {EDITION.pastYear} !</h2>
        <div className="videos-grid">
          {(pastEdition?.videos ?? []).map((video) => (
            <div key={video.embedUrl} className="video-card">
              <span className="video-label">{video.label}</span>
              <div className="video-wrapper">
                <iframe
                  src={video.embedUrl}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
