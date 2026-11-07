import React from 'react';
import { Link } from 'react-router-dom';
import { SeoHead } from '../../components/seo/SeoHead';
import { Breadcrumbs } from '../../components/breadcrumbs/Breadcrumbs';
import { getWhatsAppUrl } from '../../config/siteConfig';
import { GraduationCap, MessageCircle, ArrowRight, CheckCircle2 } from 'lucide-react';

export const PalestrasEscolasPage: React.FC = () => {
  return (
    <>
      <SeoHead
        title="Palestras para Escolas e Instituições | Daniel Paulo"
        description="Palestras e encontros formativos para comunidades educacionais, professores e pais com Daniel Paulo. Diálogos sobre acolhimento, juventude e valores."
        canonicalPath="/palestras-e-treinamentos/para-escolas-e-instituicoes"
        breadcrumbs={[
          { name: 'Palestras e Treinamentos', url: '/palestras-e-treinamentos' },
          { name: 'Para Escolas e Instituições', url: '/palestras-e-treinamentos/para-escolas-e-instituicoes' }
        ]}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 space-y-12">
        
        <Breadcrumbs
          items={[
            { label: 'Palestras e Treinamentos', href: '/palestras-e-treinamentos' },
            { label: 'Para Escolas e Instituições' }
          ]}
        />

        <article className="space-y-8">
          <header className="space-y-4">
            <span className="text-xs font-semibold tracking-wider text-[#4FD6F4] uppercase">
              Comunidade Educacional
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-['Plus_Jakarta_Sans'] leading-tight">
              Palestras para Escolas e Instituições Educacionais
            </h1>
            <p className="text-lg text-slate-300 font-light leading-relaxed">
              Diálogos que aproximam educadores, estudantes e famílias em torno do acolhimento emocional, respeito mútuo e desenvolvimento integral.
            </p>
          </header>

          <div className="text-slate-300 space-y-6 text-base sm:text-lg leading-relaxed font-light">
            <div className="p-6 rounded-2xl bg-[#0e1e4a]/60 border border-[#1e3878]">
              <h2 className="text-xl font-bold text-white mb-2 font-['Plus_Jakarta_Sans']">
                A Educação como Espaço de Escuta
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                A experiência de Daniel Paulo no ambiente acadêmico como professor da Faculdade Anhanguera e ex-coordenador pedagógico permite uma interlocução direta e profunda com as dores e desafios da sala de aula atual.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-white font-['Plus_Jakarta_Sans'] pt-4">
              Públicos e Abordagens
            </h2>
            <div className="space-y-4 not-prose">
              <div className="p-5 rounded-2xl bg-[#081331] border border-[#162c66] space-y-1">
                <h3 className="font-bold text-white text-base">Encontros com Docentes e Equipes Pedagógicas</h3>
                <p className="text-xs sm:text-sm text-slate-300">
                  Reflexão sobre a sobrecarga emocional do professor, mediação de conflitos em sala e preservação da saúde mental na docência.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#081331] border border-[#162c66] space-y-1">
                <h3 className="font-bold text-white text-base">Diálogos com Pais e Responsáveis</h3>
                <p className="text-xs sm:text-sm text-slate-300">
                  Construção de pontes entre família e escola, limites afetivos e compreensão das angústias juvenis contemporâneas.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#081331] border border-[#162c66] space-y-1">
                <h3 className="font-bold text-white text-base">Palestras para Jovens e Estudantes</h3>
                <p className="text-xs sm:text-sm text-slate-300">
                  Temas sobre autenticidade, pressão por aceitação, escolhas de futuro e regulação emocional sem jargões.
                </p>
              </div>
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-[#0b183d] border border-[#1e3878] text-center space-y-4">
            <h3 className="text-2xl font-bold text-white font-['Plus_Jakarta_Sans']">
              Deseja realizar um encontro em sua escola?
            </h3>
            <p className="text-sm text-slate-300 max-w-lg mx-auto font-light">
              Entre em contato pelo WhatsApp com Daniel Paulo para planejar datas, temáticas e formatos adequados para sua instituição.
            </p>
            <div>
              <a
                href={getWhatsAppUrl('Olá Daniel, gostaria de consultar informações sobre palestras para escolas ou instituições.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm bg-[#4FD6F4] text-[#081331] hover:bg-[#36c5e5] transition-all shadow-md"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Solicitar Proposta para Escola</span>
              </a>
            </div>
          </div>
        </article>

      </div>
    </>
  );
};
