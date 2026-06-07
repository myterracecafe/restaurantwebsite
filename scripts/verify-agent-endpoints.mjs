#!/usr/bin/env node
/**
 * Self-healing CI guard: verifies every advertised agent/SEO endpoint resolves
 * (no 404, correct-ish content-type). Run against a running server:
 *   node scripts/verify-agent-endpoints.mjs http://localhost:3000
 * Exits non-zero if anything is broken — wire into CI after `next start`.
 */
const BASE = (process.argv[2] || 'http://localhost:3000').replace(/\/$/, '');
const INDEXNOW_KEY = 'ece7bc991f69d16ccecac5d4d066981c';

const GETS = [
    ['/robots.txt', 'text/plain', ['Content-Signal', 'Sitemap:']],
    ['/sitemap.xml', 'xml', ['<urlset']],
    ['/feed.xml', 'rss', ['<rss']],
    ['/llms.txt', 'text/plain', ['My Terrace']],
    ['/llms-full.txt', 'text/plain', ['Menu']],
    ['/humans.txt', 'text/plain', ['TEAM']],
    ['/ai.txt', 'text/plain', ['Content-Signal']],
    ['/openapi.json', 'json', ['openapi']],
    ['/manifest.webmanifest', '', ['My Terrace']],
    ['/icon.svg', 'svg', []],
    ['/.well-known/api-catalog', 'linkset', ['linkset']],
    ['/.well-known/security.txt', 'text/plain', ['Contact:']],
    ['/.well-known/mcp/server-card.json', 'json', ['streamable-http']],
    ['/.well-known/mcp.json', 'json', ['streamable-http']],
    ['/.well-known/agent-skills/index.json', 'json', ['skills']],
    [`/${INDEXNOW_KEY}.txt`, 'text/plain', [INDEXNOW_KEY]],
    ['/api/public', 'json', ['endpoints']],
    ['/api/public/menu?lang=en', 'json', ['menu']],
    ['/api/public/hours', 'json', ['08:30']],
    ['/api/public/health', 'json', ['ok']],
    ['/tr', 'html', ['application/ld+json']],
    ['/tr/faq', 'html', ['FAQPage']],
    ['/tr/reservations', 'html', ['ReserveAction']],
];

let failed = 0;
const log = (ok, label, extra = '') => {
    console.log(`${ok ? '✓' : '✗'} ${label}${extra ? '  ' + extra : ''}`);
    if (!ok) failed++;
};

for (const [path, ctHint, needles] of GETS) {
    try {
        const res = await fetch(BASE + path);
        const ct = res.headers.get('content-type') || '';
        const body = await res.text();
        const ctOk = !ctHint || ct.includes(ctHint);
        const bodyOk = needles.every((n) => body.includes(n));
        log(res.status === 200 && ctOk && bodyOk, `GET ${path}`, `[${res.status} ${ct.split(';')[0]}]`);
    } catch (e) {
        log(false, `GET ${path}`, String(e));
    }
}

// MCP JSON-RPC handshake
try {
    const res = await fetch(BASE + '/api/mcp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ jsonrpc: '2.0', id: 1, method: 'tools/list' }),
    });
    const j = await res.json();
    log(res.status === 200 && Array.isArray(j?.result?.tools) && j.result.tools.length > 0, 'POST /api/mcp tools/list', `[${j?.result?.tools?.length} tools]`);
} catch (e) {
    log(false, 'POST /api/mcp tools/list', String(e));
}

console.log(failed ? `\n${failed} check(s) FAILED` : '\nAll agent endpoints OK ✅');
process.exit(failed ? 1 : 0);
