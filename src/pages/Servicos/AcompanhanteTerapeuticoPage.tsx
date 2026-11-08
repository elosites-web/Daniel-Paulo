import React from 'react';
import { Link } from 'react-router-dom';
import { SeoHead } from '../../components/seo/SeoHead';
import { Breadcrumbs } from '../../components/breadcrumbs/Breadcrumbs';
import { getWhatsAppUrl } from '../../config/siteConfig';
import { HeartHandshake, MessageCircle, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const AcompanhanteTerapeuticoPage: React.FC = () => {
  return (
    <>
      <SeoHead
        title="Acompanhante Terapêutico (AT) | Daniel Paulo"
        description="Atuação como acompanhante terapêutico com Daniel Paulo. Suporte humanizado e mediação em situações do cotidiano para fortalecimento da autonomia."
        canonicalPath="/servicos/acompanhante-terapeutico"
        breadcrumbs={[
          { name: 'Serviços', url: '/servicos' },
          { name: 'Acompanhante Terapêutico', url: '/servicos/acompanhante-terapeutico' }
        ]}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 space-y-12">
        
        <Breadcrumbs
          items={[
            { label: 'Serviços', href: '/servicos' },
            { label: 'Acompanhante Terapêutico' }
          ]}
        />

        <article id="conteudo" className="space-y-8">
          <header className="space-y-4">
            <span className="text-xs font-semibold tracking-wider text-[#4FD6F4] uppercase">
              Cuidado no Cotidiano
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-['Plus_Jakarta_Sans'] leading-tight">
              Acompanhante Terapêutico (AT)
            </h1>
            <p className="text-lg text-slate-300 font-light leading-relaxed">
              Uma prática humanizada de escuta e suporte que se desloca do consultório tradicional para acompanhar o indivíduo em suas vivências e desafios do dia a dia.
            </p>
          </header>

          <div className="text-slate-300 space-y-6 text-base sm:text-lg leading-relaxed font-light">
            <div id="o-que-e" className="p-6 rounded-2xl bg-[#0e1e4a]/60 border border-[#1e3878]">
              <h2 className="text-xl font-bold text-white mb-2 font-['Plus_Jakarta_Sans']">
                O que é a Atuação como Acompanhante Terapêutico?
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                O Acompanhamento Terapêutico é uma modalidade de intervenção que atua em territórios reais — na circulação social, na rotina diária ou em momentos de readaptação —, oferecendo presença acolhedora e suporte para a retomada de vínculos e autonomia.
              </p>
            </div>

            <div id="principios" className="space-y-4 pt-2">
              <h2 className="text-2xl font-bold text-white font-['Plus_Jakarta_Sans'] pt-2">
                Princípios da Abordagem
              </h2>
              <ul className="space-y-3 not-prose text-slate-300 text-base">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#4FD6F4] flex-shrink-0 mt-0.5" />
                  <span>Presença atenta e escuta contínua nas situações concretas da vida.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#4FD6F4] flex-shrink-0 mt-0.5" />
                  <span>Mediação de conflitos e suporte na superação de bloqueios relacionais.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#4FD6F4] flex-shrink-0 mt-0.5" />
                  <span>Construção gradual de autonomia, respeitando o ritmo de cada pessoa.</span>
                </li>
              </ul>
            </div>

            <div id="esclarecimento-etico" className="p-5 rounded-2xl bg-[#081331] border border-[#162c66] flex items-start gap-3 text-xs text-slate-400">
              <ShieldCheck className="w-5 h-5 text-[#4FD6F4] flex-shrink-0 mt-0.5" />
              <p>
                <strong>Esclarecimento ético:</strong> Esta modalidade é prestada com responsabilidade e cuidado, não constituindo atendimento médico ou ato privativo de psicologia regulamentada. As condições e objetivos são estabelecidos em diálogo prévio.
              </p>
            </div>
          </div>

          <div id="agendamento" className="p-8 rounded-3xl bg-[#0b183d] border border-[#1e3878] text-center space-y-4">
            <h3 className="text-2xl font-bold text-white font-['Plus_Jakarta_Sans']">
              Quer consultar disponibilidade para este serviço?
            </h3>
            <p className="text-sm text-slate-300 max-w-lg mx-auto font-light">
              Entre em contato pelo WhatsApp com Daniel Paulo para apresentar o caso e verificar como o acompanhamento pode ser estruturado.
            </p>
            <div>
              <a
                href={getWhatsAppUrl('Olá Daniel, gostaria de consultar informações sobre Acompanhante Terapêutico.')}
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
