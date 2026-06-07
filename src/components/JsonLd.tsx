/**
 * Renders a JSON-LD <script>. Server component — no client JS shipped.
 * Escapes <, >, & and the U+2028/U+2029 line separators (invalid in JS string
 * literals) so structured data can't break out of the <script> tag or parser.
 */
const UNSAFE = new RegExp('[<>&\\u2028\\u2029]', 'g');
const CODE = (c: string) => '\\u' + c.charCodeAt(0).toString(16).padStart(4, '0');

export default function JsonLd({ data }: { data: object | object[] }) {
    const json = JSON.stringify(data).replace(UNSAFE, CODE);
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: json }}
        />
    );
}
