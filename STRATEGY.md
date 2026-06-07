# MY TERRACE CAFE RESTAURANT — MASTER SEO/GEO/AIEO STRATEGY & BUILD SPEC
### Single source of truth for ranking #1 in Sultanahmet across Organic Search, Google/Apple Maps, and AI Answer Engines
**Date: 2026-06-07 · Status: Authoritative build guide**

> Verified facts: 24 real DJI drone clips + ~17 real food/view photos + 7 influencer reels exist in `../videolar/`. Stack: Next.js 16 / next-intl v4, locales `tr`(default)/`en`/`ar`/`de`. **No** routing.ts, navigation.ts, sitemap.ts, robots.ts, JSON-LD, per-locale metadata, `dir="rtl"`, or next/image today. Real geo: **41.00429, 28.97367**. Google CID hex `0x236e6f6f374443e9` → decimal `2553130251954095593`.

---

## 1. EXECUTIVE SUMMARY

My Terrace is a **sleeping giant**: ~5,300–5,640 real Google reviews at **4.6–4.7** and a ~65K-follower Instagram with viral breakfast/view reels — yet invisible in every editorial "best of" listicle, with an under-built generic-template site that throws away both the off-site authority and the owner's real drone/photo assets.

### The 5 biggest opportunities
1. **Multilingual blue ocean — Arabic & German.** No top competitor publishes AR or DE content. We already have TR/EN/AR/DE wired. Own those high-spend, underserved markets (Gulf/Saudi + Ramadan iftar spike).
2. **Technical/structured-data supremacy on a modern stack.** Competitors are weak on schema/CWV; Next.js 16 lets us ship perfect Restaurant+Menu+FAQ JSON-LD, hreflang, sitemap, green Core Web Vitals.
3. **Concept whitespace:** casual rooftop kahvaltı + kebab + seafood + nargile + view. Nobody owns the all-day casual Turkish-breakfast-with-a-view + nargile intersection — our exact concept.
4. **Convert the existing review moat** (~5,600 reviews) into local-pack dominance via a 4-language review-velocity engine + fully-optimized GBP (owner task).
5. **AI-answer citations are wide open** — absent from the ~6 travel blogs + TripAdvisor/Reddit AI engines synthesize from.

### THE SINGLE MOST IMPORTANT INSIGHT
**Off-site authority already exists; the website is the bottleneck and the multiplier.** Fix the website to faithfully expose the real assets and structure them for machines, then run the off-site review/citation engine in parallel. Use the owner's drone clips and real photos already in `videolar/`.

> ⚠️ **Credibility correction:** site claims "4.9" but aggregators show **4.6–4.7**. Use the real number + count ("4.7 ★ · 5,600+ reviews") as plain text, and **never hardcode a self-served `aggregateRating` in JSON-LD** (manual-action risk).

---

## 2. COMPETITIVE POSITIONING

| Tier | Competitor | Why they rank | Weakness we exploit |
|---|---|---|---|
| Incumbent | **Seven Hills** (~15k reviews, 5 langs, keyword blog) | Brand authority, owns "Sultanahmet rooftop / Hagia Sophia view" | Very expensive, "pay for the view"; no AR/DE; no clean schema |
| Digital challenger | **Queb Lounge** (TA 4.7, content blog) | Real SEO content engine | EN-led, no AR/DE, no schema, smaller review base |
| Authority halo | **Deraliye / Deraliye Terrace** (Michelin, TA 4.9) | Michelin + Travelers' Choice | Ottoman fine-dining not casual breakfast/nargile; EN/TR only; broken widgets |
| Mid-tier view | Roof Mezze 360, Panoramic (Adamar), Loti Roof Lounge | Genuine views, hotel traffic | Thin aggregator-dependent sites — **overtake this tier first** |

### Our wedge (sequenced — do NOT fight Seven Hills head-on day one)
1. Win uncontested lanes: AR + DE + Turkish-breakfast + nargile long-tail.
2. Out-execute on technical/structured data.
3. Convert the review moat into local-pack wins.
4. Position on "same view, genuine food, fair value, casual all-day."
5. Earn listicle + AI-citation real estate, then contest the head term.

**Positioning statement:** "My Terrace is a casual all-day rooftop terrace in the heart of Sultanahmet serving generous Turkish breakfast, charcoal kebabs, fresh seafood and nargile — with the same Hagia Sophia, Blue Mosque and Sea of Marmara view as the famous names, at honest prices."

---

## 3. CURRENT STATE SCORECARD

