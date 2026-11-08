import React from 'react';
import { Link } from 'react-router-dom';
import { SeoHead } from '../../components/seo/SeoHead';
import { Breadcrumbs } from '../../components/breadcrumbs/Breadcrumbs';
import { servicesData } from '../../data/services';
import { getWhatsAppUrl } from '../../config/siteConfig';
import { Compass, BookOpen, Users, ArrowRight, MessageCircle, ShieldCheck } from 'lucide-react';

export const ServicosHubPage: React.FC = () => {
  return (
    <>
      <SeoHead
        title="Serviços | Daniel Paulo"
        description="Conheça os serviços oferecidos por Daniel Paulo: atendimento psicanalítico, orientação familiar, acompanhante terapêutico, análise comportamental, consultoria online e palestras."
        canonicalPath="/servicos"
        breadcrumbs={[
          { name: 'Serviços', url: '/servicos' }
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 space-y-16">
        
        <Breadcrumbs items={[{ label: 'Serviços' }]} />

        {/* Hero */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-semibold tracking-wider text-[#4FD6F4] uppercase">
            Áreas de Atuação
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-['Plus_Jakarta_Sans']">
            Serviços e Modalidades de Atendimento
          </h1>
          <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed">
            Abordagens dedicadas à escuta, ao autoconhecimento e ao desenvolvimento pessoal e institucional, conduzidas por Daniel Paulo com transparência e responsabilidade ética.
          </p>
        </div>

        {/* Services List */}
        <div id="lista-servicos" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((svc) => (
            <div
              key={svc.id}
              id={svc.id}
              className="bg-[#0e1e4a]/60 border border-[#1e3878] rounded-2xl p-7 hover:border-[#4FD6F4]/50 transition-all flex flex-col justify-between shadow-lg hover:shadow-2xl hover:shadow-[#4FD6F4]/5"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#122456] flex items-center justify-center text-[#4FD6F4] mb-5">
                  {svc.category === 'clinico' && <Compass className="w-6 h-6" />}
                  {svc.category === 'desenvolvimento' && <BookOpen className="w-6 h-6" />}
                  {svc.category === 'organizacional' && <Users className="w-6 h-6" />}
                </div>

                <h2 className="text-xl font-bold text-white mb-2.5 font-['Plus_Jakarta_Sans']">
                  {svc.title}
                </h2>

                <p className="text-sm text-slate-300 leading-relaxed font-light mb-4">
                  {svc.shortDescription}
                </p>

                <ul className="space-y-1.5 text-xs text-slate-400 mb-6">
                  {svc.bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#4FD6F4] font-bold">•</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-[#1e3878]/60 flex items-center justify-between">
                <Link
                  to={svc.route}
                  className="text-sm font-semibold text-[#4FD6F4] hover:underline flex items-center gap-1.5"
                >
                  <span>Conhecer detalhes</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href={getWhatsAppUrl(`Olá Daniel, gostaria de informações sobre o serviço de ${svc.title}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-[#122456] hover:bg-[#4FD6F4] hover:text-[#081331] text-slate-300 transition-colors"
                  aria-label={`Conversar sobre ${svc.title} no WhatsApp`}
                >
                  <MessageCircle className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Ethical Box */}
        <div id="criterio-etico" className="p-8 rounded-3xl bg-[#0b183d] border border-[#1e3878] max-w-4xl mx-auto flex items-start gap-4 text-xs sm:text-sm text-slate-300 font-light">
          <ShieldCheck className="w-6 h-6 text-[#4FD6F4] flex-shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong>Critério e Clareza:</strong> Daniel Paulo atua estritamente dentro dos parâmetros informados. Não são ofertados tratamentos médicos ou procedimentos que exijam registros em conselhos de classe não informados. Para esclarecer qual modalidade atende melhor às suas necessidades atuais, entre em contato diretamente pelo WhatsApp.
          </p>
        </div>

      </div>
    </>
  );
};
