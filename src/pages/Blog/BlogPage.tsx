import React from 'react';
import { Link } from 'react-router-dom';
import { SeoHead } from '../../components/seo/SeoHead';
import { Breadcrumbs } from '../../components/breadcrumbs/Breadcrumbs';
import { initialBlogPosts } from '../../data/blogPosts';
import { futureTopicsList } from '../../data/futureTopics';
import { siteConfig } from '../../config/siteConfig';
import { BookOpen, ArrowRight, AlertCircle, Sparkles, Clock, FileText } from 'lucide-react';

export const BlogPage: React.FC = () => {
  // Articles proposals available for evaluation
  const publishedPosts = initialBlogPosts.filter((post) => !post.draft);

  return (
    <>
      <SeoHead
        title="Blog e Artigos | Daniel Paulo"
        description="Artigos e ensaios reflexivos sobre psicanálise, autoconhecimento, identidade e desenvolvimento pessoal por Daniel Paulo."
        canonicalPath="/blog"
        noindex={true}
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
            Conteúdos informativos sobre a experiência psicanalítica, autoconhecimento e comportamento humano.
          </p>
        </div>

        {/* Editorial Status Notice (Section 7 from brief) */}
        {siteConfig.showEditorialReviewNotice && (
          <div className="p-4 sm:p-5 rounded-2xl bg-[#0e1e4a]/80 border border-amber-500/40 text-amber-200 flex items-start gap-3.5 shadow-md">
            <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5 text-amber-400" />
            <div className="space-y-1 text-xs sm:text-sm leading-relaxed">
              <strong className="text-amber-300 font-semibold">Proposta Editorial em Avaliação:</strong>
              <p className="text-amber-200/90 font-light">
                Os artigos abaixo constituem propostas de conteúdo estruturadas para o projeto institucional de Daniel Paulo, acompanhadas de fundamentação científica e referências bibliográficas, disponibilizadas para leitura, apreciação e validação do autor.
              </p>
            </div>
          </div>
        )}

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {publishedPosts.map((post) => (
            <article
              key={post.slug}
              className="bg-[#0e1e4a]/70 border border-[#1e3878] rounded-2xl overflow-hidden hover:border-[#4FD6F4]/50 transition-all flex flex-col justify-between group shadow-xl"
            >
              <div>
                {/* Cover Image */}
                {post.coverImage && (
                  <div className="aspect-[16/9] w-full overflow-hidden bg-[#081331] relative">
                    <img
                      src={post.coverImage}
                      alt={`Imagem ilustrativa do artigo: ${post.title}`}
                      className="w-full h-full object-cover aspect-[16/9] group-hover:scale-105 transition-transform duration-500"
                      width="640"
                      height="360"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0e1e4a] via-transparent to-transparent opacity-80" />
                    <span className="absolute bottom-3 left-4 text-[11px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#081331]/90 text-[#4FD6F4] backdrop-blur-sm border border-[#4FD6F4]/20">
                      {post.category}
                    </span>
                  </div>
                )}

                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#4FD6F4]" />
                      {post.readingTime}
                    </span>
                    {post.editorialStatus && (
                      <span className="text-[11px] text-amber-400/90 font-medium">
                        Proposta em avaliação
                      </span>
                    )}
                  </div>

                  <h2 className="text-lg font-bold text-white group-hover:text-[#4FD6F4] transition-colors font-['Plus_Jakarta_Sans'] leading-snug">
                    <Link to={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h2>

                  <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed line-clamp-3">
                    {post.description}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-[#1e3878]/60 mt-2 flex items-center justify-between">
                <span className="text-xs text-slate-400">Por {post.author}</span>
                <Link
                  to={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#4FD6F4] group-hover:translate-x-1 transition-transform"
                >
                  <span>Ler Artigo Completo</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Section: Próximas Pautas Editoriais em Análise (Future Topics) */}
        <section className="pt-8 border-t border-[#122456] space-y-6">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#122456] text-[#4FD6F4] flex items-center justify-center">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-white font-['Plus_Jakarta_Sans']">
                Próximas Pautas em Análise Editorial
              </h2>
              <p className="text-xs sm:text-sm text-slate-400">
                Pautas temáticas propostas para futuro desenvolvimento de conteúdo, aguardando validação de Daniel Paulo.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {futureTopicsList.map((topic) => (
              <div
                key={topic.id}
                className="p-5 rounded-2xl bg-[#081331] border border-[#1e3878]/70 space-y-3 relative hover:border-[#4FD6F4]/30 transition-colors"
              >
                <div className="flex items-center justify-between text-xs gap-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#122456] text-[#4FD6F4] font-medium text-[11px]">
                    {topic.category}
                  </span>
                  <span className="text-[10px] text-amber-400 px-2 py-0.5 rounded bg-amber-950/40 border border-amber-600/30">
                    Pauta em estudo
                  </span>
                </div>

                <h3 className="text-sm sm:text-base font-bold text-white font-['Plus_Jakarta_Sans'] leading-snug">
                  {topic.title}
                </h3>

                <p className="text-xs text-slate-300 font-light leading-relaxed">
                  {topic.description}
                </p>

                <div className="pt-2 text-[11px] text-slate-500 flex items-center gap-1">
                  <FileText className="w-3 h-3 text-[#4FD6F4]" />
                  <span>{topic.editorialStatus}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </>
  );
};
