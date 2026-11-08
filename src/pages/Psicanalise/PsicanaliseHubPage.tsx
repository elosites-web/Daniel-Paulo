import React from 'react';
import { Link } from 'react-router-dom';
import { SeoHead } from '../../components/seo/SeoHead';
import { Breadcrumbs } from '../../components/breadcrumbs/Breadcrumbs';
import { siteConfig, getWhatsAppUrl } from '../../config/siteConfig';
import { 
  Compass, 
  HelpCircle, 
  Clock, 
  Monitor, 
  MapPin, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck 
} from 'lucide-react';
import { WhatsAppIcon } from '../../components/ui/WhatsAppIcon';

const psicanaliseSubpages = [
  {
    title: 'O que é Psicanálise',
    href: '/psicanalise/o-que-e-psicanalise',
    description: 'Compreenda os fundamentos da investigação do inconsciente, a fala livre e o valor da escuta neutra.',
    icon: Compass,
  },
  {
    title: 'Como Funciona a 1ª Sessão',
    href: '/psicanalise/como-funciona-a-primeira-sessao',
    description: 'Entenda como acontece a aproximação inicial e o alinhamento de expectativas sem pressões.',
    icon: Clock,
  },
  {
    title: 'Atendimento Online',
    href: '/psicanalise/atendimento-online',
    description: 'Flexibilidade e confidencialidade para realizar sessões de qualquer localidade.',
    icon: Monitor,
  },
  {
    title: 'Atendimento em Jundiaí-SP',
    href: '/psicanalise/atendimento-presencial-em-jundiai',
    description: 'Encontros presenciais em espaço acolhedor e reservado na cidade de Jundiaí.',
    icon: MapPin,
  },
  {
    title: 'Perguntas Frequentes',
    href: '/psicanalise/perguntas-frequentes',
    description: 'Respostas diretas sobre duração, frequência, indicações e funcionamento do processo.',
    icon: HelpCircle,
  },
];

export const PsicanaliseHubPage: React.FC = () => {
  return (
    <>
      <SeoHead
        title="Psicanálise | Atendimento com Daniel Paulo"
        description="Conheça a abordagem psicanalítica humanizada de Daniel Paulo. Um espaço confidencial para investigação do inconsciente, escuta atenta e autoconhecimento."
        canonicalPath="/psicanalise"
        breadcrumbs={[
          { name: 'Psicanálise', url: '/psicanalise' }
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 space-y-16">
        
        <Breadcrumbs items={[{ label: 'Psicanálise' }]} />

        {/* Hero Hub */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#4FD6F4] uppercase">
            <Compass className="w-4 h-4" />
            <span>Processo Analítico</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-['Plus_Jakarta_Sans'] leading-tight">
            A psicanálise como espaço de escuta, acolhimento e ressignificação
          </h1>

          <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed">
            Um convite para você falar livremente sobre suas inquietações, conflitos e repetições em um ambiente seguro, neutro e livre de julgamentos morais.
          </p>
        </div>

        {/* Informative grid */}
        <div id="subpaginas" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {psicanaliseSubpages.map((sub) => {
            const Icon = sub.icon;
            return (
              <Link
                key={sub.href}
                to={sub.href}
                className="group bg-[#0e1e4a]/60 border border-[#1e3878] rounded-2xl p-7 hover:border-[#4FD6F4]/50 transition-all duration-300 hover:shadow-2xl hover:shadow-[#4FD6F4]/5 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#122456] flex items-center justify-center text-[#4FD6F4] mb-5 group-hover:scale-105 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h2 className="text-xl font-bold text-white group-hover:text-[#4FD6F4] transition-colors font-['Plus_Jakarta_Sans'] mb-2.5">
                    {sub.title}
                  </h2>
                  <p className="text-sm text-slate-300 leading-relaxed font-light">
                    {sub.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#1e3878]/60 flex items-center gap-2 text-xs font-semibold text-[#4FD6F4]">
                  <span>Acessar conteúdo</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            );
          })}
        </div>

        {/* Ethical disclaimer card */}
        <div id="etica" className="p-8 rounded-3xl bg-[#0b183d] border border-[#1e3878] space-y-4 max-w-4xl mx-auto">
          <div className="flex items-center gap-2 text-sm font-semibold text-[#4FD6F4]">
            <ShieldCheck className="w-5 h-5" />
            <span>Fundamentos e Limites Éticos</span>
          </div>
          <p className="text-sm text-slate-300 leading-relaxed font-light">
            A psicanálise é um campo de saber e prática terapêutica fundado na investigação da mente e do inconsciente por meio da linguagem. Ela não substitui acompanhamento médico, psiquiátrico ou psicológico clínico regulamentado, tampouco realiza promessas de cura milagrosa ou diagnósticos patológicos.
          </p>
        </div>

        {/* Direct CTA */}
        <div id="agendamento" className="text-center space-y-4 pt-4">
          <h3 className="text-2xl font-bold text-white font-['Plus_Jakarta_Sans']">
            Pronto para conversar sobre o atendimento?
          </h3>
          <p className="text-sm text-slate-300 max-w-md mx-auto">
            Tire suas dúvidas diretamente com Daniel Paulo pelo WhatsApp e conheça as opções disponíveis.
          </p>
          <div>
            <a
              href={getWhatsAppUrl('Olá Daniel, gostaria de saber mais sobre o atendimento psicanalítico.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm bg-[#4FD6F4] text-[#081331] hover:bg-[#36c5e5] transition-all shadow-lg"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>Conversar com Daniel Paulo</span>
            </a>
          </div>
        </div>

      </div>
    </>
  );
};
