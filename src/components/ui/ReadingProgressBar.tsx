import React, { useState } from 'react';
import { motion, useScroll, useSpring, useMotionValueEvent, useTransform } from 'motion/react';
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

  const width = useTransform(
    reducedMotion ? scrollYProgress : scaleX,
    (v) => `${Math.max(0, Math.min(1, v)) * 100}%`
  );

  // Track value for accessible screen readers and conditional silver tip
  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    setCurrentPercent(Math.round(Math.max(0, Math.min(1, latest)) * 100));
  });

  return (
    <aside
      className={`fixed top-0 left-0 right-0 z-[9999] w-full h-[3px] bg-transparent pointer-events-none ${className}`}
      role="progressbar"
      aria-valuenow={currentPercent}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label={label}
    >
      <motion.div
        className="h-full bg-[#4FD6F4] relative shadow-[0_0_8px_rgba(79,214,244,0.5)]"
        style={{ width }}
      >
        {/* Ponta levemente brilhante em prata, com o brilho da espessura da barra */}
        {currentPercent > 0 && (
          <div
            className="absolute top-0 right-0 h-full w-3 bg-gradient-to-r from-transparent via-[#E2E8F0] to-[#FFFFFF] shadow-[0_0_3px_1px_rgba(255,255,255,0.95)] rounded-r-[1px]"
            aria-hidden="true"
          />
        )}
      </motion.div>
    </aside>
  );
};
