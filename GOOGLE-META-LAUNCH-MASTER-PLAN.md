# My Terrace — Google Ads + Meta Launch Master Plan

**Business:** My Terrace Cafe & Restaurant — rooftop, Küçük Ayasofya / Sultanahmet, Fatih, Istanbul · 41.00429, 28.97367
**Final URL:** https://myterracecaferestaurant.com (7 langs: tr, en, ar, de, ru, es, fr)
**Reservations:** WhatsApp +90 535 931 88 17 · phone · on-site. **No online ordering.** Menu prices intentionally hidden.
**Hours:** 08:30–01:00 daily.
**Proof:** Google 4.7★ / 5,600+ reviews · Tripadvisor 4.8 + Travelers' Choice 2025 · Restaurant Guru Top 100 · real Hagia Sophia + Marmara Sea panoramic view · 7 languages · agent/AI-ready site.
**Live & tracking (do NOT rebuild):** GA4 `G-2PFLBSCRRD`, GTM `GTM-NSB2VLCP`, Consent Mode v2, UTM + gclid capture auto-attached to all events, conversion events `reservation_submitted` (party_size + value + TRY), `whatsapp_click`, `call_click`.

---

## 0. EXECUTIVE SUMMARY

My Terrace has the rarest combination in Sultanahmet: a genuinely best-in-class product (real Hagia Sophia + sea rooftop view), strong third-party proof (4.7★ / 5,600+, Travelers' Choice 2025), a 7-language site, and a conversion stack that already fires correctly. The competition buys generic ads with no language depth and no proof. Our entire strategy exploits that gap.

**The strategy in one line:** start lean and Search-first on high-intent terms, one campaign per language, optimize to real reservations (not cheap taps), then scale only what converts into PMax and Meta.

**Five principles that govern every decision below:**
1. **Measurement gates spend.** Nothing scales until `reservation_submitted` is imported as Primary, GA4↔Ads is linked, Enhanced Conversions is ON, and a test conversion has landed. Bidding on bad data is the most expensive mistake.
2. **One language per campaign.** Bidding, budget, negatives, and schedules differ by nationality. Mixing languages blinds the algorithm and wastes the 7-lang edge.
3. **Reservation-intent only on Search.** Presence-based location targeting (people IN/near Istanbul), tight radius, and tourist-native language isolate ready-to-book demand. Trip-planners abroad are reached later via PMax/Meta — never mixed into Search.
4. **Search before PMax before tROAS.** PMax needs ~15–30 conversions of signal first or it scavenges junk placements. tROAS needs owner-verified conversion values first.
5. **Real assets only.** Use the owner's real drone/terrace/sunset footage and photos — the view is the differentiator. No stock. No fake data, no "#1/best", no unverifiable superlatives.

**What the owner gets from this document:** a complete, copy-paste-ready account — settings, measurement plumbing, five language Search campaigns (TR, EN, AR, DE, RU) with ad groups / keywords / RSAs (char-counted) / pinning / negatives / assets, a Performance Max build, a full Meta playbook, plus the 14-day optimization cadence, KPIs, master negatives, and guardrails.

---

## 1. LAUNCH CHECKLIST (IN ORDER)

> Do not skip steps 1–9. Steps 1–9 are the measurement gate; do not spend before they pass.

**Phase A — Measurement gate (Day −1, before any spend)**
1. Link **GA4 (`G-2PFLBSCRRD`) ↔ Google Ads** (Admin → Product Links → Google Ads). Enable **auto-tagging (gclid)** on the Ads side.
2. **Import GA4 conversions** into Ads (Goals → Conversions → New → Import → GA4). Do NOT create duplicate Ads tags (avoids double-count).
3. Mark `reservation_submitted` = **PRIMARY**; `whatsapp_click` + `call_click` = **SECONDARY**; `reservation_form_started` = optional secondary (micro); leave `directions` / `menu_category` / `gallery` / `social` as **NOT conversions**.
4. Verify **Conversion Linker** tag fires on **All Pages** in GTM `GTM-NSB2VLCP`.
5. Turn **Enhanced Conversions for web** ON (via Google tag / GTM); confirm **Consent Mode v2** is signaling.
6. **Test a real conversion** — submit a reservation; confirm it lands in Ads within a few hours.
7. Confirm conversion **value = TRY** and `party_size → value` is consistent (count-based optimization until owner verifies avg revenue/guest).
8. Create the account-level shared negative list **`MASTER_Negatives`**; prepare per-language localized terms (§13).
9. Set account billing currency check (EUR assumed) so TRY values map correctly.

**Phase B — Build (Day −1 / Day 0)**
10. Create **`BRAND_ALL_Defense`** (separate, low budget) + the 5 core Search campaigns: `SEA_TR_Core`, `SEA_EN_Core`, `SEA_AR_Core`, `SEA_DE_Core`, `SEA_RU_Core`.
11. Settings for all generic campaigns: **Search only** (Search partners OFF, Display OFF), **Presence: people in or regularly in targeted locations**, radius around `41.00429, 28.97367` (TR/EN/area-wide: 3–4 km + Istanbul city at lower bid; AR/DE/RU: 2 km + Istanbul city), **Maximize Conversions (no tCPA)**.
12. Build ad groups + keywords (phrase + exact, no broad at launch) + one RSA each per the language sections; set the pins noted.
13. Attach **shared assets** per language: sitelinks (≤25 + 2 desc ≤35), callouts (≤25), structured snippets (≤25), **Call asset** (+90 535 931 88 17, scheduled to hours, call reporting ON), **Location asset** (link Google Business Profile). **Price asset OFF** (prices hidden). Upload **real image assets**.
14. Apply `MASTER_Negatives` to all generic campaigns + the per-ad-group negatives. Do NOT apply negatives to Brand.
15. Seed **ad schedule** (breakfast AM weighting, dinner/sunset PM weighting, off 01:00–07:30) as observation/seed — don't over-restrict during learning.

**Phase C — Launch & learn**
16. Launch Wave 1 (Brand + 5 core), LEAN budget, Maximize Conversions.
17. Days 1–3: search-terms report **daily** → dump junk into `MASTER_Negatives`. Don't touch bids/budgets (learning).
18. Days 4–14: prune losers, add winning terms as keywords, watch breakfast-vs-sunset pattern.
19. After ~15–30 conv/campaign → switch that campaign to **tCPA** (~+10–15% over observed CPA).

**Phase D — Scale (Week 2–4+)**
20. Split the converting language/theme (Wave 2). Launch **`PMAX_EN_Tourist`** once Search has conversion data. Add **`SEA_ES_Core` / `SEA_FR_Core`** in growth/peak season.
21. Launch **Meta** messaging Advantage+ (Angles 1–3) in parallel for cheap WhatsApp bookings.
22. Begin **offline-conversion uploads** (confirmed WhatsApp bookings via Data Manager API).

---

## 2. BUDGET SCENARIOS

> Assume EUR billing. AR/DE/RU CPCs are cheaper (less competition) than TR/EN generic. Maximize Conversions can spend up to ~2× daily budget on a given day — judge by monthly pacing.

### LEAN — ~€20/day (~₺ equivalent; Search-only, NO PMax)

| Campaign | €/day | % | Logic |
|---|---|---|---|
| `BRAND_ALL_Defense` | €2 | 10% | Cheapest, highest-intent conversions; defend the name. Rarely spends its cap. |
| `SEA_AR_Core` | €5 | 25% | Highest-value blue-ocean (Gulf tourists, big parties, low competition). |
| `SEA_DE_Core` | €3.5 | 17.5% | Strong, disciplined high-intent German tourists. |
| `SEA_EN_Core` | €3.5 | 17.5% | Broadest reach; more competition → moderate. |
| `SEA_RU_Core` | €3 | 15% | Good volume, low competition. |
| `SEA_TR_Core` | €3 | 15% | Locals + domestic tourists; breakfast + dinner. |
| **Total** | **€20** | 100% | 5 languages + brand. ES/FR deferred. |

**Guardrail:** at €20/day do NOT run PMax — it can't get signal and will eat the budget. Search-only.

### GROWTH — ~€60–80/day (€70 midpoint)

| Campaign | €/day | % | Logic |
|---|---|---|---|
| `BRAND_ALL_Defense` | €4 | ~6% | Scales modestly; near-100% IS target. |
| `SEA_AR_Breakfast` + `SEA_AR_Dinner-View` | €16 | ~23% | Split the proven winner by theme; dinner/view gets the larger share at sunset peak. |
| `SEA_DE_Core` (split if proven) | €11 | ~16% | |
| `SEA_EN_Core` (split if proven) | €11 | ~16% | |
| `SEA_RU_Core` | €8 | ~11% | |
| `SEA_TR_Core` | €8 | ~11% | |
| `SEA_ES_Core` + `SEA_FR_Core` | €5 | ~7% | Growth/peak-season test budgets. |
| `PMAX_EN_Tourist` | €7 | ~10% | Now fed by Search data; scales Maps/YouTube/Discover with real video. |
| **Total** | **€70** | 100% | Scale lean winners; add themes, ES/FR, PMax. |

**Reallocation rule:** every 3–4 days, shift budget from the worst-CPA campaign to the best-CPA campaign that is budget-limited (Impression Share lost to budget > 10%).

### Per-language daily reference (if budgeting in TRY directly)
| Lang | Lean ₺/day | Growth ₺/day |
|---|---|---|
| TR | 350 | 800 |
| EN | 350–500 | 900–1,400 |
| AR | 300 | 750–1,000 |
| DE | ~450–550 (€12–15) | €30–40 |
| RU | 250–350 | 600–900 |

---

## 3. MEASUREMENT & CONVERSIONS (this gates spend)

The conversion spine decides whether every euro is spent well. Complete this section before launch.

### 3.1 Conversions to import & how to mark them

| GA4 event | Import as | Primary/Secondary | Notes |
|---|---|---|---|
| `reservation_submitted` | Conversion | **PRIMARY** | The real goal. Carries `party_size`, `value`, `currency` (TRY) → used for value-based bidding later. This is what Max Conversions / tCPA / tROAS optimize toward. |
| `whatsapp_click` | Conversion | **SECONDARY** | Strong intent, not a confirmed booking. Secondary so it informs but doesn't dominate bidding. (If reservation volume is too thin early to train the algorithm, you may temporarily elevate WhatsApp/call to primary.) |
| `call_click` | Conversion | **SECONDARY** | Same logic. Optionally also enable Google Ads call reporting for calls ≥ a min duration. |
| `reservation_form_started` | Optional import | SECONDARY (micro) | Funnel diagnostic + remarketing seed; never a bidding goal. |
| `directions` / `menu_category` / `gallery` / `social` | Do NOT mark | — | Engagement only; keep in GA4 for analysis, out of Ads bidding. |

**Why this split:** if WhatsApp/call were Primary, the algorithm chases cheap taps over actual reservations. `reservation_submitted` as the sole Primary keeps spend pointed at bookings; secondaries give visibility and a fallback.

### 3.2 Linking & plumbing checklist
1. **GA4 ↔ Google Ads link** (Admin → Product Links). Required to import conversions + share audiences. Auto-tagging (gclid) ON — site already captures + attaches gclid.
2. **Import GA4 conversions** (not duplicate Ads tags) — avoids double-count.
3. **Conversion Linker** — verify it fires on All Pages in GTM `GTM-NSB2VLCP` so gclid is written to first-party cookies.
4. **Enhanced Conversions for web** — ON via Google tag/GTM; hash + send user-provided data (email/phone) where captured to recover consent/cookie-gap conversions.
5. **Consent Mode v2** — already live; verify it's signaling so modeled conversions fill gaps. (EC + Consent Mode v2 = the correct modern stack.)

### 3.3 Conversion value (party_size → value)
- `reservation_submitted` already sends a **TRY value** derived from party size. Keep it consistent for trustworthy value-based bidding.
- Value model: **fixed avg revenue per guest × `party_size`**. **Owner must confirm** the per-guest figure before any tROAS.
- Currency = **TRY** consistently. If billed in EUR, ensure currency tagging is explicit (avoid 1:1 mis-multiply).
- Until values are owner-verified, **optimize on conversion count** (Max Conversions / tCPA), not tROAS.

### 3.4 Offline conversions (confirmed WhatsApp bookings) — closes the loop
1. Site captures **gclid** and attaches it to the WhatsApp message (live in `utm.ts`) → inbound text carries gclid.
2. When staff **confirm a real reservation** in WhatsApp, log: gclid + date/time + party_size + (optional) value.
3. Upload as **offline conversions via the Google Ads Data Manager API** (current path — NOT the deprecated OfflineConversion flow). Map gclid → a dedicated "WhatsApp Reservation (confirmed)" action, marked **PRIMARY** once volume justifies.
4. This teaches bidding which clicks become *real* bookings — the single biggest accuracy upgrade for a no-online-ordering restaurant. Start manual (spreadsheet → periodic upload), automate later.

### 3.5 Enhanced Conversions + PMax/Meta value mirror
- PMax & Meta should mirror the same value model: reservation ≈ 200 TRY proxy (or owner-verified), WhatsApp ≈ 50, call ≈ 50 — so automated bidding can value-optimize consistently across channels.

**Two owner inputs still required to finalize bidding accuracy:** (1) confirmed **avg revenue per guest**; (2) confirmed **billing currency** (EUR assumed).

---

## 4. ACCOUNT STRUCTURE & GLOBAL SETTINGS

**One Google Ads account.** Language-segmented Search campaigns + one brand-defense + one PMax (later). **One language per campaign** (non-negotiable).

**Naming:** `[Type]_[Lang]_[Theme]_[Geo]` → e.g. `SEA_AR_Breakfast-View_Sultanahmet`, `BRAND_ALL_Defense`, `PMAX_EN_Tourist`.

**Launch waves**

| Wave | When | Campaigns | Why |
|---|---|---|---|
| **Wave 1 — Day 0** | Launch | `BRAND_ALL_Defense` · `SEA_TR_Core` · `SEA_EN_Core` · `SEA_AR_Core` · `SEA_DE_Core` · `SEA_RU_Core` | Brand defense = cheapest, highest-intent. AR/DE/RU/EN = blue-ocean tourists. TR = locals + domestic. |
| **Wave 2 — Week 2–3** | After ~1 week of data | Split winners by theme (`SEA_AR_Breakfast` / `SEA_AR_Dinner-View`, same for DE/EN if volume supports). Add `PMAX_EN_Tourist` once Search has conversion data. | Don't fragment budget on day 0; let signal gather, then split. PMax needs history. |
| **Wave 3 — Week 4+ / seasonal** | When AR/DE/RU/EN stable & profitable | `SEA_ES_Core` · `SEA_FR_Core` | Real but thinner Sultanahmet segments; add after core four are dialed in, or ahead of peak (Jun–Sep) / Ramadan-Eid Gulf travel. |

**Global settings (all generic Search campaigns):**
- **Networks:** Search only — Search partners OFF, Display OFF.
- **Location:** radius around `41.00429, 28.97367`. TR/EN/area: **3–4 km** + **Istanbul city** at −10% to −20%. AR/DE/RU: **2 km** + Istanbul city at lower bid. Optional layered radius: 1 km (+20%), 2–3 km (base), 5 km (−20%).
- **Location option (critical):** **"Presence: People in or regularly in your targeted locations"** — NOT "presence or interest." Kills global-browser waste. Exclude: "Presence: people in your excluded locations" if needed.
- **Do NOT target by home country on Search** — target by being-here + language. (Country/interest targeting belongs in PMax/Meta awareness.)
- **Devices:** all; expect mobile-dominant. No cuts at launch; trim proven losers after 7–10 days. WhatsApp/call CTAs favor mobile.
- **Demographics:** broad at launch; likely strongest 25–54, couples + families. Layer only on clear data.
- **Audiences:** add in-market Restaurants/Travel/Hotels + International travelers as **observation** (not targeting) at launch.
- **Ad rotation:** Optimize — prefer best-performing ads.
- **Final URL suffix / tracking:** auto-tagging ON; site captures + attaches UTM/gclid.

**Ad schedule / dayparting (Istanbul time, GMT+3; hours 08:30–01:00):**

| Daypart | Hours | Bid posture | Logic |
|---|---|---|---|
| Early morning | 07:30–11:30 | **+15–20%** | Serpme breakfast peak; capture pre-arrival searches from 07:30. |
| Midday lull | 11:30–15:00 | base / −10% | Lower meal intent; keep on for "near me lunch." |
| Afternoon→sunset | 15:00–20:00 | **+20–25%** (highest) | Money window: view + couples + nargile + kebab/seafood. Shift start to actual sunset seasonally. |
| Dinner / late | 20:00–23:30 | +10–15% | Dinner + nargile; same-night reservations. |
| Late night | 23:30–01:00 | base | Open till 01:00; thin, keep on, don't over-bid. |
| Closed gap | 01:00–07:30 | **−100% / off** | No reservations land here. |

Apply per-ad-group via bid adjustments (breakfast AM, dinner/sunset PM). With Maximize Conversions, treat these as observation/seed — hard adjustments matter most in the manual/early phase and on Brand.

---

## 5. BIDDING STRATEGY PROGRESSION

| Phase | Campaigns | Strategy | Trigger to advance |
|---|---|---|---|
| **Launch (Wk 0–2/3)** | All generic Search | **Maximize Conversions, NO tCPA** | Don't set tCPA before ~15–30 conv/30d — it starves delivery. |
| **Optimize (~15–30 conv/30d)** | Generic Search | **Max Conversions w/ tCPA** (start ~+10–15% over observed CPA; tighten weekly) | Stable CPA + enough volume. |
| **Scale** | Same-objective campaigns | Optional **portfolio (shared tCPA)** to pool signal — only group similar economics. Keep high-value AR separate from thin campaigns. | 3+ campaigns w/ comparable economics. |
| **Brand** | `BRAND_ALL_Defense` | **Max Conversions** or low/Manual CPC — max IS at minimal cost. Never in a portfolio with generic. | Hold cheap & dominant. |
| **PMax (Wave 2+)** | `PMAX_EN_Tourist` | **Max Conversions** → **tROAS** only once values are stable. | Value-based conversions stable. |

Start **standard** (per-campaign) to read each language cleanly; move to **portfolio** only to help thin campaigns learn.

---

# SEARCH CAMPAIGNS (per language)

> Shared conventions for all Search campaigns: phrase + exact match at launch (no broad). RSA = up to 15 headlines ≤30 chars, 4 descriptions ≤90 chars. Pin only 1–2 headlines to Position 1 (over-pinning hurts Ad Strength). Char counts shown in (parentheses). "★" may be rejected in some accounts → if disapproved, replace with "4,7 puan / 4.7 stars" equivalent.

---

## 6. SEARCH — TURKISH (TR) · `SEA_TR_Core`

**Settings:** Search only; Türkçe; **Presence: people in/near** targeted locations; radius 3 km around `41.00429, 28.97367` (+ Istanbul city at −10/−20%); exclude non-Turkey. Max Conversions → tCPA after data. Schedule per §4. LEAN ₺350/day → GROWTH ₺800/day. Brand handled in `BRAND_ALL_Defense`.

### (a) Ad group — Rooftop & View (Teras & Manzara)
**Keywords:** `[sultanahmet teras restoran]` · `[ayasofya manzaralı restoran]` · `[çatı katı restoran sultanahmet]` · `[manzaralı restoran sultanahmet]` · `"teras restoran sultanahmet"` · `"manzaralı teras restoran"` · `"ayasofya manzaralı kafe"` · `"çatı katı restoran istanbul"` · `"sultanahmet manzaralı mekan"` · `"deniz manzaralı restoran sultanahmet"` · `"rooftop restoran istanbul"` · `"teras kafe sultanahmet"`

**Headlines (≤30):** Sultanahmet Teras Restoran (26) · Ayasofya Manzaralı Teras (24) · Çatı Katı Restoran (18) · Marmara Manzaralı Mekan (23) · Teras Katında Yemek (18) · Manzaralı Restoran (18) · Gün Batımı Manzarası (20) · My Terrace Sultanahmet (22) · 4,7★ - 5.600+ Yorum (20) · Kilim Seki, Türk Lambası (24) · Nargileli Teras Keyfi (21) · Rezervasyon WhatsApp'tan (24) · Travelers' Choice 2025 (22) · Her Gün 08.30 - 01.00 (21) · Manzaralı Teras Kafe (20)
**PIN P1:** "Sultanahmet Teras Restoran" + "Ayasofya Manzaralı Teras"
**Descriptions (≤90):**
1. Ayasofya ve Marmara Denizi panoramik manzaralı teras katı restoran. (66)
2. Kilim sekiler, Türk lambaları ve gün batımı. Kahvaltı, kebap, deniz ürünleri. (80)
3. 4,7★, 5.600+ yorum ve Travelers' Choice 2025. WhatsApp'tan yer ayırtın. (75)
4. Sultanahmet'in kalbinde manzaralı teras. Her gün 08.30-01.00 açığız. (71)
**Negatives:** kiralık · daire · satılık · otel

### (b) Ad group — Turkish Breakfast / Serpme (Kahvaltı)
**Keywords:** `[sultanahmet kahvaltı]` · `[manzaralı kahvaltı sultanahmet]` · `[serpme kahvaltı sultanahmet]` · `[sultanahmet serpme kahvaltı]` · `"manzaralı kahvaltı istanbul"` · `"teras kahvaltı sultanahmet"` · `"ayasofya manzaralı kahvaltı"` · `"serpme kahvaltı istanbul"` · `"sultanahmet kahvaltı mekanları"` · `"deniz manzaralı kahvaltı"` · `"kahvaltı sultanahmet teras"` · `"köy kahvaltısı sultanahmet"`

**Headlines (≤30):** Sultanahmet Serpme Kahvaltı (27) · Manzaralı Kahvaltı Keyfi (24) · Ayasofya Manzaralı Kahvaltı (27) · Teras Katında Kahvaltı (22) · Serpme Türk Kahvaltısı (22) · My Terrace Kahvaltı (19) · Sabah Manzarası Eşliğinde (25) · 4,7★ - 5.600+ Yorum (20) · Deniz Manzaralı Kahvaltı (24) · Sultanahmet'te Kahvaltı (23) · Bol Çeşit Serpme Kahvaltı (25) · Travelers' Choice 2025 (22) · WhatsApp'tan Yer Ayırtın (24) · Her Sabah 08.30'dan İtibaren (28) · Teras Kahvaltı Manzarası (24)
**PIN P1:** "Sultanahmet Serpme Kahvaltı" + "Ayasofya Manzaralı Kahvaltı"
**Descriptions (≤90):**
1. Ayasofya manzaralı teras katında serpme Türk kahvaltısı. Bol çeşit, taze. (75)
2. Sabah manzarası eşliğinde güne başlayın. Her gün 08.30'dan itibaren açığız. (78)
3. 4,7★ ve 5.600+ yorum. Travelers' Choice 2025 ödüllü teras restoran. (69)
4. WhatsApp veya telefonla kolayca yer ayırtın. Sultanahmet'in kalbinde. (70)
**Negatives:** tarif · nasıl yapılır · ucuz · fiyat listesi · açık büfe otel

### (c) Ad group — Kebab & Mangal (Kebap)
**Keywords:** `[sultanahmet kebap]` · `[sultanahmet kebapçı]` · `[manzaralı kebap sultanahmet]` · `"mangal kebap sultanahmet"` · `"sultanahmet et restoran"` · `"kömür mangal kebap istanbul"` · `"teras kebap restoran"` · `"sultanahmet izgara restoran"` · `"manzaralı kebapçı istanbul"` · `"sultanahmet kebap mekanları"` · `"köz kebap sultanahmet"`

**Headlines (≤30):** Sultanahmet Mangal Kebap (24) · Manzaralı Kebap Keyfi (21) · Kömür Mangalda Kebap (20) · Teras Katında Kebap (19) · Sultanahmet Et Restoran (23) · My Terrace Kebap (16) · Köz Izgara Lezzetleri (21) · Ayasofya Manzaralı Teras (24) · 4,7★ - 5.600+ Yorum (20) · Gün Batımında Kebap (19) · Taze Mangal Kebap (17) · Travelers' Choice 2025 (22) · WhatsApp'tan Yer Ayırtın (24) · Sultanahmet Teras Restoran (26) · Her Gün 08.30 - 01.00 (21)
**PIN P1:** "Sultanahmet Mangal Kebap" + "Kömür Mangalda Kebap"
**Descriptions (≤90):**
1. Kömür mangalda taze kebap, Ayasofya manzaralı teras katında servis edilir. (76)
2. Mangal kebap, izgara etler ve deniz ürünleri. Gün batımı manzarası eşliğinde. (80)
3. 4,7★, 5.600+ yorum ve Travelers' Choice 2025 ödülü. Her gün açığız. (69)
4. WhatsApp veya telefonla yer ayırtın. Sultanahmet teras katı restoran. (70)
**Negatives:** tarif · dürüm ucuz · paket servis · döner fiyat

### (d) Ad group — Seafood (Deniz Ürünleri)
**Keywords:** `[sultanahmet balık restoran]` · `[deniz ürünleri restoran sultanahmet]` · `[manzaralı balık restoran istanbul]` · `"sultanahmet balık lokantası"` · `"deniz manzaralı balık restoran"` · `"taze balık restoran sultanahmet"` · `"meze ve balık sultanahmet"` · `"teras balık restoran istanbul"` · `"marmara manzaralı balık"` · `"sultanahmet deniz ürünleri"`

**Headlines (≤30):** Sultanahmet Balık Restoran (26) · Taze Deniz Ürünleri (19) · Manzaralı Balık Keyfi (21) · Marmara Manzaralı Teras (22) · Teras Katında Balık (18) · Meze ve Taze Balık (18) · My Terrace Deniz Ürünleri (25) · Ayasofya Manzaralı Teras (24) · 4,7★ - 5.600+ Yorum (20) · Gün Batımında Balık (18) · Deniz Manzaralı Restoran (24) · Travelers' Choice 2025 (22) · WhatsApp'tan Yer Ayırtın (24) · Sultanahmet Teras Restoran (26) · Her Gün 08.30 - 01.00 (21)
**PIN P1:** "Sultanahmet Balık Restoran" + "Taze Deniz Ürünleri"
**Descriptions (≤90):**
1. Taze deniz ürünleri ve mezeler, Marmara manzaralı teras katında servis. (73)
2. Balık, meze ve gün batımı manzarası. Ayasofya'ya bakan teras restoran. (72)
3. 4,7★, 5.600+ yorum ve Travelers' Choice 2025. WhatsApp'tan yer ayırtın. (75)
4. Sultanahmet'in kalbinde deniz manzaralı teras. Her gün 08.30-01.00 açık. (76)
**Negatives:** tarif · balık tutma · canlı balık satış · balıkçı malzeme

### (e) Ad group — Near-me / Sultanahmet Area
**Keywords:** `[sultanahmet restoran]` · `[sultanahmet yemek mekanları]` · `[yakınımdaki restoran sultanahmet]` · `"sultanahmet en iyi restoran"` · `"sultanahmet nerede yenir"` · `"küçük ayasofya restoran"` · `"eminönü manzaralı restoran"` · `"fatih manzaralı restoran"` · `"sultanahmet akşam yemeği"` · `"sultanahmet öğle yemeği"` · `"yakınımda teras restoran"` · `"sultanahmet restoran önerisi"`

**Headlines (≤30):** Sultanahmet Teras Restoran (26) · Sultanahmet'te Nerede Yenir (27) · Ayasofya Manzaralı Teras (24) · Yakınınızda Manzaralı Mekan (27) · Küçük Ayasofya Restoran (23) · My Terrace Sultanahmet (22) · Kahvaltı, Kebap, Deniz (22) · 4,7★ - 5.600+ Yorum (20) · Gün Batımı Manzarası (20) · Teras Katında Yemek (18) · Manzaralı Restoran (18) · Travelers' Choice 2025 (22) · WhatsApp'tan Yer Ayırtın (24) · Her Gün 08.30 - 01.00 (21) · Sultanahmet'in Terası (22)
**PIN P1:** "Sultanahmet Teras Restoran" + "Sultanahmet'te Nerede Yenir"
**Descriptions (≤90):**
1. Sultanahmet'te Ayasofya manzaralı teras katı restoran. Kahvaltı, kebap, balık. (80)
2. 4,7★, 5.600+ yorum ve Travelers' Choice 2025. Gün batımı manzarası eşliğinde. (80)
3. Küçük Ayasofya'da, yürüme mesafesinde. WhatsApp veya telefonla yer ayırtın. (78)
4. Her gün 08.30-01.00 açığız. Sultanahmet'in kalbinde manzaralı teras keyfi. (76)
**Negatives:** iş ilanı · eleman · garson alımı · otel · franchise

### (f) Ad group — Sunset / Romantic (Gün Batımı / Romantik)
**Keywords:** `[gün batımı manzaralı restoran istanbul]` · `[romantik restoran sultanahmet]` · `"gün batımı restoran sultanahmet"` · `"romantik manzaralı restoran istanbul"` · `"çift için manzaralı mekan"` · `"yıldönümü restoran sultanahmet"` · `"romantik akşam yemeği istanbul"` · `"manzaralı romantik mekan"` · `"gün batımı izlenecek restoran"` · `"sevgiliyle manzaralı yemek"`

**Headlines (≤30):** Gün Batımı Manzaralı Teras (26) · Romantik Manzaralı Mekan (24) · Çiftler İçin Teras Keyfi (24) · Ayasofya Manzaralı Akşam (24) · Sultanahmet Teras Restoran (26) · Gün Batımında Yemek (18) · My Terrace Sultanahmet (22) · Marmara Manzaralı Akşam (23) · 4,7★ - 5.600+ Yorum (20) · Özel Geceler İçin İdeal (23) · Romantik Teras Yemeği (21) · Travelers' Choice 2025 (22) · WhatsApp'tan Yer Ayırtın (24) · Manzaralı Akşam Yemeği (22) · Gün Batımı Eşliğinde (20)
**PIN P1:** "Gün Batımı Manzaralı Teras" + "Romantik Manzaralı Mekan"
**Descriptions (≤90):**
1. Gün batımında Ayasofya ve Marmara manzarası. Çiftler için romantik teras. (74)
2. Özel geceler için ideal manzaralı akşam yemeği. Kilim seki, Türk lambaları. (78)
3. 4,7★, 5.600+ yorum ve Travelers' Choice 2025. WhatsApp'tan yer ayırtın. (75)
4. Sultanahmet'in kalbinde romantik teras keyfi. Her gün 08.30-01.00 açık. (74)
**Negatives:** düğün salonu · nişan salonu · kına · organizasyon firması

### (g) Ad group — Nargile / Hookah
**Keywords:** `[sultanahmet nargile]` · `[nargile cafe sultanahmet]` · `[manzaralı nargile mekanı istanbul]` · `"sultanahmet nargile mekanları"` · `"teras nargile sultanahmet"` · `"ayasofya manzaralı nargile"` · `"nargile kafe istanbul manzaralı"` · `"sultanahmet nargile keyfi"` · `"deniz manzaralı nargile"` · `"nargile içilecek teras"`

**Headlines (≤30):** Sultanahmet Nargile Keyfi (25) · Manzaralı Nargile Terası (24) · Ayasofya Manzaralı Nargile (27) · Teras Katında Nargile (21) · My Terrace Nargile (18) · Nargile ve Manzara (18) · Sultanahmet Teras Restoran (26) · Gün Batımında Nargile (21) · 4,7★ - 5.600+ Yorum (20) · Deniz Manzaralı Nargile (23) · Kilim Seki, Türk Lambası (24) · Travelers' Choice 2025 (22) · WhatsApp'tan Yer Ayırtın (24) · Her Gün 08.30 - 01.00 (21) · Nargileli Teras Keyfi (21)
**PIN P1:** "Sultanahmet Nargile Keyfi" + "Ayasofya Manzaralı Nargile"
**Descriptions (≤90):**
1. Ayasofya ve Marmara manzaralı teras katında nargile keyfi. Kilim sekiler. (75)
2. Gün batımı eşliğinde nargile, çay ve atıştırmalıklar. Sultanahmet'in terası. (79)
3. 4,7★, 5.600+ yorum ve Travelers' Choice 2025. Her gün 08.30-01.00 açık. (72)
4. WhatsApp veya telefonla yer ayırtın. Manzaralı teras katı keyfi sizi bekliyor. (80)
**Negatives:** nargile satış · nargile malzeme · elektronik nargile · tütün satış

### (h) Ad group — Competitor (conquesting — careful)
> No rival brand names in ad text. Phrase match, own-benefit copy, low budget, separate tracking.
**Keywords:** `"sultanahmet teras restoran önerisi"` · `"sultanahmet en iyi teras"` · `"sultanahmet manzaralı restoran hangisi"` · `"sultanahmet rooftop restaurant"` · `"sultanahmet alternatif restoran"` · `"sultanahmet manzaralı mekanlar"` · `"sultanahmet teras restoran listesi"` · `"sultanahmet panoramik restoran"`

**Headlines (≤30):** Sultanahmet Teras Restoran (26) · Ayasofya Manzaralı Teras (24) · Gerçek Panoramik Manzara (24) · 4,7★ - 5.600+ Yorum (20) · Travelers' Choice 2025 (22) · My Terrace Sultanahmet (22) · Kahvaltı, Kebap, Deniz (22) · Gün Batımı Manzarası (20) · Teras Katında Yemek (18) · Manzaralı Restoran (18) · WhatsApp'tan Yer Ayırtın (24) · Her Gün 08.30 - 01.00 (21) · Marmara Manzaralı Teras (22) · Restaurant Guru Listesi (23) · Sultanahmet'in Terası (22)
**PIN P1:** "Sultanahmet Teras Restoran" + "Gerçek Panoramik Manzara"
**Descriptions (≤90):**
1. Ayasofya ve Marmara'ya bakan gerçek panoramik teras katı manzarası. (67)
2. 4,7★, 5.600+ yorum ve Travelers' Choice 2025. Kanıtlı misafir memnuniyeti. (77)
3. Serpme kahvaltı, mangal kebap ve taze deniz ürünleri. Gün batımı eşliğinde. (78)
4. WhatsApp veya telefonla yer ayırtın. Sultanahmet'in kalbinde teras keyfi. (74)
**Negatives:** iş ilanı · şikayet · yorum şikayet

### TR Shared assets
**Sitelinks (≤25 / 2 desc ≤35):**
1. Menümüz (8) — Kahvaltı, kebap, deniz ürünleri (35) / Teras katında taze lezzetler (29) → `/tr/menu`
2. Rezervasyon (11) — WhatsApp veya telefonla yer ayır (33) / Her gün 08.30-01.00 açığız (26) → `/tr/rezervasyon`
3. Serpme Kahvaltı (15) — Manzaralı serpme Türk kahvaltısı (33) / Sabah manzarası eşliğinde (26) → `/tr/kahvalti`
4. Manzara & Teras (15) — Ayasofya ve Marmara manzarası (30) / Gün batımı teras keyfi (22) → `/tr/manzara`
5. Galeri (6) — Teras, manzara ve lezzetler (27) / Gerçek mekan fotoğrafları (25) → `/tr/galeri`
6. İletişim & Konum (16) — Küçük Ayasofya, Sultanahmet (26) / Yol tarifi ve iletişim (22) → `/tr/iletisim`

**Callouts (≤25):** Ayasofya manzarası (18) · Gün batımı terası (17) · 4,7★ - 5.600+ yorum (20) · Travelers' Choice 2025 (22) · Serpme Türk kahvaltısı (22) · Kömür mangal kebap (18) · Taze deniz ürünleri (19) · Her gün 08.30-01.00 (20)

**Structured snippets (≤25):**
- *Mutfak türleri:* Türk kahvaltısı (15) · Mangal kebap (12) · Deniz ürünleri (14) · Meze (4) · Izgara etler (12) · Nargile (7)
- *Olanaklar:* Teras katı (10) · Manzaralı oturum (16) · Gün batımı manzarası (20) · Kilim seki oturum (17) · Nargile servisi (15) · Grup rezervasyonu (17)

### TR campaign negatives (`MyTerrace_TR_Negatives`)
**İş:** iş ilanı · eleman · eleman aranıyor · garson alımı · komi alımı · aşçı alımı · iş başvurusu · kariyer · staj · part time eleman
**Tarif:** tarif · tarifi · nasıl yapılır · yapımı · evde · kaç kalori · malzemeleri
**Ucuz/fiyat:** ücretsiz · bedava · ucuz · en ucuz · indirim kodu · kupon · bütçe dostu · fiyat listesi · menü fiyatları · ne kadar · kaç para
**Paket/teslimat:** paket servis · paket · eve sipariş · online sipariş · getir · yemeksepeti · trendyol yemek · kurye · teslimat · gel al
**Emlak/tedarik:** kiralık · satılık · daire · mülk · franchise · bayilik · devren · ekipman · toptan · malzeme satış · tedarikçi
**Otel:** otel · pansiyon · konaklama · hostel · oda fiyatları
**Şikayet:** şikayet · şikayetvar · dolandırıcı · kötü · zehirlenme
**Diğer:** düğün salonu · nişan salonu · kına · toplantı salonu · wikipedia · nedir · ödev · pdf

---

## 7. SEARCH — ENGLISH (EN) · `SEA_EN_Core`

**Settings:** Search only; English; **Presence: people in/near** targeted locations; radius **4 km** around `41.00429, 28.97367` + **Istanbul city** (tourists from hotels across town). Max Conversions → tCPA (≈ observed CPA × 1.0–1.1). Schedule per §4. LEAN ₺350–500/day → GROWTH ₺900–1,400/day.

### (a) Ad group — Rooftop & View
**Keywords:** `"rooftop restaurant sultanahmet"` · `"rooftop restaurant istanbul"` · `[rooftop restaurant hagia sophia]` · `"hagia sophia view restaurant"` · `"restaurant with view istanbul"` · `"sea view restaurant istanbul"` · `"terrace restaurant sultanahmet"` · `"rooftop dining istanbul"` · `"restaurant with a view sultanahmet"` · `"panoramic restaurant istanbul"` · `"rooftop cafe sultanahmet"` · `"best rooftop sultanahmet"`

**Headlines (≤30):** Rooftop Restaurant Istanbul (27) · Hagia Sophia View Dining (24) · Rooftop in Sultanahmet (22) · Terrace Over the Old City (25) · Marmara Sea & Sophia View (25) · 4.7★ Google, 5,600+ Reviews (28) · Travelers' Choice 2025 (22) · Panoramic Terrace Dining (24) · Book a View Table Today (23) · Reserve on WhatsApp (20) · Sunset Over Sultanahmet (23) · Breakfast, Kebab & Seafood (26) · Open 08:30 to 01:00 Daily (25) · Nargile With the View (21) · My Terrace Sultanahmet (22)
**PIN P1:** "Rooftop Restaurant Istanbul" + "Hagia Sophia View Dining"
**Descriptions (≤90):**
1. Dine on our rooftop with a panoramic Hagia Sophia and Marmara Sea view. (70)
2. 4.7★ Google, 5,600+ reviews, Travelers' Choice 2025. Reserve your terrace table. (82)
3. Turkish breakfast, charcoal kebab, fresh seafood and nargile above the old city. (80)
4. Book by WhatsApp, phone or on-site. Open daily 08:30–01:00 in Sultanahmet. (74)
**Negatives:** rooftop bar · pool · hotel · apartment · rooftop pool

### (b) Ad group — Turkish Breakfast (serpme)
**Keywords:** `"turkish breakfast sultanahmet"` · `"turkish breakfast istanbul"` · `[turkish breakfast with a view]` · `"breakfast with view istanbul"` · `"serpme kahvalti istanbul"` · `"best breakfast sultanahmet"` · `"breakfast sultanahmet"` · `"rooftop breakfast istanbul"` · `"turkish breakfast near hagia sophia"` · `"breakfast with sea view istanbul"` · `"spread breakfast istanbul"`

**Headlines (≤30):** Turkish Breakfast View (22) · Breakfast in Sultanahmet (24) · Serpme Turkish Breakfast (24) · Breakfast With Sophia View (26) · Rooftop Breakfast Istanbul (26) · Spread Breakfast for Two (24) · Morning Sea View Terrace (24) · 4.7★ Google, 5,600+ Reviews (28) · Travelers' Choice 2025 (22) · Open From 08:30 Daily (21) · Book a Morning Table (20) · Reserve on WhatsApp (20) · Breakfast Over Old City (23) · My Terrace Sultanahmet (22) · Fresh Serpme Kahvaltı (21)
**PIN P1:** "Turkish Breakfast View" + "Breakfast in Sultanahmet"
**Descriptions (≤90):**
1. Serpme Turkish breakfast on the terrace with Hagia Sophia and sea view. (70)
2. Start the day above Sultanahmet. 4.7★ Google, Travelers' Choice 2025. (68)
3. Generous spread breakfast served daily from 08:30. Book your morning table. (75)
4. Reserve by WhatsApp, phone or on-site. Mornings with a view in old Istanbul. (76)
**Negatives:** buffet hotel · cheap · recipe · delivery · near me free

### (c) Ad group — Kebab & Mangal
**Keywords:** `"kebab restaurant sultanahmet"` · `"kebab restaurant istanbul"` · `[best kebab sultanahmet]` · `"mangal restaurant istanbul"` · `"charcoal kebab istanbul"` · `"grill restaurant sultanahmet"` · `"turkish kebab sultanahmet"` · `"kebab near hagia sophia"` · `"meat restaurant sultanahmet"` · `"adana kebab istanbul"` · `"grill house sultanahmet"`

**Headlines (≤30):** Kebab in Sultanahmet (20) · Charcoal Mangal Kebab (21) · Rooftop Kebab With View (23) · Grill Over the Old City (23) · Turkish Kebab & Mangal (22) · Hagia Sophia View Dining (24) · 4.7★ Google, 5,600+ Reviews (28) · Travelers' Choice 2025 (22) · Fresh Charcoal Grill (20) · Book a Terrace Table (20) · Reserve on WhatsApp (20) · Dinner With a View (18) · Open 08:30 to 01:00 Daily (25) · My Terrace Sultanahmet (22) · Kebab, Seafood & View (21)
**PIN P1:** "Kebab in Sultanahmet" + "Charcoal Mangal Kebab"
**Descriptions (≤90):**
1. Charcoal mangal kebab on the rooftop with Hagia Sophia and sea view. (67)
2. 4.7★ Google, 5,600+ reviews, Travelers' Choice 2025. Book your terrace table. (78)
3. Fresh grilled kebab and meze served daily until late in Sultanahmet. (68)
4. Reserve by WhatsApp, phone or on-site. Dinner with a view over old Istanbul. (76)
**Negatives:** recipe · doner cheap · street food · delivery · halal certificate

### (d) Ad group — Seafood
**Keywords:** `"seafood restaurant sultanahmet"` · `"seafood restaurant istanbul"` · `[fish restaurant sultanahmet]` · `"fish restaurant istanbul"` · `"seafood with view istanbul"` · `"fresh fish sultanahmet"` · `"seafood near hagia sophia"` · `"meze and fish istanbul"` · `"fish restaurant with view istanbul"` · `"sea view seafood istanbul"`

**Headlines (≤30):** Seafood in Sultanahmet (22) · Fresh Fish With a View (22) · Seafood Over the Old City (25) · Fish & Meze on the Terrace (26) · Hagia Sophia View Dining (24) · Sea View Seafood Istanbul (25) · 4.7★ Google, 5,600+ Reviews (28) · Travelers' Choice 2025 (22) · Rooftop Fish Restaurant (23) · Book a Terrace Table (20) · Reserve on WhatsApp (20) · Dinner With a View (18) · Open 08:30 to 01:00 Daily (25) · My Terrace Sultanahmet (22) · Fresh Fish & Meze (17)
**PIN P1:** "Seafood in Sultanahmet" + "Fresh Fish With a View"
**Descriptions (≤90):**
1. Fresh seafood and meze on the rooftop with Hagia Sophia and sea view. (68)
2. 4.7★ Google, 5,600+ reviews, Travelers' Choice 2025. Book your terrace table. (78)
3. Daily fresh fish and Turkish meze served until late in Sultanahmet. (66)
4. Reserve by WhatsApp, phone or on-site. Seafood with a view over old Istanbul. (77)
**Negatives:** sushi · recipe · market · delivery · cheap

### (e) Ad group — Near-me / Sultanahmet Area
**Keywords:** `"restaurant near hagia sophia"` · `"restaurant near blue mosque"` · `"restaurants in sultanahmet"` · `"where to eat sultanahmet"` · `"best restaurant sultanahmet"` · `"restaurant near me sultanahmet"` · `"places to eat near hagia sophia"` · `"restaurant kucuk ayasofya"` · `"good restaurant sultanahmet"` · `"restaurant fatih istanbul view"` · `"dinner near blue mosque"`

**Headlines (≤30):** Restaurant in Sultanahmet (25) · Near Hagia Sophia (17) · Steps From the Blue Mosque (26) · Rooftop With Sophia View (24) · Where to Eat in Sultanahmet (27) · 4.7★ Google, 5,600+ Reviews (28) · Travelers' Choice 2025 (22) · Breakfast, Kebab & Seafood (26) · Terrace Over the Old City (25) · Book a Terrace Table (20) · Reserve on WhatsApp (20) · Open 08:30 to 01:00 Daily (25) · Sunset Over Sultanahmet (23) · My Terrace Sultanahmet (22) · Dinner With a View (18)
**PIN P1:** "Restaurant in Sultanahmet" + "Near Hagia Sophia"
**Descriptions (≤90):**
1. A short walk from Hagia Sophia and the Blue Mosque. Rooftop with sea view. (74)
2. 4.7★ Google, 5,600+ reviews, Travelers' Choice 2025. Book your terrace table. (78)
3. Turkish breakfast, charcoal kebab, fresh seafood and nargile in Sultanahmet. (75)
4. Reserve by WhatsApp, phone or on-site. Open daily 08:30–01:00. (61)
**Negatives:** fast food · mcdonalds · burger king · cheap eats · free

### (f) Ad group — Sunset / Romantic
**Keywords:** `"romantic restaurant istanbul"` · `"sunset restaurant istanbul"` · `[romantic dinner sultanahmet]` · `"romantic restaurant sultanahmet"` · `"sunset dinner istanbul"` · `"romantic dinner with view istanbul"` · `"best sunset view istanbul restaurant"` · `"date night restaurant istanbul"` · `"candlelight dinner istanbul"` · `"sunset terrace istanbul"`

**Headlines (≤30):** Sunset Dining in Istanbul (25) · Romantic Rooftop Dinner (23) · Sunset Over Sultanahmet (23) · Dinner With Sophia View (23) · Romantic Terrace for Two (24) · Marmara Sea & Sophia View (25) · 4.7★ Google, 5,600+ Reviews (28) · Travelers' Choice 2025 (22) · Date Night With a View (22) · Book a Sunset Table (19) · Reserve on WhatsApp (20) · Candlelit Rooftop Dinner (24) · Open Late, Til 01:00 (20) · My Terrace Sultanahmet (22) · Sunset Terrace Istanbul (23)
**PIN P1:** "Sunset Dining in Istanbul" + "Romantic Rooftop Dinner"
**Descriptions (≤90):**
1. Watch the sunset over Hagia Sophia from our romantic rooftop terrace. (69)
2. 4.7★ Google, 5,600+ reviews, Travelers' Choice 2025. Book a sunset table for two. (82)
3. Candlelit dinner with sea view, charcoal kebab, fresh seafood and nargile. (74)
4. Reserve by WhatsApp, phone or on-site. Romantic evenings over old Istanbul. (74)
**Negatives:** proposal package · wedding venue · hotel · bar crawl · nightclub

### (g) Ad group — Nargile / Hookah
**Keywords:** `"nargile cafe sultanahmet"` · `"hookah lounge istanbul"` · `[shisha sultanahmet]` · `"nargile istanbul rooftop"` · `"hookah sultanahmet"` · `"shisha bar istanbul"` · `"nargile with view istanbul"` · `"hookah near hagia sophia"` · `"rooftop shisha istanbul"`

**Headlines (≤30):** Nargile in Sultanahmet (22) · Rooftop Nargile & View (22) · Hookah Over the Old City (24) · Shisha With Sophia View (23) · Nargile on the Terrace (22) · Hagia Sophia View Lounge (24) · 4.7★ Google, 5,600+ Reviews (28) · Travelers' Choice 2025 (22) · Tea, Nargile & Sea View (23) · Book a Terrace Table (20) · Reserve on WhatsApp (20) · Open Late, Til 01:00 (20) · Sunset & Nargile (16) · My Terrace Sultanahmet (22) · Hookah With a View (18)
**PIN P1:** "Nargile in Sultanahmet" + "Rooftop Nargile & View"
**Descriptions (≤90):**
1. Enjoy nargile on the rooftop with Hagia Sophia and Marmara Sea view. (67)
2. 4.7★ Google, 5,600+ reviews, Travelers' Choice 2025. Book your terrace table. (78)
3. Tea, nargile and dessert with a view, open late until 01:00 in Sultanahmet. (75)
4. Reserve by WhatsApp, phone or on-site. Relax above the old city after sunset. (77)
**Negatives:** vape · e cigarette · tobacco shop · buy shisha · delivery

### (h) Ad group — Competitor (conquesting — careful)
> No rival names in ad text. Phrase match, low bid, prune aggressively. Replace placeholders with real Sultanahmet rooftop competitor brands only if you accept policy risk.
**Keywords:** `"rooftop restaurant sultanahmet"` · `"[competitor 1] sultanahmet"` · `"[competitor 2] rooftop"` · `"[competitor 3] istanbul view"` · `"alternative rooftop sultanahmet"` · `"best rooftop restaurant near hagia sophia"` · `"top rooftop sultanahmet"`

**Headlines (≤30):** Rooftop in Sultanahmet (22) · Hagia Sophia View Dining (24) · Terrace Over the Old City (25) · Marmara Sea & Sophia View (25) · 4.7★ Google, 5,600+ Reviews (28) · Travelers' Choice 2025 (22) · Breakfast, Kebab & Seafood (26) · Sunset Over Sultanahmet (23) · Book a View Table Today (23) · Reserve on WhatsApp (20) · Open 08:30 to 01:00 Daily (25) · Nargile With the View (21) · My Terrace Sultanahmet (22) · Real Rooftop, Real View (23) · Dine Above Old Istanbul (23)
**PIN P1:** "Rooftop in Sultanahmet" + "Hagia Sophia View Dining"
**Descriptions (≤90):**
1. Rooftop dining with a real Hagia Sophia and Marmara Sea view in Sultanahmet. (75)
2. 4.7★ Google, 5,600+ reviews, Travelers' Choice 2025. Book your terrace table. (78)
3. Turkish breakfast, charcoal kebab, fresh seafood and nargile above old Istanbul. (80)
4. Reserve by WhatsApp, phone or on-site. Open daily 08:30–01:00. (61)
**Negatives:** jobs · menu · reviews · phone number · directions

### EN Shared assets
**Sitelinks (≤25 / 2 desc ≤35):**
1. Menu (4) — Breakfast, kebab, seafood (24) / Fresh meze and Turkish flavors (30) → `/en/menu`
2. Reserve a Table (15) — Book by WhatsApp or phone (25) / Terrace tables with a view (25) → `/en/reservation`
3. The View (8) — Hagia Sophia and sea view (25) / Real rooftop photos and reels (29) → `/en/gallery`
4. Turkish Breakfast (17) — Serpme spread from 08:30 (24) / Mornings over the old city (25) → `/en/menu#breakfast`
5. Sunset Dining (14) — Romantic rooftop evenings (25) / Open late until 01:00 (21) → `/en/gallery`
6. Contact & Map (13) — Sultanahmet, Fatih (18) / Open daily 08:30 to 01:00 (25) → `/en/contact`

**Callouts (≤25):** Hagia Sophia view (17) · Marmara Sea view (16) · 4.7★ on Google (14) · Travelers' Choice 2025 (22) · Serpme Turkish breakfast (24) · Charcoal mangal kebab (21) · Fresh seafood daily (19) · Nargile on the terrace (22) · Open 08:30 to 01:00 (19) · WhatsApp reservations (21)  *(use best 8; extras give the system room)*

**Structured snippets (≤25):**
- *Cuisines:* Turkish (7) · Breakfast (9) · Kebab (5) · Seafood (7) · Meze (4) · Nargile (7)
- *Amenities:* Rooftop terrace (15) · Sea view (8) · Hagia Sophia view (17) · Sunset dining (13) · Nargile (7) · Reservations (12)

---

## 8. SEARCH — ARABIC (AR) · `SEA_AR_Core`

**Settings:** Search only; **Arabic + English** (many Gulf users browse with EN UI; language targeting matches UI/content, not query); **Presence: people in/near** targeted locations; radius **2 km** around `41.00429, 28.97367` + **Istanbul city** at lower bid. Max Conversions → tCPA (≈ 1.0–1.2× observed). Schedule per §4. LEAN ₺300/day → GROWTH ₺750–1,000/day. RTL; char counts = code points. Note: since there's no online ordering, consider marking WhatsApp/call primary alongside reservations early on.

### (a) Ad group — Brand/Defense `AG_AR_Brand` (if not in `BRAND_ALL_Defense`)
**Keywords:** `[ماي تراس]` · `[مطعم ماي تراس]` · `"ماي تراس اسطنبول"` · `"ماي تراس السلطان احمد"` · `[my terrace]` · `"my terrace istanbul"` · `"my terrace restaurant"` · `"ماي تيراس"` · `"مطعم ماي تيراس"` · `[my terrace cafe]`
**Headlines (≤30):** ماي تراس اسطنبول (15) · مطعم ماي تراس الرسمي (19) · مطعم ماي تراس السلطان احمد (25) · على سطح بإطلالة بانورامية (24) · إطلالة آيا صوفيا والبحر (22) · تقييم 4.7 و5600 مراجعة (21) · حائز Travelers Choice 2025 (25) · فطور تركي وكباب ومأكولات بحر (28) · احجز عبر واتساب الآن (19) · مفتوح يوميًا حتى 1 ليلًا (23) · عشاء مع غروب الشمس (17) · أراكيل وأجواء تركية أصيلة (24) · الموقع: كوتشوك آيا صوفيا (23) · حجز سريع بدون انتظار (19) · تجربة سطح لا تُنسى (17)
**PIN P1:** "ماي تراس اسطنبول" + "مطعم ماي تراس الرسمي"
**Descriptions (≤90):**
1. ماي تراس: مطعم على السطح بإطلالة آيا صوفيا وبحر مرمرة في قلب السلطان احمد. (72)
2. فطور تركي مفتوح، كباب مشوي على الفحم، ومأكولات بحرية طازجة مع أراكيل. (68)
3. تقييم 4.7 نجمة وأكثر من 5600 مراجعة، وحائز Travelers Choice 2025. (62)
4. احجز طاولتك عبر واتساب أو الهاتف. مفتوح يوميًا من 8:30 صباحًا حتى 1 بعد منتصف الليل. (84)
**Negatives:** وظائف · توظيف · شكاوى · فرانشايز

### (b) Ad group — Rooftop & View `AG_AR_Rooftop`
**Keywords:** `"مطعم على السطح اسطنبول"` · `"مطعم روف توب اسطنبول"` · `"مطعم بإطلالة اسطنبول"` · `"مطعم اطلالة السلطان احمد"` · `"مطعم اطلالة ايا صوفيا"` · `[مطعم على السطح في اسطنبول]` · `"روف توب السلطان احمد"` · `"مطعم بانوراما اسطنبول"` · `"مطعم بإطلالة البحر اسطنبول"` · `"افضل مطعم اطلالة اسطنبول"` · `"تراس مطعم اسطنبول"` · `"مطعم سطح ايا صوفيا"`
**Headlines (≤30):** مطعم على السطح اسطنبول (21) · إطلالة آيا صوفيا والبحر (22) · روف توب في السلطان احمد (22) · بانوراما اسطنبول الساحرة (23) · ماي تراس بإطلالة بانورامية (25) · تقييم 4.7 و5600 مراجعة (21) · عشاء مع غروب على السطح (21) · فطور تركي بإطلالة البحر (22) · أراكيل وأجواء تركية (18) · حائز Travelers Choice 2025 (25) · احجز طاولتك عبر واتساب (21) · مفتوح يوميًا حتى 1 ليلًا (23) · جلسات كليم ومصابيح تركية (24) · أجمل إطلالة في السلطان احمد (26) · تجربة سطح لا تُنسى (17)
**PIN P1:** "مطعم على السطح اسطنبول" + "إطلالة آيا صوفيا والبحر"
**Descriptions (≤90):**
1. مطعم على السطح في السلطان احمد بإطلالة بانورامية على آيا صوفيا وبحر مرمرة. (73)
2. استمتع بالغروب من على السطح مع فطور تركي، كباب، مأكولات بحرية وأراكيل. (69)
3. تقييم 4.7 نجمة و5600 مراجعة وحائز Travelers Choice 2025. احجز عبر واتساب. (70)
4. أجواء تركية أصيلة بجلسات الكليم والمصابيح. مفتوح يوميًا 8:30 ص حتى 1 بعد منتصف الليل. (85)
**Negatives:** شقق · فندق · سطح منزل · للايجار

### (c) Ad group — Turkish Breakfast / Serpme `AG_AR_Breakfast`
**Keywords:** `"فطور تركي اسطنبول"` · `"افطار تركي اسطنبول"` · `"فطور السلطان احمد"` · `"فطور تركي بإطلالة"` · `[فطور تركي في اسطنبول]` · `"بوفيه فطور تركي اسطنبول"` · `"افضل فطور تركي اسطنبول"` · `"مطعم فطور السلطان احمد"` · `"فطور صباحي اسطنبول"` · `"سرپمه فطور تركي"` · `"مكان فطور اسطنبول"` · `"فطور مع اطلالة اسطنبول"`
**Headlines (≤30):** فطور تركي في اسطنبول (19) · فطور تركي بإطلالة السطح (22) · سرپمه فطور تركي مفتوح (20) · فطور في السلطان احمد (19) · إطلالة آيا صوفيا مع الفطور (25) · ماي تراس على السطح (17) · تقييم 4.7 و5600 مراجعة (21) · فطور صباحي من 8:30 ص (18) · أجواء تركية ومصابيح (18) · أطباق فطور تركية متنوعة (23) · حائز Travelers Choice 2025 (25) · احجز فطورك عبر واتساب (20) · فطور بإطلالة البحر (17) · أجمل فطور في السلطان احمد (24) · ابدأ يومك بإطلالة ساحرة (22)
**PIN P1:** "فطور تركي في اسطنبول" + "فطور تركي بإطلالة السطح"
**Descriptions (≤90):**
1. فطور تركي سرپمه على السطح بإطلالة آيا صوفيا وبحر مرمرة في قلب السلطان احمد. (74)
2. أطباق فطور تركية متنوعة وطازجة مع الشاي التركي وأجواء تركية أصيلة. (64)
3. تقييم 4.7 نجمة و5600 مراجعة. مفتوح يوميًا من 8:30 صباحًا. احجز عبر واتساب. (69)
4. ابدأ صباحك بإطلالة بانورامية لا تُنسى. حجز سريع عبر واتساب أو الهاتف بدون انتظار. (80)
**Negatives:** وصفة · طريقة عمل · بوفيه فندق · توصيل

### (d) Ad group — Kebab & Mangal `AG_AR_Kebab`
**Keywords:** `"مطعم كباب اسطنبول"` · `"كباب مشوي اسطنبول"` · `"مطعم مشاوي اسطنبول"` · `"كباب السلطان احمد"` · `[مطعم كباب في اسطنبول]` · `"افضل كباب اسطنبول"` · `"مشاوي على الفحم اسطنبول"` · `"مطعم مشاوي السلطان احمد"` · `"كباب تركي اسطنبول"` · `"مطعم لحوم مشوية اسطنبول"` · `"مانجال اسطنبول"` · `"عشاء كباب بإطلالة"`
**Headlines (≤30):** مطعم كباب في اسطنبول (19) · كباب مشوي على الفحم (18) · مشاوي في السلطان احمد (20) · كباب تركي بإطلالة السطح (22) · عشاء مشاوي مع غروب (17) · إطلالة آيا صوفيا والبحر (22) · ماي تراس على السطح (17) · تقييم 4.7 و5600 مراجعة (21) · لحوم طازجة على الفحم (19) · أجواء تركية وأراكيل (18) · حائز Travelers Choice 2025 (25) · احجز طاولتك عبر واتساب (21) · مفتوح يوميًا حتى 1 ليلًا (23) · مشاوي بإطلالة بانورامية (22) · ألذ كباب في السلطان احمد (23)
**PIN P1:** "مطعم كباب في اسطنبول" + "كباب مشوي على الفحم"
**Descriptions (≤90):**
1. كباب ومشاوي طازجة على الفحم بإطلالة آيا صوفيا وبحر مرمرة على سطح ماي تراس. (73)
2. عشاء مشاوي مع غروب الشمس في قلب السلطان احمد وأجواء تركية أصيلة مع أراكيل. (74)
3. تقييم 4.7 نجمة و5600 مراجعة وحائز Travelers Choice 2025. احجز عبر واتساب. (70)
4. مفتوح يوميًا حتى 1 بعد منتصف الليل. حجز سريع عبر واتساب أو الهاتف بدون انتظار. (78)
**Negatives:** وصفة · سعر كيلو · توصيل · لحم نيء · جزارة

### (e) Ad group — Seafood `AG_AR_Seafood`
**Keywords:** `"مطعم سمك اسطنبول"` · `"مأكولات بحرية اسطنبول"` · `"مطعم بحري اسطنبول"` · `"سمك طازج اسطنبول"` · `[مطعم مأكولات بحرية اسطنبول]` · `"مطعم سمك السلطان احمد"` · `"افضل مطعم سمك اسطنبول"` · `"مأكولات بحرية بإطلالة"` · `"عشاء بحري بإطلالة البحر"` · `"مطعم سي فود اسطنبول"` · `"سمك مشوي اسطنبول"` · `"مطعم سمك بإطلالة"`
**Headlines (≤30):** مطعم سمك في اسطنبول (18) · مأكولات بحرية طازجة (18) · سي فود في السلطان احمد (21) · سمك طازج بإطلالة السطح (21) · عشاء بحري مع غروب (16) · إطلالة آيا صوفيا والبحر (22) · ماي تراس على السطح (17) · تقييم 4.7 و5600 مراجعة (21) · أطباق بحرية متنوعة (17) · أجواء تركية وأراكيل (18) · حائز Travelers Choice 2025 (25) · احجز طاولتك عبر واتساب (21) · مفتوح يوميًا حتى 1 ليلًا (23) · مأكولات بحر بإطلالة البحر (25) · ألذ سمك في السلطان احمد (22)
**PIN P1:** "مطعم سمك في اسطنبول" + "مأكولات بحرية طازجة"
**Descriptions (≤90):**
1. مأكولات بحرية وسمك طازج بإطلالة آيا صوفيا وبحر مرمرة على سطح ماي تراس. (69)
2. عشاء بحري مع غروب الشمس في قلب السلطان احمد وأجواء تركية أصيلة مع أراكيل. (74)
3. تقييم 4.7 نجمة و5600 مراجعة وحائز Travelers Choice 2025. احجز عبر واتساب. (70)
4. مفتوح يوميًا حتى 1 بعد منتصف الليل. حجز سريع عبر واتساب أو الهاتف بدون انتظار. (78)
**Negatives:** سوق السمك · سعر السمك · توصيل · سمك حي · صيد

### (f) Ad group — Near-me / Area `AG_AR_NearMe`
**Keywords:** `"مطعم قريب مني"` · `"مطاعم السلطان احمد"` · `"مطعم في السلطان احمد"` · `"افضل مطاعم السلطان احمد"` · `"مطاعم قريبة من ايا صوفيا"` · `"مطعم قرب المسجد الازرق"` · `"مطاعم كوتشوك ايا صوفيا"` · `[مطاعم السلطان احمد]` · `"مطعم قرب ايا صوفيا"` · `"اين اكل في السلطان احمد"` · `"مطاعم الفاتح اسطنبول"` · `"مطاعم قريبة مني اسطنبول"`
**Headlines (≤30):** مطاعم السلطان احمد (16) · مطعم قرب آيا صوفيا (16) · مطعم قرب المسجد الأزرق (21) · على بعد خطوات من آيا صوفيا (25) · ماي تراس على السطح (17) · إطلالة آيا صوفيا والبحر (22) · تقييم 4.7 و5600 مراجعة (21) · فطور تركي وكباب ومأكولات بحر (28) · عشاء مع غروب الشمس (17) · أراكيل وأجواء تركية (18) · حائز Travelers Choice 2025 (25) · احجز طاولتك عبر واتساب (21) · مفتوح يوميًا حتى 1 ليلًا (23) · أفضل مطعم بالسلطان احمد (22) · مكانك المثالي في الفاتح (22)
**PIN P1:** "مطاعم السلطان احمد" + "مطعم قرب آيا صوفيا"
**Descriptions (≤90):**
1. مطعم ماي تراس في كوتشوك آيا صوفيا، على خطوات من آيا صوفيا والمسجد الأزرق. (72)
2. إطلالة بانورامية على السطح مع فطور تركي، كباب، مأكولات بحرية وأراكيل. (67)
3. تقييم 4.7 نجمة و5600 مراجعة وحائز Travelers Choice 2025. احجز عبر واتساب. (70)
4. مفتوح يوميًا من 8:30 ص حتى 1 بعد منتصف الليل. حجز سريع عبر واتساب أو الهاتف. (76)
**Negatives:** فندق · كافيه رخيص · توصيل · وظائف

### (g) Ad group — Sunset / Romantic `AG_AR_Sunset`
**Keywords:** `"عشاء رومانسي اسطنبول"` · `"مطعم غروب اسطنبول"` · `"مطعم رومانسي السلطان احمد"` · `"عشاء مع اطلالة اسطنبول"` · `"مكان غروب اسطنبول"` · `[عشاء رومانسي في اسطنبول]` · `"مطعم للازواج اسطنبول"` · `"اطلالة غروب اسطنبول"` · `"عشاء رومانسي بإطلالة"` · `"افضل مكان غروب اسطنبول"` · `"مطعم هادئ رومانسي اسطنبول"` · `"احتفال عشاء اسطنبول"`
**Headlines (≤30):** عشاء رومانسي في اسطنبول (22) · عشاء مع غروب الشمس (17) · إطلالة غروب على السطح (20) · مكان رومانسي بالسلطان احمد (25) · إطلالة آيا صوفيا والبحر (22) · ماي تراس على السطح (17) · أجواء رومانسية للأزواج (21) · تقييم 4.7 و5600 مراجعة (21) · غروب ساحر فوق البحر (18) · أراكيل وأجواء تركية (18) · حائز Travelers Choice 2025 (25) · احجز طاولتك عبر واتساب (21) · عشاء بإطلالة بانورامية (21) · لحظات لا تُنسى مع الغروب (23) · أجمل غروب بالسلطان احمد (22)
**PIN P1:** "عشاء رومانسي في اسطنبول" + "عشاء مع غروب الشمس"
**Descriptions (≤90):**
1. عشاء رومانسي مع غروب الشمس بإطلالة آيا صوفيا وبحر مرمرة على سطح ماي تراس. (73)
2. أجواء تركية هادئة بجلسات الكليم والمصابيح، مثالية للأزواج والمناسبات. (67)
3. تقييم 4.7 نجمة و5600 مراجعة وحائز Travelers Choice 2025. احجز عبر واتساب. (70)
4. احجز طاولة الغروب مبكرًا عبر واتساب أو الهاتف. مفتوح يوميًا حتى 1 بعد منتصف الليل. (83)
**Negatives:** فندق · قاعة افراح · كوفي شوب · رخيص

### (h) Ad group — Nargile / Hookah `AG_AR_Nargile`
**Keywords:** `"اراكيل اسطنبول"` · `"شيشة اسطنبول"` · `"مقهى شيشة اسطنبول"` · `"اراكيل السلطان احمد"` · `"مكان شيشة السلطان احمد"` · `[اراكيل في اسطنبول]` · `"شيشة بإطلالة اسطنبول"` · `"اراكيل على السطح اسطنبول"` · `"مقهى نرجيلة اسطنبول"` · `"شيشة مع اطلالة"` · `"كافيه شيشة السلطان احمد"` · `"اراكيل بإطلالة البحر"`
**Headlines (≤30):** أراكيل في اسطنبول (16) · أراكيل على السطح بإطلالة (23) · شيشة في السلطان احمد (19) · أراكيل بإطلالة آيا صوفيا (23) · ماي تراس على السطح (17) · إطلالة آيا صوفيا والبحر (22) · أجواء تركية ومصابيح (18) · تقييم 4.7 و5600 مراجعة (21) · أراكيل مع غروب الشمس (19) · جلسات كليم مريحة (15) · حائز Travelers Choice 2025 (25) · احجز طاولتك عبر واتساب (21) · مفتوح يوميًا حتى 1 ليلًا (23) · أراكيل بإطلالة البحر (19) · أجمل جلسة شيشة بالسطح (20)
**PIN P1:** "أراكيل في اسطنبول" + "أراكيل على السطح بإطلالة"
**Descriptions (≤90):**
1. أراكيل وأجواء تركية أصيلة على السطح بإطلالة آيا صوفيا وبحر مرمرة. (64)
2. استمتع بالشيشة مع غروب الشمس في قلب السلطان احمد بجلسات الكليم والمصابيح. (73)
3. تقييم 4.7 نجمة و5600 مراجعة وحائز Travelers Choice 2025. احجز عبر واتساب. (70)
4. مفتوح يوميًا حتى 1 بعد منتصف الليل. حجز سريع عبر واتساب أو الهاتف بدون انتظار. (78)
**Negatives:** نكهات · بيع شيشة · معسل · توصيل · سعر شيشة

### (i) Ad group — Competitor `AG_AR_Competitor` (careful)
> Lower bid, watch CPA. No competitor names in ad text. Phrase only.
**Keywords:** `"مطعم سطح بديل"` · `"مطاعم اطلالة منافسة"` · `"افضل بديل مطعم اطلالة اسطنبول"` · `"مطاعم روف توب اسطنبول"` · `"مطاعم سطح السلطان احمد"` · `"اشهر مطاعم اطلالة اسطنبول"` · `"مطاعم فطور بإطلالة اسطنبول"` · `"مطاعم سياحية السلطان احمد"`
**Headlines (≤30):** مطعم سطح بالسلطان احمد (21) · إطلالة آيا صوفيا والبحر (22) · ماي تراس روف توب (15) · بديلك الأفضل بإطلالة (19) · تقييم 4.7 و5600 مراجعة (21) · حائز Travelers Choice 2025 (25) · فطور تركي وكباب ومأكولات بحر (28) · عشاء مع غروب الشمس (17) · أراكيل وأجواء تركية (18) · احجز طاولتك عبر واتساب (21) · مفتوح يوميًا حتى 1 ليلًا (23) · قارن وستختار ماي تراس (20) · أجمل إطلالة بالسلطان احمد (24) · تجربة سطح لا تُنسى (17)
**PIN P1:** "مطعم سطح بالسلطان احمد" + "إطلالة آيا صوفيا والبحر"
**Descriptions (≤90):**
1. ابحث عن أفضل مطعم سطح في السلطان احمد؟ ماي تراس بإطلالة آيا صوفيا وبحر مرمرة. (76)
2. فطور تركي، كباب، مأكولات بحرية وأراكيل مع غروب الشمس وأجواء تركية أصيلة. (71)
3. تقييم 4.7 نجمة و5600 مراجعة وحائز Travelers Choice 2025. احجز عبر واتساب. (70)
4. قارن التجربة بنفسك. حجز سريع عبر واتساب أو الهاتف. مفتوح يوميًا حتى 1 ليلًا. (74)
**Negatives:** وظائف · رواتب · شكاوى · رخيص · توصيل

### AR Shared assets
**Sitelinks (≤25 / 2 desc ≤35):**
1. القائمة والأطباق (15) — فطور تركي، كباب، مأكولات بحرية (30) / تصفح أطباقنا المتنوعة (20) → `/ar/menu`
2. احجز عبر واتساب (14) — حجز سريع بدون انتظار (19) / رد فوري على واتساب (16) → `https://wa.me/905359318817`
3. الإطلالة والسطح (14) — إطلالة آيا صوفيا وبحر مرمرة (27) / تجربة سطح بانورامية (18) → `/ar#view`
4. الفطور التركي (12) — سرپمه فطور تركي مفتوح (20) / ابدأ يومك بإطلالة (16) → `/ar/breakfast`
5. الموقع والوصول (13) — كوتشوك آيا صوفيا، الفاتح (23) / قرب آيا صوفيا والمسجد الأزرق (28) → `/ar/contact`
6. آراء الزوار (10) — تقييم 4.7 و5600 مراجعة (21) / حائز Travelers Choice 2025 (25) → `/ar/reviews`

**Callouts (≤25):** إطلالة آيا صوفيا والبحر (22) · مطعم على السطح (12) · فطور تركي مفتوح (14) · كباب ومشاوي على الفحم (20) · مأكولات بحرية طازجة (18) · أراكيل وأجواء تركية (18) · تقييم 4.7 ★ و5600 مراجعة (23) · مفتوح يوميًا حتى 1 ليلًا (23)

**Structured snippets (≤25):**
- *Amenities (الخدمات/المرافق):* إطلالة بانورامية (15) · جلسات على السطح (14) · أراكيل (6) · أجواء تركية (10) · مناسب للعائلات (13) · حجز عبر واتساب (13)
- *Types (الأنواع/الأصناف):* فطور تركي (8) · كباب ومشاوي (10) · مأكولات بحرية (12) · عشاء غروب (8) · شاي تركي (7)

---

## 9. SEARCH — GERMAN (DE) · `SEA_DE_Core`

**Settings:** Search only; **German + English** (DE tourists often browse EN UI in Turkey); **Presence: people in/near** targeted locations; radius **2 km** around `41.00429, 28.97367` + **Istanbul city** at lower bid (layered: 1 km +20%, 2 km base, 5 km −20%). Max Conversions → tCPA (~80–90% of observed CPA). Schedule per §4. LEAN €12–15/day → GROWTH €30–40/day.

### (a) Ad group — Rooftop & View
**Keywords:** `"restaurant mit aussicht sultanahmet"` · `"dachterrasse restaurant istanbul"` · `"restaurant dachterrasse sultanahmet"` · `"restaurant mit blick hagia sophia"` · `"rooftop restaurant istanbul"` · `"panorama restaurant istanbul"` · `[restaurant mit aussicht istanbul]` · `"restaurant mit ausblick istanbul"` · `"dachterrasse hagia sophia"` · `"restaurant aussicht marmarameer"`
**Headlines (≤30):** Dachterrasse Sultanahmet (24) · Restaurant mit Aussicht (23) · Blick auf die Hagia Sophia (25) · Panorama über Istanbul (22) · Rooftop in Sultanahmet (22) · Blick aufs Marmarameer (22) · Essen mit Aussicht (18) · 4,7 Sterne, Top-Bewertung (24) · Travelers Choice 2025 (21) · Tisch per WhatsApp buchen (24) · Sonnenuntergang genießen (24) · Dachterrasse mit Panorama (24) · Frühstück mit Aussicht (22) · Jetzt Tisch reservieren (23) · Aussicht auf 2 Wahrzeichen (25)
**PIN P1:** "Dachterrasse Sultanahmet" + "Blick auf die Hagia Sophia"
**Descriptions (≤90):**
1. Dachterrasse in Sultanahmet mit Panoramablick auf Hagia Sophia und Marmarameer. (78)
2. Genießen Sie Frühstück, Kebab und Sonnenuntergang hoch über Istanbul. Jetzt buchen. (83)
3. 4,7 Sterne, über 5.600 Bewertungen, Travelers Choice 2025. Tisch per WhatsApp. (78)
4. Rooftop-Dining im Herzen der Altstadt. Täglich 08:30–01:00 Uhr geöffnet. (71)
**Negatives:** bar · hotel · club · mieten · wohnung

### (b) Ad group — Turkish Breakfast (serpme)
**Keywords:** `"türkisches frühstück sultanahmet"` · `"türkisches frühstück istanbul"` · `[frühstück sultanahmet]` · `"frühstück mit aussicht istanbul"` · `"serpme kahvaltı istanbul"` · `"frühstück dachterrasse istanbul"` · `"bestes frühstück sultanahmet"` · `"frühstücken in sultanahmet"` · `"türkisches frühstück dachterrasse"` · `[frühstück hagia sophia]`
**Headlines (≤30):** Türkisches Frühstück (20) · Frühstück in Sultanahmet (24) · Frühstück mit Aussicht (22) · Serpme Frühstück (16) · Frühstück über den Dächern (26) · Blick auf die Hagia Sophia (25) · Dachterrasse zum Frühstück (25) · Reichhaltiges Frühstück (23) · 4,7 Sterne, Top bewertet (24) · Frühstück ab 08:30 Uhr (21) · Tisch per WhatsApp buchen (24) · Frühstück mit Panorama (22) · Travelers Choice 2025 (21) · Jetzt Tisch reservieren (23) · Frühstück in der Altstadt (25)
**PIN P1:** "Türkisches Frühstück" + "Frühstück mit Aussicht"
**Descriptions (≤90):**
1. Reichhaltiges türkisches Frühstück auf der Dachterrasse mit Blick auf die Hagia Sophia. (87)
2. Serpme-Frühstück hoch über Sultanahmet. Täglich ab 08:30 Uhr. Jetzt reservieren. (80)
3. 4,7 Sterne, über 5.600 Bewertungen. Tisch ganz einfach per WhatsApp buchen. (75)
4. Starten Sie den Tag mit Panoramablick über Istanbul. Mitten in der Altstadt. (76)
**Negatives:** buffet hotel · rezept · lieferung

### (c) Ad group — Kebab & Mangal
**Keywords:** `"kebab restaurant sultanahmet"` · `"kebab restaurant istanbul"` · `[kebab sultanahmet]` · `"mangal restaurant istanbul"` · `"grill restaurant sultanahmet"` · `"türkisches restaurant sultanahmet"` · `"kebab mit aussicht istanbul"` · `"bestes kebab istanbul"` · `"grillrestaurant sultanahmet"` · `"türkische küche sultanahmet"`
**Headlines (≤30):** Kebab in Sultanahmet (20) · Kebab vom Mangal (16) · Türkische Grillküche (20) · Kebab mit Aussicht (18) · Dachterrasse Sultanahmet (24) · Blick auf die Hagia Sophia (25) · Mangal über den Dächern (23) · Frisch vom Holzkohlegrill (25) · 4,7 Sterne, Top bewertet (24) · Türkische Küche genießen (24) · Tisch per WhatsApp buchen (24) · Travelers Choice 2025 (21) · Kebab am Marmarameer (20) · Jetzt Tisch reservieren (23) · Grillen mit Panorama (20)
**PIN P1:** "Kebab in Sultanahmet" + "Kebab vom Mangal"
**Descriptions (≤90):**
1. Kebab und Mangal vom Holzkohlegrill auf der Dachterrasse mit Blick auf die Hagia Sophia. (88)
2. Türkische Grillküche hoch über Sultanahmet. 4,7 Sterne, über 5.600 Bewertungen. (80)
3. Tisch ganz einfach per WhatsApp buchen. Täglich von 08:30 bis 01:00 Uhr geöffnet. (81)
4. Genießen Sie Kebab mit Panoramablick über Istanbul. Mitten in der Altstadt. (75)
**Negatives:** lieferung · dönerladen · imbiss · rezept

### (d) Ad group — Seafood
**Keywords:** `"fischrestaurant sultanahmet"` · `"fischrestaurant istanbul"` · `[meeresfrüchte istanbul]` · `"seafood restaurant istanbul"` · `"fisch restaurant mit aussicht"` · `"meeresfrüchte sultanahmet"` · `"fischrestaurant dachterrasse"` · `"frischer fisch istanbul"` · `"fisch essen sultanahmet"` · `"meeresfrüchte mit aussicht"`
**Headlines (≤30):** Fischrestaurant Istanbul (24) · Frischer Fisch Sultanahmet (26) · Meeresfrüchte mit Blick (22) · Fisch mit Aussicht (18) · Dachterrasse Sultanahmet (24) · Blick auf die Hagia Sophia (25) · Frische Meeresfrüchte (21) · Fisch am Marmarameer (20) · 4,7 Sterne, Top bewertet (24) · Tisch per WhatsApp buchen (24) · Seafood über den Dächern (24) · Travelers Choice 2025 (21) · Fisch zum Sonnenuntergang (25) · Jetzt Tisch reservieren (23) · Meeresfrüchte am Meer (21)
**PIN P1:** "Fischrestaurant Istanbul" + "Meeresfrüchte mit Blick"
**Descriptions (≤90):**
1. Frischer Fisch und Meeresfrüchte auf der Dachterrasse mit Blick auf die Hagia Sophia. (84)
2. Seafood mit Panoramablick über das Marmarameer. 4,7 Sterne, über 5.600 Bewertungen. (83)
3. Tisch ganz einfach per WhatsApp buchen. Täglich von 08:30 bis 01:00 Uhr geöffnet. (81)
4. Genießen Sie frischen Fisch zum Sonnenuntergang. Mitten in der Altstadt Istanbuls. (81)
**Negatives:** lieferung · sushi · rezept · markt

### (e) Ad group — Near-me / Sultanahmet Area
**Keywords:** `"restaurant sultanahmet"` · `[restaurant in sultanahmet]` · `"restaurant in meiner nähe"` · `"restaurant nahe hagia sophia"` · `"restaurant nahe blaue moschee"` · `"essen in sultanahmet"` · `"gutes restaurant sultanahmet"` · `"restaurant altstadt istanbul"` · `"wo essen in sultanahmet"` · `"restaurant fatih istanbul"`
**Headlines (≤30):** Restaurant Sultanahmet (22) · Essen in Sultanahmet (20) · Nahe der Hagia Sophia (21) · Nahe der Blauen Moschee (23) · Dachterrasse mit Aussicht (25) · Restaurant in der Altstadt (26) · Blick auf die Hagia Sophia (25) · 4,7 Sterne, Top bewertet (24) · Travelers Choice 2025 (21) · Tisch per WhatsApp buchen (24) · Frühstück, Kebab, Fisch (23) · Mitten in Sultanahmet (21) · Sonnenuntergang genießen (24) · Jetzt Tisch reservieren (23) · Rooftop in der Altstadt (23)
**PIN P1:** "Restaurant Sultanahmet" + "Nahe der Hagia Sophia"
**Descriptions (≤90):**
1. Dachterrasse mitten in Sultanahmet, nur Schritte von der Hagia Sophia entfernt. (79)
2. Frühstück, Kebab und Meeresfrüchte mit Panoramablick. 4,7 Sterne, top bewertet. (80)
3. Tisch ganz einfach per WhatsApp buchen. Täglich von 08:30 bis 01:00 Uhr geöffnet. (81)
4. Restaurant mit Aussicht im Herzen der Altstadt. Travelers Choice 2025. (70)
**Negatives:** mcdonalds · burger king · fast food · lieferdienst

### (f) Ad group — Sunset / Romantic
**Keywords:** `"restaurant sonnenuntergang istanbul"` · `"romantisches restaurant istanbul"` · `"romantisches restaurant sultanahmet"` · `"restaurant sonnenuntergang sultanahmet"` · `"dinner mit aussicht istanbul"` · `"abendessen mit aussicht istanbul"` · `"restaurant für paare istanbul"` · `"sunset dinner istanbul"` · `"romantisches dinner istanbul"` · `"abendessen sultanahmet"`
**Headlines (≤30):** Sonnenuntergang in Istanbul (27) · Romantisches Dinner (19) · Dinner mit Aussicht (19) · Sunset auf der Terrasse (23) · Dachterrasse Sultanahmet (24) · Blick auf die Hagia Sophia (25) · Abendessen mit Panorama (23) · Romantik über den Dächern (25) · 4,7 Sterne, Top bewertet (24) · Sonnenuntergang am Meer (23) · Tisch per WhatsApp buchen (24) · Travelers Choice 2025 (21) · Dinner zu zweit (14) · Jetzt Tisch reservieren (23) · Abend mit Aussicht (18)
**PIN P1:** "Sonnenuntergang in Istanbul" + "Dinner mit Aussicht"
**Descriptions (≤90):**
1. Romantisches Dinner zum Sonnenuntergang auf der Dachterrasse über Sultanahmet. (78)
2. Blick auf die Hagia Sophia und das Marmarameer. 4,7 Sterne, über 5.600 Bewertungen. (84)
3. Der perfekte Abend zu zweit. Tisch ganz einfach per WhatsApp buchen. (67)
4. Sonnenuntergang, Aussicht und türkische Küche. Täglich 08:30–01:00 Uhr. (71)
**Negatives:** hotel · bar · club · heiratsantrag location

### (g) Ad group — Nargile / Hookah
**Keywords:** `"nargile sultanahmet"` · `"shisha bar istanbul"` · `"nargile istanbul"` · `"shisha sultanahmet"` · `"wasserpfeife istanbul"` · `"nargile mit aussicht"` · `"shisha mit aussicht istanbul"` · `"nargile dachterrasse istanbul"`
**Headlines (≤30):** Nargile in Sultanahmet (22) · Shisha mit Aussicht (19) · Nargile auf der Terrasse (24) · Dachterrasse Sultanahmet (24) · Blick auf die Hagia Sophia (25) · Wasserpfeife mit Panorama (24) · Nargile am Marmarameer (22) · Shisha über den Dächern (23) · 4,7 Sterne, Top bewertet (24) · Nargile zum Sonnenuntergang (27) · Tisch per WhatsApp buchen (24) · Travelers Choice 2025 (21) · Entspannen mit Aussicht (23) · Jetzt Tisch reservieren (23) · Nargile mit Blick (16)
**PIN P1:** "Nargile in Sultanahmet" + "Shisha mit Aussicht"
**Descriptions (≤90):**
1. Nargile auf der Dachterrasse mit Blick auf die Hagia Sophia und das Marmarameer. (79)
2. Entspannen Sie mit Wasserpfeife und Panoramablick über Sultanahmet. (66)
3. 4,7 Sterne, über 5.600 Bewertungen. Tisch ganz einfach per WhatsApp buchen. (75)
4. Shisha, Aussicht und türkische Küche. Täglich von 08:30 bis 01:00 Uhr. (69)
**Negatives:** shisha kaufen · shisha shop · tabak · kohle

### (h) Ad group — Competitor (conquesting — careful)
> Phrase match, low bids, strong landing page. No competitor names in ad text.
**Keywords:** `"rooftop restaurant sultanahmet"` · `"dachterrasse restaurant sultanahmet"` · `"restaurant mit terrasse sultanahmet"` · `"beste aussicht restaurant istanbul"` · `"restaurant mit blick istanbul"` · `"terrassenrestaurant istanbul"` · `"restaurant über den dächern istanbul"` · `"panoramarestaurant sultanahmet"`
**Headlines (≤30):** Rooftop in Sultanahmet (22) · Dachterrasse mit Aussicht (25) · Restaurant mit Terrasse (23) · Blick auf die Hagia Sophia (25) · Beste Aussicht der Altstadt (27) · Panorama über Istanbul (22) · Terrasse am Marmarameer (23) · 4,7 Sterne, Top bewertet (24) · Travelers Choice 2025 (21) · Frühstück, Kebab, Fisch (23) · Tisch per WhatsApp buchen (24) · Sonnenuntergang genießen (24) · Mitten in Sultanahmet (21) · Jetzt Tisch reservieren (23) · Echte Aussicht, top bewertet (28)
**PIN P1:** "Rooftop in Sultanahmet" + "Dachterrasse mit Aussicht"
**Descriptions (≤90):**
1. Dachterrasse in Sultanahmet mit echtem Panoramablick auf Hagia Sophia und Meer. (78)
2. 4,7 Sterne, über 5.600 Bewertungen, Travelers Choice 2025. Tisch per WhatsApp. (78)
3. Frühstück, Kebab, Meeresfrüchte und Sonnenuntergang. Täglich 08:30–01:00 Uhr. (76)
4. Erleben Sie Istanbul von oben, mitten in der historischen Altstadt. (67)
**Negatives:** add specific competitor brand names as needed; `bewertungen` (if research-only traffic)

### DE Shared assets
**Sitelinks (≤25 / 2 desc ≤35):**
1. Speisekarte ansehen (19) — Frühstück, Kebab & Fisch (24) / Türkische Spezialitäten (22) → `/de/menu`
2. Tisch reservieren (17) — Per WhatsApp oder Telefon (24) / Täglich 08:30–01:00 Uhr (22) → `/de/reservierung`
3. Dachterrasse & Aussicht (24) — Blick auf die Hagia Sophia (25) / Panorama über Istanbul (22) → `/de/aussicht`
4. Türkisches Frühstück (20) — Serpme ab 08:30 Uhr (19) / Frühstück mit Aussicht (22) → `/de/fruehstueck`
5. Bewertungen (11) — 4,7 Sterne, 5.600+ Stimmen (25) / Travelers Choice 2025 (21) → `/de/bewertungen`
6. So finden Sie uns (16) — Mitten in Sultanahmet (21) / Nahe der Hagia Sophia (21) → `/de/kontakt`

**Callouts (≤25):** Blick auf Hagia Sophia (22) · 4,7 Sterne bewertet (19) · Travelers Choice 2025 (21) · Türkisches Frühstück (20) · Kebab vom Mangal (16) · Frische Meeresfrüchte (21) · Reservierung per WhatsApp (25) · Täglich 08:30–01:00 Uhr (22)

**Structured snippets (≤25):**
- *Küchenrichtungen:* Türkisches Frühstück (20) · Kebab & Mangal (14) · Meeresfrüchte (13) · Türkische Küche (15) · Nargile (7)
- *Highlights/Ausstattung:* Dachterrasse (12) · Blick Hagia Sophia (18) · Sonnenuntergang (15) · Panoramablick (13) · Nargile (7)

### DE campaign negatives (`MyTerrace_DE_Master_Negatives`)
**Jobs:** job · jobs · stellenangebot · bewerbung · kellner · aushilfe · arbeit · karriere · praktikum · gehalt
**Rezepte:** rezept · rezepte · selber machen · kochen · anleitung
**Preis/billig:** billig · günstig · preise · preisliste · kosten · gratis · kostenlos · umsonst
**Lieferung:** lieferung · lieferservice · lieferdienst · bestellen · online bestellen · paket · to go · take away · abholung · essen bestellen
**Falsche Absicht:** hotel · hostel · wohnung · mieten · kaufen · immobilie · club · disco · nachtclub · supermarkt · markt · mcdonalds · burger king · kfc · starbucks · döner imbiss · fast food · wikipedia · öffnungszeiten flughafen
**Andere Städte:** ankara · izmir · antalya · bodrum · kappadokien

---

## 10. SEARCH — RUSSIAN (RU) · `SEA_RU_Core`

**Settings:** Search only; Russian; **Presence: people in/near** targeted locations; radius **2 km** around `41.00429, 28.97367` (+ 5 km at lower bid OR Istanbul city for growth). Max Conversions → tCPA (~₺120–180/reservation, adjust). Schedule per §4 (align to Istanbul GMT+3). LEAN ₺250–350/day → GROWTH ₺600–900/day.

### (a) Ad group — Rooftop & View
**Keywords:** `"ресторан с видом стамбул"` · `"ресторан на крыше стамбул"` · `[ресторан с видом стамбул]` · `[ресторан на крыше стамбул]` · `"крыша султанахмет"` · `"ресторан с панорамным видом"` · `"вид на айя софию ресторан"` · `"ресторан с террасой стамбул"` · `"панорамный ресторан стамбул"` · `"ресторан с видом на море стамбул"` · `"руфтоп стамбул"` · `"кафе с видом стамбул"`
**Headlines (≤30):** Ресторан с видом Стамбул (24) · Ресторан на крыше (17) · Вид на Айя-Софию и море (24) · Панорама Султанахмета (21) · Терраса с видом на Босфор (25) · Закат над Мраморным морем (25) · My Terrace Стамбул (17) · Рейтинг 4,7★, 5600+ отзывов (28) · Travelers' Choice 2025 (22) · Ужин с панорамным видом (23) · Бронь по WhatsApp (17) · Завтрак, кебаб, кальян (22) · Руфтоп в Султанахмете (21) · Открыто с 08:30 до 01:00 (24) · Столик с видом на крыше (23)
**PIN P1:** "Ресторан с видом Стамбул" + "Ресторан на крыше"
**Descriptions (≤90):**
1. Ресторан на крыше в Султанахмете. Панорама Айя-Софии и Мраморного моря. (69)
2. Турецкий завтрак, кебаб, морепродукты и кальян на террасе. Бронь по WhatsApp. (76)
3. 4,7★, 5600+ отзывов, Travelers' Choice 2025. Лучший вид на закат. (63)
4. Забронируйте столик с панорамным видом. Открыто с 08:30 до 01:00. (63)
**Negatives:** аренда · купить · недвижимость · квартира

### (b) Ad group — Turkish Breakfast (serpme)
**Keywords:** `"турецкий завтрак стамбул"` · `[турецкий завтрак стамбул]` · `"завтрак с видом стамбул"` · `[завтрак с видом стамбул]` · `"серпме завтрак"` · `"завтрак султанахмет"` · `"где позавтракать в стамбуле"` · `"турецкий завтрак султанахмет"` · `"завтрак на крыше стамбул"` · `"лучший завтрак стамбул"` · `"завтрак с видом на айя софию"` · `"ресторан завтрак стамбул"`
**Headlines (≤30):** Турецкий завтрак с видом (24) · Завтрак на крыше Стамбул (24) · Серпме — турецкий завтрак (24) · Завтрак с видом на море (23) · Вид на Айя-Софию (16) · Завтрак в Султанахмете (22) · My Terrace Стамбул (17) · Открыто с 08:30 (15) · Рейтинг 4,7★, 5600+ отзывов (28) · Утро с панорамой Босфора (24) · Бронь по WhatsApp (17) · Свежий завтрак каждый день (26) · Терраса с видом (15) · Travelers' Choice 2025 (22) · Завтрак до полудня (18)
**PIN P1:** "Турецкий завтрак с видом" + "Завтрак на крыше Стамбул"
**Descriptions (≤90):**
1. Серпме — турецкий завтрак на крыше с видом на Айя-Софию и море. (61)
2. Начните утро с панорамой Султанахмета. Открыто с 08:30. Бронь по WhatsApp. (74)
3. 4,7★ и 5600+ отзывов, Travelers' Choice 2025. Завтрак с лучшим видом. (68)
4. Забронируйте столик на завтрак с видом на Стамбул. Ждём вас каждый день. (71)
**Negatives:** рецепт · доставка · купить · что приготовить

### (c) Ad group — Kebab & Mangal
**Keywords:** `"кебаб стамбул"` · `[кебаб стамбул]` · `"ресторан кебаб стамбул"` · `"мангал стамбул"` · `"шашлык стамбул"` · `"кебаб султанахмет"` · `"турецкий кебаб ресторан"` · `"кебаб на углях стамбул"` · `"где поесть кебаб стамбул"` · `"мясной ресторан стамбул"` · `"кебаб с видом стамбул"` · `"гриль ресторан султанахмет"`
**Headlines (≤30):** Кебаб на мангале Стамбул (24) · Кебаб с видом на крыше (22) · Мясо на углях, Султанахмет (26) · Турецкий кебаб и мангал (23) · Ужин с видом на Айя-Софию (25) · My Terrace Стамбул (17) · Рейтинг 4,7★, 5600+ отзывов (28) · Кебаб на террасе с видом (24) · Закат над Мраморным морем (25) · Бронь по WhatsApp (17) · Свежее мясо на углях (20) · Travelers' Choice 2025 (22) · Кебаб, морепродукты, кальян (27) · Открыто до 01:00 (16) · Ресторан на крыше (17)
**PIN P1:** "Кебаб на мангале Стамбул" + "Кебаб с видом на крыше"
**Descriptions (≤90):**
1. Кебаб и мясо на мангале на крыше с видом на Айя-Софию и море. (60)
2. Сочное мясо на углях, морепродукты и кальян на террасе. Бронь по WhatsApp. (74)
3. 4,7★ и 5600+ отзывов, Travelers' Choice 2025. Ужин с панорамой Стамбула. (73)
4. Забронируйте столик на ужин с видом. Открыто с 08:30 до 01:00. (61)
**Negatives:** рецепт · доставка · маринад · купить мясо

### (d) Ad group — Seafood
**Keywords:** `"морепродукты стамбул"` · `[морепродукты стамбул]` · `"рыбный ресторан стамбул"` · `"свежая рыба стамбул"` · `"рыба султанахмет"` · `"морепродукты с видом стамбул"` · `"рыбный ресторан султанахмет"` · `"ресторан морепродукты крыша"` · `"где поесть рыбу стамбул"` · `"свежие морепродукты стамбул"` · `"рыба с видом на море стамбул"` · `"рыбное меню стамбул"`
**Headlines (≤30):** Морепродукты с видом (20) · Рыбный ресторан Стамбул (23) · Свежая рыба на крыше (20) · Морепродукты, Султанахмет (25) · Ужин с видом на море (20) · Вид на Айя-Софию (16) · My Terrace Стамбул (17) · Рейтинг 4,7★, 5600+ отзывов (28) · Закат над Мраморным морем (25) · Бронь по WhatsApp (17) · Свежие морепродукты (19) · Travelers' Choice 2025 (22) · Рыба и кебаб с видом (20) · Терраса с панорамой (19) · Открыто до 01:00 (16)
**PIN P1:** "Морепродукты с видом" + "Рыбный ресторан Стамбул"
**Descriptions (≤90):**
1. Свежие морепродукты на крыше с видом на Айя-Софию и Мраморное море. (66)
2. Рыба, кебаб и кальян на террасе в Султанахмете. Бронь по WhatsApp. (66)
3. 4,7★ и 5600+ отзывов, Travelers' Choice 2025. Ужин с панорамой моря. (68)
4. Забронируйте столик с видом на закат. Открыто с 08:30 до 01:00. (62)
**Negatives:** рецепт · доставка · купить рыбу · рынок

### (e) Ad group — Near-me / Sultanahmet area
**Keywords:** `"ресторан рядом султанахмет"` · `"ресторан султанахмет"` · `[ресторан султанахмет]` · `"кафе султанахмет"` · `"где поесть в султанахмете"` · `"ресторан возле айя софии"` · `"ресторан рядом с голубой мечетью"` · `"ресторан в фатихе стамбул"` · `"ресторан рядом стамбул центр"` · `"кафе рядом айя софия"` · `"ресторан старый город стамбул"` · `"где поесть рядом султанахмет"`
**Headlines (≤30):** Ресторан в Султанахмете (23) · Рядом с Айя-Софией (18) · Ресторан на крыше с видом (25) · Кафе и ресторан, Фатих (23) · Вид на Айя-Софию и море (24) · My Terrace Стамбул (17) · Рейтинг 4,7★, 5600+ отзывов (28) · Завтрак, кебаб, рыба (20) · Закат над Мраморным морем (25) · Бронь по WhatsApp (17) · Рядом с Голубой мечетью (23) · Travelers' Choice 2025 (22) · Открыто с 08:30 до 01:00 (24) · Терраса в старом городе (23) · Кальян на крыше (15)
**PIN P1:** "Ресторан в Султанахмете" + "Рядом с Айя-Софией"
**Descriptions (≤90):**
1. Ресторан на крыше в Султанахмете, рядом с Айя-Софией и морем. (60)
2. Завтрак, кебаб, морепродукты и кальян с панорамой. Бронь по WhatsApp. (69)
3. 4,7★ и 5600+ отзывов, Travelers' Choice 2025. В сердце старого города. (70)
4. Забронируйте столик рядом с главными достопримечательностями Стамбула. (69)
**Negatives:** отель · как добраться · карта · достопримечательности · тур

### (f) Ad group — Sunset / Romantic
**Keywords:** `"ресторан закат стамбул"` · `[ресторан закат стамбул]` · `"романтический ужин стамбул"` · `"ресторан для свидания стамбул"` · `"закат стамбул ресторан"` · `"ужин с видом на закат стамбул"` · `"романтический ресторан султанахмет"` · `"красивый ресторан стамбул"` · `"место для свидания стамбул"` · `"ресторан с закатом султанахмет"` · `"вечер с видом стамбул"` · `"ужин на крыше закат"`
**Headlines (≤30):** Ужин на закате Стамбул (22) · Романтический ужин с видом (26) · Закат над Мраморным морем (25) · Ресторан на крыше с видом (25) · Вид на Айя-Софию (16) · Ужин для двоих с панорамой (26) · My Terrace Стамбул (17) · Рейтинг 4,7★, 5600+ отзывов (28) · Свидание на террасе (19) · Бронь по WhatsApp (17) · Вечер с видом на Босфор (23) · Travelers' Choice 2025 (22) · Кальян и закат на крыше (23) · Романтика в Султанахмете (24) · Столик с видом на закат (23)
**PIN P1:** "Ужин на закате Стамбул" + "Романтический ужин с видом"
**Descriptions (≤90):**
1. Романтический ужин на крыше с видом на Айя-Софию и закат над морем. (65)
2. Идеальный вечер для двоих: панорама, кальян и атмосфера Султанахмета. (68)
3. 4,7★ и 5600+ отзывов, Travelers' Choice 2025. Лучший вид на закат. (66)
4. Забронируйте столик на закат по WhatsApp. Открыто с 08:30 до 01:00. (66)
**Negatives:** букет · подарок · отель · кольцо

### (g) Ad group — Nargile / Hookah
**Keywords:** `"кальян стамбул"` · `[кальян стамбул]` · `"кальян султанахмет"` · `"кальянная стамбул"` · `"кальян с видом стамбул"` · `"наргиле стамбул"` · `"где покурить кальян стамбул"` · `"кальян на крыше стамбул"` · `"кафе с кальяном стамбул"` · `"кальян с видом на море"` · `"кальян султанахмет крыша"` · `"кальян терраса стамбул"`
**Headlines (≤30):** Кальян с видом Стамбул (22) · Кальян на крыше (15) · Наргиле в Султанахмете (22) · Кальян и закат на террасе (25) · Вид на Айя-Софию (16) · My Terrace Стамбул (17) · Рейтинг 4,7★, 5600+ отзывов (28) · Кальян с видом на море (22) · Закат над Мраморным морем (25) · Бронь по WhatsApp (17) · Ужин, кебаб и кальян (20) · Travelers' Choice 2025 (22) · Терраса с панорамой (19) · Открыто до 01:00 (16) · Вечер с кальяном на крыше (25)
**PIN P1:** "Кальян с видом Стамбул" + "Кальян на крыше"
**Descriptions (≤90):**
1. Кальян на крыше с панорамой Айя-Софии и Мраморного моря. (56)
2. Кебаб, морепродукты и наргиле на террасе в Султанахмете. Бронь по WhatsApp. (75)
3. 4,7★ и 5600+ отзывов, Travelers' Choice 2025. Кальян с видом на закат. (70)
4. Забронируйте столик на вечер с кальяном. Открыто с 08:30 до 01:00. (65)
**Negatives:** купить кальян · табак · доставка · магазин · уголь

### (h) Ad group — Competitor (conquesting — careful)
> Phrase/exact only. No competitor names in ad text. Lower budget; watch CPA.
**Keywords:** `"рестораны с видом стамбул"` · `"лучшие рестораны султанахмет"` · `"топ рестораны стамбул вид"` · `"руфтоп бар стамбул"` · `"рестораны на крыше султанахмет"` · `"куда сходить поесть стамбул"` · `"лучший ресторан с видом стамбул"` · `"рестораны рядом айя софия"` · `"терраса ресторан стамбул"` · `"где красивый вид стамбул ресторан"`
**Headlines (≤30):** Ресторан с видом Стамбул (24) · Руфтоп в Султанахмете (21) · Вид на Айя-Софию и море (24) · Рейтинг 4,7★, 5600+ отзывов (28) · Travelers' Choice 2025 (22) · My Terrace Стамбул (17) · Ужин с панорамным видом (23) · Закат над Мраморным морем (25) · Завтрак, кебаб, морепродукты (28) · Терраса с видом на крыше (23) · Бронь по WhatsApp (17) · Кальян на крыше (15) · Один из лучших видов (20) · Открыто с 08:30 до 01:00 (24) · Столик с панорамой (18)
**PIN P1:** "Ресторан с видом Стамбул" + "Руфтоп в Султанахмете"
**Descriptions (≤90):**
1. My Terrace — ресторан на крыше с видом на Айя-Софию и Мраморное море. (67)
2. Завтрак, кебаб, морепродукты и кальян с панорамой. Бронь по WhatsApp. (69)
3. 4,7★ и 5600+ отзывов, Travelers' Choice 2025. Один из лучших видов. (66)
4. Сравните и выберите My Terrace. Забронируйте столик с видом на закат. (68)
**Negatives:** отзывы · адрес · меню (if avoiding pure-info) + specific competitor brand names if performance is poor

### RU Shared assets
**Sitelinks (≤25 / 2 desc ≤35):**
1. Меню (4) — Кебаб и морепродукты (20) / Турецкая кухня с видом (22) → `/ru/menu`
2. Турецкий завтрак (16) — Серпме с панорамой (18) / Открыто с 08:30 (15) → `/ru/menu`
3. Бронь по WhatsApp (17) — Столик с видом на крыше (23) / Быстрый ответ (12) → `https://wa.me/905359318817`
4. Галерея (7) — Вид на Айя-Софию и море (24) / Реальные фото террасы (21) → `/ru/gallery`
5. Отзывы (6) — 4,7★ и 5600+ отзывов (21) / Travelers' Choice 2025 (22) → `/ru/reviews`
6. Контакты (8) — Султанахмет, Стамбул (20) / Открыто с 08:30 до 01:00 (24) → `/ru/contact`

**Callouts (≤25):** Вид на Айя-Софию (16) · Ресторан на крыше (17) · 4,7★, 5600+ отзывов (19) · Travelers' Choice 2025 (22) · Турецкий завтрак (16) · Кебаб на мангале (16) · Свежие морепродукты (19) · Кальян на террасе (17)  *(extras: Закат над морем (16) · Открыто с 08:30 (15) · Бронь по WhatsApp (17))*

**Structured snippets (≤25):**
- *Кухня:* Турецкая (8) · Кебаб (5) · Морепродукты (12) · Завтрак (7) · Мангал (6) · Кальян (6)
- *Услуги:* Вид на крыше (12) · Терраса (7) · Панорама моря (13) · Бронь столиков (14) · Кальян (6) · Закат (5)

### RU campaign negatives (`MyTerrace_RU_Master_Negatives`)
**Jobs:** работа · вакансии · вакансия · требуется · официант работа · повар работа · подработка · резюме
**Recipes:** рецепт · рецепты · как приготовить · как сделать · пошагово · домашний
**Cheap/free:** бесплатно · дешево · дешёвый · недорого · скидка · купоны · акция бесплатно
**Delivery:** доставка · доставка еды · заказать онлайн · еда на дом · доставка стамбул · paket · paket servis
**Retail/buy:** купить · магазин · оптом · цена купить · табак · купить кальян · аренда · недвижимость · квартира
**Info-only/unrelated:** фото скачать · обои · википедия · отель · гостиница · тур · экскурсия · как добраться · карта · погода
**Other cities:** анкара · измир · анталия · бодрум · москва · дубай

---

## 11. PERFORMANCE MAX — `PMAX_EN_Tourist`

**When:** Start Search-first; add PMax only after ~15–30 conversions feed the account so automation has signal. Use PMax to scale Maps, Discover, Gmail, YouTube reach with real drone footage — where Search can't show video. Always add **brand exclusions** so PMax doesn't eat cheap brand traffic; keep the separate Search Brand campaign.

**Geo:** 2–5 km radius around `41.00429, 28.97367` + Sultanahmet/Fatih hotel zone; layer "presence" (people IN the area).

**Final URL & expansion:** `https://myterracecaferestaurant.com`; per asset group point to the relevant page (AG1 → home/reservations; AG2 → /menu or breakfast section). Append UTM (`?utm_source=google&utm_medium=cpc&utm_campaign=pmax_rooftop`). **Final URL expansion OFF** to start (keep traffic on strong 7-lang pages). Add **URL exclusions** for `/api/*`, `/llms*`, feeds.

**Conversion setup:** primary = reservation/WhatsApp/call with values (reservation ≈ 200 TRY proxy, WhatsApp 50, call 50). Goal = Maximize Conversions → Target CPA after 30+ conversions; tROAS only once values are owner-verified.

**Budget tiers (TRY/day):** Search-first lean 300–500; PMax launch 400–700 (needs ~10× target CPA over the period to exit learning); scale winner to 1,000+ capped by ROAS.

### ASSET GROUP 1 — "Rooftop View Dining" (sunset / couples / the view)
**Short headlines (≤30):** Rooftop View, Sultanahmet (25) · Hagia Sophia Sea View (21) · Sunset Dining in Istanbul (25) · Rooftop Restaurant Istanbul (28) · Terrace Over Old Istanbul (24)
**Long headlines (≤90):**
1. Rooftop dining with Hagia Sophia and Marmara Sea views in Sultanahmet (69)
2. Watch the sunset over old Istanbul from our Sultanahmet terrace (62)
3. My Terrace: panoramic rooftop restaurant in the heart of Sultanahmet (68)
4. Reserve a terrace table with one of the best views in Istanbul (62)
5. Rated 4.7 by 5,600+ guests — Travelers' Choice 2025 rooftop view (64)
**Descriptions (≤90):**
1. Dine on our Sultanahmet rooftop facing Hagia Sophia and the Marmara Sea. (72)
2. Sunset, kilim seating and Turkish lamps. Open daily 08:30 to 01:00. (66)
3. Google 4.7 stars, 5,600+ reviews. Tripadvisor Travelers' Choice 2025. (69)
4. Reserve your table on WhatsApp in seconds. No queue, just the view. (66)
**Long description (≤90):** A rooftop terrace facing Hagia Sophia and the sea — reserve your sunset table today. (83)

### ASSET GROUP 2 — "Turkish Breakfast & Kebab" (food / families / breakfast intent)
**Short headlines (≤30):** Turkish Breakfast, Sultanahmet (30) · Serpme Breakfast With a View (28) · Charcoal Kebab in Istanbul (26) · Breakfast With a View (21) · Fresh Seafood & Nargile (23)
**Long headlines (≤90):**
1. Serpme Turkish breakfast spread on a rooftop terrace in Sultanahmet (66)
2. Charcoal mangal kebab and fresh seafood with a Hagia Sophia view (64)
3. Start your Istanbul morning with breakfast above the rooftops (61)
4. Turkish breakfast, kebab and nargile — open daily 08:30 to 01:00 (64)
5. A full Turkish breakfast and the best view in Sultanahmet (57)
**Descriptions (≤90):**
1. A generous serpme Turkish breakfast served with a panoramic city view. (70)
2. Charcoal kebab, fresh seafood and nargile on our Sultanahmet terrace. (69)
3. Open daily 08:30 to 01:00. Reserve easily on WhatsApp or by phone. (65)
4. Rated 4.7 by 5,600+ guests. A local favourite in old Istanbul. (62)
**Long description (≤90):** Turkish breakfast, charcoal kebab and seafood with a rooftop view — book on WhatsApp. (84)

### PMax shared assets
**Business name:** My Terrace (10)
**Sitelinks (≤25 / 2 desc ≤35):**
- Reserve a Table (15) — Book on WhatsApp in seconds (27) / Daily 08:30 to 01:00 (20)
- See the View (12) — Hagia Sophia and sea views (26) / Real photos and drone video (27)
- Our Menu (8) — Breakfast, kebab, seafood (25) / Turkish flavours, rooftop (25)
- Reviews & Awards (16) — 4.7 stars, 5,600+ reviews (25) / Travelers' Choice 2025 (22)
- Breakfast Menu (14) — Serpme Turkish breakfast (24) / Served with the view (20)
- Find Us (7) — Küçük Ayasofya, Sultanahmet (27) / Get directions to terrace (25)

**Callouts (≤25):** Hagia Sophia view (17) · Sea view terrace (16) · Turkish breakfast (17) · Charcoal kebab (14) · Fresh seafood (13) · Nargile lounge (14) · Open daily 08:30–01:00 (22) · 4.7 stars, 5,600+ (17) · Travelers' Choice 2025 (22) · WhatsApp reservations (21)

**Structured snippets (≤25):**
- *Cuisines:* Turkish breakfast (17) · Charcoal kebab (14) · Seafood (7) · Mezze (5) · Nargile (7)
- *Amenities:* Rooftop terrace (15) · Sea view (8) · Sunset dining (13) · Kilim seating (13) · WhatsApp booking (16)

### Image & video creative direction (use the owner's REAL assets)
Source: `d:\Desktop\Projeler\Dijital Pazarlama Hizmeti\Restoranlar\My terrace\videolar\` (DJI drone clips, reels) + `public/images/gallery/*.webp`. **No Unsplash stock.** Compress; keep faces/branding off safe edges; no text baked into PMax images (let the engine overlay).
**Images (supply all three ratios, 3–5 each):**
- 1.91:1 (1200×628): drone wide of terrace with Hagia Sophia + sea behind diners; sunset golden-hour table for two; serpme breakfast spread (top-down/45°) with rooftops behind.
- 1:1 (1200×1200): kilim seating + Turkish lamp detail (warm evening light); charcoal mangal kebab plated (steam); hero of blue building facade with terrace signage.
- 4:5 (960×1200): vertical sunset terrace with guest silhouette + dome; breakfast spread vertical with view in upper third; nargile + tea on the rail, sea beyond.
- Logo: square (1:1) + landscape (4:1) of `logo.webp` on transparent/teal `#35868f`.
**Video (all three orientations, 10–30s, hook in first 2s):**
- 9:16: drone push-in revealing terrace then tilt to Hagia Sophia + sea; end card "Reserve on WhatsApp" (use clip 0419).
- 16:9: drone reveal → sunset table → breakfast spread → kebab on mangal → guests cheering tea; end logo on teal.
- 1:1: tightened, view-first.
- Brand the end frame only; first 2s pure visual reveal.

### Audience signals (signals only, not hard targeting)
- **Custom segment "searched these":** rooftop restaurant sultanahmet, breakfast with view istanbul, hagia sophia restaurant, sultanahmet restaurant reservation, turkish breakfast istanbul, sunset dinner istanbul, restaurants near hagia sophia, nargile sultanahmet, mangal kebab istanbul.
- **Custom segment "browse these":** Tripadvisor Istanbul restaurants; Hagia Sophia / Blue Mosque / Topkapı pages; Sultanahmet hotel sites; Istanbul travel guides; competitor rooftop pages.
- **In-market & affinity:** Restaurants/Fine Dining, Travel/Hotels-Istanbul, Travel/Vacations-Turkey; Travel Buffs, Foodies.
- **Your data (highest value — connect first):** website visitors 30/90d + key-page visitors (`/reservations`, `/menu`); Customer Match / event audiences (WhatsApp-clickers, call-clickers, reservation starters/submitters from GA4). Seed PMax with these and let it expand.

---

## 12. META (Facebook / Instagram) — Advantage+ & Reels

**Objective:** Start **Engagement → Messaging (WhatsApp)** as primary (matches real conversion: bookings via WhatsApp). Run a parallel **Traffic/Conversions** ad set to the site for retargeting + pixel data. Once CAPI fires reservation events reliably, test **Sales/Leads** optimizing the reservation event. Use **Advantage+** to auto-optimize; creative is the lever.
**CTA:** "Send WhatsApp" / "Send Message" for messaging; "Book Now" for site ads. Pre-fill WhatsApp text (localized): "Hi My Terrace, I'd like to reserve a table."

**Markets & languages (tiered):**
1. **Arabic (Gulf: SA, AE, KW, QA)** — sunset + family + breakfast. Highest-spend tourist segment.
2. **German (DE, AT, CH)** — view + breakfast + value.
3. **Russian (RU + CIS)** — view + sunset.
4. **English (UK, US + in-Istanbul travellers)** — broad fallback + couples.
5. **On-the-ground retargeting:** people IN Istanbul/Sultanahmet (last 14 days), geo radius 5 km around the coordinates.

**Audiences:**
- **Primary: Advantage+ broad** (country + age 25–60). Usually wins for restaurants once the pixel learns.
- **Interest fallback:** Istanbul travel, Sultanahmet, Hagia Sophia, Turkey vacation, Turkish cuisine, Honeymoon/Couples travel; narrow with "frequent international travellers."
- **Retargeting:** site visitors (pixel), IG/FB engagers (365d; 65K IG presence), video-viewers (75%), WhatsApp openers → exclude from prospecting.
- **Lookalike:** 1–3% LAL of WhatsApp-clickers + reservation events once CAPI volume allows.

**Format mix:** 70% Reels + Stories 9:16 (drone-reveal + sunset, sound-on, hook in 2s); 20% Feed 4:5 (breakfast/kebab carousels); 10% 1:1 static (view hero). Enable Advantage+ placements; supply 9:16 master, let Meta crop. Keep text/logo out of bottom 250px and top 14%.

### 6 creative angles (9:16, hook in first 2s; headlines ≤40 recommended for Meta)
1. **Drone Reveal (the view) · EN** — Hook: "This is the view from your table." Primary: A rooftop terrace facing Hagia Sophia and the Marmara Sea. Sunset, Turkish lamps, kilim seating — and one of the best views in Istanbul. Open daily 08:30–01:00. Message us on WhatsApp to reserve your table. Headline: Rooftop dining in Sultanahmet. Visual: drone push-in → tilt to Hagia Sophia (clip 0419).
2. **Sunset for Couples · EN/AR** — Hook: "Best sunset table in old Istanbul?" Primary: Golden hour over Hagia Sophia, a table for two on the terrace, tea and nargile as the sky turns. Rated 4.7★ by 5,600+ guests — Travelers' Choice 2025. Reserve on WhatsApp. Headline: Reserve a sunset table.
3. **Serpme Turkish Breakfast · DE/EN** — Hook: "Turkish breakfast — with a view like this." Primary: A generous serpme breakfast spread, fresh tea, and the rooftops of Sultanahmet below you. The morning your Istanbul trip deserves. Open from 08:30. Message us to book. Headline: Breakfast above the rooftops.
4. **Charcoal Kebab / Mangal · AR/RU** — Hook: "Charcoal kebab, cooked over the city." Primary: Mangal kebab and fresh seafood grilled to order, served on a terrace above Sultanahmet. Real flavours, real view, nargile after. Open until 01:00. Reserve on WhatsApp. Headline: Kebab & seafood with a view.
5. **Social Proof / Reviews · EN/DE** — Hook: "5,600+ guests rated this view 4.7★." Primary: Tripadvisor Travelers' Choice 2025. Google 4.7★ with 5,600+ reviews. Restaurant Guru top list. There's a reason people climb to our terrace. See for yourself — book on WhatsApp. Headline: Travelers' Choice 2025.
6. **UGC / Influencer Reel · AR/EN** — Hook: "POV: you found the rooftop everyone posts." Primary: The terrace going viral on Instagram (65K) and TikTok. Hagia Sophia, the sea, Turkish breakfast and sunset nargile — all in one place in Sultanahmet. Tag who you'd bring. Reserve on WhatsApp. Headline: The Sultanahmet rooftop.

> Localize all copy NATIVELY (AR, DE, RU) — do not auto-translate. Hook 2s, sound-on, captions burned in, logo + WhatsApp on end card only.

### Meta tracking
- **Meta Pixel via GTM** (`GTM-NSB2VLCP` already live). Fire `Contact` on `whatsapp_click`/`call_click`; custom `Reserve`/`Lead` on `reservation_submitted` (dataLayer pushes value, party_size, currency).
- **Conversions API (CAPI)** for iOS/cookieless accuracy — server events via existing `/api/events` or Meta CAPI Gateway/GTM server container. Dedupe with shared `event_id` across Pixel + CAPI.
- **Map reservation as the optimization event with value** (e.g., 200 TRY) so Advantage+ value-optimizes (mirrors Google).
- WhatsApp messaging ads: track in Meta messaging reporting; add UTM (`utm_source=meta&utm_medium=paid_social&utm_campaign=reels_view`) to site-link ads.

### Meta launch order (lean → scale)
1. Google Search (exact/phrase + brand), 300–500 TRY/day — capture intent.
2. Meta messaging Advantage+ (Angles 1–3), AR/DE/RU/EN, 9:16 — cheap reach + WhatsApp bookings.
3. After ~15–30 conversions: Google PMax (both asset groups, real video) for Maps/YouTube/Discover.
4. Kill losers weekly; double budget on the proven angle/asset group; switch bidding to Target CPA/ROAS.

---

## 13. MASTER NEGATIVE KEYWORD LIST (account-level shared)

Create ONE account-level shared list **`MASTER_Negatives`**, applied to **all generic Search campaigns** (NOT Brand). Maintain `Brand-Protect_Negatives` separately if needed. Feed new junk from the search-terms report into the shared list during the cadence so every campaign benefits at once. Add per-language localized equivalents (the per-language lists in §6/§9/§10 fold into this).

**Concepts (add real localized terms in each language):**
- **Jobs/careers:** job, jobs, career, vacancy, hiring, staff, waiter, chef job, cv · iş ilanı, eleman, kariyer · Stellenangebot, Bewerbung · вакансия, работа · وظيفة, توظيف
- **Recipes/DIY:** recipe, how to make · tarif, nasıl yapılır · Rezept · рецепт · وصفة · receta · recette
- **Free:** free, gratis · bedava, ücretsiz · бесплатно · مجاني · gratuit
- **Cheap/discount:** cheap, cheapest · ucuz, en ucuz · billig · дешево · رخيص · barato · pas cher
- **Wholesale/B2B/supply:** wholesale, supplier, distributor, bulk, restaurant equipment · toptan, restoran ekipmanları · для бизнеса
- **Delivery/online order (N/A):** delivery, order online, takeaway, take away · getir, yemeksepeti, paket servis · доставка · livraison · توصيل
- **Education/franchise:** course, training, how to open a restaurant, franchise · restoran açmak, bayilik
- **Other cities / wrong geo:** ankara, izmir, antalya, bodrum, dubai, cappadocia, taksim (unless targeted) · анкара, измир · أنقرة
- **Hotel/accommodation:** hotel, hostel, airbnb, apartment, rooms, booking.com · otel, pansiyon · фندق
- **Non-food/other businesses:** terrace furniture, terrace design, balcony · teras yapımı
- **Reviews/complaints/info-only (judge case-by-case — some are call-intent):** complaint, "is it open", phone number · şikayet
- **Adult/alcohol-policy-sensitive:** handle per Google policy and offering (promote nargile only where policy allows; avoid restricted claims)

Keep brand terms OUT of the negative list. Review search terms every 2–3 days in week 1, then weekly.

---

## 14. OPTIMIZATION CADENCE (14-day), KPIs & GUARDRAILS

### Day 0 — launch Wave 1
Brand + AR/DE/RU/EN/TR core; Maximize Conversions (no tCPA); lean budgets; ad schedule seeded.

### Days 1–3
- Daily: spend pacing, conversions recording, no policy disapprovals.
- Search-terms report **daily** → dump junk into `MASTER_Negatives` aggressively.
- Don't touch bids/budgets (learning).

### Days 4–7
- Search terms every 2 days. Confirm each language gets impressions; fix low-volume/disapproved RSAs.
- Check device/geo split (observation). Note breakfast-vs-sunset conversion pattern.

### Days 8–14
- Pause clear loser keywords/ad groups; add winning search terms as keywords.
- Any campaign at ~15–30 conv → switch to **tCPA** (~+10–15% over observed CPA).
- Prep Wave 2 (split converting language/theme); queue PMax if Search has data.
- First offline-conversion upload (confirmed WhatsApp bookings via Data Manager API) if any closed.

### Repeating 14-day cadence
- **Daily:** spend pacing, policy/disapprovals, conversion-recording sanity.
- **Every 2–3 days:** search-terms cleanup → shared negatives; budget shift loser→winner.
- **Weekly:** bid-strategy review (advance to tCPA when ready); ad-schedule/device/geo bid adjustments from observed data; RSA asset refresh (replace "Low"/"Good" assets); audience-observation review.
- **Bi-weekly:** offline-conversion upload; value/party_size sanity check; Impression Share analysis; decide ES/FR/PMax timing.

### KPIs & targets

| Metric | Target | Action if off |
|---|---|---|
| **CTR (Search)** | Brand >15%; generic 4–8%+ | Low → rewrite RSAs, add keyword to headlines, tighten match types. |
| **Conv. rate (click→reservation/contact)** | 3–6%+ (varies by lang) | Low → check landing-page lang match, ad-to-page relevance, mobile speed. |
| **CPA** | Set after first 2 weeks/lang; AR likely lowest, EN highest | Above target → pause losers, tighten negatives, lower tCPA gradually. |
| **Search Impression Share** | Brand ≥90%; generic grow over time | IS lost to budget >10% → raise budget on profitable campaign. IS lost to rank → improve Ad Strength/bids. |
| **Search-term relevance** | <10% spend on irrelevant terms after week 2 | Higher → more negatives, broad→phrase/exact. |
| **Ad Strength** | "Good"→"Excellent" all RSAs | Add distinct headlines, include keywords, more assets. |

### Guardrails against wasted spend
1. **Presence-only** location targeting (no "interest") — kills global-browser waste.
2. **Tight radius first** (2–4 km); widen only on proof.
3. **Shared `MASTER_Negatives`**, fed daily in week 1.
4. **No tCPA before ~15–30 conv** — premature targets starve learning.
5. **No PMax in LEAN** and not before Search has conversion data.
6. **Brand kept separate** from generic bidding math and portfolios.
7. **Schedule off 01:00–07:30** — no reservations land closed.
8. **Conversion Linker + Enhanced Conversions verified** before scaling.
9. **One language per campaign** — never let mixed languages blind the algorithm.
10. **Cap brand budget low** — it must never absorb generic-test money.
11. **Price assets OFF** (prices intentionally hidden); never fabricate prices/promotions.
12. **Real assets only** — owner's drone/terrace footage; no stock in ads.

---

## 15. RELEVANT PROJECT FILES (absolute)

- `d:\Desktop\Projeler\Dijital Pazarlama Hizmeti\Restoranlar\My terrace\videolar\` — real drone clips / reels (e.g., clip 0419) for PMax + Meta.
- `public/images/gallery/*.webp` — optimized site images.
- `src/lib/analytics.ts` + `src/lib/utm.ts` — live conversion/event layer (`reservation_submitted`, `whatsapp_click`, `call_click` with UTM/gclid).
- `C:\Users\yazil\.claude\projects\d--Desktop-Projeler-Dijital-Pazarlama-Hizmeti-Restoranlar-My-terrace\memory\myterrace-agent-layer.md` — live GA4/GTM IDs, conversion events, UTM/gclid, offline-conversion (Data Manager API) note.
- `C:\Users\yazil\.claude\projects\d--Desktop-Projeler-Dijital-Pazarlama-Hizmeti-Restoranlar-My-terrace\memory\myterrace-build-decisions.md` — hours, rating, hidden prices, brand colors, single-source config.
- Project repo `site/REKLAM-BASLATMA-CHECKLIST.md` and `site/SAHIBI-ICIN-GEO-YAPILACAKLAR.md` — ad-launch + owner-task checklists to reconcile with this plan.

**Two owner inputs still required to finalize bidding accuracy:** (1) confirmed **avg revenue per guest** (validates `party_size→value` before any tROAS); (2) confirmed **billing currency** (EUR assumed) so TRY values map correctly.
