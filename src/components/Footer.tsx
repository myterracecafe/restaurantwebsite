'use client';

import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';
import { Facebook, Instagram, MapPin, Phone, Mail, Clock, Star } from 'lucide-react';
import siteInfo from '@/data/site-info.json';
import DirectionsButton from './DirectionsButton';
import { track, EVENT } from '@/lib/analytics';

function TikTokIcon({ size = 22 }: { size?: number }) {
    return (
        <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden>
            <path d="M16.6 5.82a4.28 4.28 0 0 1-1.05-2.82h-3.2v12.86a2.59 2.59 0 1 1-2.59-2.59c.27 0 .53.04.78.12v-3.3a5.9 5.9 0 0 0-.78-.05A5.86 5.86 0 1 0 15.4 15.9V9.42a7.5 7.5 0 0 0 4.36 1.4V7.6a4.28 4.28 0 0 1-3.16-1.78Z" />
        </svg>
    );
}

export default function Footer({ locale }: { locale: string }) {
    const t = useTranslations('Footer');
    const nav = useTranslations('Navigation');
    const fq = useTranslations('FAQ');

    const links = [
        { href: '/', label: nav('home') },
        { href: '/menu', label: nav('menu') },
        { href: '/about', label: nav('about') },
        { href: '/gallery', label: nav('gallery') },
        { href: '/blog', label: nav('blog') },
        { href: '/faq', label: fq('title') },
        { href: '/reservations', label: nav('reserve') },
        { href: '/contact', label: nav('contact') },
    ];

    return (
        <footer className="border-t border-stone-200 bg-sand text-stone-600">
            <div className="container mx-auto px-4 py-14">
                <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
                    {/* Brand */}
                    <div>
                        <img src="/logo.webp" alt={`${siteInfo.name} logo`} width={170} height={60} className="mb-4 h-12 w-auto object-contain" />
                        <p className="mb-4 max-w-xs text-sm leading-relaxed text-stone-500">{t('tagline')}</p>
                        <a
                            href={siteInfo.rating.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mb-4 inline-flex items-center gap-1.5 text-sm font-medium text-stone-700 transition hover:text-brand-600"
                        >
                            <Star size={15} className="fill-amber-400 text-amber-400" />
                            <span className="font-bold">{siteInfo.rating.value}</span>
                            <span className="text-stone-500">· {siteInfo.rating.count}+ Google</span>
                        </a>
                        <div className="flex gap-3">
                            <a href={siteInfo.socials.instagram} onClick={() => track(EVENT.social, { network: 'instagram' })} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-stone-400 transition hover:text-brand-600">
                                <Instagram size={22} />
                            </a>
                            <a href={siteInfo.socials.tiktok} onClick={() => track(EVENT.social, { network: 'tiktok' })} target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="text-stone-400 transition hover:text-brand-600">
                                <TikTokIcon size={22} />
                            </a>
                            <a href={siteInfo.socials.facebook} onClick={() => track(EVENT.social, { network: 'facebook' })} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-stone-400 transition hover:text-brand-600">
                                <Facebook size={22} />
                            </a>
                        </div>
                    </div>

                    {/* Quick links */}
                    <div>
                        <h4 className="mb-4 text-base font-semibold text-stone-900">{t('quickLinks')}</h4>
                        <ul className="space-y-2.5 text-sm">
                            {links.map((l) => (
                                <li key={l.href}>
                                    <Link href={l.href} className="transition hover:text-brand-600">{l.label}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="mb-4 text-base font-semibold text-stone-900">{t('contact')}</h4>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-start gap-2.5">
                                <MapPin size={18} className="mt-0.5 shrink-0 text-brand-600" />
                                <a href={siteInfo.mapsPlaceUrl} target="_blank" rel="noopener noreferrer" className="transition hover:text-brand-600">
                                    {siteInfo.address}
                                </a>
                            </li>
                            <li className="flex items-center gap-2.5">
                                <Phone size={18} className="shrink-0 text-brand-600" />
                                <a href={`tel:${siteInfo.phoneE164}`} className="transition hover:text-brand-600">{siteInfo.phone}</a>
                            </li>
                            <li className="flex items-center gap-2.5">
                                <Mail size={18} className="shrink-0 text-brand-600" />
                                <a href={`mailto:${siteInfo.email}`} className="transition hover:text-brand-600">{siteInfo.email}</a>
                            </li>
                            <li className="pt-1">
                                <DirectionsButton />
                            </li>
                        </ul>
                    </div>

                    {/* Hours */}
                    <div>
                        <h4 className="mb-4 text-base font-semibold text-stone-900">{t('hours')}</h4>
                        <div className="flex items-center gap-2.5 text-sm">
                            <Clock size={18} className="shrink-0 text-brand-600" />
                            <p>{t('openDaily')}</p>
                        </div>
                    </div>
                </div>

                <div className="mt-12 border-t border-stone-200 pt-8 text-center text-sm text-stone-400">
                    <p>
                        &copy; {new Date().getFullYear()} {siteInfo.name}. {t('rights')}
                    </p>
                    <div className="mt-2 flex items-center justify-center gap-2">
                        <a href="https://paksoft.com.tr" target="_blank" rel="noopener noreferrer" className="group flex items-center">
                            <span className="mr-2 text-stone-500 transition group-hover:text-brand-600">{t('developedBy')}</span>
                            <span className="font-bold tracking-wide text-brand-600 transition group-hover:text-brand-500">PakSoft</span>
                        </a>
                    </div>
                    <p className="mt-3 text-xs text-stone-400">
                        Powered by{' '}
                        <a
                            href="https://www.yazilimkocu.com/"
                            target="_blank"
                            rel="noopener"
                            className="font-semibold text-brand-600 transition hover:text-brand-700"
                        >
                            Yazılım Koçu
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
}
