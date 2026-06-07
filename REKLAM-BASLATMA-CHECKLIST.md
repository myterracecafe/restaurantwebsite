# My Terrace — Reklam Başlatma Checklist (Green-before-spend)

Site teknik olarak reklamlara hazır hale getirildi. Aşağıdaki **kod tarafı ✅ tamam**; **panel tarafı ◻ sizin yapmanız gerekenler** (kodla yapılamaz).

## ✅ Kod tarafında hazır (deploy edildi)
- Dönüşüm event'leri: **`reservation_submitted`** (party_size + value + currency=TRY + tarih/saat) ve `reservation_form_started` → GA4/GTM dataLayer'a akıyor.
- **UTM + gclid** otomatik yakalanıyor (sessionStorage) ve TÜM event'lere + WhatsApp mesajına ekleniyor → tam atıf (attribution).
- Tıklama event'leri: `whatsapp_click`, `call_click`, `directions_click` (+harita sağlayıcı), `social_click`, `menu_category_view`, `gallery_*`, `review_click`, `language_switch`, `ai_referral`, MCP `agent_tool_call`.
- GA4 (G-2PFLBSCRRD) + GTM (GTM-NSB2VLCP) + Consent Mode v2 + çerez banner (ad_storage izinle yönetiliyor).
- Hız: hero poster öncelikli (LCP), videolar lazy (ilk yükten ~14MB çıktı), CSP + güvenlik header'ları.
- Form: tarih/saat/kişi + başarı durumu + aria; /reservations'ta güven çubuğu (4.7★/Tripadvisor/ödül).
- Per-sayfa metadata/OG + 7 dil hreflang.

## ◻ Sizin yapmanız gerekenler (GA4 + Google Ads paneli — kod gerektirmez)
1. **GA4'te dönüşüm işaretle:** Admin → Events → `reservation_submitted`'ı **"Mark as key event/conversion"** yap. (Opsiyonel: `call_click`, `whatsapp_click`'i de.)
2. **GA4 ↔ Google Ads bağla:** GA4 Admin → Product links → Google Ads → link. Sonra dönüşümleri Google Ads'e aktar (Import from GA4).
3. **Enhanced Conversions** aç: Google Ads → Conversions → Enhanced conversions (web). (Form e-postası hash'lenerek gönderilebilir — istenirse koda eklenir.)
4. **Conversion Linker** tag'i: GTM'de Conversion Linker tag'inin "All Pages"de tetiklendiğini doğrula (gclid çerezlemesi için).
5. **GA4 custom dimensions:** event parametrelerini (provider, network, party_size, utm_*, engine, tool…) Admin → Custom definitions'ta kaydet → raporlarda görünür.
6. **Offline dönüşüm (opsiyonel, en güçlüsü):** WhatsApp'tan onaylanan rezervasyonları gclid ile eşleyip Google Ads'e "offline conversion import" (Data Manager API) ile geri besle → kapalı-döngü teklif optimizasyonu.

## ◻ Kampanya kurgusu (özet — detay STRATEGY/AGENT-READINESS dokümanlarında)
- **Dil başına 1 Search kampanyası** (TR/EN/AR/DE/RU/ES/FR). Tek-temalı reklam grupları: Marka · Manzara/rooftop · Serpme kahvaltı (sabah dayparting) · Mutfak (kebap/deniz ürünleri/nargile) · Yakın-çevre (koordinat yarıçapı) · Deneyim (gün batımı) · Rakip.
- **AR + DE + RU'yu önce başlat** (ucuz, rakipsiz mavi okyanus) + marka savunması.
- **Performance Max + Meta Advantage+/Reels** (drone + sunset + kahvaltı 9:16 kreatifler).
- Sitelinks: Menü · Galeri · Rezervasyon · Kahvaltı · Yorumlar/Ödüller · Yol Tarifi. Seller ratings otomatik (4.7/4.8).
- **Yakın-çevre önceliği:** düşük bütçeli yerel yarıçap kampanyası (koordinat çevresi) + güçlü yerel schema/Maps (zaten kurulu).

## ◻ Harcamadan önce son doğrulama
- GA4 DebugView'da test bir `reservation_submitted` gör (utm + value ile).
- PageSpeed (mobil) tr/en/ar: LCP < 2.5s, CLS < 0.1.
- Çift Tripadvisor kaydını birleştir + NAP tutarlılığı (yorum/entity hendeği).
- Özel alan adı (myterracecaferestaurant.com) bağlı + GitHub→Vercel otomatik deploy açık.
