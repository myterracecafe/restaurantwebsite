'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { Link, usePathname, useRouter } from '@/i18n/navigation';
import { routing } from '@/i18n/routing';
import { Menu, X, Globe, ChevronDown, MessageCircle } from 'lucide-react';
import siteInfo from '@/data/site-info.json';
import { track, EVENT } from '@/lib/analytics';

export default function Header({ locale }: { locale: string }) {
    const t = useTranslations('Navigation');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [langOpen, setLangOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();
    const router = useRouter();

    const isHome = pathname === '/';
    const transparent = isHome && !scrolled && !isMobileMenuOpen;

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 40);
        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                setIsMobileMenuOpen(false);
                setLangOpen(false);
            }
        };
        document.addEventListener('keydown', onKey);
        return () => document.removeEventListener('keydown', onKey);
    }, []);

    const switchLocale = (newLocale: string) => {
        track(EVENT.language, { from: locale, to: newLocale });
        router.replace(pathname, { locale: newLocale });
        setLangOpen(false);
        setIsMobileMenuOpen(false);
    };

    const navLinks = [
        { name: t('home'), href: '/' },
        { name: t('menu'), href: '/menu' },
        { name: t('about'), href: '/about' },
        { name: t('gallery'), href: '/gallery' },
        { name: t('blog'), href: '/blog' },
        { name: t('contact'), href: '/contact' },
    ];

    const linkColor = transparent
        ? 'text-white/90 hover:text-white'
        : 'text-stone-700 hover:text-brand-600';

    return (
        <header
            className={`transition-all duration-300 ${
                transparent
                    ? 'bg-transparent py-4'
                    : 'bg-cream/95 py-2.5 shadow-sm backdrop-blur-md'
            }`}
        >
            <div className="container relative mx-auto flex items-center justify-between px-4">
                {/* Logo */}
                <Link href="/" aria-label={siteInfo.name} className="z-50 shrink-0">
                    <img
                        src="/logo.webp"
                        alt={`${siteInfo.name} logo`}
                        width={160}
                        height={56}
                        className={`w-auto object-contain transition-all ${
                            transparent ? 'h-11 brightness-0 invert' : 'h-12'
                        }`}
                    />
                </Link>

                {/* Desktop nav */}
                <nav className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-7 lg:flex">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`text-[15px] font-medium transition-colors ${linkColor}`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                {/* Right: language switcher + reserve + mobile toggle */}
                <div className="flex items-center gap-2">
                    {/* Language switcher (tap to toggle) */}
                    <div className="relative hidden md:block">
                        <button
                            onClick={() => setLangOpen((v) => !v)}
                            aria-expanded={langOpen}
                            aria-haspopup="true"
                            className={`flex items-center gap-1 rounded-full px-2.5 py-1.5 text-sm transition ${linkColor}`}
                        >
                            <Globe size={18} />
                            <span className="uppercase">{locale}</span>
                            <ChevronDown size={14} className={langOpen ? 'rotate-180 transition' : 'transition'} />
                        </button>
                        {langOpen && (
                            <>
                                <div className="fixed inset-0 z-40" onClick={() => setLangOpen(false)} />
                                <ul role="listbox" aria-label="Language" className="absolute end-0 top-full z-50 mt-2 w-28 overflow-hidden rounded-xl border border-stone-200 bg-white shadow-xl">
                                    {routing.locales.map((l) => (
                                        <li key={l} role="option" aria-selected={locale === l}>
                                            <button
                                                onClick={() => switchLocale(l)}
                                                className={`block w-full px-4 py-2 text-start text-sm transition hover:bg-stone-50 ${
                                                    locale === l ? 'font-bold text-brand-600' : 'text-stone-700'
                                                }`}
                                            >
                                                {l.toUpperCase()}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </>
                        )}
                    </div>

                    {/* Reserve CTA (desktop) */}
                    <Link
                        href="/reservations"
                        onClick={() => track(EVENT.reserve, { method: 'header' })}
                        className="hidden items-center gap-1.5 rounded-full bg-terra-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-terra-700 md:inline-flex"
                    >
                        <MessageCircle size={16} />
                        {t('reserve')}
                    </Link>

                    {/* Mobile toggle */}
                    <button
                        className={`z-50 rounded-md p-1.5 lg:hidden ${transparent ? 'text-white' : 'text-stone-800'}`}
                        onClick={() => setIsMobileMenuOpen((v) => !v)}
                        aria-label="Menu"
                        aria-expanded={isMobileMenuOpen}
                    >
                        {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            {isMobileMenuOpen && (
                <div className="absolute inset-x-0 top-full border-t border-stone-200 bg-cream p-5 shadow-lg lg:hidden">
                    <nav className="flex flex-col gap-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="rounded-lg px-3 py-2.5 text-base font-medium text-stone-800 transition hover:bg-stone-100 hover:text-brand-600"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>
                    <Link
                        href="/reservations"
                        className="mt-3 flex items-center justify-center gap-2 rounded-full bg-terra-600 px-4 py-3 font-semibold text-white"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        <MessageCircle size={18} />
                        {t('reserve')}
                    </Link>
                    <div className="mt-4 flex items-center gap-3 border-t border-stone-200 pt-4">
                        <Globe size={18} className="text-stone-500" />
                        {routing.locales.map((l) => (
                            <button
                                key={l}
                                onClick={() => switchLocale(l)}
                                className={`text-sm uppercase ${
                                    locale === l ? 'font-bold text-brand-600' : 'text-stone-600'
                                }`}
                            >
                                {l}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
}
