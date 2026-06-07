import { BASE_URL } from '@/lib/seo';
import { getBlogPosts } from '@/data/blog';

export const dynamic = 'force-static';

const esc = (s: string) =>
    s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export function GET() {
    const posts = getBlogPosts('en');
    const items = posts
        .map((p) => {
            const url = `${BASE_URL}/en/blog/${p.slug}`;
            const pub = new Date(`${p.date}T09:00:00+03:00`).toUTCString();
            return `<item><title>${esc(p.title)}</title><link>${url}</link><guid isPermaLink="true">${url}</guid><pubDate>${pub}</pubDate><description>${esc(p.excerpt)}</description></item>`;
        })
        .join('');

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
<title>My Terrace Cafe Restaurant — Blog</title>
<link>${BASE_URL}/en/blog</link>
<atom:link href="${BASE_URL}/feed.xml" rel="self" type="application/rss+xml" />
<description>Guides and stories about Sultanahmet, Istanbul and Turkish cuisine.</description>
<language>en</language>
${items}
</channel>
</rss>`;

    return new Response(xml, {
        headers: { 'Content-Type': 'application/rss+xml; charset=utf-8', 'Cache-Control': 'public, max-age=86400' },
    });
}
