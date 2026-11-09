import React, { useEffect, useRef, useState, useCallback } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'motion/react';
import { useReducedMotion } from '../../hooks/useReducedMotion';

interface ScrollVideoProps {
  src: string;
  poster: string;
  altText?: string;
  className?: string;
  videoClassName?: string;
  priority?: boolean;
  trackRef?: React.RefObject<HTMLElement | null>;
  topOffset?: number;
  onProgress?: (progress: number) => void;
  keepPosterOnZeroProgress?: boolean;
  aspectRatio?: string;
  orientation?: 'horizontal' | 'vertical';
  posterWidth?: number | string;
  posterHeight?: number | string;
  transparentBg?: boolean;
  animateOnView?: boolean;
  startAt?: number;
  endAt?: number;
  scrollOffset?: any;
}

export const ScrollVideo: React.FC<ScrollVideoProps> = ({
  src,
  poster,
  altText,
  className = '',
  videoClassName = '',
  priority = false,
  trackRef,
  onProgress,
  keepPosterOnZeroProgress = false,
  aspectRatio = 'aspect-[9/16]',
  orientation,
  posterWidth,
  posterHeight,
  transparentBg = false,
  animateOnView = false,
  startAt = 0,
  endAt = 1,
  scrollOffset,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const progressRef = useRef(0);
  const rafIdRef = useRef<number | null>(null);

  const [isNearViewport, setIsNearViewport] = useState(priority);
  const [isVideoReady, setIsVideoReady] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isPastZeroProgress, setIsPastZeroProgress] = useState(!keepPosterOnZeroProgress);
  const reducedMotion = useReducedMotion();

  // Framer Motion useScroll hook bound to target trackRef or containerRef
  const { scrollYProgress } = useScroll(
    trackRef
      ? {
          target: trackRef,
          offset: scrollOffset || ['start start', 'end end'],
        }
      : {
          target: containerRef,
          offset: scrollOffset || ['start end', 'end start'],
        }
  );

  // Check data saving preference
  const isDataSaving =
    typeof navigator !== 'undefined' &&
    'connection' in navigator &&
    (navigator as unknown as { connection?: { saveData?: boolean } }).connection?.saveData === true;

  // IntersectionObserver: element rendered when within 800px of viewport
  useEffect(() => {
    if (priority || isNearViewport) return;

    const el = containerRef.current;
    if (!el || typeof IntersectionObserver === 'undefined') {
      setIsNearViewport(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setIsNearViewport(true);
          observer.disconnect();
        }
      },
      { rootMargin: '800px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [priority, isNearViewport]);

  // Video loadeddata listener (readyState >= 2) to prevent flashing black frames
  // Synchronizes immediately with current scrollYProgress even if page was reloaded partially scrolled
  useEffect(() => {
    const video = videoRef.current;
    if (!video || reducedMotion || isDataSaving || !isNearViewport) return;

    const handleLoadedData = () => {
      if (video.duration && !isNaN(video.duration)) {
        const currentProgress = scrollYProgress.get() ?? 0;
        progressRef.current = Math.max(0, Math.min(1, currentProgress));
        const startTime = startAt * video.duration;
        const endTime = endAt * video.duration;
        const targetTime = startTime + progressRef.current * (endTime - startTime);
        try {
          video.currentTime = targetTime;
        } catch {
          // Ignore seek initialization exception
        }
      }
      setIsVideoReady(true);
    };

    const handleError = () => {
      setHasError(true);
      setIsVideoReady(false);
    };

    const handleSeeked = () => {
      if (rafIdRef.current === null) {
        rafIdRef.current = requestAnimationFrame(updateVideoFrame);
      }
    };

    video.addEventListener('loadeddata', handleLoadedData);
    video.addEventListener('seeked', handleSeeked);
    video.addEventListener('error', handleError);

    if (video.readyState >= 2) {
      handleLoadedData();
    }

    return () => {
      video.removeEventListener('loadeddata', handleLoadedData);
      video.removeEventListener('seeked', handleSeeked);
      video.removeEventListener('error', handleError);
    };
  }, [isNearViewport, reducedMotion, isDataSaving, startAt, endAt, scrollYProgress]);

  // RAF-based frame scrub:
  // Interpolates between startAt and endAt smoothly based on scroll progress
  const updateVideoFrame = useCallback(() => {
    const video = videoRef.current;
    const clamped = progressRef.current;

    if (video && video.duration && !isNaN(video.duration) && video.readyState >= 1) {
      const startTime = startAt * video.duration;
      const endTime = endAt * video.duration;
      const targetTime = startTime + clamped * (endTime - startTime);

      if (Math.abs(video.currentTime - targetTime) > 0.02) {
        try {
          if (!video.seeking) {
            video.currentTime = targetTime;
          }
        } catch {
          video.currentTime = targetTime;
        }
      }
    }

    if (onProgress) {
      onProgress(clamped);
    }

    rafIdRef.current = null;
  }, [startAt, endAt, onProgress]);

  // Motion scroll listener: updates ref, handles zero progress threshold and schedules RAF
  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    if (reducedMotion || isDataSaving) return;

    const clamped = Math.max(0, Math.min(1, latest));
    progressRef.current = clamped;

    if (keepPosterOnZeroProgress) {
      if (clamped >= 0.01 && !isPastZeroProgress) {
        setIsPastZeroProgress(true);
      } else if (clamped < 0.01 && isPastZeroProgress) {
        setIsPastZeroProgress(false);
      }
    }

    if (rafIdRef.current === null) {
      rafIdRef.current = requestAnimationFrame(updateVideoFrame);
    }
  });

  useEffect(() => {
    return () => {
      if (rafIdRef.current !== null) {
        cancelAnimationFrame(rafIdRef.current);
      }
    };
  }, []);

  const containerAspectClass = aspectRatio === 'none' ? '' : aspectRatio;
  const isHorizontal =
    orientation !== undefined
      ? orientation === 'horizontal'
      : aspectRatio.includes('16/9') || aspectRatio.includes('aspect-video');

  const defaultWidth = isHorizontal ? '800' : '450';
  const defaultHeight = isHorizontal ? '450' : '800';
  const resolvedPosterWidth = posterWidth !== undefined ? String(posterWidth) : defaultWidth;
  const resolvedPosterHeight = posterHeight !== undefined ? String(posterHeight) : defaultHeight;

  // Informative vs decorative accessibility
  const isInformative = Boolean(altText && altText !== 'Vídeo institucional Daniel Paulo');

  // True if poster should be shown instead of video
  const showPoster =
    !isVideoReady ||
    hasError ||
    reducedMotion ||
    isDataSaving ||
    (keepPosterOnZeroProgress && !isPastZeroProgress);

  const bgClass = transparentBg ? 'bg-transparent' : 'bg-[#060e24]';

  return (
    <motion.div
      ref={containerRef}
      className={`relative overflow-hidden isolate z-0 ${containerAspectClass} ${bgClass} ${className}`}
      {...(isInformative ? { role: 'img', 'aria-label': altText } : { 'aria-hidden': 'true' })}
      {...(animateOnView && !reducedMotion
        ? {
            initial: { opacity: 0, y: 16 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true, margin: '-40px' },
            transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] as const },
          }
        : {})}
    >
      {/* Optimized Poster Image with explicit aspect ratio hints */}
      <img
        src={poster}
        alt={isInformative ? altText : ''}
        width={resolvedPosterWidth}
        height={resolvedPosterHeight}
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : 'auto'}
        decoding="async"
        onError={() => setHasError(true)}
        className={`w-full h-full select-none pointer-events-none transition-opacity duration-500 ${
          showPoster ? 'opacity-100 z-10 relative' : 'opacity-0 z-0 absolute inset-0'
        } ${videoClassName || 'object-cover'}`}
      />

      {/* Video element */}
      {!reducedMotion && !isDataSaving && isNearViewport && (
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          muted
          playsInline
          autoPlay={false}
          preload={priority ? 'auto' : isNearViewport ? 'metadata' : 'none'}
          onError={() => {
            setHasError(true);
            setIsVideoReady(false);
          }}
          className={`absolute inset-0 w-full h-full select-none pointer-events-none transition-opacity duration-500 ${
            !showPoster ? 'opacity-100 z-10' : 'opacity-0 z-0'
          } ${videoClassName || 'object-cover'}`}
          aria-hidden="true"
        />
      )}
    </motion.div>
  );
};
