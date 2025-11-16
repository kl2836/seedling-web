'use client';

import { useEffect, useRef, useState, ReactNode } from 'react';

interface AutoScrollerProps {
  children: ReactNode;
  speed?: number;
  gap?: number;
}

export default function AutoScroller({ 
  children, 
  speed = 0.5, 
  gap = 24 
}: AutoScrollerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const firstBlockRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number | undefined>(undefined);
  const [isPaused, setIsPaused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

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
      if (isPaused) {
        animationFrameRef.current = requestAnimationFrame(scroll);
        return;
      }

      // Recalculate height in case content changes
      const firstBlockHeight = firstBlock.offsetHeight;
      
      scrollTop += speed;
      
      // Reset when we've scrolled past the first block + gap
      if (scrollTop >= firstBlockHeight + gap) {
        scrollTop = 0;
      }

      scrollElement.style.transform = `translateY(-${scrollTop}px)`;
      animationFrameRef.current = requestAnimationFrame(scroll);
    };

    animationFrameRef.current = requestAnimationFrame(scroll);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [speed, gap, isPaused, prefersReducedMotion]);

  return (
    <div 
      ref={containerRef}
      className="relative h-full overflow-hidden"
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
        
        {/* Duplicated block for seamless loop */}
        <div style={{ marginTop: `${gap}px` }}>
          {children}
        </div>
      </div>
    </div>
  );
}

