'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * Autoplay background video that only downloads when it scrolls near the
 * viewport — keeps the heavy MP4s off the initial load (mobile data + INP).
 * The poster carries the visual until the video is ready.
 */
export default function LazyVideo({
    src,
    poster,
    className,
    rootMargin = '300px',
}: {
    src: string;
    poster: string;
    className?: string;
    rootMargin?: string;
}) {
    const ref = useRef<HTMLVideoElement>(null);
    const [load, setLoad] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return; // poster only
        const io = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setLoad(true);
                    io.disconnect();
                }
            },
            { rootMargin },
        );
        io.observe(el);
        return () => io.disconnect();
    }, [rootMargin]);

    useEffect(() => {
        if (load && ref.current) {
            ref.current.load();
            ref.current.play?.().catch(() => {});
        }
    }, [load]);

    return (
        <video
            ref={ref}
            className={className}
            autoPlay
            muted
            loop
            playsInline
            preload="none"
            poster={poster}
            aria-hidden
        >
            {load && <source src={src} type="video/mp4" />}
        </video>
    );
}
