Facts verified. The reports are consistent with the actual codebase (routing has 7 locales hardcoded, Hero uses plain `<img>`, padding is inconsistent: most pages `pt-28`, gallery/blog `pt-32`, body `pb-14` everywhere with no `md:pb-0` cleanup on inner pages). Now synthesizing the authoritative document.

---

# MY TERRACE CAFE RESTAURANT — AUTHORITATIVE UI/UX + ADS-READINESS MASTER PLAN
*Synthesis of 5 specialist audits (responsive · a11y · perf/CWV · ux-conversion-ads · dx). Deduped, fact-checked against the live codebase.*

---

## 1. EXECUTIVE SUMMARY — TOP 10 HIGHEST-IMPACT IMPROVEMENTS (RANKED)

| # | Improvement | Why it's #1-impact | Reports converging |
|---|---|---|---|
| **1** | **Add `reservation_submitted` GA4 event + mark it (and `call_click`) as conversions** | Today GA4 only sees *clicks*, never confirmed reservations. Without this, smart bidding optimizes toward the wrong signal and CAC math is wrong. Zero spend should start before this. | ux-ads |
| **2** | **Capture + persist UTM/gclid and attach to WhatsApp message + all events** | Ad campaign/source/medium is lost the moment the user lands. No attribution = blind spend. `detectAiReferral` already reads `utm_source` but throws it away. | ux-ads |
| **3** | **Fix Hero LCP: convert poster `<img>` → optimized `priority` image + preload, lazy-gate both videos (13.8 MB)** | LCP +200-500ms today; 13.8 MB of video on load tanks mobile 4G and Google Ads Landing-Page-Experience score (est. 6/10 → 8-9/10). | perf, dx |
| **4** | **Add global `:focus-visible` styles + skip-to-content link + reduced-motion support** | Three WCAG-A/AA failures at once (2.4.7, 2.4.1, 2.3.3). Cheap, sitewide, and a prerequisite for Meta/Google policy + EU accessibility law. | a11y, perf, responsive |
| **5** | **Gallery lightbox + mobile menu: ESC handler, focus trap, return-focus** | Keyboard users are trapped/lost (WCAG 2.1.1, 2.4.3 fail). Modals that don't close on ESC are the most common a11y bug auditors flag. | a11y |
| **6** | **Reduce menu friction: featured dish cards (image+name) + price-range callout + reserve CTA in-context** | Menu is the #1 decision page and currently hides prices AND images. Est. +15-25% menu→reserve. | ux-ads |
| **7** | **Standardize fixed-header offset + `pb-14 md:pb-0`, fix z-index stack (floating bar vs cookie), Hero CTA safe-area** | Inconsistent `pt-28`/`pt-32`, body `pb-14` never reset, floating bar (z-40) collides with cookie banner. Content overlap on 360-390px phones. | responsive, perf, ux-ads |
| **8** | **Post-submit success modal + WhatsApp-open confirmation (track completion, not just intent)** | Form feels unreliable (no proof message sent); users resubmit. Enables the real `reservation_submitted` fire point. | ux-ads |
| **9** | **Per-locale OG images (AR/DE/RU min) + locale-aware default in `seo.ts`** | Arabic/German Meta ads currently preview English/Turkish copy → kills CTR in the cheapest, highest-LTV markets. | ux-ads |
| **10** | **Hardening: single locale source-of-truth, CSP header, `error.tsx`/`not-found.tsx`, fix color contrast (`brand-200`→`white`)** | DX correctness + security (CSP is effectively required by ad platforms) + 1 more WCAG contrast fail (2.8:1 vs 4.5:1). | dx, a11y |

---

## 2. % SCORECARD

