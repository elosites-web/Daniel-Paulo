import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SeoHead } from '../../components/seo/SeoHead';
import { Breadcrumbs } from '../../components/breadcrumbs/Breadcrumbs';
import { initialBlogPosts, blogCategories, BlogPost } from '../../data/blogPosts';
import { futureTopicsList } from '../../data/futureTopics';
import { Search, Filter, BookOpen, Clock, Calendar, ArrowRight, FileText, CheckCircle2, Lock } from 'lucide-react';

export const BlogPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todas as categorias');
  const [activeTab, setActiveTab] = useState<'public' | 'editorial'>('public');

  // Strictly filter out draft: true from the public list as instructed
  const publishedPosts = initialBlogPosts.filter((post) => !post.draft);

  // Draft posts for editorial preview
  const draftPosts = initialBlogPosts.filter((post) => post.draft);

  const filteredDrafts = draftPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === 'Todas as categorias' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <SeoHead
        title="Blog e Artigos | Daniel Paulo"
        description="Artigos e ensaios reflexivos sobre psicanálise, autoconhecimento, identidade, inteligência emocional e desenvolvimento pessoal por Daniel Paulo."
        canonicalPath="/blog"
        breadcrumbs={[
          { name: 'Blog', url: '/blog' }
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 space-y-12">
        
        <Breadcrumbs items={[{ label: 'Blog & Artigos' }]} />

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#4FD6F4] uppercase">
            <BookOpen className="w-4 h-4" />
            <span>Reflexões & Ensaios</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-['Plus_Jakarta_Sans']">
            Blog e Artigos de Reflexão
          </h1>

          <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed">
            Conteúdos informativos sobre a experiência psicanalítica, autoconhecimento, máscaras sociais e comportamento humano.
          </p>
        </div>

        {/* Tab switch between Public view & Editorial Preview */}
        <div className="flex justify-center border-b border-[#1e3878]">
          <div className="flex gap-4">
            <button
              type="button"
              onClick={() => setActiveTab('public')}
              className={`pb-4 px-3 text-sm font-semibold border-b-2 transition-colors ${
                activeTab === 'public'
                  ? 'border-[#4FD6F4] text-[#4FD6F4]'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              Publicações Oficiais ({publishedPosts.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('editorial')}
              className={`pb-4 px-3 text-sm font-semibold border-b-2 transition-colors flex items-center gap-2 ${
                activeTab === 'editorial'
                  ? 'border-[#4FD6F4] text-[#4FD6F4]'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              <FileText className="w-4 h-4 text-amber-400" />
              <span>Painel Editorial & Rascunhos ({draftPosts.length})</span>
            </button>
          </div>
        </div>

        {/* TAB 1: PUBLIC VIEW (Shows Empty State because all 3 are draft: true as instructed) */}
        {activeTab === 'public' && (
          <div className="py-12 max-w-2xl mx-auto text-center space-y-5 bg-[#0e1e4a]/40 border border-[#1e3878] rounded-3xl p-8 sm:p-12">
            <div className="w-14 h-14 rounded-2xl bg-[#122456] text-[#4FD6F4] flex items-center justify-center mx-auto">
              <Clock className="w-7 h-7" />
            </div>
            <h2 className="text-2xl font-bold text-white font-['Plus_Jakarta_Sans']">
              Novos artigos em revisão editorial
            </h2>
            <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
              Os primeiros artigos da coluna de Daniel Paulo estão em fase de revisão textual e validação de fontes antes da publicação pública definitiva.
            </p>
            <div className="pt-2">
              <button
                type="button"
                onClick={() => setActiveTab('editorial')}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#122456] hover:bg-[#1a3378] text-[#4FD6F4] text-sm font-semibold transition-colors"
              >
                <FileText className="w-4 h-4" />
                <span>Visualizar rascunhos no Painel Editorial</span>
              </button>
            </div>
          </div>
        )}

        {/* TAB 2: EDITORIAL PREVIEW (Shows the 3 drafts and 7 future topics) */}
        {activeTab === 'editorial' && (
          <div className="space-y-12 animate-in fade-in duration-200">
            
            {/* Search and Category Filters */}
            <div className="flex flex-col sm:flex-row gap-4 justify-between items-center bg-[#0e1e4a]/50 p-4 rounded-2xl border border-[#1e3878]">
              <div className="relative w-full sm:w-80">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Buscar rascunho por termo..."
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#081331] text-white border border-[#1e3878] text-sm focus:outline-none focus:ring-2 focus:ring-[#4FD6F4]"
                />
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <Filter className="w-4 h-4 text-[#4FD6F4]" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full sm:w-auto px-3.5 py-2.5 rounded-xl bg-[#081331] text-white border border-[#1e3878] text-sm focus:outline-none focus:ring-2 focus:ring-[#4FD6F4]"
                >
                  {blogCategories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* List of 3 Draft Articles */}
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-white font-['Plus_Jakarta_Sans'] flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
                  <span>Rascunhos Iniciais Disponíveis para Revisão ({filteredDrafts.length})</span>
                </h3>
                <span className="text-xs text-slate-400">
                  Status: <code>draft: true</code>
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {filteredDrafts.map((post) => (
                  <article
                    key={post.slug}
                    className="bg-[#0e1e4a]/70 border border-[#1e3878] rounded-2xl p-6 hover:border-[#4FD6F4]/50 transition-all flex flex-col justify-between group shadow-xl"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-xs">
                        <span className="px-2.5 py-0.5 rounded-full bg-amber-950/80 border border-amber-600/50 text-amber-300 font-semibold">
                          Rascunho Editorial
                        </span>
                        <span className="text-slate-400">{post.readingTime}</span>
                      </div>

                      <span className="text-xs font-semibold text-[#4FD6F4] uppercase tracking-wider block">
                        {post.category}
                      </span>

                      <h4 className="text-lg font-bold text-white group-hover:text-[#4FD6F4] transition-colors font-['Plus_Jakarta_Sans'] leading-snug">
                        {post.title}
                      </h4>

                      <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                        {post.description}
                      </p>
                    </div>

                    <div className="pt-5 border-t border-[#1e3878]/60 mt-4 flex items-center justify-between">
                      <span className="text-xs text-slate-400">Por {post.author}</span>
                      <Link
                        to={`/blog/${post.slug}`}
                        className="inline-flex items-center gap-1 text-xs font-bold text-[#4FD6F4] group-hover:underline"
                      >
                        <span>Ler Rascunho Completo</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* List of 7 Future Editorial Topics */}
            <div className="p-8 rounded-3xl bg-[#0b183d] border border-[#1e3878] space-y-6">
              <div>
                <h3 className="text-xl font-bold text-white font-['Plus_Jakarta_Sans'] mb-1">
                  Pautas Editoriais Futuras (Calendário de Conteúdo)
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 font-light">
                  Temas planejados para redação futura por Daniel Paulo. Não possuem corpo de artigo publicado no momento.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {futureTopicsList.map((topic) => (
                  <div key={topic.id} className="p-4 rounded-xl bg-[#081331] border border-[#162c66] space-y-1.5">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-semibold text-[#4FD6F4]">{topic.category}</span>
                      <span className="text-[11px] text-slate-500 font-mono">Pauta #{topic.id.replace('pauta-', '')}</span>
                    </div>
                    <h5 className="font-bold text-white text-sm">{topic.title}</h5>
                    <p className="text-xs text-slate-300 font-light leading-relaxed">{topic.description}</p>
                    <p className="text-[11px] text-slate-400 font-mono pt-1">
                      Palavra-chave: <span className="text-[#8ea5c8]">{topic.primaryKeyword}</span>
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

      </div>
    </>
  );
};
