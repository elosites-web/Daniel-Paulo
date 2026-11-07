import React from 'react';
import { Link } from 'react-router-dom';
import { SeoHead } from '../../components/seo/SeoHead';
import { Breadcrumbs } from '../../components/breadcrumbs/Breadcrumbs';
import { professionalExperiences } from '../../data/experience';
import { Briefcase, GraduationCap, Calendar, ArrowRight, CheckCircle2, HeartHandshake } from 'lucide-react';

export const TrajetoriaPage: React.FC = () => {
  return (
    <>
      <SeoHead
        title="Trajetória Profissional | Daniel Paulo"
        description="Linha do tempo profissional de Daniel Paulo: docência acadêmica na Faculdade Anhanguera, coordenação pedagógica na Unika e liderança em gestão e logística."
        canonicalPath="/sobre/trajetoria"
        breadcrumbs={[
          { name: 'Sobre', url: '/sobre' },
          { name: 'Trajetória', url: '/sobre/trajetoria' }
        ]}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 space-y-12">
        
        <Breadcrumbs
          items={[
            { label: 'Sobre Daniel Paulo', href: '/sobre' },
            { label: 'Trajetória Profissional' }
          ]}
        />

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#4FD6F4] uppercase">
            <Briefcase className="w-4 h-4" />
            <span>Experiência Documentada</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-['Plus_Jakarta_Sans']">
            Trajetória Profissional
          </h1>

          <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed">
            Apresentação cronológica da vivência em docência no ensino superior, coordenação pedagógica, liderança comercial e gestão logística.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative border-l-2 border-[#1e3878] ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-10 my-10">
          {professionalExperiences.map((exp, index) => (
            <div key={exp.id} className="relative group">
              
              {/* Dot on line */}
              <div
                className={`absolute -left-[31px] sm:-left-[47px] top-1.5 w-5 h-5 rounded-full border-4 border-[#081331] transition-transform duration-300 group-hover:scale-125 ${
                  exp.isCurrent ? 'bg-[#4FD6F4] ring-4 ring-[#4FD6F4]/20' : 'bg-[#1e3878]'
                }`}
                aria-hidden="true"
              />

              <div className="bg-[#0e1e4a]/70 border border-[#1e3878] rounded-2xl p-6 hover:border-[#4FD6F4]/40 transition-colors shadow-lg">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[#122456] text-[#4FD6F4] uppercase tracking-wider">
                      {exp.category === 'educacao' ? 'Docência & Educação' : 'Gestão & Liderança'}
                    </span>
                    {exp.isCurrent && (
                      <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-emerald-950 border border-emerald-500/40 text-emerald-400">
                        Cargo Atual
                      </span>
                    )}
                  </div>
                  
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 font-medium">
                    <Calendar className="w-3.5 h-3.5 text-[#4FD6F4]" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-[#4FD6F4] transition-colors font-['Plus_Jakarta_Sans']">
                  {exp.role}
                </h3>

                <p className="text-sm font-semibold text-slate-200 mt-1">
                  {exp.organization}
                </p>

                <p className="text-xs text-slate-400 mt-2">
                  Informação profissional confirmada para o histórico curricular de Daniel Paulo.
                </p>
              </div>

            </div>
          ))}
        </div>

        {/* Social / Voluntary section (discreet textual mention without religious imagery) */}
        <div className="p-8 rounded-3xl bg-[#0b183d] border border-[#1e3878] space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#4FD6F4] uppercase tracking-wider">
            <HeartHandshake className="w-4 h-4" />
            <span>Iniciativas Sociais e Voluntárias</span>
          </div>
          <h3 className="text-xl font-bold text-white font-['Plus_Jakarta_Sans']">
            Engajamento Comunitário e Música
          </h3>
          <p className="text-sm text-slate-300 leading-relaxed font-light">
            Além da atuação profissional em consultório, sala de aula e empresas, Daniel Paulo participa de iniciativas voluntárias de apoio social em sua comunidade, incluindo ações de corte de cabelo gratuito e projetos com música, compartilhando acolhimento prático no cotidiano.
          </p>
        </div>

        {/* Call to formation page */}
        <div className="text-center pt-4">
          <Link
            to="/sobre/formacao-e-certificados"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#4FD6F4] text-[#081331] font-bold text-sm hover:bg-[#36c5e5] transition-all shadow-md"
          >
            <span>Conhecer os Certificados e Pós-Graduações</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </>
  );
};
