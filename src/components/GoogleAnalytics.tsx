import Script from 'next/script';
import { GA4_ID, GTM_ID } from '@/lib/analytics-config';

/**
 * GA4 and/or Google Tag Manager with Consent Mode v2 defaults.
 * IDs come from env or site-info.json (public IDs). Renders nothing if unset.
 */
export default function GoogleAnalytics() {
    const gaId = GA4_ID;
    const gtmId = GTM_ID;
    if (!gaId && !gtmId) return null;

    return (
        <>
            <Script id="consent-default" strategy="beforeInteractive">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('consent', 'default', {
                        ad_storage: 'denied',
                        ad_user_data: 'denied',
                        ad_personalization: 'denied',
                        analytics_storage: 'granted',
                        functionality_storage: 'granted',
                        security_storage: 'granted'
                    });
                `}
            </Script>

            {gtmId && (
                <Script id="gtm" strategy="afterInteractive">
                    {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${gtmId}');`}
                </Script>
            )}

            {gaId && (
                <>
                    <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
                    <Script id="ga4" strategy="afterInteractive">
                        {`
                            gtag('js', new Date());
                            gtag('config', '${gaId}', { anonymize_ip: true });
                        `}
                    </Script>
                </>
            )}
        </>
    );
}
