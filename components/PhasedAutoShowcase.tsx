'use client';

import { useEffect, useRef, useState, ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AutoScroller from './AutoScroller';

interface PhasedAutoShowcaseProps {
  first: ReactNode;
  second: ReactNode;
  firstDuration?: number;
  secondDuration?: number;
  crossfadeMs?: number;
}

type Phase = 'first' | 'second';

export default function PhasedAutoShowcase({
  first,
  second,
  firstDuration = 9000,
  secondDuration = 9000,
  crossfadeMs = 600,
}: PhasedAutoShowcaseProps) {
  const [phase, setPhase] = useState<Phase>('first');
  const [isPaused, setIsPaused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const phaseTimeoutRef = useRef<NodeJS.Timeout | undefined>(undefined);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion || isPaused) {
      return;
    }

    const duration = phase === 'first' ? firstDuration : secondDuration;

    phaseTimeoutRef.current = setTimeout(() => {
      setPhase((prev) => (prev === 'first' ? 'second' : 'first'));
    }, duration);

    return () => {
      if (phaseTimeoutRef.current) {
        clearTimeout(phaseTimeoutRef.current);
      }
    };
  }, [phase, firstDuration, secondDuration, prefersReducedMotion, isPaused]);

  if (prefersReducedMotion) {
    return (
      <div className="relative h-full">
        <div className="p-3">{first}</div>
      </div>
    );
  }

  return (
    <div
      className="relative h-full"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
      aria-label="Auto-scrolling demo: feed and celebrity profile"
    >
      <AnimatePresence mode="wait">
        {phase === 'first' ? (
          <motion.div
            key="first"
            initial={{ opacity: 0 }}
            animate={{ opacity: isPaused ? 1 : 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: crossfadeMs / 1000 }}
            className="absolute inset-0"
          >
            <AutoScroller speed={0.6} gap={24}>
              {first}
            </AutoScroller>
          </motion.div>
        ) : (
          <motion.div
            key="second"
            initial={{ opacity: 0 }}
            animate={{ opacity: isPaused ? 1 : 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: crossfadeMs / 1000 }}
            className="absolute inset-0"
          >
            <AutoScroller speed={0.6} gap={24}>
              {second}
            </AutoScroller>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

