'use client';

import { useEffect } from 'react';
import { detectAiReferral } from '@/lib/analytics';
import { captureUTM } from '@/lib/utm';

// Fires once per session: persists ad attribution (UTM/gclid) and detects
// arrivals from AI assistants.
export default function AnalyticsBoot() {
    useEffect(() => {
        captureUTM();
        detectAiReferral();
    }, []);
    return null;
}
