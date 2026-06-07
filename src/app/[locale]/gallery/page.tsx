import GalleryGrid from '@/components/GalleryGrid';
import JsonLd from '@/components/JsonLd';
import { breadcrumbSchema, webPageSchema } from '@/lib/schema';
import { pageMetadata } from '@/lib/seo';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'Seo' });
    return pageMetadata({ locale, href: '/gallery', title: t('galleryTitle'), description: t('galleryDescription') });
}

export default async function GalleryPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    setRequestLocale(locale);
    const t = await getTranslations({ locale, namespace: 'Gallery' });
    const nav = await getTranslations({ locale, namespace: 'Navigation' });
    const seo = await getTranslations({ locale, namespace: 'Seo' });

    return (
        <div className="min-h-screen bg-cream pb-20 pt-28">
            <JsonLd
                data={[
                    webPageSchema({ locale, href: '/gallery', name: seo('galleryTitle'), description: seo('galleryDescription') }),
                    breadcrumbSchema(locale, [
                        { name: nav('home'), href: '/' },
                        { name: nav('gallery'), href: '/gallery' },
                    ]),
                ]}
            />
            <div className="container mx-auto px-4">
                <div className="mb-10 text-center">
                    <h1 className="text-4xl font-semibold text-stone-900 md:text-5xl">{t('title')}</h1>
                    <p className="mx-auto mt-3 max-w-2xl text-stone-600">{t('subtitle')}</p>
                </div>
                <GalleryGrid locale={locale} />
            </div>
        </div>
    );
}
