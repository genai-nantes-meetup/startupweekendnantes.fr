import { useState } from 'react';
import './PastGlimpse.css';
import { pastVideos } from '../data/past';

const youtubeId = (embedUrl: string): string => embedUrl.split('/').pop() ?? '';

/**
 * Click-to-load facade: renders a thumbnail + play button instead of the YouTube
 * iframe until the visitor actually wants to watch. `loading="lazy"` on a real
 * <iframe> still fires early on throttled connections (Chrome's lazy-load distance
 * threshold grows on slow networks), so both embeds were loading ~1.9 MB of
 * YouTube's player JS/CSS on every page load regardless of whether the visitor
 * ever scrolled to this section — this facade only pays that cost on click.
 */
function VideoCard({ video }: { video: (typeof pastVideos)[number] }) {
  const [playing, setPlaying] = useState(false);
  const id = youtubeId(video.embedUrl);

  return (
    <figure className="video-card">
      <div className="video-wrapper">
        {playing ? (
          <iframe
            src={`${video.embedUrl}?autoplay=1`}
            title={video.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            className="video-facade"
            onClick={() => setPlaying(true)}
            aria-label={`Lire la vidéo : ${video.title}`}
          >
            <img
              src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
              alt=""
              width={480}
              height={360}
              loading="lazy"
              decoding="async"
            />
            <span className="video-play" aria-hidden="true">
              ▶
            </span>
          </button>
        )}
      </div>
      <figcaption className="t-mono video-label">▶ {video.label}</figcaption>
    </figure>
  );
}

export default function PastGlimpse() {
  return (
    <section id="past" className="section past-section surface-dark tex">
      <div className="container past-container">
        <p className="kicker kicker--on-dark">✳ Archives</p>
        <h2 className="t-title past-title">Revivez les moments forts des précédentes éditions</h2>
        <div className="videos-grid">
          {pastVideos.map((video) => (
            <VideoCard key={video.embedUrl} video={video} />
          ))}
        </div>
      </div>
    </section>
  );
}
