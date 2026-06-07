import { NextRequest, NextResponse } from 'next/server';
import { logServerEvent } from '@/lib/server-events';

// First-party event ingestion (for server/agent/external callers). Forwards to
// GA4 Measurement Protocol when configured. Browser interactions use gtag directly.
export const dynamic = 'force-dynamic';

const CORS = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
};

export function OPTIONS() {
    return new NextResponse(null, { headers: CORS });
}

export async function POST(req: NextRequest) {
    let body: { event?: string; params?: Record<string, unknown>; clientId?: string } = {};
    try {
        body = await req.json();
    } catch {
        return new NextResponse(null, { status: 400, headers: CORS });
    }
    if (body.event) {
        await logServerEvent(body.event, body.params ?? {}, body.clientId ?? 'external');
    }
    return new NextResponse(null, { status: 204, headers: CORS });
}
