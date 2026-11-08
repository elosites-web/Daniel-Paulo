import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'motion/react';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { ChevronDown, Check, Sparkles } from 'lucide-react';

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
  altText = 'Vídeo institucional Daniel Paulo',
  className = '',
  videoClassName = '',
  priority = false,
  trackRef,
  topOffset = 80,
  showIndicator = false,
  indicatorLabel = 'Vídeo',
  onProgress,
  keepPosterOnZeroProgress = false,
  aspectRatio = 'aspect-[9/16]',
  animateOnView = false,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoReady, setIsVideoReady] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [progress, setProgress] = useState(0);
  const reducedMotion = useReducedMotion();

  // Check data saving preference
  const isDataSaving =
    typeof navigator !== 'undefined' &&
    'connection' in navigator &&
    (navigator as unknown as { connection?: { saveData?: boolean } }).connection?.saveData === true;

  // Video preloader and GPU texture warmup
  useEffect(() => {
    const video = videoRef.current;
    if (!video || reducedMotion || isDataSaving) return;

    // Explicitly configure preloader
    video.preload = priority ? 'auto' : 'auto';

    const handleLoadedMetadata = () => {
      // Warm up first frame in GPU memory so scrub is instantaneous with zero delay
      if (video.currentTime === 0) {
        try {
          video.currentTime = 0.001;
        } catch {
          // Ignore seek issues during early buffering
        }
      }
      setIsVideoReady(true);
    };

    const handleCanPlay = () => {
      setIsVideoReady(true);
    };

    video.addEventListener('loadedmetadata', handleLoadedMetadata);
    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('canplaythrough', handleCanPlay);

    // If video is already ready from browser cache
    if (video.readyState >= 2) {
      setIsVideoReady(true);
    }

    return () => {
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('canplaythrough', handleCanPlay);
    };
  }, [priority, reducedMotion, isDataSaving]);

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

  // Subscribe to Framer Motion scroll updates and scrub video frame
  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    if (reducedMotion || isDataSaving) return;

    const clamped = Math.max(0, Math.min(1, latest));
    setProgress(clamped);
    if (onProgress) {
      onProgress(clamped);
    }

    const video = videoRef.current;
    if (video && video.duration && !isNaN(video.duration) && video.readyState >= 1) {
      const targetTime = clamped * video.duration;
      // Seek frame if difference is meaningful
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
  });

  const shouldShowPoster =
    !isVideoReady ||
    reducedMotion ||
    isDataSaving ||
    hasError ||
    (keepPosterOnZeroProgress && progress <= 0.015);

  const containerAspectClass = aspectRatio === 'none' ? '' : aspectRatio;
  const isShiftUp = videoClassName.includes('-translate-y');

  return (
    <motion.div
      ref={containerRef}
      className={`relative overflow-hidden isolate z-0 ${containerAspectClass} bg-[#060e24] ${className}`}
      aria-label={altText}
      {...(animateOnView && !reducedMotion
        ? {
            initial: { opacity: 0, y: 16 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true, margin: '-40px' },
            transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] as const },
          }
        : {})}
    >
      {/* Optimized Poster Image with explicit aspect ratio hints to eliminate Layout Shift (CLS = 0) */}
      <img
        src={poster}
        alt={altText}
        width="450"
        height="800"
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : 'auto'}
        decoding="async"
        onError={() => setHasError(true)}
        className={`w-full h-full object-cover select-none pointer-events-none transition-opacity duration-500 ${
          shouldShowPoster
            ? 'opacity-100 z-10 relative'
            : 'opacity-0 z-0 absolute inset-0'
        } ${videoClassName}`}
        style={{
          transform: !isVideoReady
            ? `${isShiftUp ? 'translateY(-1px) ' : ''}scale(${1 + progress * 0.03})`
            : isShiftUp
            ? 'translateY(-1px)'
            : undefined,
          transition: 'transform 0.15s ease-out, opacity 0.5s ease-in-out',
        }}
      />

      {/* Preloaded Video element */}
      {!reducedMotion && !isDataSaving && (
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          muted
          playsInline
          autoPlay={false}
          preload={priority ? 'auto' : 'auto'}
          onError={() => setHasError(true)}
          className={`absolute inset-0 w-full h-full object-cover select-none pointer-events-none transition-opacity duration-500 ${
            isVideoReady && !hasError && !shouldShowPoster ? 'opacity-100 z-10' : 'opacity-0 z-0'
          } ${videoClassName}`}
          aria-hidden="true"
        />
      )}

      {/* Preloader shimmer indicator if still buffering */}
      {!isVideoReady && !hasError && !reducedMotion && (
        <div className="absolute top-3 left-3 z-20 pointer-events-none">
          <div className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full bg-[#081331]/80 backdrop-blur-md border border-[#4FD6F4]/30 text-[9px] font-medium text-[#4FD6F4]">
            <Sparkles className="w-2.5 h-2.5 animate-spin" />
            <span>Vídeo pré-carregado</span>
          </div>
        </div>
      )}

      {/* Interactive Framer Motion scrub indicator & progress bar */}
      {showIndicator && !reducedMotion && (
        <>
          {/* Framer Motion GPU hardware-accelerated progress bar */}
          <div className="absolute bottom-0 inset-x-0 h-1 bg-white/10 z-20 pointer-events-none">
            <motion.div
              className="h-full bg-gradient-to-r from-[#4FD6F4] to-[#36c5e5] shadow-[0_0_10px_#4FD6F4]"
              style={{
                scaleX: scrollYProgress,
                transformOrigin: '0% 50%',
              }}
            />
          </div>

          {/* Interactive floating pill status */}
          <div className="absolute top-3 right-3 z-20 pointer-events-none">
            {progress < 0.04 ? (
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#081331]/85 backdrop-blur-md border border-[#4FD6F4]/40 text-[10px] font-semibold text-[#4FD6F4] shadow-lg animate-pulse">
                <span>Role para animar</span>
                <ChevronDown className="w-3 h-3 animate-bounce" />
              </div>
            ) : progress >= 0.96 ? (
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#081331]/90 backdrop-blur-md border border-emerald-500/50 text-[10px] font-semibold text-emerald-400 shadow-lg">
                <Check className="w-3 h-3" />
                <span>Vídeo concluído</span>
              </div>
            ) : (
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#081331]/85 backdrop-blur-md border border-[#4FD6F4]/60 text-[10px] font-semibold text-white shadow-lg">
                <span className="w-1.5 h-1.5 rounded-full bg-[#4FD6F4] animate-ping" />
                <span>{Math.round(progress * 100)}%</span>
              </div>
            )}
          </div>
        </>
      )}
    </motion.div>
  );
};
