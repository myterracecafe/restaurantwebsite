import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
    // All locales supported by the site
    locales: ['tr', 'en', 'ar', 'de', 'ru', 'es', 'fr'],

    // Used when no locale matches
    defaultLocale: 'tr',

    // Always prefix the locale in the URL (/tr, /en, /ar, /de)
    localePrefix: 'always',
});

export type Locale = (typeof routing.locales)[number];

// Right-to-left locales (Arabic)
export const rtlLocales: Locale[] = ['ar'];

export function isRtl(locale: string): boolean {
    return (rtlLocales as string[]).includes(locale);
}
