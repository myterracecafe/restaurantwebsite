import { BASE_URL } from '@/lib/seo';
import { businessInfo, openingHours, menu, faq, awards, reservation } from '@/lib/business';

// Full LLM-readable snapshot, generated from the single source of truth.
export const dynamic = 'force-static';

export function GET() {
    const b = businessInfo('en');
    const h = openingHours();
    const m = menu('en');
    const f = faq('en');
    const a = awards('en');
    const r = reservation();

    const lines: string[] = [];
    lines.push('# My Terrace Cafe Restaurant — Full reference for LLMs', '');
    lines.push(`> ${b.description}. A casual all-day rooftop terrace in Sultanahmet, Istanbul with views of Hagia Sophia, the Blue Mosque and the Sea of Marmara.`, '');

    lines.push('## Facts');
    lines.push(`- Address: ${b.address}`);
    lines.push(`- Coordinates: ${b.geo.lat}, ${b.geo.lng}`);
    lines.push(`- Hours: ${h.text} (every day)`);
    lines.push(`- Phone / WhatsApp: ${b.phone}`);
    lines.push(`- Email: ${b.email}`);
    lines.push(`- Cuisines: ${b.cuisines.join(', ')}`);
    lines.push(`- Price range: ${b.priceRange} (${b.currency})`);
    lines.push(`- Halal: yes; vegetarian options available`);
    lines.push(`- Languages: ${b.languages.join(', ')}`);
    lines.push(`- Google: ${b.rating.google.value} (${b.rating.google.count}+ reviews) · Tripadvisor: ${b.rating.tripadvisor.value}`);
    lines.push('');

    lines.push('## Awards');
    a.forEach((x) => lines.push(`- ${x.organization}: ${x.award} (${x.year}) — ${x.detail}`));
    lines.push('');

    lines.push('## Menu (prices on request)');
    m.forEach((c) => {
        lines.push(`### ${c.category}`);
        c.items.forEach((i) => lines.push(`- ${i.name}: ${i.description}`));
        lines.push('');
    });

    lines.push('## FAQ');
    f.forEach((x) => lines.push(`### ${x.question}`, x.answer, ''));

    lines.push('## Reservations');
    lines.push(`- ${r.note}`);
    lines.push(`- WhatsApp: ${r.whatsapp}`);
    lines.push(`- Phone: ${r.phone}`, '');

    lines.push('## Links');
    lines.push(`- Website: ${BASE_URL}/en`);
    lines.push(`- Menu: ${BASE_URL}/en/menu`);
    lines.push(`- Public API: ${BASE_URL}/api/public`);
    lines.push(`- MCP: ${BASE_URL}/api/mcp`);
    lines.push(`- Maps: ${b.maps}`);

    return new Response(lines.join('\n'), {
        headers: { 'Content-Type': 'text/plain; charset=utf-8', 'Cache-Control': 'public, max-age=86400' },
    });
}
