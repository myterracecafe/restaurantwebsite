import siteInfo from '@/data/site-info.json';
import menuData from '@/data/menu.json';
import awardsData from '@/data/awards.json';
import { routing } from '@/i18n/routing';
import { BASE_URL } from './seo';
import tr from '@/messages/tr.json';
import en from '@/messages/en.json';
import ar from '@/messages/ar.json';
import de from '@/messages/de.json';
import ru from '@/messages/ru.json';
import es from '@/messages/es.json';
import fr from '@/messages/fr.json';
import { FAQ_COUNT } from '@/data/faq';

/**
 * Single source of truth for all machine-readable surfaces:
 * REST (/api/public/*), MCP (/api/mcp), WebMCP, llms.txt, JSON-LD.
 * Keeps every agent channel byte-consistent with the website.
 */

const MESSAGES: Record<string, typeof en> = { tr, en, ar, de, ru, es, fr };

export const SUPPORTED_LANGS = routing.locales;
export function normalizeLang(lang?: string): string {
    return lang && (routing.locales as readonly string[]).includes(lang)
        ? lang
        : routing.defaultLocale;
}

const loc = (field: Record<string, string>, lang: string) =>
    field[lang] ?? field.en ?? Object.values(field)[0];

export function businessInfo(lang: string = routing.defaultLocale) {
    const l = normalizeLang(lang);
    return {
        name: siteInfo.name,
        description: siteInfo.description,
        neighborhood: siteInfo.neighborhood,
        cuisines: siteInfo.cuisines,
        priceRange: siteInfo.priceRange,
        currency: siteInfo.currency,
        address: siteInfo.address,
        geo: siteInfo.geo,
        phone: siteInfo.phone,
        whatsapp: siteInfo.whatsapp,
        email: siteInfo.email,
        url: `${BASE_URL}/${l}`,
        openingHours: siteInfo.openingHours,
        rating: { google: siteInfo.rating, tripadvisor: siteInfo.tripadvisorRating },
        maps: siteInfo.mapsPlaceUrl,
        directions: siteInfo.directionsUrl,
        languages: SUPPORTED_LANGS,
        social: siteInfo.socials,
        halal: true,
        features: ['rooftop terrace', 'sea view', 'Hagia Sophia & Blue Mosque view', 'hookah/nargile', 'outdoor seating', 'free WiFi', 'family friendly', 'vegetarian options', 'reservations'],
    };
}

export function openingHours() {
    return {
        text: siteInfo.openingHours,
        opens: siteInfo.openingHoursSpec.opens,
        closes: siteInfo.openingHoursSpec.closes,
        days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        note: 'Open every day, including weekends. Breakfast served from opening.',
    };
}

export function menu(lang: string = routing.defaultLocale) {
    const l = normalizeLang(lang);
    return menuData.categories.map((c) => ({
        id: c.id,
        category: loc(c.name as Record<string, string>, l),
        items: c.items.map((i) => ({
            id: i.id,
            name: loc(i.name as Record<string, string>, l),
            description: loc(i.description as Record<string, string>, l),
        })),
    }));
}

export function searchMenu(query: string, lang: string = routing.defaultLocale) {
    const q = query.trim().toLocaleLowerCase(normalizeLang(lang));
    if (!q) return [];
    return menu(lang)
        .flatMap((c) => c.items.map((i) => ({ ...i, category: c.category })))
        .filter((i) => `${i.name} ${i.description}`.toLocaleLowerCase().includes(q))
        .slice(0, 25);
}

export function faq(lang: string = routing.defaultLocale) {
    const l = normalizeLang(lang);
    const f = MESSAGES[l].FAQ as Record<string, string>;
    return Array.from({ length: FAQ_COUNT }, (_, i) => ({
        question: f[`q${i + 1}`],
        answer: f[`a${i + 1}`],
    }));
}

export function awards(lang: string = routing.defaultLocale) {
    const l = normalizeLang(lang);
    return awardsData.map((a) => ({
        organization: a.org,
        award: loc(a.award as Record<string, string>, l),
        detail: loc(a.detail as Record<string, string>, l),
        year: a.year,
        url: a.url,
    }));
}

export function reservation() {
    return {
        whatsapp: siteInfo.whatsapp,
        phone: siteInfo.phoneE164,
        note: 'Reservations via WhatsApp or phone. Walk-ins welcome; booking recommended for a table with a view.',
    };
}

export function publicBundle(lang: string = routing.defaultLocale) {
    const l = normalizeLang(lang);
    return {
        business: businessInfo(l),
        openingHours: openingHours(),
        menu: menu(l),
        faq: faq(l),
        awards: awards(l),
        reservation: reservation(),
        lang: l,
        generatedFrom: `${BASE_URL}/${l}`,
    };
}
