'use client';

// Capture & persist ad-attribution params (UTM + click IDs) for the session,
// so every conversion/event and the WhatsApp message carry the ad source.
const KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term', 'gclid', 'fbclid', 'msclkid', 'yclid'];
const STORE = 'mt-utm';

export function captureUTM() {
    if (typeof window === 'undefined') return;
    try {
        const sp = new URLSearchParams(window.location.search);
        const found: Record<string, string> = {};
        for (const k of KEYS) {
            const v = sp.get(k);
            if (v) found[k] = v;
        }
        if (Object.keys(found).length) {
            const existing = getStoredUTM();
            sessionStorage.setItem(STORE, JSON.stringify({ ...existing, ...found }));
        }
    } catch {
        /* ignore */
    }
}

export function getStoredUTM(): Record<string, string> {
    if (typeof window === 'undefined') return {};
    try {
        return JSON.parse(sessionStorage.getItem(STORE) || '{}');
    } catch {
        return {};
    }
}

/** One-line summary for appending to a WhatsApp/contact message. */
export function utmSummary(): string {
    const u = getStoredUTM();
    const parts = Object.entries(u).map(([k, v]) => `${k}=${v}`);
    return parts.length ? parts.join(' ') : '';
}
