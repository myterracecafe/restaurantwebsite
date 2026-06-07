import { BASE_URL } from '@/lib/seo';

export const dynamic = 'force-static';

export function GET() {
    const spec = {
        openapi: '3.1.1',
        security: [],
        info: {
            title: 'My Terrace Cafe Restaurant — Public API',
            version: '1.0.0',
            description:
                'Read-only public data (info, hours, menu, FAQ, awards, reservation) for AI agents and integrations. No authentication required.',
            contact: { name: 'My Terrace Cafe Restaurant', url: BASE_URL, email: 'info@myterracecaferestaurant.com' },
        },
        servers: [{ url: BASE_URL }],
        paths: {
            '/api/public/info': {
                get: {
                    summary: 'Business info',
                    parameters: [{ name: 'lang', in: 'query', schema: { type: 'string', enum: ['tr', 'en', 'ar', 'de', 'ru', 'es', 'fr']} }],
                    responses: { '200': { description: 'Business facts' } },
                },
            },
            '/api/public/hours': { get: { summary: 'Opening hours', responses: { '200': { description: 'Hours' } } } },
            '/api/public/menu': {
                get: {
                    summary: 'Full menu',
                    parameters: [{ name: 'lang', in: 'query', schema: { type: 'string', enum: ['tr', 'en', 'ar', 'de', 'ru', 'es', 'fr']} }],
                    responses: { '200': { description: 'Menu by category' } },
                },
            },
            '/api/public/menu/search': {
                get: {
                    summary: 'Search menu',
                    parameters: [
                        { name: 'q', in: 'query', required: true, schema: { type: 'string' } },
                        { name: 'lang', in: 'query', schema: { type: 'string', enum: ['tr', 'en', 'ar', 'de', 'ru', 'es', 'fr']} },
                    ],
                    responses: { '200': { description: 'Matching items' } },
                },
            },
            '/api/public/faq': {
                get: {
                    summary: 'FAQ',
                    parameters: [{ name: 'lang', in: 'query', schema: { type: 'string', enum: ['tr', 'en', 'ar', 'de', 'ru', 'es', 'fr']} }],
                    responses: { '200': { description: 'Questions & answers' } },
                },
            },
            '/api/public/awards': {
                get: {
                    summary: 'Awards & ratings',
                    parameters: [{ name: 'lang', in: 'query', schema: { type: 'string', enum: ['tr', 'en', 'ar', 'de', 'ru', 'es', 'fr']} }],
                    responses: { '200': { description: 'Awards' } },
                },
            },
            '/api/public/reservation': { get: { summary: 'Reservation channels', responses: { '200': { description: 'WhatsApp/phone' } } } },
            '/api/public/all': {
                get: {
                    summary: 'Everything in one payload',
                    parameters: [{ name: 'lang', in: 'query', schema: { type: 'string', enum: ['tr', 'en', 'ar', 'de', 'ru', 'es', 'fr']} }],
                    responses: { '200': { description: 'Full bundle' } },
                },
            },
        },
    };

    return new Response(JSON.stringify(spec, null, 2), {
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
            'Access-Control-Allow-Origin': '*',
            'Cache-Control': 'public, max-age=86400',
        },
    });
}
