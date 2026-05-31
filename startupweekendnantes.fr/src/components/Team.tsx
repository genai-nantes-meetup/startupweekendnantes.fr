import './Team.css';

const CDN = 'https://framerusercontent.com/images/';
const members = [
  { name: 'Thomas Matthieu', role: 'CEO @ Guest Suite', img: `${CDN}hXxw44XRfD7QExm9wAo9ESWFyI.jpeg` },
  { name: 'Claire Bretton', role: 'CEO @ Underdog', img: `${CDN}8JSXibl4A4aZTwJgXOWiMm5Yio.jpeg` },
  { name: 'Nicolas Laurent', role: 'Co-Directeur @ TiCO', img: `${CDN}sfniMLAtv98tHDMYDkETbcpvfak.jpeg` },
  { name: 'Johan Ricaut', role: 'CEO @ Shopopop', img: `${CDN}QsZVf7HgM2bFcnXMjnoZj9lfudY.jpeg` },
  { name: 'Eric Lebrette', role: 'Co-founder @ Direxter', img: `${CDN}vidXeHjc3C1LSKcrMy2PAH2oxCQ.jpeg` },
  { name: 'Benjamin Communier', role: 'Program Manager @ Centrale-Audencia-Ensa', img: `${CDN}Kb9qe3sHcAJx3Q5JAgWzIINlkI.jpeg` },
  { name: 'Vincent Roux', role: 'CEO @ GOUD Santé', img: `${CDN}O46nYIHhimV9ETWDlqrcx971ZiM.jpeg` },
  { name: 'Pauline Corriou', role: 'Lead User Researcher @ Imagination Machine', img: `${CDN}lyIwOv1puBWIqCuDn2zoYOXI9BY.jpeg` },
  { name: 'Florian Hervéou', role: 'Co-fondateur @ Startup Palace', img: `${CDN}vDdpuf0bvfUg1jOKqSriwoI8As.jpeg` },
  { name: 'Simon Timssale', role: 'Consultant en IA générative', img: `${CDN}VQm4I4LuWNHC0UemB1sslF3p8.jpeg` },
  { name: 'Benjamin Guillet', role: 'CSM @ TGS France', img: `${CDN}U5a4MBIv6ReTsrawoDNaPwK7cbc.png` },
  { name: 'Samuel Berthe', role: 'CTO', img: `${CDN}2o7PKySlJfnTfrnUJMjqKSpqHA.jpeg` },
  { name: 'Mathilde Bermond', role: 'Partenariats Entreprises @ Ecole de design', img: `${CDN}X4BtJgPPmF3pmQX6HxtFctIg.jpeg` },
  { name: 'Lucie Valette', role: 'Coach en prise de parole en public', img: `${CDN}QbK87ttZH4QcYXv2gmEfA19gJM.jpeg` },
];

export default function Team() {
  return (
    <section id="team" className="team-section">
      <div className="team-container">
        <div className="team-header">
          <div className="team-header-title">
            <h2>Ils seront de la partie</h2>
          </div>
          <div className="team-header-desc">
            <p>Coachs, speakers ou jury, ils seront présents lors de l'événement</p>
          </div>
        </div>
        <div className="team-grid">
          {members.map((m) => (
            <div key={m.name} className="member-card">
              <img src={m.img} alt={m.name} className="member-photo" loading="lazy" />
              <div className="member-info">
                <h6>{m.name}</h6>
                <p>{m.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
