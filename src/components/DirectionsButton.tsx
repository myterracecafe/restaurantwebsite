'use client';

import { useEffect, useRef, useState } from 'react';
import { useTranslations } from 'next-intl';
import { Navigation, ChevronDown } from 'lucide-react';
import { DIRECTIONS, MAP_PROVIDERS, preferredProvider } from '@/lib/maps';
import { track, EVENT } from '@/lib/analytics';

export default function DirectionsButton({
    className = '',
    variant = 'solid',
}: {
    className?: string;
    variant?: 'solid' | 'light';
}) {
    const t = useTranslations('Contact');
    const [open, setOpen] = useState(false);
    const [preferred, setPreferred] = useState<string>('google');
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setPreferred(preferredProvider());
        const onClick = (e: MouseEvent) => {
            if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
        };
        document.addEventListener('click', onClick);
        return () => document.removeEventListener('click', onClick);
    }, []);

    const go = (id: string) => {
        track(EVENT.directions, { provider: id, type: 'directions' });
        window.open(DIRECTIONS[id], '_blank', 'noopener,noreferrer');
        setOpen(false);
    };

    const base =
        variant === 'solid'
            ? 'bg-brand-600 text-white hover:bg-brand-700'
            : 'border-2 border-white/60 text-white hover:bg-white hover:text-stone-900';

    // Order providers so the platform default comes first
    const ordered = [...MAP_PROVIDERS].sort((a, b) =>
        a.id === preferred ? -1 : b.id === preferred ? 1 : 0,
    );

    return (
        <div className="relative inline-block" ref={ref}>
            <button
                onClick={() => setOpen((v) => !v)}
                aria-haspopup="true"
                aria-expanded={open}
                className={`inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition ${base} ${className}`}
            >
                <Navigation size={17} />
                {t('directions')}
                <ChevronDown size={15} className={open ? 'rotate-180 transition' : 'transition'} />
            </button>
            {open && (
                <div className="absolute z-50 mt-2 w-56 overflow-hidden rounded-2xl border border-stone-200 bg-white p-1.5 text-stone-800 shadow-xl">
                    {ordered.map((p) => (
                        <button
                            key={p.id}
                            onClick={() => go(p.id)}
                            className="flex w-full items-center justify-between rounded-xl px-4 py-2.5 text-start text-sm transition hover:bg-stone-50"
                        >
                            <span>{p.label}</span>
                            {p.id === preferred && (
                                <span className="rounded-full bg-brand-50 px-2 py-0.5 text-[11px] font-semibold text-brand-700">★</span>
                            )}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
