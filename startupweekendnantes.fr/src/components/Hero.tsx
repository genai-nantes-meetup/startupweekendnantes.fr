import './Hero.css';

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-bg">
        <img
          src="https://framerusercontent.com/images/wMWsWm7njm6vmBfMVwkVaW4.png?width=1659&height=1361"
          alt=""
          aria-hidden="true"
          className="hero-bg-img"
        />
      </div>

      <div className="hero-container">
        <div className="hero-text">
          <h1>
            Startup Weekend
            <br />
            2025 🎉
          </h1>
          <p>
            <strong>Du 21/11 au 23/11</strong> : L'événement pour monter un projet et vivre en
            accéléré la création d'une startup, à Nantes.
          </p>
          <a
            href="https://www.billetweb.fr/startup-weekend-nantes-2025"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Je m'inscris maintenant
          </a>
        </div>

        <figure className="hero-image" aria-hidden="true">
          <img
            src="https://framerusercontent.com/images/oRq8HnnCP8CkxrvFeQvMp4tBA.png"
            alt="Participants au Startup Weekend"
            width="538"
            height="441"
          />
        </figure>

        <img
          src="https://framerusercontent.com/images/Zs0OyquSGNwZhNIZqYL3KdgW8Rs.svg?width=238&height=258"
          alt=""
          aria-hidden="true"
          className="hero-dots"
        />
        <img
          src="https://framerusercontent.com/images/QRQRAXnHu5ilXCmjG8WsfC9XA.svg?width=90&height=90"
          alt=""
          aria-hidden="true"
          className="hero-circle"
        />
      </div>
    </section>
  );
}
