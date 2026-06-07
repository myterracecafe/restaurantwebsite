import ContactSection from '@/components/ContactSection';
import FAQSection from '@/components/FAQSection';
import JsonLd from '@/components/JsonLd';
import { breadcrumbSchema, webPageSchema } from '@/lib/schema';
import { pageMetadata } from '@/lib/seo';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'Seo' });
    return pageMetadata({ locale, href: '/contact', title: t('contactTitle'), description: t('contactDescription') });
}

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    setRequestLocale(locale);
    const nav = await getTranslations({ locale, namespace: 'Navigation' });
    const seo = await getTranslations({ locale, namespace: 'Seo' });

    return (
        <div className="pt-28">
            <JsonLd
                data={[
                    webPageSchema({ locale, href: '/contact', name: seo('contactTitle'), description: seo('contactDescription') }),
                    breadcrumbSchema(locale, [
                        { name: nav('home'), href: '/' },
                        { name: nav('contact'), href: '/contact' },
                    ]),
                ]}
            />
            <ContactSection />
            <FAQSection />
        </div>
    );
}
