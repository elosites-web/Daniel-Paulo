# Daniel Paulo — Site Institucional Multipágina

Site institucional multipágina de alta performance desenvolvido para **Daniel Paulo**, psicanalista, terapeuta, professor universitário e palestrante atuante em Jundiaí-SP.

O projeto foi construído no **Google AI Studio**, seguindo rigorosamente os princípios de acolhimento ético, rigor científico, ausência de julgamentos morais, proteção de dados (LGPD), acessibilidade (WCAG AA), SEO técnico e Generative Engine Optimization (GEO).

---

## 1. Objetivo do Projeto

Apresentar a atuação profissional de Daniel Paulo com credibilidade, elegância e humanização:
- **Posicionamento principal:** Psicanalista e Terapeuta (atendimento online e presencial em Jundiaí-SP).
- **Atuações complementares:** Docência no ensino superior (Faculdade Anhanguera) e palestras corporativas/educacionais sobre inteligência emocional, identidade e superação da procrastinação.
- **Rigor ético:** Não inventar informações, títulos, credenciais ou consultórios fictícios; manter dados ausentes ocultos na interface até validação formal do cliente.

---

## 2. Stack Tecnológica

- **Frontend:** React 19 + TypeScript + Vite.
- **Roteamento:** React Router DOM v7 (rotas reais cliente multipágina).
- **Estilização & Tokens:** Tailwind CSS v4 com paleta personalizada (#081331 azul-marinho profundo, #4FD6F4 ciano de destaque, #0e1e4a superfícies de apoio).
- **Tipografia:** Plus Jakarta Sans (títulos e marcas) e Inter (textos corridos de alta legibilidade).
- **Mídia & Motion:**
  - Vídeos transparentes WebM com canal alpha para heróis cinematográficos sequenciais.
  - Scroll scrubbing de vídeos com `requestAnimationFrame` + `IntersectionObserver`.
  - Posters WebP/JPG de carregamento imediato com zero CLS (Cumulative Layout Shift) e suporte pleno a `prefers-reduced-motion`.
- **Ícones:** Lucide React + componente dedicado `TikTokIcon`.
- **SEO & GEO:** Componente `SeoHead` com geração dinâmica de meta tags Open Graph, Twitter Cards e dados estruturados JSON-LD (`Person`, `ProfessionalService`, `BreadcrumbList`, `FAQPage`).

---

## 3. Estrutura de Diretórios

```
public/
  assets/
    ambiente/          # Imagens de atmosfera mar e praia (WebP)
    certificados/      # 7 comprovantes com dados pessoais protegidos
    favicon/           # Favicons em todos os tamanhos, .ico e apple-touch-icon
    fotos-daniel/      # Fotos profissionais e recortes de Daniel Paulo
    logo/              # Logotipo circular oficial com e sem brilho
    reels/             # 3 capas/thumbnails de Reels do Instagram
    social/            # Imagem oficial Open Graph (1200x630)
    videos/            # Vídeos WebM com alpha (hero-01, hero-02), MP4 de scroll e posters
  llms.txt             # Documento estruturado para inteligências artificiais e GEO
  manifest.webmanifest # Manifesto PWA
  robots.txt           # Diretrizes para indexadores
  sitemap.xml          # Mapa estruturado de rotas públicas
src/
  components/
    breadcrumbs/       # Navegação estrutural acessível
    certificates/      # Galeria com Lightbox acessível por teclado (ESC, setas)
    forms/             # Formulário seguro integrado ao WhatsApp
    home/              # Seções especializadas (ReelsSection, etc.)
    layout/            # Wrapper com Skip-link para WCAG AA
    media/             # Componente ScrollVideo de alta performance
    navigation/        # Navbar com portal e Footer com logotipo ampliado
    seo/               # Injeção de metadados e JSON-LD
    ui/                # Botão flutuante de WhatsApp, ThemeSwitcher, TikTokIcon
  config/
    siteConfig.ts      # FONTE ÚNICA de dados institucionais e flags
  data/
    blogPosts.ts       # 3 artigos propostos com citações acadêmicas e capas
    experience.ts      # Histórico profissional documentado
    futureTopics.ts    # 5 pautas editoriais para planejamento
    navigation.ts      # Menus e submenus de navegação
    services.ts        # 6 serviços autorizados com escopo prudente
    verifiedFormations.ts # 7 certificados verificados e pendências
  hooks/
    useMediaQuery.ts   # Detecção responsiva de viewports
    useReducedMotion.ts # Respeito a prefers-reduced-motion
  pages/               # Todas as páginas e subpáginas com rotas reais
  App.tsx              # Definição das rotas com React Router
  index.css            # Import do Tailwind v4 e tokens
  main.tsx             # Ponto de entrada React 19
README.md              # Documentação completa e pendências
```

---

## 4. Como Executar e Gerar o Build

### Execução em Desenvolvimento:
```bash
npm run dev
```
O servidor de desenvolvimento iniciará na porta 3000 (`http://localhost:3000`).

### Validação de Tipagem (Lint):
```bash
npm run lint
```

### Build para Produção:
```bash
npm run build
```
Os arquivos otimizados serão gerados no diretório `dist/`.

---

## 5. Como Configurar e Editar o Site (`siteConfig.ts`)

O arquivo `src/config/siteConfig.ts` centraliza todos os dados e regras de negócio. Qualquer alteração reflete imediatamente em todo o site.

### 5.1. WhatsApp
```typescript
whatsapp: "5511960193062", // Número com DDI e DDD sem formatação
whatsappFormatted: "+55 (11) 96019-3062",
whatsappDefaultMessage: "Olá Daniel, gostaria de informações sobre o atendimento psicanalítico.",
```

### 5.2. Redes Sociais Confirmadas
As quatro redes oficiais e o canal de contato direto estão totalmente integrados no cabeçalho, rodapé e menu mobile:
- **Instagram:** `https://www.instagram.com/danielpaulopsi/`
- **LinkedIn:** `https://linkedin.com/in/daniel-paulo-psi`
- **Facebook:** `https://www.facebook.com/danielpaulopsi`
- **TikTok:** `https://www.tiktok.com/@danielpaulopsi`
- **WhatsApp:** Link gerado automaticamente via função auxiliar `getWhatsAppUrl()`.

### 5.3. Campos Reservados para Futuro Preenchimento
Atualmente definidos como `null` para que a interface não exiba campos fictícios ou incompletos:
```typescript
email: null, // Preencher quando fornecido pelo cliente
address: null, // Preencher quando fornecido
businessHours: null, // Preencher quando definido
SITE_URL: null, // Preencher quando o domínio oficial for apontado
```

### 5.4. Avisos e Chaves Editoriais
- `showEditorialReviewNotice`: Ativado (`true`) para exibir avisos de proposta de conteúdo sob validação de Daniel Paulo nas páginas do blog.
- `showEmergencyNotice`: Quando `true`, exibe banner com telefones do CVV (188) e SAMU (192).

---

## 6. Recursos Implementados na Página Inicial (Home)

### 6.1. Dois Heróis Cinematográficos Sequenciais (WebM Transparente)
- **Hero 1 (Camisa Azul):**
  - Mídia desktop: `/assets/videos/hero-01-camisa-azul-desktop.webm` (16:9).
  - Mídia mobile: `/assets/videos/hero-01-camisa-azul-mobile.webm` (9:16).
  - Trajetória: Entra pela direita e para no terço direito da tela (centralizado no mobile).
  - Integração: WebM com transparência alfa sobre o fundo escuro do site (`#081331`), sem corte abrupto e com transição suave.
  - CTAs diretos para WhatsApp e Conhecer a Psicanálise.
- **Hero 2 (Terno Escuro):**
  - Mídia desktop: `/assets/videos/hero-02-terno-escuro-desktop.webm` (16:9).
  - Mídia mobile: `/assets/videos/hero-02-terno-escuro-mobile.webm` (9:16).
  - Trajetória: Entra pela esquerda e para no terço esquerdo da tela (centralizado no mobile).
  - **Aviso Técnico Crucial:** O vídeo de origem já foi gravado e espelhado na renderização original; **não é aplicado nenhum `scaleX(-1)` via CSS**.
  - Destaque à prática clínica em Jundiaí e à docência na Faculdade Anhanguera.

### 6.2. Modalidades Flexíveis (Online e Presencial)
- No mobile: reproduz `/assets/videos/modalidades-flexiveis-mobile.mp4` (vídeo validado pelo contratante).
- No desktop: utiliza `daniel-mesa-telefone-horizontal-scroll.mp4` com scrub suave.
- CTA para WhatsApp com mensagem pré-formatada.

### 6.3. Nova Seção "Reflexões em Vídeo" (Reels do Instagram)
- 3 cards com capas reais (`reel-01-thumbnail.webp`, `reel-02-thumbnail.webp`, `reel-03-thumbnail.webp`).
- Temas: Máscaras sociais, procrastinação e a prática da escuta clínica.
- Legendas expansíveis com botão "Ler reflexão completa" e link direto para o Instagram do profissional.

---

## 7. Menu Mobile com Portal

O componente `src/components/navigation/Navbar.tsx` implementa renderização via `createPortal(..., document.body)` com cálculo dinâmico da posição inferior do header (`headerBottom`). Com isso:
- O menu se abre exatamente abaixo do cabeçalho, independente da rolagem da página.
- Possui backdrop com desfoque cobrindo a área visível abaixo do header.
- Bloqueia o scroll do corpo da página enquanto aberto.
- Fecha automaticamente ao pressionar a tecla `Escape` ou ao clicar em qualquer link de navegação.

---

## 8. Blog e Produção Editorial

### 8.1. Os 3 Artigos Completos para Validação
Disponíveis publicamente no blog para leitura e avaliação (`draft: false`, `editorialStatus: "Proposta editorial — aguardando validação de Daniel Paulo"`):
1. *"Papéis ou personagens? Como perceber quando você está usando uma máscara social"* — com citação acadêmica ao sociólogo Erving Goffman (*A representação do eu na vida cotidiana*, 1959) e capa institucional.
2. *"O que é psicanálise e como funciona uma primeira sessão"* — com referência às diretrizes clínicas internacionais da International Psychoanalytical Association (IPA) e American Psychoanalytic Association (APsaA), e imagem de atmosfera.
3. *"Procrastinação: por que adiamos o que importa"* — com citação ao estudo científico de Sirois & Pychyl (2013) sobre procrastinação como regulação de afeto imediato, e imagem de atmosfera.

### 8.2. Pautas Futuras
As 5 pautas editoriais propostas para desenvolvimento futuro estão listadas em seção dedicada no blog, identificadas com a tag "Pauta em estudo".

---

## 9. Histórico Profissional e Formações

### 9.1. Experiências Confirmadas (`src/data/experience.ts`)
- **Professor no Ensino Superior:** Faculdade Anhanguera (desde 01/04/2024 - Ativo).
- **Coordenador Pedagógico:** Unika Negócios e Desenvolvimento Humano (01/2021 a 07/2025).
- **Atuação Prévia Corporativa:** Síntese prudente e genérica de vivência anterior em gestão logística e liderança comercial, sem menção a empresas ou datas não comprovadas documentalmente.

### 9.2. As 7 Formações Comprovadas (`src/data/verifiedFormations.ts`)
- Pós-graduação em Antropologia (FACPRISMA, 2025)
- Pós-graduação em Filosofia (FACPRISMA, 2024)
- Pós-graduação em Neurociências (Faculdade Iguaçu, 2024)
- Extensão em Neuropsicopedagogia (Faculdade Iguaçu, 2024)
- Extensão em Neuropsicanálise (Faculdade Iguaçu, 2024)
- Imersão Estratégica, Estruturação Comercial (BUP, 2024)
- Formação Homem ao Máximo (CMN, 2024)

---

## 10. Proteção de Dados (LGPD) e Segurança

- **Formulário de Contato:** Validação estrita no cliente com consentimento explícito e redirecionamento seguro para o WhatsApp. Nenhum dado sensível é armazenado ou transitado sem backend seguro.
- **Controlador dos Dados:** Daniel Paulo de Arruda Oliveira.
- **Políticas e Termos:** Documentos técnicos em `/politica-de-privacidade` e `/termos-de-uso` preparados para homologação jurídica.

---

## 11. Pendências para Validação Final com Daniel Paulo

1. **Aprovação Editorial dos 3 Artigos:** Leitura e homologação final do texto dos três artigos do Blog.
2. **Endereço do Atendimento Presencial:** Confirmação se haverá divulgação de endereço fixo, consultório ou sala em Jundiaí-SP.
3. **E-mail Institucional:** Definição de e-mail oficial para preenchimento de `siteConfig.email`.
4. **Domínio Oficial:** Registro do domínio definitivo (ex.: `danielpaulo.com.br`) e atualização de `siteConfig.SITE_URL`.
5. **Horários e Valores:** Definição se serão mantidos sob consulta individual via WhatsApp ou adicionados na interface.
6. **Comprovantes Adicionais:** Envio de diplomas/certificados para as formações listadas em `unverifiedFormations` (CETEP, IBC, etc.) antes de sua inclusão pública.
