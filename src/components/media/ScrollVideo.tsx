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
  showIndicator?: boolean;
  indicatorLabel?: string;
  onProgress?: (progress: number) => void;
  keepPosterOnZeroProgress?: boolean;
  aspectRatio?: string;
  animateOnView?: boolean;
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
  animateOnView = false,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const progressRef = useRef(0);
  const rafIdRef = useRef<number | null>(null);

  const [isNearViewport, setIsNearViewport] = useState(priority);
  const [isVideoReady, setIsVideoReady] = useState(false);
  const [hasError, setHasError] = useState(false);
  const reducedMotion = useReducedMotion();

  // Check data saving preference
  const isDataSaving =
    typeof navigator !== 'undefined' &&
    'connection' in navigator &&
    (navigator as unknown as { connection?: { saveData?: boolean } }).connection?.saveData === true;

  // IntersectionObserver: preload="none" until within 800px of viewport
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

  // Video metadata listener
  useEffect(() => {
    const video = videoRef.current;
    if (!video || reducedMotion || isDataSaving || !isNearViewport) return;

    const handleLoadedMetadata = () => {
      if (video.currentTime === 0) {
        try {
          video.currentTime = 0.001;
        } catch {
          // Ignore early buffering seek exception
        }
      }
      setIsVideoReady(true);
    };

    const handleCanPlay = () => {
      setIsVideoReady(true);
    };

    video.addEventListener('loadedmetadata', handleLoadedMetadata);
    video.addEventListener('canplay', handleCanPlay);

    if (video.readyState >= 1) {
      setIsVideoReady(true);
    }

    return () => {
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      video.removeEventListener('canplay', handleCanPlay);
    };
  }, [isNearViewport, reducedMotion, isDataSaving]);

  // Framer Motion useScroll hook bound to target trackRef
  const { scrollYProgress } = useScroll(
    trackRef
      ? {
          target: trackRef,
          offset: ['start start', 'end end'],
        }
      : {
          target: containerRef,
          offset: ['start end', 'end start'],
        }
  );

  // RAF-based frame scrub without setState re-renders
  const updateVideoFrame = useCallback(() => {
    const video = videoRef.current;
    const clamped = progressRef.current;

    if (video && video.duration && !isNaN(video.duration) && video.readyState >= 1) {
      const targetTime = clamped * video.duration;
      if (Math.abs(video.currentTime - targetTime) > 0.02) {
        try {
          if (
            'fastSeek' in video &&
            typeof (video as unknown as { fastSeek: (t: number) => void }).fastSeek === 'function'
          ) {
            (video as unknown as { fastSeek: (t: number) => void }).fastSeek(targetTime);
          } else {
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
  }, [onProgress]);

  // Motion scroll listener: updates ref and schedules RAF
  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    if (reducedMotion || isDataSaving) return;

    progressRef.current = Math.max(0, Math.min(1, latest));

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
    aspectRatio.includes('16/9') ||
    aspectRatio.includes('aspect-video') ||
    src.includes('horizontal') ||
    poster.includes('horizontal');

  const posterWidth = isHorizontal ? '800' : '450';
  const posterHeight = isHorizontal ? '450' : '800';

  // Informative vs decorative accessibility
  const isInformative = Boolean(altText && altText !== 'Vídeo institucional Daniel Paulo');

  return (
    <motion.div
      ref={containerRef}
      className={`relative overflow-hidden isolate z-0 ${containerAspectClass} bg-[#060e24] ${className}`}
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
        width={posterWidth}
        height={posterHeight}
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : 'auto'}
        decoding="async"
        onError={() => setHasError(true)}
        className={`w-full h-full object-cover select-none pointer-events-none transition-opacity duration-500 ${
          !isVideoReady || hasError || reducedMotion || isDataSaving
            ? 'opacity-100 z-10 relative'
            : 'opacity-0 z-0 absolute inset-0'
        } ${videoClassName}`}
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
          preload={priority ? 'metadata' : 'none'}
          onError={() => setHasError(true)}
          className={`absolute inset-0 w-full h-full object-cover select-none pointer-events-none transition-opacity duration-500 ${
            isVideoReady && !hasError ? 'opacity-100 z-10' : 'opacity-0 z-0'
          } ${videoClassName}`}
          aria-hidden="true"
        />
      )}
    </motion.div>
  );
};
