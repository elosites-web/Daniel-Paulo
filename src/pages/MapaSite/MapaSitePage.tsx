import React from 'react';
import { Link } from 'react-router-dom';
import { SeoHead } from '../../components/seo/SeoHead';
import { Breadcrumbs } from '../../components/breadcrumbs/Breadcrumbs';
import { Map, ArrowRight } from 'lucide-react';

const siteMapSections = [
  {
    category: 'Institucional',
    links: [
      { label: 'Página Inicial (Home)', href: '/' },
      { label: 'Sobre Daniel Paulo', href: '/sobre' },
      { label: 'Trajetória Profissional', href: '/sobre/trajetoria' },
      { label: 'Formação Acadêmica e Certificados', href: '/sobre/formacao-e-certificados' },
      { label: 'Terapia e Autoconhecimento', href: '/terapia-e-autoconhecimento' },
    ],
  },
  {
    category: 'Psicanálise',
    links: [
      { label: 'Visão Geral sobre Psicanálise', href: '/psicanalise' },
      { label: 'O que é Psicanálise', href: '/psicanalise/o-que-e-psicanalise' },
      { label: 'Como Funciona a 1ª Sessão', href: '/psicanalise/como-funciona-a-primeira-sessao' },
      { label: 'Atendimento Psicanalítico Online', href: '/psicanalise/atendimento-online' },
      { label: 'Atendimento Presencial em Jundiaí-SP', href: '/psicanalise/atendimento-presencial-em-jundiai' },
      { label: 'Perguntas Frequentes', href: '/psicanalise/perguntas-frequentes' },
    ],
  },
  {
    category: 'Serviços',
    links: [
      { label: 'Visão Geral de Serviços', href: '/servicos' },
      { label: 'Orientação Familiar', href: '/servicos/orientacao-familiar' },
      { label: 'Acompanhante Terapêutico (AT)', href: '/servicos/acompanhante-terapeutico' },
      { label: 'Análise Comportamental', href: '/servicos/analise-comportamental' },
      { label: 'Consultoria Online', href: '/servicos/consultoria-online' },
    ],
  },
  {
    category: 'Palestras e Treinamentos',
    links: [
      { label: 'Visão Geral de Palestras', href: '/palestras-e-treinamentos' },
      { label: 'Palestras para Empresas', href: '/palestras-e-treinamentos/para-empresas' },
      { label: 'Palestras para Escolas e Instituições', href: '/palestras-e-treinamentos/para-escolas-e-instituicoes' },
    ],
  },
  {
    category: 'Docência Acadêmica',
    links: [
      { label: 'Professor Daniel Paulo', href: '/professor' },
    ],
  },
  {
    category: 'SEO Local',
    links: [
      { label: 'Psicanalista em Jundiaí-SP', href: '/psicanalista-em-jundiai' },
    ],
  },
  {
    category: 'Blog & Editorial',
    links: [
      { label: 'Blog e Ensaios Reflexivos', href: '/blog' },
    ],
  },
  {
    category: 'Contato & Legal',
    links: [
      { label: 'Fale Conosco', href: '/contato' },
      { label: 'Política de Privacidade (LGPD)', href: '/politica-de-privacidade' },
      { label: 'Termos de Uso', href: '/termos-de-uso' },
    ],
  },
];

export const MapaSitePage: React.FC = () => {
  return (
    <>
      <SeoHead
        title="Mapa do Site | Daniel Paulo"
        description="Índice completo de todas as páginas, rotas institucionais, serviços e artigos do site de Daniel Paulo."
        canonicalPath="/mapa-do-site"
        breadcrumbs={[
          { name: 'Mapa do Site', url: '/mapa-do-site' }
        ]}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 space-y-12">
        
        <Breadcrumbs items={[{ label: 'Mapa do Site' }]} />

        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#4FD6F4] uppercase">
            <Map className="w-4 h-4" />
            <span>Índice Estrutural</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-['Plus_Jakarta_Sans']">
            Mapa do Site
          </h1>

          <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed">
            Consulte a hierarquia e acesse diretamente qualquer página ou serviço do site institucional de Daniel Paulo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteMapSections.map((sec) => (
            <div
              key={sec.category}
              className="p-6 rounded-2xl bg-[#0e1e4a]/60 border border-[#1e3878] space-y-4"
            >
              <h2 className="text-lg font-bold text-white font-['Plus_Jakarta_Sans'] border-b border-[#1e3878] pb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#4FD6F4]"></span>
                <span>{sec.category}</span>
              </h2>

              <ul className="space-y-2.5 text-sm">
                {sec.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-slate-300 hover:text-[#4FD6F4] transition-colors flex items-center justify-between group"
                    >
                      <span>{link.label}</span>
                      <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-[#4FD6F4]" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </>
  );
};
