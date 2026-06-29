/**
 * /llms.txt — machine-readable digest for AI answer engines (ChatGPT, Perplexity,
 * Google AI Overviews, Claude). Follows the llmstxt.org convention: an H1, a
 * blockquote summary, then plain-text factual sections an LLM can cite verbatim.
 *
 * Generated from the same `src/data/` modules as the site (no duplication), so it
 * rolls over with the edition automatically — never hardcode a date/price here.
 */

import type { APIRoute } from 'astro';
import { SITE } from '../data/site';
import { EDITION } from '../data/edition';
import { venue } from '../data/venue';
import { tiers } from '../data/edition_pricing';
import { speakers } from '../data/edition_speakers';
import { orgs } from '../data/team';
import { days } from '../data/edition_schedule';
import { questions } from '../data/faq';

const fullAddress = `${venue.name}, ${venue.streetAddress}, ${venue.postalCode} ${venue.addressLocality}, France`;
const dates = `${EDITION.dateRangeLong} ${EDITION.year}`;
const price = (t: (typeof tiers)[number]) =>
  `${t.pricePrefix ? t.pricePrefix + ' ' : ''}${t.price}`;

function build(): string {
  const lines: string[] = [];

  lines.push(`# ${SITE.name} ${EDITION.year}`);
  lines.push('');
  lines.push(
    `> ${EDITION.editionNumber}ᵉ édition du Startup Weekend Nantes : 54 heures pour transformer ` +
      `une idée en startup, en équipe, à Nantes. ${dates}, au ${venue.name} (${venue.addressLocality}).`
  );
  lines.push('');
  lines.push(
    `Le Startup Weekend Nantes est un week-end d'entrepreneuriat ouvert à tous (étudiants, ` +
      `développeurs, designers, marketeurs, porteurs de projet). Les participants pitchent une idée ` +
      `le vendredi soir, forment des équipes, puis construisent un prototype de startup en 54 heures, ` +
      `accompagnés de coachs et de mentors. Le dimanche, chaque équipe présente son projet devant un jury.`
  );
  lines.push('');

  // ── Faits clés (citables tels quels) ─────────────────────────────
  lines.push('## Informations clés');
  lines.push('');
  lines.push(`- **Événement** : ${SITE.name} ${EDITION.year} (${EDITION.editionNumber}ᵉ édition)`);
  lines.push(`- **Quoi** : 54 heures pour créer une startup en équipe, du pitch au prototype`);
  lines.push(`- **Quand** : ${dates}, du vendredi 18h au dimanche soir`);
  lines.push(`- **Où** : ${fullAddress}`);
  lines.push(`- **Ville** : Nantes (Pays de la Loire, France)`);
  lines.push(`- **Langue** : Français`);
  lines.push(`- **Pour qui** : ouvert à tous, aucune compétence préalable requise`);
  lines.push(`- **Billetterie** : ${EDITION.ticketUrl}`);
  lines.push(`- **Site officiel** : ${SITE.url}`);
  lines.push('');

  // ── Tarifs ───────────────────────────────────────────────────────
  lines.push('## Tarifs');
  lines.push('');
  for (const t of tiers) {
    lines.push(`- **${t.label}** — ${price(t)} : ${t.description}`);
  }
  lines.push('');

  // ── Programme ────────────────────────────────────────────────────
  lines.push('## Programme');
  lines.push('');
  for (const day of days) {
    lines.push(`### ${day.day} — ${day.date}`);
    for (const row of day.rows) {
      const desc = row.desc ? ` — ${row.desc}` : '';
      lines.push(`- ${row.time} : ${row.title}${desc}`);
    }
    lines.push('');
  }

  // ── Intervenants ─────────────────────────────────────────────────
  lines.push('## Coachs, speakers et jury');
  lines.push('');
  for (const s of speakers) {
    lines.push(`- ${s.name} — ${s.role}`);
  }
  lines.push('');

  // ── Organisation ─────────────────────────────────────────────────
  lines.push('## Équipe organisatrice');
  lines.push('');
  for (const o of orgs) {
    lines.push(`- ${o.name} — ${o.role}`);
  }
  lines.push('');

  // ── FAQ (Q&R complètes — très citables) ──────────────────────────
  lines.push('## Questions fréquentes');
  lines.push('');
  for (const item of questions) {
    lines.push(`### ${item.q}`);
    lines.push(item.a);
    lines.push('');
  }

  // ── Liens ────────────────────────────────────────────────────────
  lines.push('## Liens');
  lines.push('');
  lines.push(`- [Site officiel](${SITE.url})`);
  lines.push(`- [Inscription / billetterie](${EDITION.ticketUrl})`);
  lines.push(`- [LinkedIn](${SITE.linkedin})`);
  lines.push('');

  return lines.join('\n');
}

export const GET: APIRoute = () =>
  new Response(build(), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