| Area | Score | One-line justification |
|---|---:|---|
| **Visual / UI design** | **84%** | Strong brand system (teal/terracotta/cream, Cormorant), cohesive sections; loses points on color-contrast fail and a few text-overflow/aspect-ratio rough edges at 360px. |
| **UX & conversion** | **62%** | Solid paths exist but menu hides prices+images, no success confirmation, no funnel events, trust signals missing above-the-fold on /reservations. |
| **Responsiveness (all screens)** | **74%** | Mostly fluid, but inconsistent header offsets, Hero CTA can fall behind mobile bar, z-index collisions, several grids awkward at tablet 768-834px. |
| **Accessibility (WCAG AA)** | **55%** | Multiple A/AA fails: no focus-visible, no skip link, lightbox/menu focus traps missing, contrast fail, animations ignore reduced-motion. |
| **Performance / CWV** | **64%** | Good SSG + `preload=none` + consent-gated tags, but 13.8 MB video, plain `<img>` hero LCP, 4 Cormorant weights, image CLS, webvisor INP risk. |
| **Code quality / DX** | **78%** | Clean structure, typed JSON, good analytics layer; loses points on locale duplication (3 places), middleware deprecation, no CSP, no error pages, `as Record` casts. |
| **SEO / Structured data** | **90%** | Excellent: JSON-LD (Restaurant/WebSite/Org), sitemap, hreflang, canonical, robots, llms.txt, MCP. Minor: hardcoded sitemap `lastmod`. |
| **Analytics / Tracking** | **58%** | Good event layer + Consent Mode v2 default-deny, but no `reservation_submitted`, no conversion marking, no UTM persistence, no funnel events. |
| **Ads-readiness** | **60%** | Infra is 95% ready (consent, GA4/GTM, schema); blocked by conversion tracking, UTM, message-match LPs, per-locale OG, video speed. |
| **i18n / RTL (7 langs)** | **80%** | 7 locales wired, RTL `dir` + `.rtl-flip` present; incomplete icon flipping (ArrowLeft, ExternalLink), language dropdown not RTL-aware, no per-locale OG. |

### Overall weighted score: **69%**
*Weighting: UX&conversion 15% · Responsiveness 12% · Performance 12% · A11y 12% · Ads-readiness 12% · Visual 10% · Analytics 10% · DX 7% · SEO 5% · i18n 5%.*
**Target after the fix plan below: 95%+ on UI/UX/responsive and "fully ad-ready."**

---

## 3. PRIORITIZED FIX PLAN (deduped across all 5 reports)

### P0 — DO NOW (blockers before any ad spend / launch-critical UX)

