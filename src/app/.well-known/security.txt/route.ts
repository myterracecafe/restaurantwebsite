import { BASE_URL } from '@/lib/seo';

// RFC 9116 — security.txt
export const dynamic = 'force-static';

export function GET() {
    const body = `Contact: mailto:info@myterracecaferestaurant.com
Expires: 2027-06-07T00:00:00.000Z
Preferred-Languages: tr, en
Canonical: ${BASE_URL}/.well-known/security.txt
`;
    return new Response(body, {
        headers: {
            'Content-Type': 'text/plain; charset=utf-8',
            'Cache-Control': 'public, max-age=86400',
        },
    });
}
