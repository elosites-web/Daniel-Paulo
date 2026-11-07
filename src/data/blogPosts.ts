export interface BlogPost {
  title: string;
  slug: string;
  description: string;
  date: string | null;
  updated: string | null;
  category: string;
  tags: string[];
  author: string;
  readingTime: string;
  draft: boolean;
  tldr: string;
  tableOfContents: { id: string; text: string }[];
  content: string; // Markdown or structured sections
}

export const initialBlogPosts: BlogPost[] = [
  {
    title: 'Papéis ou personagens? Como perceber quando você está usando uma máscara social',
    slug: 'papeis-ou-personagens-mascaras-sociais',
    description: 'Uma reflexão sobre a sutil fronteira entre desempenhar papéis sociais legítimos e sustentar personagens exaustivos para obter aprovação externa.',
    date: null,
    updated: null,
    category: 'Autoconhecimento',
    tags: ['autoconhecimento', 'identidade', 'máscaras sociais', 'autenticidade'],
    author: 'Daniel Paulo',
    readingTime: '5 min de leitura',
    draft: true,
    tldr: 'Desempenhar papéis no trabalho e na família é natural e funcional. O sofrimento começa quando nos forçamos a vestir personagens fictícios para sermos aceitos, distanciando-nos da nossa verdade interior.',
    tableOfContents: [
      { id: 'papeis-vs-personagens', text: '1. A diferença entre papéis e personagens' },
      { id: 'o-peso-da-mascara', text: '2. O custo psicológico de agradar a todos' },
      { id: 'reconhecendo-sinais', text: '3. Sinais de que você está atuando em excesso' },
      { id: 'o-caminho-da-escuta', text: '4. Como a escuta psicanalítica acolhe a autenticidade' }
    ],
    content: `
Todos nós desempenhamos diferentes papéis ao longo de um único dia. Somos profissionais em nossos locais de trabalho, filhos, parceiros, amigos ou cidadãos em uma fila de supermercado. Adaptar nossa postura a cada um desses cenários não é falsidade; é uma competência social saudável que viabiliza a convivência humana.

O problema emerge quando essa flexibilidade cede lugar à construção rígida de um **personagem**.

### 1. A diferença entre papéis e personagens {#papeis-vs-personagens}

Um **papel** expressa uma faceta real de quem somos em um contexto específico. Quando você assume a responsabilidade de coordenar uma equipe ou acolher um amigo, você está aplicando valores e capacidades que genuinamente lhe pertencem.

Um **personagem**, por outro lado, é um roteiro que criamos movidos pelo medo da rejeição. É a resposta automática à pergunta íntima: *"Como preciso me comportar para que não me julguem ou me abandonem?"*.

Ao criar um personagem:
- Suprimimos sentimentos legítimos de cansaço, tristeza ou discordância.
- Concordamos com decisões com as quais intimamente não nos alinhamos.
- Sorrimos em situações em que nosso desejo era apenas silenciar.

### 2. O custo psicológico de agradar a todos {#o-peso-da-mascara}

Sustentar uma armadura consome uma quantidade imensa de energia psíquica. No final do dia, a sensação recorrente é de exaustão inexplicável, mesmo após jornadas de trabalho relativamente leves. 

O paradoxo da máscara social é cruel: quando o personagem recebe aplausos ou aprovação, nossa consciência mais profunda não se sente amada. Afinal, pensamos: *"Eles gostam de quem eu finjo ser, não de quem eu realmente sou"*.

### 3. Sinais de que você está atuando em excesso {#reconhecendo-sinais}

Existem alguns indícios sutis que merecem nossa atenção:
1. **Sensação de vazio logo após elogios públicos.**
2. **Dificuldade de ficar sozinho**, pois o silêncio faz emergir a angústia de não saber quem você é sem plateia.
3. **Medo constante de ser "descoberto"**, como se você fosse uma fraude.
4. **Perda de contato com suas preferências básicas**, tendo dificuldade em dizer o que gosta de fazer, ouvir ou comer quando ninguém está olhando.

### 4. Como a escuta psicanalítica acolhe a autenticidade {#o-caminho-da-escuta}

A psicanálise não busca eliminar seus papéis nem exigir que você saia desabafando sem filtro em todas as esferas da sua vida. A proposta de uma escuta acolhedora e sem julgamentos é criar um espaço onde a máscara não seja necessária.

Ao falar livremente sobre suas contradições, medos e desejos reprimidos, você começa a perceber que aquilo que você escondia com tanto empenho não é vergonhoso; é apenas humano. O autoconhecimento não consiste em encontrar uma versão perfeita de si mesmo, mas em aprender a habitar a própria verdade com tranquilidade.
    `,
  },
  {
    title: 'O que é psicanálise e como funciona uma primeira sessão',
    slug: 'o-que-e-psicanalise-como-funciona-primeira-sessao',
    description: 'Entenda os princípios da abordagem psicanalítica, o papel da associação livre e o que esperar de um primeiro contato terapêutico acolhedor.',
    date: null,
    updated: null,
    category: 'Psicanálise',
    tags: ['psicanálise', 'primeira sessão', 'escuta terapêutica', 'inconsciente'],
    author: 'Daniel Paulo',
    readingTime: '6 min de leitura',
    draft: true,
    tldr: 'A psicanálise é um convite à fala livre em um ambiente de confidencialidade e respeito. A primeira sessão é um momento inicial de acolhimento para que você exponha suas inquietações no seu próprio ritmo.',
    tableOfContents: [
      { id: 'o-que-e-psicanalise', text: '1. O que é a psicanálise na prática?' },
      { id: 'o-inconsciente-cotidiano', text: '2. O inconsciente presente no dia a dia' },
      { id: 'a-primeira-sessao', text: '3. Como funciona o primeiro contato' },
      { id: 'sem-roteiro-nem-provas', text: '4. Um espaço sem provas e sem julgamento' }
    ],
    content: `
Para muitas pessoas que pensam em iniciar um processo terapêutico, a psicanálise ainda vem acompanhada de mitos e imagens estereotipadas: o divã antigo, o analista impassível em silêncio absoluto ou a ideia de que apenas memórias remotas da infância serão discutidas.

Na realidade contemporânea, a psicanálise é, antes de tudo, uma experiência viva de escuta e linguagem.

### 1. O que é a psicanálise na prática? {#o-que-e-psicanalise}

A psicanálise propõe que grande parte de nossas escolhas, angústias, repetições de relacionamento e bloqueios cotidianos é influenciada por processos dos quais não temos consciência plena — o chamado inconsciente.

Diferente de abordagens focadas exclusivamente em treinamento de tarefas ou correção mecânica de condutas, a psicanálise respeita o tempo singular de cada indivíduo. Trata-se de dar voz àquilo que você costuma calar, investigando o significado particular que as coisas têm para você.

### 2. O inconsciente presente no dia a dia {#o-inconsciente-cotidiano}

O inconsciente não é um compartimento misterioso e inalcançável. Ele se manifesta em detalhes corriqueiros:
- Naquela decisão que tomamos sabendo racionalmente que trará dor de cabeça, mas repetimos mesmo assim.
- No esquecimento repetitivo de compromissos com certas pessoas.
- Em sensações físicas de aperto no peito sem causa médica aparente diante de determinadas conversas.
- Nos sonhos e nos atos falhos da nossa comunicação.

Dar atenção a essas pistas permite compreender a lógica dos nossos próprios sentimentos.

### 3. Como funciona o primeiro contato {#a-primeira-sessao}

A primeira sessão não é uma prova nem uma entrevista inquisitiva. É um momento de aproximação:
- **Você fala sobre o que o trouxe:** pode ser uma angústia bem definida (um luto, uma mudança de carreira, uma separação) ou simplesmente uma sensação difusa de que algo precisa de atenção.
- **Não há ordem certa:** você não precisa preparar um resumo cronológico da sua vida. Pode começar pelo que aconteceu hoje de manhã ou por uma lembrança aleatória.
- **Alinhamento mútuo:** é também uma oportunidade para você sentir como é estar naquele espaço de escuta, tirar dúvidas práticas sobre os encontros e verificar se essa relação de diálogo faz sentido para você.

### 4. Um espaço sem provas e sem julgamento {#sem-roteiro-nem-provas}

Em uma conversa analítica não existem respostas "certas" ou "erradas". Ninguém vai avaliar se seus sentimentos são moralmente louváveis ou condenáveis. 

O papel do psicanalista não é dar conselhos de vida prontos, mas ajudar você a escutar a sua própria voz por trás do barulho das expectativas alheias.
    `,
  },
  {
    title: 'Procrastinação: por que adiamos o que importa',
    slug: 'procrastinacao-por-que-adiamos-o-que-importa',
    description: 'Compreenda a procrastinação sob uma ótica emocional e comportamental, desmistificando o rótulo da preguiça e entendendo o medo do julgamento.',
    date: null,
    updated: null,
    category: 'Comportamento e emoções',
    tags: ['procrastinação', 'comportamento', 'inteligência emocional', 'hábitos'],
    author: 'Daniel Paulo',
    readingTime: '5 min de leitura',
    draft: true,
    tldr: 'Adiar tarefas essenciais raramente tem a ver com falta de tempo ou preguiça. Frequentemente é uma tentativa de evitar emoções desconfortáveis, como o medo da imperfeição, do erro ou da avaliação alheia.',
    tableOfContents: [
      { id: 'alem-da-preguica', text: '1. Por que chamar de preguiça não resolve' },
      { id: 'o-mecanismo-emocional', text: '2. O circuito da evitação emocional' },
      { id: 'perfeccionismo-e-adiamento', text: '3. A armadilha do perfeccionismo' },
      { id: 'passos-para-o-dialogo', text: '4. Como começar a lidar com a paralisia' }
    ],
    content: `
Quase todo mundo já vivenciou a clássica experiência de sentar em frente ao computador para produzir algo importante e, meia hora depois, se pegar limpando gavetas, respondendo mensagens secundárias ou navegando em redes sociais.

No fim do dia, restam a frustração e a autocobrança: *"Por que não consigo simplesmente começar?"*.

### 1. Por que chamar de preguiça não resolve {#alem-da-preguica}

Reduzir a procrastinação a uma falha de caráter ou a um suposto "defeito de fábrica" chamado preguiça é um erro comum que apenas aprofunda a culpa.

A preguiça envolve o desejo deliberado de não fazer nada e desfrutar do descanso. Quem procrastina, ao contrário, não descansa: sofre intensamente durante todo o tempo em que adia a tarefa. A cabeça permanece ocupada pela cobrança interna, gerando um estado contínuo de estresse.

### 2. O circuito da evitação emocional {#o-mecanismo-emocional}

Estudos do comportamento e reflexões psicanalíticas convergem em um ponto fundamental: **a procrastinação é uma estratégia de regulação emocional**.

Adiamos aquilo que, em nosso íntimo, desperta desconforto:
- Medo de descobrir que não somos tão competentes quanto gostaríamos.
- Tédio ou sensação de falta de sentido na tarefa.
- Ansiedade diante da possibilidade de reprovação por superiores ou colegas.
- Sensação de estar sobrecarregado sem saber por onde partir.

Quando você desvia para uma distração rápida, seu cérebro experimenta um alívio momentâneo daquela ansiedade. O custo, contudo, é acumulá-la para as horas seguintes.

### 3. A armadilha do perfeccionismo {#perfeccionismo-e-adiamento}

Muitas vezes, quem mais procrastina é justamente quem tem os padrões mais elevados. A fantasia do trabalho impecável paralisa: *"Se eu não posso fazer de maneira brilhante hoje, prefiro não começar agora"*.

Essa ilusão de controle cria uma barreira quase intransponível. A única forma de o trabalho nascer passa a ser sob a pressão desesperada do prazo final, quando a adrenalina da urgência supera o medo da crítica.

### 4. Como começar a lidar com a paralisia {#passos-para-o-dialogo}

Não existem fórmulas milagrosas de produtividade tóxica, mas alguns caminhos reflexivos ajudam a reatar a relação com suas ações:
- **Reduza o primeiro passo ao ridículo:** se escrever um relatório de dez páginas parece assustador, comprometa-se a abrir o documento e redigir apenas dois parágrafos.
- **Tolere o rascunho inicial imperfeito:** permita-se produzir algo mediano no primeiro momento para ter matéria-prima sobre a qual trabalhar depois.
- **Investigue o que a tarefa desperta em você:** pergunte-se honestamente: *"O que realmente me assusta ao concluir este projeto?"*.

Aprender a acolher a própria vulnerabilidade é o início de uma relação mais leve e honesta com o trabalho e consigo mesmo.
    `,
  },
];

export const blogCategories = [
  'Todas as categorias',
  'Psicanálise',
  'Autoconhecimento',
  'Comportamento e emoções',
  'Vida profissional e liderança',
  'Terapia online',
];
