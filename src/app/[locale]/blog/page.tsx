import BlogCard from '@/components/BlogCard';
import JsonLd from '@/components/JsonLd';
import { breadcrumbSchema, webPageSchema } from '@/lib/schema';
import { pageMetadata } from '@/lib/seo';
import { getBlogPosts } from '@/data/blog';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'Seo' });
    return pageMetadata({ locale, href: '/blog', title: t('blogTitle'), description: t('blogDescription') });
}

export default async function BlogPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    setRequestLocale(locale);
    const t = await getTranslations({ locale, namespace: 'Blog' });
    const nav = await getTranslations({ locale, namespace: 'Navigation' });
    const seo = await getTranslations({ locale, namespace: 'Seo' });
    const blogPosts = getBlogPosts(locale);

    return (
        <div className="min-h-screen bg-cream pb-20 pt-32">
            <JsonLd
                data={[
                    webPageSchema({ locale, href: '/blog', name: seo('blogTitle'), description: seo('blogDescription') }),
                    breadcrumbSchema(locale, [
                        { name: nav('home'), href: '/' },
                        { name: nav('blog'), href: '/blog' },
                    ]),
                ]}
            />
            <div className="container mx-auto px-4">
                <div className="mb-12 text-center">
                    <h1 className="text-4xl font-semibold text-stone-900 md:text-5xl">{t('title')}</h1>
                    <p className="mx-auto mt-3 max-w-2xl text-stone-600">{t('subtitle')}</p>
                </div>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {blogPosts.map((post) => (
                        <BlogCard key={post.id} post={post} locale={locale} />
                    ))}
                </div>
            </div>
        </div>
    );
}
