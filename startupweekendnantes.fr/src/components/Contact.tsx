import './Contact.css';
import { EDITION } from '../data/edition';

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2 className="contact-heading">Nous Contacter</h2>
        <p className="contact-subtitle">Une question ? N'hésite pas à nous contacter</p>
        <form
          className="contact-form"
          action={`mailto:${EDITION.contactEmail}`}
          method="POST"
        >
          <div className="form-row">
            <input type="text" name="name" placeholder="Prénom" required className="form-input" />
            <input type="email" name="email" placeholder="Email" required className="form-input" />
          </div>
          <textarea
            name="message"
            placeholder="Message"
            required
            className="form-input form-textarea"
          />
          <input type="submit" value="Send" className="form-submit" />
        </form>
      </div>
    </section>
  );
}
