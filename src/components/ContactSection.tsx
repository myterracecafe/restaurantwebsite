'use client';

import { useRef, useState } from 'react';
import { useTranslations } from 'next-intl';
import { MapPin, Phone, Mail, Clock, MessageCircle, CheckCircle2 } from 'lucide-react';
import siteInfo from '@/data/site-info.json';
import DirectionsButton from './DirectionsButton';
import { track, EVENT } from '@/lib/analytics';
import { utmSummary } from '@/lib/utm';

export default function ContactSection() {
    const t = useTranslations('Contact');
    const [sent, setSent] = useState(false);
    const [waUrl, setWaUrl] = useState('');
    const today = new Date().toISOString().split('T')[0];
    const started = useRef(false);

    const onStart = () => {
        if (started.current) return;
        started.current = true;
        track(EVENT.reservationFormStarted, { location: 'contact_form' });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const f = new FormData(e.currentTarget);
        const get = (k: string) => String(f.get(k) || '').trim();
        const utm = utmSummary();
        const lines = [
            `*${t('reserveTitle')} — ${siteInfo.name}*`,
            `${t('form.name')}: ${get('name')}`,
            `${t('form.email')}: ${get('email')}`,
            `${t('form.date')}: ${get('date')}`,
            `${t('form.time')}: ${get('time')}`,
            `${t('form.guests')}: ${get('guests')}`,
            `${t('form.message')}: ${get('message')}`,
            ...(utm ? [`— ${utm}`] : []),
        ];
        const url = `${siteInfo.whatsapp}?text=${encodeURIComponent(lines.join('\n'))}`;
        // Conversion event (UTM auto-merged by track)
        track(EVENT.reservationSubmitted, {
            party_size: Number(get('guests')) || undefined,
            value: Number(get('guests')) || undefined,
            currency: 'TRY',
            date: get('date'),
            time: get('time'),
        });
        track(EVENT.whatsapp, { location: 'contact_form' });
        setWaUrl(url);
        window.open(url, '_blank');
        setSent(true);
    };

    return (
        <section id="contact" className="bg-cream py-20">
            <div className="container mx-auto px-4">
                <div className="mb-12 text-center">
                    <h2 className="text-3xl font-semibold text-stone-900 md:text-4xl">{t('title')}</h2>
                    <p className="mx-auto mt-3 max-w-2xl text-stone-600">{t('subtitle')}</p>
                </div>

                <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
                    {/* Reservation form (first on mobile for conversion) */}
                    <div className="order-1 rounded-3xl border border-stone-200 bg-white p-6 sm:p-7 lg:order-2">
                        <h3 className="font-display text-xl font-semibold text-stone-900">{t('reserveTitle')}</h3>
                        <p className="mt-2 text-sm text-stone-500">{t('reserveText')}</p>

                        {sent ? (
                            <div className="mt-6 flex flex-col items-center gap-3 rounded-2xl bg-brand-50 p-8 text-center" role="status" aria-live="polite">
                                <CheckCircle2 size={44} className="text-brand-600" />
                                <p className="font-medium text-brand-800">{t('form.success')}</p>
                                {waUrl && (
                                    <a href={waUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1da851] underline">
                                        <MessageCircle size={15} /> WhatsApp
                                    </a>
                                )}
                            </div>
                        ) : (
                            <form className="mt-6 space-y-4" onSubmit={handleSubmit} onChange={onStart}>
                                <div>
                                    <label htmlFor="c-name" className="mb-1.5 block text-sm font-medium text-stone-700">{t('form.name')}</label>
                                    <input id="c-name" name="name" type="text" required aria-required="true" autoComplete="name"
                                        className="w-full rounded-xl border border-stone-200 bg-cream px-4 py-3 text-stone-900 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
                                        placeholder={t('form.name')} />
                                </div>
                                <div>
                                    <label htmlFor="c-email" className="mb-1.5 block text-sm font-medium text-stone-700">{t('form.email')}</label>
                                    <input id="c-email" name="email" type="email" required aria-required="true" autoComplete="email"
                                        className="w-full rounded-xl border border-stone-200 bg-cream px-4 py-3 text-stone-900 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
                                        placeholder={t('form.email')} />
                                </div>
                                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                                    <div>
                                        <label htmlFor="c-date" className="mb-1.5 block text-sm font-medium text-stone-700">{t('form.date')}</label>
                                        <input id="c-date" name="date" type="date" required aria-required="true" min={today}
                                            className="w-full rounded-xl border border-stone-200 bg-cream px-4 py-3 text-stone-900 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20" />
                                    </div>
                                    <div>
                                        <label htmlFor="c-time" className="mb-1.5 block text-sm font-medium text-stone-700">{t('form.time')}</label>
                                        <input id="c-time" name="time" type="time" required aria-required="true" defaultValue="19:00" step={1800}
                                            className="w-full rounded-xl border border-stone-200 bg-cream px-4 py-3 text-stone-900 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20" />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="c-guests" className="mb-1.5 block text-sm font-medium text-stone-700">{t('form.guests')}</label>
                                    <input id="c-guests" name="guests" type="number" min={1} max={50} defaultValue={2} required aria-required="true"
                                        className="w-full rounded-xl border border-stone-200 bg-cream px-4 py-3 text-stone-900 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20" />
                                </div>
                                <div>
                                    <label htmlFor="c-msg" className="mb-1.5 block text-sm font-medium text-stone-700">{t('form.message')}</label>
                                    <textarea id="c-msg" name="message" rows={3}
                                        className="w-full rounded-xl border border-stone-200 bg-cream px-4 py-3 text-stone-900 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
                                        placeholder={t('form.message')} />
                                </div>
                                <button type="submit"
                                    className="flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] py-3.5 font-bold text-white transition hover:bg-[#1da851]">
                                    <MessageCircle size={18} />
                                    {t('form.send')}
                                </button>
                            </form>
                        )}
                    </div>

                    {/* Info + map */}
                    <div className="order-2 flex flex-col gap-6 lg:order-1">
                        <div className="rounded-3xl border border-stone-200 bg-white p-6 sm:p-7">
                            <h3 className="mb-5 font-display text-xl font-semibold text-stone-900">{t('infoTitle')}</h3>
                            <ul className="space-y-4 text-stone-600">
                                <li className="flex items-start gap-3">
                                    <MapPin size={20} className="mt-0.5 shrink-0 text-brand-600" aria-hidden />
                                    <a href={siteInfo.mapsPlaceUrl} target="_blank" rel="noopener noreferrer" className="transition hover:text-brand-600">
                                        {siteInfo.address}
                                    </a>
                                </li>
                                <li className="flex items-center gap-3">
                                    <Phone size={20} className="shrink-0 text-brand-600" aria-hidden />
                                    <a href={`tel:${siteInfo.phoneE164}`} onClick={() => track(EVENT.call, { location: 'contact_info' })} className="transition hover:text-brand-600">{siteInfo.phone}</a>
                                </li>
                                <li className="flex items-center gap-3">
                                    <Mail size={20} className="shrink-0 text-brand-600" aria-hidden />
                                    <a href={`mailto:${siteInfo.email}`} className="transition hover:text-brand-600">{siteInfo.email}</a>
                                </li>
                                <li className="flex items-center gap-3">
                                    <Clock size={20} className="shrink-0 text-brand-600" aria-hidden />
                                    <span>{t('openDaily')}</span>
                                </li>
                            </ul>
                            <div className="mt-6">
                                <DirectionsButton />
                            </div>
                        </div>
                        <div className="h-72 overflow-hidden rounded-3xl border border-stone-200">
                            <iframe
                                src={siteInfo.mapUrl}
                                title={`${siteInfo.name} — ${t('directions')}`}
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
