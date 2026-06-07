import AboutSection from '@/components/AboutSection';
import AwardsSection from '@/components/AwardsSection';
import JsonLd from '@/components/JsonLd';
import { breadcrumbSchema, webPageSchema } from '@/lib/schema';
import { pageMetadata } from '@/lib/seo';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'Seo' });
    return pageMetadata({ locale, href: '/about', title: t('aboutTitle'), description: t('aboutDescription') });
}

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    setRequestLocale(locale);
    const nav = await getTranslations({ locale, namespace: 'Navigation' });
    const seo = await getTranslations({ locale, namespace: 'Seo' });

    return (
        <div className="pt-28">
            <JsonLd
                data={[
                    webPageSchema({ locale, href: '/about', name: seo('aboutTitle'), description: seo('aboutDescription'), image: '/images/gallery/terrace-view-marmara-sea.webp' }),
                    breadcrumbSchema(locale, [
                        { name: nav('home'), href: '/' },
                        { name: nav('about'), href: '/about' },
                    ]),
                ]}
            />
            <AboutSection />
            <AwardsSection locale={locale} />
        </div>
    );
}
