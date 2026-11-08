import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { mainNavItems } from '../../data/navigation';
import { siteConfig, getWhatsAppUrl } from '../../config/siteConfig';
import { Menu, X, ChevronDown } from 'lucide-react';
import { WhatsAppIcon } from '../ui/WhatsAppIcon';
import { ThemeSwitcher } from '../ui/ThemeSwitcher';
import { motion, useScroll, useSpring } from 'motion/react';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();
  const reducedMotion = useReducedMotion();

  // Full-page scroll progress
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 30,
    restDelta: 0.001,
  });

  // Close menus on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  // Handle Escape key to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false);
        setActiveDropdown(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <header className="sticky top-0 z-[100] bg-[#081331]/95 backdrop-blur-[14px] border-b border-[#162c66]/80 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-4 xl:px-6 2xl:px-8 relative z-[110]">
        <div className="flex items-center justify-between h-18 lg:h-20 gap-2">
          
          {/* Logo brand - protected against text break/wrapping on tablets and desktop */}
          <Link
            to="/"
            className="flex items-center gap-2 sm:gap-2.5 xl:gap-3 group focus:outline-none focus:ring-2 focus:ring-[#4FD6F4] rounded-lg p-1 shrink-0"
            aria-label="Daniel Paulo - Página Inicial"
          >
            <img
              src="/assets/logo/logo-daniel-paulo-sem-brilho-256.png"
              alt="Logotipo circular de Daniel Paulo com silhuetas em perfil"
              className="w-9 h-9 sm:w-10 sm:h-10 lg:w-9 lg:h-9 xl:w-11 xl:h-11 object-contain group-hover:scale-105 transition-transform shrink-0"
              width="44"
              height="44"
            />
            <div className="flex flex-col shrink-0 min-w-0">
              <span className="text-sm sm:text-base lg:text-sm xl:text-base 2xl:text-lg font-bold tracking-tight text-white group-hover:text-[#4FD6F4] transition-colors font-['Plus_Jakarta_Sans'] whitespace-nowrap">
                Daniel Paulo
              </span>
              <span className="text-[10px] lg:text-[10px] xl:text-[11px] 2xl:text-xs tracking-wider text-[#94a9c9] uppercase font-medium whitespace-nowrap">
                Psicanalista e Terapeuta
              </span>
            </div>
          </Link>

          {/* Desktop & Tablet Navigation */}
          <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1 2xl:gap-1.5 relative z-[120]" aria-label="Navegação principal">
            {mainNavItems.map((item) => {
              const isActive = location.pathname === item.href || (item.href !== '/' && location.pathname.startsWith(item.href));
              const hasChildren = item.children && item.children.length > 0;
              const displayLabel = item.shortLabel ? (
                <>
                  <span className="hidden xl:inline">{item.label}</span>
                  <span className="xl:hidden">{item.shortLabel}</span>
                </>
              ) : (
                item.label
              );

              if (hasChildren) {
                return (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(item.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button
                      type="button"
                      className={`flex items-center gap-0.5 px-1.5 xl:px-2.5 2xl:px-3 py-1.5 text-xs xl:text-sm font-medium rounded-md transition-colors whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-[#4FD6F4] ${
                        isActive
                          ? 'text-[#4FD6F4] bg-[#0e1e4a]'
                          : 'text-slate-200 hover:text-white hover:bg-[#0e1e4a]/60'
                      }`}
                      aria-expanded={activeDropdown === item.label}
                      aria-haspopup="true"
                    >
                      <span>{displayLabel}</span>
                      <ChevronDown className="w-3 h-3 xl:w-3.5 xl:h-3.5 transition-transform duration-200 opacity-70 group-hover:opacity-100 shrink-0" />
                    </button>

                    {activeDropdown === item.label && (
                      <div className="absolute top-full left-0 pt-1.5 min-w-[220px] max-w-[280px] z-[150] animate-in fade-in slide-in-from-top-1 duration-150">
                        <div className="bg-[#0b183d] border border-[#1e3878] rounded-xl p-1.5 shadow-2xl backdrop-blur-xl relative z-[151]">
                          {item.children!.map((child) => {
                            const isChildActive = location.pathname === child.href;
                            return (
                              <Link
                                key={child.href}
                                to={child.href}
                                className={`block px-3 py-2 rounded-lg text-xs xl:text-sm transition-colors ${
                                  isChildActive
                                    ? 'bg-[#122456] text-[#4FD6F4] font-medium'
                                    : 'text-slate-300 hover:bg-[#122456]/70 hover:text-white'
                                }`}
                              >
                                <div className="font-medium whitespace-nowrap">{child.label}</div>
                                {child.description && (
                                  <div className="text-[11px] text-[#8ea5c8] mt-0.5 line-clamp-1">
                                    {child.description}
                                  </div>
                                )}
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`px-1.5 xl:px-2.5 2xl:px-3 py-1.5 text-xs xl:text-sm font-medium rounded-md transition-colors whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-[#4FD6F4] ${
                    isActive
                      ? 'text-[#4FD6F4] bg-[#0e1e4a]'
                      : 'text-slate-200 hover:text-white hover:bg-[#0e1e4a]/60'
                  }`}
                >
                  {displayLabel}
                </Link>
              );
            })}
          </nav>

          {/* Desktop & Tablet Actions: Theme Switcher & Direct CTA Button */}
          <div className="hidden lg:flex items-center gap-1.5 xl:gap-3 shrink-0">
            <ThemeSwitcher />
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-2.5 xl:px-4 py-2 rounded-lg text-xs xl:text-sm font-semibold bg-[#4FD6F4] text-[#081331] hover:bg-[#36c5e5] transition-all transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4FD6F4] focus:ring-offset-[#081331] shadow-lg shadow-[#4FD6F4]/10 whitespace-nowrap shrink-0"
              aria-label="Abrir conversa no WhatsApp com Daniel Paulo"
            >
              <WhatsAppIcon className="w-3.5 h-3.5 xl:w-4 xl:h-4" />
              <span className="hidden xl:inline">Agendar Conversa</span>
              <span className="xl:hidden">Agendar</span>
            </a>
          </div>

          {/* Mobile & Tablet actions: Quick CTA + Theme Switcher + hamburger button */}
          <div className="flex items-center gap-1.5 sm:gap-2 lg:hidden">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-[#4FD6F4] text-[#081331] hover:bg-[#36c5e5] transition-all shadow-md shrink-0 whitespace-nowrap"
              aria-label="Agendar via WhatsApp"
            >
              <WhatsAppIcon className="w-3.5 h-3.5" />
              <span>Agendar</span>
            </a>
            <ThemeSwitcher />
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 sm:p-2.5 rounded-lg text-slate-300 hover:text-white hover:bg-[#0e1e4a] focus:outline-none focus:ring-2 focus:ring-[#4FD6F4]"
              aria-label={isMobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-navigation"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Slim, full-width scroll progress bar immediately below the header */}
      <div
        className="absolute top-full inset-x-0 w-full h-[2.5px] bg-[#081331]/30 pointer-events-none overflow-hidden z-10"
        role="progressbar"
        aria-label="Progresso de rolagem da página"
      >
        <motion.div
          className="h-full bg-gradient-to-r from-[#4FD6F4] via-[#36c5e5] to-[#25D366] shadow-[0_0_8px_rgba(79,214,244,0.7)] origin-left"
          style={{
            scaleX: reducedMotion ? scrollYProgress : scaleX,
            transformOrigin: '0% 50%',
          }}
        />
      </div>


      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="lg:hidden bg-[#081331] border-b border-[#1e3878] px-4 pt-3 pb-6 max-h-[85vh] overflow-y-auto"
        >
          <div className="space-y-1">
            {mainNavItems.map((item) => {
              const isActive = location.pathname === item.href || (item.href !== '/' && location.pathname.startsWith(item.href));
              const hasChildren = item.children && item.children.length > 0;

              return (
                <div key={item.label} className="border-b border-[#122456]/60 pb-1">
                  <div className="flex items-center justify-between">
                    <Link
                      to={item.href}
                      className={`block py-2.5 text-base font-medium rounded-md px-2 ${
                        isActive ? 'text-[#4FD6F4] bg-[#0e1e4a]' : 'text-slate-200 hover:text-white'
                      }`}
                    >
                      {item.label}
                    </Link>
                  </div>

                  {hasChildren && (
                    <div className="pl-4 pr-1 py-1 space-y-1 bg-[#0a183d]/40 rounded-lg my-1">
                      {item.children!.map((child) => (
                        <Link
                          key={child.href}
                          to={child.href}
                          className={`block py-2 text-sm rounded-md px-2 transition-colors ${
                            location.pathname === child.href
                              ? 'text-[#4FD6F4] font-medium bg-[#122456]'
                              : 'text-slate-300 hover:text-white'
                          }`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-5 pt-4 border-t border-[#1e3878] space-y-3">
            <div className="flex items-center justify-between px-2 py-1">
              <span className="text-sm font-medium text-slate-300">Aparência do site</span>
              <ThemeSwitcher showLabel={true} />
            </div>

            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold bg-[#4FD6F4] text-[#081331] hover:bg-[#36c5e5] transition-colors shadow-md text-base"
            >
              <WhatsAppIcon className="w-5 h-5" />
              <span>Agendar pelo WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
