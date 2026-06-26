/**
 * Tampon « WANTED » — avis de recherche pour le CTA.
 * Réutilise le langage du MissionPatch (sceau festonné paramétrique + texte
 * courbé), mais en tampon monochrome : « recherchés » = wanted.
 */

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

function Aster({ x, y, s, color }: { x: number; y: number; s: number; color: string }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`} fill={color}>
      <rect x="-7.5" y="-50" width="15" height="100" />
      <rect x="-7.5" y="-50" width="15" height="100" transform="rotate(45)" />
      <rect x="-7.5" y="-50" width="15" height="100" transform="rotate(90)" />
      <rect x="-7.5" y="-50" width="15" height="100" transform="rotate(135)" />
    </g>
  );
}

type Props = { size?: number; className?: string; color?: string };

export default function WantedBadge({ size = 210, className, color = '#512133' }: Props) {
  const seal = sealPath(130, 130, 14, 125, 125 * 0.93);
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 260 260"
      className={className}
      role="img"
      aria-label="Avis de recherche : porteurs de problèmes recherchés"
    >
      <defs>
        <path id="wb-top" d="M 52,130 A 78,78 0 0 1 208,130" fill="none" />
        <path id="wb-bot" d="M 56,130 A 74,74 0 0 0 204,130" fill="none" />
      </defs>

      {/* sceau festonné + anneau intérieur */}
      <path d={seal} fill="none" stroke={color} strokeWidth="3" />
      <circle cx="130" cy="130" r="99" fill="none" stroke={color} strokeWidth="1.5" />

      {/* texte courbé haut / bas */}
      <text
        fontFamily="'Space Mono',monospace"
        fontSize="12"
        fontWeight="700"
        fill={color}
        letterSpacing="1.5"
      >
        <textPath href="#wb-top" startOffset="50%" textAnchor="middle">
          PORTEURS DE PROBLÈMES
        </textPath>
      </text>
      <text
        fontFamily="'Space Mono',monospace"
        fontSize="11"
        fontWeight="700"
        fill={color}
        letterSpacing="3"
      >
        <textPath href="#wb-bot" startOffset="50%" textAnchor="middle">
          SWNA · 2026 · NANTES
        </textPath>
      </text>

      {/* séparateurs latéraux */}
      <Aster x={42} y={130} s={0.12} color={color} />
      <Aster x={218} y={130} s={0.12} color={color} />

      {/* cœur du tampon */}
      <Aster x={130} y={101} s={0.16} color={color} />
      <text
        x="130"
        y="158"
        textAnchor="middle"
        fontFamily="'Cal Sans','Funnel Display',sans-serif"
        fontSize="50"
        fontWeight="800"
        fill={color}
        letterSpacing="1"
      >
        WANTED
      </text>
      <text
        x="130"
        y="180"
        textAnchor="middle"
        fontFamily="'Space Mono',monospace"
        fontSize="12"
        fontWeight="700"
        fill={color}
        letterSpacing="5"
      >
        RECHERCHÉS
      </text>
    </svg>
  );
}
