import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <a href="/" className="footer-logo">
          <img
            src="https://framerusercontent.com/images/itdvMnDtbQRtWeHHjc1JZFdBDhM.png"
            alt="Techstars Startup Weekend Nantes"
            width="180"
            height="58"
            className="footer-logo-img"
          />
        </a>
        <p className="footer-copy">© 2025 Startup Weekend Nantes — Tous droits réservés</p>
      </div>
    </footer>
  );
}
