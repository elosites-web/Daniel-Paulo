import React, { useEffect } from 'react';
import { siteConfig } from '../../config/siteConfig';

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface FaqItem {
  question: string;
  answer: string;
}

interface SeoHeadProps {
  title: string;
  description: string;
  canonicalPath?: string;
  ogImage?: string;
  noindex?: boolean;
  breadcrumbs?: BreadcrumbItem[];
  faqs?: FaqItem[];
  articleSchema?: {
    headline: string;
    description: string;
    datePublished?: string;
    dateModified?: string;
  };
}

export const SeoHead: React.FC<SeoHeadProps> = ({
  title,
  description,
  canonicalPath = '',
  ogImage = '/assets/social/og-image-1200x630.png',
  noindex = false,
  breadcrumbs,
  faqs,
  articleSchema,
}) => {
  useEffect(() => {
    // Update document title
    const fullTitle = `${title} | Daniel Paulo`;
    document.title = fullTitle;

    // Update meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description);

    // Helper to update or create meta tags
    const updateMeta = (selector: string, attr: string, value: string) => {
      let el = document.querySelector(selector);
      if (!el) {
        el = document.createElement('meta');
        const parts = selector.replace('meta[', '').replace(']', '').split('=');
        if (parts.length === 2) {
          el.setAttribute(parts[0], parts[1].replace(/["']/g, ''));
        }
        document.head.appendChild(el);
      }
      el.setAttribute(attr, value);
    };

    // Meta robots for noindex (e.g. draft pages)
    if (noindex) {
      updateMeta('meta[name="robots"]', 'content', 'noindex, nofollow');
    } else {
      const robotsMeta = document.querySelector('meta[name="robots"]');
      if (robotsMeta) {
        robotsMeta.setAttribute('content', 'index, follow');
      }
    }

    // Absolute URLs for og:image and og:url when SITE_URL exists
    const fullOgImage = siteConfig.SITE_URL
      ? (ogImage.startsWith('http') ? ogImage : `${siteConfig.SITE_URL}${ogImage.startsWith('/') ? ogImage : `/${ogImage}`}`)
      : ogImage;

    updateMeta('meta[property="og:title"]', 'content', fullTitle);
    updateMeta('meta[property="og:description"]', 'content', description);
    updateMeta('meta[property="og:image"]', 'content', fullOgImage);
    updateMeta('meta[name="twitter:title"]', 'content', fullTitle);
    updateMeta('meta[name="twitter:description"]', 'content', description);
    updateMeta('meta[name="twitter:image"]', 'content', fullOgImage);

    // og:url & Canonical URL (strictly conditioned on SITE_URL as instructed)
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (siteConfig.SITE_URL) {
      const fullUrl = `${siteConfig.SITE_URL}${canonicalPath.startsWith('/') ? canonicalPath : `/${canonicalPath}`}`;
      updateMeta('meta[property="og:url"]', 'content', fullUrl);
      if (!canonicalLink) {
        canonicalLink = document.createElement('link');
        canonicalLink.setAttribute('rel', 'canonical');
        document.head.appendChild(canonicalLink);
      }
      canonicalLink.setAttribute('href', fullUrl);
    } else {
      const ogUrlMeta = document.querySelector('meta[property="og:url"]');
      if (ogUrlMeta) ogUrlMeta.remove();
      if (canonicalLink) {
        canonicalLink.remove();
      }
    }

    // Build JSON-LD structured data (strictly verified facts only)
    const addJsonLd = (data: object, id: string) => {
      let script = document.getElementById(id) as HTMLScriptElement | null;
      if (!script) {
        script = document.createElement('script');
        script.id = id;
        script.type = 'application/ld+json';
        document.head.appendChild(script);
      }
      script.text = JSON.stringify(data);
    };

    // 1. Person entity (Daniel Paulo)
    const sameAsUrls = [
      siteConfig.social.instagram,
      siteConfig.social.linkedin,
    ].filter(Boolean);

    if (siteConfig.social.facebookUrl) {
      sameAsUrls.push(siteConfig.social.facebookUrl);
    }

    const personSchema = {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: siteConfig.name,
      jobTitle: 'Psicanalista, Terapeuta e Professor',
      description: 'Atendimento humanizado em psicanálise e terapia em Jundiaí-SP e online. Docente e palestrante.',
      url: siteConfig.SITE_URL || undefined,
      sameAs: sameAsUrls,
      knowsAbout: [
        'Psicanálise',
        'Autoconhecimento',
        'Neurociências',
        'Filosofia',
        'Antropologia',
        'Desenvolvimento Pessoal e Liderança'
      ],
      address: {
        '@type': 'PostalAddress',
        addressLocality: siteConfig.city,
        addressRegion: siteConfig.state,
        addressCountry: siteConfig.country,
      },
    };
    addJsonLd(personSchema, 'schema-person');

    // 2. ProfessionalService
    const professionalServiceSchema = {
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      name: `Daniel Paulo - ${siteConfig.profession}`,
      description: 'Atendimento psicanalítico e terapêutico acolhedor, online e presencial em Jundiaí-SP.',
      areaServed: {
        '@type': 'City',
        name: siteConfig.city,
      },
      availableService: [
        {
          '@type': 'Service',
          name: 'Atendimento Psicanalítico Online e Presencial',
        },
        {
          '@type': 'Service',
          name: 'Orientação Familiar',
        },
        {
          '@type': 'Service',
          name: 'Acompanhante Terapêutico',
        },
        {
          '@type': 'Service',
          name: 'Análise Comportamental',
        },
        {
          '@type': 'Service',
          name: 'Consultoria Online',
        },
        {
          '@type': 'Service',
          name: 'Palestras e Treinamentos',
        },
      ],
    };
    addJsonLd(professionalServiceSchema, 'schema-professional-service');

    // 3. Breadcrumbs if provided
    if (breadcrumbs && breadcrumbs.length > 0) {
      const breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbs.map((crumb, idx) => ({
          '@type': 'ListItem',
          position: idx + 1,
          name: crumb.name,
          item: siteConfig.SITE_URL ? `${siteConfig.SITE_URL}${crumb.url}` : crumb.url,
        })),
      };
      addJsonLd(breadcrumbSchema, 'schema-breadcrumbs');
    }

    // 4. FAQ Schema if FAQs provided
    if (faqs && faqs.length > 0) {
      const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((f) => ({
          '@type': 'Question',
          name: f.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: f.answer,
          },
        })),
      };
      addJsonLd(faqSchema, 'schema-faq');
    }

    // 5. BlogPosting Schema if articleSchema provided
    if (articleSchema) {
      const blogPostingSchema = {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: articleSchema.headline,
        description: articleSchema.description,
        datePublished: articleSchema.datePublished,
        dateModified: articleSchema.dateModified || articleSchema.datePublished,
        author: {
          '@type': 'Person',
          name: siteConfig.name,
        },
        publisher: {
          '@type': 'Person',
          name: siteConfig.name,
        },
        mainEntityOfPage: siteConfig.SITE_URL
          ? `${siteConfig.SITE_URL}${canonicalPath.startsWith('/') ? canonicalPath : `/${canonicalPath}`}`
          : undefined,
      };
      addJsonLd(blogPostingSchema, 'schema-blog-posting');
    }

    return () => {
      // Clean up dynamic route scripts on unmount
      const breadcrumbScript = document.getElementById('schema-breadcrumbs');
      if (breadcrumbScript) breadcrumbScript.remove();
      const faqScript = document.getElementById('schema-faq');
      if (faqScript) faqScript.remove();
      const articleScript = document.getElementById('schema-blog-posting');
      if (articleScript) articleScript.remove();
    };
  }, [title, description, canonicalPath, ogImage, noindex, breadcrumbs, faqs, articleSchema]);

  return null;
};
