import { BASE_URL } from './seo';

// Single source for the MCP server card (served at both
// /.well-known/mcp/server-card.json and /.well-known/mcp.json).
export function mcpServerCard() {
    return {
        $schema: 'https://modelcontextprotocol.io/schemas/draft/server.json',
        name: 'com.myterracecaferestaurant/public',
        title: 'My Terrace Cafe Restaurant',
        version: '1.0.0',
        description:
            'Read-only MCP server for My Terrace Cafe Restaurant (rooftop terrace, Sultanahmet, Istanbul): menu, hours, location, reservations, FAQ and awards.',
        websiteUrl: `${BASE_URL}/en`,
        protocolVersion: '2025-11-25',
        remotes: [{ type: 'streamable-http', url: `${BASE_URL}/api/mcp` }],
        capabilities: { tools: { listChanged: false } },
        authentication: { type: 'none' },
        documentation: `${BASE_URL}/openapi.json`,
    };
}

export const MCP_CARD_HEADERS = {
    'Content-Type': 'application/json; charset=utf-8',
    'Access-Control-Allow-Origin': '*',
    'Cache-Control': 'public, max-age=86400',
};
