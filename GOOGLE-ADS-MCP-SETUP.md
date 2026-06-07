# Google Ads MCP — Kurulum (resmi, salt-okunur analiz/optimizasyon)

Resmi Google Ads MCP (`googleads/google-ads-mcp`) **salt-okunurdur**: `list_accessible_customers`, `search` (GAQL), `get_resource_metadata`. Kampanya oluşturmaz/durdurmaz/teklif değiştirmez. Amacı: **AI'nın (ben) canlı hesabı okuyup analiz/optimizasyon önerileri üretmesi** (gösterim, tık, dönüşüm, CPC, arama terimleri, boşa giden harcama, kalite skoru, vb.). Kampanya kurulumu panelden/`GOOGLE-ADS-LAUNCH-PLAN.md` ile yapılır.

## Bana göndermeniz gereken bilgiler (kurulum için)
1. **Google Cloud Project ID** — console.cloud.google.com → proje oluştur/seç → **Google Ads API'yi etkinleştir** (APIs & Services → Enable APIs → "Google Ads API").
2. **Developer Token (22 hane)** — Google Ads **Yönetici (MCC) hesabı** → Tools → API Center → token. *(Üretim hesabını sorgulamak için en az "Basic/Explorer" erişim gerekir; Basic onayı 1-3 gün sürebilir. MCC yoksa: bir MCC açıp reklam hesabınızı altına bağlayın.)*
3. **Google Ads Customer ID (10 hane)** — reklam hesabı no'su (ve varsa MCC login-customer-id).
4. **Kimlik doğrulama** — yerelde en kolayı **Application Default Credentials**: `gcloud auth application-default login` (reklam hesabına erişimi olan Google hesabıyla). *(Alternatif: OAuth Client ID + Secret + refresh token.)*
5. **Faturalandırma** — reklam hesabında ödeme yöntemi tanımlı olmalı (kampanya yayını için).

> Token/secret'ları bana düz metin verirseniz tek-seferlik kullanır, hiçbir commit'e yazmam, iş bitince yenilemenizi öneririm.

## Yerel makinede ön gereksinimler
- **Python + pipx** (`pip install pipx`), **gcloud CLI** (Application Default Credentials için).

## Claude Code MCP yapılandırması (creds gelince eklenir)
`claude mcp add-json` ile veya MCP config dosyasına:
```json
{
  "mcpServers": {
    "google-ads-mcp": {
      "command": "pipx",
      "args": ["run", "--spec", "git+https://github.com/googleads/google-ads-mcp.git", "google-ads-mcp"],
      "env": {
        "GOOGLE_PROJECT_ID": "YOUR_PROJECT_ID",
        "GOOGLE_ADS_DEVELOPER_TOKEN": "YOUR_DEVELOPER_TOKEN"
      }
    }
  }
}
```
Yerelde OAuth, `gcloud auth application-default login` ile sağlanır (ek env gerekmez). Bağlandıktan sonra ben `list_accessible_customers` + GAQL `search` ile hesabı okuyup optimize ederim.

## MCP bağlanınca ben ne yaparım (sürekli optimizasyon)
- Arama terimleri raporu → boşa giden harcamayı negatif kelimeye çevir.
- Kampanya/reklam grubu/anahtar kelime performansı (CTR, CPC, dönüşüm, ROAS) → bütçe/teklif önerileri.
- Kalite skoru + reklam gücü (Ad Strength) izleme → RSA iyileştirmeleri.
- Dönüşüm doğrulama (`reservation_submitted` geliyor mu) + atıf (UTM/gclid).
- Saat/gün/cihaz/coğrafya kırılımı → dayparting (kahvaltı sabah) ve yarıçap ayarı.
