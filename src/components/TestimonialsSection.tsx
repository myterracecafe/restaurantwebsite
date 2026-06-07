'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import testimonials from '@/data/testimonials.json';
import siteInfo from '@/data/site-info.json';

export default function TestimonialsSection() {
    const t = useTranslations('Testimonials');

    return (
        <section className="bg-brand-900 py-20 text-white">
            <div className="container mx-auto px-4">
                <div className="mb-14 text-center">
                    <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-brand-300">
                        {t('eyebrow')}
                    </p>
                    <h2 className="text-3xl font-semibold md:text-4xl">{t('title')}</h2>
                    <p className="mx-auto mt-4 max-w-2xl text-white/70">{t('subtitle')}</p>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
                    {testimonials.map((item, index) => (
                        <motion.figure
                            key={index}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
                            className="flex flex-col rounded-3xl bg-white/5 p-7 ring-1 ring-white/10 backdrop-blur-sm"
                        >
                            <Quote size={28} className="mb-4 text-terra-400" />
                            <blockquote className="flex-1 text-[15px] leading-relaxed text-white/90">
                                “{item.quote}”
                            </blockquote>
                            <figcaption className="mt-5 flex items-center justify-between border-t border-white/10 pt-4">
                                <div>
                                    <p className="text-sm font-semibold">{item.author}</p>
                                    <p className="text-xs text-white/50">{item.source}</p>
                                </div>
                                <span className="flex gap-0.5 text-amber-300">
                                    {Array.from({ length: item.rating }).map((_, i) => (
                                        <Star key={i} size={14} className="fill-amber-300 text-amber-300" />
                                    ))}
                                </span>
                            </figcaption>
                        </motion.figure>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <a
                        href={siteInfo.rating.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-white/10 px-6 py-3 text-sm font-medium ring-1 ring-white/20 transition hover:bg-white/20"
                    >
                        <Star size={16} className="fill-amber-300 text-amber-300" />
                        {siteInfo.rating.value} · {siteInfo.rating.count}+ Google
                    </a>
                </div>
            </div>
        </section>
    );
}
