import siteInfo from '@/data/site-info.json';
import menuData from '@/data/menu.json';
import awardsData from '@/data/awards.json';
import { BASE_URL, localeUrl } from './seo';

const SAME_AS = [
    siteInfo.socials.instagram,
    siteInfo.socials.tiktok,
    siteInfo.socials.facebook,
    siteInfo.socials.tripadvisor,
    'https://restaurantguru.com/Mina-Teras-and-Bar-Istanbul',
    'https://www.google.com/maps?cid=2553130251954095593',
];

const AWARD_TEXTS = awardsData.map((a) => `${a.org} — ${a.award.en} (${a.year})`);

const ID = {
    restaurant: `${BASE_URL}/#restaurant`,
    organization: `${BASE_URL}/#organization`,
    website: `${BASE_URL}/#website`,
    menu: `${BASE_URL}/#menu`,
};

const abs = (path: string) => (path.startsWith('http') ? path : `${BASE_URL}${path}`);

const DESCRIPTIONS: Record<string, string> = {
    tr: 'Sultanahmet’in kalbinde, Ayasofya, Sultanahmet Camii ve Marmara Denizi manzaralı teras restoran. Serpme Türk kahvaltısı, kebap, deniz ürünleri ve nargile.',
    en: 'Rooftop terrace restaurant in the heart of Sultanahmet with views of Hagia Sophia, the Blue Mosque and the Sea of Marmara. Turkish breakfast, kebabs, seafood and hookah.',
    ar: 'مطعم تراس في قلب السلطان أحمد بإطلالة على آيا صوفيا والمسجد الأزرق وبحر مرمرة. فطور تركي، كباب، مأكولات بحرية ونرجيلة.',
    de: 'Dachterrassen-Restaurant im Herzen von Sultanahmet mit Blick auf die Hagia Sophia, die Blaue Moschee und das Marmarameer. Türkisches Frühstück, Kebab, Fisch und Shisha.',
    ru: 'Ресторан с террасой на крыше в сердце Султанахмета с видом на Айя-Софию, Голубую мечеть и Мраморное море. Турецкий завтрак, кебабы, морепродукты и кальян.',
    es: 'Restaurante con terraza en la azotea en el corazón de Sultanahmet con vistas a Santa Sofía, la Mezquita Azul y el mar de Mármara. Desayuno turco, kebabs, mariscos y narguile.',
    fr: 'Restaurant avec terrasse sur le toit au cœur de Sultanahmet avec vue sur Sainte-Sophie, la Mosquée Bleue et la mer de Marmara. Petit-déjeuner turc, kebabs, fruits de mer et narguilé.',
};

const ALL_DAYS = [
    'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday',
];

export function organizationSchema() {
    return {
        '@type': 'Organization',
        '@id': ID.organization,
        name: siteInfo.name,
        url: BASE_URL,
        logo: {
            '@type': 'ImageObject',
            url: abs('/logo.webp'),
        },
        sameAs: SAME_AS,
        contactPoint: {
            '@type': 'ContactPoint',
            telephone: siteInfo.phoneE164,
            contactType: 'reservations',
            availableLanguage: ['Turkish', 'English', 'Arabic', 'German'],
        },
    };
}

export function websiteSchema(locale: string) {
    return {
        '@type': 'WebSite',
        '@id': ID.website,
        url: BASE_URL,
        name: siteInfo.name,
        inLanguage: locale,
        publisher: { '@id': ID.organization },
    };
}

/**
 * Restaurant schema. Deliberately OMITS aggregateRating — a self-served
 * rating is a manual-action risk. Google surfaces the real GBP rating in the
 * Maps/Knowledge panel regardless.
 */
