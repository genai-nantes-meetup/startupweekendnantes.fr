import './Venue.css';

const CDN = 'https://framerusercontent.com/images/';

const row1Photos = [
  { src: `${CDN}cq8ZzypnQ3B7cnq3vSe9YqtKZkc.jpeg`,  basis: 367 },
  { src: `${CDN}1MilzwluR4WPySgY1Nc71NA7z10.jpg`,    basis: 538 },
  { src: `${CDN}FS3ISXEUHf4xNgOzHz1v79bPNPo.jpg`,    basis: 367 },
  { src: `${CDN}LB31XkKlru3wRHoN0ROFW1Y1BE.jpeg`,    basis: 367 },
];

const row2Photos = [
  { src: `${CDN}8y7OL16jlkcxqLPypsoox88cM8.jpg`,     basis: 367 },
  { src: `${CDN}cQsYNI5NzBkgWVy7WotaBRZ21X8.jpg`,    basis: 367 },
  { src: `${CDN}FeaVRWV08CQHZHnzXhBakRt95o.jpg`,     basis: 915, panoramic: true },
];

export default function Venue() {
  return (
    <section id="venue" className="venue-section">
      <div className="venue-outer">
        <div className="venue-row venue-row-1">
          {row1Photos.map((photo, i) => (
            <div
              key={`r1-${i}`}
              className="venue-photo"
              style={{ flexBasis: photo.basis, flexShrink: 0, flexGrow: photo.basis === 538 ? 1 : 0 }}
            >
              <img src={photo.src} alt={`Le Palace Nantes ${i + 1}`} loading="lazy" />
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
              <img src={photo.src} alt={`Le Palace Nantes ${row1Photos.length + i + 1}`} loading="lazy" />
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
