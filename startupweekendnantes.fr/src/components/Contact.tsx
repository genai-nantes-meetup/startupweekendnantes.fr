import './Contact.css';
import { EDITION } from '../data/edition';
import RisoIllu from './ui/RisoIllu';

export default function Contact() {
  return (
    <section id="contact" className="section contact-section surface-dark">
      <div className="hud-grid" aria-hidden="true"></div>
      <div className="contact-container">
        <RisoIllu
          subject="console"
          surface="dark"
          glow="none"
          round
          alt="Un opérateur de mission à sa console, casque sur les oreilles"
          className="contact-console"
        />
        <p className="kicker kicker--on-dark">✳ Transmission</p>
        <h2 className="t-title contact-heading">Une question ? Contacte la base.</h2>
        <form className="contact-form" action={`mailto:${EDITION.contactEmail}`} method="POST">
          <div className="form-row">
            <div className="form-field">
              <label htmlFor="contact-name">Prénom</label>
              <input id="contact-name" type="text" name="name" required className="form-input" />
            </div>
            <div className="form-field">
              <label htmlFor="contact-email">Email</label>
              <input id="contact-email" type="email" name="email" required className="form-input" />
            </div>
          </div>
          <div className="form-field">
            <label htmlFor="contact-message">Ton message</label>
            <textarea
              id="contact-message"
              name="message"
              rows={4}
              required
              className="form-input form-textarea"
            ></textarea>
          </div>
          <button type="submit" className="btn btn--primary contact-submit">
            Transmettre →
          </button>
        </form>
      </div>
    </section>
  );
}
