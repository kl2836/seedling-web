'use client';

import { useEffect, useRef, useState, ReactNode } from 'react';

interface AutoScrollerProps {
  children: ReactNode;
  speed?: number;
  gap?: number;
  className?: string;
  once?: boolean; // if true, scrolls through content a single time (no seamless loop)
  startDelayMs?: number; // delay before starting auto-scroll
  onEnd?: () => void; // fired when once=true and we've reached the end
  dwellPerScreenMs?: number; // pause duration at each container-height "screen" step
}

export default function AutoScroller({ 
  children, 
  speed = 1.0, 
  gap = 24,
  className,
  once = false,
  startDelayMs = 0,
  onEnd,
  dwellPerScreenMs = 0,
}: AutoScrollerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const firstBlockRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number | undefined>(undefined);
  const startedAtRef = useRef<number | undefined>(undefined);
  const endedRef = useRef<boolean>(false);
  const [isPaused, setIsPaused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  // Dwell logic
  const lastDwelledIndexRef = useRef<number>(-1);
  const isDwellingRef = useRef<boolean>(false);
  const dwellUntilRef = useRef<number>(0);

  useEffect(() => {
    // Check for prefers-reduced-motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    if (!containerRef.current || !scrollRef.current || !firstBlockRef.current || prefersReducedMotion) {
      return;
    }

    const container = containerRef.current;
    const scrollElement = scrollRef.current;
    const firstBlock = firstBlockRef.current;

    let scrollTop = 0;

    const scroll = () => {
      const now = performance.now();
      if (startedAtRef.current === undefined) {
        startedAtRef.current = now;
      }
      if (now - startedAtRef.current < startDelayMs) {
        animationFrameRef.current = requestAnimationFrame(scroll);
        return;
      }

      if (isPaused) {
        animationFrameRef.current = requestAnimationFrame(scroll);
        return;
      }

      // If dwelling, hold position until dwell time elapses
      if (dwellPerScreenMs > 0 && isDwellingRef.current) {
        if (now < dwellUntilRef.current) {
          animationFrameRef.current = requestAnimationFrame(scroll);
          return;
        } else {
          isDwellingRef.current = false;
        }
      }

      if (once) {
        const maxScroll = Math.max(0, scrollElement.scrollHeight - container.clientHeight);
        scrollTop = Math.min(maxScroll, scrollTop + speed);
        scrollElement.style.transform = `translateY(-${scrollTop}px)`;
        // Dwell at each screen step
        if (dwellPerScreenMs > 0 && container.clientHeight > 0) {
          const currentIndex = Math.floor(scrollTop / container.clientHeight);
          if (currentIndex > lastDwelledIndexRef.current) {
            lastDwelledIndexRef.current = currentIndex;
            isDwellingRef.current = true;
            dwellUntilRef.current = now + dwellPerScreenMs;
          }
        }
        // Stop at end; keep last frame without looping (after potential dwell)
        if (!endedRef.current && scrollTop >= maxScroll - 0.5) {
          endedRef.current = true;
          if (onEnd) {
            onEnd();
          }
          return; // stop scheduling new frames
        }
      } else {
        // Recalculate height in case content changes
        const firstBlockHeight = firstBlock.offsetHeight;
        scrollTop += speed;
        // Reset when we've scrolled past the first block + gap
        if (scrollTop >= firstBlockHeight + gap) {
          scrollTop = 0;
          lastDwelledIndexRef.current = -1; // reset dwell steps on loop reset
        }
        scrollElement.style.transform = `translateY(-${scrollTop}px)`;
        // Dwell at each screen step while looping
        if (dwellPerScreenMs > 0 && container.clientHeight > 0) {
          const currentIndex = Math.floor(scrollTop / container.clientHeight);
          if (currentIndex > lastDwelledIndexRef.current) {
            lastDwelledIndexRef.current = currentIndex;
            isDwellingRef.current = true;
            dwellUntilRef.current = now + dwellPerScreenMs;
          }
        }
      }
      animationFrameRef.current = requestAnimationFrame(scroll);
    };

    animationFrameRef.current = requestAnimationFrame(scroll);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      startedAtRef.current = undefined;
      endedRef.current = false;
      lastDwelledIndexRef.current = -1;
      isDwellingRef.current = false;
    };
  }, [speed, gap, isPaused, prefersReducedMotion, startDelayMs, once, onEnd, dwellPerScreenMs]);

  return (
    <div 
      ref={containerRef}
      className={`relative h-full overflow-hidden ${className || ''}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      {/* Top gradient fade */}
      <div className="absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-white to-transparent z-10 pointer-events-none" />
      
      {/* Bottom gradient fade */}
      <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-b from-transparent to-white z-10 pointer-events-none" />
      
      {/* Scrollable content */}
      <div 
        ref={scrollRef}
        className="relative transition-transform duration-0"
        style={{ willChange: prefersReducedMotion ? 'auto' : 'transform' }}
      >
        {/* First block */}
        <div ref={firstBlockRef}>
          {children}
        </div>
        {!once && (
          <div style={{ marginTop: `${gap}px` }}>
            {children}
          </div>
        )}
      </div>
    </div>
  );
}

