import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { Link, useLocation } from 'react-router-dom';
import { mainNavItems } from '../../data/navigation';
import { siteConfig, getWhatsAppUrl } from '../../config/siteConfig';
import { Menu, X, ChevronDown, Instagram, Linkedin, Facebook } from 'lucide-react';
import { WhatsAppIcon } from '../ui/WhatsAppIcon';
import { TikTokIcon } from '../ui/TikTokIcon';


export const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [headerHeight, setHeaderHeight] = useState<number>(72);
  const headerRef = useRef<HTMLElement>(null);
  const hamburgerButtonRef = useRef<HTMLButtonElement>(null);
  const location = useLocation();


  // Calculate actual height of header in real-time
  const updateHeaderPosition = () => {
    if (headerRef.current) {
      const height = headerRef.current.offsetHeight;
      setHeaderHeight(height > 0 ? height : 72);
    }
  };

  useEffect(() => {
    updateHeaderPosition();
    window.addEventListener('resize', updateHeaderPosition);
    return () => {
      window.removeEventListener('resize', updateHeaderPosition);
    };
  }, []);

  // Close menus on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  // Handle Escape key to close mobile menu and return focus to hamburger button
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (isMobileMenuOpen) {
          setIsMobileMenuOpen(false);
          hamburgerButtonRef.current?.focus();
        }
        setActiveDropdown(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMobileMenuOpen]);

  // Lock page scroll behind the menu when hamburger menu is open
  useEffect(() => {
    if (!isMobileMenuOpen) return;

    updateHeaderPosition();
    const originalBodyOverflow = document.body.style.overflow;
    const originalHtmlOverflow = document.documentElement.style.overflow;

    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';

    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      } else {
        updateHeaderPosition();
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      document.body.style.overflow = originalBodyOverflow;
      document.documentElement.style.overflow = originalHtmlOverflow;
      window.removeEventListener('resize', handleResize);
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        ref={headerRef}
        className={`${
          isMobileMenuOpen
            ? 'fixed top-0 inset-x-0 w-full z-[10000]'
            : 'sticky top-0 z-[100]'
        } glass-header transition-colors duration-300`}
      >
        {/* Specular sheen & subtle light reflection overlay for mirrored glass effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="absolute inset-0 glass-header-reflection" />
          <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          <div className="absolute bottom-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#4FD6F4]/40 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-4 xl:px-6 2xl:px-8 relative z-[110] flex items-center justify-center">
          <div className="flex items-center justify-between h-18 lg:h-20 gap-2 w-full">
            
            {/* Logo brand - using symbol icon without tiny text, sized 44x44 with clear HTML text */}
            <Link
              to="/"
              className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none rounded-lg p-1 shrink-0 animate-brand-slide-down"
              aria-label="Daniel Paulo - Página Inicial"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <img
                src="/assets/favicon/favicon-192.png"
                alt="Símbolo de Daniel Paulo"
                className="w-10 h-10 sm:w-11 sm:h-11 lg:w-11 lg:h-11 aspect-square object-contain group-hover:scale-105 transition-transform shrink-0"
                width="44"
                height="44"
                decoding="async"
              />
              <div className="flex flex-col shrink-0 min-w-0">
                <span className="text-sm sm:text-base lg:text-sm xl:text-base 2xl:text-lg font-bold tracking-tight text-white group-hover:text-[#4FD6F4] transition-colors font-['Plus_Jakarta_Sans'] whitespace-nowrap">
                  {siteConfig.name}
                </span>
                <span className="text-[10px] lg:text-[10px] xl:text-[11px] 2xl:text-xs tracking-wider text-[#94a9c9] uppercase font-medium whitespace-nowrap">
                  {siteConfig.profession}
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
                        className={`flex items-center gap-0.5 px-1.5 xl:px-2.5 2xl:px-3 py-1.5 text-xs xl:text-sm font-medium rounded-md transition-colors whitespace-nowrap focus:outline-none ${
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
                          <div className="bg-[#0b183d]/90 border border-[#1e3878]/90 rounded-xl p-1.5 shadow-[0_20px_50px_rgba(0,0,0,0.6)] backdrop-blur-2xl relative z-[151]">
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
                    className={`px-1.5 xl:px-2.5 2xl:px-3 py-1.5 text-xs xl:text-sm font-medium rounded-md transition-colors whitespace-nowrap focus:outline-none ${
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

            {/* Desktop & Tablet Actions: Direct WhatsApp CTA Button */}
            <div className="hidden lg:flex items-center gap-1.5 xl:gap-3 shrink-0">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-2.5 xl:px-4 py-2 rounded-lg text-xs xl:text-sm font-semibold bg-[#4FD6F4] text-[#081331] hover:bg-[#36c5e5] transition-all transform hover:-translate-y-0.5 focus:outline-none shadow-lg shadow-[#4FD6F4]/10 whitespace-nowrap shrink-0"
                aria-label="Abrir conversa no WhatsApp com Daniel Paulo"
              >
                <WhatsAppIcon className="w-3.5 h-3.5 xl:w-4 xl:h-4" />
                <span className="hidden xl:inline">Agendar Conversa</span>
                <span className="xl:hidden">Agendar</span>
              </a>
            </div>

            {/* Mobile & Tablet actions: Quick CTA + hamburger button */}
            <div className="flex items-center gap-1.5 sm:gap-2 lg:hidden">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-[#4FD6F4] text-[#081331] hover:bg-[#36c5e5] transition-all focus:outline-none shadow-md shrink-0 whitespace-nowrap"
                aria-label="Agendar via WhatsApp"
              >
                <WhatsAppIcon className="w-3.5 h-3.5" />
                <span>Agendar</span>
              </a>
              <button
                ref={hamburgerButtonRef}
                type="button"
                onClick={() => {
                  updateHeaderPosition();
                  setIsMobileMenuOpen(!isMobileMenuOpen);
                }}
                className="p-2 sm:p-2.5 rounded-lg text-slate-300 hover:text-white hover:bg-[#0e1e4a] focus:outline-none cursor-pointer"
                aria-label={isMobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-navigation-portal"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

      </header>

      {/* Spacer to prevent page jump when header enters fixed mode upon opening mobile menu */}
      {isMobileMenuOpen && (
        <div style={{ height: `${headerHeight}px` }} aria-hidden="true" />
      )}

      {/* Mobile Drawer Menu — rendered into document.body via Portal immediately below fixed header */}
      {isMobileMenuOpen &&
        typeof document !== 'undefined' &&
        createPortal(
          <div
            id="mobile-navigation-portal"
            className="fixed inset-x-0 bottom-0 z-[9999] lg:hidden"
            style={{ top: `${headerHeight}px` }}
          >
            {/* Backdrop: starts immediately below the fixed header, clicking closes the menu */}
            <div
              className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
              onClick={() => {
                setIsMobileMenuOpen(false);
                hamburgerButtonRef.current?.focus();
              }}
              aria-hidden="true"
            />

            {/* Menu Panel: anchored to the top of this container (immediately below fixed header) */}
            <div
              id="mobile-navigation"
              role="dialog"
              aria-modal="true"
              aria-label="Menu principal de navegação"
              className="relative w-full max-h-full bg-[#081331] border-b border-[#1e3878] px-4 pt-3 pb-8 overflow-y-auto overscroll-contain shadow-2xl"
              style={{ maxHeight: `calc(100dvh - ${headerHeight}px)` }}
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
                          onClick={() => setIsMobileMenuOpen(false)}
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
                              onClick={() => setIsMobileMenuOpen(false)}
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

              {/* Mobile Actions: Social Links & Direct WhatsApp CTA */}
              <div className="mt-5 pt-4 border-t border-[#1e3878] space-y-4">
                {/* Social media links confirmed */}
                <div className="px-2 pt-1 text-center">
                  <span className="text-xs uppercase tracking-wider text-[#94a9c9] font-semibold block mb-2 text-center">
                    Redes Oficiais
                  </span>
                  <div className="flex items-center justify-center gap-3">
                    <a
                      href={siteConfig.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-lg bg-[#0e1e4a] hover:bg-[#4FD6F4] hover:text-[#081331] text-slate-300 flex items-center justify-center transition-all duration-300 ease-out hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#4FD6F4]"
                      aria-label="Instagram de Daniel Paulo"
                    >
                      <Instagram className="w-4 h-4" />
                    </a>
                    <a
                      href={siteConfig.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-lg bg-[#0e1e4a] hover:bg-[#4FD6F4] hover:text-[#081331] text-slate-300 flex items-center justify-center transition-all duration-300 ease-out hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#4FD6F4]"
                      aria-label="LinkedIn de Daniel Paulo"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a
                      href={siteConfig.social.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-lg bg-[#0e1e4a] hover:bg-[#4FD6F4] hover:text-[#081331] text-slate-300 flex items-center justify-center transition-all duration-300 ease-out hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#4FD6F4]"
                      aria-label="Facebook de Daniel Paulo"
                    >
                      <Facebook className="w-4 h-4" />
                    </a>
                    <a
                      href={siteConfig.social.tiktok}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-lg bg-[#0e1e4a] hover:bg-[#4FD6F4] hover:text-[#081331] text-slate-300 flex items-center justify-center transition-all duration-300 ease-out hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#4FD6F4]"
                      aria-label="TikTok de Daniel Paulo"
                    >
                      <TikTokIcon className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold bg-[#4FD6F4] text-[#081331] hover:bg-[#36c5e5] transition-colors shadow-md text-base"
                >
                  <WhatsAppIcon className="w-5 h-5" />
                  <span>Agendar pelo WhatsApp</span>
                </a>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
};
