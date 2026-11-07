import React from 'react';
import { Link } from 'react-router-dom';
import { SeoHead } from '../../components/seo/SeoHead';
import { Breadcrumbs } from '../../components/breadcrumbs/Breadcrumbs';
import { getWhatsAppUrl } from '../../config/siteConfig';
import { Compass, MessageCircle, ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';

export const OQueEAPsicanalisePage: React.FC = () => {
  return (
    <>
      <SeoHead
        title="O que é Psicanálise | Conceitos e Prática"
        description="Entenda o que é a psicanálise: a investigação do inconsciente por meio da palavra, o papel da associação livre e a ausência de julgamento moral."
        canonicalPath="/psicanalise/o-que-e-psicanalise"
        breadcrumbs={[
          { name: 'Psicanálise', url: '/psicanalise' },
          { name: 'O que é Psicanálise', url: '/psicanalise/o-que-e-psicanalise' }
        ]}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 space-y-12">
        
        <Breadcrumbs
          items={[
            { label: 'Psicanálise', href: '/psicanalise' },
            { label: 'O que é Psicanálise' }
          ]}
        />

        <article className="space-y-8">
          
          <header className="space-y-4">
            <span className="text-xs font-semibold tracking-wider text-[#4FD6F4] uppercase">
              Fundamentos Teóricos e Práticos
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-['Plus_Jakarta_Sans'] leading-tight">
              O que é psicanálise: a investigação do inconsciente pela fala
            </h1>
            <p className="text-lg text-slate-300 font-light leading-relaxed">
              Uma abordagem que investiga as raízes inconscientes de nossos comportamentos, angústias e repetições, abrindo espaço para escolhas mais conscientes e autênticas.
            </p>
          </header>

          <div className="prose prose-invert max-w-none text-slate-300 space-y-6 text-base sm:text-lg leading-relaxed font-light">
            <div className="p-6 rounded-2xl bg-[#0e1e4a]/60 border border-[#1e3878]">
              <h2 className="text-xl font-bold text-white mb-2 font-['Plus_Jakarta_Sans']">
                Definição Essencial
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                A psicanálise é um método de escuta e investigação da subjetividade humana. Seu princípio fundamental parte da constatação de que nossas emoções, sintomas, escolhas amorosas, travas profissionais e reações cotidianas são amplamente influenciados por desejos, memórias e conflitos que não estão na superfície da nossa consciência imediata.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-white font-['Plus_Jakarta_Sans'] pt-4">
              A Regra Fundamental: Falar com Liberdade
            </h2>
            <p>
              Ao contrário de uma conversa comum do dia a dia, onde nos preocupamos constantemente em parecer lógicos, coerentes ou moralmente aprovados, o espaço analítico incentiva a chamada <em>associação livre</em>.
            </p>
            <p>
              Isso significa dizer o que vier à mente: pensamentos incoerentes, dúvidas que parecem bobas, lembranças repentinas, sentimentos dos quais você tem vergonha ou sonhos. É exatamente nas pequenas frestas e deslizes da linguagem que o inconsciente se revela.
            </p>

            <h2 className="text-2xl font-bold text-white font-['Plus_Jakarta_Sans'] pt-4">
              Para que serve o processo analítico?
            </h2>
            <ul className="space-y-2.5 not-prose text-slate-300 text-base">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-[#4FD6F4] flex-shrink-0 mt-0.5" />
                <span><strong>Compreender padrões repetitivos:</strong> perceber por que você se coloca recorrentemente nas mesmas ciladas afetivas ou profissionais.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-[#4FD6F4] flex-shrink-0 mt-0.5" />
                <span><strong>Elaborar momentos de transição:</strong> lutos, términos de relacionamentos, crises de identidade ou mudanças de carreira.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-[#4FD6F4] flex-shrink-0 mt-0.5" />
                <span><strong>Acolher a própria singularidade:</strong> desatar expectativas herdadas de familiares e aprender a viver sua própria verdade.</span>
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-white font-['Plus_Jakarta_Sans'] pt-4">
              Limites Éticos e Esclarecimentos
            </h2>
            <p>
              A psicanálise não oferece prescrições farmacológicas nem emite laudos médicos. O foco de Daniel Paulo é fornecer uma escuta acolhedora, respeitosa e rigorosa, sem promessas irrealistas de soluções fáceis para a complexidade da alma humana.
            </p>
          </div>

          {/* Footer Call to Action */}
          <div className="pt-8 border-t border-[#1e3878] flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link
              to="/psicanalise/como-funciona-a-primeira-sessao"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#4FD6F4] hover:underline"
            >
              <span>Próximo: Como funciona a 1ª sessão</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href={getWhatsAppUrl('Olá Daniel, li o conteúdo sobre psicanálise e gostaria de agendar uma conversa.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm bg-[#4FD6F4] text-[#081331] hover:bg-[#36c5e5] transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Conversar pelo WhatsApp</span>
            </a>
          </div>

        </article>

      </div>
    </>
  );
};
