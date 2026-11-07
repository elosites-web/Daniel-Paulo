import React, { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from '../../hooks/useReducedMotion';

interface ScrollVideoProps {
  src: string;
  poster: string;
  altText?: string;
  className?: string;
  videoClassName?: string;
  priority?: boolean;
}

export const ScrollVideo: React.FC<ScrollVideoProps> = ({
  src,
  poster,
  altText = 'Vídeo institucional Daniel Paulo',
  className = '',
  videoClassName = '',
  priority = false,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const reducedMotion = useReducedMotion();
  const rafId = useRef<number | null>(null);

  // Check data saving preference
  const isDataSaving = typeof navigator !== 'undefined' && 
    ('connection' in navigator && (navigator as unknown as { connection?: { saveData?: boolean } }).connection?.saveData === true);

  // Set up intersection observer to enable scroll scrub only when in view
  useEffect(() => {
    const container = containerRef.current;
    if (!container || reducedMotion || isDataSaving) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsIntersecting(entry.isIntersecting);
      },
      { threshold: [0, 0.1, 0.5, 1], rootMargin: '100px 0px' }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, [reducedMotion, isDataSaving]);

  // Scroll scrub calculation with requestAnimationFrame
  useEffect(() => {
    if (!isIntersecting || reducedMotion || isDataSaving) return;

    let targetTime = 0;
    let isUpdating = false;

    const handleScroll = () => {
      if (isUpdating) return;
      isUpdating = true;

      rafId.current = requestAnimationFrame(() => {
        const container = containerRef.current;
        const video = videoRef.current;
        if (!container || !video || !video.duration || isNaN(video.duration)) {
          isUpdating = false;
          return;
        }

        const rect = container.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Progress 0 when top of container reaches bottom of viewport
        // Progress 1 when bottom of container reaches top of viewport
        const totalTravel = windowHeight + rect.height;
        const currentProgress = (windowHeight - rect.top) / totalTravel;
        const clampedProgress = Math.max(0, Math.min(1, currentProgress));

        targetTime = clampedProgress * video.duration;

        // Only update if difference is meaningful to prevent jank
        if (Math.abs(video.currentTime - targetTime) > 0.03) {
          video.currentTime = targetTime;
        }

        isUpdating = false;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [isIntersecting, isLoaded, reducedMotion, isDataSaving]);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
      aria-label={altText}
    >
      {/* Poster image: displays immediately or when reduced motion / data saving is enabled */}
      <img
        src={poster}
        alt={altText}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        className={`w-full h-full object-cover transition-opacity duration-700 ${
          isLoaded && !reducedMotion && !isDataSaving ? 'opacity-0 absolute inset-0 pointer-events-none' : 'opacity-100'
        } ${videoClassName}`}
      />

      {/* Video element: only active when not in reduced motion or data saving mode */}
      {!reducedMotion && !isDataSaving && (
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          muted
          playsInline
          preload={priority ? 'auto' : 'metadata'}
          onLoadedMetadata={() => setIsLoaded(true)}
          className={`w-full h-full object-cover select-none pointer-events-none ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          } ${videoClassName}`}
          aria-hidden="true"
        />
      )}
    </div>
  );
};
