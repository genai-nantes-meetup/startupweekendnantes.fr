import './RisoIllu.css';

type Subject = 'briefing' | 'console' | 'rocket' | 'moon';

/** Intrinsic pixel size of each riso-*.webp source (same for both surface variants, ±1px) — see public/assets/images/illus-riso/. */
const INTRINSIC_SIZE: Record<Subject, { width: number; height: number }> = {
  briefing: { width: 1000, height: 965 },
  console: { width: 1000, height: 837 },
  rocket: { width: 1000, height: 970 },
  moon: { width: 1000, height: 993 },
};

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
        width={INTRINSIC_SIZE[subject].width}
        height={INTRINSIC_SIZE[subject].height}
      />
    </figure>
  );
}
