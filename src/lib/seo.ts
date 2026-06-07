import type { Metadata } from 'next';
import { routing } from '@/i18n/routing';
import { getPathname } from '@/i18n/navigation';
import siteInfo from '@/data/site-info.json';

export const BASE_URL = siteInfo.url.replace(/\/$/, '');

/** Map an app locale to an Open Graph locale code. */
export const OG_LOCALES: Record<string, string> = {
    tr: 'tr_TR',
    en: 'en_US',
    ar: 'ar_AR',
    de: 'de_DE',
    ru: 'ru_RU',
    es: 'es_ES',
    fr: 'fr_FR',
};

/** Absolute URL for any in-app href, prefixed with the given locale. */
export function localeUrl(locale: string, href: string): string {
    return BASE_URL + getPathname({ locale, href });
}

/**
 * Build canonical + hreflang alternates for a given page.
 * `href` is the locale-agnostic pathname, e.g. '/', '/menu', '/blog/some-slug'.
 */
export function buildAlternates(locale: string, href: string): Metadata['alternates'] {
    const languages: Record<string, string> = {};
    for (const l of routing.locales) {
        languages[l] = localeUrl(l, href);
    }
    languages['x-default'] = localeUrl(routing.defaultLocale, href);

    return {
        canonical: localeUrl(locale, href),
        languages,
    };
}

/** Open Graph locale + alternate locales for the current locale. */
export function ogLocales(locale: string) {
    return {
        locale: OG_LOCALES[locale] ?? 'tr_TR',
        alternateLocale: routing.locales
            .filter((l) => l !== locale)
            .map((l) => OG_LOCALES[l]),
    };
}

/**
 * Compose a full Metadata object for a page from localized strings.
 * Centralizes title/description/canonical/hreflang/OpenGraph/Twitter/robots.
 */
export function pageMetadata(opts: {
    locale: string;
    href: string;
    title: string;
    description: string;
    image?: string;
    type?: 'website' | 'article';
}): Metadata {
    const { locale, href, title, description, type = 'website' } = opts;
    const image = opts.image ?? '/images/og-default.jpg';
    const url = localeUrl(locale, href);
    const { locale: ogLocale, alternateLocale } = ogLocales(locale);

    return {
        title,
        description,
        alternates: buildAlternates(locale, href),
        openGraph: {
            type,
            url,
            title,
            description,
            siteName: siteInfo.name,
            locale: ogLocale,
            alternateLocale,
            images: [{ url: image, width: 1200, height: 630, alt: title }],
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: [image],
        },
    };
}
