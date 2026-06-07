'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Utensils, Sunset, HeartHandshake } from 'lucide-react';

export default function FeaturesSection() {
    const t = useTranslations('Features');

    const features = [
        { id: 1, icon: Utensils, title: t('f1_title'), description: t('f1_desc') },
        { id: 2, icon: Sunset, title: t('f2_title'), description: t('f2_desc') },
        { id: 3, icon: HeartHandshake, title: t('f3_title'), description: t('f3_desc') },
    ];

    return (
        <section className="bg-white py-20">
            <div className="container mx-auto px-4">
                <div className="mb-14 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block"
                    >
                        <span className="mb-2 block text-sm font-medium uppercase tracking-[0.2em] text-terra-600">
                            {t('eyebrow')}
                        </span>
                        <h2 className="mx-auto max-w-2xl text-2xl font-semibold text-stone-900 md:text-4xl">
                            {t('title')}
                        </h2>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <motion.div
                                key={feature.id}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.12 }}
                                className="group rounded-3xl border border-stone-100 bg-cream p-8 text-center transition-shadow hover:shadow-lg hover:shadow-stone-200/60"
                            >
                                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 transition-transform duration-300 group-hover:scale-110">
                                    <Icon size={30} />
                                </div>
                                <h3 className="mb-3 font-display text-xl font-semibold text-stone-900">
                                    {feature.title}
                                </h3>
                                <p className="leading-relaxed text-stone-600">{feature.description}</p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
