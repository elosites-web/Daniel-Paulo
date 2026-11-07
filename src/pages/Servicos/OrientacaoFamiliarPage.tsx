import React from 'react';
import { Link } from 'react-router-dom';
import { SeoHead } from '../../components/seo/SeoHead';
import { Breadcrumbs } from '../../components/breadcrumbs/Breadcrumbs';
import { getWhatsAppUrl } from '../../config/siteConfig';
import { Users, MessageCircle, ArrowRight, CheckCircle2 } from 'lucide-react';

export const OrientacaoFamiliarPage: React.FC = () => {
  return (
    <>
      <SeoHead
        title="Orientação Familiar | Daniel Paulo"
        description="Orientação familiar com Daniel Paulo. Espaço reflexivo e neutro para famílias que buscam aprimorar o diálogo, compreender dinâmicas e fortalecer vínculos."
        canonicalPath="/servicos/orientacao-familiar"
        breadcrumbs={[
          { name: 'Serviços', url: '/servicos' },
          { name: 'Orientação Familiar', url: '/servicos/orientacao-familiar' }
        ]}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 space-y-12">
        
        <Breadcrumbs
          items={[
            { label: 'Serviços', href: '/servicos' },
            { label: 'Orientação Familiar' }
          ]}
        />

        <article className="space-y-8">
          <header className="space-y-4">
            <span className="text-xs font-semibold tracking-wider text-[#4FD6F4] uppercase">
              Relações & Diálogo
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-['Plus_Jakarta_Sans'] leading-tight">
              Orientação Familiar
            </h1>
            <p className="text-lg text-slate-300 font-light leading-relaxed">
              Um ambiente mediado e acolhedor para famílias que desejam repensar dinâmicas de convivência e aprimorar a escuta mútua em momentos de transição.
            </p>
          </header>

          <div className="text-slate-300 space-y-6 text-base sm:text-lg leading-relaxed font-light">
            <div className="p-6 rounded-2xl bg-[#0e1e4a]/60 border border-[#1e3878]">
              <h2 className="text-xl font-bold text-white mb-2 font-['Plus_Jakarta_Sans']">
                Como Funciona a Orientação
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                As dinâmicas familiares são tecidas por histórias, afetos, mas também por silêncios e mal-entendidos acumulados ao longo do tempo. O trabalho de orientação familiar com Daniel Paulo oferece um olhar mediador neutro, sem apontar culpados, com foco na construção de canais mais saudáveis de comunicação.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-white font-['Plus_Jakarta_Sans'] pt-4">
              Objetivos do Trabalho
            </h2>
            <ul className="space-y-3 not-prose text-slate-300 text-base">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#4FD6F4] flex-shrink-0 mt-0.5" />
                <span>Facilitar a expressão de sentimentos represados de forma respeitosa.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#4FD6F4] flex-shrink-0 mt-0.5" />
                <span>Compreender papéis que cada membro assumiu e como reajustá-los.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#4FD6F4] flex-shrink-0 mt-0.5" />
                <span>Apoiar a tomada de decisões compartilhadas em momentos de transição ou crise.</span>
              </li>
            </ul>

            <p className="text-sm text-slate-400">
              * O formato das sessões, a presença conjunta ou individual dos familiares e o número de encontros são alinhados na conversa inicial de acordo com a necessidade específica de cada contexto.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-[#0b183d] border border-[#1e3878] text-center space-y-4">
            <h3 className="text-2xl font-bold text-white font-['Plus_Jakarta_Sans']">
              Deseja conversar sobre sua família?
            </h3>
            <p className="text-sm text-slate-300 max-w-lg mx-auto font-light">
              Entre em contato com Daniel Paulo pelo WhatsApp para esclarecer dúvidas e verificar como a orientação familiar pode ajudar seu momento.
            </p>
            <div>
              <a
                href={getWhatsAppUrl('Olá Daniel, gostaria de saber mais sobre a orientação familiar.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm bg-[#4FD6F4] text-[#081331] hover:bg-[#36c5e5] transition-all shadow-md"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Conversar pelo WhatsApp</span>
              </a>
            </div>
          </div>
        </article>

      </div>
    </>
  );
};