| Dimension | Score | Key gaps |
|---|---|---|
| Design / Visual | **3/10** | YouTube hero of unrelated tourism video (kills LCP + authenticity); menu cards render blank (prices & images exist in data); gallery = generic Unsplash; About = 1 paragraph + 3 empty cards; system fonts; amber overused; no testimonials; "4.9" unproven; mobile TopBar hidden, lang-switcher hover-only, hamburger contrast bug. Real assets unused. |
| Technical SEO | **2/10** | No sitemap/robots, zero JSON-LD, single static EN metadata for all langs, no generateMetadata/hreflang/canonical/metadataBase, no dir="rtl", no next/image, no remotePatterns, GA commented out, no next/font. |
| GEO / Local | **4/10 off / 2/10 on** | Strong: ~5,600 reviews @ 4.6–4.7. Weak: NAP name inconsistent, hours mismatch (site 10:00–00:00 vs TripAdvisor 08:30–01:00), duplicate listings, no on-site geo/schema, footer missing email. |
| AIEO | **1/10** | No schema, no AI-crawler robots policy, no llms.txt, FAQ invisible to crawlers (client accordion), absent from listicles/Reddit/Wikidata, stock photos, thin entity-rich copy. |

---

## 4. PRIORITIZED ROADMAP

### PHASE 1 — FOUNDATION & QUICK WINS
1.1 i18n routing.ts/navigation.ts · 1.2 robots.ts (allow + AI crawlers) · 1.3 sitemap.ts (locale×route + alternates) · 1.4 metadataBase + per-locale generateMetadata · 1.5 hreflang/canonical helper · 1.6 Restaurant+WebSite+Organization JSON-LD (NO self aggregateRating) · 1.7 dir="rtl" for Arabic · 1.8 GA4 enable · 1.9 transcode drone clip → self-hosted hero/video · 1.10 footer email + NAP + geo/placeId/cid · 1.11 fix "4.9"→real rating, TopBar on mobile · 1.12 next/image + remotePatterns.

