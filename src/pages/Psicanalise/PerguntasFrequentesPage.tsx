import React, { useState } from 'react';
import { SeoHead } from '../../components/seo/SeoHead';
import { Breadcrumbs } from '../../components/breadcrumbs/Breadcrumbs';
import { getWhatsAppUrl } from '../../config/siteConfig';
import { HelpCircle, ChevronDown, MessageCircle, ArrowRight } from 'lucide-react';

const detailedFaqs = [
  {
    question: 'Qual a diferença entre psicanálise, psicologia e psiquiatria?',
    answer: 'A psiquiatria é uma especialidade médica focada no diagnóstico e tratamento medicamentoso de transtornos mentais. A psicologia clínica estuda e atua sobre o comportamento e os processos mentais a partir de diversas correntes teóricas. A psicanálise, criada por Freud e expandida por diversos autores contemporâneos, é um método de investigação e escuta clínica centrado na fala livre e no inconsciente, buscando a origem subjetiva dos sintomas e conflitos. As três áreas podem atuar de forma complementar.',
  },
  {
    question: 'Como funciona o primeiro contato com Daniel Paulo?',
    answer: 'O primeiro contato é realizado preferencialmente por mensagem via WhatsApp. É uma conversa inicial acolhedora para que você apresente brevemente suas dúvidas e expectativas, e para que possam alinhar disponibilidade de dias e horários.',
  },
  {
    question: 'Existe um número mínimo ou obrigatório de sessões?',
    answer: 'Não existe um pacote fixo ou número pré-determinado de encontros. O processo psicanalítico respeita o tempo singular de elaboração de cada indivíduo, podendo durar o tempo que for benéfico e fizer sentido para você.',
  },
  {
    question: 'O atendimento online tem a mesma eficácia do presencial?',
    answer: 'Sim. A escuta psicanalítica, o sigilo profissional e a dedicação do terapeuta permanecem idênticos. A modalidade online requer apenas que você esteja em um local privado e com boa conexão à internet.',
  },
  {
    question: 'Preciso ter um diagnóstico ou problema grave para fazer psicanálise?',
    answer: 'Não. A psicanálise acolhe tanto pessoas que enfrentam angústias intensas, lutos ou crises quanto aquelas que desejam aprofundar seu autoconhecimento, entender seus relacionamentos ou refletir sobre escolhas de vida.',
  },
  {
    question: 'O que devo falar na primeira sessão?',
    answer: 'Você é livre para falar sobre o que quiser. Não há necessidade de preparar anotações ou relatórios. Pode começar pelo motivo que o fez procurar ajuda ou por acontecimentos recentes do seu cotidiano.',
  },
  {
    question: 'Como são combinados os valores e formas de pagamento?',
    answer: 'Os valores, condições de atendimento e periodicidade são combinados diretamente e de forma transparente com Daniel Paulo no primeiro contato.',
  },
  {
    question: 'O que a psicanálise NÃO faz?',
    answer: 'A psicanálise não faz julgamentos morais, não prescreve remédios, não dá ordens de como você deve viver sua vida e não faz promessas milagrosas de eliminação instantânea de qualquer sofrimento.',
  },
];

export const PerguntasFrequentesPage: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <>
      <SeoHead
        title="Perguntas Frequentes sobre Psicanálise | Daniel Paulo"
        description="Dúvidas comuns sobre o processo psicanalítico, sessões online e presenciais em Jundiaí, frequência e primeiros passos com Daniel Paulo."
        canonicalPath="/psicanalise/perguntas-frequentes"
        faqs={detailedFaqs}
        breadcrumbs={[
          { name: 'Psicanálise', url: '/psicanalise' },
          { name: 'Perguntas Frequentes', url: '/psicanalise/perguntas-frequentes' }
        ]}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 space-y-12">
        
        <Breadcrumbs
          items={[
            { label: 'Psicanálise', href: '/psicanalise' },
            { label: 'Perguntas Frequentes' }
          ]}
        />

        <div className="text-center max-w-2xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#4FD6F4] uppercase">
            <HelpCircle className="w-4 h-4" />
            <span>Central de Dúvidas</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-['Plus_Jakarta_Sans']">
            Perguntas Frequentes
          </h1>

          <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed">
            Respostas claras e transparentes sobre o atendimento psicanalítico, primeiro contato e modalidades com Daniel Paulo.
          </p>
        </div>

        {/* Accordion */}
        <div id="lista-duvidas" className="space-y-4">
          {detailedFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                id={`duvida-${idx + 1}`}
                className="rounded-2xl border border-[#1e3878] bg-[#0e1e4a]/60 overflow-hidden transition-all shadow-md"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-[#4FD6F4]"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-white text-base sm:text-lg font-['Plus_Jakarta_Sans'] leading-snug">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#4FD6F4] flex-shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-slate-300 leading-relaxed border-t border-[#1e3878]/40 font-light">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions? */}
        <div id="contato-direto" className="p-8 rounded-3xl bg-[#0b183d] border border-[#1e3878] text-center space-y-4">
          <h3 className="text-2xl font-bold text-white font-['Plus_Jakarta_Sans']">
            Sua dúvida não está listada aqui?
          </h3>
          <p className="text-sm text-slate-300 max-w-lg mx-auto font-light">
            Entre em contato diretamente pelo WhatsApp para receber um retorno atencioso e tirar suas dúvidas pessoais.
          </p>
          <div>
            <a
              href={getWhatsAppUrl('Olá Daniel, tenho uma dúvida sobre o atendimento psicanalítico.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm bg-[#4FD6F4] text-[#081331] hover:bg-[#36c5e5] transition-all shadow-md"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Tirar Dúvida no WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </>
  );
};