| # | Concrete change | Target file(s) | Expected impact | Effort |
|---|---|---|---|---|
| P0-1 | Add events to `EVENT`: `reservationSubmitted`, `phoneCallInitiated`. Fire `reservation_submitted` in form handler (with `value:guests, currency:'TRY'`, UTM spread) **before** WhatsApp opens. | `src/lib/analytics.ts`, `src/components/ContactSection.tsx` | +100% conversion-tracking accuracy; enables smart bidding | 2h |
| P0-2 | Create `src/lib/utm.ts` (`captureUTM`/`getStoredUTM`, incl. `gclid`); call from `AnalyticsBoot.tsx`; append UTM to WhatsApp text + spread into every `track()`. | `src/lib/utm.ts` (new), `src/components/AnalyticsBoot.tsx`, `ContactSection.tsx`, Floating* | Restores ad attribution; +20-30% accuracy | 3h |
| P0-3 | Hero poster → `next/image` `fill priority sizes="100vw"` (or `<img fetchPriority="high" loading="eager" decoding="async">`); add `<link rel="preload" as="image">` for poster. | `src/components/Hero.tsx`, `layout.tsx` head | LCP -200-500ms; Ads LP score ↑ | 1h |
| P0-4 | Lazy-gate both videos via IntersectionObserver (set `src` only when ~in-view); keep `preload="none"`, `muted`, poster. | `Hero.tsx`, `VideoSection.tsx` | -13.8 MB off initial load; mobile 4G ↑; INP ↑ | 3h |
| P0-5 | Global `:focus-visible` outline (3px brand-600, offset 2px). | `src/app/globals.css` | WCAG 2.4.7 pass; keyboard usability | 15m |
| P0-6 | Skip-to-content link + `<main id="main-content">`. | `src/app/[locale]/layout.tsx` | WCAG 2.4.1 pass | 15m |
| P0-7 | Gallery lightbox: ESC-to-close `useEffect` + focus trap + return focus + lock body scroll. | `src/components/GalleryGrid.tsx` | WCAG 2.1.1 / 2.4.3 pass | 45m |
| P0-8 | Mobile menu: focus first link on open, return focus on close, ESC to close, trap. | `src/components/Header.tsx` | WCAG 2.4.3 pass | 45m |
| P0-9 | Fix hero eyebrow contrast `text-brand-200` → `text-white` (also VideoSection/FeaturesSection eyebrows). | `Hero.tsx:44`, `VideoSection.tsx`, `FeaturesSection.tsx` | WCAG 1.4.3 pass (2.8:1→>7:1) | 15m |
| P0-10 | Standardize page offset: keep `pt-28` on all, change gallery/blog `pt-32`→`pt-28`; add `md:pb-0` to all inner page wrappers (`pb-20`→`pb-14 md:pb-0`). | `gallery/page.tsx:22`, `blog/page.tsx:24`, `blog/[slug]/page.tsx:56` | Consistent spacing, no dead space | 30m |
| P0-11 | Fix floating-bar/cookie z-index + Hero CTA safe area: floating bar `z-30 md:z-40`; Hero CTA wrapper `pb-20 sm:pb-0`; scroll cue `bottom-20 sm:bottom-6`. | `FloatingButtons.tsx`, `CookieConsent.tsx`, `Hero.tsx` | No overlap on 360-390px; CTAs reachable | 45m |
| P0-12 | Post-submit success modal ("Opening WhatsApp… if it doesn't open: [copy message]") + fire conversion on submit. | `ContactSection.tsx` | +10-15% perceived conversion; reliable fire point | 3h |
| P0-13 | Reduce-motion: add `useReducedMotion` hook; gate framer entrance anims + infinite scroll cue; CSS `@media (prefers-reduced-motion:reduce){ scroll-behavior:auto; .scroll-cue{display:none} }`. | `src/lib/useReducedMotion.ts` (new) + animated components, `globals.css` | WCAG 2.3.3; battery/INP ↑ | 1.5h |
| P0-14 | Menu: render 4-6 featured dish cards (image+name+short desc) + price-range callout + in-context "Reserve on WhatsApp" CTA. | `MenuSection.tsx` | +15-25% menu→reserve | 4h |
| P0-15 | GA4 admin: mark `reservation_submitted` (value≈TRY 500) + `phone_call_initiated`/`call_click` as conversions; verify **Google Ads Conversion Linker** tag fires in GTM; link GA4↔Ads; enable Enhanced Conversions. | GA4/GTM console (no code) | Smart bidding ROI +30-50% | 1h |

### P1 — BEFORE LAUNCHING ADS (ROI + quality)

