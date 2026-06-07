'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import LazyVideo from './LazyVideo';

export default function VideoSection() {
    const t = useTranslations('Video');

    return (
        <section className="relative h-[60vh] w-full overflow-hidden md:h-[80vh]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
                src="/video/terrace-poster.jpg"
                alt=""
                aria-hidden
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover"
            />
            <LazyVideo
                src="/video/terrace.mp4"
                poster="/video/terrace-poster.jpg"
                className="motion-safe-video absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-black/45" />

            <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
                <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-white/90"
                >
                    {t('eyebrow')}
                </motion.p>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-shadow-hero text-2xl font-semibold text-white drop-shadow-lg sm:text-3xl md:text-4xl lg:text-5xl"
                >
                    {t('title')}
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.15 }}
                    className="text-shadow-hero mt-2 text-xl font-light tracking-wide text-white/90 md:text-3xl"
                >
                    {t('subtitle')}
                </motion.p>
            </div>
        </section>
    );
}
