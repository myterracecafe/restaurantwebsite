import siteInfo from '@/data/site-info.json';

const { lat, lng } = siteInfo.geo;
const q = encodeURIComponent(siteInfo.name);

/** Turn-by-turn directions deep links for every major map app. */
export const DIRECTIONS: Record<string, string> = {
    google: `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`,
    apple: `https://maps.apple.com/?daddr=${lat},${lng}&q=${q}`,
    yandex: `https://yandex.com/maps/?rtext=~${lat}%2C${lng}&rtt=auto`,
    bing: `https://www.bing.com/maps/directions?rtp=~pos.${lat}_${lng}`,
    waze: `https://waze.com/ul?ll=${lat},${lng}&navigate=yes`,
};

/** "View on map" (place) links. */
export const VIEW_ON: Record<string, string> = {
    google: siteInfo.mapsPlaceUrl,
    apple: `https://maps.apple.com/?ll=${lat},${lng}&q=${q}`,
    yandex: `https://yandex.com/maps/?pt=${lng},${lat}&z=17&l=map`,
    bing: `https://www.bing.com/maps?cp=${lat}~${lng}&lvl=17&q=${q}`,
};

export type MapProvider = { id: keyof typeof DIRECTIONS; label: string };

export const MAP_PROVIDERS: MapProvider[] = [
    { id: 'google', label: 'Google Maps' },
    { id: 'apple', label: 'Apple Maps' },
    { id: 'yandex', label: 'Yandex Maps' },
    { id: 'bing', label: 'Bing Maps' },
    { id: 'waze', label: 'Waze' },
];

/** Best-guess default map app for the current platform (client-side only). */
export function preferredProvider(): MapProvider['id'] {
    if (typeof navigator === 'undefined') return 'google';
    const ua = navigator.userAgent || '';
    if (/iPhone|iPad|iPod|Macintosh/.test(ua)) return 'apple';
    if (/\b(RU|BY|KZ)\b/i.test(navigator.language) || /yandex/i.test(ua)) return 'yandex';
    return 'google';
}

export const GEO = { lat, lng };
