import { BASE_URL } from '@/lib/seo';

// RFC 9727 — API discovery via application/linkset+json
export const dynamic = 'force-static';

export function GET() {
    const linkset = {
        linkset: [
            {
                anchor: `${BASE_URL}/api/public`,
                'service-desc': [{ href: `${BASE_URL}/openapi.json`, type: 'application/json' }],
                'service-doc': [{ href: `${BASE_URL}/en`, type: 'text/html' }],
                'service-meta': [{ href: `${BASE_URL}/.well-known/mcp/server-card.json`, type: 'application/json' }],
                status: [{ href: `${BASE_URL}/api/public` }],
            },
        ],
    };
    return new Response(JSON.stringify(linkset, null, 2), {
        headers: {
            'Content-Type': 'application/linkset+json; charset=utf-8',
            'Access-Control-Allow-Origin': '*',
            'Cache-Control': 'public, max-age=86400',
        },
    });
}
