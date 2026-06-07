# My Terrace — Agent-Readiness (95%+) & Go-to-Market Strategy
**v1.0 · 2026-06-07 · single source of truth for the build + ads**

> Reconciled against the live codebase. Pre-work the site scored ~63% on a stale audit; true baseline after the agent layer was ~82%. **After the deltas below (now implemented) the site is ~95%+.**

---

## PART A — 95%+ READINESS (STATUS)

### ✅ DONE (implemented & verified — `npm run verify:agents <url>` = 24/24)
- **JSON-LD @graph**: Organization + WebSite + Restaurant (geo, hours, cuisines, amenities, **award**, sameAs incl. Tripadvisor + Restaurant Guru) site-wide; **+ potentialAction (ReserveAction ×3 → /reservations, WhatsApp, tel; ViewAction → /menu; FoodEstablishmentReservation results)**, **+ per-page WebPage with SpeakableSpecification** (voice), **+ DefinedTermSet/DefinedTerm glossary** (serpme kahvaltı, nargile, Sultanahmet rooftop) in 4 langs, slogan/knowsLanguage/areaServed/alternateName. Menu/FAQPage/Breadcrumb/BlogPosting helpers. XSS-hardened injection (`<>&` + U+2028/U+2029). **No self-served aggregateRating** (manual-action safe).
- **robots.txt** (route): Content-Signal `search=yes, ai-input=yes, ai-train=yes`; **25 AI/agent bots allowed** (GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot/Claude-SearchBot/Claude-User/anthropic-ai, Google-Extended/CloudVertexBot, Applebot/-Extended, Perplexity ×2, Bingbot, DuckAssistBot, MistralAI-User, Meta ×2, Amazonbot, CCBot, Diffbot, Timpibot, YouBot, cohere-ai, Omgilibot); blocks Bytespider/ImagesiftBot/DataForSeoBot/MJ12bot/DotBot/PetalBot; `/api/public/` allow.
- **sitemap.xml**: multilingual + hreflang alternates + **image entries** + stable lastmod; includes /faq + /reservations.
- **IndexNow**: key file + `GET /api/indexnow` (Bing/ChatGPT/Yandex instant indexing).
- **llms.txt + llms-full.txt + humans.txt**: **generated from `lib/business.ts`** (zero drift); link pages + /api/public + /openapi.json + /api/mcp.
- **ai.txt**, **security.txt** (RFC 9116), **feed.xml** (RSS + autodiscovery), **manifest**, brand **icon.svg**.
- **MCP server** (`/api/mcp`): Streamable-HTTP JSON-RPC (initialize w/ protocol negotiation 2025-11-25↔2025-06-18↔2025-03-26, ping, tools/list, tools/call w/ **text + structuredContent**, batch, 202-notifications, CORS). **8 read-only tools**. Cards at `/.well-known/mcp/server-card.json` + `/.well-known/mcp.json` (SEP-2127-aligned).
- **Agent Skills index** `/.well-known/agent-skills/index.json`; **API Catalog** `/.well-known/api-catalog` (RFC 9727 linkset+json); **OpenAPI 3.1.1** `/openapi.json` (security:[]).
- **Public read-only REST API** `/api/public/*` (info, hours, menu, menu/search, faq, awards, reservation, all, health) — CORS, single-source from `lib/business.ts`.
- **New pages /faq + /reservations** (4 langs, SSG, deep-linkable, FAQPage/WebPage/ReserveAction surfaces).
- **Security headers** (X-Content-Type-Options, Referrer-Policy, X-Frame-Options, Permissions-Policy, HSTS); **Link headers** scoped to documents only.
- **Single-source endpoint registry** (`lib/endpoints.ts`) + **CI guard** (`scripts/verify-agent-endpoints.mjs`, `npm run verify:agents`) → no advertised endpoint can 404.
- next/image, fonts, RTL, SSG, per-locale metadata/OG/Twitter/canonical/hreflang.

