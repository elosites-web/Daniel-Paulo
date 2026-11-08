import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { ScrollToTop } from './components/navigation/ScrollToTop';
import { ThemeProvider } from './context/ThemeContext';

// Lazy-loaded page components for code splitting & faster initial load
const HomePage = lazy(() => import('./pages/Home/HomePage').then(m => ({ default: m.HomePage })));
const SobrePage = lazy(() => import('./pages/Sobre/SobrePage').then(m => ({ default: m.SobrePage })));
const TrajetoriaPage = lazy(() => import('./pages/Trajetoria/TrajetoriaPage').then(m => ({ default: m.TrajetoriaPage })));
const FormacaoCertificadosPage = lazy(() => import('./pages/FormacaoCertificados/FormacaoCertificadosPage').then(m => ({ default: m.FormacaoCertificadosPage })));

const PsicanaliseHubPage = lazy(() => import('./pages/Psicanalise/PsicanaliseHubPage').then(m => ({ default: m.PsicanaliseHubPage })));
const OQueEAPsicanalisePage = lazy(() => import('./pages/Psicanalise/OQueEAPsicanalisePage').then(m => ({ default: m.OQueEAPsicanalisePage })));
const PrimeiraSessaoPage = lazy(() => import('./pages/Psicanalise/PrimeiraSessaoPage').then(m => ({ default: m.PrimeiraSessaoPage })));
const AtendimentoOnlinePage = lazy(() => import('./pages/Psicanalise/AtendimentoOnlinePage').then(m => ({ default: m.AtendimentoOnlinePage })));
const AtendimentoPresencialPage = lazy(() => import('./pages/Psicanalise/AtendimentoPresencialPage').then(m => ({ default: m.AtendimentoPresencialPage })));
const PerguntasFrequentesPage = lazy(() => import('./pages/Psicanalise/PerguntasFrequentesPage').then(m => ({ default: m.PerguntasFrequentesPage })));

const TerapiaAutoconhecimentoPage = lazy(() => import('./pages/TerapiaAutoconhecimento/TerapiaAutoconhecimentoPage').then(m => ({ default: m.TerapiaAutoconhecimentoPage })));

const ServicosHubPage = lazy(() => import('./pages/Servicos/ServicosHubPage').then(m => ({ default: m.ServicosHubPage })));
const OrientacaoFamiliarPage = lazy(() => import('./pages/Servicos/OrientacaoFamiliarPage').then(m => ({ default: m.OrientacaoFamiliarPage })));
const AcompanhanteTerapeuticoPage = lazy(() => import('./pages/Servicos/AcompanhanteTerapeuticoPage').then(m => ({ default: m.AcompanhanteTerapeuticoPage })));
const AnaliseComportamentalPage = lazy(() => import('./pages/Servicos/AnaliseComportamentalPage').then(m => ({ default: m.AnaliseComportamentalPage })));
const ConsultoriaOnlinePage = lazy(() => import('./pages/Servicos/ConsultoriaOnlinePage').then(m => ({ default: m.ConsultoriaOnlinePage })));

const PalestrasTreinamentosPage = lazy(() => import('./pages/PalestrasTreinamentos/PalestrasTreinamentosPage').then(m => ({ default: m.PalestrasTreinamentosPage })));
const PalestrasEmpresasPage = lazy(() => import('./pages/PalestrasTreinamentos/PalestrasEmpresasPage').then(m => ({ default: m.PalestrasEmpresasPage })));
const PalestrasEscolasPage = lazy(() => import('./pages/PalestrasTreinamentos/PalestrasEscolasPage').then(m => ({ default: m.PalestrasEscolasPage })));

const ProfessorPage = lazy(() => import('./pages/Professor/ProfessorPage').then(m => ({ default: m.ProfessorPage })));
const PsicanalistaJundiaiPage = lazy(() => import('./pages/PsicanalistaJundiai/PsicanalistaJundiaiPage').then(m => ({ default: m.PsicanalistaJundiaiPage })));

