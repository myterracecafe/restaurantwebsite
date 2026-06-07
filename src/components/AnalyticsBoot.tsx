'use client';

import { useEffect } from 'react';
import { detectAiReferral } from '@/lib/analytics';

// Fires once per session: detects arrivals from AI assistants (custom signal).
export default function AnalyticsBoot() {
    useEffect(() => {
        detectAiReferral();
    }, []);
    return null;
}
