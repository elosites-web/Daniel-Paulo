import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, type Variants } from 'motion/react';
import { SeoHead } from '../../components/seo/SeoHead';
import { ScrollVideo } from '../../components/media/ScrollVideo';
import { CertificateGallery } from '../../components/certificates/CertificateGallery';
import { servicesData } from '../../data/services';
import { siteConfig, getWhatsAppUrl } from '../../config/siteConfig';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { WhatsAppIcon } from '../../components/ui/WhatsAppIcon';
import { initialBlogPosts } from '../../data/blogPosts';
import { 
  ArrowRight, 
  ShieldCheck, 
  Compass, 
  BookOpen, 
  GraduationCap, 
  Users, 
  Clock, 
  MapPin, 
  CheckCircle2, 
  ChevronDown, 
  Sparkles
} from 'lucide-react';

const heroContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

const heroItemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

const homeFaqs = [
  {
    question: 'Como funciona o primeiro contato com Daniel Paulo?',
    answer: 'O primeiro contato acontece preferencialmente por mensagem via WhatsApp. É um momento acolhedor para esclarecer dúvidas práticas, entender o que você procura e verificar a disponibilidade de horários para encontros online ou presenciais.',
  },
  {
    question: 'Qual a diferença entre o atendimento online e o presencial?',
    answer: 'Ambas as modalidades mantêm o mesmo rigor ético, confidencialidade e acolhimento. O atendimento online oferece comodidade geográfica e flexibilidade, enquanto o atendimento presencial é realizado na cidade de Jundiaí-SP.',
  },
  {
    question: 'A psicanálise é restrita a quem possui um problema grave?',
    answer: 'Não. A psicanálise é um espaço aberto a qualquer pessoa que deseje olhar para dentro, compreender suas repetições, elaborar momentos de transição de vida, lidar com angústias cotidianas ou aprofundar seu autoconhecimento.',
  },
  {
    question: 'Como são combinados horários e frequência das sessões?',
    answer: 'Os horários e a frequência são alinhados individualmente na conversa inicial, respeitando a rotina e as particularidades de cada pessoa.',
  },
  {
    question: 'A abordagem psicanalítica faz diagnósticos médicos?',
    answer: 'Não. O atendimento psicanalítico não emite laudos médicos, atestados ou diagnósticos de transtornos psiquiátricos. É um trabalho de escuta do sujeito, autoconhecimento e ressignificação de experiências.',
  },
];