| # | Concrete change | Target file(s) | Impact | Effort |
|---|---|---|---|---|
| P1-1 | Per-locale OG images (`og-default-ar/de/ru.jpg`) + locale-aware default in seo. | `src/lib/seo.ts`, `/public/images/`, `layout.tsx` | +10-15% Meta CTR (AR/DE/RU) | 3h |
| P1-2 | Reduce Cormorant weights `['400','500','600','700']`→`['400','600']`; ensure `preload:true` + needed subsets (latin-ext, cyrillic, arabic for Cairo). | `layout.tsx` | CLS ↓, fewer font requests | 30m |
| P1-3 | Image CLS: add `aspect-[4/3]` containers to gallery items + menu featured; keep `sizes`. | `GalleryGrid.tsx`, `MenuSection.tsx` | CLS -0.1-0.2 | 1h |
| P1-4 | Trust signals ATF on /reservations ("4.7★ 5,600+ reviews", "Confirmed in 1-2 hrs"); move form above map on mobile. | `reservations/page.tsx`, `ContactSection.tsx` | +8-12% form starts | 2h |
| P1-5 | Form a11y: `aria-required`, visible `*`, `aria-invalid`+inline errors, `aria-describedby`; map iframe `aria-label`. | `ContactSection.tsx` | WCAG 3.3 / 1.1.1; fewer errors | 1h |
| P1-6 | Language switcher: `role="listbox"`/`option`+`aria-selected`; RTL-aware position (`left-0` in rtl). | `Header.tsx` | WCAG 4.1.2; RTL polish | 45m |
| P1-7 | RTL icon flip: add `.rtl-flip` to ArrowLeft (blog slug), ExternalLink (Awards), any chevrons. | `blog/[slug]/page.tsx`, `AwardsSection.tsx` | RTL consistency | 20m |
| P1-8 | aria-labels on rating links (Hero/TopBar/Footer/Awards/Testimonials); `aria-hidden` on decorative menu dots. | those components | WCAG 1.1.1 / 1.3.1 | 30m |
| P1-9 | Tablet grid fixes: Testimonials `md:grid-cols-2 lg:grid-cols-3`→`sm:grid-cols-2 xl:grid-cols-3`; Awards `sm:grid-cols-2 lg:grid-cols-3`; Footer `grid-cols-1 sm:grid-cols-2 md:grid-cols-4`; menu featured `grid-cols-1 sm:grid-cols-2 md:grid-cols-4`; contact date/time `grid-cols-1 sm:grid-cols-2`. | Testimonials/Awards/Footer/Menu/ContactSection | Balanced 768-834px layouts | 1h |
| P1-10 | Cookie consent: `aria-modal="true"`, `aria-describedby`, focus mgmt; ensure privacy-policy link present (legal). | `CookieConsent.tsx` | WCAG + legal compliance | 45m |
| P1-11 | Funnel events: `reservation_form_viewed`, `reservation_form_started`, (optional) `reservation_form_abandoned`. | `analytics.ts`, `ContactSection.tsx` | Drop-off analysis | 2h |
| P1-12 | Convert Header/Footer logos to `next/image` (sized); responsive logo `h-10 sm:h-11`/`h-11 sm:h-12`. | `Header.tsx`, `Footer.tsx` | CWV; sharpness | 1h |
| P1-13 | Yandex Metrica: load webvisor/clickmap only for `ru` users; defer init via `requestIdleCallback`; disable clickmap on mobile. | `YandexMetrica.tsx` | INP -80-150ms | 1h |
| P1-14 | Touch targets: lightbox close `p-2` + `X size={28}` (≥44px); reserve CTA in Header at `md:` not just `lg:`. | `GalleryGrid.tsx`, `Header.tsx` | WCAG 2.5.5; tablet CTA | 30m |
| P1-15 | Hardening: single locale source-of-truth (export pattern from `routing.ts`, reuse in middleware/next.config/MCP); add CSP header; add `error.tsx`+`not-found.tsx`. | `routing.ts`, `middleware.ts`, `next.config.mjs`, `api/mcp/route.ts`, `app/[locale]/error.tsx`+`not-found.tsx` (new) | Security (ad-platform req), maintainability, resilient errors | 3h |
| P1-16 | Fluid Hero H1 `text-[clamp(1.75rem,5vw,3.5rem)]` (or add 360 base `text-3xl`); VideoSection title `sm:` step. | `Hero.tsx`, `VideoSection.tsx` | No overflow at 360px | 30m |

### P2 — OPTIMIZATION / POST-LAUNCH

