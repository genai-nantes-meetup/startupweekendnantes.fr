import './Agenda.css';

type Speaker = { name: string; img: string };
type Row = { time: string; title: string; desc: string; speaker?: Speaker; speakers?: string[] };
type Day = { date: string; label: string; day: string; color: string; rows: Row[] };

const days: Day[] = [
  {
    date: '21 Novembre 2025',
    label: 'JOUR 1',
    day: 'VENDREDI',
    color: '#fae01b',
    rows: [
      { time: '18h', title: 'Accueil', desc: 'Enregistrement des participants et networking.' },
      { time: '19h', title: 'Pitchs des idées', desc: "Chaque porteur d'idée présente son projet en 60 secondes." },
      { time: '20h', title: 'Vote', desc: "Les participants votent pour les idées qu'ils souhaitent développer." },
      { time: '20h30', title: 'Repas', desc: 'Dîner ensemble.' },
      { time: '21h15', title: 'KEA sur le pitch et les startups', desc: 'Par Claire Bretton de Underdog', speaker: { name: 'Claire Bretton', img: 'https://framerusercontent.com/images/QsZVf7HgM2bFcnXMjnoZj9lfudY.jpeg' } },
      { time: '21h45', title: 'Formation des équipes', desc: "Après l'annonce des projets retenus, les participants rejoignent une équipe." },
      { time: '22h30', title: 'Début du travail', desc: 'Les équipes découvrent leur espace de travail et démarrent le projet.' },
      { time: '1h', title: 'Fermeture des portes', desc: 'Les participants sont invités à rentrer chez eux pour ne pas se cramer.' },
    ],
  },
  {
    date: '22 Novembre 2025',
    label: 'JOUR 2',
    day: 'SAMEDI',
    color: '#2aebf5',
    rows: [
      { time: '8h30', title: 'Petit déjeuner', desc: '' },
      { time: '9h', title: 'Lancement de la journée', desc: 'Agenda et grandes étapes de la journée.', speakers: ['https://framerusercontent.com/images/hXxw44XRfD7QExm9wAo9ESWFyI.jpeg', 'https://framerusercontent.com/images/cCa01Jr6KZUDGU8OkU8loM1z0.jpg'] },
      { time: '9h15', title: 'Conférences : Marché + IA Générative', desc: 'Par Pauline Corriou et Simon Timssale', speakers: ['https://framerusercontent.com/images/sfniMLAtv98tHDMYDkETbcpvfak.jpeg', 'https://framerusercontent.com/images/lyIwOv1puBWIqCuDn2zoYOXI9BY.jpeg'] },
      { time: '9h45', title: 'Équipes au travail', desc: '' },
      { time: '12h30', title: 'Repas', desc: '' },
      { time: '14h', title: 'Coaching sessions', desc: 'Les coachs commencent à passer dans les équipes.' },
      { time: '20h', title: 'Repas du soir', desc: '' },
      { time: '22h', title: 'Fermeture des portes', desc: '' },
    ],
  },
  {
    date: '23 Novembre 2025',
    label: 'JOUR 3',
    day: 'DIMANCHE',
    color: '#fc233d',
    rows: [
      { time: '8h30', title: 'Petit déjeuner', desc: '' },
      { time: '9h', title: 'Help sessions', desc: 'Les coachs passent dans les équipes.' },
      { time: '12h', title: 'Repas', desc: '' },
      { time: '14h', title: 'Finalisation des pitchs', desc: 'Les équipes préparent leur présentation finale.' },
      { time: '16h', title: 'Pitch fire', desc: 'Chaque équipe présente son projet devant le jury.' },
      { time: '18h', title: 'Délibération du jury', desc: '' },
      { time: '18h30', title: 'Cérémonie de remise des prix', desc: 'Le jury annonce les gagnants de cette 16ème édition.' },
      { time: '19h30', title: 'Fin de Startup Weekend', desc: '' },
    ],
  },
];

export default function Agenda() {
  return (
    <section id="agenda" className="agenda-section">
      <div className="agenda-container">
        <h2>Agenda</h2>
        {days.map((day) => (
          <div key={day.label} className="agenda-day">
            <div className="day-header">
              <div className="day-meta">
                <span className="day-date">{day.date}</span>
                <strong className="day-label" style={{ color: day.color }}>{day.label}</strong>
              </div>
              <span className="day-name">{day.day}</span>
            </div>
            <table className="agenda-table">
              <thead>
                <tr style={{ background: day.color }}>
                  <th>Heure</th>
                  <th>Programme</th>
                  <th>Speakers</th>
                </tr>
              </thead>
              <tbody>
                {day.rows.map((row, j) => (
                  <tr key={j}>
                    <td className="time-cell">{row.time}</td>
                    <td className="prog-cell">
                      {row.title && <strong>{row.title}</strong>}
                      {row.desc && <span>{row.desc}</span>}
                    </td>
                    <td className="speaker-cell">
                      {row.speaker && (
                        <img src={row.speaker.img} alt={row.speaker.name} className="speaker-avatar" loading="lazy" />
                      )}
                      {row.speakers?.map((s) => (
                        <img key={s} src={s} alt="Speaker" className="speaker-avatar" loading="lazy" />
                      ))}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </section>
  );
}
