// Number of FAQ entries (q1..qN / a1..aN) in the FAQ message namespace.
// Shared by the visible <FAQSection> and the FAQPage JSON-LD so the two
// always match (a Google requirement for FAQ rich results).
export const FAQ_COUNT = 10;

export const FAQ_KEYS = Array.from({ length: FAQ_COUNT }, (_, i) => ({
    q: `q${i + 1}`,
    a: `a${i + 1}`,
}));
