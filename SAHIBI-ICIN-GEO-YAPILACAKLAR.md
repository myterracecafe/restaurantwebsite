# My Terrace — İşletme Sahibi İçin Yapılacaklar (Site Dışı / GEO & Yorumlar)

Web sitesi kısmını biz hallediyoruz. Ama **Google Maps / Apple Maps sıralamasında 1. olmanın en güçlü kaldıracı site dışında** — bunlar yalnızca sizin (veya yetki verdiğiniz kişinin) panellerden yapabileceği işler. Önem sırasına göre:

## 1. Google İşletme Profili (Google Business Profile) — EN ÖNEMLİSİ
- [ ] Profili **sahiplenin ve doğrulayın** (claim & verify).
- [ ] **Birincil kategori: "Restaurant"**. İkincil kategoriler: Turkish restaurant, Cafe, Breakfast restaurant, Kebab shop, Seafood restaurant, Hookah bar.
- [ ] İsmi **tek ve tutarlı** yazın: **"My Terrace Cafe Restaurant"** (her yerde birebir aynı).
- [ ] **Çalışma saatlerini düzeltin: her gün 08:30 – 01:00** (sitede, Google'da, TripAdvisor'da hepsi aynı olmalı).
- [ ] Adres, telefon, web sitesi alanlarını doldurun (web: myterracecaferestaurant.com).
- [ ] **Özellikler/Attributes** işaretleyin: çatı katı/teras, manzara, kahvaltı, helal, vejetaryen, ücretsiz Wi-Fi, açık alan, nargile, rezervasyon, aile dostu.
- [ ] **30+ gerçek fotoğraf** yükleyin (manzara, yemek, teras, dış cephe) ve haftada birkaç yeni fotoğraf ekleyin.
- [ ] **Menüyü** ekleyin (kategoriler + ürünler).
- [ ] **Haftalık "Gönderi" (Post)** paylaşın (kampanya, gün batımı, kahvaltı vb.).
- [ ] **Soru-Cevap** bölümüne sık sorulanları siz ekleyip cevaplayın (helal mi, manzara, kahvaltı saati...).
- [ ] **Mesajlaşmayı** açın.
- [ ] **WhatsApp/rezervasyon** linki ekleyin.

## 2. Yorum Motoru (Maps'te 1. olmanın yakıtı)
- [ ] Masalara **4 dilde QR kartı** koyun (TR/EN/AR/DE) → doğrudan Google yorum sayfasına gitsin.
- [ ] Personel, hesap sonunda **kibarca yorum istesin**.
- [ ] **Hedef: haftada en az 5 yeni yorum**, puan 4.6+ kalsın.
- [ ] **Tüm yorumlara 24–72 saatte yanıt verin** (yorumun yazıldığı dilde; olumsuzlara da nazikçe).

## 3. Listing Temizliği (NAP tutarlılığı)
- [ ] İnternette farklı yazımları düzeltin: "My Terrace" / "Myterrace" / eski "Mina Teras" gibi varyasyonları **tek isme** çekin.
- [ ] **Çift kayıtları (duplicate)** birleştirin/talep edin: TripAdvisor'da 2 kayıt, Facebook'ta 2 sayfa varsa birleştirin.
- [ ] RestaurantGuru vb. sitelerde yanlış isim/ilçe varsa düzelttirin.

