/**
 * The single registry of advertised machine-readable endpoints.
 * `scripts/verify-agent-endpoints.mjs` asserts each returns 200 with valid
 * content so it is structurally impossible to advertise a 404ing endpoint.
 */
export const AGENT_ENDPOINTS = [
    '/robots.txt',
    '/sitemap.xml',
    '/feed.xml',
    '/llms.txt',
    '/llms-full.txt',
    '/humans.txt',
    '/ai.txt',
    '/openapi.json',
    '/manifest.webmanifest',
    '/icon.svg',
    '/.well-known/api-catalog',
    '/.well-known/security.txt',
    '/.well-known/mcp/server-card.json',
    '/.well-known/mcp.json',
    '/.well-known/agent-skills/index.json',
    '/api/public',
    '/api/public/info',
    '/api/public/hours',
    '/api/public/menu',
    '/api/public/menu/search?q=kebab',
    '/api/public/faq',
    '/api/public/awards',
    '/api/public/reservation',
    '/api/public/all',
    '/api/public/health',
    '/api/mcp',
] as const;
