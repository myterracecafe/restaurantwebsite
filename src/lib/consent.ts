'use client';

// Consent Mode v2 update from the cookie banner. Analytics stays on (first-party,
// data is a priority); advertising storage is gated by the user's choice.
export const CONSENT_KEY = 'mt-cookie-consent';

type W = Window & { gtag?: (...args: unknown[]) => void; dataLayer?: unknown[] };

export function applyConsent(adsGranted: boolean) {
    if (typeof window === 'undefined') return;
    const w = window as W;
    const ad = adsGranted ? 'granted' : 'denied';
    const update = { ad_storage: ad, ad_user_data: ad, ad_personalization: ad, analytics_storage: 'granted' };
    if (typeof w.gtag === 'function') {
        w.gtag('consent', 'update', update);
    } else {
        w.dataLayer = w.dataLayer || [];
        w.dataLayer.push(['consent', 'update', update]);
    }
    try {
        localStorage.setItem(CONSENT_KEY, adsGranted ? 'all' : 'analytics');
    } catch {
        /* ignore */
    }
}

export function storedConsent(): string | null {
    try {
        return localStorage.getItem(CONSENT_KEY);
    } catch {
        return null;
    }
}
