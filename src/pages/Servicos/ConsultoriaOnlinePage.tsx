import React from 'react';
import { Link } from 'react-router-dom';
import { SeoHead } from '../../components/seo/SeoHead';
import { Breadcrumbs } from '../../components/breadcrumbs/Breadcrumbs';
import { getWhatsAppUrl } from '../../config/siteConfig';
import { Monitor, ArrowRight, ShieldCheck } from 'lucide-react';
import { WhatsAppIcon } from '../../components/ui/WhatsAppIcon';

export const ConsultoriaOnlinePage: React.FC = () => {
  return (
    <>
      <SeoHead
        title="Consultoria Online | Daniel Paulo"
        description="Consultoria online individual com Daniel Paulo. Espaço de diálogo remoto para alinhamento estratégico, tomada de decisão e autodesenvolvimento."
        canonicalPath="/servicos/consultoria-online"
        breadcrumbs={[
          { name: 'Serviços', url: '/servicos' },
          { name: 'Consultoria Online', url: '/servicos/consultoria-online' }
        ]}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 space-y-12">
        
        <Breadcrumbs
          items={[
            { label: 'Serviços', href: '/servicos' },
            { label: 'Consultoria Online' }
          ]}
        />

        <article id="conteudo" className="space-y-8">
          <header className="space-y-4">
            <span className="text-xs font-semibold tracking-wider text-[#4FD6F4] uppercase">
              Atendimento Remoto
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-['Plus_Jakarta_Sans'] leading-tight">
              Consultoria Online
            </h1>
            <p className="text-lg text-slate-300 font-light leading-relaxed">
              Atendimento online individual. Detalhes combinados pelo WhatsApp.
            </p>
          </header>

          <div className="text-slate-300 space-y-6 text-base sm:text-lg leading-relaxed font-light">
            <div id="sobre" className="p-6 rounded-2xl bg-[#0e1e4a]/60 border border-[#1e3878]">
              <h2 className="text-xl font-bold text-white mb-2 font-['Plus_Jakarta_Sans']">
                Sobre a Consultoria Online
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Atendimento online individual. Detalhes combinados pelo WhatsApp.
              </p>
            </div>
          </div>

          <div id="agendamento" className="p-8 rounded-3xl bg-[#0b183d] border border-[#1e3878] text-center space-y-4">
            <h3 className="text-2xl font-bold text-white font-['Plus_Jakarta_Sans']">
              Interessado em consultoria online?
            </h3>
            <p className="text-sm text-slate-300 max-w-lg mx-auto font-light">
              Envie uma mensagem pelo WhatsApp para conversar com Daniel Paulo sobre o seu contexto e entender como a consultoria pode ser desenhada.
            </p>
            <div>
              <a
                href={getWhatsAppUrl('Olá Daniel, gostaria de consultar informações sobre o serviço de consultoria online.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm bg-[#4FD6F4] text-[#081331] hover:bg-[#36c5e5] transition-all shadow-md"
              >
                <WhatsAppIcon className="w-4 h-4 fill-current" />
                <span>Conversar pelo WhatsApp</span>
              </a>
            </div>
          </div>
        </article>

      </div>
    </>
  );
};