export function restaurantSchema(locale: string) {
    return {
        '@type': 'Restaurant',
        '@id': ID.restaurant,
        name: siteInfo.name,
        alternateName: ['My Terrace', 'My Terrace Sultanahmet'],
        slogan: 'Rooftop dining with Hagia Sophia, Blue Mosque & Sea of Marmara views.',
        knowsLanguage: ['tr', 'en', 'ar', 'de', 'ru', 'es', 'fr'],
        areaServed: ['Sultanahmet', 'Fatih', 'Istanbul'],
        url: localeUrl(locale, '/'),
        image: [
            abs('/images/gallery/terrace-view-marmara-sea.webp'),
            abs('/images/gallery/mixed-grill-feast.webp'),
            abs('/images/gallery/terrace-guests-bamboo-roof.webp'),
        ],
        logo: abs('/logo.webp'),
        description: DESCRIPTIONS[locale] ?? DESCRIPTIONS.en,
        telephone: siteInfo.phoneE164,
        email: siteInfo.email,
        priceRange: siteInfo.priceRange,
        currenciesAccepted: siteInfo.currency,
        paymentAccepted: 'Cash, Credit Card',
        servesCuisine: siteInfo.cuisines,
        menu: localeUrl(locale, '/menu'),
        hasMenu: { '@id': ID.menu },
        acceptsReservations: localeUrl(locale, '/reservations'),
        smokingAllowed: true,
        address: {
            '@type': 'PostalAddress',
            streetAddress: siteInfo.addressParts.street,
            addressLocality: siteInfo.addressParts.locality,
            addressRegion: siteInfo.addressParts.region,
            postalCode: siteInfo.addressParts.postalCode,
            addressCountry: siteInfo.addressParts.country,
        },
        geo: {
            '@type': 'GeoCoordinates',
            latitude: siteInfo.geo.lat,
            longitude: siteInfo.geo.lng,
        },
        hasMap: siteInfo.mapsPlaceUrl,
        openingHoursSpecification: [
            {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ALL_DAYS,
                opens: siteInfo.openingHoursSpec.opens,
                closes: siteInfo.openingHoursSpec.closes,
            },
        ],
        amenityFeature: [
            ['Rooftop terrace', true],
            ['Sea view', true],
            ['Hagia Sophia / Blue Mosque view', true],
            ['Outdoor seating', true],
            ['Hookah / Nargile', true],
            ['Free WiFi', true],
            ['Halal options', true],
            ['Vegetarian options', true],
            ['Family friendly', true],
        ].map(([name, value]) => ({
            '@type': 'LocationFeatureSpecification',
            name,
            value,
        })),
        award: AWARD_TEXTS,
        sameAs: SAME_AS,
        parentOrganization: { '@id': ID.organization },
        potentialAction: [
            {
                '@type': 'ReserveAction',
                name: 'Reserve a table',
                target: {
                    '@type': 'EntryPoint',
                    urlTemplate: localeUrl(locale, '/reservations'),
                    inLanguage: locale,
                    actionPlatform: [
                        'https://schema.org/DesktopWebPlatform',
                        'https://schema.org/MobileWebPlatform',
                        'https://schema.org/IOSPlatform',
                        'https://schema.org/AndroidPlatform',
                    ],
                },
                result: { '@type': 'FoodEstablishmentReservation', name: 'Table reservation at My Terrace Cafe Restaurant' },
            },
            {
                '@type': 'ReserveAction',
                name: 'Reserve via WhatsApp',
                target: {
                    '@type': 'EntryPoint',
                    urlTemplate: siteInfo.whatsapp,
                    actionPlatform: [
                        'https://schema.org/MobileWebPlatform',
                        'https://schema.org/IOSPlatform',
                        'https://schema.org/AndroidPlatform',
                    ],
                },
                result: { '@type': 'FoodEstablishmentReservation', name: 'WhatsApp table reservation' },
            },
            {
                '@type': 'ReserveAction',
                name: 'Reserve by phone',
                target: { '@type': 'EntryPoint', urlTemplate: `tel:${siteInfo.phoneE164}` },
                result: { '@type': 'FoodEstablishmentReservation', name: 'Phone table reservation' },
            },
            { '@type': 'ViewAction', name: 'View the menu', target: localeUrl(locale, '/menu') },
        ],
    };
}

/** Per-page WebPage node with speakable for voice assistants. */
export function webPageSchema(opts: {
    locale: string;
    href: string;
    name: string;
    description: string;
    image?: string;
}) {
    const url = localeUrl(opts.locale, opts.href);
    return {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        '@id': `${url}#webpage`,
        url,
        name: opts.name,
        description: opts.description,
        inLanguage: opts.locale,
        isPartOf: { '@id': ID.website },
        about: { '@id': ID.restaurant },
        primaryImageOfPage: opts.image ? abs(opts.image) : abs('/images/og-default.jpg'),
        speakable: {
            '@type': 'SpeakableSpecification',
            cssSelector: ['h1', '.page-intro', '.speakable'],
        },
    };
}

