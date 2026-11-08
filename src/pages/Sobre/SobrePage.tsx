import React from 'react';
import { Link } from 'react-router-dom';
import { SeoHead } from '../../components/seo/SeoHead';
import { Breadcrumbs } from '../../components/breadcrumbs/Breadcrumbs';
import { siteConfig, getWhatsAppUrl } from '../../config/siteConfig';
import { MessageCircle, ArrowRight, Shield, Award, BookOpen, Heart, GraduationCap } from 'lucide-react';

export const SobrePage: React.FC = () => {
  return (
    <>
      <SeoHead
        title="Sobre Daniel Paulo | Psicanalista e Terapeuta"
        description="Conheça a trajetória de Daniel Paulo, psicanalista, terapeuta, professor e palestrante. Uma abordagem humanizada, ética e acolhedora em Jundiaí-SP."
        canonicalPath="/sobre"
        breadcrumbs={[
          { name: 'Sobre', url: '/sobre' }
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 space-y-16">
        
        <Breadcrumbs items={[{ label: 'Sobre Daniel Paulo' }]} />

        {/* Hero Section of Sobre */}
        <div id="apresentacao" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-[#1e3878] bg-[#060e24]">
              <img
                src="/assets/fotos-daniel/daniel-paulo-terno-sofa.webp"
                alt="Daniel Paulo sentado em sofá claro vestindo terno azul-marinho"
                className="w-full h-full object-cover object-top"
                loading="eager"
                decoding="async"
                width="480"
                height="600"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#081331] via-transparent to-transparent opacity-60 pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-[#081331]/90 backdrop-blur-md border border-[#1e3878]/60 text-center">
                <span className="text-sm font-bold text-white block font-['Plus_Jakarta_Sans']">
                  {siteConfig.name}
                </span>
                <span className="text-xs text-[#4FD6F4] font-medium">
                  {siteConfig.profession} em Jundiaí-SP
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#4FD6F4] uppercase">
              <Heart className="w-4 h-4" />
              <span>Apresentação Institucional</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-['Plus_Jakarta_Sans'] leading-tight">
              Uma escuta humanizada pautada no acolhimento e na ausência de julgamentos
            </h1>

            <div className="space-y-4 text-slate-300 text-base sm:text-lg leading-relaxed font-light">
              <p>
                Daniel Paulo atua como psicanalista, terapeuta, professor acadêmico e palestrante, dedicando sua atividade ao desenvolvimento pessoal e profissional de pessoas e equipes.
              </p>
              <p>
                No atendimento psicanalítico, oferece um espaço acolhedor e confidencial, onde cada pessoa é ouvida com respeito integral à sua singularidade, sem fórmulas mágicas ou promessas simplistas de cura.
              </p>
              <p>
                Sua formação multidisciplinar articula estudos continuados em <strong>Psicanálise</strong>, <strong>Neurociências</strong>, <strong>Filosofia</strong> e <strong>Antropologia</strong>, além de sólida bagagem em liderança, coordenação pedagógica e gestão comercial e de pessoas.
              </p>
              <p>
                Paralelamente à atividade profissional, desenvolve iniciativas voluntárias de engajamento social, como ações de apoio comunitário e música, acreditando no impacto transformador da empatia no cotidiano.
              </p>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <a
                href={getWhatsAppUrl('Olá Daniel, li sua biografia no site e gostaria de agendar uma conversa.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm bg-[#4FD6F4] text-[#081331] hover:bg-[#36c5e5] transition-all shadow-md"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Conversar com Daniel</span>
              </a>

              <Link
                to="/sobre/trajetoria"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-[#0e1e4a] text-white hover:bg-[#162c66] border border-[#1e3878] transition-colors"
              >
                <span>Ver Trajetória Profissional</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>

        {/* Pillars / Values Section */}
        <div id="pilares" className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
          <div className="p-7 rounded-2xl bg-[#0e1e4a]/60 border border-[#1e3878] space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#122456] flex items-center justify-center text-[#4FD6F4]">
              <Shield className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white font-['Plus_Jakarta_Sans']">
              Sigilo e Neutralidade
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed font-light">
              Espaço absolutamente confidencial e neutro, onde não há julgamentos morais sobre sentimentos, histórias ou escolhas pessoais.
            </p>
          </div>

          <div className="p-7 rounded-2xl bg-[#0e1e4a]/60 border border-[#1e3878] space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#122456] flex items-center justify-center text-[#4FD6F4]">
              <BookOpen className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white font-['Plus_Jakarta_Sans']">
              Formação Multidisciplinar
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed font-light">
              Diálogo constante entre a teoria do inconsciente, o funcionamento cerebral e a história das ideias filosóficas e culturais.
            </p>
          </div>

          <div className="p-7 rounded-2xl bg-[#0e1e4a]/60 border border-[#1e3878] space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#122456] flex items-center justify-center text-[#4FD6F4]">
              <GraduationCap className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white font-['Plus_Jakarta_Sans']">
              Docência e Educação
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed font-light">
              Atuação acadêmica ativa no ensino superior, transmitindo princípios de desenvolvimento pessoal, inteligência emocional e liderança.
            </p>
          </div>
        </div>

        {/* Subpages Navigation Links */}
        <div id="certificados" className="p-8 rounded-3xl bg-[#0b183d] border border-[#1e3878] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-xl font-bold text-white font-['Plus_Jakarta_Sans']">
              Deseja conhecer os certificados acadêmicos?
            </h3>
            <p className="text-sm text-slate-300 font-light">
              Acesse a galeria com os comprovantes oficiais de pós-graduação e extensão emitidos por instituições registradas.
            </p>
          </div>
          <Link
            to="/sobre/formacao-e-certificados"
            className="px-6 py-3.5 rounded-xl bg-[#4FD6F4] text-[#081331] font-bold text-sm hover:bg-[#36c5e5] transition-all whitespace-nowrap shadow-md"
          >
            Ver Certificados Oficiais
          </Link>
        </div>

      </div>
    </>
  );
};