| # | Change | File(s) | Impact | Effort |
|---|---|---|---|---|
| P2-1 | Per-campaign landing pages `/landing/breakfast`, `/landing/experience` (message-match H1+CTA+form prefill). | new routes | +15-20% ad CTR | 6h |
| P2-2 | Blog/Gallery → reserve CTAs (end-of-post CTA; "Reserve a Table" in lightbox footer). | `blog/[slug]/page.tsx`, `GalleryGrid.tsx` | +3-5% CVR | 2h |
| P2-3 | LQIP `placeholder="blur"`/`blurDataURL` for gallery/menu/social images. | image components | LCP smoothness | 3h |
| P2-4 | Migrate next.config `unused = false`? Move any remaining Unsplash refs to local `/images`; drop `images.unsplash.com` remotePattern if unused. | `next.config.mjs`, data | Optimized images | 1h |
| P2-5 | Replace `as Record<string,string>` casts with typed `LocalizedString` interfaces. | `src/data/types.ts` (new) + consumers | Type safety | 2h |
| P2-6 | Migrate `middleware.ts`→`proxy.ts` (Next 16 deprecation); auto-`lastmod` in sitemap; API-route error logging. | `middleware.ts`, `sitemap.ts`, `api/*/route.ts` | Future-proofing | 1.5h |
| P2-7 | FAQ `aria-controls`; DirectionsButton ESC/keyboard + responsive dropdown width; CSS `contain:` on heavy sections. | FAQSection/DirectionsButton/globals.css | Polish, INP | 1.5h |
| P2-8 | Offline conversion import (WhatsApp→GA4 via daily CSV / gclid match) + 9:16 creative assets for Meta. | ops/process | Closed-loop bidding | ongoing |

---

## 4. ADS-READINESS CHECKLIST

**Conversion tracking (GA4)**
- ◻ `reservation_submitted` event fired on form submit → `ContactSection.tsx` + `analytics.ts` (P0-1)
- ◻ Mark `reservation_submitted` as conversion (value ≈ TRY 500) → GA4 admin (P0-15)
- ◻ `phone_call_initiated`/`call_click` fired + marked as conversion → Floating*/GA4 admin (P0-1, P0-15)
- ◻ Funnel events (`reservation_form_viewed/_started/_abandoned`) → `analytics.ts` (P1-11)
- ◻ Enhanced Conversions enabled (hashed email on submit) → `ContactSection.tsx` + GA4 (P0-1/15)
- ✅ Event layer pushing to dataLayer + gtag → `src/lib/analytics.ts` (exists)

**UTM / attribution**
- ◻ Capture `utm_source/medium/campaign/content/term/gclid` on landing → `src/lib/utm.ts` + `AnalyticsBoot.tsx` (P0-2)
- ◻ Persist in sessionStorage + append to WhatsApp message → `ContactSection.tsx` (P0-2)
- ◻ Spread UTM into all `track()` calls → all event callers (P0-2)
- ◻ Verify **Google Ads Conversion Linker** tag fires in GTM container → GTM console (P0-15)
- ◻ Link GA4 ↔ Google Ads account → GA4 admin (P0-15)

**Landing-page message match**
- ✅ Brand + Near-me intents covered by `/` and `/reservations`
- ◻ `/landing/breakfast`, `/landing/experience` LPs (or per-locale ad-copy H1 match) (P2-1)
- ◻ Menu ATF messaging + featured dishes + price callout → `MenuSection.tsx` (P0-14)
- ◻ Trust signals ATF on /reservations → `reservations/page.tsx` (P1-4)

**OG / social images**
- ✅ Default OG 1200×630 + Twitter `summary_large_image` → `src/lib/seo.ts`
- ◻ Per-locale OG (AR/DE/RU at minimum) + locale-aware default → `seo.ts` + `/public/images/` (P1-1)