const BlogPage = lazy(() => import('./pages/Blog/BlogPage').then(m => ({ default: m.BlogPage })));
const BlogPostPage = lazy(() => import('./pages/Blog/BlogPostPage').then(m => ({ default: m.BlogPostPage })));

const ContatoPage = lazy(() => import('./pages/Contato/ContatoPage').then(m => ({ default: m.ContatoPage })));
const PrivacidadePage = lazy(() => import('./pages/Privacidade/PrivacidadePage').then(m => ({ default: m.PrivacidadePage })));
const TermosPage = lazy(() => import('./pages/Termos/TermosPage').then(m => ({ default: m.TermosPage })));
const MapaSitePage = lazy(() => import('./pages/MapaSite/MapaSitePage').then(m => ({ default: m.MapaSitePage })));
const NotFoundPage = lazy(() => import('./pages/NotFound/NotFoundPage').then(m => ({ default: m.NotFoundPage })));

const RouteLoadingFallback = () => (
  <div className="min-h-[50vh] flex items-center justify-center" aria-label="Carregando conteúdo...">
    <div className="w-8 h-8 rounded-full border-2 border-[#1e3878] border-t-[#4FD6F4] animate-spin" />
  </div>
);

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Layout>
          <Suspense fallback={<RouteLoadingFallback />}>
            <Routes>
              {/* Home */}
              <Route path="/" element={<HomePage />} />

              {/* Sobre */}
              <Route path="/sobre" element={<SobrePage />} />
              <Route path="/sobre/trajetoria" element={<TrajetoriaPage />} />
              <Route path="/sobre/formacao-e-certificados" element={<FormacaoCertificadosPage />} />

              {/* Psicanálise */}
              <Route path="/psicanalise" element={<PsicanaliseHubPage />} />
              <Route path="/psicanalise/o-que-e-psicanalise" element={<OQueEAPsicanalisePage />} />
              <Route path="/psicanalise/como-funciona-a-primeira-sessao" element={<PrimeiraSessaoPage />} />
              <Route path="/psicanalise/atendimento-online" element={<AtendimentoOnlinePage />} />
              <Route path="/psicanalise/atendimento-presencial-em-jundiai" element={<AtendimentoPresencialPage />} />
              <Route path="/psicanalise/perguntas-frequentes" element={<PerguntasFrequentesPage />} />

              {/* Terapia e Autoconhecimento */}
              <Route path="/terapia-e-autoconhecimento" element={<TerapiaAutoconhecimentoPage />} />

              {/* Serviços */}
              <Route path="/servicos" element={<ServicosHubPage />} />
              <Route path="/servicos/orientacao-familiar" element={<OrientacaoFamiliarPage />} />
              <Route path="/servicos/acompanhante-terapeutico" element={<AcompanhanteTerapeuticoPage />} />
              <Route path="/servicos/analise-comportamental" element={<AnaliseComportamentalPage />} />
              <Route path="/servicos/consultoria-online" element={<ConsultoriaOnlinePage />} />

              {/* Palestras e Treinamentos */}
              <Route path="/palestras-e-treinamentos" element={<PalestrasTreinamentosPage />} />
              <Route path="/palestras-e-treinamentos/para-empresas" element={<PalestrasEmpresasPage />} />
              <Route path="/palestras-e-treinamentos/para-escolas-e-instituicoes" element={<PalestrasEscolasPage />} />

              {/* Docência */}
              <Route path="/professor" element={<ProfessorPage />} />

              {/* SEO Local */}
              <Route path="/psicanalista-em-jundiai" element={<PsicanalistaJundiaiPage />} />

              {/* Blog */}
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/blog/categoria/:categoria" element={<BlogPage />} />
              <Route path="/blog/:slug" element={<BlogPostPage />} />

              {/* Contato & Políticas */}
              <Route path="/contato" element={<ContatoPage />} />
              <Route path="/politica-de-privacidade" element={<PrivacidadePage />} />
              <Route path="/termos-de-uso" element={<TermosPage />} />
              <Route path="/mapa-do-site" element={<MapaSitePage />} />

              {/* 404 */}
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
}
