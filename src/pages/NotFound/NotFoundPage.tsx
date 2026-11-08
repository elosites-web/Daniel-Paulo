import React from 'react';
import { Link } from 'react-router-dom';
import { SeoHead } from '../../components/seo/SeoHead';
import { Compass, Home, ArrowLeft } from 'lucide-react';
import { WhatsAppIcon } from '../../components/ui/WhatsAppIcon';

export const NotFoundPage: React.FC = () => {
  return (
    <>
      <SeoHead
        title="Página Não Encontrada (404) | Daniel Paulo"
        description="A página que você procurava não existe ou foi movida. Retorne à página inicial ou entre em contato com Daniel Paulo."
        canonicalPath="/404"
      />

      <div className="min-h-[70vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-md w-full text-center space-y-6 p-8 rounded-3xl bg-[#0e1e4a]/70 border border-[#1e3878] shadow-2xl">
          
          <div className="w-16 h-16 rounded-2xl bg-[#122456] text-[#4FD6F4] flex items-center justify-center mx-auto">
            <Compass className="w-8 h-8 animate-spin-slow" />
          </div>

          <div className="space-y-2">
            <span className="text-4xl sm:text-5xl font-black text-[#4FD6F4] font-['Plus_Jakarta_Sans']">
              404
            </span>
            <h1 className="text-2xl font-bold text-white font-['Plus_Jakarta_Sans']">
              Página Não Encontrada
            </h1>
            <p className="text-sm text-slate-300 font-light leading-relaxed">
              O caminho solicitado não foi localizado ou pode ter sido movido. Verifique o endereço ou retorne à navegação inicial.
            </p>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#4FD6F4] text-[#081331] font-bold text-sm hover:bg-[#36c5e5] transition-all shadow-md"
            >
              <Home className="w-4 h-4" />
              <span>Voltar ao Início</span>
            </Link>

            <Link
              to="/contato"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#122456] text-white font-semibold text-sm hover:bg-[#1a3378] transition-colors"
            >
              <WhatsAppIcon className="w-4 h-4 fill-current" />
              <span>Fale Conosco</span>
            </Link>
          </div>

          <div className="pt-2">
            <Link to="/mapa-do-site" className="text-xs text-[#8ea5c8] hover:text-[#4FD6F4] underline">
              Consultar o mapa completo do site
            </Link>
          </div>

        </div>
      </div>
    </>
  );
};
