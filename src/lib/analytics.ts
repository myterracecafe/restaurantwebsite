'use client';

import { getStoredUTM } from './utm';

/**
 * Lightweight event layer. Pushes to GTM dataLayer AND GA4 gtag (so both work),
 * and is a safe no-op until a tag is installed. Every event auto-carries the
 * stored UTM/click-id attribution. Includes standard conversion events PLUS
 * custom intent/AI signals GA does not collect by default.
 */
type Params = Record<string, unknown>;

interface W extends Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
}

export const EVENT = {
    reserve: 'reserve_click',
    reservationSubmitted: 'reservation_submitted',
    reservationFormStarted: 'reservation_form_started',
    whatsapp: 'whatsapp_click',
    call: 'call_click',
    directions: 'directions_click',
    menuCategory: 'menu_category_view',
    menuSearch: 'menu_search',
    galleryOpen: 'gallery_open',
    galleryFilter: 'gallery_filter',
    social: 'social_click',
    language: 'language_switch',
    review: 'review_click',
    blogOpen: 'blog_open',
    aiReferral: 'ai_referral',
} as const;

export function track(event: string, params: Params = {}) {
    if (typeof window === 'undefined') return;
    const w = window as W;
    const enriched = { ...getStoredUTM(), ...params };
    w.dataLayer = w.dataLayer || [];
    w.dataLayer.push({ event, ...enriched });
    if (typeof w.gtag === 'function') w.gtag('event', event, enriched);
}

/** Detect arrivals from AI assistants (custom signal most setups miss). */
export function detectAiReferral() {
    if (typeof document === 'undefined') return;
    const ref = document.referrer || '';
    const sp = new URLSearchParams(location.search);
    const src = (sp.get('utm_source') || sp.get('ref') || ref).toLowerCase();
    const engines = ['chatgpt', 'openai', 'perplexity', 'claude', 'anthropic', 'gemini', 'bard', 'copilot', 'bing', 'you.com', 'mistral'];
    const hit = engines.find((e) => src.includes(e));
    if (hit) track(EVENT.aiReferral, { engine: hit, referrer: ref || undefined });
}
