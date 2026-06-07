'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { MapPin, Phone, Mail, Clock, MessageCircle, CheckCircle2 } from 'lucide-react';
import siteInfo from '@/data/site-info.json';
import DirectionsButton from './DirectionsButton';
import { track, EVENT } from '@/lib/analytics';

export default function ContactSection() {
    const t = useTranslations('Contact');
    const [sent, setSent] = useState(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const text = `Name: ${form.get('name')}%0AEmail: ${form.get('email')}%0AMessage: ${form.get('message')}`;
        track(EVENT.reserve, { method: 'form' });
        track(EVENT.whatsapp, { location: 'contact_form' });
        window.open(`${siteInfo.whatsapp}?text=${text}`, '_blank');
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
                    {/* Info + map */}
                    <div className="flex flex-col gap-6">
                        <div className="rounded-3xl border border-stone-200 bg-white p-7">
                            <h3 className="mb-5 font-display text-xl font-semibold text-stone-900">{t('infoTitle')}</h3>
                            <ul className="space-y-4 text-stone-600">
                                <li className="flex items-start gap-3">
                                    <MapPin size={20} className="mt-0.5 shrink-0 text-brand-600" />
                                    <a href={siteInfo.mapsPlaceUrl} target="_blank" rel="noopener noreferrer" className="transition hover:text-brand-600">
                                        {siteInfo.address}
                                    </a>
                                </li>
                                <li className="flex items-center gap-3">
                                    <Phone size={20} className="shrink-0 text-brand-600" />
                                    <a href={`tel:${siteInfo.phoneE164}`} className="transition hover:text-brand-600">{siteInfo.phone}</a>
                                </li>
                                <li className="flex items-center gap-3">
                                    <Mail size={20} className="shrink-0 text-brand-600" />
                                    <a href={`mailto:${siteInfo.email}`} className="transition hover:text-brand-600">{siteInfo.email}</a>
                                </li>
                                <li className="flex items-center gap-3">
                                    <Clock size={20} className="shrink-0 text-brand-600" />
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
                                title={siteInfo.name}
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                    </div>

                    {/* Reservation form */}
                    <div className="rounded-3xl border border-stone-200 bg-white p-7">
                        <h3 className="font-display text-xl font-semibold text-stone-900">{t('reserveTitle')}</h3>
                        <p className="mt-2 text-sm text-stone-500">{t('reserveText')}</p>

                        {sent ? (
                            <div className="mt-6 flex flex-col items-center gap-3 rounded-2xl bg-brand-50 p-8 text-center">
                                <CheckCircle2 size={44} className="text-brand-600" />
                                <p className="font-medium text-brand-800">{t('form.success')}</p>
                            </div>
                        ) : (
                            <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
                                <div>
                                    <label htmlFor="c-name" className="mb-1.5 block text-sm font-medium text-stone-700">{t('form.name')}</label>
                                    <input id="c-name" name="name" type="text" required
                                        className="w-full rounded-xl border border-stone-200 bg-cream px-4 py-3 text-stone-900 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
                                        placeholder={t('form.name')} />
                                </div>
                                <div>
                                    <label htmlFor="c-email" className="mb-1.5 block text-sm font-medium text-stone-700">{t('form.email')}</label>
                                    <input id="c-email" name="email" type="email" required
                                        className="w-full rounded-xl border border-stone-200 bg-cream px-4 py-3 text-stone-900 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
                                        placeholder={t('form.email')} />
                                </div>
                                <div>
                                    <label htmlFor="c-msg" className="mb-1.5 block text-sm font-medium text-stone-700">{t('form.message')}</label>
                                    <textarea id="c-msg" name="message" rows={4} required
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
                </div>
            </div>
        </section>
    );
}