### PHASE 2 — DESIGN / VISUAL OVERHAUL
2.1 render menu images + prices (#1 conversion fix) · 2.2 next/font (serif display + Inter + Cairo for AR) · 2.3 refine palette · 2.4 real drone hero + location-rich H1 + WhatsApp CTA · 2.5 gallery from real photos w/ filters · 2.6 expand About (story, real photos, trust) · 2.7 Testimonials section · 2.8 fix mobile header + tap lang switcher · 2.9 FloatingWhatsApp sizing + form success · 2.10 replace remaining Unsplash with real WebP.

### PHASE 3 — CONTENT & AIEO
3.1 fix FAQ crawlability + expand 4→10–12 Q&A all langs · 3.2 FAQPage JSON-LD · 3.3 Menu JSON-LD from menu.json · 3.4 Breadcrumb + BlogPosting JSON-LD · 3.5 entity-rich declarative copy · 3.6 llms.txt · 3.7 blog rich heading hierarchy · 3.8 12-article multilingual blog calendar · 3.9 per-locale OG images + favicons/manifest.

### PHASE 4 — GEO / OFF-SITE (OWNER TASKS)
Claim/verify GBP (primary category Restaurant) · fix NAP everywhere to ONE string + correct hours · merge duplicate listings · review-velocity engine (QR cards 4 langs, respond 100%, +5/week) · GBP completeness (photos, menu, attributes, posts, Q&A, messaging, reservations) · Apple Business Connect + Bing Places + Yandex · tier-1 citations (TripAdvisor/Yelp/Foursquare/TheFork) · digital PR onto travel blogs · Reddit participation · Wikidata entity.

**Code tasks supporting GEO** are folded into Phases 1–3.

---

## 5. JSON-LD & METADATA SPEC (copy-ready)

**Constants:** `BASE="https://myterracecaferestaurant.com"` · geo `41.00429, 28.97367` · CID `2553130251954095593` · phone E.164 `+905359318817`. Architecture: one server module `src/lib/schema.ts`, injected via `src/components/JsonLd.tsx`, cross-referenced by stable `@id`.

- **Restaurant** (home/layout): name, url, image[], logo, description, telephone, email, priceRange `$$`, currenciesAccepted TRY, servesCuisine[Turkish, Mediterranean, Seafood, Kebab, Breakfast], hasMenu @id, acceptsReservations, address PostalAddress, geo GeoCoordinates, hasMap (cid URL), openingHoursSpecification, amenityFeature[Rooftop, Sea view, Hagia Sophia/Blue Mosque view, Outdoor seating, Nargile, Free WiFi, Halal], sameAs[], parentOrganization. **OMIT self-served aggregateRating.**
- **WebSite + Organization** (@graph, layout, every page).
- **Menu** (/menu): Menu→hasMenuSection[]→hasMenuItem[] w/ offers{price String, priceCurrency TRY} from menu.json.
- **FAQPage** (home): built from getTranslations('FAQ') so markup === visible text.
- **BreadcrumbList** (non-home) + **BlogPosting** (blog posts, ISO dates +03:00).
- **Injection** XSS-safe: `JSON.stringify(data).replace(/</g,"\\u003c")`.
- **robots.ts:** allow `*` (disallow /api/), explicit allow GPTBot/OAI-SearchBot/ChatGPT-User/PerplexityBot/Google-Extended/Applebot-Extended/ClaudeBot, sitemap + host.

### Exact Title/Desc/H1 (HOME)
- **TR** Title `Ayasofya Manzaralı Teras Restoran Sultanahmet | My Terrace` · H1 `Sultanahmet'in Kalbinde Ayasofya ve Deniz Manzaralı Teras Restoran`
- **EN** Title `Sultanahmet Rooftop Restaurant, Hagia Sophia View | My Terrace` · H1 `Rooftop Dining in Sultanahmet With Hagia Sophia, Blue Mosque & Sea Views`
- **AR** (rtl) Title `مطعم تراس بإطلالة على آيا صوفيا – السلطان أحمد | My Terrace`
- **DE** Title `Dachterrasse Restaurant Sultanahmet, Hagia-Sophia-Blick | My Terrace`

---

## 6. KEYWORD & CONTENT MAP

| Page | TR | EN | AR | DE |
|---|---|---|---|---|
| Home | Sultanahmet teras/manzaralı restoran, Ayasofya manzaralı | Sultanahmet rooftop restaurant, Hagia Sophia view, restaurant near Blue Mosque | مطعم سلطان أحمد، إطلالة آيا صوفيا، روف توب | Restaurant Sultanahmet mit Aussicht, Hagia-Sophia-Blick |
| Menu/kahvaltı | serpme kahvaltı, manzaralı kahvaltı | best Turkish breakfast Sultanahmet, halal Turkish breakfast | فطور تركي، فطور حلال، افطار رمضان | türkisches Frühstück Istanbul |
| Menu kebap/seafood | Sultanahmet kebap/balık | kebab/seafood with a view, halal near Hagia Sophia | كباب بإطلالة، حلال قرب آيا صوفيا | Kebab/Fisch mit Aussicht, halal |
| About terrace/nargile | nargile teras, gün batımı | rooftop sunset, hookah with view | نرجيلة بإطلالة، غروب | Sonnenuntergang, Shisha mit Aussicht |
| Contact | teras restoran rezervasyon | book a table rooftop | حجز طاولة | Tisch reservieren |

### Blog calendar (12, ~2/month)
1. Sultanahmet Manzaralı Kahvaltı Rehberi · 2. Best Turkish Breakfast With a View · 3. Sunset Over Hagia Sophia · 4. Halal Turkish Breakfast (Muslim guide, AR priority) · 5. Where to Eat Near Hagia Sophia · 6. أفضل مطعم بإطلالة (AR-first) · 7. مطاعم إفطار رمضان (seasonal) · 8. Türkisches Frühstück mit Aussicht (DE) · 9. En İyi Teras Restoranları (honest comparison) · 10. Sunset Dinner + Nargile · 11. Serpme Kahvaltı Nedir? (AI-Overview bait) · 12. Walking distances to attractions.

---

## 7. OPEN QUESTIONS / INPUTS NEEDED FROM OWNER
1. Domain `myterracecaferestaurant.com` confirmed? 2. GA4 ID. 3. GBP access + primary category. 4. Real rating + review count to display (use ~4.7/5,600+, not 4.9). 5. Correct hours (10:00–00:00 vs 08:30–01:00). 6. Verify coords/Place ID. 7. Halal status. 8. Menu TRY prices current & OK to publish? 9. Which drone clip for hero. 10. Permission to use real photos/reels + get testimonials. 11. Reservation provider (TheFork/OpenTable). 12. Listing-cleanup authority. 13. Canonical NAP string. 14. Search Console + Bing Webmaster access.

## 8. DEFINITION OF DONE
- **Organic:** top-3 for winnable lanes (Sultanahmet manzaralı kahvaltı, halal Turkish breakfast, restaurant near Blue Mosque w/ view, AR/DE breakfast+view), then head term; all 4 locales indexed w/ correct hreflang; valid Rich Results.
- **Maps:** in the 3-pack for rooftop/breakfast Sultanahmet from the tourist core; GBP 100% complete; net +5 reviews/week ≥4.6.
- **AI engines:** named in answers for the 5 target prompts in EN+AR+DE; present in ≥3 listicles; Wikidata live.
- **Conversion:** LCP < 1.8s, CWV green, menu shows images+prices.
