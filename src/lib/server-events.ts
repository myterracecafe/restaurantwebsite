/**
 * Server-side event sink → GA4 Measurement Protocol.
 * Activates when GA4_MEASUREMENT_ID + GA4_API_SECRET env vars are set.
 * Used for events the browser tag cannot see — e.g. AI-agent MCP tool calls,
 * IndexNow pings — the "AI-relevant events GA doesn't collect" the owner asked for.
 */
const MID = process.env.GA4_MEASUREMENT_ID;
const SECRET = process.env.GA4_API_SECRET;

const clean = (s: string) => s.slice(0, 40).replace(/[^a-z0-9_]/gi, '_');

export async function logServerEvent(
    name: string,
    params: Record<string, unknown> = {},
    clientId = 'server',
): Promise<void> {
    if (!MID || !SECRET) return; // no-op until configured
    try {
        await fetch(
            `https://www.google-analytics.com/mp/collect?measurement_id=${MID}&api_secret=${SECRET}`,
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    client_id: clientId,
                    events: [{ name: clean(name), params: { ...params, engagement_time_msec: 1 } }],
                }),
            },
        );
    } catch {
        /* analytics must never break a request */
    }
}
