import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring, useMotionValueEvent } from 'motion/react';
import { useReducedMotion } from '../../hooks/useReducedMotion';

interface ReadingProgressBarProps {
  /** Optional target ref to measure progress across a specific article/section instead of the full page */
  targetRef?: React.RefObject<HTMLElement | null>;
  /** Optional aria-label for accessibility */
  label?: string;
  /** Optional custom class name */
  className?: string;
}

export const ReadingProgressBar: React.FC<ReadingProgressBarProps> = ({
  targetRef,
  label = 'Progresso de leitura',
  className = '',
}) => {
  const reducedMotion = useReducedMotion();
  const [currentPercent, setCurrentPercent] = useState(0);

  // Measure scroll progress via Framer Motion
  const { scrollYProgress } = useScroll(
    targetRef
      ? {
          target: targetRef,
          offset: ['start start', 'end end'],
        }
      : {}
  );

  // Smooth physics-based spring interpolation for butter-smooth progress updates
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 30,
    restDelta: 0.001,
  });

  // Track value for accessible screen readers
  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    setCurrentPercent(Math.round(Math.max(0, Math.min(1, latest)) * 100));
  });

  return (
    <aside
      className={`fixed top-0 left-0 right-0 z-30 w-full h-1 sm:h-1.5 bg-[#081331]/30 backdrop-blur-[2px] pointer-events-none ${className}`}
      role="progressbar"
      aria-valuenow={currentPercent}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label={label}
    >
      <motion.div
        className="h-full bg-gradient-to-r from-[#4FD6F4] via-[#36c5e5] to-[#25D366] shadow-[0_0_12px_rgba(79,214,244,0.75)] origin-left"
        style={{
          scaleX: reducedMotion ? scrollYProgress : scaleX,
          transformOrigin: '0% 50%',
        }}
      />
    </aside>
  );
};