**Speed thresholds (Ads LP experience)**
- ◻ LCP < 2.5s: hero poster `priority`+preload (P0-3) | currently +200-500ms penalty
- ◻ Strip 13.8 MB video off initial load (lazy-gate) → Hero/VideoSection (P0-4)
- ◻ CLS < 0.1: image aspect-ratio containers + font weight reduction (P1-2, P1-3)
- ◻ INP < 200ms: Yandex webvisor gating + reduced-motion (P1-13, P0-13)
- ◻ Run PageSpeed/Lighthouse mobile (Slow 4G) on tr/en/ar before spend

**Consent / legal (EU)**
- ✅ Consent Mode v2 default `ad_storage:denied` → `GoogleAnalytics.tsx`
- ✅ Banner Accept/Reject persists + re-applies → `CookieConsent.tsx` / `consent.ts`
- ◻ Privacy-policy link + specific ad-storage language in banner → `CookieConsent.tsx` (P1-10)
- ◻ CSP header (effectively required by ad/security review) → `next.config.mjs` (P1-15)

**Cross-device validation**
- ◻ Form → WhatsApp → success on iOS (web fallback) + Android, at 360px, across 4 locales

---

## 5. EXACT CODE CHANGES TO IMPLEMENT NOW (→ 95%+ UI/UX/responsive + fully ad-ready)

Ship in this order. This is the consolidated P0 + the highest-leverage P1 items.

**A. Analytics & ads plumbing**
1. `src/lib/analytics.ts` — extend `EVENT` with `reservationSubmitted:'reservation_submitted'`, `phoneCallInitiated:'phone_call_initiated'`, `reservationFormViewed`, `reservationFormStarted`.
2. `src/lib/utm.ts` (NEW) — `captureUTM()` (reads utm_*/gclid → sessionStorage `mt-utm`) + `getStoredUTM()`.
3. `src/components/AnalyticsBoot.tsx` — call `captureUTM()` once on mount (alongside `detectAiReferral`).
4. `src/components/ContactSection.tsx` — on submit: validate; build message + append UTM line; `track('reservation_submitted',{value:guests,currency:'TRY',email,...utm})`; show success modal; then `window.open(whatsapp)`. Add `aria-required`/`aria-invalid`/inline errors; date+time grid → `grid-cols-1 sm:grid-cols-2`.
5. `src/components/FloatingCallButton.tsx` / `FloatingWhatsApp.tsx` — fire `phone_call_initiated`/`whatsapp_click` with `...getStoredUTM()`.

**B. Performance / LCP**
6. `src/components/Hero.tsx` — poster → `next/image fill priority sizes="100vw"` (or `fetchPriority="high" loading="eager" decoding="async"`); H1 → `text-[clamp(1.75rem,5vw,3.5rem)] leading-[1.08]`; CTA wrapper `pb-20 sm:pb-0`; scroll cue `bottom-20 sm:bottom-6`; eyebrow `text-white`; lazy-gate video via IntersectionObserver.
7. `src/components/VideoSection.tsx` — lazy-gate video (IO); eyebrow `text-white`; title `text-2xl sm:text-3xl md:text-4xl lg:text-5xl`.
8. `src/app/[locale]/layout.tsx` — add `<link rel="preload" as="image" href="/video/hero-poster.jpg">`; reduce Cormorant to `['400','600']`, `preload:true`; add skip-link + `<main id="main-content">`.

**C. Accessibility (global)**
9. `src/app/globals.css` — `:focus-visible{outline:3px solid var(--color-brand-600);outline-offset:2px}` for a/button/input/textarea/select; `@media (prefers-reduced-motion:reduce){html{scroll-behavior:auto}.scroll-cue{display:none}}`.
10. `src/lib/useReducedMotion.ts` (NEW) — hook; apply in Hero/Features/About/Testimonials/Awards/VideoSection to gate entrance anims and infinite cue.
11. `src/components/GalleryGrid.tsx` — ESC handler + focus trap + return-focus + body-scroll lock; close button `p-2` with `X size={28}`; items wrapped in `aspect-[4/3]`.
12. `src/components/Header.tsx` — mobile-menu focus mgmt (focus first link, return on close, ESC); language dropdown `role="listbox"`/`option`+`aria-selected`+RTL `left-0`; reserve button `md:inline-flex`.

