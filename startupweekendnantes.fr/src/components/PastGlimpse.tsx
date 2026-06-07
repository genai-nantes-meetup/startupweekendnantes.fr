import './PastGlimpse.css';
import { EDITION } from '../data/edition';
import { pastVideos } from '../data/past';

export default function PastGlimpse() {
  return (
    <section id="past" className="past-section">
      <div className="past-container">
        <h2>Revivez les moments forts de l'édition {EDITION.pastYear} !</h2>
        <div className="videos-grid">
          {pastVideos.map((video) => (
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
