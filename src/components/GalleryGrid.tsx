'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { X } from 'lucide-react';
import { useTranslations } from 'next-intl';
import galleryData from '@/data/gallery.json';
import { track, EVENT } from '@/lib/analytics';

type Category = 'all' | 'view' | 'food' | 'interior';

export default function GalleryGrid({ locale }: { locale: string }) {
    const t = useTranslations('Gallery');
    const [filter, setFilter] = useState<Category>('all');
    const [active, setActive] = useState<number | null>(null);

    const filters: { key: Category; label: string }[] = [
        { key: 'all', label: t('filterAll') },
        { key: 'view', label: t('filterView') },
        { key: 'food', label: t('filterFood') },
        { key: 'interior', label: t('filterInterior') },
    ];

    const images = galleryData.filter((img) => filter === 'all' || img.category === filter);
    const altOf = (img: (typeof galleryData)[number]) =>
        (img.alt as Record<string, string>)[locale] ?? img.alt.en;

    return (
        <>
            {/* Filters */}
            <div className="mb-10 flex flex-wrap justify-center gap-2.5">
                {filters.map((f) => (
                    <button
                        key={f.key}
                        onClick={() => {
                            setFilter(f.key);
                            track(EVENT.galleryFilter, { filter: f.key });
                        }}
                        className={`rounded-full px-5 py-2 text-sm font-medium transition ${
                            filter === f.key
                                ? 'bg-brand-600 text-white shadow-md'
                                : 'bg-white text-stone-600 ring-1 ring-stone-200 hover:bg-stone-50'
                        }`}
                    >
                        {f.label}
                    </button>
                ))}
            </div>

            {/* Masonry */}
            <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
                {images.map((img) => {
                    const realIndex = galleryData.indexOf(img);
                    return (
                        <motion.button
                            key={img.file}
                            layout
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            onClick={() => {
                                setActive(realIndex);
                                track(EVENT.galleryOpen, { file: img.file, category: img.category });
                            }}
                            className="group mb-4 block w-full break-inside-avoid overflow-hidden rounded-2xl"
                        >
                            <Image
                                src={img.file}
                                alt={altOf(img)}
                                width={img.width}
                                height={img.height}
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                        </motion.button>
                    );
                })}
            </div>

            {/* Lightbox */}
            {active !== null && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
                    onClick={() => setActive(null)}
                    role="dialog"
                    aria-modal="true"
                >
                    <button
                        className="absolute right-4 top-4 text-white transition hover:text-terra-400"
                        onClick={() => setActive(null)}
                        aria-label="Close"
                    >
                        <X size={36} />
                    </button>
                    <figure className="max-h-[90vh] max-w-4xl" onClick={(e) => e.stopPropagation()}>
                        <Image
                            src={galleryData[active].file}
                            alt={altOf(galleryData[active])}
                            width={galleryData[active].width}
                            height={galleryData[active].height}
                            className="h-auto max-h-[82vh] w-auto rounded-lg object-contain"
                        />
                        <figcaption className="mt-3 text-center text-sm text-white/80">
                            {altOf(galleryData[active])}
                        </figcaption>
                    </figure>
                </div>
            )}
        </>
    );
}
