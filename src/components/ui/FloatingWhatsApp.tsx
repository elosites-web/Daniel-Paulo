import React, { useState, useEffect } from 'react';
import { getWhatsAppUrl } from '../../config/siteConfig';
import { WhatsAppIcon } from './WhatsAppIcon';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export const FloatingWhatsApp: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    // Delay 35 seconds after site load for smooth, non-intrusive entrance
    const timer = setTimeout(() => {
      setMounted(true);
    }, 35000);
    return () => clearTimeout(timer);
  }, []);

  const shouldAnimate = !reducedMotion;

  return (
    <aside
      aria-label="Atendimento rápido via WhatsApp"
      className={`fixed bottom-6 right-6 z-40 ${
        shouldAnimate
          ? mounted
            ? 'whatsapp-smooth-enter'
            : 'whatsapp-smooth-hidden'
          : mounted
            ? 'opacity-100 transition-opacity duration-700'
            : 'opacity-0 pointer-events-none'
      }`}
    >
      <a
        href={getWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className={`group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-xl hover:bg-[#20ba5a] hover:scale-105 active:scale-95 transition-all focus:outline-none focus:ring-4 focus:ring-[#25D366]/40 ${
          shouldAnimate && mounted ? 'animate-whatsapp-pulse' : ''
        }`}
        aria-label="Abrir conversa no WhatsApp com Daniel Paulo"
      >
        <WhatsAppIcon className="w-7 h-7" />
        
        {/* Tooltip on hover (desktop only) */}
        <span className="hidden sm:inline-block pointer-events-none absolute right-full mr-3 px-3 py-1.5 rounded-lg bg-[#081331] text-xs font-medium text-white border border-[#1e3878] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
          Conversar pelo WhatsApp
        </span>
      </a>
    </aside>
  );
};
