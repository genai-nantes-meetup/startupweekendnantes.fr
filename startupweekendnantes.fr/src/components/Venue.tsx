import './Venue.css';

const CDN = 'https://framerusercontent.com/images/';
const photos = [
  `${CDN}cq8ZzypnQ3B7cnq3vSe9YqtKZkc.jpeg`,
  `${CDN}1MilzwluR4WPySgY1Nc71NA7z10.jpg`,
  `${CDN}LB31XkKlru3wRHoN0ROFW1Y1BE.jpeg`,
  `${CDN}8y7OL16jlkcxqLPypsoox88cM8.jpg`,
  `${CDN}cQsYNI5NzBkgWVy7WotaBRZ21X8.jpg`,
];

export default function Venue() {
  return (
    <section id="venue" className="venue-section">
      <div className="venue-grid">
        {photos.map((src, i) => (
          <div key={src} className={`venue-photo venue-photo-${i + 1}`}>
            <img src={src} alt={`Le Palace Nantes ${i + 1}`} loading="lazy" />
          </div>
        ))}
        <div className="venue-label">
          <h2>Le Lieu - Le Palace, Nantes</h2>
        </div>
      </div>
    </section>
  );
}
