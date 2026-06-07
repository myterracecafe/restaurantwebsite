import { BASE_URL } from '@/lib/seo';

// Custom robots.txt with Content-Signal directives, an explicit 2026 AI-crawler
// allow-list, and an AI-friendly /api/public allow.
export const dynamic = 'force-static';

// AI / answer-engine agents we welcome (content is public; we want to be cited).
const AI_BOTS = [
    'GPTBot',
    'OAI-SearchBot',
    'ChatGPT-User',
    'ClaudeBot',
    'Claude-SearchBot',
    'Claude-User',
    'anthropic-ai',
    'Google-Extended',
    'Google-CloudVertexBot',
    'Applebot',
    'Applebot-Extended',
    'PerplexityBot',
    'Perplexity-User',
    'Bingbot',
    'DuckAssistBot',
    'MistralAI-User',
    'Meta-ExternalAgent',
    'Meta-ExternalFetcher',
    'Amazonbot',
    'CCBot',
    'Diffbot',
    'Timpibot',
    'YouBot',
    'cohere-ai',
    'Omgilibot',
];

// Low-value / aggressive scrapers we block.
const BLOCKED = ['Bytespider', 'ImagesiftBot', 'DataForSeoBot', 'MJ12bot', 'DotBot', 'PetalBot'];

export function GET() {
    const body = `# robots.txt — My Terrace Cafe Restaurant
# Crawling/indexing for search and AI answer engines is permitted under the
# Content-Signal preferences below. Aggressive scrapers are disallowed.

User-agent: *
Content-Signal: search=yes, ai-input=yes, ai-train=yes
Allow: /
Allow: /api/public/
Disallow: /api/

${AI_BOTS.map((ua) => `User-agent: ${ua}\nAllow: /`).join('\n\n')}

${BLOCKED.map((ua) => `User-agent: ${ua}\nDisallow: /`).join('\n\n')}

Sitemap: ${BASE_URL}/sitemap.xml
`;

    return new Response(body, {
        headers: {
            'Content-Type': 'text/plain; charset=utf-8',
            'Cache-Control': 'public, max-age=86400',
        },
    });
}
