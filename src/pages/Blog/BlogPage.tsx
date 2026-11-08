import React from 'react';
import { Link } from 'react-router-dom';
import { SeoHead } from '../../components/seo/SeoHead';
import { Breadcrumbs } from '../../components/breadcrumbs/Breadcrumbs';
import { initialBlogPosts } from '../../data/blogPosts';
import { BookOpen, Clock, ArrowRight } from 'lucide-react';

export const BlogPage: React.FC = () => {
  // Only published articles (draft: false)
  const publishedPosts = initialBlogPosts.filter((post) => !post.draft);

  return (
    <>
      <SeoHead
        title="Blog e Artigos | Daniel Paulo"
        description="Artigos e ensaios reflexivos sobre psicanálise, autoconhecimento, identidade e desenvolvimento pessoal por Daniel Paulo."
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
            Conteúdos informativos sobre a experiência psicanalítica, autoconhecimento e comportamento humano.
          </p>
        </div>

        {/* Articles List or Short Notice */}
        {publishedPosts.length === 0 ? (
          <div id="aviso-artigos" className="py-16 max-w-xl mx-auto text-center space-y-4 bg-[#0e1e4a]/40 border border-[#1e3878] rounded-3xl p-8 sm:p-12">
            <div className="w-12 h-12 rounded-2xl bg-[#122456] text-[#4FD6F4] flex items-center justify-center mx-auto">
              <Clock className="w-6 h-6" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white font-['Plus_Jakarta_Sans']">
              Em breve, novos artigos
            </h2>
            <p className="text-sm text-slate-300 font-light leading-relaxed">
              Novos artigos e publicações reflexivas serão disponibilizados em breve.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {publishedPosts.map((post) => (
              <article
                key={post.slug}
                className="bg-[#0e1e4a]/70 border border-[#1e3878] rounded-2xl p-6 hover:border-[#4FD6F4]/50 transition-all flex flex-col justify-between group shadow-xl"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[#4FD6F4] font-semibold uppercase tracking-wider">{post.category}</span>
                    <span className="text-slate-400">{post.readingTime}</span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-[#4FD6F4] transition-colors font-['Plus_Jakarta_Sans'] leading-snug">
                    {post.title}
                  </h3>

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
                    <span>Ler Artigo</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </>
  );
};
