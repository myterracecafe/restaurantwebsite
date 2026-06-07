'use client';

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie } from 'lucide-react';
import { applyConsent, storedConsent } from '@/lib/consent';

export default function CookieConsent() {
    const t = useTranslations('Consent');
    const [show, setShow] = useState(false);

    useEffect(() => {
        const s = storedConsent();
        if (s) applyConsent(s === 'all');
        else setShow(true);
    }, []);

    const choose = (adsGranted: boolean) => {
        applyConsent(adsGranted);
        setShow(false);
    };

    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.3 }}
                    role="dialog"
                    aria-label="Cookie consent"
                    className="fixed bottom-16 left-3 right-3 z-[90] mx-auto max-w-md rounded-2xl border border-stone-200 bg-white/95 p-4 shadow-2xl backdrop-blur-md md:bottom-6 md:left-6 md:right-auto"
                >
                    <div className="flex items-start gap-3">
                        <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-600">
                            <Cookie size={18} />
                        </span>
                        <div className="flex-1">
                            <p className="text-sm leading-relaxed text-stone-600">{t('text')}</p>
                            <div className="mt-3 flex items-center gap-3">
                                <button
                                    onClick={() => choose(true)}
                                    className="rounded-full bg-terra-600 px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-terra-700"
                                >
                                    {t('accept')}
                                </button>
                                <button
                                    onClick={() => choose(false)}
                                    className="text-sm font-medium text-stone-500 transition hover:text-stone-700"
                                >
                                    {t('reject')}
                                </button>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
