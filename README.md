# Daniel Paulo — Site Institucional Multipágina

Site institucional multipágina de alta performance desenvolvido para **Daniel Paulo**, psicanalista, terapeuta, professor acadêmico e palestrante atuante em Jundiaí-SP.

O projeto foi construído no **Google AI Studio**, seguindo rigorosamente os princípios de acolhimento ético, ausência de julgamentos morais, proteção de dados (LGPD), acessibilidade (WCAG AA), SEO local e Generative Engine Optimization (GEO).

---

## 1. Objetivo do Projeto

Apresentar a atuação profissional de Daniel Paulo com credibilidade e humanização:
- **Posicionamento principal:** Psicanalista e Terapeuta (atendimento online e presencial em Jundiaí-SP).
- **Atuações complementares:** Docência no ensino superior e palestras sobre inteligência emocional, máscaras sociais e desenvolvimento pessoal.
- **Rigor ético:** Não inventar informações, títulos, credenciais ou consultórios fictícios; manter dados ausentes ocultos na interface até validação formal do cliente.

---

## 2. Stack Tecnológica

- **Frontend:** React 19 + TypeScript + Vite.
- **Roteamento:** React Router DOM (rotas reais cliente multipágina).
- **Estilização & Tokens:** Tailwind CSS v4 com paleta personalizada (#081331 azul-marinho, #4FD6F4 ciano de destaque, #0e1e4a superfícies de apoio).
- **Tipografia:** Plus Jakarta Sans (títulos editoriais) e Inter (textos corridos de alta legibilidade).
- **Mídia & Motion:** Scroll scrubbing de vídeos com `requestAnimationFrame` + `IntersectionObserver`, com poster de carregamento imediato e suporte a `prefers-reduced-motion`.
- **Ícones:** Lucide React.
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
    social/            # Imagem oficial Open Graph (1200x630)
    videos/            # 7 vídeos (normal, -scroll.mp4 e -poster.jpg)
  llms.txt             # Documento estruturado para inteligências artificiais e GEO
  manifest.webmanifest # Manifesto PWA
  robots.txt           # Diretrizes para indexadores
  sitemap.xml          # Mapa estruturado de rotas públicas
src/
  components/
    breadcrumbs/       # Navegação estrutural acessível
    certificates/      # Galeria com Lightbox acessível por teclado (ESC, setas)
    forms/             # Formulário seguro integrado ao WhatsApp
    layout/            # Wrapper com Skip-link para WCAG AA
    media/             # Componente ScrollVideo de alta performance
    navigation/        # Navbar responsiva e Footer com LGPD
    seo/               # Injeção de metadados e JSON-LD
    ui/                # Botão flutuante de WhatsApp
  config/
    siteConfig.ts      # FONTE ÚNICA de dados institucionais e flags
  data/
    blogPosts.ts       # 3 artigos iniciais com draft: true
    experience.ts      # 5 experiências profissionais documentadas
    futureTopics.ts    # 7 pautas editoriais para planejamento
    navigation.ts      # Menu e submenus de navegação
    services.ts        # 6 serviços autorizados
    verifiedFormations.ts # 7 certificados verificados e lista de pendências
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

O arquivo `src/config/siteConfig.ts` centraliza todos os dados e regras de negócio. Qualquer alteração feita nele reflete imediatamente em todo o site.

### 5.1. Como alterar o WhatsApp
Atualize os campos:
```typescript
whatsapp: "5511960193062", // Número com DDI e DDD sem traços ou espaços
whatsappFormatted: "+55 (11) 96019-3062",
whatsappDefaultMessage: "Sua mensagem padrão aqui...",
```

### 5.2. Como preencher e-mail, domínio, endereço e horários futuramente
Atualmente esses campos estão definidos como `null`. Enquanto forem nulos, a interface omite automaticamente esses blocos (não exibe links vazios ou "a informar"):
```typescript
email: "contato@danielpaulo.com.br", // Quando contratado
address: "Rua Exemplo, 123 - Centro, Jundiaí - SP", // Quando definido
businessHours: "Segunda a Sexta, das 08h às 19h", // Quando definido
SITE_URL: "https://danielpaulo.com.br", // Quando o domínio for registrado e apontado
```

### 5.3. Redes sociais
- **Instagram:** Já configurado (`https://www.instagram.com/danielpaulo_psicanalista/`).
- **LinkedIn:** Já configurado (`https://linkedin.com/in/daniel-paulo-psi`).
- **Facebook:** `facebookUrl` está `null`. O link só aparecerá no site quando a URL oficial for confirmada e preenchida.

### 5.4. Avisos condicionais
- `showEmergencyNotice`: Quando `true`, exibe aviso com telefones do CVV (188) e SAMU (192). Mantido `false` inicialmente para validação de Daniel.
- `showFaithContent`: Mantido `false`, sem conteúdo religioso no site por padrão.
- `showUnverifiedFormations`: Mantido `false`, para exibir apenas certificados comprovados.

---

## 6. Formações e Experiências Profissionais

### 6.1. As 7 Formações Comprovadas (exibidas na galeria)
Localizadas em `src/data/verifiedFormations.ts`:
1. Pós-graduação lato sensu em Antropologia — FACPRISMA, 2025
2. Pós-graduação lato sensu em Filosofia — FACPRISMA, 2024
3. Pós-graduação lato sensu em Neurociências — Faculdade Iguaçu, 2024
4. Extensão em Neuropsicopedagogia — Faculdade Iguaçu, 2024
5. Extensão em Neuropsicanálise — Faculdade Iguaçu, 2024
6. Imersão Estratégica, Estruturação Comercial — BUP, 2024
7. Formação "Homem ao Máximo" — CMN, 2024

### 6.2. Formações que ainda aguardam envio de comprovante
Registradas na estrutura `unverifiedFormations` em `src/data/verifiedFormations.ts`:
- Psicanalista (CETEP), Coaching, PNL, Analista Comportamental (IBC), Constelação Sistêmica, Speaker (IBC), ESG (EXAME), Teologia (ETEQS), Libras (ENAP), Pós em Dependência Química, Psicologia Analítica, Cadeia Logística e Hipnólogo (em andamento).
*Esses itens NÃO são exibidos aos visitantes no site por padrão.*

### 6.3. Experiência Profissional (Linha do Tempo)
Localizada em `src/data/experience.ts`:
- Professor na Faculdade Anhanguera: desde 01/04/2024 (Ativo)
- Coordenador Pedagógico na Unika: 01/2021 a 07/2025
- Gerente Comercial na Transportadora Risso: 08/2019 a 01/2020
- Supervisor de Logística na BSM: 04/2017 a 07/2019
- Supervisor Geral na Casa São Carlos: 03/2014 a 03/2017

---

## 7. Blog e Gestão Editorial

### 7.1. Os 3 Artigos Iniciais (em Rascunho)
Localizados em `src/data/blogPosts.ts`:
1. *"Papéis ou personagens? Como perceber quando você está usando uma máscara social"*
2. *"O que é psicanálise e como funciona uma primeira sessão"*
3. *"Procrastinação: por que adiamos o que importa"*

Todos estão configurados com `draft: true` e `date: null`. Por essa razão, **não aparecem na listagem pública nem no sitemap**, mas podem ser lidos e revisados na aba **Painel Editorial & Rascunhos** da página `/blog`.

### 7.2. Como publicar um artigo
Para aprovar e publicar um rascunho:
1. Abra `src/data/blogPosts.ts`.
2. Altere `draft: false`.
3. Preencha `date: "2026-11-07"` (ou a data real da aprovação).
4. O artigo passará a ser exibido imediatamente na lista pública do Blog e na Home.

### 7.3. Pautas Futuras
As 7 pautas editoriais sugeridas estão cadastradas em `src/data/futureTopics.ts` como guia para a produção de novos conteúdos.

---

## 8. Arquitetura de Mídia e Vídeos com Scroll Scrubbing

- **Tecnologia:** Implementada no componente `src/components/media/ScrollVideo.tsx`. Utiliza `requestAnimationFrame` para mapear a posição do scroll para a propriedade `HTMLVideoElement.currentTime`.
- **Arquivos:** Usa as versões otimizadas com sufixo `-scroll.mp4` (possuem keyframes em todos os frames para scrub fluído).
- **Posters:** Toda mídia possui um poster JPG correspondente (`-poster.jpg`), exibido imediatamente antes do carregamento do vídeo para zero CLS (Cumulative Layout Shift).
- **Acessibilidade:** Quando o usuário possui `prefers-reduced-motion: reduce` ou conexão com economia de dados (`Save-Data`), o vídeo não executa o scrub nem faz download desnecessário, mantendo o poster estático nítido.
- **Responsividade:** No desktop, carrega versões horizontais; no celular, prioriza versões verticais ou posters estáticos.

---

## 9. Proteção de Dados (LGPD) e Formulário

- **Funcionamento do Formulário:** O formulário de contato (`ContactForm.tsx`) não possui backend próprio nem banco de dados. Ele valida os campos no cliente, checa o consentimento e abre o WhatsApp com a mensagem pré-formatada.
- **Transparência:** O usuário final sempre revisa e confirma o envio da mensagem dentro do próprio WhatsApp.
- **Controlador dos Dados:** Daniel Paulo de Arruda Oliveira.
- **Políticas:** As páginas `/politica-de-privacidade` e `/termos-de-uso` são modelos técnicos iniciais que necessitam de revisão jurídica formal.

---

## 10. SEO, GEO e Metadados para Produção

- Cada rota possui seu `<title>`, `<meta description>`, tags Open Graph e Twitter Cards gerenciados pelo componente `SeoHead.tsx`.
- Dados estruturados JSON-LD (`Person`, `ProfessionalService`, `BreadcrumbList`, `FAQPage`) utilizam apenas dados reais confirmados.
- Arquivo `public/llms.txt` criado para fornecer à Inteligência Artificial (ChatGPT, Perplexity, Gemini, Claude) um resumo factual sobre Daniel Paulo.
- **Aviso sobre SEO em Produção:** Como se trata de uma SPA (Single Page Application) em React + Vite, para indexação perfeita em mecanismos de busca em domínio próprio, recomenda-se a publicação em plataformas com SSG (Static Site Generation) ou pré-renderização das rotas HTML.

---

## 11. PENDÊNCIAS PARA PUBLICAÇÃO

As seguintes informações dependem de confirmação direta de Daniel Paulo antes do lançamento oficial do site:

1. **Endereço do Atendimento Presencial:** Endereço físico, sala comercial ou referência de bairro em Jundiaí-SP para atendimento presencial (caso deseje divulgar publicamente no site).
2. **E-mail Profissional:** Endereço de e-mail institucional oficial (ex.: `contato@danielpaulo.com.br`).
3. **Domínio Oficial:** Registro do domínio definitivo (ex.: `danielpaulo.com.br`) e configuração da variável `SITE_URL` em `siteConfig.ts`.
4. **Horários de Atendimento:** Definição dos dias da semana e horários disponíveis para exibição pública ou em cards de agendamento.
5. **Valores e Condições:** Definição se os preços e condições de pagamento devem ser expostos no site ou mantidos sob consulta individual via WhatsApp.
6. **Comprovantes das Formações Pendentes:** Envio de certificados para validação das formações citadas (Psicanalista CETEP, Coaching, PNL, Analista Comportamental IBC, Constelação Sistêmica, Teologia, Libras etc.).
7. **URL Oficial do Perfil no Facebook:** Link direto para a página "Daniel Paulo Psicanalista".
8. **Fotografias em Alta Resolução:** Fotos de estúdio originais para substituir os recortes transparentes de blazer azul e blazer cinza, que possuem dimensões reduzidas no pacote inicial.
9. **Aviso de Emergência:** Confirmação se Daniel deseja ativar o banner do CVV (188) / SAMU (192) através da flag `showEmergencyNotice`.
10. **Conteúdo Religioso / Fé:** Decisão futura sobre a inclusão ou não de referências à fé cristã (atualmente desativado via `showFaithContent`).
11. **Revisão Jurídica:** Homologação da Política de Privacidade e dos Termos de Uso por advogado especializado em Direito Digital e LGPD.
12. **Revisão Editorial:** Leitura e aprovação dos três artigos em rascunho para liberação pública (`draft: false`).
