import { NextResponse } from 'next/server';
import { BASE_URL } from '@/lib/seo';
import { INDEXNOW_KEY, allUrls } from '@/lib/indexnow';

/**
 * Submits all site URLs to IndexNow (Bing / ChatGPT Search / Yandex).
 * Call after each deploy:  GET https://<host>/api/indexnow
 * Optionally wire to a Vercel Cron in vercel.json.
 */
export const dynamic = 'force-dynamic';

export async function GET() {
    const host = new URL(BASE_URL).host;
    const payload = {
        host,
        key: INDEXNOW_KEY,
        keyLocation: `${BASE_URL}/${INDEXNOW_KEY}.txt`,
        urlList: allUrls(),
    };

    try {
        const res = await fetch('https://api.indexnow.org/indexnow', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json; charset=utf-8' },
            body: JSON.stringify(payload),
        });
        return NextResponse.json({
            submitted: payload.urlList.length,
            indexnowStatus: res.status,
        });
    } catch (e) {
        return NextResponse.json(
            { error: 'IndexNow submission failed', detail: String(e) },
            { status: 502 },
        );
    }
}
