import './Contact.css';

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2>Une question ? N'hésite pas à nous contacter</h2>
        <form className="contact-form" action="mailto:maxime.pitussi@gmail.com" method="GET">
          <div className="form-row">
            <input type="text" name="subject" placeholder="Prénom" required className="form-input" />
            <input type="email" name="email" placeholder="Email" required className="form-input" />
          </div>
          <textarea name="body" placeholder="Message" rows={5} required className="form-textarea" />
          <button type="submit" className="form-submit">
            Send
          </button>
        </form>
      </div>
    </section>
  );
}
