import React from 'react';
import { Link } from 'react-router-dom';
import { SeoHead } from '../../components/seo/SeoHead';
import { Breadcrumbs } from '../../components/breadcrumbs/Breadcrumbs';
import { getWhatsAppUrl } from '../../config/siteConfig';
import { GraduationCap, BookOpen, Calendar, ArrowRight, MessageCircle, Briefcase, CheckCircle2 } from 'lucide-react';

export const ProfessorPage: React.FC = () => {
  return (
    <>
      <SeoHead
        title="Professor Daniel Paulo | Atuação Acadêmica e Docência"
        description="Conheça a atuação docente de Daniel Paulo: professor na Faculdade Anhanguera, coordenação pedagógica e experiência em liderança e desenvolvimento humano."
        canonicalPath="/professor"
        breadcrumbs={[
          { name: 'Professor', url: '/professor' }
        ]}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 space-y-12">
        
        <Breadcrumbs items={[{ label: 'Professor Daniel Paulo' }]} />

        <article className="space-y-8">
          <header className="space-y-4">
            <span className="text-xs font-semibold tracking-wider text-[#4FD6F4] uppercase">
              Docência & Formação Acadêmica
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-['Plus_Jakarta_Sans'] leading-tight">
              A Docência no Ensino Superior e o Desenvolvimento Humano
            </h1>
            <p className="text-lg text-slate-300 font-light leading-relaxed">
              O compromisso com a formação de profissionais através de uma prática de ensino dialógica, ética e voltada ao pensamento crítico.
            </p>
          </header>

          <div className="text-slate-300 space-y-6 text-base sm:text-lg leading-relaxed font-light">
            {/* Primary Card */}
            <div className="p-6 rounded-2xl bg-[#0e1e4a]/60 border border-[#1e3878] space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#122456] flex items-center justify-center text-[#4FD6F4]">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">Atuação Ativa</span>
                  <h2 className="text-xl font-bold text-white font-['Plus_Jakarta_Sans']">
                    Professor na Faculdade Anhanguera
                  </h2>
                </div>
              </div>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Daniel Paulo atua como docente na <strong>Faculdade Anhanguera</strong> desde 01 de abril de 2024, contribuindo para a qualificação de estudantes e articulando fundamentos de desenvolvimento humano, relações interpessoais e ética.
              </p>
            </div>

            {/* Secondary Pedagogical Experience */}
            <div className="p-6 rounded-2xl bg-[#0e1e4a]/60 border border-[#1e3878] space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#122456] flex items-center justify-center text-[#4FD6F4]">
                  <BookOpen className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 font-medium">Janeiro de 2021 a Julho de 2025</span>
                  <h2 className="text-xl font-bold text-white font-['Plus_Jakarta_Sans']">
                    Coordenador Pedagógico — Unika Negócios e Desenvolvimento Humano
                  </h2>
                </div>
              </div>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Durante mais de quatro anos, esteve à frente da estruturação de trilhas educacionais, planejamento de conteúdos e acompanhamento formativo de turmas e instrutores voltados ao crescimento profissional.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-white font-['Plus_Jakarta_Sans'] pt-4">
              Conexão entre Docência, Gestão e Clínica
            </h2>
            <p>
              A vivência combinada de sala de aula e posições anteriores de supervisão geral e liderança logística fornece a Daniel uma visão prática das angústias, pressões de desempenho e desafios de aprendizagem que marcam o cotidiano dos alunos e profissionais em formação.
            </p>
            <p>
              Sua metodologia pedagógica valoriza a participação ativa, a problematização e a construção coletiva de sentido, distanciando-se de aulas puramente expositivas e engessadas.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-[#0b183d] border border-[#1e3878] text-center space-y-4">
            <h3 className="text-2xl font-bold text-white font-['Plus_Jakarta_Sans']">
              Convites para Aulas Magnas e Eventos Acadêmicos
            </h3>
            <p className="text-sm text-slate-300 max-w-lg mx-auto font-light">
              Para consultas sobre participação em bancas, semanas acadêmicas, palestras universitárias ou projetos educacionais:
            </p>
            <div>
              <a
                href={getWhatsAppUrl('Olá Daniel, gostaria de consultar informações sobre eventos acadêmicos e docência.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm bg-[#4FD6F4] text-[#081331] hover:bg-[#36c5e5] transition-all shadow-md"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Conversar sobre Docência</span>
              </a>
            </div>
          </div>
        </article>

      </div>
    </>
  );
};
