import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        formats: ['image/avif', 'image/webp'],
        remotePatterns: [
            { protocol: 'https', hostname: 'images.unsplash.com' },
        ],
    },
    async headers() {
        // CSP scoped to the services actually used (GA4/GTM, Yandex Metrica, Google
        // Maps embed, self-hosted video/fonts). 'unsafe-inline'/'unsafe-eval' are
        // required by next/script inline + GTM custom tags; broad https: for
        // analytics beacons/pixels and image hosts to avoid breaking flows.
        const csp = [
            "default-src 'self'",
            "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://*.yandex.ru https://*.yandex.com https://yastatic.net",
            "style-src 'self' 'unsafe-inline'",
            "img-src 'self' data: blob: https:",
            "font-src 'self' data:",
            "media-src 'self' blob:",
            "connect-src 'self' https: wss:",
            "frame-src 'self' https://www.google.com https://*.google.com https://www.googletagmanager.com https://*.yandex.ru https://mc.yandex.ru",
            "frame-ancestors 'self'",
            "base-uri 'self'",
            "form-action 'self' https://wa.me https://api.whatsapp.com",
            'upgrade-insecure-requests',
        ].join('; ');

        const security = [
            { key: 'Content-Security-Policy', value: csp },
            { key: 'X-Content-Type-Options', value: 'nosniff' },
            { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
            { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
            { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), browsing-topics=()' },
            { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
        ];
        // RFC 8288 agent-discovery Link relations — scoped to documents only
        // (NOT images/_next, to avoid clobbering next/image preload Link headers).
        const link = {
            key: 'Link',
            value:
                '</.well-known/api-catalog>; rel="api-catalog", </openapi.json>; rel="service-desc"; type="application/json", </sitemap.xml>; rel="sitemap"; type="application/xml", </.well-known/mcp/server-card.json>; rel="service-meta"; type="application/json"',
        };
        return [
            { source: '/:path*', headers: security },
            { source: '/', headers: [link] },
            { source: '/:locale(tr|en|ar|de|ru|es|fr)', headers: [link] },
            { source: '/:locale(tr|en|ar|de|ru|es|fr)/:rest*', headers: [link] },
        ];
    },
};

export default withNextIntl(nextConfig);
