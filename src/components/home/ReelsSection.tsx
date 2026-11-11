import React from 'react';
import { Instagram, Play, ExternalLink, Sparkles } from 'lucide-react';

interface ReelItem {
  id: string;
  thumbnail: string;
  title: string;
  caption: string;
  url: string;
}

const reelsData: ReelItem[] = [
  {
    id: 'reel-1',
    thumbnail: '/assets/reels/reel-01-thumbnail.webp',
    title: 'Papéis ou personagens?',
    caption: 'Na vida, todos nós ocupamos papéis: somos pais, filhos, professores, profissionais, líderes, amigos… Cada papel traz responsabilidades e expectativas sociais.',
    url: 'https://www.instagram.com/reel/DcET9GxR0gz/',
  },
  {
    id: 'reel-2',
    thumbnail: '/assets/reels/reel-02-thumbnail.webp',
    title: 'Eu sou freudiano. Mas não sou ateu.',
    caption: 'Estudar alguém não significa tornar-se alguém.',
    url: 'https://www.instagram.com/reel/DcJNOxXxj9O/',
  },
  {
    id: 'reel-3',
    thumbnail: '/assets/reels/reel-03-thumbnail.webp',
    title: 'Quando eu escolheria Pedro em vez de Judas?',
    caption: 'Defeito exposto pode ser tratado. Mas aquilo que está escondido atrás de uma máscara dificilmente será transformado.',
    url: 'https://www.instagram.com/reel/DcO3t7BPchQ/',
  },
];

export const ReelsSection: React.FC = () => {
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
            Conteúdo publicado em @danielpaulo_psicanalista
          </p>
        </div>

        <a
          href="https://www.instagram.com/danielpaulo_psicanalista/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0e1e4a] border border-[#1e3878] text-[#4FD6F4] hover:text-white hover:bg-[#162c66] text-xs sm:text-sm font-semibold transition-all self-start md:self-auto shadow-md"
        >
          <Instagram className="w-4 h-4" />
          <span>Ver mais no Instagram</span>
          <ExternalLink className="w-3.5 h-3.5 opacity-70" />
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {reelsData.map((reel) => {
          return (
            <article
              key={reel.id}
              className="group bg-[#0e1e4a]/70 border border-[#1e3878] rounded-3xl overflow-hidden hover:border-[#4FD6F4]/50 transition-all duration-300 flex flex-col justify-between shadow-xl"
            >
              <div>
                {/* Reel Video Thumbnail Container (inteira 9:16) */}
                <div className="relative aspect-[9/16] w-full overflow-hidden bg-[#060e24]">
                  <img
                    src={reel.thumbnail}
                    alt={`Daniel Paulo em podcast: ${reel.title}`}
                    className="w-full h-full object-cover aspect-[9/16] group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    decoding="async"
                    width="540"
                    height="960"
                  />
                  
                  {/* Subtle Scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e1e4a] via-transparent to-black/30" />

                  {/* Play Button Overlay */}
                  <a
                    href={reel.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 flex items-center justify-center group/play"
                    aria-label={`Assistir no Instagram: ${reel.title}`}
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
                    {reel.caption}
                  </p>
                </div>
              </div>

              {/* Bottom CTA */}
              <div className="p-6 pt-0 border-t border-[#1e3878]/60 mt-3">
                <a
                  href={reel.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Assistir no Instagram: ${reel.title}`}
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
