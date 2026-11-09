import React, { useState } from 'react';
import { siteConfig } from '../../config/siteConfig';
import { Instagram, Play, ChevronDown, ChevronUp, ExternalLink, Sparkles } from 'lucide-react';

interface ReelItem {
  id: string;
  thumbnail: string;
  title: string;
  shortCaption: string;
  fullCaption: string;
  duration: string;
  instagramUrl: string;
}

const reelsData: ReelItem[] = [
  {
    id: 'reel-1',
    thumbnail: '/assets/reels/reel-01-thumbnail.webp',
    title: 'Por que nos escondemos atrás de máscaras sociais?',
    shortCaption: 'Você já sentiu que passa o dia interpretando um personagem para agradar e ser aceito?',
    fullCaption: 'Você já sentiu que passa o dia interpretando um personagem para agradar e ser aceito? No ambiente profissional, nos relacionamentos e nas redes sociais, sustentar uma fachada de perfeição consome uma quantidade enorme de energia psíquica. A psicanálise é um convite para suspender essa armadura e habitar sua verdade com tranquilidade.',
    duration: '0:58',
    instagramUrl: 'https://www.instagram.com/reel/DcO3t7BPchQ/',
  },
  {
    id: 'reel-2',
    thumbnail: '/assets/reels/reel-02-thumbnail.webp',
    title: 'O que a procrastinação realmente está tentando dizer?',
    shortCaption: 'Não é preguiça nem falta de força de vontade. Adiar é uma tentativa de evitar afeto desconfortável.',
    fullCaption: 'Não é preguiça nem falta de força de vontade. Adiar tarefas essenciais é quase sempre uma tentativa inconsciente de regular o humor imediato para se esquivar do medo da crítica, do erro ou da imperfeição. Compreender a raiz emocional da paralisia é o primeiro passo para agir com leveza e clareza.',
    duration: '1:12',
    instagramUrl: 'https://www.instagram.com/p/DcJNOxXxj9O/',
  },
  {
    id: 'reel-3',
    thumbnail: '/assets/reels/reel-03-thumbnail.webp',
    title: 'A coragem de escutar a si mesmo na psicanálise',
    shortCaption: 'Falar abertamente sobre o que nos dói sem medo de julgamentos é o início de um novo caminho.',
    fullCaption: 'Falar abertamente sobre o que nos dói sem medo de julgamentos é o início de um novo caminho. Na sessão psicanalítica, o tempo é o seu. Não há cobranças morais, conselhos prontos ou receitas mágicas — há espaço para ressignificar repetições e reconectar-se com seu desejo genuíno.',
    duration: '1:04',
    instagramUrl: 'https://www.instagram.com/reel/DcET9GxR0gz/',
  },
];

export const ReelsSection: React.FC = () => {
  const [expandedReels, setExpandedReels] = useState<Record<string, boolean>>({});

  const toggleExpand = (id: string) => {
    setExpandedReels((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section id="reflexoes-em-video" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Reflexões em vídeo no Instagram">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#4FD6F4] uppercase">
            <Sparkles className="w-4 h-4" />
            <span>Reflexões em Vídeo</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white font-['Plus_Jakarta_Sans']">
            Pílulas de Autoconhecimento & Psicanálise
          </h2>
          <p className="text-sm sm:text-base text-slate-300 font-light max-w-2xl">
            Vídeos curtos gravados por Daniel Paulo sobre comportamento, inteligência emocional e a prática da escuta clínica.
          </p>
        </div>

        {siteConfig.social.instagram && (
          <a
            href={siteConfig.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0e1e4a] border border-[#1e3878] text-[#4FD6F4] hover:text-white hover:bg-[#162c66] text-xs sm:text-sm font-semibold transition-all self-start md:self-auto"
          >
            <Instagram className="w-4 h-4" />
            <span>Ver perfil no Instagram</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-70" />
          </a>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {reelsData.map((reel) => {
          const isExpanded = Boolean(expandedReels[reel.id]);

          return (
            <article
              key={reel.id}
              className="group bg-[#0e1e4a]/70 border border-[#1e3878] rounded-3xl overflow-hidden hover:border-[#4FD6F4]/50 transition-all duration-300 flex flex-col justify-between shadow-xl"
            >
              <div>
                {/* Reel Video Thumbnail Container */}
                <div className="relative aspect-[9/13] w-full overflow-hidden bg-[#060e24]">
                  <img
                    src={reel.thumbnail}
                    alt={reel.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    width="450"
                    height="650"
                  />
                  
                  {/* Subtle Scrims */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e1e4a] via-transparent to-black/40" />

                  {/* Top Badges: Instagram + Duration */}
                  <div className="absolute top-4 inset-x-4 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-white text-[11px] font-medium">
                      <Instagram className="w-3.5 h-3.5 text-[#4FD6F4]" />
                      <span>Reels</span>
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-slate-300 text-[11px] font-mono">
                      {reel.duration}
                    </span>
                  </div>

                  {/* Play Button Overlay */}
                  <a
                    href={reel.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 flex items-center justify-center group/play"
                    aria-label={`Assistir ao vídeo "${reel.title}" no Instagram`}
                  >
                    <div className="w-16 h-16 rounded-full bg-[#4FD6F4]/90 text-[#081331] flex items-center justify-center pl-1 shadow-2xl backdrop-blur-md transform group-hover/play:scale-110 group-hover:scale-105 transition-all duration-300">
                      <Play className="w-7 h-7 fill-current" />
                    </div>
                  </a>
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <h3 className="text-lg font-bold text-white group-hover:text-[#4FD6F4] transition-colors font-['Plus_Jakarta_Sans'] leading-snug">
                    {reel.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                    {isExpanded ? reel.fullCaption : reel.shortCaption}
                  </p>

                  <button
                    type="button"
                    onClick={() => toggleExpand(reel.id)}
                    className="inline-flex items-center gap-1 text-xs text-[#4FD6F4] hover:underline focus:outline-none pt-1"
                    aria-expanded={isExpanded}
                  >
                    <span>{isExpanded ? 'Recolher reflexão' : 'Ler reflexão completa'}</span>
                    {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              {/* Bottom CTA */}
              <div className="p-6 pt-0 border-t border-[#1e3878]/60 mt-3">
                <a
                  href={reel.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#122456] hover:bg-[#4FD6F4] text-slate-200 hover:text-[#081331] text-xs font-bold transition-all shadow-md focus:outline-none focus:ring-2 focus:ring-[#4FD6F4]"
                >
                  <Instagram className="w-4 h-4" />
                  <span>Assistir no Instagram</span>
                  <ExternalLink className="w-3 h-3 opacity-80" />
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