**D. Responsive / layout consistency**
13. `src/app/[locale]/gallery/page.tsx` & `blog/page.tsx`: `pt-32`→`pt-28`, `pb-20`→`pb-14 md:pb-0`. `blog/[slug]/page.tsx`: `pb-20`→`pb-14 md:pb-0`; add `.rtl-flip` to ArrowLeft.
14. `src/components/FloatingButtons.tsx` — `z-40`→`z-30 md:z-40`; collapse multiline className to one line.
15. `src/components/CookieConsent.tsx` — add `aria-modal/aria-describedby`; ensure no overlap with floating bar; privacy-policy link.
16. Grid breakpoints: `TestimonialsSection.tsx` `sm:grid-cols-2 xl:grid-cols-3`; `AwardsSection.tsx` `sm:grid-cols-2 lg:grid-cols-3`; `Footer.tsx` `grid-cols-1 sm:grid-cols-2 md:grid-cols-4`; `MenuSection.tsx` featured `grid-cols-1 sm:grid-cols-2 md:grid-cols-4`.

**E. Conversion content**
17. `src/components/MenuSection.tsx` — featured dish cards (image+name+desc) + price-range callout + in-context reserve CTA; decorative dots `aria-hidden`.
18. `src/app/[locale]/reservations/page.tsx` — trust-signal bar ATF (rating + response promise); form above map on mobile.

**F. Hardening & i18n**
19. `src/i18n/routing.ts` — export `localePattern = routing.locales.join('|')`; consume in `middleware.ts`, `next.config.mjs`, `api/mcp/route.ts` (use `routing.locales` for `lang` enum).
20. `next.config.mjs` — add CSP header (self + GTM/GA/Yandex/Maps allow-list).
21. `src/app/[locale]/error.tsx` + `not-found.tsx` (NEW) — branded, localized.
22. `src/lib/seo.ts` — locale-aware OG default; create `/public/images/og-default-{ar,de,ru}.jpg`.
23. `src/lib/i18n` messages — add `Error`, `NotFound`, success-modal, trust-signal, price-callout keys across all 7 locale files.
24. `src/components/YandexMetrica.tsx` — gate webvisor/clickmap to `ru` + `requestIdleCallback`.

**Then (GA4/GTM console, no code):** mark `reservation_submitted` + `call_click` as conversions, verify Conversion Linker, link GA4↔Ads, enable Enhanced Conversions; run mobile Lighthouse on tr/en/ar (target LCP<2.5s, CLS<0.1, INP<200ms) before first spend.

---

**Net effect:** P0 + the bolded P1 items move Responsiveness 74→95+, A11y 55→90+, Perf 64→88+, UX&conversion 62→90+, Analytics 58→92+, Ads-readiness 60→95+, lifting the weighted overall from **69% to ~93-95%** and clearing every blocker on the ads-readiness checklist.

Key files for the implementer (all absolute):
- `d:/Desktop/Projeler/Dijital Pazarlama Hizmeti/Restoranlar/My terrace/site/src/lib/analytics.ts`
- `…/src/lib/utm.ts` (new), `…/src/lib/useReducedMotion.ts` (new)
- `…/src/components/{Hero,VideoSection,ContactSection,GalleryGrid,Header,FloatingButtons,CookieConsent,MenuSection,YandexMetrica}.tsx`
- `…/src/app/[locale]/{layout,gallery/page,blog/page,blog/[slug]/page,reservations/page,error,not-found}.tsx`
- `…/src/app/globals.css`, `…/src/i18n/routing.ts`, `…/next.config.mjs`, `…/src/lib/seo.ts`, `…/src/app/api/mcp/route.ts`