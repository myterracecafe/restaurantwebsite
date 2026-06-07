'use client';

import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import { Calendar, ArrowRight } from 'lucide-react';
import { useTranslations } from 'next-intl';

interface BlogCardProps {
    post: {
        id: string;
        slug: string;
        image: string;
        date: string;
        title: string;
        excerpt: string;
    };
    locale: string;
}

export default function BlogCard({ post, locale }: BlogCardProps) {
    const t = useTranslations('Blog');

    return (
        <Link href={`/blog/${post.slug}`} className="group block">
            <article className="h-full overflow-hidden rounded-2xl border border-stone-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="relative h-56 overflow-hidden">
                    <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                </div>
                <div className="p-6">
                    <div className="mb-3 flex items-center gap-2 text-sm text-stone-500">
                        <Calendar size={15} className="text-brand-600" />
                        <time dateTime={post.date}>{new Date(post.date).toLocaleDateString(locale)}</time>
                    </div>
                    <h3 className="mb-2 font-display text-xl font-semibold text-stone-900 transition-colors group-hover:text-brand-600">
                        {post.title}
                    </h3>
                    <p className="line-clamp-3 text-sm leading-relaxed text-stone-600">{post.excerpt}</p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-terra-600">
                        {t('readMore')}
                        <ArrowRight size={15} className="rtl-flip transition-transform group-hover:translate-x-1" />
                    </span>
                </div>
            </article>
        </Link>
    );
}
