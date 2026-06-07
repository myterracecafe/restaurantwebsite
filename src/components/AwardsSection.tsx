'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Trophy, Award, Medal, ExternalLink, Star } from 'lucide-react';
import awards from '@/data/awards.json';
import siteInfo from '@/data/site-info.json';

const ICONS = { trophy: Trophy, award: Award, medal: Medal } as const;

export default function AwardsSection({ locale }: { locale: string }) {
    const t = useTranslations('Awards');
    const loc = (field: Record<string, string>) => field[locale] ?? field.en;

    return (
        <section className="bg-cream py-20">
            <div className="container mx-auto px-4">
                <div className="mb-12 text-center">
                    <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-terra-700">
                        {t('eyebrow')}
                    </p>
                    <h2 className="text-3xl font-semibold text-stone-900 md:text-4xl">{t('title')}</h2>
                    <p className="mx-auto mt-4 max-w-2xl text-stone-600">{t('subtitle')}</p>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {awards.map((item, index) => {
                        const Icon = ICONS[item.icon as keyof typeof ICONS] ?? Award;
                        return (
                            <motion.a
                                key={item.id}
                                href={item.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group relative flex flex-col items-center rounded-3xl border border-stone-200 bg-white p-8 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
                            >
                                <span className="absolute right-4 top-4 rounded-full bg-brand-50 px-2.5 py-1 text-xs font-semibold text-brand-700">
                                    {item.year}
                                </span>
                                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-terra-500 to-terra-700 text-white shadow-md">
                                    <Icon size={30} />
                                </div>
                                <p className="text-sm font-medium uppercase tracking-wide text-stone-400">{item.org}</p>
                                <h3 className="mt-1 font-display text-xl font-semibold text-stone-900">
                                    {loc(item.award as Record<string, string>)}
                                </h3>
                                <p className="mt-2 text-sm leading-relaxed text-stone-500">
                                    {loc(item.detail as Record<string, string>)}
                                </p>
                                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-terra-600 opacity-0 transition group-hover:opacity-100">
                                    {t('verify')} <ExternalLink size={13} />
                                </span>
                            </motion.a>
                        );
                    })}
                </div>

                {/* Combined rating proof */}
                <div className="mt-10 flex flex-wrap items-center justify-center gap-3 text-sm">
                    <a
                        href={siteInfo.rating.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-full border border-stone-200 bg-white px-4 py-2 transition hover:border-brand-300"
                    >
                        <Star size={15} className="fill-amber-400 text-amber-400" />
                        <span className="font-semibold">{siteInfo.rating.value}</span>
                        <span className="text-stone-500">· {siteInfo.rating.count}+ Google</span>
                    </a>
                    <a
                        href={siteInfo.socials.tripadvisor}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-full border border-stone-200 bg-white px-4 py-2 transition hover:border-brand-300"
                    >
                        <Star size={15} className="fill-[#00aa6c] text-[#00aa6c]" />
                        <span className="font-semibold">{siteInfo.tripadvisorRating.value}</span>
                        <span className="text-stone-500">· Tripadvisor</span>
                    </a>
                </div>
            </div>
        </section>
    );
}
