import { businessInfo } from '@/lib/business';

export const dynamic = 'force-static';

export function GET() {
    const b = businessInfo('en');
    const body = `/* TEAM */
${b.name} — rooftop terrace in Sultanahmet, Istanbul
Site: ${b.url.replace(/\/en$/, '')}
Contact: ${b.email}
Languages: ${b.languages.join(', ')}

/* SITE */
Standards: HTML5, JSON-LD (Schema.org), hreflang, robots + Content-Signal,
           sitemap.xml, llms.txt, IndexNow, MCP, OpenAPI, Agent Skills, API Catalog
Stack: Next.js, next-intl, Tailwind CSS
`;
    return new Response(body, {
        headers: { 'Content-Type': 'text/plain; charset=utf-8', 'Cache-Control': 'public, max-age=86400' },
    });
}
