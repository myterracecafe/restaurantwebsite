import { createHash } from 'crypto';
import { BASE_URL } from '@/lib/seo';

// Agent Skills Discovery (Cloudflare RFC v0.2.0)
export const dynamic = 'force-static';

const sha256 = (s: string) => createHash('sha256').update(s).digest('hex');

export function GET() {
    const defs = [
        {
            name: 'view-menu',
            type: 'api',
            description: 'Browse the full My Terrace menu (Turkish breakfast, kebabs, seafood, meze, desserts).',
            url: `${BASE_URL}/api/public/menu`,
        },
        {
            name: 'search-menu',
            type: 'api',
            description: 'Search menu items by keyword.',
            url: `${BASE_URL}/api/public/menu/search`,
        },
        {
            name: 'check-hours',
            type: 'api',
            description: 'Get opening hours (every day 08:30–01:00).',
            url: `${BASE_URL}/api/public/hours`,
        },
        {
            name: 'get-directions',
            type: 'api',
            description: 'Get address, coordinates and directions to the rooftop in Sultanahmet.',
            url: `${BASE_URL}/api/public/info`,
        },
        {
            name: 'make-reservation',
            type: 'api',
            description: 'Get reservation channels (WhatsApp / phone) to book a table.',
            url: `${BASE_URL}/api/public/reservation`,
        },
        {
            name: 'mcp',
            type: 'mcp',
            description: 'Full read-only MCP server for menu, hours, location, reservations, FAQ and awards.',
            url: `${BASE_URL}/api/mcp`,
        },
    ];

    const skills = defs.map((d) => ({ ...d, sha256: sha256(JSON.stringify(d)) }));

    return new Response(
        JSON.stringify({ $schema: 'https://agentskills.io/schema/v0.2.0/index.json', skills }, null, 2),
        {
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
                'Access-Control-Allow-Origin': '*',
                'Cache-Control': 'public, max-age=86400',
            },
        },
    );
}
