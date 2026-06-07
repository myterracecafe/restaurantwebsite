'use client';

import { useTranslations } from 'next-intl';
import { ChevronDown } from 'lucide-react';
import { FAQ_KEYS } from '@/data/faq';

export default function FAQSection() {
    const t = useTranslations('FAQ');

    return (
        <section className="bg-cream py-20">
            <div className="container mx-auto max-w-3xl px-4">
                <div className="mb-12 text-center">
                    <h2 className="text-3xl font-semibold text-stone-900 md:text-4xl">{t('title')}</h2>
                    <p className="mt-3 text-stone-600">{t('subtitle')}</p>
                </div>

                {/* Native <details> keeps every answer in the DOM (crawlable + accessible) */}
                <div className="space-y-3">
                    {FAQ_KEYS.map(({ q, a }) => (
                        <details
                            key={q}
                            className="group overflow-hidden rounded-xl border border-stone-200 bg-white"
                        >
                            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 font-medium text-stone-900 transition hover:bg-stone-50">
                                <span>{t(q)}</span>
                                <ChevronDown
                                    size={20}
                                    className="shrink-0 text-brand-600 transition-transform duration-300 group-open:rotate-180"
                                />
                            </summary>
                            <div className="px-5 pb-5 leading-relaxed text-stone-600">{t(a)}</div>
                        </details>
                    ))}
                </div>
            </div>
        </section>
    );
}
