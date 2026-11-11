import React, { useState, useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { getWhatsAppUrl } from '../../config/siteConfig';
import { WhatsAppIcon } from './WhatsAppIcon';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export const FloatingWhatsApp: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const [canPulse, setCanPulse] = useState(false);
  const [isInHero, setIsInHero] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    return window.location.pathname === '/';
  });

  const location = useLocation();
  const reducedMotion = useReducedMotion();

  // Check whether Hero 1 (#inicio) or Hero 2 (#sobre-daniel) are currently in view
  const checkHeroVisibility = useCallback(() => {
    if (location.pathname !== '/') {
      setIsInHero(false);
      return;
    }

    const hero1 = document.getElementById('inicio');
    const hero2 = document.getElementById('sobre-daniel');

    if (!hero1 && !hero2) {
      setIsInHero(false);
      return;
    }

    const vh = window.innerHeight || document.documentElement.clientHeight;
    const rect1 = hero1?.getBoundingClientRect();
    const rect2 = hero2?.getBoundingClientRect();

    // Considered inside Hero 1 or Hero 2 if either section intersects the active viewport
    const isHero1Visible = rect1 ? rect1.bottom > 80 && rect1.top < vh : false;
    const isHero2Visible = rect2 ? rect2.bottom > 80 && rect2.top < vh : false;

    setIsInHero(isHero1Visible || isHero2Visible);
  }, [location.pathname]);

  useEffect(() => {
    checkHeroVisibility();

    window.addEventListener('scroll', checkHeroVisibility, { passive: true });
    window.addEventListener('resize', checkHeroVisibility, { passive: true });

    return () => {
      window.removeEventListener('scroll', checkHeroVisibility);
      window.removeEventListener('resize', checkHeroVisibility);
    };
  }, [checkHeroVisibility]);

  useEffect(() => {
    // Delay 35 seconds after site load for smooth, non-intrusive entrance
    const timer = setTimeout(() => {
      setMounted(true);
    }, 35000);

    // Only allow periodic pulse after entrance animation has completely and smoothly settled (3.5s later)
    const pulseTimer = setTimeout(() => {
      setCanPulse(true);
    }, 38500);

    return () => {
      clearTimeout(timer);
      clearTimeout(pulseTimer);
    };
  }, []);

  const shouldAnimate = !reducedMotion;
  // Never appear in Hero 1 or Hero 2
  const isVisible = mounted && !isInHero;

  return (
    <aside
      aria-label="Atendimento rápido via WhatsApp"
      className={`fixed bottom-6 right-6 z-40 whatsapp-floating-container ${
        shouldAnimate
          ? isVisible
            ? 'whatsapp-smooth-enter'
            : 'whatsapp-smooth-hidden'
          : isVisible
            ? 'opacity-100 transition-opacity duration-1000'
            : 'opacity-0 pointer-events-none'
      }`}
    >
      <a
        href={getWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className={`group relative flex items-center justify-center w-14 h-14 rounded-full text-white whatsapp-premium-btn focus:outline-none ${
          shouldAnimate && canPulse ? 'animate-whatsapp-pulse' : ''
        }`}
        aria-label="Abrir conversa no WhatsApp com Daniel Paulo"
      >
        <WhatsAppIcon className="w-7 h-7 relative z-10 text-white drop-shadow-[0_1px_2px_rgba(8,19,49,0.55)]" />
        
        {/* Tooltip on hover (desktop only) */}
        <span className="hidden sm:inline-block pointer-events-none absolute right-full mr-3 px-3.5 py-1.5 rounded-lg bg-[#081331]/95 backdrop-blur-sm text-xs font-medium text-white border border-[#1e3878] whitespace-nowrap opacity-0 translate-x-2 scale-95 group-hover:opacity-100 group-hover:translate-x-0 group-hover:scale-100 transition-all duration-300 ease-out shadow-xl shadow-[#081331]/60 z-20">
          Conversar pelo WhatsApp
        </span>
      </a>
    </aside>
  );
};
