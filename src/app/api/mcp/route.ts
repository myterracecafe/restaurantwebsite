import { NextRequest, NextResponse } from 'next/server';
import {
    businessInfo,
    openingHours,
    menu,
    searchMenu,
    faq,
    awards,
    reservation,
} from '@/lib/business';
import { logServerEvent } from '@/lib/server-events';

/**
 * Model Context Protocol (MCP) server over Streamable HTTP (JSON-RPC 2.0).
 * Read-only tools that let any MCP-capable AI agent answer questions about
 * My Terrace directly. No auth — all data is public.
 */
export const dynamic = 'force-dynamic';

const PROTOCOL_VERSION = '2025-11-25';
const SUPPORTED_VERSIONS = ['2025-11-25', '2025-06-18', '2025-03-26'];
const SERVER = {
    name: 'my-terrace-restaurant',
    title: 'My Terrace Cafe Restaurant',
    version: '1.0.0',
};

const CORS: Record<string, string> = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Mcp-Session-Id, Mcp-Protocol-Version',
};

const langProp = {
    lang: { type: 'string', enum: ['tr', 'en', 'ar', 'de', 'ru', 'es', 'fr'], description: 'Language (default tr)' },
};

type Tool = {
    name: string;
    description: string;
    inputSchema: object;
    run: (args: Record<string, unknown>) => unknown;
};

const TOOLS: Tool[] = [
    {
        name: 'get_business_info',
        description: 'Get core facts about My Terrace Cafe Restaurant: address, coordinates, phone/WhatsApp, cuisines, price range, ratings, languages, halal status and features.',
        inputSchema: { type: 'object', properties: { ...langProp } },
        run: (a) => businessInfo(a.lang as string),
    },
    {
        name: 'get_opening_hours',
        description: 'Get opening hours (open every day 08:30–01:00).',
        inputSchema: { type: 'object', properties: {} },
        run: () => openingHours(),
    },
    {
        name: 'get_menu',
        description: 'Get the full menu grouped by category (Turkish breakfast, kebabs, seafood, meze, desserts...). Dish names and descriptions; prices on request via the restaurant.',
        inputSchema: { type: 'object', properties: { ...langProp } },
        run: (a) => menu(a.lang as string),
    },
    {
        name: 'search_menu',
        description: 'Search menu items by keyword (e.g. "kebab", "vegetarian", "kahvaltı").',
        inputSchema: {
            type: 'object',
            properties: { query: { type: 'string', description: 'Search term' }, ...langProp },
            required: ['query'],
        },
        run: (a) => searchMenu(String(a.query ?? ''), a.lang as string),
    },
    {
        name: 'get_location_and_directions',
        description: 'Get address, coordinates, Google Maps link and a directions link. ~8–10 min walk from Hagia Sophia and the Blue Mosque.',
        inputSchema: { type: 'object', properties: {} },
        run: () => {
            const b = businessInfo();
            return { address: b.address, geo: b.geo, maps: b.maps, directions: b.directions, neighborhood: b.neighborhood };
        },
    },
    {
        name: 'get_reservation',
        description: 'Get how to reserve a table (WhatsApp / phone).',
        inputSchema: { type: 'object', properties: {} },
        run: () => reservation(),
    },
    {
        name: 'get_faq',
        description: 'Get frequently asked questions and answers (halal, view, breakfast, family-friendly, distance to landmarks...).',
        inputSchema: { type: 'object', properties: { ...langProp } },
        run: (a) => faq(a.lang as string),
    },
    {
        name: 'get_awards',
        description: 'Get awards and recognitions (Tripadvisor Travelers’ Choice, Restaurant Guru Top 100, GTE Awards) and ratings.',
        inputSchema: { type: 'object', properties: { ...langProp } },
        run: (a) => awards(a.lang as string),
    },
];

const ok = (id: unknown, result: unknown) => ({ jsonrpc: '2.0', id, result });
const err = (id: unknown, code: number, message: string) => ({ jsonrpc: '2.0', id, error: { code, message } });

function handle(msg: { jsonrpc?: string; id?: unknown; method?: string; params?: Record<string, unknown> }) {
    const { id, method, params } = msg;

    // Notifications (no id) — acknowledge with no response
    if (id === undefined || id === null) return null;

    switch (method) {
        case 'initialize': {
            const requested = params?.protocolVersion as string | undefined;
            const negotiated = requested && SUPPORTED_VERSIONS.includes(requested) ? requested : PROTOCOL_VERSION;
            return ok(id, {
                protocolVersion: negotiated,
                capabilities: { tools: { listChanged: false } },
                serverInfo: SERVER,
                instructions: 'Read-only tools for My Terrace Cafe Restaurant (rooftop terrace in Sultanahmet, Istanbul). Use them to answer questions about the menu, hours, location, reservations, FAQ and awards.',
            });
        }
        case 'ping':
            return ok(id, {});
        case 'tools/list':
            return ok(id, {
                tools: TOOLS.map((t) => ({
                    name: t.name,
                    description: t.description,
                    inputSchema: t.inputSchema,
                    annotations: { readOnlyHint: true, openWorldHint: false },
                })),
            });
        case 'tools/call': {
            const name = params?.name as string;
            const tool = TOOLS.find((t) => t.name === name);
            if (!tool) return err(id, -32602, `Unknown tool: ${name}`);
            void logServerEvent('agent_tool_call', { tool: name, source: 'mcp' }, 'mcp-agent');
            try {
                const data = tool.run((params?.arguments as Record<string, unknown>) ?? {});
                return ok(id, {
                    content: [{ type: 'text', text: JSON.stringify(data, null, 2) }],
                    structuredContent: data,
                    isError: false,
                });
            } catch (e) {
                return ok(id, { content: [{ type: 'text', text: `Error: ${String(e)}` }], isError: true });
            }
        }
        default:
            return err(id, -32601, `Method not found: ${method}`);
    }
}

export function OPTIONS() {
    return new NextResponse(null, { headers: CORS });
}

export function GET() {
    // Discovery convenience (real transport is POST JSON-RPC)
    return NextResponse.json(
        {
            transport: 'streamable-http',
            protocolVersion: PROTOCOL_VERSION,
            serverInfo: SERVER,
            usage: 'POST JSON-RPC 2.0: initialize, tools/list, tools/call',
            tools: TOOLS.map((t) => t.name),
        },
        { headers: CORS },
    );
}

export async function POST(req: NextRequest) {
    let body: unknown;
    try {
        body = await req.json();
    } catch {
        return NextResponse.json(err(null, -32700, 'Parse error'), { status: 400, headers: CORS });
    }

    if (Array.isArray(body)) {
        const responses = body.map(handle).filter((r) => r !== null);
        return NextResponse.json(responses, { headers: CORS });
    }

    const res = handle(body as Record<string, unknown>);
    if (res === null) return new NextResponse(null, { status: 202, headers: CORS });
    return NextResponse.json(res, { headers: CORS });
}
