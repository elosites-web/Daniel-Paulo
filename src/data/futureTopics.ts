export interface FutureTopic {
  id: string;
  title: string;
  description: string;
  primaryKeyword: string;
  category: string;
  editorialStatus: string;
}

/**
 * Pautas editoriais propostas para avaliação e futuro desenvolvimento por Daniel Paulo.
 * Exibidas em seção separada no Blog com aviso de pauta em análise (não são artigos publicados).
 */
export const futureTopicsList: FutureTopic[] = [
  {
    id: 'pauta-1',
    title: 'Terapia online x presencial: semelhanças e particularidades',
    description: 'Análise equilibrada sobre como o enquadre analítico se adapta ao ambiente digital e quais as particularidades do encontro presencial.',
    primaryKeyword: 'terapia online x presencial',
    category: 'Terapia online',
    editorialStatus: 'Pauta sugerida — aguardando redação e validação de Daniel Paulo',
  },
  {
    id: 'pauta-2',
    title: 'Neuropsicanálise: o que é e como une mente e cérebro',
    description: 'Apresentação didática da interface entre a neurociência moderna e a teoria psicanalítica da subjetividade.',
    primaryKeyword: 'o que e neuropsicanalise',
    category: 'Psicanálise',
    editorialStatus: 'Pauta sugerida — aguardando redação e validação de Daniel Paulo',
  },
  {
    id: 'pauta-3',
    title: 'Quando buscar acompanhamento terapêutico',
    description: 'Sinais cotidianos, momentos de transição de vida e o valor da escuta profissional antes de crises agudas.',
    primaryKeyword: 'quando fazer terapia',
    category: 'Autoconhecimento',
    editorialStatus: 'Pauta sugerida — aguardando redação e validação de Daniel Paulo',
  },
  {
    id: 'pauta-4',
    title: 'Inteligência emocional no trabalho e na liderança',
    description: 'Como a escuta de si e a empatia fortalecem a tomada de decisão e a gestão de conflitos no meio profissional.',
    primaryKeyword: 'inteligencia emocional no trabalho',
    category: 'Vida profissional e liderança',
    editorialStatus: 'Pauta sugerida — aguardando redação e validação de Daniel Paulo',
  },
  {
    id: 'pauta-5',
    title: 'Máscaras sociais no ambiente de trabalho: sobrevivência ou exaustão?',
    description: 'A tênue linha entre a etiqueta profissional necessária e o esgotamento por representação contínua de personagens.',
    primaryKeyword: 'mascaras sociais trabalho',
    category: 'Comportamento e emoções',
    editorialStatus: 'Pauta sugerida — aguardando redação e validação de Daniel Paulo',
  },
];
