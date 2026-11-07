import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SeoHead } from '../../components/seo/SeoHead';
import { Breadcrumbs } from '../../components/breadcrumbs/Breadcrumbs';
import { siteConfig, getWhatsAppUrl } from '../../config/siteConfig';
import { MapPin, MessageCircle, ArrowRight, ShieldCheck, CheckCircle2, ChevronDown } from 'lucide-react';

const jundiaiFaqs = [
  {
    question: 'Onde ocorrem as sessões presenciais em Jundiaí?',
    answer: 'Os atendimentos presenciais são realizados em espaço reservado e acolhedor na cidade de Jundiaí-SP. As orientações exatas de endereço e acesso ao local são fornecidas diretamente na conversa inicial de agendamento.',
  },
  {
    question: 'Quem mora na região de Jundiaí pode optar pelo atendimento online?',
    answer: 'Sim. Mesmo morando em Jundiaí, Várzea Paulista, Campo Limpo Paulista, Itupeva ou cidades vizinhas, você tem total liberdade de escolher entre encontros presenciais ou a comodidade do atendimento online.',
  },
  {
    question: 'Como agendar uma conversa inicial em Jundiaí?',
    answer: 'Basta enviar uma mensagem diretamente pelo WhatsApp (+55 11 96019-3062). Daniel Paulo informará os dias e horários com disponibilidade na agenda presencial.',
  },
];

export const PsicanalistaJundiaiPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <>
      <SeoHead
        title="Psicanalista em Jundiaí-SP | Atendimento com Daniel Paulo"
        description="Procurando psicanalista em Jundiaí? Conheça Daniel Paulo: atendimento psicanalítico humanizado, presencial em Jundiaí-SP e online. Agende sua conversa."
        canonicalPath="/psicanalista-em-jundiai"
        faqs={jundiaiFaqs}
        breadcrumbs={[
          { name: 'Psicanalista em Jundiaí', url: '/psicanalista-em-jundiai' }
        ]}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 space-y-12">
        
        <Breadcrumbs items={[{ label: 'Psicanalista em Jundiaí-SP' }]} />

        <article className="space-y-8">
          
          <header className="space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#4FD6F4] uppercase">
              <MapPin className="w-4 h-4" />
              <span>SEO Local Jundiaí - SP</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-['Plus_Jakarta_Sans'] leading-tight">
              Psicanalista e Terapeuta em Jundiaí: escuta atenta e acolhimento humano
            </h1>

            <p className="text-lg text-slate-300 font-light leading-relaxed">
              Se você reside em Jundiaí ou região e busca um espaço seguro para falar abertamente sobre suas questões sem julgamentos, conheça a atuação de Daniel Paulo.
            </p>
          </header>

          <div className="text-slate-300 space-y-6 text-base sm:text-lg leading-relaxed font-light">
            {/* Direct answer to search intent */}
            <div className="p-6 rounded-2xl bg-[#0e1e4a]/70 border border-[#1e3878]">
              <h2 className="text-xl font-bold text-white mb-2 font-['Plus_Jakarta_Sans']">
                Atendimento Psicanalítico na Cidade de Jundiaí
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Daniel Paulo é psicanalista, terapeuta e professor atuante em Jundiaí-SP. Seu trabalho clínico oferece suporte para pessoas que buscam autoconhecimento, enfrentam momentos de angústia, luto, transição profissional ou desejam compreender melhor seus padrões repetitivos e relacionamentos.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-white font-['Plus_Jakarta_Sans'] pt-4">
              Modalidades Disponíveis para Moradores de Jundiaí e Região
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
              <div className="p-6 rounded-2xl bg-[#081331] border border-[#162c66] space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#122456] flex items-center justify-center text-[#4FD6F4]">
                  <MapPin className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white font-['Plus_Jakarta_Sans']">
                  Presencial em Jundiaí
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Encontros presenciais em ambiente reservado e tranquilo, ideal para quem deseja se desconectar da rotina e viver a experiência presencial da clínica.
                </p>
                <Link
                  to="/psicanalise/atendimento-presencial-em-jundiai"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#4FD6F4] hover:underline pt-1"
                >
                  <span>Ver detalhes do presencial</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="p-6 rounded-2xl bg-[#081331] border border-[#162c66] space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#122456] flex items-center justify-center text-[#4FD6F4]">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white font-['Plus_Jakarta_Sans']">
                  Atendimento Online
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Mesmo morando em Jundiaí, você pode optar pela flexibilidade de realizar suas sessões a partir da sua casa ou escritório, com o mesmo sigilo ético.
                </p>
                <Link
                  to="/psicanalise/atendimento-online"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#4FD6F4] hover:underline pt-1"
                >
                  <span>Ver detalhes do online</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-white font-['Plus_Jakarta_Sans'] pt-4">
              Como Funciona o Primeiro Contato?
            </h2>
            <ol className="space-y-3 not-prose text-slate-300 text-base list-decimal list-inside">
              <li>Você envia uma mensagem para o WhatsApp <strong>+55 (11) 96019-3062</strong> informando seu interesse.</li>
              <li>Daniel Paulo esclarece suas dúvidas pontuais sobre formato, frequência e horários disponíveis.</li>
              <li>Vocês combinam a data do primeiro encontro para que você possa vivenciar o espaço de escuta.</li>
            </ol>
          </div>

          {/* Local FAQs */}
          <div className="space-y-4 pt-4">
            <h2 className="text-2xl font-bold text-white font-['Plus_Jakarta_Sans']">
              Perguntas Frequentes sobre Atendimento em Jundiaí
            </h2>

            <div className="space-y-3">
              {jundiaiFaqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-[#1e3878] bg-[#0e1e4a]/60 overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-[#4FD6F4]"
                    aria-expanded={openFaq === idx}
                  >
                    <span className="font-semibold text-white text-base">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#4FD6F4] flex-shrink-0 transition-transform ${
                        openFaq === idx ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {openFaq === idx && (
                    <div className="px-5 pb-5 pt-1 text-sm text-slate-300 border-t border-[#1e3878]/40">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* CTA Box */}
          <div className="p-8 rounded-3xl bg-[#0b183d] border border-[#1e3878] text-center space-y-4">
            <h3 className="text-2xl font-bold text-white font-['Plus_Jakarta_Sans']">
              Agende sua conversa em Jundiaí-SP
            </h3>
            <p className="text-sm text-slate-300 max-w-lg mx-auto font-light">
              Clique no botão abaixo para abrir diretamente o WhatsApp e iniciar um diálogo sobre seu atendimento.
            </p>
            <div>
              <a
                href={getWhatsAppUrl('Olá Daniel, sou de Jundiaí/região e gostaria de saber sobre horários para atendimento psicanalítico.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm bg-[#4FD6F4] text-[#081331] hover:bg-[#36c5e5] transition-all shadow-md"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Conversar no WhatsApp</span>
              </a>
            </div>
          </div>

        </article>

      </div>
    </>
  );
};
