import './RisoIllu.css';

type Subject = 'briefing' | 'console' | 'rocket' | 'moon';

type Props = {
  /** Sujet de l'illustration riso. */
  subject: Subject;
  /** Surface sur laquelle elle est posée — choisit la variante de couleur qui contraste. */
  surface: 'dark' | 'light';
  alt: string;
  /** Halo radial derrière l'illu. */
  glow?: 'bleu' | 'jaune' | 'none';
  /** Masque l'illu dans un médaillon circulaire (hublot de mission). */
  round?: boolean;
  className?: string;
  eager?: boolean;
};

export default function RisoIllu({
  subject,
  surface,
  alt,
  glow = 'bleu',
  round = false,
  className = '',
  eager = false,
}: Props) {
  return (
    <figure
      className={`riso ${className}`}
      data-surface={surface}
      data-glow={glow}
      data-round={round ? 'true' : undefined}
    >
      <span className="riso-glow" aria-hidden="true" />
      <img
        src={`/assets/images/illus-riso/riso-${subject}-on-${surface}.webp`}
        alt={alt}
        className="riso-img"
        loading={eager ? 'eager' : 'lazy'}
        decoding="async"
      />
    </figure>
  );
}
