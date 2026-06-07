import { NextRequest, NextResponse } from 'next/server';
import { BASE_URL } from '@/lib/seo';
import {
    businessInfo,
    openingHours,
    menu,
    searchMenu,
    faq,
    awards,
    reservation,
    publicBundle,
    normalizeLang,
} from '@/lib/business';

export const dynamic = 'force-dynamic';

const CORS = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Cache-Control': 'public, max-age=3600, s-maxage=86400',
};

export function OPTIONS() {
    return new NextResponse(null, { headers: CORS });
}

export async function GET(
    req: NextRequest,
    { params }: { params: Promise<{ path?: string[] }> },
) {
    const { path } = await params;
    const resource = path?.[0] ?? 'index';
    const sp = req.nextUrl.searchParams;
    const lang = normalizeLang(sp.get('lang') ?? undefined);

    const json = (data: unknown) => NextResponse.json(data, { headers: CORS });

    switch (resource) {
        case 'index':
            return json({
                name: 'My Terrace Cafe Restaurant — Public API',
                description: 'Read-only public data for AI agents and integrations. No auth required.',
                lang,
                endpoints: {
                    info: `${BASE_URL}/api/public/info?lang=${lang}`,
                    hours: `${BASE_URL}/api/public/hours`,
                    menu: `${BASE_URL}/api/public/menu?lang=${lang}`,
                    'menu/search': `${BASE_URL}/api/public/menu/search?q=kebab&lang=${lang}`,
                    faq: `${BASE_URL}/api/public/faq?lang=${lang}`,
                    awards: `${BASE_URL}/api/public/awards?lang=${lang}`,
                    reservation: `${BASE_URL}/api/public/reservation`,
                    all: `${BASE_URL}/api/public/all?lang=${lang}`,
                },
                openapi: `${BASE_URL}/openapi.json`,
                mcp: `${BASE_URL}/api/mcp`,
            });
        case 'info':
            return json(businessInfo(lang));
        case 'hours':
            return json(openingHours());
        case 'menu':
            if (path?.[1] === 'search') {
                return json({ query: sp.get('q') ?? '', results: searchMenu(sp.get('q') ?? '', lang) });
            }
            return json({ lang, menu: menu(lang) });
        case 'faq':
            return json({ lang, faq: faq(lang) });
        case 'awards':
            return json({ lang, awards: awards(lang) });
        case 'reservation':
            return json(reservation());
        case 'health':
            return json({ status: 'ok', service: 'my-terrace-public-api', version: '1.0.0' });
        case 'all':
            return json(publicBundle(lang));
        default:
            return NextResponse.json(
                { error: 'Unknown resource', see: `${BASE_URL}/api/public` },
                { status: 404, headers: CORS },
            );
    }
}
