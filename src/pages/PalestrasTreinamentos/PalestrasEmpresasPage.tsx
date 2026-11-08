import React from 'react';
import { Link } from 'react-router-dom';
import { SeoHead } from '../../components/seo/SeoHead';
import { Breadcrumbs } from '../../components/breadcrumbs/Breadcrumbs';
import { getWhatsAppUrl } from '../../config/siteConfig';
import { Building2, MessageCircle, ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';

export const PalestrasEmpresasPage: React.FC = () => {
  return (
    <>
      <SeoHead
        title="Palestras para Empresas | Daniel Paulo"
        description="Palestras e treinamentos corporativos com Daniel Paulo. Temas em inteligência emocional, liderança humanizada e combate à procrastinação."
        canonicalPath="/palestras-e-treinamentos/para-empresas"
        breadcrumbs={[
          { name: 'Palestras e Treinamentos', url: '/palestras-e-treinamentos' },
          { name: 'Para Empresas', url: '/palestras-e-treinamentos/para-empresas' }
        ]}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 space-y-12">
        
        <Breadcrumbs
          items={[
            { label: 'Palestras e Treinamentos', href: '/palestras-e-treinamentos' },
            { label: 'Para Empresas' }
          ]}
        />

        <article id="conteudo" className="space-y-8">
          <header className="space-y-4">
            <span className="text-xs font-semibold tracking-wider text-[#4FD6F4] uppercase">
              Âmbito Corporativo
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-['Plus_Jakarta_Sans'] leading-tight">
              Palestras Corporativas e Desenvolvimento de Lideranças
            </h1>
            <p className="text-lg text-slate-300 font-light leading-relaxed">
              Conteúdos práticos e reflexivos que unem saúde emocional, redução de estresse e relações de confiança no trabalho.
            </p>
          </header>

          <div className="text-slate-300 space-y-6 text-base sm:text-lg leading-relaxed font-light">
            <div id="destaque" className="p-6 rounded-2xl bg-[#0e1e4a]/60 border border-[#1e3878]">
              <h2 className="text-xl font-bold text-white mb-2 font-['Plus_Jakarta_Sans']">
                Temas de Destaque para Organizações
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                As palestras conduzidas por Daniel Paulo utilizam sua experiência pregressa em coordenação pedagógica, gestão comercial e liderança de equipes, trazendo reflexões reais e aplicáveis à rotina dos negócios.
              </p>
            </div>

            <div id="eixos-tematicos" className="space-y-4 pt-2">
              <h2 className="text-2xl font-bold text-white font-['Plus_Jakarta_Sans'] pt-2">
                Eixos Temáticos Sugeridos
              </h2>
              <div className="space-y-4 not-prose">
                <div id="tema-inteligencia-emocional" className="p-5 rounded-2xl bg-[#081331] border border-[#162c66] space-y-1">
                  <h3 className="font-bold text-white text-base">Inteligência Emocional e Máscaras no Trabalho</h3>
                  <p className="text-xs sm:text-sm text-slate-300">
                    Como evitar o esgotamento profissional por excesso de representação e construir relações profissionais genuínas e maduras.
                  </p>
                </div>

                <div id="tema-procrastinacao" className="p-5 rounded-2xl bg-[#081331] border border-[#162c66] space-y-1">
                  <h3 className="font-bold text-white text-base">Procrastinação: Por Que Adiamos o Que Importa?</h3>
                  <p className="text-xs sm:text-sm text-slate-300">
                    Compreendendo a ansiedade e o perfeccionismo por trás do adiamento de decisões e metas corporativas.
                  </p>
                </div>

                <div id="tema-lideranca-humanizada" className="p-5 rounded-2xl bg-[#081331] border border-[#162c66] space-y-1">
                  <h3 className="font-bold text-white text-base">Liderança Humanizada e Comunicação Não-Violenta</h3>
                  <p className="text-xs sm:text-sm text-slate-300">
                    O poder da escuta atenta para engajar colaboradores e mediar conflitos interpessoais de forma construtiva.
                  </p>
                </div>
              </div>
            </div>

            <p className="text-sm text-slate-400">
              * Os formatos (presenciais em sua empresa ou transmissões online), duração e adaptação ao público da sua organização são customizados em conversa prévia.
            </p>
          </div>

          <div id="proposta" className="p-8 rounded-3xl bg-[#0b183d] border border-[#1e3878] text-center space-y-4">
            <h3 className="text-2xl font-bold text-white font-['Plus_Jakarta_Sans']">
              Interessado em levar esta palestra para sua equipe?
            </h3>
            <p className="text-sm text-slate-300 max-w-lg mx-auto font-light">
              Envie uma mensagem pelo WhatsApp para alinhar propostas, datas de agenda e detalhes com Daniel Paulo.
            </p>
            <div>
              <a
                href={getWhatsAppUrl('Olá Daniel, gostaria de consultar informações sobre palestras para empresas.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm bg-[#4FD6F4] text-[#081331] hover:bg-[#36c5e5] transition-all shadow-md"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Solicitar Proposta para Empresa</span>
              </a>
            </div>
          </div>
        </article>

      </div>
    </>
  );
};