## 4. Diğer Harita & Citation Kaynakları
- [ ] **Apple Business Connect** — Apple Haritalar kaydını sahiplenin (iPhone kullanıcıları için kritik), fotoğraf + rezervasyon linki ekleyin.
- [ ] **Bing Places** kaydı.
- [ ] **Yandex Business** (Rus turistler).
- [ ] **TripAdvisor** profilini güçlendirin (hedef: Travelers' Choice rozeti).
- [ ] **Yelp**, **Foursquare** (Apple Haritalar'ı besler), **TheFork**, **Zomato**, **Wanderlog** — hepsinde aynı NAP.

## 5. AI Aramalarında Çıkmak (ChatGPT, Perplexity, Gemini)
- [ ] AI motorlarının alıntıladığı **gezi bloglarına** ulaşın (ör. rooftop/Istanbul rehberleri) — davet/işbirliği ile yazı çıkartın.
- [ ] **Reddit**'te (r/istanbul, r/Turkey, r/travel) doğal/samimi şekilde yer alın — Perplexity için çok etkili.
- [ ] **Wikidata**'da işletme varlığı (entity) oluşturun; Wikivoyage Sultanahmet "Eat" bölümünde isim geçsin.
- [ ] Instagram/TikTok reels'leri (zaten viral içerikleriniz var) düzenli paylaşın.

## 6. Bizim İçin Gerekli Bilgiler (siteyi tam açmak için)
- [ ] **Alan adı onayı:** myterracecaferestaurant.com doğru mu? (canlıya alınca ayarlanacak)
- [ ] **Google Analytics 4 ölçüm kimliği** (`G-XXXXXXXXXX`) — verince siteye bağlayacağız (`NEXT_PUBLIC_GA_ID`).
- [ ] **Google Search Console** ve **Bing Webmaster** erişimi (sitemap göndermek için).
- [ ] Güncel **Google puanı ve yorum sayısı** (şu an 4.7 ★ / 5.600+ kullanıyoruz — değişirse `site-info.json`'dan güncellenir).
- [ ] Koordinat/Place ID doğrulaması (41.00429, 28.97367 — teras tam burası mı?).
- [ ] Rezervasyon sağlayıcı (TheFork/OpenTable) kullanmak ister misiniz? — "Rezervasyon" butonlarını ona bağlarız.

> Not: Şu anki kararlar — Saatler **08:30–01:00**, Puan **4.7 / 5.600+ (Google'a linkli)**, Menüde **fiyatlar gizli**, görseller **gerçek drone + fotoğraflar**. Değiştirmek isterseniz tek dosyadan (`src/data/site-info.json`) güncellenebilir.

## 6b. İzleme & Doğrulama (KODA EKLENDİ ✅ — deploy'da aktif)
- [x] **GA4** `G-2PFLBSCRRD` (gtag) — kuruldu, veri akıyor.
- [x] **Google Tag Manager** `GTM-NSB2VLCP` (head + body noscript) — kuruldu.
- [x] **Bing** doğrulama meta'sı (`msvalidate.01`) — eklendi.
- [x] **Yandex** doğrulama: hem meta hem `/yandex_5bd1d5c962ad4556.html` dosyası — eklendi.
- [x] **Consent Mode v2** varsayılanları (analytics_storage=granted, ad_storage=denied).
> Kimlikler `src/data/site-info.json` → `analytics`/`verification` içinde (public ID'ler; env ile override edilebilir: `NEXT_PUBLIC_GA_ID`, `NEXT_PUBLIC_GTM_ID`).

### ⚠️ Çift sayım uyarısı
GA4 şu an **gtag ile** ölçüyor. GTM'e **aynı G-2PFLBSCRRD ile bir GA4 yapılandırma tag'i EKLEMEYİN** (çift sayar). GTM'i reklam/diğer tag'ler için kullanın, GA4'ü gtag'de bırakın — veya GA4'ü GTM'e taşıyıp gtag'i kaldırın; ikisi birden olmasın.

## 6c. Bunların DIŞINDA önerilenler (çoğu GTM panelinden, KOD GEREKMEZ)
GTM (`GTM-NSB2VLCP`) artık canlı — aşağıdakileri **kod yazmadan GTM panelinden** ekleyebilirsiniz:
- [ ] **Google Search Console doğrulama** — GA4 zaten kurulu, GSC'de "Google Analytics" yöntemiyle tek tıkla doğrulayın (veya bana `google-site-verification` kodu verin, meta ekleyeyim). Sonra sitemap gönderin.
- [ ] **Meta (Facebook/Instagram) Pixel + Conversions API** — 65K IG kitlesini retarget + reklam için. Pixel ID verin → GTM'e ekleyelim.
- [ ] **TikTok Pixel** — TikTok'ta güçlüsünüz; reklam/retarget için. Pixel ID.
- [ ] **Yandex Metrica** (sayaç — Webmaster'dan ayrı, RU kitlesi analitiği). Counter ID.
- [ ] **GA4 API secret** (server-side / yapay-zeka-agent event'leri için): GA4 Admin → Veri Akışı → Measurement Protocol API secrets → env `GA4_MEASUREMENT_ID=G-2PFLBSCRRD` + `GA4_API_SECRET=...` (gizli, commit edilmez). Sonra `agent_tool_call`/`/api/events` GA4'e akar.
- [ ] **GA4 özel boyutlar (custom dimensions)**: event parametrelerimizi (provider, network, engine, tool, from/to, category…) GA4 Admin → Custom definitions altında kaydedin ki raporlarda görünsün.
- [ ] **GA4 ↔ Google Ads** ve **GA4 ↔ Search Console** bağlantıları (reklam + arama raporları).
- [ ] **Çerez onay banner'ı (cookie consent)** — AB (DE/FR/ES) trafiği + reklam öncesi GDPR için. İsterseniz hafif bir banner kodlayabilirim (Consent Mode v2'yi güncelleyecek şekilde).
- [ ] **Sitemap gönderimi**: GSC + Bing Webmaster + **Yandex Webmaster** (artık doğrulandı) → `sitemap.xml`.

## 7. Deploy & Yapay Zeka Hazırlığı (önemli)
**Cloudflare "Agent-Ready" taraması ESKİ canlı siteyi taradı.** Yeni kod henüz deploy edilmedi; deploy edilince şunlar otomatik düzelecek (lokalde 200 dönüyor, doğrulandı):
- [ ] `robots.txt` (+ AI bot izinleri + **Content-Signal: search=yes, ai-input=yes, ai-train=yes** + Bytespider blok) ✅ kodda hazır
- [ ] `sitemap.xml` (çok dilli, alternates'li) ✅ kodda hazır
- [ ] Gerçek görseller (Unsplash preload'ları kalktı), schema, hreflang, canonical ✅ kodda hazır

**Deploy sonrası yapılacaklar:**
- [ ] Siteyi yeni koddan yayına alın (Vercel önerilir). `npm run build` geçiyor.
- [ ] **www → www'suz yönlendirme** (308) ayarlayın — canonical `myterracecaferestaurant.com` (www'suz). Host panelinden veya Vercel domain ayarından.
- [ ] **IndexNow ile anında indeksleme** (ChatGPT=Bing, + Yandex): deploy sonrası bir kez `https://myterracecaferestaurant.com/api/indexnow` adresini açın (tüm URL'leri Bing/Yandex'e bildirir). Anahtar dosyası `/ece7bc991f69d16ccecac5d4d066981c.txt` olarak yayında. İsterseniz Vercel Cron ile otomatikleştirilebilir.
- [ ] **Google Search Console** + **Bing Webmaster** domain doğrulayıp sitemap gönderin (Bing'de "AI Performance" raporunu izleyin — ChatGPT görünürlüğü).

**Bilinçli olarak EKLENMEYENLER (restoran için gereksiz/over-engineering — playbook de "agent katmanına aşırı yatırım yapma" diyor):** MCP Server Card, WebMCP, OAuth/OIDC, API Catalog, Web Bot Auth, DNS-AID, x402/agentic ödeme. Bunlar API/agentic-ticaret siteleri içindir; restoran görünürlüğünü artırmaz. Asıl kaldıraç: **indeksleme + içerik/schema/otorite + yorumlar + ödüller** (hepsi yapıldı/yapılıyor). Eklenenler: robots+Content-Signal, sitemap, llms.txt, Restaurant/Menu/FAQ/Award schema, IndexNow.
