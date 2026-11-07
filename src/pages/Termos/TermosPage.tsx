import React from 'react';
import { SeoHead } from '../../components/seo/SeoHead';
import { Breadcrumbs } from '../../components/breadcrumbs/Breadcrumbs';
import { siteConfig } from '../../config/siteConfig';
import { FileText, AlertCircle } from 'lucide-react';

export const TermosPage: React.FC = () => {
  return (
    <>
      <SeoHead
        title="Termos de Uso | Daniel Paulo"
        description="Termos e condições de uso do site institucional de Daniel Paulo, psicanalista, terapeuta e professor."
        canonicalPath="/termos-de-uso"
        breadcrumbs={[
          { name: 'Termos de Uso', url: '/termos-de-uso' }
        ]}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 space-y-10">
        
        <Breadcrumbs items={[{ label: 'Termos de Uso' }]} />

        {/* Legal Review Warning */}
        <div className="p-4 rounded-xl bg-amber-950/40 border border-amber-600/40 text-amber-200 flex items-start gap-3 text-xs leading-relaxed">
          <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5 text-amber-400" />
          <p>
            <strong>Aviso de Governança Jurídica:</strong> Este texto constitui um modelo técnico preliminar para o website institucional e deve ser submetido à revisão de um profissional do Direito antes de sua publicação definitiva.
          </p>
        </div>

        <article className="space-y-8 text-slate-300 font-light leading-relaxed text-base">
          <header className="space-y-3 border-b border-[#1e3878] pb-6">
            <span className="text-xs font-semibold tracking-wider text-[#4FD6F4] uppercase">
              Condições de Navegação
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold text-white font-['Plus_Jakarta_Sans']">
              Termos de Uso do Website
            </h1>
            <p className="text-xs text-slate-400">
              Versão para implantação técnica inicial.
            </p>
          </header>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white font-['Plus_Jakarta_Sans']">
              1. Objeto e Natureza Informativa
            </h2>
            <p>
              Este website institucional pertence a <strong>{siteConfig.fullName}</strong> ({siteConfig.name}) e tem por finalidade apresentar de forma ética e transparente sua atuação como psicanalista, terapeuta, professor e palestrante.
            </p>
            <p>
              Todo o conteúdo disponibilizado em artigos, páginas informativas ou reflexões possui caráter puramente educativo e cultural, não substituindo consultas, diagnósticos ou acompanhamentos clínicos e médicos individuais.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white font-['Plus_Jakarta_Sans']">
              2. Propriedade Intelectual e Uso de Imagens
            </h2>
            <p>
              O logotipo oficial, as fotografias autorizadas de Daniel Paulo, os textos autorais e os vídeos de ambientação presentes neste site são protegidos pelas leis de propriedade intelectual e direitos de imagem. É vedada a reprodução, comercialização, descontextualização ou modificação não autorizada desses recursos.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white font-['Plus_Jakarta_Sans']">
              3. Ausência de Promessas de Resultado
            </h2>
            <p>
              A prática psicanalítica e os processos de desenvolvimento humano dependem de fatores individuais, subjetivos e da relação singular entre terapeuta e analisando. Nenhuma informação contida neste site deve ser interpretada como promessa ou garantia de cura, transformação imediata ou resultados específicos.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white font-['Plus_Jakarta_Sans']">
              4. Contratação e Agendamento
            </h2>
            <p>
              A simples navegação pelo site ou o envio de mensagem via formulário ou WhatsApp não estabelece vínculo contratual ou clínico automático. O início de qualquer atendimento depende de anuência mútua, disponibilidade de agenda e alinhamento prévio de condições de atendimento.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white font-['Plus_Jakarta_Sans']">
              5. Foro
            </h2>
            <p>
              Para a resolução de eventuais controvérsias oriundas do uso deste website, elege-se o Foro da Comarca de Jundiaí, Estado de São Paulo, Brasil.
            </p>
          </section>
        </article>

      </div>
    </>
  );
};
