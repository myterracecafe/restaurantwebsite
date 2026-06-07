import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { ReactNode } from 'react';
import { Metadata } from 'next';
import { Inter, Cormorant_Garamond, Cairo } from 'next/font/google';
import '../globals.css';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import YandexMetrica from '@/components/YandexMetrica';
import AnalyticsBoot from '@/components/AnalyticsBoot';
import CookieConsent from '@/components/CookieConsent';
import FloatingButtons from '@/components/FloatingButtons';
import JsonLd from '@/components/JsonLd';
import { GTM_ID } from '@/lib/analytics-config';
import { routing, isRtl } from '@/i18n/routing';
import { siteGraph } from '@/lib/schema';
import { BASE_URL, buildAlternates, localeUrl, ogLocales } from '@/lib/seo';
import siteInfo from '@/data/site-info.json';

const inter = Inter({
    subsets: ['latin', 'latin-ext', 'cyrillic'],
    variable: '--font-inter',
    display: 'swap',
});
const cormorant = Cormorant_Garamond({
    subsets: ['latin', 'latin-ext'],
    weight: ['600', '700'],
    variable: '--font-cormorant',
    display: 'swap',
    preload: true,
});
const cairo = Cairo({
    subsets: ['arabic', 'latin'],
    variable: '--font-cairo',
    display: 'swap',
});

export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>;
}): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'Seo' });
    const { locale: ogLocale, alternateLocale } = ogLocales(locale);
    const title = t('homeTitle');
    const description = t('homeDescription');

    return {
        metadataBase: new URL(BASE_URL),
        applicationName: siteInfo.name,
        title: {
            default: `${title} | ${siteInfo.shortName}`,
            template: `%s | ${siteInfo.shortName} Cafe Restaurant`,
        },
        description,
        alternates: {
            ...buildAlternates(locale, '/'),
            types: { 'application/rss+xml': `${BASE_URL}/feed.xml` },
        },
        manifest: '/manifest.webmanifest',
        icons: {
            icon: [{ url: '/icon.svg', type: 'image/svg+xml' }],
            apple: [{ url: '/logo.webp' }],
        },
        openGraph: {
            type: 'website',
            siteName: siteInfo.name,
            url: localeUrl(locale, '/'),
            title,
            description,
            locale: ogLocale,
            alternateLocale,
            images: [{ url: '/images/og-default.jpg', width: 1200, height: 630, alt: siteInfo.name }],
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: ['/images/og-default.jpg'],
        },
        robots: {
            index: true,
            follow: true,
            'max-image-preview': 'large',
            'max-snippet': -1,
            'max-video-preview': -1,
        },
        formatDetection: { telephone: true },
        verification: {
            yandex: siteInfo.verification.yandex,
            other: { 'msvalidate.01': siteInfo.verification.bing },
        },
    };
}

export default async function LocaleLayout({
    children,
    params,
}: {
    children: ReactNode;
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    if (!routing.locales.includes(locale as never)) {
        notFound();
    }
    setRequestLocale(locale);

    const messages = await getMessages();
    const dir = isRtl(locale) ? 'rtl' : 'ltr';
    const skipText: Record<string, string> = {
        tr: 'İçeriğe geç', en: 'Skip to content', ar: 'تخطّ إلى المحتوى',
        de: 'Zum Inhalt springen', ru: 'Перейти к содержимому', es: 'Saltar al contenido', fr: 'Aller au contenu',
    };

    return (
        <html
            lang={locale}
            dir={dir}
            className={`scroll-smooth ${inter.variable} ${cormorant.variable} ${cairo.variable}`}
        >
            <body className="bg-cream text-stone-900 antialiased pb-14 md:pb-0" suppressHydrationWarning>
                {GTM_ID && (
                    <noscript>
                        <iframe
                            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
                            height="0"
                            width="0"
                            style={{ display: 'none', visibility: 'hidden' }}
                        />
                    </noscript>
                )}
                <JsonLd data={siteGraph(locale)} />
                <NextIntlClientProvider messages={messages}>
                    <GoogleAnalytics />
                    <YandexMetrica locale={locale} />
                    <AnalyticsBoot />
                    <a href="#main-content" className="skip-link">{skipText[locale] ?? skipText.en}</a>
                    <div className="fixed inset-x-0 top-0 z-50">
                        <TopBar />
                        <Header locale={locale} />
                    </div>
                    <main id="main-content" className="min-h-screen">{children}</main>
                    <Footer locale={locale} />
                    <FloatingButtons />
                    <CookieConsent />
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
