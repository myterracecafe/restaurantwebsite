import { BASE_URL } from '@/lib/seo';
import { businessInfo, awards } from '@/lib/business';

// Concise llms.txt, generated from the single source of truth (no drift).
export const dynamic = 'force-static';

export function GET() {
    const b = businessInfo('en');
    const a = awards('en');

    const body = `# My Terrace Cafe Restaurant

> ${b.description}. A casual all-day rooftop terrace in Sultanahmet, Istanbul with panoramic views of Hagia Sophia, the Blue Mosque and the Sea of Marmara — Turkish breakfast, charcoal kebabs, fresh seafood, meze and hookah, at honest prices.

## Key facts
- Location: ${b.address} (coordinates ${b.geo.lat}, ${b.geo.lng}); ~8–10 min walk from Hagia Sophia and the Blue Mosque
- Hours: ${b.openingHours} every day
- Phone / WhatsApp: ${b.phone} · Email: ${b.email}
- Cuisines: ${b.cuisines.join(', ')} · Price: ${b.priceRange} (${b.currency}) · Halal: yes · Vegetarian options: yes
- Languages: ${b.languages.join(', ')}
- Ratings: Google ${b.rating.google.value} (${b.rating.google.count}+) · Tripadvisor ${b.rating.tripadvisor.value}
- Awards: ${a.map((x) => `${x.organization} — ${x.award}`).join('; ')}

## Pages
- Home: ${BASE_URL}/en
- Menu: ${BASE_URL}/en/menu
- About: ${BASE_URL}/en/about
- Gallery: ${BASE_URL}/en/gallery
- FAQ: ${BASE_URL}/en/faq
- Reservations: ${BASE_URL}/en/reservations
- Contact: ${BASE_URL}/en/contact

## Languages
- Turkish: ${BASE_URL}/tr
- English: ${BASE_URL}/en
- Arabic: ${BASE_URL}/ar
- German: ${BASE_URL}/de

## For agents
- Full reference: ${BASE_URL}/llms-full.txt
- Public API: ${BASE_URL}/api/public
- OpenAPI: ${BASE_URL}/openapi.json
- MCP server: ${BASE_URL}/api/mcp (card: ${BASE_URL}/.well-known/mcp/server-card.json)

## Optional
- Instagram: ${b.social.instagram}
- Facebook: ${b.social.facebook}
- Google Maps: ${b.maps}
`;

    return new Response(body, {
        headers: { 'Content-Type': 'text/plain; charset=utf-8', 'Cache-Control': 'public, max-age=86400' },
    });
}
