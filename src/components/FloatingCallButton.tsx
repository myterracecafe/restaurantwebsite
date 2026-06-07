'use client';

import { Phone } from 'lucide-react';
import siteInfo from '@/data/site-info.json';
import { track, EVENT } from '@/lib/analytics';

export default function FloatingCallButton() {
    return (
        <a
            href={`tel:${siteInfo.phoneE164}`}
            onClick={() => track(EVENT.call, { location: 'floating' })}
            aria-label={`Call ${siteInfo.phone}`}
            className="flex flex-1 items-center justify-center gap-2 bg-brand-600 text-white transition hover:bg-brand-700
                h-14
                md:h-14 md:w-14 md:flex-none md:rounded-full md:shadow-lg md:shadow-brand-900/30 md:hover:scale-105"
        >
            <Phone size={22} />
            <span className="text-sm font-semibold md:hidden">{siteInfo.phone}</span>
        </a>
    );
}
