import MenuSection from '@/components/MenuSection';
import JsonLd from '@/components/JsonLd';
import { menuSchema, breadcrumbSchema, webPageSchema } from '@/lib/schema';
import { pageMetadata } from '@/lib/seo';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'Seo' });
    return pageMetadata({ locale, href: '/menu', title: t('menuTitle'), description: t('menuDescription') });
}

export default async function MenuPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    setRequestLocale(locale);
    const nav = await getTranslations({ locale, namespace: 'Navigation' });
    const seo = await getTranslations({ locale, namespace: 'Seo' });

    return (
        <div className="pt-28">
            <JsonLd
                data={[
                    menuSchema(locale),
                    webPageSchema({ locale, href: '/menu', name: seo('menuTitle'), description: seo('menuDescription'), image: '/images/gallery/mixed-grill-feast.webp' }),
                    breadcrumbSchema(locale, [
                        { name: nav('home'), href: '/' },
                        { name: nav('menu'), href: '/menu' },
                    ]),
                ]}
            />
            <MenuSection locale={locale} />
        </div>
    );
}
