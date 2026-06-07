import Hero from '@/components/Hero';
import FeaturesSection from '@/components/FeaturesSection';
import AboutSection from '@/components/AboutSection';
import MenuSection from '@/components/MenuSection';
import VideoSection from '@/components/VideoSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import AwardsSection from '@/components/AwardsSection';
import SocialSection from '@/components/SocialSection';
import FAQSection from '@/components/FAQSection';
import BlogCard from '@/components/BlogCard';
import JsonLd from '@/components/JsonLd';
import { getBlogPosts } from '@/data/blog';
import { Link } from '@/i18n/navigation';
import { ArrowRight } from 'lucide-react';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { webPageSchema, definedTermsSchema } from '@/lib/schema';

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    setRequestLocale(locale);

    const t = await getTranslations({ locale, namespace: 'Blog' });
    const seo = await getTranslations({ locale, namespace: 'Seo' });
    const blogPosts = getBlogPosts(locale).slice(0, 3);

    return (
        <>
            <JsonLd
                data={[
                    webPageSchema({
                        locale,
                        href: '/',
                        name: seo('homeTitle'),
                        description: seo('homeDescription'),
                        image: '/images/gallery/terrace-view-marmara-sea.webp',
                    }),
                    definedTermsSchema(locale),
                ]}
            />

            <Hero locale={locale} />
            <FeaturesSection />
            <AboutSection />
            <MenuSection locale={locale} />
            <VideoSection />
            <TestimonialsSection />
            <SocialSection />
            <AwardsSection locale={locale} />

            {/* Blog preview */}
            <section className="bg-white py-20">
                <div className="container mx-auto px-4">
                    <div className="mb-12 text-center">
                        <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-terra-700">
                            {t('latestPosts')}
                        </p>
                        <h2 className="text-3xl font-semibold text-stone-900 md:text-4xl">{t('subtitle')}</h2>
                    </div>
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {blogPosts.map((post) => (
                            <BlogCard key={post.id} post={post} locale={locale} />
                        ))}
                    </div>
                    <div className="mt-14 text-center">
                        <Link
                            href="/blog"
                            className="inline-flex items-center gap-2 rounded-full bg-brand-600 px-8 py-3.5 font-semibold text-white shadow-lg shadow-brand-900/20 transition hover:bg-brand-700"
                        >
                            {t('viewAll')}
                            <ArrowRight className="rtl-flip" size={18} />
                        </Link>
                    </div>
                </div>
            </section>

            <FAQSection />
        </>
    );
}
