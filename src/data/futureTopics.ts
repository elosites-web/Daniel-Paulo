export interface FutureTopic {
  id: string;
  title: string;
  description: string;
  primaryKeyword: string;
  category: string;
}

/**
 * Pautas editoriais futuras para planejamento de conteúdo de Daniel Paulo.
 * Conforme instrução do briefing: NÃO são exibidas como artigos publicados.
 */
export const futureTopicsList: FutureTopic[] = [
  {
    id: 'pauta-1',
    title: 'Terapia online x presencial: semelhanças e particularidades',
    description: 'Análise equilibrada sobre como o enquadre analítico se adapta ao ambiente digital e quais as particularidades do encontro presencial.',
    primaryKeyword: 'terapia online x presencial',
    category: 'Terapia online',
  },
  {
    id: 'pauta-2',
    title: 'Neuropsicanálise: o que é e como une mente e cérebro',
    description: 'Apresentação didática da interface entre a neurociência moderna e a teoria psicanalítica da subjetividade.',
    primaryKeyword: 'o que e neuropsicanalise',
    category: 'Psicanálise',
  },
  {
    id: 'pauta-3',
    title: 'Quando buscar acompanhamento terapêutico',
    description: 'Sinais cotidianos, momentos de transição de vida e o valor da escuta profissional antes de crises agudas.',
    primaryKeyword: 'quando fazer terapia',
    category: 'Autoconhecimento',
  },
  {
    id: 'pauta-4',
    title: 'Inteligência emocional no trabalho e na liderança',
    description: 'Como a escuta de si e a empatia fortalecem a tomada de decisão e a gestão de conflitos no meio profissional.',
    primaryKeyword: 'inteligencia emocional no trabalho',
    category: 'Vida profissional e liderança',
  },
  {
    id: 'pauta-5',
    title: 'Diferença entre psicanálise, psicologia e psiquiatria',
    description: 'Esclarecimento neutro e respeitoso sobre o escopo, métodos e complementaridades entre as três áreas de cuidado.',
    primaryKeyword: 'diferenca psicanalise psicologia psiquiatria',
    category: 'Psicanálise',
  },
  {
    id: 'pauta-6',
    title: 'Autoconhecimento: por onde começar a olhar para dentro',
    description: 'Reflexões sobre a coragem de desacelerar, examinar contradições e acolher a própria história com generosidade.',
    primaryKeyword: 'como começar autoconhecimento',
    category: 'Autoconhecimento',
  },
  {
    id: 'pauta-7',
    title: 'Máscaras sociais no ambiente de trabalho: sobrevivência ou exaustão?',
    description: 'A tênue linha entre a etiqueta profissional necessária e o esgotamento por representação de personagens.',
    primaryKeyword: 'mascaras sociais trabalho',
    category: 'Comportamento e emoções',
  },
];
