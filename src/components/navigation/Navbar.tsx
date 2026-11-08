import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { mainNavItems } from '../../data/navigation';
import { siteConfig, getWhatsAppUrl } from '../../config/siteConfig';
import { Menu, X, ChevronDown, MessageCircle } from 'lucide-react';
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
    <header className="sticky top-0 z-50 bg-[#081331]/80 backdrop-blur-[12px] border-b border-[#162c66]/80 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo brand */}
          <Link
            to="/"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#4FD6F4] rounded-lg p-1"
            aria-label="Daniel Paulo - Página Inicial"
          >
            <img
              src="/assets/logo/logo-daniel-paulo-sem-brilho-256.png"
              alt="Logotipo circular de Daniel Paulo com silhuetas em perfil"
              className="w-12 h-12 object-contain group-hover:scale-105 transition-transform"
              width="48"
              height="48"
            />
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-tight text-white group-hover:text-[#4FD6F4] transition-colors font-['Plus_Jakarta_Sans']">
                Daniel Paulo
              </span>
              <span className="text-xs tracking-wider text-[#94a9c9] uppercase font-medium">
                Psicanalista e Terapeuta
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Navegação principal">
            {mainNavItems.map((item) => {
              const isActive = location.pathname === item.href || (item.href !== '/' && location.pathname.startsWith(item.href));
              const hasChildren = item.children && item.children.length > 0;

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
                      className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-[#4FD6F4] ${
                        isActive
                          ? 'text-[#4FD6F4] bg-[#0e1e4a]'
                          : 'text-slate-200 hover:text-white hover:bg-[#0e1e4a]/60'
                      }`}
                      aria-expanded={activeDropdown === item.label}
                      aria-haspopup="true"
                    >
                      <span>{item.label}</span>
                      <ChevronDown className="w-4 h-4 transition-transform duration-200 opacity-70 group-hover:opacity-100" />
                    </button>

                    {activeDropdown === item.label && (
                      <div className="absolute top-full left-0 w-64 pt-2 shadow-2xl animate-in fade-in slide-in-from-top-1 duration-150">
                        <div className="bg-[#0b183d] border border-[#1e3878] rounded-xl p-2 shadow-2xl backdrop-blur-xl">
                          {item.children!.map((child) => {
                            const isChildActive = location.pathname === child.href;
                            return (
                              <Link
                                key={child.href}
                                to={child.href}
                                className={`block px-3 py-2.5 rounded-lg text-sm transition-colors ${
                                  isChildActive
                                    ? 'bg-[#122456] text-[#4FD6F4] font-medium'
                                    : 'text-slate-300 hover:bg-[#122456]/70 hover:text-white'
                                }`}
                              >
                                <div className="font-medium">{child.label}</div>
                                {child.description && (
                                  <div className="text-xs text-[#8ea5c8] mt-0.5 line-clamp-1">
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
                  className={`px-3 py-2 text-sm font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-[#4FD6F4] ${
                    isActive
                      ? 'text-[#4FD6F4] bg-[#0e1e4a]'
                      : 'text-slate-200 hover:text-white hover:bg-[#0e1e4a]/60'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Actions: Theme Switcher & Direct CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            <ThemeSwitcher />
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold bg-[#4FD6F4] text-[#081331] hover:bg-[#36c5e5] transition-all transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4FD6F4] focus:ring-offset-[#081331] shadow-lg shadow-[#4FD6F4]/10"
              aria-label="Abrir conversa no WhatsApp com Daniel Paulo"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Agendar Conversa</span>
            </a>
          </div>

          {/* Mobile actions: Theme Switcher + hamburger button */}
          <div className="flex items-center gap-2 lg:hidden">
            <ThemeSwitcher />
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2.5 rounded-lg text-slate-300 hover:text-white hover:bg-[#0e1e4a] focus:outline-none focus:ring-2 focus:ring-[#4FD6F4]"
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
        className="absolute top-full inset-x-0 w-full h-[2.5px] bg-[#081331]/30 pointer-events-none overflow-hidden z-50"
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
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>Agendar pelo WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