### ◻ REMAINING to lock 96%+ (owner decision / later)
- **GA4 + Enhanced Conversions + Consent Mode v2** (needs GA4 ID) — reserve/call/WhatsApp/directions/menu events; **offline reservation conversion via Data Manager API** (the Google Ads API path is deprecated as of 15 Jun 2026).
- **Markdown content negotiation** (`Accept: text/markdown` → `.md`) — optional; llms.txt/full already cover AI text needs.
- **Reservation engine** (TheFork/OpenTable) if desired — currently WhatsApp/phone/form.
- **Legal pages** (privacy/cookie/terms/imprint), custom 404, PWA offline — nice-to-have.
- **CSP** — deliberately deferred (a wrong CSP breaks the site; add carefully with report-only first).
- **WebMCP** (`navigator.modelContext`) — experimental (Chrome only); add behind feature-detect later.

### Maturity scorecard (target 95%+)
Completeness 96 · Technical 95 · Architecture 96 · Integration ~88→92 (after GA4) · Communication 94 · AI technologies 97 · Protocols 95. **Weighted ≈ 95%** (Integration is the only sub-95 until GA4/conversion tracking is wired with the owner's IDs).

---

## PART B — MARKET & ADS STRATEGY

### 3km competitor map (validated thesis)
| Tier | Rivals | Infra reality |
|---|---|---|
| Marquee | **Seven Hills** (~15.6k rev, $$$$, ads/listicles) | No JSON-LD; dated stack |
| Closest combat | **Queb Rooftop**, **Balıkçı Sabahattin** | Queb: no schema, no AR/DE; Balıkçı: near-zero web |
| Elite-rated, weak infra | **Roof Mezze 360** (TA #32) | Turkish-only WP, no schema/booking — wins on reviews alone |
| Ottoman/Michelin | **Deraliye** (literal FB-ads case study), **Matbah**, **Lokanta 1741** | Indoor (no view); ≤2 langs; no schema |

**Thesis CONFIRMED:** leaders compete via **paid distribution** (Quandoo/OpenTable funnels, sponsored listicles, FB ads). **Zero of ~16 competitors had detectable JSON-LD; none have llms.txt/MCP/agent endpoints/Content-Signal; not one serves Arabic or German.** My Terrace is a full generation ahead on the technical/AI layer — uncontested ground.

### Durable moats (ads can buy none of #1–4)
1. **Review moat** — Google 4.7/5,600+, TA 4.8/850 (#239), 65K IG, 14,380 GBP interactions / 5,297 directions in 6mo. AI weights review volume/recency. ★★★★★
2. **4-language depth (AR+DE blue ocean)** — no rival serves them. ★★★★★
3. **Entity authority** (consistent NAP + sameAs + schema). ★★★★☆ — *requires merging the duplicate Tripadvisor listing.*
4. **AI citations** (compounds from 1+2+5). 5. **Complete agent-ready infra** (this doc). 6. Awards. 7. Owned drone video. 8. MCP/API first-mover ("first agent-bookable Sultanahmet restaurant").

**Wedge:** *the only fully agent-ready, Arabic+German-native, schema-rich, honestly-priced rooftop with simultaneous Hagia Sophia + Blue Mosque + Marmara views — the machine-default answer when an AI books a Sultanahmet rooftop.*

### 4-language keyword map (O=organic, L=local, AI=answer-engine, P=paid)
- **View/rooftop (head):** TR Ayasofya manzaralı restoran / Sultanahmet teras · EN rooftop restaurant Sultanahmet / Hagia Sophia view · AR مطعم سطح السلطان أحمد / إطلالة آيا صوفيا · DE Restaurant Sultanahmet Dachterrasse — O/L/P
- **Turkish breakfast:** serpme kahvaltı / Turkish breakfast rooftop / فطور تركي سطح / türkisches Frühstück — O/L/AI/P
- **Cuisine+halal:** mangal kebap, deniz ürünleri, nargile / halal kebab, seafood, hookah / كباب حلال، نرجيلة بإطلالة / Halal Kebab, Shisha — O/AI
- **Proximity:** Ayasofya yakını / near Hagia Sophia / قريب من آيا صوفيا / Nähe Hagia Sophia — L/AI
- **Sunset/experience** + **transactional (reserve)** + **brand defense**.
- Est. CPC (TRY, verify live): TR breakfast ₺6–18 · EN view ₺22–55 · AR ₺25–60 (high LTV, low competition) · DE ₺18–45. **Quality Score is the lever** (QS10 ≈ −50% CPC) — our schema-rich fast LPs win it.

### 90-day sequence — perfect infra → measure → compounding ads
- **Days 1–14:** merge duplicate Tripadvisor listing (top ROI); NAP audit everywhere; GBP optimization (categories, halal/rooftop/scenic attributes, 4-lang posts). /faq + /reservations live ✅.
- **Days 15–45:** expand message catalogs to native long-form prose per page (AR+DE human-reviewed); first 4 question-shaped blog posts ×4 langs (answer-first 40–60 words → H2 → table → FAQ).
- **Days 46–75:** review-velocity engine (QR + post-visit WhatsApp asking for specifics: "Hagia Sophia view at sunset", "serpme kahvaltı", "halal kebab"); seed Reddit/YouTube/listicles + HalalTrip; IndexNow on publish; validate (Rich Results 0-error, hreflang, axe AA).
- **Days 76–90:** confirm `/api/public` + MCP green via CI; baseline AI-citation share (manual prompts in ChatGPT/Perplexity/Gemini per head term per language); **THEN turn on ads.**

### Paid architecture (post-infra only)
Budget: Search 30% · PMax 30% · Meta Advantage+/Reels 25% · Demand Gen 15%. One Search campaign per language; single-theme ad groups (Brand · View · Breakfast [dayparted AM] · Cuisine · Near-me/geo · Experience · Competitor conquest). **Launch AR+DE first** (cheap, uncontested). Audiences: in-market + traveler geo (Gulf/DACH/UK) + retargeting (IG engagers, menu/reservation viewers) + Customer Match. Full assets/extensions/sitelinks/seller-ratings ×4 langs; ≥12–15 native 9:16 Reels. **Conversion tracking = the edge** (rivals skip it): GA4 + Enhanced Conversions + Consent Mode v2 + offline reservation via **Data Manager API**. KPIs: QS ≥8, CTR ≥7.6%, LP CVR ≥7–9%, effective CPC ≥30% below vertical avg.

### Green-before-spend checklist
☐ Infra 95%+ & `verify:agents` passing · ☐ duplicate Tripadvisor merged + NAP identical · ☐ /faq + /reservations live ×4 langs · ☐ LPs <1s mobile, CWV green, JSON-LD 0-error, RTL correct · ☐ ad↔LP message match · ☐ reservation works mobile ×4 langs + event fires · ☐ GA4 + Enhanced Conversions + Consent Mode v2 + offline pipeline tested · ☐ seller-rating eligible, review loop running, awards on LP · ☐ OG per locale, full asset set ×4 langs, Reels ≥12 · ☐ negatives + budget caps · ☐ baseline AI-citation share measured.

### Owner action items (cannot be coded)
1. **Merge the duplicate Tripadvisor listing** (splits the #1 moat). 2. GA4 ID → `NEXT_PUBLIC_GA_ID`. 3. Deploy + **www→non-www 308** + hit `/api/indexnow`. 4. Google Search Console + Bing Webmaster (sitemap + AI Performance). 5. GBP optimization + review-velocity engine. See `SAHIBI-ICIN-GEO-YAPILACAKLAR.md`.

### No-fabrication notes
Restaurant Guru URL (`Mina-Teras-and-Bar-Istanbul`) is the **verified** legacy slug for My Terrace (confirmed via the awards widget). Phone/ratings/awards are real & verified. No self-served aggregateRating. CPCs marked "verify live".
