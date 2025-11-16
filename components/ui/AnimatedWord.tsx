'use client';

import React, { useEffect, useMemo, useRef, useState } from 'react';

export type AnimatedWordProps = {
	words: string[];
	intervalMs?: number;
	className?: string;
	fallback?: string;
};

export function AnimatedWord({ words, intervalMs = 3000, className, fallback }: AnimatedWordProps) {
	const [index, setIndex] = useState(0);
	const [isFading, setIsFading] = useState(false);
	const intervalRef = useRef<number | undefined>(undefined);
	const fadeRef = useRef<number | undefined>(undefined);

	const prefersReducedMotion = useMemo(() => {
		if (typeof window === 'undefined' || !window.matchMedia) return false;
		return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
	}, []);

	// Determine a stable width to avoid layout shift/wrapping
	const longest = useMemo(() => {
		if (!words || words.length === 0) return 0;
		return words.reduce((m, w) => Math.max(m, w ? w.length : 0), 0);
	}, [words]);

	useEffect(() => {
		if (prefersReducedMotion || !words || words.length <= 1) return;
		intervalRef.current = window.setInterval(() => {
			setIsFading(true);
			// After fade-out, swap word and fade-in
			fadeRef.current = window.setTimeout(() => {
				setIndex((prev) => (prev + 1) % words.length);
				setIsFading(false);
			}, 300) as unknown as number;
		}, intervalMs) as unknown as number;
		return () => {
			if (intervalRef.current) window.clearInterval(intervalRef.current);
			if (fadeRef.current) window.clearTimeout(fadeRef.current);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [intervalMs, prefersReducedMotion, words.length]);

	// Reduced motion: static fallback or first word
	if (prefersReducedMotion) {
		return (
			<span className={`relative inline-flex items-baseline whitespace-nowrap align-baseline ${className || ''}`} aria-live="polite">
				{fallback || (words && words[0]) || ''}
			</span>
		);
	}

	const currentWord = words[index] || '';

	return (
		<span
			className={`relative inline-flex items-baseline whitespace-nowrap align-baseline ${className || ''}`}
			aria-live="polite"
			/* no fixed width – allow natural flow so 'back.' sits right after */
		>
			<span
				key={index}
				className="block transition-opacity duration-300 ease-out"
				style={{ opacity: isFading ? 0 : 1 }}
			>
				{currentWord}
			</span>
		</span>
	);
}

