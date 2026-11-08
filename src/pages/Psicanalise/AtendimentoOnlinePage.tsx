import React from 'react';
import { Link } from 'react-router-dom';
import { SeoHead } from '../../components/seo/SeoHead';
import { Breadcrumbs } from '../../components/breadcrumbs/Breadcrumbs';
import { getWhatsAppUrl } from '../../config/siteConfig';
import { Monitor, MessageCircle, ArrowRight, ShieldCheck, CheckCircle2, Lock } from 'lucide-react';

export const AtendimentoOnlinePage: React.FC = () => {
  return (
    <>
      <SeoHead
        title="Atendimento Psicanalítico Online | Daniel Paulo"
        description="Atendimento psicanalítico online com Daniel Paulo. Acompanhamento terapêutico humanizado e confidencial para pacientes em qualquer localidade."
        canonicalPath="/psicanalise/atendimento-online"
        breadcrumbs={[
          { name: 'Psicanálise', url: '/psicanalise' },
          { name: 'Atendimento Online', url: '/psicanalise/atendimento-online' }
        ]}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 space-y-12">
        
        <Breadcrumbs
          items={[
            { label: 'Psicanálise', href: '/psicanalise' },
            { label: 'Atendimento Online' }
          ]}
        />

        <article className="space-y-8">
          
          <header className="space-y-4">
            <span className="text-xs font-semibold tracking-wider text-[#4FD6F4] uppercase">
              Modalidade Digital
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-['Plus_Jakarta_Sans'] leading-tight">
              Atendimento psicanalítico online: acolhimento sem barreiras geográficas
            </h1>
            <p className="text-lg text-slate-300 font-light leading-relaxed">
              A escuta psicanalítica adaptada ao ambiente digital, permitindo a continuidade do processo terapêutico no conforto do seu próprio espaço.
            </p>
          </header>

          <div className="text-slate-300 space-y-6 text-base sm:text-lg leading-relaxed font-light">
            <div id="como-funciona" className="p-6 rounded-2xl bg-[#0e1e4a]/60 border border-[#1e3878]">
              <h2 className="text-xl font-bold text-white mb-2 font-['Plus_Jakarta_Sans']">
                Como Funciona a Modalidade Online?
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Daniel Paulo disponibiliza a modalidade de atendimento online para pessoas que residem em diferentes cidades ou que preferem a praticidade de realizar suas sessões a distância. O canal digital e o aplicativo de videochamada são combinados diretamente no primeiro contato.
              </p>
            </div>

            <h2 id="vantagens" className="text-2xl font-bold text-white font-['Plus_Jakarta_Sans'] pt-4">
              Vantagens da Sessão Remota
            </h2>
            <ul className="space-y-3 not-prose text-slate-300 text-base">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#4FD6F4] flex-shrink-0 mt-0.5" />
                <span><strong>Flexibilidade de localização:</strong> possibilidade de manter seus atendimentos mesmo durante viagens ou mudanças de cidade.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#4FD6F4] flex-shrink-0 mt-0.5" />
                <span><strong>Otimização de tempo:</strong> ausência de deslocamentos e trânsito na rotina diária.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#4FD6F4] flex-shrink-0 mt-0.5" />
                <span><strong>Mesmo rigor e ética:</strong> a relação de escuta, o sigilo e a qualidade da atenção analítica são exatamente os mesmos do encontro presencial.</span>
              </li>
            </ul>

            <h2 id="recomendacoes" className="text-2xl font-bold text-white font-['Plus_Jakarta_Sans'] pt-4">
              Recomendações para a Sessão Online
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-5 rounded-xl bg-[#081331] border border-[#162c66] space-y-2">
                <Lock className="w-5 h-5 text-[#4FD6F4]" />
                <h3 className="font-bold text-white text-base">Privacidade do Ambiente</h3>
                <p className="text-xs text-slate-300">
                  Procure um cômodo reservado onde você se sinta à vontade para falar livremente sem interrupções.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#081331] border border-[#162c66] space-y-2">
                <Monitor className="w-5 h-5 text-[#4FD6F4]" />
                <h3 className="font-bold text-white text-base">Conexão Estável</h3>
                <p className="text-xs text-slate-300">
                  Um dispositivo com câmera, microfone e conexão estável à internet para uma conversa fluida.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div id="agendamento" className="p-8 rounded-3xl bg-[#0b183d] border border-[#1e3878] text-center space-y-4">
            <h3 className="text-2xl font-bold text-white font-['Plus_Jakarta_Sans']">
              Quer saber mais sobre o atendimento online?
            </h3>
            <p className="text-sm text-slate-300 max-w-lg mx-auto font-light">
              Converse com Daniel Paulo pelo WhatsApp para esclarecer detalhes sobre o formato digital e verificar horários disponíveis.
            </p>
            <div>
              <a
                href={getWhatsAppUrl('Olá Daniel, gostaria de informações sobre o atendimento psicanalítico online.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm bg-[#4FD6F4] text-[#081331] hover:bg-[#36c5e5] transition-all shadow-md"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Agendar Consulta Online</span>
              </a>
            </div>
          </div>

        </article>

      </div>
    </>
  );
};
