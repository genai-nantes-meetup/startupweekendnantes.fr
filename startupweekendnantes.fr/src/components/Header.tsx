import './Header.css';
import { EDITION } from '../data/edition';

export default function Header() {
  return (
    <header className="site-header">
      <a href="/" aria-label="Startup Weekend Nantes">
        <img
          src="/images/itdvMnDtbQRtWeHHjc1JZFdBDhM.png"
          alt="Techstars Startup Weekend Nantes"
          width="147"
          height="47"
          className="site-header-logo"
        />
      </a>
      <a
        href={EDITION.ticketUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-secondary site-header-cta"
      >
        Billetterie
      </a>
    </header>
  );
}
