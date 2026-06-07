import { routing } from '@/i18n/routing';
import { BASE_URL } from './seo';
import blogData from '@/data/blog.json';

// IndexNow key — also hosted at /<KEY>.txt for verification.
// IndexNow instantly notifies Bing (and therefore ChatGPT Search) + Yandex on publish.
export const INDEXNOW_KEY = 'ece7bc991f69d16ccecac5d4d066981c';

const STATIC_PATHS = ['/', '/menu', '/about', '/gallery', '/blog', '/contact'];

/** Every public URL across all locales (for sitemap submission). */
export function allUrls(): string[] {
    const paths = [...STATIC_PATHS, ...blogData.map((p) => `/blog/${p.slug}`)];
    return routing.locales.flatMap((locale) =>
        paths.map((p) => `${BASE_URL}/${locale}${p === '/' ? '' : p}`),
    );
}
