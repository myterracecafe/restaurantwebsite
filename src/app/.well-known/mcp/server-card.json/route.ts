import { mcpServerCard, MCP_CARD_HEADERS } from '@/lib/mcp-card';

// MCP Server Card (discovery) — points to the live MCP endpoint at /api/mcp
export const dynamic = 'force-static';

export function GET() {
    return new Response(JSON.stringify(mcpServerCard(), null, 2), { headers: MCP_CARD_HEADERS });
}
