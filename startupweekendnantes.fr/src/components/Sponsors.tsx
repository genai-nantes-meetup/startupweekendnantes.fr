import './Sponsors.css';

const BASE = 'https://framerusercontent.com/images/';
const sponsors = [
  { name: 'Nantes Métropole', img: `${BASE}hEoUoeabKge2WBaQJP62xwnrEEQ.png` },
  { name: 'allovoisins', img: `${BASE}mowMp6Vf0kSPXZHQB9N5E.png` },
  { name: 'Ordre des Experts-Comptables', img: `${BASE}iTUR9jaNQ4EbeYEHbPH5vUWxRQ.svg` },
  { name: 'crisp', img: `${BASE}xgqZP9NFB8rOgqvLhHUkyDYRJYU.png` },
  { name: 'clever cloud', img: `${BASE}C7lvJXp3dybbCUCltGehqzDyw4.png` },
  { name: 'Guest Suite', img: `${BASE}f4AyPqq1hjMZxQxCR0mkLhZ7Q.png` },
  { name: 'kiliogene', img: `${BASE}2OyxeqKFVJBlpaZYbucB087OteU.png` },
  { name: 'Réseau Entreprendre Atlantique', img: `${BASE}44iQIZPqRkD7728oDk6fVdVgQ.png` },
  { name: 'Finalli', img: `${BASE}Q7FknPV2hRB0NaQJVTxDxhqy1ok.png` },
  { name: 'pépite Pays de la Loire', img: `${BASE}zql7stHN2Rthx6uOdsagCNhv2M.png` },
  { name: 'Arzel', img: `${BASE}0WtTlUnGSMQLo0YDGvoTdjyhMEc.png` },
  { name: 'icilundi', img: `${BASE}xbrzvOd572A3buGabxbYYWHMDTA.png` },
];

export default function Sponsors() {
  return (
    <section id="sponsors" className="sponsors-section">
      <div className="sponsors-container">
        <h2>Nos fervents partenaires</h2>
        <div className="sponsors-grid">
          {sponsors.map((s) => (
            <div key={s.name} className="sponsor-item">
              <img src={s.img} alt={s.name} loading="lazy" className="sponsor-logo" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
