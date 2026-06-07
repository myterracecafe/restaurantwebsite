'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Star, UtensilsCrossed, MessageCircle, ChevronDown } from 'lucide-react';
import { Link } from '@/i18n/navigation';
import siteInfo from '@/data/site-info.json';
import { track, EVENT } from '@/lib/analytics';

export default function Hero({ locale }: { locale: string }) {
    const t = useTranslations('Hero');

    return (
        <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden">
            {/* Background: poster image (LCP / reduced-motion fallback) + drone video */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/video/hero-poster.jpg"
                    alt=""
                    aria-hidden
                    className="absolute inset-0 h-full w-full object-cover"
                />
                <video
                    className="motion-safe-video absolute inset-0 h-full w-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="none"
                    poster="/video/hero-poster.jpg"
                >
                    <source src="/video/hero.mp4" type="video/mp4" />
                </video>
                {/* Legibility gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-black/70" />
            </div>

            <div className="relative z-10 mx-auto max-w-4xl px-6 text-center text-white">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                    <p className="mb-5 text-sm font-medium uppercase tracking-[0.25em] text-brand-200">
                        {t('eyebrow')}
                    </p>
                    <h1 className="text-shadow-hero text-4xl font-semibold leading-[1.08] sm:text-5xl md:text-6xl lg:text-7xl">
                        {t('title')}
                    </h1>
                    <p className="text-shadow-hero mx-auto mt-6 max-w-2xl text-base text-white/90 sm:text-lg md:text-xl">
                        {t('subtitle')}
                    </p>

                    {/* Real, verified Google rating — links to the live reviews */}
                    <a
                        href={siteInfo.rating.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => track(EVENT.review, { source: 'google', location: 'hero' })}
                        className="mt-7 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm backdrop-blur-sm ring-1 ring-white/25 transition hover:bg-white/25"
                    >
                        <span className="flex items-center gap-0.5 text-amber-300">
                            {[0, 1, 2, 3, 4].map((i) => (
                                <Star key={i} size={15} className="fill-amber-300 text-amber-300" />
                            ))}
                        </span>
                        <span className="font-semibold">{siteInfo.rating.value}</span>
                        <span className="text-white/80">
                            · {siteInfo.rating.count}+ {t('ratingLabel')}
                        </span>
                    </a>

                    <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
                        <Link
                            href="/menu"
                            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-terra-600 px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-terra-900/30 transition hover:bg-terra-700 sm:w-auto"
                        >
                            <UtensilsCrossed size={19} />
                            {t('ctaMenu')}
                        </Link>
                        <a
                            href={siteInfo.whatsapp}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-white/70 bg-white/5 px-8 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition hover:bg-white hover:text-stone-900 sm:w-auto"
                        >
                            <MessageCircle size={19} />
                            {t('ctaReserve')}
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* Scroll cue */}
            <motion.div
                aria-hidden
                className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-white/70"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            >
                <ChevronDown size={28} />
            </motion.div>
        </section>
    );
}
