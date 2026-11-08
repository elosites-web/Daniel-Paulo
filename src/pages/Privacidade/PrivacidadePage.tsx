import React from 'react';
import { SeoHead } from '../../components/seo/SeoHead';
import { Breadcrumbs } from '../../components/breadcrumbs/Breadcrumbs';
import { siteConfig } from '../../config/siteConfig';
import { Shield, AlertCircle } from 'lucide-react';

export const PrivacidadePage: React.FC = () => {
  return (
    <>
      <SeoHead
        title="Política de Privacidade | Daniel Paulo"
        description="Diretrizes de privacidade e proteção de dados do site institucional de Daniel Paulo em conformidade com a LGPD (Lei Geral de Proteção de Dados)."
        canonicalPath="/politica-de-privacidade"
        breadcrumbs={[
          { name: 'Política de Privacidade', url: '/politica-de-privacidade' }
        ]}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 space-y-10">
        
        <Breadcrumbs items={[{ label: 'Política de Privacidade' }]} />

        {/* Legal Review Warning */}
        <div className="p-4 rounded-xl bg-amber-950/40 border border-amber-600/40 text-amber-200 flex items-start gap-3 text-xs leading-relaxed">
          <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5 text-amber-400" />
          <p>
            <strong>Aviso de Governança Jurídica:</strong> Este texto constitui um modelo técnico preliminar de boas práticas para a operação do site institucional. Ele deve ser formalmente revisado por uma assessoria jurídica especializada antes da publicação em domínio de produção oficial.
          </p>
        </div>

        <article className="space-y-8 text-slate-300 font-light leading-relaxed text-base">
          <header className="space-y-3 border-b border-[#1e3878] pb-6">
            <span className="text-xs font-semibold tracking-wider text-[#4FD6F4] uppercase">
              Conformidade LGPD
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold text-white font-['Plus_Jakarta_Sans']">
              Política de Privacidade e Proteção de Dados
            </h1>
            <p className="text-xs text-slate-400">
              Última atualização: Versão preliminar para publicação institucional.
            </p>
          </header>

          <section id="controlador" className="space-y-3">
            <h2 className="text-xl font-bold text-white font-['Plus_Jakarta_Sans']">
              1. Identificação do Controlador dos Dados
            </h2>
            <p>
              O controlador dos dados pessoais tratados no âmbito deste site institucional é <strong>{siteConfig.fullName}</strong> ({siteConfig.name}), atuando como profissional liberal na qualidade de psicanalista, terapeuta e professor na cidade de {siteConfig.city}, Estado de {siteConfig.state}, Brasil.
            </p>
          </section>

          <section id="dados-coletados" className="space-y-3">
            <h2 className="text-xl font-bold text-white font-['Plus_Jakarta_Sans']">
              2. Dados Coletados e Finalidade
            </h2>
            <p>
              Este site institucional tem finalidade eminentemente informativa e institucional. A coleta de dados limita-se estritamente às informações que o próprio visitante opta por fornecer voluntariamente por meio do formulário de contato inicial:
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-2 text-slate-300 text-sm">
              <li>Nome ou forma pela qual o visitante prefere ser identificado;</li>
              <li>Telefone ou número de WhatsApp para viabilizar o retorno de mensagem;</li>
              <li>Área de interesse e mensagem redigida voluntariamente.</li>
            </ul>
            <p>
              <strong>Não solicitamos</strong> documentos sensíveis (como CPF ou RG), dados de prontuário de saúde, histórico médico ou diagnósticos prévios através do formulário deste website.
            </p>
          </section>

          <section id="processamento" className="space-y-3">
            <h2 className="text-xl font-bold text-white font-['Plus_Jakarta_Sans']">
              3. Forma de Processamento e Ausência de Banco de Dados Próprio
            </h2>
            <p>
              Para máxima segurança e privacidade do usuário, o formulário disponibilizado neste site <strong>não grava</strong> informações em bancos de dados persistentes, servidores próprios ou serviços de telemetria.
            </p>
            <p>
              Ao acionar o botão de envio, os dados preenchidos são formatados localmente no navegador do usuário e transferidos de forma voluntária para o aplicativo oficial do <strong>WhatsApp</strong>, canal pelo qual a conversa é efetivamente estabelecida sob as diretrizes de criptografia de ponta a ponta daquela plataforma.
            </p>
          </section>

          <section id="cookies" className="space-y-3">
            <h2 className="text-xl font-bold text-white font-['Plus_Jakarta_Sans']">
              4. Cookies e Tecnologias de Rastreamento
            </h2>
            <p>
              Este website utiliza apenas cookies técnicos ou recursos essenciais de sessão e cache de navegador indispensáveis para a renderização responsiva da interface, vídeos e elementos visuais. Não são instalados por padrão pixels de rastreamento invasivo ou softwares de gravação de tela de terceiros.
            </p>
          </section>

          <section id="direitos-titular" className="space-y-3">
            <h2 className="text-xl font-bold text-white font-['Plus_Jakarta_Sans']">
              5. Direitos do Titular de Dados
            </h2>
            <p>
              Em observância à Lei Geral de Proteção de Dados (Lei nº 13.709/2018 - LGPD), o titular de dados possui o direito de confirmar a existência de tratamento, solicitar a exclusão de eventuais mensagens de contato arquivadas no histórico de WhatsApp ou solicitar esclarecimentos adicionais, mediante mensagem direta ao controlador pelo WhatsApp oficial informado neste site.
            </p>
          </section>

          <section id="sigilo-profissional" className="space-y-3">
            <h2 className="text-xl font-bold text-white font-['Plus_Jakarta_Sans']">
              6. Sigilo Profissional
            </h2>
            <p>
              Todas as informações compartilhadas durante atendimentos psicanalíticos, sessões terapêuticas ou orientações familiares são resguardadas por estrito dever ético de confidencialidade e sigilo profissional.
            </p>
          </section>
        </article>

      </div>
    </>
  );
};
