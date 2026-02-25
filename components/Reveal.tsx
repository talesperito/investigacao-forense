'use client';

import { useEffect, useRef, useState } from 'react';
import type { ReactNode } from 'react';

/**
 * Reveal – scroll-triggered fade-in animation.
 *
 * Performance-optimised:
 * - Uses a single IntersectionObserver per page via shared static instance
 * - Disconnects after element becomes visible (one-shot)
 * - Uses `translate-y-2` (GPU transform) instead of layout-affecting properties
 */

type RevealProps = {
    children: ReactNode;
    delayMs?: number;
};

// Shared observer map – avoids creating 20+ individual IntersectionObservers
const callbacks = new Map<Element, () => void>();
let sharedObserver: IntersectionObserver | null = null;

function getSharedObserver(): IntersectionObserver {
    if (!sharedObserver) {
        sharedObserver = new IntersectionObserver(
            (entries) => {
                for (const entry of entries) {
                    if (entry.isIntersecting) {
                        const cb = callbacks.get(entry.target);
                        if (cb) {
                            cb();
                            callbacks.delete(entry.target);
                            sharedObserver!.unobserve(entry.target);
                        }
                    }
                }
            },
            { threshold: 0.12 }
        );
    }
    return sharedObserver;
}

export default function Reveal({ children, delayMs = 0 }: RevealProps) {
    const ref = useRef<HTMLDivElement | null>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = getSharedObserver();
        callbacks.set(el, () => setVisible(true));
        observer.observe(el);

        return () => {
            callbacks.delete(el);
            observer.unobserve(el);
        };
    }, []);

    return (
        <div
            ref={ref}
            style={{ transitionDelay: `${delayMs}ms` }}
            className={[
                'transition-[opacity,transform] duration-500',
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2',
            ].join(' ')}
        >
            {children}
        </div>
    );
}
