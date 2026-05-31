import './OrgTeam.css';

const CDN = 'https://framerusercontent.com/images/';
const orgs = [
  { name: 'Florence POYVRE', role: 'Co-Founder @Fly The Nest', img: `${CDN}CPPiPrmwNlBDD16ZjEsEp7jSOYQ.png` },
  { name: 'Robin GOUTARD', role: 'Consultant innovation @In Extenso', img: `${CDN}29nftr9xwtYw2wzRwUXbsYBA8Lw.png` },
  { name: 'Florian HERVÉOU', role: 'Head of Startup Programs @Startup Palace', img: `${CDN}vDdpuf0bvfUg1jOKqSriwoI8As.jpeg` },
  { name: 'Guillaume PARTHENAY', role: 'Responsable commercial & marketing @Jujotte', img: `${CDN}9yaN44IumqxW2zGrUItm4iU18.png` },
  { name: 'Louis AMMONIQUE', role: 'Growth Manager @kelvin', img: `${CDN}cjfdmDrvGd9wKFVkjxVAYft8Yg.png` },
  { name: 'Clara GARNIER', role: 'Fondatrice @Kidefeel', img: `${CDN}kprcfjkwgOzbgcID4jUNV5YNis.png` },
  { name: 'Romain PERRAUT', role: 'Head of Sales @_icilundi', img: `${CDN}eRSRmPp4xOQQD6xgxPzGxkwZ4.png` },
  { name: 'Ana PASCAUD', role: 'Fondatrice @SAWA', img: `${CDN}zrnozkkMGZmZ62YKvXWpLSdBMfE.png` },
  { name: 'Grégory THIBORD', role: 'CEO @_icilundi', img: `${CDN}afjyIBAmXZ8DGW3gvaIVbNIIoU.jpeg` },
];

export default function OrgTeam() {
  return (
    <section id="org-team" className="org-section">
      <div className="org-container">
        <h2>La team orga de choc</h2>
        <div className="org-grid">
          {orgs.map((m) => (
            <div key={m.name} className="org-card">
              <img src={m.img} alt={m.name} className="org-photo" loading="lazy" />
              <h3>{m.name}</h3>
              <p>{m.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
