import React from 'react';
import { Link } from 'react-router-dom';
import { SeoHead } from '../../components/seo/SeoHead';
import { Breadcrumbs } from '../../components/breadcrumbs/Breadcrumbs';
import { GraduationCap, BookOpen } from 'lucide-react';

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
            <div id="docencia-anhanguera" className="p-6 rounded-2xl bg-[#0e1e4a]/60 border border-[#1e3878] space-y-2">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#122456] flex items-center justify-center text-[#4FD6F4]">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white font-['Plus_Jakarta_Sans']">
                    Professor na Faculdade Anhanguera desde 01/04/2024
                  </h2>
                </div>
              </div>
            </div>

            {/* Secondary Pedagogical Experience */}
            <div id="coordenacao-unika" className="p-6 rounded-2xl bg-[#0e1e4a]/60 border border-[#1e3878] space-y-2">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#122456] flex items-center justify-center text-[#4FD6F4]">
                  <BookOpen className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white font-['Plus_Jakarta_Sans']">
                    Coordenador Pedagógico na Unika Negócios e Desenvolvimento Humano, de 01/2021 a 07/2025
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </article>

      </div>
    </>
  );
};
