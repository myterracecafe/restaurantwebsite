'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Info, MessageCircle } from 'lucide-react';
import menuData from '@/data/menu.json';
import siteInfo from '@/data/site-info.json';
import { track, EVENT } from '@/lib/analytics';

const FEATURED = [
    { src: '/images/gallery/mixed-grill-feast.webp', key: 'mixed-grill' },
    { src: '/images/gallery/kebab-copper-plate.webp', key: 'kebab' },
    { src: '/images/gallery/grilled-lamb-chops.webp', key: 'lamb' },
    { src: '/images/gallery/seafood-clay-pot.webp', key: 'seafood' },
];

export default function MenuSection({ locale }: { locale: string }) {
    const t = useTranslations('Menu');
    const [activeCategory, setActiveCategory] = useState(menuData.categories[0].id);

    const activeItems = menuData.categories.find((c) => c.id === activeCategory)?.items || [];
    const loc = (field: Record<string, string>) => field[locale] ?? field.en;

    return (
        <section id="menu" className="bg-cream py-20">
            <div className="container mx-auto px-4">
                <div className="mb-12 text-center">
                    <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-terra-700">
                        {t('eyebrow')}
                    </p>
                    <h2 className="text-3xl font-semibold text-stone-900 md:text-5xl">{t('title')}</h2>
                    <p className="mx-auto mt-4 max-w-2xl text-stone-600">{t('subtitle')}</p>
                </div>

                {/* Real food photo strip */}
                <div className="mb-12 grid grid-cols-2 gap-3 md:grid-cols-4">
                    {FEATURED.map((f) => (
                        <div key={f.key} className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                            <Image
                                src={f.src}
                                alt=""
                                fill
                                sizes="(max-width: 768px) 50vw, 25vw"
                                className="object-cover transition-transform duration-500 hover:scale-105"
                            />
                        </div>
                    ))}
                </div>

                {/* Category tabs */}
                <div className="mb-10 flex flex-nowrap gap-2.5 overflow-x-auto pb-2 md:flex-wrap md:justify-center md:pb-0">
                    {menuData.categories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => {
                                setActiveCategory(category.id);
                                track(EVENT.menuCategory, { category: category.id });
                            }}
                            className={`shrink-0 rounded-full px-5 py-2 text-sm font-medium transition-all ${
                                activeCategory === category.id
                                    ? 'bg-brand-600 text-white shadow-md'
                                    : 'bg-white text-stone-600 ring-1 ring-stone-200 hover:bg-stone-50'
                            }`}
                        >
                            {loc(category.name as Record<string, string>)}
                        </button>
                    ))}
                </div>

                {/* Menu items — typographic, no prices */}
                <div className="mx-auto grid max-w-5xl grid-cols-1 gap-x-12 gap-y-7 sm:grid-cols-2">
                    {activeItems.map((item) => (
                        <div key={item.id} className="flex gap-3 border-b border-stone-200/70 pb-5">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-terra-500" />
                            <div>
                                <h3 className="font-display text-xl font-semibold text-stone-900">
                                    {loc(item.name as Record<string, string>)}
                                </h3>
                                <p className="mt-1 text-sm leading-relaxed text-stone-500">
                                    {loc(item.description as Record<string, string>)}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Price note + reserve */}
                <div className="mx-auto mt-12 flex max-w-3xl flex-col items-center gap-5 text-center">
                    <p className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-4 py-2 text-sm text-brand-800">
                        <Info size={16} className="shrink-0" />
                        {t('priceNote')}
                    </p>
                    <a
                        href={siteInfo.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-terra-600 px-7 py-3 font-semibold text-white shadow-lg shadow-terra-900/20 transition hover:bg-terra-700"
                    >
                        <MessageCircle size={18} />
                        {t('reserveCta')}
                    </a>
                </div>
            </div>
        </section>
    );
}
