import React, { useRef } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { SeoHead } from '../../components/seo/SeoHead';
import { Breadcrumbs } from '../../components/breadcrumbs/Breadcrumbs';
import { ReadingProgressBar } from '../../components/ui/ReadingProgressBar';
import { initialBlogPosts } from '../../data/blogPosts';
import { siteConfig, getWhatsAppUrl } from '../../config/siteConfig';
import { Clock, User, ArrowLeft, ArrowRight, AlertCircle, BookOpen, ShieldCheck, Tag } from 'lucide-react';
import { WhatsAppIcon } from '../../components/ui/WhatsAppIcon';

import { NotFoundPage } from '../NotFound/NotFoundPage';

export const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const articleRef = useRef<HTMLElement>(null);

  const post = initialBlogPosts.find((p) => p.slug === slug);

  // Return 404 for draft: true in production (show drafts only with import.meta.env.DEV)
  if (!post || (post.draft && !import.meta.env.DEV)) {
    return <NotFoundPage />;
  }

  const relatedPosts = initialBlogPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  const formatInlineText = (text: string): React.ReactNode => {
    const parts = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={i} className="font-semibold text-white">{part.slice(2, -2)}</strong>;
      }
      if (part.startsWith('*') && part.endsWith('*')) {
        return <em key={i} className="italic text-slate-200">{part.slice(1, -1)}</em>;
      }
      return part;
    });
  };

  const renderArticleContent = (rawContent: string) => {
    const blocks = rawContent.trim().split(/\n\s*\n/);
    return blocks.map((block, idx) => {
      const trimmed = block.trim();

      // Heading 3 with optional {#anchor-id}
      const headingMatch = trimmed.match(/^###\s+(.+?)(?:\s+\{#([a-zA-Z0-9_-]+)\})?$/);
      if (headingMatch) {
        const headingText = headingMatch[1].trim();
        const headingId = headingMatch[2];
        return (
          <h3
            key={idx}
            id={headingId}
            className="text-2xl font-bold text-white font-['Plus_Jakarta_Sans'] pt-8 pb-3 border-b border-[#1e3878]/50"
          >
            {formatInlineText(headingText)}
          </h3>
        );
      }

      // Unordered list
      const lines = trimmed.split('\n');
      if (lines.length > 0 && lines.every((l) => l.trim().startsWith('- ') || l.trim().startsWith('* '))) {
        return (
          <ul key={idx} className="space-y-2 list-disc list-inside text-slate-300 pl-2">
            {lines.map((line, lIdx) => {
              const itemText = line.trim().replace(/^[-*]\s+/, '');
              return (
                <li key={lIdx} className="leading-relaxed">
                  {formatInlineText(itemText)}
                </li>
              );
            })}
          </ul>
        );
      }

      // Ordered list
      if (lines.length > 0 && lines.every((l) => /^\d+\.\s+/.test(l.trim()))) {
        return (
          <ol key={idx} className="space-y-2 list-decimal list-inside text-slate-300 pl-2">
            {lines.map((line, lIdx) => {
              const itemText = line.trim().replace(/^\d+\.\s+/, '');
              return (
                <li key={lIdx} className="leading-relaxed">
                  {formatInlineText(itemText)}
                </li>
              );
            })}
          </ol>
        );
      }

      // Paragraph
      return (
        <p key={idx} className="text-slate-300 leading-relaxed font-light">
          {formatInlineText(trimmed)}
        </p>
      );
    });
  };

  return (
    <>
      <SeoHead
        title={post.title}
        description={post.description}
        canonicalPath={`/blog/${post.slug}`}
        noindex={Boolean(post.draft)}
        articleSchema={
          !post.draft
            ? {
                headline: post.title,
                description: post.description,
                datePublished: post.date || undefined,
                dateModified: post.updated || post.date || undefined,
              }
            : undefined
        }
        breadcrumbs={[
          { name: 'Blog', url: '/blog' },
          { name: post.title, url: `/blog/${post.slug}` }
        ]}
      />

      {/* Reading Progress Bar at the top of the viewport */}
      <ReadingProgressBar label={`Progresso de leitura: ${post.title}`} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 space-y-12">
        
        <Breadcrumbs
          items={[
            { label: 'Blog & Artigos', href: '/blog' },
            { label: post.title }
          ]}
        />

        <article id="conteudo-artigo" ref={articleRef} className="space-y-8">
          
          {/* Header */}
          <header className="space-y-4 border-b border-[#1e3878] pb-8">
            <div className="flex flex-wrap items-center gap-2 text-xs">
              <span className="px-3 py-1 rounded-full bg-[#122456] text-[#4FD6F4] font-semibold uppercase tracking-wider">
                {post.category}
              </span>
              {post.draft && (
                <span className="px-3 py-1 rounded-full bg-amber-950/80 border border-amber-600/50 text-amber-300 font-semibold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                  Rascunho Editorial em Revisão
                </span>
              )}
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-['Plus_Jakarta_Sans'] leading-tight">
              {post.title}
            </h1>

            <p className="text-lg text-slate-300 font-light leading-relaxed">
              {post.description}
            </p>

            <div className="flex flex-wrap items-center gap-6 pt-2 text-xs text-slate-400">
              <div className="flex items-center gap-1.5">
                <User className="w-4 h-4 text-[#4FD6F4]" />
                <span className="text-slate-300 font-medium">Por {post.author}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#4FD6F4]" />
                <span>{post.readingTime}</span>
              </div>
            </div>
          </header>

          {/* TL;DR Summary Box (2-3 lines) */}
          <div id="resumo" className="p-6 rounded-2xl bg-[#0e1e4a]/80 border border-[#4FD6F4]/40 shadow-lg space-y-2">
            <span className="text-xs font-bold text-[#4FD6F4] uppercase tracking-wider block">
              Resumo Rápido (TL;DR)
            </span>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-light">
              {post.tldr}
            </p>
          </div>

          {/* Table of Contents (Navigable Anchors) */}
          {post.tableOfContents && post.tableOfContents.length > 0 && (
            <div id="indice" className="p-6 rounded-2xl bg-[#081331] border border-[#1e3878] space-y-3">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                Índice Navegável
              </span>
              <ul className="space-y-2 text-sm text-[#4FD6F4]">
                {post.tableOfContents.map((toc) => (
                  <li key={toc.id}>
                    <a href={`#${toc.id}`} className="hover:underline flex items-center gap-1.5">
                      <span>•</span>
                      <span>{toc.text}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Body Content with semantic heading IDs */}
          <div className="text-slate-200 space-y-6 text-base sm:text-lg leading-relaxed font-light">
            {renderArticleContent(post.content)}
          </div>

          {/* Tags */}
          <div id="tags" className="pt-6 border-t border-[#1e3878] flex flex-wrap items-center gap-2">
            <Tag className="w-4 h-4 text-[#4FD6F4] mr-1" />
            {post.tags.map((tag) => (
              <span key={tag} className="text-xs px-2.5 py-1 rounded-lg bg-[#0e1e4a] text-slate-300">
                #{tag}
              </span>
            ))}
          </div>

          {/* Mandatory Informational Disclaimer */}
          <div id="aviso-responsabilidade" className="p-5 rounded-2xl bg-[#081331] border border-[#162c66] flex items-start gap-3 text-xs text-slate-400">
            <ShieldCheck className="w-5 h-5 text-[#4FD6F4] flex-shrink-0 mt-0.5" />
            <p>
              <strong>Aviso de responsabilidade:</strong> O conteúdo deste artigo é de caráter exclusivamente informativo e reflexivo, não constituindo prescrição clínica, conselho médico nem substituindo o acompanhamento psicanalítico ou terapêutico individualizado.
            </p>
          </div>

          {/* About Author Box */}
          <div id="sobre-autor" className="p-7 rounded-3xl bg-[#0b183d] border border-[#1e3878] flex flex-col sm:flex-row items-center gap-6">
            <img
              src="/assets/fotos-daniel/daniel-paulo-avatar.webp"
              alt="Daniel Paulo"
              className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover object-center border-2 border-[#4FD6F4] flex-shrink-0 shadow-lg"
              loading="lazy"
            />
            <div className="space-y-2 text-center sm:text-left">
              <h3 className="text-lg font-bold text-white font-['Plus_Jakarta_Sans']">
                Sobre {siteConfig.name}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                Psicanalista, terapeuta e professor universitário em Jundiaí-SP. Dedica-se à escuta humanizada, docência no ensino superior e palestras sobre inteligência emocional e relações interpessoais.
              </p>
            </div>
          </div>

          {/* Discrete CTA for Contact */}
          <div id="contato" className="p-8 rounded-3xl bg-[#0e1e4a]/60 border border-[#1e3878] text-center space-y-4">
            <h3 className="text-xl font-bold text-white font-['Plus_Jakarta_Sans']">
              Identificou-se com esta reflexão?
            </h3>
            <p className="text-sm text-slate-300 max-w-md mx-auto font-light">
              Se você deseja aprofundar essas questões na sua vida pessoal, inicie um diálogo com Daniel Paulo.
            </p>
            <div>
              <a
                href={getWhatsAppUrl(`Olá Daniel, li o artigo "${post.title}" no site e gostaria de conversar.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm bg-[#4FD6F4] text-[#081331] hover:bg-[#36c5e5] transition-all shadow-md"
              >
                <WhatsAppIcon className="w-4 h-4 fill-current" />
                <span>Conversar pelo WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Back to Blog */}
          <div className="pt-4 text-center">
            <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-[#4FD6F4] hover:underline font-semibold">
              <ArrowLeft className="w-4 h-4" />
              <span>Voltar para a lista de artigos do Blog</span>
            </Link>
          </div>

        </article>

      </div>
    </>
  );
};
