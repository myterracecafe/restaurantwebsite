'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Eye, Utensils, HeartHandshake, MapPin, MessageCircle } from 'lucide-react';
import siteInfo from '@/data/site-info.json';

export default function AboutSection() {
    const t = useTranslations('About');

    const features = [
        { icon: Eye, key: 'view' },
        { icon: Utensils, key: 'food' },
        { icon: HeartHandshake, key: 'service' },
        { icon: MapPin, key: 'location' },
    ] as const;

    return (
        <section id="about" className="bg-white py-20">
            <div className="container mx-auto px-4">
                {/* Story + images */}
                <div className="grid items-center gap-12 lg:grid-cols-2">
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-terra-700">
                            {t('eyebrow')}
                        </p>
                        <h2 className="text-3xl font-semibold text-stone-900 md:text-4xl">{t('title')}</h2>
                        <p className="mt-5 text-lg font-medium text-stone-700">{t('lead')}</p>
                        <div className="mt-4 space-y-4 leading-relaxed text-stone-600">
                            <p>{t('p1')}</p>
                            <p>{t('p2')}</p>
                            <p>{t('p3')}</p>
                        </div>
                        <a
                            href={siteInfo.whatsapp}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-7 inline-flex items-center gap-2 rounded-full bg-terra-600 px-7 py-3 font-semibold text-white shadow-lg shadow-terra-900/20 transition hover:bg-terra-700"
                        >
                            <MessageCircle size={18} />
                            {t('visitTitle')}
                        </a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.96 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="grid grid-cols-2 gap-4"
                    >
                        <div className="relative col-span-2 aspect-[16/10] overflow-hidden rounded-3xl">
                            <Image
                                src="/images/gallery/terrace-view-marmara-sea.webp"
                                alt={t('features.view.title')}
                                fill
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                className="object-cover"
                            />
                        </div>
                        <div className="relative aspect-square overflow-hidden rounded-3xl">
                            <Image
                                src="/images/gallery/terrace-guests-bamboo-roof.webp"
                                alt={t('features.service.title')}
                                fill
                                sizes="(max-width: 1024px) 50vw, 25vw"
                                className="object-cover"
                            />
                        </div>
                        <div className="relative aspect-square overflow-hidden rounded-3xl">
                            <Image
                                src="/images/gallery/my-terrace-building.webp"
                                alt={t('features.location.title')}
                                fill
                                sizes="(max-width: 1024px) 50vw, 25vw"
                                className="object-cover"
                            />
                        </div>
                    </motion.div>
                </div>

                {/* Feature cards */}
                <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <motion.div
                                key={feature.key}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="rounded-2xl border border-stone-100 bg-cream p-6 text-center"
                            >
                                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-brand-50 text-brand-600">
                                    <Icon size={26} />
                                </div>
                                <h3 className="mb-1.5 font-display text-lg font-semibold text-stone-900">
                                    {t(`features.${feature.key}.title`)}
                                </h3>
                                <p className="text-sm leading-relaxed text-stone-500">
                                    {t(`features.${feature.key}.desc`)}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
