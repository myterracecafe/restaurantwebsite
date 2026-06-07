import FAQSection from '@/components/FAQSection';
import JsonLd from '@/components/JsonLd';
import { faqSchema, breadcrumbSchema, webPageSchema } from '@/lib/schema';
import { pageMetadata } from '@/lib/seo';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { FAQ_KEYS } from '@/data/faq';
import type { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'Seo' });
    return pageMetadata({ locale, href: '/faq', title: t('faqTitle'), description: t('faqDescription') });
}

export default async function FaqPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    setRequestLocale(locale);
    const seo = await getTranslations({ locale, namespace: 'Seo' });
    const nav = await getTranslations({ locale, namespace: 'Navigation' });
    const fq = await getTranslations({ locale, namespace: 'FAQ' });
    const faqItems = FAQ_KEYS.map(({ q, a }) => ({ q: fq(q), a: fq(a) }));

    return (
        <div className="pt-28">
            <JsonLd
                data={[
                    faqSchema(faqItems),
                    webPageSchema({ locale, href: '/faq', name: seo('faqTitle'), description: seo('faqDescription') }),
                    breadcrumbSchema(locale, [
                        { name: nav('home'), href: '/' },
                        { name: fq('title'), href: '/faq' },
                    ]),
                ]}
            />
            <FAQSection />
        </div>
    );
}
