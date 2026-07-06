/**
 * Patch de mission — 1 équipe = 1 patch. Reproduit le « Badge Lab » de la DA
 * Guillaume : sceau festonné (SVG paramétrique), disque + liseré, texte courbé,
 * orbite + astérisque ✳ centrale (le signal), ID problème.
 *
 * Chaque mission a sa propre combinaison de couleurs (palette officielle), pour
 * les différencier au premier coup d'œil. 12 schémas, indexés par n° de mission.
 */

const C = {
  P: '#512133', // prune
  PD: '#3A1623', // prune foncé
  J: '#F8F489', // jaune
  B: '#ABDCFF', // bleu
  CR: '#F4EEDB', // cream
  W: '#FFFFFF',
};

type Scheme = { seal: string; disc: string; accent: string; aster: string; top: string };

// accent = liseré + texte bas + orbite + ID problème ; top = texte du haut
const SCHEMES: Scheme[] = [
  { seal: C.B, disc: C.P, accent: C.J, aster: C.W, top: C.CR },
  { seal: C.J, disc: C.P, accent: C.B, aster: C.W, top: C.CR },
  { seal: C.P, disc: C.J, accent: C.P, aster: C.P, top: C.P }, // inversé · disque jaune
  { seal: C.B, disc: C.PD, accent: C.CR, aster: C.J, top: C.CR },
  { seal: C.J, disc: C.PD, accent: C.CR, aster: C.B, top: C.CR },
  { seal: C.P, disc: C.B, accent: C.P, aster: C.P, top: C.P }, // inversé · disque bleu
  { seal: C.B, disc: C.P, accent: C.CR, aster: C.J, top: C.CR },
  { seal: C.J, disc: C.P, accent: C.CR, aster: C.B, top: C.CR },
  { seal: C.PD, disc: C.J, accent: C.P, aster: C.P, top: C.P }, // inversé · disque jaune
  { seal: C.B, disc: C.PD, accent: C.J, aster: C.CR, top: C.CR },
  { seal: C.J, disc: C.PD, accent: C.B, aster: C.CR, top: C.CR },
  { seal: C.PD, disc: C.B, accent: C.P, aster: C.P, top: C.P }, // inversé · disque bleu
];

function sealPath(cx: number, cy: number, N: number, Rout: number, Rin: number): string {
  const pts: [number, number][] = [];
  const total = N * 2;
  const t = 1 / 6;
  for (let i = 0; i < total; i++) {
    const ang = (i / total) * Math.PI * 2 - Math.PI / 2;
    const r = i % 2 === 0 ? Rout : Rin;
    pts.push([cx + Math.cos(ang) * r, cy + Math.sin(ang) * r]);
  }
  const m = pts.length;
  let d = `M ${pts[0][0].toFixed(2)} ${pts[0][1].toFixed(2)} `;
  for (let i = 0; i < m; i++) {
    const p0 = pts[(i - 1 + m) % m];
    const p1 = pts[i];
    const p2 = pts[(i + 1) % m];
    const p3 = pts[(i + 2) % m];
    const c1 = [p1[0] + (p2[0] - p0[0]) * t, p1[1] + (p2[1] - p0[1]) * t];
    const c2 = [p2[0] - (p3[0] - p1[0]) * t, p2[1] - (p3[1] - p1[1]) * t];
    d += `C ${c1[0].toFixed(2)} ${c1[1].toFixed(2)} ${c2[0].toFixed(2)} ${c2[1].toFixed(2)} ${p2[0].toFixed(2)} ${p2[1].toFixed(2)} `;
  }
  return d + 'Z';
}

type Props = { n: number; size?: number; className?: string };

export default function MissionPatch({ n, size = 160, className }: Props) {
  const mm = String(n).padStart(2, '0');
  const pb = 'PB-' + String(700 + n * 6).padStart(4, '0');
  const seal = sealPath(130, 130, 10, 128, 128 * 0.84);
  const s = SCHEMES[(n - 1) % SCHEMES.length];
  const topId = `mt-${n}`;
  const botId = `mb-${n}`;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 260 260"
      className={className}
      aria-label={`Patch mission ${mm}`}
      role="img"
    >
      <defs>
        <path id={topId} d="M 64,130 A 66,66 0 0 1 196,130" fill="none" />
        <path id={botId} d="M 58,130 A 72,72 0 0 0 202,130" fill="none" />
      </defs>
      <path d={seal} fill={s.seal} />
      <circle cx="130" cy="130" r="92" fill={s.disc} />
      <circle cx="130" cy="130" r="82" fill="none" stroke={s.accent} strokeWidth="1.5" />
      <text
        fontFamily="'Space Mono',monospace"
        fontSize="11.5"
        fontWeight="700"
        fill={s.top}
        letterSpacing="0.4"
      >
        <textPath href={`#${topId}`} startOffset="50%" textAnchor="middle">
          STARTUP WEEKEND NANTES
        </textPath>
      </text>
      <text
        fontFamily="'Space Mono',monospace"
        fontSize="12.5"
        fontWeight="700"
        fill={s.accent}
        letterSpacing="3.5"
      >
        <textPath
          href={`#${botId}`}
          startOffset="50%"
          textAnchor="middle"
        >{`MISSION ${mm} · 2026`}</textPath>
      </text>
      <ellipse
        cx="130"
        cy="126"
        rx="44"
        ry="16"
        fill="none"
        stroke={s.accent}
        strokeWidth="2.5"
        transform="rotate(-20 130 126)"
      />
      <g transform="translate(130 126) scale(0.42)" fill={s.aster}>
        <rect x="-7.5" y="-50" width="15" height="100" />
        <rect x="-7.5" y="-50" width="15" height="100" transform="rotate(45)" />
        <rect x="-7.5" y="-50" width="15" height="100" transform="rotate(90)" />
        <rect x="-7.5" y="-50" width="15" height="100" transform="rotate(135)" />
      </g>
      <text
        x="130"
        y="166"
        textAnchor="middle"
        fontFamily="'Space Mono',monospace"
        fontSize="11"
        fontWeight="700"
        fill={s.accent}
        letterSpacing="2"
      >
        {pb}
      </text>
    </svg>
  );
}
