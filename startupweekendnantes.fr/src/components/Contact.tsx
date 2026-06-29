import './Contact.css';
import { useState, type FormEvent } from 'react';
import { EDITION } from '../data/edition';

/**
 * Web3Forms access key. Set `PUBLIC_WEB3FORMS_KEY` in the environment to enable
 * AJAX submission (no backend needed — https://web3forms.com). When unset, the
 * form gracefully falls back to the native `mailto:` action.
 */
const ACCESS_KEY = import.meta.env.PUBLIC_WEB3FORMS_KEY as string | undefined;

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    // No key configured → let the browser handle the native mailto: action.
    if (!ACCESS_KEY) return;

    e.preventDefault();
    const form = e.currentTarget;
    setStatus('submitting');

    const data = new FormData(form);
    data.append('access_key', ACCESS_KEY);
    data.append('subject', 'Contact — Startup Weekend Nantes');

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: data,
      });
      if (res.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2 className="contact-heading">Nous Contacter</h2>
        <p className="contact-subtitle">Une question ? N'hésite pas à nous contacter</p>
        <form
          className="contact-form"
          action={`mailto:${EDITION.contactEmail}`}
          method="POST"
          onSubmit={handleSubmit}
        >
          <div className="form-row">
            <div className="form-field">
              <label htmlFor="contact-name" className="form-label">
                Prénom
              </label>
              <input
                id="contact-name"
                type="text"
                name="name"
                placeholder="Prénom"
                autoComplete="given-name"
                required
                className="form-input"
              />
            </div>
            <div className="form-field">
              <label htmlFor="contact-email" className="form-label">
                Email
              </label>
              <input
                id="contact-email"
                type="email"
                name="email"
                placeholder="Email"
                autoComplete="email"
                required
                className="form-input"
              />
            </div>
          </div>
          <div className="form-field">
            <label htmlFor="contact-message" className="form-label">
              Message
            </label>
            <textarea
              id="contact-message"
              name="message"
              placeholder="Message"
              required
              className="form-input form-textarea"
            />
          </div>
          <button type="submit" className="form-submit" disabled={status === 'submitting'}>
            {status === 'submitting' ? 'Envoi…' : 'Envoyer'}
          </button>
          <p className="form-status" role="status" aria-live="polite">
            {status === 'success' && 'Merci ! Votre message a bien été envoyé.'}
            {status === 'error' &&
              `Une erreur est survenue. Réessayez ou écrivez-nous à ${EDITION.contactEmail}.`}
          </p>
        </form>
      </div>
    </section>
  );
}
