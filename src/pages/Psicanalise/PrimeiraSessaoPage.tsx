import React from 'react';
import { Link } from 'react-router-dom';
import { SeoHead } from '../../components/seo/SeoHead';
import { Breadcrumbs } from '../../components/breadcrumbs/Breadcrumbs';
import { getWhatsAppUrl } from '../../config/siteConfig';
import { Clock, MessageCircle, ArrowRight, CheckCircle2, ShieldCheck, Heart } from 'lucide-react';

export const PrimeiraSessaoPage: React.FC = () => {
  return (
    <>
      <SeoHead
        title="Como Funciona a 1ª Sessão de Psicanálise | Daniel Paulo"
        description="O que esperar do primeiro contato e da primeira sessão de psicanálise com Daniel Paulo. Um encontro acolhedor para esclarecer dúvidas e alinhar expectativas."
        canonicalPath="/psicanalise/como-funciona-a-primeira-sessao"
        breadcrumbs={[
          { name: 'Psicanálise', url: '/psicanalise' },
          { name: 'Primeira Sessão', url: '/psicanalise/como-funciona-a-primeira-sessao' }
        ]}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 space-y-12">
        
        <Breadcrumbs
          items={[
            { label: 'Psicanálise', href: '/psicanalise' },
            { label: 'Primeira Sessão' }
          ]}
        />

        <article className="space-y-8">
          
          <header className="space-y-4">
            <span className="text-xs font-semibold tracking-wider text-[#4FD6F4] uppercase">
              Primeiro Contato
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-['Plus_Jakarta_Sans'] leading-tight">
              Como funciona a primeira sessão: um encontro de aproximação
            </h1>
            <p className="text-lg text-slate-300 font-light leading-relaxed">
              O primeiro encontro não é uma entrevista rígida ou um teste. É um momento seguro para você expressar suas inquietações no seu próprio ritmo.
            </p>
          </header>

          <div className="text-slate-300 space-y-6 text-base sm:text-lg leading-relaxed font-light">
            <div id="o-que-acontece" className="p-6 rounded-2xl bg-[#0e1e4a]/60 border border-[#1e3878]">
              <h2 className="text-xl font-bold text-white mb-2 font-['Plus_Jakarta_Sans']">
                O que acontece no primeiro encontro?
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                A primeira sessão serve para que você e Daniel Paulo se conheçam. Você poderá relatar o que o motivou a buscar atendimento — seja uma angústia recente, um momento de transição pessoal ou a busca continuada por autoconhecimento.
              </p>
            </div>

            <h2 id="sem-pressao" className="text-2xl font-bold text-white font-['Plus_Jakarta_Sans'] pt-4">
              Sem Roteiros Fixos e Sem Pressão
            </h2>
            <p>
              Muitas pessoas chegam preocupadas em não saber por onde começar ou com receio de esquecer detalhes cronológicos de sua história. Na psicanálise, não existe ordem obrigatória nem roteiro pré-estabelecido.
            </p>
            <p>
              Você pode começar por uma situação recente que causou incômodo, por uma lembrança espontânea ou simplesmente pelo silêncio, organizando os pensamentos à medida que a conversa se desenvolve.
            </p>

            <h2 id="condicoes" className="text-2xl font-bold text-white font-['Plus_Jakarta_Sans'] pt-4">
              Alinhamento Individual de Condições
            </h2>
            <p>
              Aspectos práticos como frequência dos encontros, formato (online ou presencial em Jundiaí), horários de agenda e valores são alinhados diretamente na conversa com Daniel Paulo, respeitando a realidade de cada pessoa.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-5 rounded-xl bg-[#081331] border border-[#162c66] space-y-2">
                <Heart className="w-5 h-5 text-[#4FD6F4]" />
                <h3 className="font-bold text-white text-base">Escuta Acolhedora</h3>
                <p className="text-xs text-slate-300">
                  Espaço onde qualquer sentimento pode ser compartilhado com respeito e sem reprovação.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#081331] border border-[#162c66] space-y-2">
                <ShieldCheck className="w-5 h-5 text-[#4FD6F4]" />
                <h3 className="font-bold text-white text-base">Sigilo Absoluto</h3>
                <p className="text-xs text-slate-300">
                  Todas as trocas e conteúdos trazidos são estritamente confidenciais.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Box */}
          <div id="agendamento" className="p-8 rounded-3xl bg-[#0b183d] border border-[#1e3878] text-center space-y-4">
            <h3 className="text-2xl font-bold text-white font-['Plus_Jakarta_Sans']">
              Deseja conversar sobre como iniciar?
            </h3>
            <p className="text-sm text-slate-300 max-w-lg mx-auto font-light">
              Envie uma mensagem pelo WhatsApp para tirar suas dúvidas e verificar a disponibilidade de agenda com Daniel Paulo.
            </p>
            <div>
              <a
                href={getWhatsAppUrl('Olá Daniel, gostaria de saber como agendar uma primeira sessão de psicanálise.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm bg-[#4FD6F4] text-[#081331] hover:bg-[#36c5e5] transition-all shadow-md"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Conversar pelo WhatsApp</span>
              </a>
            </div>
          </div>

        </article>

      </div>
    </>
  );
};
