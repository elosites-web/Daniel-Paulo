export interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string; description?: string }[];
}

export const mainNavItems: NavItem[] = [
  { label: 'Início', href: '/' },
  {
    label: 'Sobre',
    href: '/sobre',
    children: [
      { label: 'Apresentação Geral', href: '/sobre', description: 'Quem é Daniel Paulo e sua abordagem humanizada' },
      { label: 'Trajetória Profissional', href: '/sobre/trajetoria', description: 'Linha do tempo em docência, gestão e liderança' },
      { label: 'Formação e Certificados', href: '/sobre/formacao-e-certificados', description: 'Certificados e comprovações acadêmicas' },
    ],
  },
  {
    label: 'Psicanálise',
    href: '/psicanalise',
    children: [
      { label: 'Visão Geral', href: '/psicanalise', description: 'Fundamentos e princípios do processo analítico' },
      { label: 'O que é Psicanálise', href: '/psicanalise/o-que-e-psicanalise', description: 'Definição prática, escuta e inconsciente' },
      { label: 'Como Funciona a 1ª Sessão', href: '/psicanalise/como-funciona-a-primeira-sessao', description: 'O que esperar do primeiro contato acolhedor' },
      { label: 'Atendimento Online', href: '/psicanalise/atendimento-online', description: 'Modalidade digital com flexibilidade geográfica' },
      { label: 'Atendimento em Jundiaí', href: '/psicanalise/atendimento-presencial-em-jundiai', description: 'Encontros presenciais na cidade de Jundiaí-SP' },
      { label: 'Dúvidas Frequentes', href: '/psicanalise/perguntas-frequentes', description: 'Respostas diretas sobre o processo' },
    ],
  },
  {
    label: 'Autoconhecimento',
    href: '/terapia-e-autoconhecimento',
  },
  {
    label: 'Serviços',
    href: '/servicos',
    children: [
      { label: 'Todos os Serviços', href: '/servicos', description: 'Visão integrada das modalidades de atuação' },
      { label: 'Orientação Familiar', href: '/servicos/orientacao-familiar', description: 'Diálogo e reflexão sobre vínculos e convivência' },
      { label: 'Acompanhante Terapêutico', href: '/servicos/acompanhante-terapeutico', description: 'Mediação humanizada no cotidiano prático' },
      { label: 'Análise Comportamental', href: '/servicos/analise-comportamental', description: 'Mapeamento de hábitos e padrões de conduta' },
      { label: 'Consultoria Online', href: '/servicos/consultoria-online', description: 'Encontros de alinhamento e desenvolvimento' },
    ],
  },
  {
    label: 'Palestras',
    href: '/palestras-e-treinamentos',
    children: [
      { label: 'Visão Geral', href: '/palestras-e-treinamentos', description: 'Conteúdos em desenvolvimento pessoal e emocional' },
      { label: 'Para Empresas', href: '/palestras-e-treinamentos/para-empresas', description: 'Palestras corporativas e liderança humanizada' },
      { label: 'Para Escolas e Instituições', href: '/palestras-e-treinamentos/para-escolas-e-instituicoes', description: 'Treinamentos para comunidades educacionais' },
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
