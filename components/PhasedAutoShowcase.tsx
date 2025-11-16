'use client';

import { useEffect, useRef, useState, ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AutoScroller from './AutoScroller';

interface PhasedAutoShowcaseProps {
  first: ReactNode;
  second: ReactNode;
  scrollSpeed?: number;
  scrollOnce?: boolean;
  scrollStartDelayMs?: number;
  firstDuration?: number;
  secondDuration?: number;
  crossfadeMs?: number;
  blink?: boolean;
  /** Minimum time to show the first screen before advancing, regardless of scroll end */
  minFirstPhaseMs?: number;
  /** If true, auto-advance/scroll will only start once the component is in view */
  activateOnVisible?: boolean;
  /** Additional delay after becoming visible before starting (ms) */
  startOnVisibleDelayMs?: number;
  /** Pause duration at each screen step (container height) inside the scroller (ms) */
  dwellPerScreenMs?: number;
  /** Wait this long at the bottom before switching phases (ms) */
  endDwellMs?: number;
}

type Phase = 'first' | 'second';

export default function PhasedAutoShowcase({
  first,
  second,
  scrollSpeed = 1.0,
  scrollOnce = true,
  scrollStartDelayMs = 500,
  firstDuration = 9000,
  secondDuration = 9000,
  crossfadeMs = 120,
  blink = true,
  minFirstPhaseMs = 2500,
  activateOnVisible = false,
  startOnVisibleDelayMs = 0,
  dwellPerScreenMs = 2000,
  endDwellMs = 1500,
}: PhasedAutoShowcaseProps) {
  const [phase, setPhase] = useState<Phase>('first');
  const [isPaused, setIsPaused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const phaseTimeoutRef = useRef<NodeJS.Timeout | undefined>(undefined);
  const flashTimeoutRef = useRef<NodeJS.Timeout | undefined>(undefined);
  const [isFlashing, setIsFlashing] = useState(false);
  const firstPhaseStartRef = useRef<number | null>(null);
  const pendingAdvanceTimeoutRef = useRef<NodeJS.Timeout | undefined>(undefined);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isActive, setIsActive] = useState<boolean>(!activateOnVisible);
  const activationTimeoutRef = useRef<NodeJS.Timeout | undefined>(undefined);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Handle activation when in view
  useEffect(() => {
    if (!activateOnVisible || isActive || prefersReducedMotion) {
      return;
    }
    const element = containerRef.current;
    if (!element) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry && entry.isIntersecting) {
          activationTimeoutRef.current = setTimeout(() => {
            setIsActive(true);
          }, startOnVisibleDelayMs);
        }
      },
      { threshold: 0.25 }
    );
    observer.observe(element);
    return () => {
      observer.disconnect();
      if (activationTimeoutRef.current) {
        clearTimeout(activationTimeoutRef.current);
      }
    };
  }, [activateOnVisible, isActive, startOnVisibleDelayMs, prefersReducedMotion]);

  // Track when the first phase becomes active
  useEffect(() => {
    if (phase === 'first') {
      firstPhaseStartRef.current = performance.now();
    }
  }, [phase]);

  const advancePhase = () => {
    if (blink) {
      setIsFlashing(true);
      flashTimeoutRef.current = setTimeout(() => {
        setIsFlashing(false);
        setPhase((prev) => (prev === 'first' ? 'second' : 'first'));
      }, Math.max(60, Math.min(180, crossfadeMs))); // ~quick blink tied to crossfade
    } else {
      setPhase((prev) => (prev === 'first' ? 'second' : 'first'));
    }
  };

  useEffect(() => {
    if (prefersReducedMotion || isPaused || !isActive) {
      return;
    }

    const duration = phase === 'first' ? firstDuration : secondDuration;

    phaseTimeoutRef.current = setTimeout(() => {
      advancePhase();
    }, duration);

    return () => {
      if (phaseTimeoutRef.current) {
        clearTimeout(phaseTimeoutRef.current);
      }
      if (flashTimeoutRef.current) {
        clearTimeout(flashTimeoutRef.current);
      }
      if (pendingAdvanceTimeoutRef.current) {
        clearTimeout(pendingAdvanceTimeoutRef.current);
      }
    };
  }, [phase, firstDuration, secondDuration, prefersReducedMotion, isPaused, blink, crossfadeMs, isActive]);

  const handleScrollEnd = () => {
    if (prefersReducedMotion) return;
    // Enforce dwell time at bottom + ensure first phase visible minimum
    let delay = endDwellMs;
    if (phase === 'first' && firstPhaseStartRef.current !== null) {
      const elapsed = performance.now() - firstPhaseStartRef.current;
      const remainingFirstMin = Math.max(0, minFirstPhaseMs - elapsed);
      delay += remainingFirstMin;
    }
    if (pendingAdvanceTimeoutRef.current) {
      clearTimeout(pendingAdvanceTimeoutRef.current);
    }
    pendingAdvanceTimeoutRef.current = setTimeout(() => {
      advancePhase();
    }, Math.max(0, delay));
  };

  if (prefersReducedMotion) {
    return (
      <div className="relative h-full">
        <div className="p-3">{first}</div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="relative h-full"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
      aria-label="Auto-scrolling demo: home and feed"
    >
      {/* Blink / flash overlay */}
      {blink && (
        <motion.div
          key={`flash-${phase}`}
          className="pointer-events-none absolute inset-0 bg-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: isFlashing ? 1 : 0 }}
          transition={{ duration: Math.max(0.06, Math.min(0.18, crossfadeMs / 1000)) }}
          style={{ willChange: 'opacity' }}
        />
      )}

      <AnimatePresence mode="wait">
        {phase === 'first' ? (
          <motion.div
            key="first"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: crossfadeMs / 1000 }}
            className="absolute inset-0"
          >
            <AutoScroller
              speed={scrollSpeed}
              gap={24}
              once={scrollOnce}
              startDelayMs={scrollStartDelayMs}
              dwellPerScreenMs={dwellPerScreenMs}
              onEnd={handleScrollEnd}
            >
              {first}
            </AutoScroller>
          </motion.div>
        ) : (
          <motion.div
            key="second"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: crossfadeMs / 1000 }}
            className="absolute inset-0"
          >
            <AutoScroller
              speed={scrollSpeed}
              gap={24}
              once={scrollOnce}
              startDelayMs={scrollStartDelayMs}
              dwellPerScreenMs={dwellPerScreenMs}
              onEnd={handleScrollEnd}
            >
              {second}
            </AutoScroller>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

