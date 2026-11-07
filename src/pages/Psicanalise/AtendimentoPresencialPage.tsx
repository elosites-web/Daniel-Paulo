import React from 'react';
import { Link } from 'react-router-dom';
import { SeoHead } from '../../components/seo/SeoHead';
import { Breadcrumbs } from '../../components/breadcrumbs/Breadcrumbs';
import { siteConfig, getWhatsAppUrl } from '../../config/siteConfig';
import { MapPin, MessageCircle, ArrowRight, ShieldCheck, CheckCircle2, Clock } from 'lucide-react';

export const AtendimentoPresencialPage: React.FC = () => {
  return (
    <>
      <SeoHead
        title="Atendimento Presencial em Jundiaí-SP | Daniel Paulo"
        description="Atendimento psicanalítico presencial em Jundiaí-SP com Daniel Paulo. Espaço de acolhimento e escuta atenta. Entre em contato para confirmar detalhes e horários."
        canonicalPath="/psicanalise/atendimento-presencial-em-jundiai"
        breadcrumbs={[
          { name: 'Psicanálise', url: '/psicanalise' },
          { name: 'Atendimento Presencial em Jundiaí', url: '/psicanalise/atendimento-presencial-em-jundiai' }
        ]}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 space-y-12">
        
        <Breadcrumbs
          items={[
            { label: 'Psicanálise', href: '/psicanalise' },
            { label: 'Atendimento Presencial em Jundiaí' }
          ]}
        />

        <article className="space-y-8">
          
          <header className="space-y-4">
            <span className="text-xs font-semibold tracking-wider text-[#4FD6F4] uppercase">
              Jundiaí - São Paulo
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-['Plus_Jakarta_Sans'] leading-tight">
              Atendimento presencial em Jundiaí: encontro e presença física
            </h1>
            <p className="text-lg text-slate-300 font-light leading-relaxed">
              Para quem valoriza o encontro face a face e o ambiente reservado de um consultório presencial na região de Jundiaí-SP.
            </p>
          </header>

          <div className="text-slate-300 space-y-6 text-base sm:text-lg leading-relaxed font-light">
            <div className="p-6 rounded-2xl bg-[#0e1e4a]/60 border border-[#1e3878]">
              <div className="flex items-center gap-2 text-white font-bold text-lg mb-2">
                <MapPin className="w-5 h-5 text-[#4FD6F4]" />
                <span>Localização e Modalidade Presencial</span>
              </div>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Daniel Paulo disponibiliza atendimentos presenciais na cidade de <strong>Jundiaí, Estado de São Paulo</strong>. As orientações detalhadas de endereço, sala e horários são alinhadas diretamente via WhatsApp com cada paciente no momento do primeiro contato.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-white font-['Plus_Jakarta_Sans'] pt-4">
              A Experiência do Encontro Presencial
            </h2>
            <p>
              Estar fisicamente em um espaço dedicado exclusivamente à sua escuta permite um distanciamento saudável dos ruídos e demandas imediatas da casa ou do trabalho.
            </p>
            <p>
              O trajeto até o consultório e o tempo de retorno muitas vezes funcionam como momentos valiosos de digestão emocional e reflexão sobre os temas mobilizados na sessão.
            </p>

            <h2 className="text-2xl font-bold text-white font-['Plus_Jakarta_Sans'] pt-4">
              Como Confirmar seu Horário
            </h2>
            <p>
              Por se tratar de um atendimento individualizado e com agenda reservada, o primeiro passo é entrar em contato pelo WhatsApp para verificar a compatibilidade de dias e horários.
            </p>

            <div className="p-6 rounded-2xl bg-[#081331] border border-[#162c66] space-y-2">
              <h3 className="font-bold text-white text-base flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#4FD6F4]" />
                <span>Horários e Agendamento</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                A disponibilidade de agenda para sessões presenciais em Jundiaí é informada diretamente ao interessado, permitindo planejar a frequência mais adequada para o seu processo.
              </p>
            </div>
          </div>

          {/* CTA Box */}
          <div className="p-8 rounded-3xl bg-[#0b183d] border border-[#1e3878] text-center space-y-4">
            <h3 className="text-2xl font-bold text-white font-['Plus_Jakarta_Sans']">
              Deseja atendimento presencial em Jundiaí?
            </h3>
            <p className="text-sm text-slate-300 max-w-lg mx-auto font-light">
              Envie uma mensagem pelo WhatsApp para alinhar datas disponíveis e receber as orientações do local de atendimento.
            </p>
            <div>
              <a
                href={getWhatsAppUrl('Olá Daniel, gostaria de saber sobre horários para atendimento presencial em Jundiaí-SP.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm bg-[#4FD6F4] text-[#081331] hover:bg-[#36c5e5] transition-all shadow-md"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Alinhar Horário Presencial</span>
              </a>
            </div>
          </div>

        </article>

      </div>
    </>
  );
};
