import ContactSection from '@/components/ContactSection';
import JsonLd from '@/components/JsonLd';
import { breadcrumbSchema, webPageSchema } from '@/lib/schema';
import { pageMetadata } from '@/lib/seo';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import siteInfo from '@/data/site-info.json';
import DirectionsButton from '@/components/DirectionsButton';
import { MessageCircle, Phone, Clock } from 'lucide-react';
import type { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'Seo' });
    return pageMetadata({ locale, href: '/reservations', title: t('reservationsTitle'), description: t('reservationsDescription') });
}

export default async function ReservationsPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    setRequestLocale(locale);
    const seo = await getTranslations({ locale, namespace: 'Seo' });
    const nav = await getTranslations({ locale, namespace: 'Navigation' });
    const c = await getTranslations({ locale, namespace: 'Contact' });

    return (
        <div className="pt-28">
            <JsonLd
                data={[
                    webPageSchema({ locale, href: '/reservations', name: seo('reservationsTitle'), description: seo('reservationsDescription') }),
                    breadcrumbSchema(locale, [
                        { name: nav('home'), href: '/' },
                        { name: nav('reserve'), href: '/reservations' },
                    ]),
                ]}
            />

            <section className="bg-brand-900 py-16 text-white">
                <div className="container mx-auto max-w-3xl px-4 text-center">
                    <h1 className="page-intro font-display text-4xl font-semibold md:text-5xl">{nav('reserve')}</h1>
                    <p className="mx-auto mt-4 max-w-xl text-white/80">{c('reserveText')}</p>
                    <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
                        <a
                            href={siteInfo.whatsapp}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-7 py-3.5 font-semibold text-white transition hover:bg-[#1da851]"
                        >
                            <MessageCircle size={19} /> WhatsApp
                        </a>
                        <a
                            href={`tel:${siteInfo.phoneE164}`}
                            className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/60 px-7 py-3.5 font-semibold text-white transition hover:bg-white hover:text-stone-900"
                        >
                            <Phone size={19} /> {siteInfo.phone}
                        </a>
                        <DirectionsButton variant="light" />
                    </div>
                    <p className="mt-5 inline-flex items-center gap-2 text-sm text-white/70">
                        <Clock size={15} /> {c('openDaily')}
                    </p>
                </div>
            </section>

            <ContactSection />
        </div>
    );
}
