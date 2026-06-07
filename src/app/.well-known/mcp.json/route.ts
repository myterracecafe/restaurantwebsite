import { mcpServerCard, MCP_CARD_HEADERS } from '@/lib/mcp-card';

// Aggregator-friendly alias of the MCP server card.
export const dynamic = 'force-static';

export function GET() {
    return new Response(JSON.stringify(mcpServerCard(), null, 2), { headers: MCP_CARD_HEADERS });
}
