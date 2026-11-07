import React from 'react';
import { Navbar } from '../navigation/Navbar';
import { Footer } from '../navigation/Footer';
import { FloatingWhatsApp } from '../ui/FloatingWhatsApp';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-[#081331] text-slate-100 selection:bg-[#4FD6F4] selection:text-[#081331] transition-colors duration-300">
      {/* Skip link for keyboard accessibility WCAG AA */}
      <a href="#main-content" className="skip-link sr-only focus:not-sr-only">
        Pular para o conteúdo principal
      </a>

      <Navbar />

      <main id="main-content" className="flex-grow focus:outline-none" tabIndex={-1}>
        {children}
      </main>

      <FloatingWhatsApp />
      <Footer />
    </div>
  );
};
