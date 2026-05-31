import './Header.css';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex items-center justify-between">
      <a href="/" aria-label="Startup Weekend Nantes">
        <img
          src="https://framerusercontent.com/images/itdvMnDtbQRtWeHHjc1JZFdBDhM.png"
          alt="Techstars Startup Weekend Nantes"
          width="147"
          height="47"
          className="h-10 w-auto"
        />
      </a>
      <a
        href="https://www.billetweb.fr/startup-weekend-nantes-2025"
        target="_blank"
        rel="noopener noreferrer"
        className="btn-secondary text-sm"
      >
        Billetterie
      </a>
    </header>
  );
}