export const HomePage: React.FC = () => {
  const isDesktop = useMediaQuery('(min-width: 1024px)');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const publishedBlogPosts = initialBlogPosts.filter((post) => !post.draft);
  const heroTrackRef = useRef<HTMLDivElement>(null);
  const aboutTrackRef = useRef<HTMLDivElement>(null);
  const section3TrackRef = useRef<HTMLDivElement>(null);
  const section5TrackRef = useRef<HTMLDivElement>(null);
  const section11TrackRef = useRef<HTMLDivElement>(null);

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  return (
    <>
      <SeoHead
        title="Psicanalista e Terapeuta em Jundiaí-SP"
        description="Atendimento psicanalítico humanizado, acolhedor e sem julgamentos por Daniel Paulo. Sessões online e presenciais em Jundiaí-SP. Conheça e agende uma conversa."
        canonicalPath="/"
        faqs={homeFaqs}
      />

      <div className="space-y-16 md:space-y-28 pb-20">
        
        {/* ========================================================
            SEÇÃO 1 — HERO PRINCIPAL (PINNED SCROLL VIDEO)
        ======================================================== */}
        <section
          id="inicio"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:grid lg:grid-cols-12 lg:gap-10 relative"
          aria-label="Apresentação institucional Daniel Paulo"
        >
          {/* Subtle gradient radial background */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#4FD6F4]/5 rounded-full blur-[140px]" />
            <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-[#0e1e4a]/40 rounded-full blur-[100px]" />
          </div>

          {/* Coluna de texto: sticky no desktop, fluxo normal no mobile */}
          <motion.div
            variants={heroContainerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 lg:sticky lg:top-24 lg:self-start lg:min-h-[calc(100svh-6rem)] lg:flex lg:flex-col lg:justify-center py-10 lg:py-0 space-y-4 sm:space-y-6 text-center lg:text-left relative z-10"
          >
            <motion.div variants={heroItemVariants} className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0e1e4a] border border-[#1e3878] text-xs font-semibold text-[#4FD6F4]">
              <Sparkles className="w-3.5 h-3.5 text-[#4FD6F4]" />
              <span>Espaço de Escuta e Autoconhecimento</span>
            </motion.div>

            <motion.h1 variants={heroItemVariants} className="text-2xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-white font-['Plus_Jakarta_Sans'] leading-[1.15]">
              Psicanalista e terapeuta em Jundiaí{' '}
              <span className="text-[#4FD6F4] block sm:inline">
                | Atendimento online e presencial
              </span>
            </motion.h1>

            <motion.p variants={heroItemVariants} className="text-sm sm:text-base md:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
              Uma abordagem humanizada, calorosa e sem julgamentos morais. Um lugar seguro para contemplar suas profundezas, elaborar conflitos e reencontrar sua autenticidade.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={heroItemVariants} className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-1">
              <a
                href={getWhatsAppUrl('Olá Daniel, conheci seu site institucional e gostaria de agendar uma conversa sobre atendimento.')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 sm:px-7 sm:py-4 rounded-xl font-bold text-sm sm:text-base bg-[#4FD6F4] text-[#081331] hover:bg-[#36c5e5] transition-all transform hover:-translate-y-0.5 shadow-xl shadow-[#4FD6F4]/20 focus:outline-none focus:ring-4 focus:ring-[#4FD6F4]/40"
                aria-label="Agendar conversa pelo WhatsApp com Daniel Paulo"
              >
                <WhatsAppIcon className="w-5 h-5" />
                <span>Agendar Conversa</span>
              </a>

              <Link
                to="/psicanalise"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 sm:px-6 sm:py-4 rounded-xl font-semibold text-sm sm:text-base bg-[#0e1e4a] text-slate-200 hover:text-white hover:bg-[#162c66] border border-[#1e3878] transition-all"
              >
                <span>Conhecer a Psicanálise</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            {/* Key feature pills */}
            <motion.div variants={heroItemVariants} className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#4FD6F4]" />
                <span>Sigilo e Ética Profissional</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#4FD6F4]" />
                <span>Presencial em Jundiaí & Online</span>
              </div>
              <div className="flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-[#4FD6F4]" />
                <span>Formação Multidisciplinar</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Coluna do vídeo: trilha de scroll */}
          <div ref={heroTrackRef} className="lg:col-span-5 relative h-[200svh] lg:h-[240vh]">
            <div className="sticky top-20 h-[calc(100svh-5rem)] flex items-center justify-center">
              <div className="relative aspect-[9/16] h-[min(calc(100svh-7rem),calc((100vw-2rem)*16/9))] max-w-full rounded-3xl overflow-hidden shadow-2xl border border-[#1e3878]/80 bg-[#060e24] transition-shadow duration-500 hover:shadow-[0_0_35px_rgba(79,214,244,0.25)]">
                <ScrollVideo
                  src={
                    isDesktop
                      ? '/assets/videos/hero-escuro-desktop-scroll.mp4'
                      : '/assets/videos/hero-escuro-mobile-scroll.mp4'
                  }
                  poster={
                    isDesktop
                      ? '/assets/videos/hero-escuro-desktop-poster.jpg'
                      : '/assets/videos/hero-escuro-mobile-poster.jpg'
                  }
                  altText="Daniel Paulo de terno azul com braços cruzados em ambiente noturno com vista ao mar"
                  className="w-full h-full"
                  videoClassName="object-cover object-center lg:object-[80%_center]"
                  priority={true}
                  trackRef={heroTrackRef}
                  topOffset={80}
                  endAt={0.8}
                />
                {/* Subtle edge overlay for visual blend */}
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-3xl pointer-events-none" />
                <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-[#081331] via-[#081331]/40 to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            SEÇÃO 2 — QUEM É DANIEL PAULO (PINNED SCROLL VIDEO)
        ======================================================== */}
        <section
          id="sobre"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:grid lg:grid-cols-12 lg:gap-10 relative"
          aria-label="Sobre o profissional Daniel Paulo"
        >
          {/* Coluna de texto: ordem 1 no mobile para leitura direta */}
          <div className="lg:col-span-7 order-1 lg:order-2 lg:sticky lg:top-24 lg:self-start lg:min-h-[calc(100svh-6rem)] lg:flex lg:flex-col lg:justify-center py-10 lg:py-0 space-y-4 sm:space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#4FD6F4] uppercase">
              <Compass className="w-4 h-4" />
              <span>Sobre o Profissional</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white font-['Plus_Jakarta_Sans']">
              Uma escuta atenta, humanizada e acolhedora
            </h2>

            <div className="space-y-3.5 sm:space-y-4 text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed font-light">
              <p>
                Daniel Paulo atua como psicanalista, terapeuta, professor acadêmico e palestrante, desenvolvendo conteúdos e processos voltados ao desenvolvimento pessoal e profissional.
              </p>
              <p>
                Na área de atendimento psicanalítico, prioriza uma abordagem sem julgamentos morais, proporcionando aos analisandos um espaço de diálogo sincero onde as próprias angústias e questionamentos possam ser elaborados.
              </p>
              <p>
                Sua trajetória profissional também reúne sólida vivência em gestão de pessoas, liderança e coordenação pedagógica, complementada por estudos em Psicanálise, Neurociências, Filosofia e Antropologia.
              </p>
            </div>

            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                to="/sobre"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#4FD6F4] hover:text-[#36c5e5] group"
              >
                <span>Conhecer a biografia completa</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <span className="text-slate-600 hidden sm:inline">•</span>
              <Link
                to="/sobre/trajetoria"
                className="inline-flex items-center gap-2 text-sm font-semibold text-slate-300 hover:text-white group"
              >
                <span>Ver linha do tempo profissional</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Coluna do vídeo: trilha de scroll */}
          <div ref={aboutTrackRef} className="lg:col-span-5 order-2 lg:order-1 relative h-[200svh] lg:h-[240vh]">
            <div className="sticky top-20 h-[calc(100svh-5rem)] flex items-center justify-center">
              <div className="relative aspect-[9/16] h-[min(calc(100svh-7rem),calc((100vw-2rem)*16/9))] max-w-full rounded-3xl overflow-hidden shadow-2xl border border-[#1e3878] bg-[#060e24] transition-shadow duration-500 hover:shadow-[0_0_35px_rgba(79,214,244,0.25)]">
                <ScrollVideo
                  src={
                    isDesktop
                      ? '/assets/videos/hero-claro-desktop-scroll.mp4'
                      : '/assets/videos/hero-claro-mobile-scroll.mp4'
                  }
                  poster={
                    isDesktop
                      ? '/assets/videos/hero-claro-desktop-poster.jpg'
                      : '/assets/videos/hero-claro-mobile-poster.jpg'
                  }
                  altText="Daniel Paulo em ambiente claro e acolhedor de atendimento com vista ao mar"
                  className="w-full h-full"
                  videoClassName="object-cover object-center lg:object-[80%_center]"
                  trackRef={aboutTrackRef}
                  topOffset={80}
                  endAt={0.68}
                />
                <div className="absolute bottom-3 inset-x-3 p-3 rounded-xl bg-[#081331]/80 backdrop-blur-md border border-[#1e3878]/60 text-center pointer-events-none z-10">
                  <p className="text-[11px] text-slate-400">
                    Ambientação visual e simbólica de estudo contínuo
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            SEÇÃO 3 — OLHAR PARA DENTRO: AUTOCONHECIMENTO (PINNED SCROLL VIDEO)
        ======================================================== */}
        <section
          id="autoconhecimento"
          ref={section3TrackRef}
          className="relative h-[200svh] lg:h-[240vh] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          aria-label="Autoconhecimento e reflexão com Daniel Paulo"
        >
          {/* Pinned inner container */}
          <div className="sticky top-20 h-[calc(100svh-5rem)] flex items-center justify-center">
            <div className="relative aspect-[9/16] lg:aspect-video h-[min(calc(100svh-7rem),calc((100vw-2rem)*16/9))] lg:h-auto lg:w-full max-w-full rounded-3xl overflow-hidden shadow-2xl border border-[#1e3878] bg-[#07112d]">
              <ScrollVideo
                src={
                  isDesktop
                    ? '/assets/videos/mar-por-do-sol-daniel-horizontal-scroll.mp4'
                    : '/assets/videos/mar-por-do-sol-daniel-vertical-scroll.mp4'
                }
                poster={
                  isDesktop
                    ? '/assets/videos/mar-por-do-sol-daniel-horizontal-poster.jpg'
                    : '/assets/videos/mar-por-do-sol-daniel-vertical-poster.jpg'
                }
                altText="Daniel contemplando o mar ao entardecer"
                className="w-full h-full"
                aspectRatio="none"
                trackRef={section3TrackRef}
              />
              
              {/* Gradient scrim for perfect text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#081331] via-[#081331]/80 to-transparent lg:bg-gradient-to-r lg:from-[#081331] lg:via-[#081331]/85 lg:to-transparent lg:w-3/4 z-10 pointer-events-none" />

              {/* Content inside video component */}
              <div className="absolute inset-0 z-20 flex items-center p-6 sm:p-10 lg:p-16">
                <div className="max-w-xl space-y-3.5 sm:space-y-5">
                  <div>
                    <span className="inline-block px-3 py-1 rounded-full bg-[#122456]/90 border border-[#4FD6F4]/40 text-xs font-semibold text-[#4FD6F4] uppercase tracking-wider backdrop-blur-sm">
                      Autoconhecimento & Reflexão
                    </span>
                  </div>
                  
                  <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-white font-['Plus_Jakarta_Sans'] leading-tight">
                    Aprender a olhar para dentro e acolher suas próprias profundezas
                  </h2>

                  <p className="text-xs sm:text-sm lg:text-base text-slate-200 leading-relaxed font-light line-clamp-4 sm:line-clamp-none">
                    O processo de autoconhecimento não busca criar uma versão idealizada ou perfeita de si mesmo, mas desatar nós, reconhecer padrões automáticos e construir uma relação de clareza com a própria história.
                  </p>

                  <div className="pt-1 sm:pt-2">
                    <Link
                      to="/terapia-e-autoconhecimento"
                      className="inline-flex items-center gap-2 px-4 py-2.5 sm:px-5 sm:py-3 rounded-xl font-semibold text-xs sm:text-sm bg-[#4FD6F4] text-[#081331] hover:bg-[#36c5e5] transition-all shadow-md"
                    >
                      <span>Explorar temas de autoconhecimento</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            SEÇÃO 4 — ÁREAS DE ATUAÇÃO E SERVIÇOS
        ======================================================== */}
        <section id="servicos" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
            <span className="text-xs font-semibold tracking-wider text-[#4FD6F4] uppercase">
              Serviços & Atuação
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-['Plus_Jakarta_Sans']">
              Como podemos caminhar juntos
            </h2>
            <p className="text-base text-slate-300 font-light">
              Modalidades de cuidado, escuta e desenvolvimento pessoal com limites éticos bem definidos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {servicesData.map((svc) => (
              <div
                key={svc.id}
                className="group bg-[#0e1e4a]/60 border border-[#1e3878] rounded-2xl p-6 sm:p-7 hover:border-[#4FD6F4]/50 transition-all duration-300 hover:shadow-2xl hover:shadow-[#4FD6F4]/5 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#122456] flex items-center justify-center text-[#4FD6F4] mb-5 group-hover:scale-105 transition-transform">
                    {svc.category === 'clinico' && <Compass className="w-6 h-6" />}
                    {svc.category === 'desenvolvimento' && <BookOpen className="w-6 h-6" />}
                    {svc.category === 'organizacional' && <Users className="w-6 h-6" />}
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-[#4FD6F4] transition-colors font-['Plus_Jakarta_Sans'] mb-2.5">
                    {svc.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed mb-4">
                    {svc.shortDescription}
                  </p>

                  <ul className="space-y-1.5 text-xs text-slate-400 mb-6">
                    {svc.bullets.slice(0, 2).map((b, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#4FD6F4] flex-shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to={svc.route}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#4FD6F4] group-hover:underline pt-2 border-t border-[#1e3878]/60"
                >
                  <span>Saber mais detalhes</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/servicos"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold bg-[#0e1e4a] text-slate-200 hover:text-white border border-[#1e3878] transition-colors"
            >
              <span>Ver todos os serviços em detalhes</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* ========================================================
            SEÇÃO 5 — ATENDIMENTO ONLINE E PRESENCIAL (PINNED SCROLL VIDEO)
        ======================================================== */}
        <section
          id="modalidades"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:grid lg:grid-cols-12 lg:gap-10 relative"
          aria-label="Modalidades de atendimento online e presencial"
        >
          {/* Coluna de texto */}
          <div className="lg:col-span-7 lg:sticky lg:top-24 lg:self-start lg:min-h-[calc(100svh-6rem)] lg:flex lg:flex-col lg:justify-center py-10 lg:py-0 space-y-5">
            <span className="text-xs font-semibold tracking-wider text-[#4FD6F4] uppercase">
              Modalidades Flexíveis
            </span>
            
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white font-['Plus_Jakarta_Sans']">
              Atendimento online e presencial em Jundiaí
            </h2>

            <div className="space-y-3.5 text-slate-300 text-sm sm:text-base leading-relaxed">
              <div className="p-4 rounded-xl bg-[#081331] border border-[#162c66] flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#4FD6F4] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-white text-base">Atendimento Presencial</h4>
                  <p className="text-xs sm:text-sm text-slate-300 mt-1">
                    Disponibilizado na cidade de Jundiaí-SP. Local, sala de atendimento e horários alinhados previamente via WhatsApp com o paciente.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#081331] border border-[#162c66] flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#4FD6F4] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-white text-base">Atendimento Online</h4>
                  <p className="text-xs sm:text-sm text-slate-300 mt-1">
                    Realizado com sigilo e ética profissional e comodidade, em atendimento online.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap gap-4">
              <a
                href={getWhatsAppUrl('Olá Daniel, gostaria de saber sobre as opções de atendimento online e presencial em Jundiaí.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm bg-[#4FD6F4] text-[#081331] hover:bg-[#36c5e5] transition-all shadow-md"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>Consultar Disponibilidade</span>
              </a>
              
              <Link
                to="/psicanalista-em-jundiai"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm bg-[#122456] text-white hover:bg-[#1a3378] transition-colors"
              >
                <span>Saiba mais sobre Jundiaí</span>
              </Link>
            </div>
          </div>

          {/* Coluna do vídeo: mesa/telefone - no celular quadro aspect-video w-full e trilha curta h-[140svh] */}
          <div ref={section5TrackRef} className="lg:col-span-5 relative h-[140svh] lg:h-[240vh]">
            <div className="sticky top-20 h-[calc(100svh-5rem)] flex items-center justify-center">
              <div className="relative aspect-video w-full max-w-full rounded-3xl overflow-hidden shadow-2xl border border-[#1e3878] bg-[#060e24]">
                <ScrollVideo
                  src="/assets/videos/daniel-mesa-telefone-horizontal-scroll.mp4"
                  poster="/assets/videos/daniel-mesa-telefone-horizontal-poster.jpg"
                  altText="Daniel ao telefone organizando contatos"
                  className="w-full h-full"
                  aspectRatio="none"
                  trackRef={section5TrackRef}
                />
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            SEÇÃO 6 — PRIMEIRO CONTATO EM 3 PASSOS SIMPLES
        ======================================================== */}
        <section id="etapas" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <span className="text-xs font-semibold tracking-wider text-[#4FD6F4] uppercase">
              Passo a Passo
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-['Plus_Jakarta_Sans']">
              Como iniciar sua jornada
            </h2>
            <p className="text-sm sm:text-base text-slate-300 font-light">
              Sem etapas burocráticas ou fórmulas rígidas. Um contato inicial direto e acolhedor.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Step 1 */}
            <div className="bg-[#0e1e4a]/70 border border-[#1e3878] rounded-2xl p-7 relative">
              <span className="text-4xl font-extrabold text-[#4FD6F4]/30 font-['Plus_Jakarta_Sans'] block mb-2">
                01
              </span>
              <h3 className="text-lg font-bold text-white mb-2 font-['Plus_Jakarta_Sans']">
                Conheça as Informações
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Explore o site, conheça a abordagem psicanalítica, as modalidades e reflita sobre o que você deseja trazer para o espaço terapêutico.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-[#0e1e4a]/70 border border-[#1e3878] rounded-2xl p-7 relative">
              <span className="text-4xl font-extrabold text-[#4FD6F4]/30 font-['Plus_Jakarta_Sans'] block mb-2">
                02
              </span>
              <h3 className="text-lg font-bold text-white mb-2 font-['Plus_Jakarta_Sans']">
                Entre em Contato
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Envie uma mensagem pelo WhatsApp ou utilize o formulário do site. Diga brevemente o que procura e se prefere online ou presencial.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-[#0e1e4a]/70 border border-[#1e3878] rounded-2xl p-7 relative">
              <span className="text-4xl font-extrabold text-[#4FD6F4]/30 font-['Plus_Jakarta_Sans'] block mb-2">
                03
              </span>
              <h3 className="text-lg font-bold text-white mb-2 font-['Plus_Jakarta_Sans']">
                Alinhe os Detalhes
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Converse para tirar dúvidas, alinhar horários disponíveis e combinar como acontecerá a primeira sessão, com total tranquilidade.
              </p>
            </div>
          </div>
        </section>

        {/* ========================================================
            SEÇÃO 7 — FORMAÇÃO E CERTIFICADOS COMPROVADOS
        ======================================================== */}
        <section id="certificados" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <span className="text-xs font-semibold tracking-wider text-[#4FD6F4] uppercase">
              Transparência & Rigor
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-['Plus_Jakarta_Sans']">
              Formação Acadêmica e Certificados
            </h2>
            <p className="text-sm sm:text-base text-slate-300 font-light">
              Comprovações oficiais emitidas por instituições reconhecidas, disponíveis para consulta e visualização ampliada.
            </p>
          </div>

          <CertificateGallery />
        </section>

        {/* ========================================================
            SEÇÃO 8 — DOCÊNCIA E PALESTRAS
        ======================================================== */}
        <section id="palestras" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0e1e4a]/60 border border-[#1e3878] rounded-3xl p-8 sm:p-12 lg:p-14">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              <div className="lg:col-span-4 flex justify-center">
                <div className="relative aspect-[3/4] w-full max-w-xs rounded-2xl overflow-hidden shadow-xl border border-[#1e3878]">
                  <img
                    src="/assets/fotos-daniel/daniel-paulo-palestrante-microfone-pb.webp"
                    alt="Daniel Paulo palestrando com microfone em mãos"
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                    width="400"
                    height="533"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#081331] via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-4 left-4 right-4 text-center">
                    <span className="text-xs font-semibold text-[#4FD6F4] uppercase tracking-wider">
                      Docência & Palestras
                    </span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-8 space-y-5">
                <span className="text-xs font-semibold tracking-wider text-[#4FD6F4] uppercase">
                  Ensino e Comunicação
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white font-['Plus_Jakarta_Sans']">
                  Desenvolvimento humano compartilhado em sala e palco
                </h2>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light">
                  Como professor na Faculdade Anhanguera e palestrante, Daniel Paulo desenvolve apresentações e treinamentos focados em inteligência emocional, identidade, liderança humanizada e superação da procrastinação.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-xl bg-[#081331]/80 border border-[#162c66]">
                    <h4 className="font-bold text-white text-sm">Palestras para Empresas</h4>
                    <p className="text-xs text-slate-400 mt-1">
                      Comunicação interpessoal, inteligência emocional e liderança sustentável.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-[#081331]/80 border border-[#162c66]">
                    <h4 className="font-bold text-white text-sm">Para Escolas e Instituições</h4>
                    <p className="text-xs text-slate-400 mt-1">
                      Diálogos reflexivos com educadores, pais e comunidades acadêmicas.
                    </p>
                  </div>
                </div>

                <div className="pt-2 flex flex-wrap gap-4">
                  <Link
                    to="/palestras-e-treinamentos"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm bg-[#4FD6F4] text-[#081331] hover:bg-[#36c5e5] transition-all"
                  >
                    <span>Conhecer Palestras</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    to="/professor"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm bg-[#122456] text-white hover:bg-[#1a3378] transition-colors"
                  >
                    <span>Atuação Docente</span>
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ========================================================
            SEÇÃO 9 — ARTIGOS E REFLEXÕES (BLOG)
            Exibida apenas quando houver ao menos 1 artigo publicado (draft: false)
        ======================================================== */}
        {publishedBlogPosts.length > 0 && (
          <section id="artigos" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
              <div>
                <span className="text-xs font-semibold tracking-wider text-[#4FD6F4] uppercase">
                  Produção Editorial
                </span>
                <h2 className="text-3xl font-bold text-white font-['Plus_Jakarta_Sans'] mt-1">
                  Artigos e Reflexões
                </h2>
              </div>
              <Link
                to="/blog"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#4FD6F4] hover:underline"
              >
                <span>Acessar área editorial do blog</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {publishedBlogPosts.map((post) => (
                <article
                  key={post.slug}
                  className="bg-[#0e1e4a]/60 border border-[#1e3878] rounded-2xl p-6 flex flex-col justify-between hover:border-[#4FD6F4]/50 transition-colors"
                >
                  <div className="space-y-3">
                    <span className="text-xs font-semibold text-[#4FD6F4] uppercase">
                      {post.category}
                    </span>
                    <h3 className="text-lg font-bold text-white font-['Plus_Jakarta_Sans']">
                      {post.title}
                    </h3>
                    <p className="text-sm text-slate-300 font-light leading-relaxed">
                      {post.description}
                    </p>
                  </div>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#4FD6F4] hover:underline pt-4 border-t border-[#1e3878]/60 mt-4"
                  >
                    <span>Ler artigo</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* ========================================================
            SEÇÃO 10 — PERGUNTAS FREQUENTES
        ======================================================== */}
        <section id="duvidas" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 space-y-2">
            <span className="text-xs font-semibold tracking-wider text-[#4FD6F4] uppercase">
              Esclarecimentos
            </span>
            <h2 className="text-3xl font-bold text-white font-['Plus_Jakarta_Sans']">
              Perguntas Frequentes
            </h2>
            <p className="text-sm text-slate-300 font-light">
              Dúvidas comuns sobre o primeiro contato, processo analítico e modalidades.
            </p>
          </div>

          <div className="space-y-3.5">
            {homeFaqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="rounded-xl border border-[#1e3878] bg-[#0e1e4a]/50 overflow-hidden transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-[#4FD6F4]"
                    aria-expanded={isOpen}
                  >
                    <span className="font-semibold text-white text-base font-['Plus_Jakarta_Sans']">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#4FD6F4] flex-shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-sm text-slate-300 leading-relaxed border-t border-[#1e3878]/40">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-8 text-center">
            <Link
              to="/psicanalise/perguntas-frequentes"
              className="text-sm font-semibold text-[#4FD6F4] hover:underline"
            >
              Ver todas as dúvidas na Central de Perguntas Frequentes →
            </Link>
          </div>
        </section>

        {/* ========================================================
            SEÇÃO 11 — CHAMADA FINAL COM VÍDEO PRAIA AO ENTARDECER (PINNED SCROLL VIDEO)
        ======================================================== */}
        <section
          id="contato"
          ref={section11TrackRef}
          className="relative h-[200svh] lg:h-[240vh] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          aria-label="Primeiro passo para agendamento com Daniel Paulo"
        >
          {/* Pinned inner container */}
          <div className="sticky top-20 h-[calc(100svh-5rem)] flex items-center justify-center">
            <div className="relative aspect-[9/16] lg:aspect-video h-[min(calc(100svh-7rem),calc((100vw-2rem)*16/9))] lg:h-auto lg:w-full max-w-full rounded-3xl overflow-hidden shadow-2xl border border-[#1e3878] bg-[#060d21]">
              <ScrollVideo
                src={
                  isDesktop
                    ? '/assets/videos/praia-entardecer-horizontal-scroll.mp4'
                    : '/assets/videos/praia-entardecer-vertical-scroll.mp4'
                }
                poster={
                  isDesktop
                    ? '/assets/videos/praia-entardecer-horizontal-poster.jpg'
                    : '/assets/videos/praia-entardecer-vertical-poster.jpg'
                }
                altText="Praia serena ao entardecer"
                className="w-full h-full"
                aspectRatio="none"
                trackRef={section11TrackRef}
              />
              
              {/* Scrim */}
              <div className="absolute inset-0 bg-[#081331]/75 backdrop-blur-[2px] z-10 pointer-events-none" />

              {/* Foreground content inside video component */}
              <div className="absolute inset-0 z-20 flex items-center justify-center p-6 sm:p-10 text-center">
                <div className="max-w-2xl space-y-4 sm:space-y-6">
                  <div>
                    <span className="inline-block px-3.5 py-1.5 rounded-full bg-[#122456] border border-[#4FD6F4]/40 text-xs font-semibold text-[#4FD6F4] uppercase tracking-wider">
                      Dê o Primeiro Passo
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white font-['Plus_Jakarta_Sans'] leading-tight">
                    Um espaço seguro para você falar sobre o que importa
                  </h2>

                  <p className="text-xs sm:text-base md:text-lg text-slate-200 font-light max-w-xl mx-auto leading-relaxed line-clamp-3 sm:line-clamp-none">
                    Sem julgamentos e sem fórmulas prontas. Entre em contato diretamente pelo WhatsApp para esclarecer suas dúvidas e iniciar um diálogo.
                  </p>

                  <div className="pt-1 sm:pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                    <a
                      href={getWhatsAppUrl('Olá Daniel, gostaria de conversar sobre o atendimento psicanalítico.')}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-bold text-sm sm:text-base bg-[#4FD6F4] text-[#081331] hover:bg-[#36c5e5] transition-all transform hover:-translate-y-0.5 shadow-xl shadow-[#4FD6F4]/20"
                    >
                      <WhatsAppIcon className="w-5 h-5" />
                      <span>Conversar no WhatsApp</span>
                    </a>

                    <Link
                      to="/contato"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 sm:px-6 sm:py-4 rounded-xl font-semibold text-xs sm:text-base bg-[#0e1e4a] text-white hover:bg-[#162c66] border border-[#1e3878] transition-colors"
                    >
                      <span>Formulário de Contato</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};
