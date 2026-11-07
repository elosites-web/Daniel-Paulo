import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { ScrollToTop } from './components/navigation/ScrollToTop';

// Pages
import { HomePage } from './pages/Home/HomePage';
import { SobrePage } from './pages/Sobre/SobrePage';
import { TrajetoriaPage } from './pages/Trajetoria/TrajetoriaPage';
import { FormacaoCertificadosPage } from './pages/FormacaoCertificados/FormacaoCertificadosPage';

import { PsicanaliseHubPage } from './pages/Psicanalise/PsicanaliseHubPage';
import { OQueEAPsicanalisePage } from './pages/Psicanalise/OQueEAPsicanalisePage';
import { PrimeiraSessaoPage } from './pages/Psicanalise/PrimeiraSessaoPage';
import { AtendimentoOnlinePage } from './pages/Psicanalise/AtendimentoOnlinePage';
import { AtendimentoPresencialPage } from './pages/Psicanalise/AtendimentoPresencialPage';
import { PerguntasFrequentesPage } from './pages/Psicanalise/PerguntasFrequentesPage';

import { TerapiaAutoconhecimentoPage } from './pages/TerapiaAutoconhecimento/TerapiaAutoconhecimentoPage';

import { ServicosHubPage } from './pages/Servicos/ServicosHubPage';
import { OrientacaoFamiliarPage } from './pages/Servicos/OrientacaoFamiliarPage';
import { AcompanhanteTerapeuticoPage } from './pages/Servicos/AcompanhanteTerapeuticoPage';
import { AnaliseComportamentalPage } from './pages/Servicos/AnaliseComportamentalPage';
import { ConsultoriaOnlinePage } from './pages/Servicos/ConsultoriaOnlinePage';

import { PalestrasTreinamentosPage } from './pages/PalestrasTreinamentos/PalestrasTreinamentosPage';
import { PalestrasEmpresasPage } from './pages/PalestrasTreinamentos/PalestrasEmpresasPage';
import { PalestrasEscolasPage } from './pages/PalestrasTreinamentos/PalestrasEscolasPage';

import { ProfessorPage } from './pages/Professor/ProfessorPage';
import { PsicanalistaJundiaiPage } from './pages/PsicanalistaJundiai/PsicanalistaJundiaiPage';

import { BlogPage } from './pages/Blog/BlogPage';
import { BlogPostPage } from './pages/Blog/BlogPostPage';

import { ContatoPage } from './pages/Contato/ContatoPage';
import { PrivacidadePage } from './pages/Privacidade/PrivacidadePage';
import { TermosPage } from './pages/Termos/TermosPage';
import { MapaSitePage } from './pages/MapaSite/MapaSitePage';
import { NotFoundPage } from './pages/NotFound/NotFoundPage';

import { ThemeProvider } from './context/ThemeContext';

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Layout>
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
      </Layout>
    </BrowserRouter>
  </ThemeProvider>
);
}
