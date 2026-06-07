import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Calendar, ArrowLeft } from 'lucide-react';
import { Link } from '@/i18n/navigation';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import blogData from '@/data/blog.json';
import { getBlogPost } from '@/data/blog';
import JsonLd from '@/components/JsonLd';
import { blogPostingSchema, breadcrumbSchema } from '@/lib/schema';
import { pageMetadata } from '@/lib/seo';
import { routing } from '@/i18n/routing';
import type { Metadata } from 'next';

// Only pre-generated blog slugs are valid; unknown slugs return a real 404.
export const dynamicParams = false;

export function generateStaticParams() {
    return routing.locales.flatMap((locale) =>
        blogData.map((post) => ({ locale, slug: post.slug })),
    );
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
    const { locale, slug } = await params;
    const post = getBlogPost(slug, locale);
    if (!post) return {};
    return pageMetadata({
        locale,
        href: `/blog/${slug}`,
        title: post.title,
        description: post.excerpt,
        image: post.image,
        type: 'article',
    });
}

export default async function BlogPostPage({
    params,
}: {
    params: Promise<{ locale: string; slug: string }>;
}) {
    const { locale, slug } = await params;
    setRequestLocale(locale);
    const post = getBlogPost(slug, locale);
    if (!post) notFound();

    const t = await getTranslations({ locale, namespace: 'Blog' });
    const nav = await getTranslations({ locale, namespace: 'Navigation' });
    const paragraphs = post.content.split(/\n\n+/).filter(Boolean);

    return (
        <div className="min-h-screen bg-cream pb-20 pt-28">
            <JsonLd
                data={[
                    blogPostingSchema(locale, post),
                    breadcrumbSchema(locale, [
                        { name: nav('home'), href: '/' },
                        { name: nav('blog'), href: '/blog' },
                        { name: post.title, href: `/blog/${slug}` },
                    ]),
                ]}
            />

            <article className="container mx-auto max-w-3xl px-4">
                <Link
                    href="/blog"
                    className="mb-8 inline-flex items-center gap-2 text-stone-500 transition hover:text-brand-600"
                >
                    <ArrowLeft size={18} className="rtl-flip" />
                    <span>{t('backToBlog')}</span>
                </Link>

                <div className="mb-3 flex items-center gap-2 text-sm text-terra-600">
                    <Calendar size={16} />
                    <time dateTime={post.date}>{new Date(post.date).toLocaleDateString(locale)}</time>
                </div>
                <h1 className="font-display text-3xl font-semibold leading-tight text-stone-900 md:text-5xl">
                    {post.title}
                </h1>

                <div className="relative mt-8 aspect-[16/9] w-full overflow-hidden rounded-3xl">
                    <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        priority
                        sizes="(max-width: 768px) 100vw, 768px"
                        className="object-cover"
                    />
                </div>

                <div className="mt-10 space-y-5 text-lg leading-relaxed text-stone-700">
                    {paragraphs.map((para, i) => (
                        <p key={i}>{para}</p>
                    ))}
                </div>
            </article>
        </div>
    );
}
