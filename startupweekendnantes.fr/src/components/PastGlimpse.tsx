import './PastGlimpse.css';
import { pastVideos } from '../data/past';

export default function PastGlimpse() {
  return (
    <section id="past" className="section past-section surface-dark tex">
      <div className="container past-container">
        <p className="kicker kicker--on-dark">✳ Archives</p>
        <h2 className="t-title past-title">Revivez les moments forts des précédentes éditions</h2>
        <div className="videos-grid">
          {pastVideos.map((video) => (
            <figure key={video.embedUrl} className="video-card">
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
              <figcaption className="t-mono video-label">▶ {video.label}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
