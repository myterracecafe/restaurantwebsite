'use client';

import { useTranslations } from 'next-intl';
import { Star } from 'lucide-react';
import siteInfo from '@/data/site-info.json';
import { track, EVENT } from '@/lib/analytics';

export default function TopBar() {
    const t = useTranslations('TopBar');

    return (
        <div className="bg-stone-900 text-white">
            <div className="container mx-auto flex items-center justify-center gap-2 px-4 py-1.5 text-xs sm:text-sm">
                <span className="hidden text-white/85 sm:inline">{t('tagline')}</span>
                <span className="hidden text-white/30 sm:inline">•</span>
                <a
                    href={siteInfo.rating.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => track(EVENT.review, { source: 'google', location: 'topbar' })}
                    className="inline-flex items-center gap-1.5 transition hover:text-amber-300"
                >
                    <Star size={13} className="fill-amber-400 text-amber-400" />
                    <span className="font-semibold">{siteInfo.rating.value}</span>
                    <span className="text-white/80">
                        · {siteInfo.rating.count}+ {t('reviews')}
                    </span>
                </a>
            </div>
        </div>
    );
}
