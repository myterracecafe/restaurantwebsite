import siteInfo from '@/data/site-info.json';

// Public IDs (safe to ship in client HTML). Env overrides the committed default.
export const GA4_ID = process.env.NEXT_PUBLIC_GA_ID || siteInfo.analytics?.ga4 || '';
export const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || siteInfo.analytics?.gtm || '';
export const YANDEX_METRICA_ID =
    process.env.NEXT_PUBLIC_YANDEX_METRICA || siteInfo.analytics?.yandexMetrica || '';
