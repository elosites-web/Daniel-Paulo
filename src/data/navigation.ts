export interface NavItem {
  label: string;
  shortLabel?: string;
  href: string;
  children?: { label: string; href: string; description?: string }[];
}

export const mainNavItems: NavItem[] = [
  { label: 'Início', href: '/' },
  {
    label: 'Sobre',
    href: '/sobre',
    children: [
      { label: 'Apresentação', href: '/sobre', description: 'Quem é Daniel Paulo e sua abordagem' },
      { label: 'Trajetória', href: '/sobre/trajetoria', description: 'Linha do tempo profissional e clínica' },
      { label: 'Formação', href: '/sobre/formacao-e-certificados', description: 'Certificados e comprovações acadêmicas' },
    ],
  },
  {
    label: 'Psicanálise',
    href: '/psicanalise',
    children: [
      { label: 'Visão Geral', href: '/psicanalise', description: 'Fundamentos e princípios do processo' },
      { label: 'O que é', href: '/psicanalise/o-que-e-psicanalise', description: 'Escuta clínica, fala e inconsciente' },
      { label: 'Primeira Sessão', href: '/psicanalise/como-funciona-a-primeira-sessao', description: 'Como funciona o primeiro encontro' },
      { label: 'Online', href: '/psicanalise/atendimento-online', description: 'Atendimento à distância por vídeo' },
      { label: 'Presencial', href: '/psicanalise/atendimento-presencial-em-jundiai', description: 'Atendimento presencial em Jundiaí-SP' },
      { label: 'Dúvidas', href: '/psicanalise/perguntas-frequentes', description: 'Perguntas frequentes sobre o processo' },
    ],
  },
  {
    label: 'Terapia',
    shortLabel: 'Terapia',
    href: '/terapia-e-autoconhecimento',
  },
  {
    label: 'Serviços',
    href: '/servicos',
    children: [
      { label: 'Visão Geral', href: '/servicos', description: 'Modalidades integradas de atuação' },
      { label: 'Orientação Familiar', href: '/servicos/orientacao-familiar', description: 'Diálogo e reflexão familiar' },
      { label: 'Acompanhante Terapêutico', href: '/servicos/acompanhante-terapeutico', description: 'Mediação humanizada no cotidiano' },
      { label: 'Análise Comportamental', href: '/servicos/analise-comportamental', description: 'Mapeamento de hábitos e padrões' },
      { label: 'Consultoria Online', href: '/servicos/consultoria-online', description: 'Encontros individuais de alinhamento' },
    ],
  },
  {
    label: 'Palestras',
    href: '/palestras-e-treinamentos',
    children: [
      { label: 'Visão Geral', href: '/palestras-e-treinamentos', description: 'Encontros reflexivos e formativos' },
      { label: 'Empresas', href: '/palestras-e-treinamentos/para-empresas', description: 'Liderança e desenvolvimento humano' },
      { label: 'Escolas', href: '/palestras-e-treinamentos/para-escolas-e-instituicoes', description: 'Comunidades educacionais e famílias' },
    ],
  },
  {
    label: 'Docência',
    href: '/professor',
  },
  {
    label: 'Blog',
    href: '/blog',
  },
  {
    label: 'Contato',
    href: '/contato',
  },
];
