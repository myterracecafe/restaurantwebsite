import { MetadataRoute } from 'next';
import { routing } from '@/i18n/routing';
import { localeUrl, BASE_URL } from '@/lib/seo';
import blogData from '@/data/blog.json';
import galleryData from '@/data/gallery.json';

const staticPaths = ['/', '/menu', '/about', '/gallery', '/blog', '/faq', '/reservations', '/contact'];

const abs = (p: string) => (p.startsWith('http') ? p : `${BASE_URL}${p}`);
const galleryImages = galleryData.map((g) => abs(g.file));

// Stable per-path lastmod (avoid churning lastmod on every build)
const LASTMOD = '2026-06-07';

function imagesFor(path: string): string[] | undefined {
    if (path === '/') return [abs('/images/og-default.jpg'), ...galleryImages.slice(0, 4)];
    if (path === '/gallery') return galleryImages;
    if (path === '/menu') return galleryData.filter((g) => g.category === 'food').map((g) => abs(g.file));
    if (path.startsWith('/blog/')) {
        const slug = path.replace('/blog/', '');
        const post = blogData.find((p) => p.slug === slug);
        return post ? [abs(post.image)] : undefined;
    }
    return undefined;
}

export default function sitemap(): MetadataRoute.Sitemap {
    const paths = [...staticPaths, ...blogData.map((post) => `/blog/${post.slug}`)];

    return paths.map((path) => {
        const languages: Record<string, string> = {};
        for (const l of routing.locales) languages[l] = localeUrl(l, path);
        const images = imagesFor(path);

        return {
            url: localeUrl(routing.defaultLocale, path),
            lastModified: LASTMOD,
            changeFrequency: path === '/' ? 'weekly' : path.startsWith('/blog/') ? 'monthly' : 'monthly',
            priority: path === '/' ? 1 : path.startsWith('/blog/') ? 0.6 : 0.8,
            alternates: { languages },
            ...(images ? { images } : {}),
        };
    });
}
