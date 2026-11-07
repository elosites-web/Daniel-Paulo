import React from 'react';
import { SeoHead } from '../../components/seo/SeoHead';
import { Breadcrumbs } from '../../components/breadcrumbs/Breadcrumbs';
import { CertificateGallery } from '../../components/certificates/CertificateGallery';
import { Award, ShieldCheck, GraduationCap, CheckCircle } from 'lucide-react';

export const FormacaoCertificadosPage: React.FC = () => {
  return (
    <>
      <SeoHead
        title="Formação e Certificados | Daniel Paulo"
        description="Consulte os certificados e títulos de pós-graduação e extensão de Daniel Paulo: Antropologia, Filosofia, Neurociências, Neuropsicanálise e Neuropsicopedagogia."
        canonicalPath="/sobre/formacao-e-certificados"
        breadcrumbs={[
          { name: 'Sobre', url: '/sobre' },
          { name: 'Formação e Certificados', url: '/sobre/formacao-e-certificados' }
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 space-y-12">
        
        <Breadcrumbs
          items={[
            { label: 'Sobre Daniel Paulo', href: '/sobre' },
            { label: 'Formação e Certificados' }
          ]}
        />

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#4FD6F4] uppercase">
            <GraduationCap className="w-4 h-4" />
            <span>Transparência Curricular</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-['Plus_Jakarta_Sans']">
            Formação Acadêmica e Certificados
          </h1>

          <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed">
            Consulte os comprovantes oficiais devidamente verificados, contemplando pós-graduações lato sensu, extensões universitárias e capacitações de liderança com emissão certificada.
          </p>
        </div>

        {/* Notice of compliance */}
        <div className="max-w-4xl mx-auto p-4 rounded-xl bg-[#0e1e4a]/60 border border-[#1e3878] flex items-center gap-3 text-xs text-slate-300">
          <ShieldCheck className="w-5 h-5 text-[#4FD6F4] flex-shrink-0" />
          <p>
            <strong>Garantia de integridade:</strong> Todos os certificados exibidos abaixo possuem registro documental verificado pelas instituições de ensino, com dados cadastrais e identificadores sensíveis protegidos em respeito à LGPD.
          </p>
        </div>

        {/* The 7 verified certificates gallery with lightbox */}
        <CertificateGallery />

        {/* Ethical commitment card */}
        <div className="p-8 rounded-3xl bg-[#0b183d] border border-[#1e3878] max-w-4xl mx-auto text-center space-y-4">
          <h3 className="text-xl font-bold text-white font-['Plus_Jakarta_Sans']">
            Compromisso com a Verdade e a Ética Profissional
          </h3>
          <p className="text-sm text-slate-300 leading-relaxed font-light">
            Em conformidade com as boas práticas éticas, apenas títulos e cursos com comprovantes oficiais disponibilizados são divulgados como formações concluídas. Não utilizamos títulos fictícios ou certificações sem comprovação correspondente.
          </p>
        </div>

      </div>
    </>
  );
};
