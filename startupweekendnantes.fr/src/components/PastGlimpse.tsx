import './PastGlimpse.css';

export default function PastGlimpse() {
  return (
    <section id="past" className="past-section">
      <div className="past-container">
        <h2>Revivez les moments forts de l'édition 2024 !</h2>
        <div className="videos-grid">
          <div className="video-card">
            <span className="video-label">L'aftermovie</span>
            <div className="video-wrapper">
              <iframe
                src="https://www.youtube.com/embed/ol4yYOPwQF0"
                title="Aftermovie Startup Weekend Nantes 2024"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
          <div className="video-card">
            <span className="video-label">Les réactions</span>
            <div className="video-wrapper">
              <iframe
                src="https://www.youtube.com/embed/ZuHqOfZbAvg"
                title="Réactions Startup Weekend Nantes 2024"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
