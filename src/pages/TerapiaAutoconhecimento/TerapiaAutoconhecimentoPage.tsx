import React from 'react';
import { Link } from 'react-router-dom';
import { SeoHead } from '../../components/seo/SeoHead';
import { Breadcrumbs } from '../../components/breadcrumbs/Breadcrumbs';
import { ReadingProgressBar } from '../../components/ui/ReadingProgressBar';
import { getWhatsAppUrl } from '../../config/siteConfig';
import { Sparkles, MessageCircle, ArrowRight, Compass, Eye, ShieldCheck, Smile, Clock } from 'lucide-react';

export const TerapiaAutoconhecimentoPage: React.FC = () => {
  return (
    <>
      <SeoHead
        title="Terapia e Autoconhecimento | Daniel Paulo"
        description="Reflexões sobre autoconhecimento, máscaras sociais, inteligência emocional e procrastinação com Daniel Paulo. Um caminho ético e humanizado para olhar para dentro."
        canonicalPath="/terapia-e-autoconhecimento"
        breadcrumbs={[
          { name: 'Terapia e Autoconhecimento', url: '/terapia-e-autoconhecimento' }
        ]}
      />

      <ReadingProgressBar label="Progresso de leitura: Terapia e Autoconhecimento" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 space-y-16">
        
        <Breadcrumbs items={[{ label: 'Terapia e Autoconhecimento' }]} />

        {/* Hero */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#4FD6F4] uppercase">
            <Sparkles className="w-4 h-4" />
            <span>Desenvolvimento Humano</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-['Plus_Jakarta_Sans'] leading-tight">
            Autoconhecimento: a coragem de olhar para dentro
          </h1>

          <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed">
            Uma abordagem reflexiva para compreender seus padrões, lidar com expectativas externas e habitar sua história com maior serenidade e clareza.
          </p>
        </div>

        {/* 4 Pillars of reflection */}
        <div id="pilares-reflexao" className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div id="identidade" className="p-8 rounded-3xl bg-[#0e1e4a]/60 border border-[#1e3878] space-y-4 hover:border-[#4FD6F4]/40 transition-colors">
            <div className="w-12 h-12 rounded-2xl bg-[#122456] flex items-center justify-center text-[#4FD6F4]">
              <Eye className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold text-white font-['Plus_Jakarta_Sans']">
              Identidade e Máscaras Sociais
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light">
              Desempenhar papéis no trabalho e na família é natural. O desgaste ocorre quando criamos um personagem rígido apenas para obter aprovação ou evitar conflitos. O autoconhecimento ajuda a distinguir o que é seu e o que é pura exigência alheia.
            </p>
            <div className="pt-2">
              <Link to="/blog" className="text-xs font-semibold text-[#4FD6F4] hover:underline flex items-center gap-1">
                <span>Ver reflexão no blog</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          <div id="inteligencia-emocional" className="p-8 rounded-3xl bg-[#0e1e4a]/60 border border-[#1e3878] space-y-4 hover:border-[#4FD6F4]/40 transition-colors">
            <div className="w-12 h-12 rounded-2xl bg-[#122456] flex items-center justify-center text-[#4FD6F4]">
              <Compass className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold text-white font-['Plus_Jakarta_Sans']">
              Inteligência Emocional e Relações
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light">
              Inteligência emocional não significa engolir sentimentos ou manter um sorriso forçado. Trata-se de saber identificar o que sentimos, dar nome à angústia e responder de forma menos impulsiva aos conflitos do dia a dia.
            </p>
            <div className="pt-2">
              <Link to="/servicos/orientacao-familiar" className="text-xs font-semibold text-[#4FD6F4] hover:underline flex items-center gap-1">
                <span>Conhecer orientação familiar</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          <div id="procrastinacao" className="p-8 rounded-3xl bg-[#0e1e4a]/60 border border-[#1e3878] space-y-4 hover:border-[#4FD6F4]/40 transition-colors">
            <div className="w-12 h-12 rounded-2xl bg-[#122456] flex items-center justify-center text-[#4FD6F4]">
              <Clock className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold text-white font-['Plus_Jakarta_Sans']">
              Compreendendo a Procrastinação
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light">
              Adiar tarefas raramente é preguiça. Frequentemente é uma resposta à ansiedade, ao perfeccionismo ou ao medo do erro e do julgamento alheio. Compreender a raiz emocional da paralisia é o primeiro passo para agir com leveza.
            </p>
            <div className="pt-2">
              <Link to="/palestras-e-treinamentos" className="text-xs font-semibold text-[#4FD6F4] hover:underline flex items-center gap-1">
                <span>Temas de palestras e treinamentos</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          <div id="ressignificacao" className="p-8 rounded-3xl bg-[#0e1e4a]/60 border border-[#1e3878] space-y-4 hover:border-[#4FD6F4]/40 transition-colors">
            <div className="w-12 h-12 rounded-2xl bg-[#122456] flex items-center justify-center text-[#4FD6F4]">
              <Smile className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold text-white font-['Plus_Jakarta_Sans']">
              Ressignificação e Autonomia
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light">
              Nós não podemos mudar os fatos ocorridos no passado, mas podemos transformar a narrativa que sustentamos sobre eles. Dar um novo sentido à própria história liberta recursos internos para o presente.
            </p>
            <div className="pt-2">
              <Link to="/psicanalise" className="text-xs font-semibold text-[#4FD6F4] hover:underline flex items-center gap-1">
                <span>Como a psicanálise apoia esse processo</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

        </div>

        {/* Ethical commitment */}
        <div className="p-8 rounded-3xl bg-[#0b183d] border border-[#1e3878] text-center space-y-4">
          <div className="flex items-center justify-center gap-2 text-[#4FD6F4] text-xs font-semibold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4" />
            <span>Processo Respeitoso</span>
          </div>
          <h3 className="text-2xl font-bold text-white font-['Plus_Jakarta_Sans']">
            Sem promessas de transformação instantânea
          </h3>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
            O autoconhecimento genuíno é uma construção contínua. Ele não oferece atalhos mágicos, mas proporciona a estabilidade de saber quem você é quando as certezas externas oscilam.
          </p>
          <div className="pt-3">
            <a
              href={getWhatsAppUrl('Olá Daniel, gostaria de conversar sobre processos de autoconhecimento e atendimento.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm bg-[#4FD6F4] text-[#081331] hover:bg-[#36c5e5] transition-all shadow-md"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Iniciar Diálogo pelo WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </>
  );
};
