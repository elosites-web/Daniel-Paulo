import React from 'react';
import { Link } from 'react-router-dom';
import { SeoHead } from '../../components/seo/SeoHead';
import { Breadcrumbs } from '../../components/breadcrumbs/Breadcrumbs';
import { getWhatsAppUrl } from '../../config/siteConfig';
import { Users, Building2, GraduationCap, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import { WhatsAppIcon } from '../../components/ui/WhatsAppIcon';

export const PalestrasTreinamentosPage: React.FC = () => {
  return (
    <>
      <SeoHead
        title="Palestras e Treinamentos | Daniel Paulo"
        description="Palestras e treinamentos em inteligência emocional, liderança humanizada e desenvolvimento pessoal com Daniel Paulo para empresas, escolas e instituições."
        canonicalPath="/palestras-e-treinamentos"
        breadcrumbs={[
          { name: 'Palestras e Treinamentos', url: '/palestras-e-treinamentos' }
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 space-y-16">
        
        <Breadcrumbs items={[{ label: 'Palestras e Treinamentos' }]} />

        {/* Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#4FD6F4] uppercase">
              <Users className="w-4 h-4" />
              <span>Comunicação e Impacto Coletivo</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-['Plus_Jakarta_Sans'] leading-tight">
              Palestras e treinamentos voltados ao desenvolvimento humano
            </h1>

            <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed">
              Com uma linguagem acolhedora, provocativa e prática, Daniel Paulo conduz encontros reflexivos sobre inteligência emocional, identidade, liderança e superação da procrastinação.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row gap-4">
              <a
                href={getWhatsAppUrl('Olá Daniel, gostaria de consultar informações sobre contratação de palestras ou treinamentos.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm bg-[#4FD6F4] text-[#081331] hover:bg-[#36c5e5] transition-all shadow-md"
              >
                <WhatsAppIcon className="w-4 h-4 fill-current" />
                <span>Consultar Disponibilidade de Agenda</span>
              </a>

              <Link
                to="/palestras-e-treinamentos/para-empresas"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-[#0e1e4a] text-white hover:bg-[#162c66] border border-[#1e3878] transition-colors"
              >
                <span>Palestras Corporativas</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center">
            <div className="relative aspect-[3/4] w-full max-w-sm rounded-3xl overflow-hidden shadow-2xl border border-[#1e3878] bg-[#060e24]">
              <img
                src="/assets/fotos-daniel/daniel-paulo-palestrante-microfone-pb.webp"
                alt="Daniel Paulo com microfone em mãos durante palestra"
                className="w-full h-full object-cover aspect-[3/4]"
                loading="lazy"
                decoding="async"
                width="400"
                height="533"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#081331] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-4 left-4 right-4 text-center p-3 rounded-xl bg-[#081331]/80 backdrop-blur-sm border border-[#1e3878]/60">
                <span className="text-xs font-semibold text-[#4FD6F4] uppercase tracking-wider block">
                  Daniel Paulo
                </span>
                <span className="text-xs text-slate-300">
                  Professor e Palestrante
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* 2 Main Segments */}
        {/* Temas Principais */}
        <div id="temas-principais" className="p-8 rounded-3xl bg-[#0e1e4a]/60 border border-[#1e3878] space-y-6 shadow-xl">
          <h2 className="text-2xl font-bold text-white font-['Plus_Jakarta_Sans']">
            Palestras e Treinamentos
          </h2>
          <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
            Temas voltados à reflexão subjetiva e desenvolvimento pessoal:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 not-prose">
            <div className="p-4 rounded-xl bg-[#081331] border border-[#162c66] flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#4FD6F4] flex-shrink-0" />
              <span className="text-sm font-semibold text-white">Papéis e Personagens</span>
            </div>
            <div className="p-4 rounded-xl bg-[#081331] border border-[#162c66] flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#4FD6F4] flex-shrink-0" />
              <span className="text-sm font-semibold text-white">Máscaras Sociais</span>
            </div>
            <div className="p-4 rounded-xl bg-[#081331] border border-[#162c66] flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#4FD6F4] flex-shrink-0" />
              <span className="text-sm font-semibold text-white">Procrastinação</span>
            </div>
            <div className="p-4 rounded-xl bg-[#081331] border border-[#162c66] flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#4FD6F4] flex-shrink-0" />
              <span className="text-sm font-semibold text-white">Autoconhecimento</span>
            </div>
          </div>
        </div>

        {/* 2 Main Segments */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div id="empresas" className="p-8 rounded-3xl bg-[#0e1e4a]/60 border border-[#1e3878] space-y-4 hover:border-[#4FD6F4]/50 transition-all flex flex-col justify-between shadow-xl">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#122456] flex items-center justify-center text-[#4FD6F4] mb-4">
                <Building2 className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-white font-['Plus_Jakarta_Sans'] mb-2">
                Para Empresas e Organizações
              </h2>
              <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed mb-4">
                Palestras e treinamentos corporativos com temas em papéis e personagens, máscaras sociais, procrastinação e autoconhecimento.
              </p>
            </div>

            <Link
              to="/palestras-e-treinamentos/para-empresas"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#4FD6F4] hover:underline pt-3 border-t border-[#1e3878]/60"
            >
              <span>Ver detalhes para empresas</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div id="escolas" className="p-8 rounded-3xl bg-[#0e1e4a]/60 border border-[#1e3878] space-y-4 hover:border-[#4FD6F4]/50 transition-all flex flex-col justify-between shadow-xl">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#122456] flex items-center justify-center text-[#4FD6F4] mb-4">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-white font-['Plus_Jakarta_Sans'] mb-2">
                Para Escolas e Instituições Educacionais
              </h2>
              <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed mb-4">
                Palestras e encontros formativos para comunidades educacionais sobre identidade, convivência e autoconhecimento.
              </p>
            </div>

            <Link
              to="/palestras-e-treinamentos/para-escolas-e-instituicoes"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#4FD6F4] hover:underline pt-3 border-t border-[#1e3878]/60"
            >
              <span>Ver detalhes para escolas</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>

      </div>
    </>
  );
};
