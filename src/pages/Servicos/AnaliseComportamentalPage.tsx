import React from 'react';
import { Link } from 'react-router-dom';
import { SeoHead } from '../../components/seo/SeoHead';
import { Breadcrumbs } from '../../components/breadcrumbs/Breadcrumbs';
import { getWhatsAppUrl } from '../../config/siteConfig';
import { BookOpen, MessageCircle, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const AnaliseComportamentalPage: React.FC = () => {
  return (
    <>
      <SeoHead
        title="Análise Comportamental | Daniel Paulo"
        description="Mapeamento e reflexão sobre padrões de comportamento e hábitos com Daniel Paulo. Abordagem de desenvolvimento pessoal e autoconhecimento."
        canonicalPath="/servicos/analise-comportamental"
        breadcrumbs={[
          { name: 'Serviços', url: '/servicos' },
          { name: 'Análise Comportamental', url: '/servicos/analise-comportamental' }
        ]}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 space-y-12">
        
        <Breadcrumbs
          items={[
            { label: 'Serviços', href: '/servicos' },
            { label: 'Análise Comportamental' }
          ]}
        />

        <article className="space-y-8">
          <header className="space-y-4">
            <span className="text-xs font-semibold tracking-wider text-[#4FD6F4] uppercase">
              Padrões & Hábitos
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-['Plus_Jakarta_Sans'] leading-tight">
              Análise Comportamental
            </h1>
            <p className="text-lg text-slate-300 font-light leading-relaxed">
              Mapeamento consciente de hábitos, reações habituais sob pressão e estilos de comunicação pessoal e profissional.
            </p>
          </header>

          <div className="text-slate-300 space-y-6 text-base sm:text-lg leading-relaxed font-light">
            <div className="p-6 rounded-2xl bg-[#0e1e4a]/60 border border-[#1e3878]">
              <h2 className="text-xl font-bold text-white mb-2 font-['Plus_Jakarta_Sans']">
                Objetivo do Mapeamento
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Muitas vezes repetimos formas de responder ao estresse, de liderar ou de negociar sem perceber a origem desses automatismos. A análise comportamental busca trazer clareza para esses movimentos recorrentes, apoiando decisões mais coerentes com seus objetivos.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-white font-['Plus_Jakarta_Sans'] pt-4">
              Pontos de Foco
            </h2>
            <ul className="space-y-3 not-prose text-slate-300 text-base">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#4FD6F4] flex-shrink-0 mt-0.5" />
                <span>Identificação de gatilhos cotidianos que levam à procrastinação ou desgaste.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#4FD6F4] flex-shrink-0 mt-0.5" />
                <span>Reconhecimento de forças comportamentais e pontos de atenção nas relações interpessoais.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#4FD6F4] flex-shrink-0 mt-0.5" />
                <span>Alinhamento entre intenção e ação no trabalho e na convivência.</span>
              </li>
            </ul>

            <div className="p-5 rounded-2xl bg-[#081331] border border-[#162c66] flex items-start gap-3 text-xs text-slate-400">
              <ShieldCheck className="w-5 h-5 text-[#4FD6F4] flex-shrink-0 mt-0.5" />
              <p>
                <strong>Nota ética e conceitual:</strong> Este serviço possui caráter de autoconhecimento e reflexão de hábitos. Não corresponde a avaliação psicológica, perícia, laudo técnico ou à ciência denominada Análise do Comportamento da área de Psicologia.
              </p>
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-[#0b183d] border border-[#1e3878] text-center space-y-4">
            <h3 className="text-2xl font-bold text-white font-['Plus_Jakarta_Sans']">
              Deseja conhecer como funciona a análise comportamental?
            </h3>
            <p className="text-sm text-slate-300 max-w-lg mx-auto font-light">
              Envie uma mensagem pelo WhatsApp para alinhar suas expectativas e entender como esse processo pode apoiar seu desenvolvimento.
            </p>
            <div>
              <a
                href={getWhatsAppUrl('Olá Daniel, gostaria de informações sobre o serviço de análise comportamental.')}
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
