export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  category: 'clinico' | 'desenvolvimento' | 'organizacional';
  route: string;
  bullets: string[];
}

export const servicesData: ServiceItem[] = [
  {
    id: 'psicanalise',
    slug: 'atendimento-psicanalitico',
    title: 'Atendimento Psicanalítico',
    shortDescription: 'Escuta acolhedora e atenta voltada à investigação do inconsciente, elaboração de conflitos e autoconhecimento.',
    fullDescription: 'O processo psicanalítico oferece um espaço neutro e livre de julgamentos morais para que cada pessoa fale livremente sobre suas inquietações, repetições, angústias e história de vida. Disponível nas modalidades online e presencial em Jundiaí-SP.',
    category: 'clinico',
    route: '/psicanalise',
    bullets: [
      'Espaço acolhedor e confidencial',
      'Atendimento online e presencial em Jundiaí',
      'Foco em autoconhecimento e ressignificação',
      'Sem promessas simplistas ou fórmulas mágicas'
    ],
  },
  {
    id: 'orientacao-familiar',
    slug: 'orientacao-familiar',
    title: 'Orientação Familiar',
    shortDescription: 'Apoio reflexivo para famílias que buscam aprimorar o diálogo e compreender dinâmicas relacionais.',
    fullDescription: 'A orientação familiar abre um canal de escuta para questões de convivência, mediação de momentos desafiadores e reflexão conjunta sobre os papéis e vínculos afetivos.',
    category: 'clinico',
    route: '/servicos/orientacao-familiar',
    bullets: [
      'Reflexão sobre dinâmicas e rotinas de convivência',
      'Promoção de escuta mútua e respeito às individualidades',
      'Alinhamento com o contexto particular de cada família'
    ],
  },
  {
    id: 'acompanhante-terapeutico',
    slug: 'acompanhante-terapeutico',
    title: 'Acompanhante Terapêutico (AT)',
    shortDescription: 'Acompanhamento cuidadoso em contextos do cotidiano, promovendo autonomia e suporte continuado.',
    fullDescription: 'Atuação como acompanhante terapêutico em cenários práticos e rotinas, colaborando para a reinserção social, superação de bloqueios cotidianos e suporte relacional humanizado.',
    category: 'clinico',
    route: '/servicos/acompanhante-terapeutico',
    bullets: [
      'Presença humanizada no ambiente cotidiano',
      'Estímulo à autonomia e reinserção social',
      'Atendimento responsável e alinhado aos limites éticos'
    ],
  },
  {
    id: 'analise-comportamental',
    slug: 'analise-comportamental',
    title: 'Análise Comportamental',
    shortDescription: 'Mapeamento de padrões de conduta, hábitos de resposta e estilo de comunicação interpessoal.',
    fullDescription: 'Processo voltado à identificação de tendências comportamentais e modos habituais de reação frente a desafios, favorecendo escolhas mais conscientes na vida pessoal e profissional.',
    category: 'desenvolvimento',
    route: '/servicos/analise-comportamental',
    bullets: [
      'Identificação de padrões repetitivos e hábitos',
      'Reconhecimento de fortalezas e pontos de atenção',
      'Abordagem reflexiva, sem diagnósticos psicológicos'
    ],
  },
  {
    id: 'consultoria-online',
    slug: 'consultoria-online',
    title: 'Consultoria Online',
    shortDescription: 'Encontros individuais remotos para alinhamento estratégico, tomada de decisão e autodesenvolvimento.',
    fullDescription: 'Espaço estruturado via atendimento digital para clarear objetivos, analisar impasses profissionais ou de desenvolvimento humano e organizar próximos passos.',
    category: 'desenvolvimento',
    route: '/servicos/consultoria-online',
    bullets: [
      'Flexibilidade de horários no formato digital',
      'Foco em clareza de contexto e planejamento pessoal',
      'Diálogo objetivo e pragmático'
    ],
  },
  {
    id: 'palestras-treinamentos',
    slug: 'palestras-e-treinamentos',
    title: 'Palestras e Treinamentos',
    shortDescription: 'Conteúdos reflexivos e práticos para empresas, instituições educacionais e equipes em desenvolvimento.',
    fullDescription: 'Encontros dinâmicos que conectam inteligência emocional, autoconhecimento, liderança humanizada e superação da procrastinação, desenhados para grupos corporativos e ambientes acadêmicos.',
    category: 'organizacional',
    route: '/palestras-e-treinamentos',
    bullets: [
      'Temas: Inteligência Emocional, Procrastinação, Máscaras Sociais',
      'Formatos presenciais ou transmissões remotas',
      'Linguagem acessível, reflexiva e transformadora'
    ],
  },
];