const DEFINED_TERMS: { id: string; name: LocalizedField; desc: LocalizedField }[] = [
    {
        id: 'serpme-kahvalti',
        name: { tr: 'Serpme Kahvaltı', en: 'Serpme Kahvaltı (Turkish breakfast spread)', ar: 'سرپمه كهفالتي (فطور تركي)', de: 'Serpme Kahvaltı (türkisches Frühstück)' },
        desc: { tr: 'Onlarca küçük tabaktan oluşan, paylaşımlı geleneksel Türk kahvaltısı.', en: 'A shared traditional Turkish breakfast served as dozens of small plates.', ar: 'فطور تركي تقليدي يُقدّم كعشرات الأطباق الصغيرة للمشاركة.', de: 'Ein geteiltes traditionelles türkisches Frühstück aus Dutzenden kleinen Tellern.' },
    },
    {
        id: 'nargile',
        name: { tr: 'Nargile', en: 'Nargile (hookah)', ar: 'نرجيلة', de: 'Nargile (Wasserpfeife)' },
        desc: { tr: 'Geleneksel su piposu; terasta manzara eşliğinde sunulur.', en: 'Traditional water pipe, served on the terrace with the view.', ar: 'الشيشة التقليدية، تُقدّم على التراس مع الإطلالة.', de: 'Traditionelle Wasserpfeife, auf der Terrasse mit Aussicht serviert.' },
    },
    {
        id: 'sultanahmet-rooftop',
        name: { tr: 'Sultanahmet teras restoranı', en: 'Sultanahmet rooftop restaurant', ar: 'مطعم سطح في السلطان أحمد', de: 'Sultanahmet Dachterrassen-Restaurant' },
        desc: { tr: 'Tarihi yarımadada, çatı katından Ayasofya ve denizi gören restoran.', en: 'A historic-peninsula restaurant whose rooftop overlooks Hagia Sophia and the sea.', ar: 'مطعم في شبه الجزيرة التاريخية يطل سطحه على آيا صوفيا والبحر.', de: 'Restaurant auf der historischen Halbinsel mit Dachblick auf Hagia Sophia und Meer.' },
    },
];

export function definedTermsSchema(locale: string) {
    return {
        '@context': 'https://schema.org',
        '@type': 'DefinedTermSet',
        '@id': `${BASE_URL}/#glossary`,
        name: 'My Terrace glossary',
        inLanguage: locale,
        hasDefinedTerm: DEFINED_TERMS.map((t) => ({
            '@type': 'DefinedTerm',
            '@id': `${BASE_URL}/#term-${t.id}`,
            name: tr(t.name, locale),
            description: tr(t.desc, locale),
            inDefinedTermSet: `${BASE_URL}/#glossary`,
        })),
    };
}

/** Top-level @graph rendered on every page (in the layout). */
export function siteGraph(locale: string) {
    return {
        '@context': 'https://schema.org',
        '@graph': [organizationSchema(), websiteSchema(locale), restaurantSchema(locale)],
    };
}

type LocalizedField = Record<string, string>;
const tr = (field: LocalizedField, locale: string) =>
    field[locale] ?? field.en ?? Object.values(field)[0];

/** Menu schema built from menu.json. Prices are intentionally omitted. */
export function menuSchema(locale: string) {
    return {
        '@context': 'https://schema.org',
        '@type': 'Menu',
        '@id': ID.menu,
        name: `${siteInfo.name} — Menu`,
        inLanguage: locale,
        hasMenuSection: menuData.categories.map((cat) => ({
            '@type': 'MenuSection',
            name: tr(cat.name as LocalizedField, locale),
            hasMenuItem: cat.items.map((item) => ({
                '@type': 'MenuItem',
                name: tr(item.name as LocalizedField, locale),
                description: tr(item.description as LocalizedField, locale),
                ...(item.image ? { image: item.image } : {}),
            })),
        })),
    };
}

export function faqSchema(faqs: { q: string; a: string }[]) {
    return {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((f) => ({
            '@type': 'Question',
            name: f.q,
            acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
    };
}

export function breadcrumbSchema(
    locale: string,
    items: { name: string; href: string }[],
) {
    return {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            name: item.name,
            item: localeUrl(locale, item.href),
        })),
    };
}

export function blogPostingSchema(
    locale: string,
    post: { slug: string; title: string; excerpt: string; image: string; date: string },
) {
    const url = localeUrl(locale, `/blog/${post.slug}`);
    return {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        '@id': `${url}#article`,
        headline: post.title.slice(0, 110),
        description: post.excerpt,
        image: abs(post.image),
        inLanguage: locale,
        datePublished: `${post.date}T09:00:00+03:00`,
        dateModified: `${post.date}T09:00:00+03:00`,
        mainEntityOfPage: url,
        author: { '@id': ID.organization },
        publisher: { '@id': ID.organization },
        isPartOf: { '@id': ID.website },
    };
}
