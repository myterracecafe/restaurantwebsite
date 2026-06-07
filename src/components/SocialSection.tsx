'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Instagram, ArrowUpRight } from 'lucide-react';
import siteInfo from '@/data/site-info.json';
import { track, EVENT } from '@/lib/analytics';

function TikTokIcon({ size = 22 }: { size?: number }) {
    return (
        <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden>
            <path d="M16.6 5.82a4.28 4.28 0 0 1-1.05-2.82h-3.2v12.86a2.59 2.59 0 1 1-2.59-2.59c.27 0 .53.04.78.12v-3.3a5.9 5.9 0 0 0-.78-.05A5.86 5.86 0 1 0 15.4 15.9V9.42a7.5 7.5 0 0 0 4.36 1.4V7.6a4.28 4.28 0 0 1-3.16-1.78Z" />
        </svg>
    );
}

export default function SocialSection() {
    const t = useTranslations('Social');

    const cards = [
        {
            network: 'instagram',
            href: siteInfo.socials.instagram,
            handle: '@myterrace.caferestaurant',
            meta: `${siteInfo.instagramFollowers}+ ${'Instagram'}`,
            img: '/images/gallery/mixed-grill-feast.webp',
            icon: <Instagram size={22} />,
            accent: 'from-pink-600/80 to-purple-700/80',
        },
        {
            network: 'tiktok',
            href: siteInfo.socials.tiktok,
            handle: '@my_terrace.restaurant',
            meta: 'TikTok',
            img: '/images/gallery/terrace-dining-sunset.webp',
            icon: <TikTokIcon />,
            accent: 'from-stone-900/80 to-stone-700/80',
        },
    ];

    return (
        <section className="bg-white py-20">
            <div className="container mx-auto px-4">
                <div className="mb-12 text-center">
                    <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-terra-700">{t('eyebrow')}</p>
                    <h2 className="text-3xl font-semibold text-stone-900 md:text-4xl">{t('title')}</h2>
                    <p className="mx-auto mt-4 max-w-2xl text-stone-600">{t('subtitle')}</p>
                </div>

                <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2">
                    {cards.map((c) => (
                        <a
                            key={c.network}
                            href={c.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => track(EVENT.social, { network: c.network })}
                            className="group relative block aspect-[4/3] overflow-hidden rounded-3xl"
                        >
                            <Image
                                src={c.img}
                                alt=""
                                fill
                                sizes="(max-width: 640px) 100vw, 50vw"
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className={`absolute inset-0 bg-gradient-to-t ${c.accent}`} />
                            <div className="absolute inset-0 flex flex-col justify-between p-6 text-white">
                                <div className="flex items-center justify-between">
                                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                                        {c.icon}
                                    </span>
                                    <ArrowUpRight className="opacity-0 transition group-hover:opacity-100" />
                                </div>
                                <div>
                                    <p className="font-display text-2xl font-semibold">{c.handle}</p>
                                    <p className="mt-1 inline-flex items-center gap-2 text-sm text-white/90">
                                        {c.meta} · {t('follow')}
                                    </p>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
