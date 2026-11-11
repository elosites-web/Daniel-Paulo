import React from 'react';
import { Link } from 'react-router-dom';
import { siteConfig, getWhatsAppUrl } from '../../config/siteConfig';
import { Instagram, Linkedin, Facebook, MapPin, AlertCircle, Phone, Clock, ShieldCheck, FileText, ChevronRight } from 'lucide-react';
import { TikTokIcon } from '../ui/TikTokIcon';
import { WhatsAppIcon } from '../ui/WhatsAppIcon';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050d24] text-slate-300 border-t border-[#122456] pt-14 pb-24 sm:pb-28 lg:pb-32 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Optional emergency notice (strictly toggled by siteConfig.showEmergencyNotice) */}
        {siteConfig.showEmergencyNotice && (
          <div className="mb-12 p-4 rounded-xl bg-amber-950/40 border border-amber-600/40 text-amber-200 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5 text-amber-400" />
            <p className="text-sm leading-relaxed">
              <strong>Aviso Importante:</strong> Em situação de emergência emocional ou risco de vida, procure apoio imediato pelo <strong>CVV (188)</strong> ou pelo <strong>SAMU (192)</strong>. Este site e o atendimento psicanalítico não prestam pronto-socorro médico.
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#122456]">
          
          {/* Column 1: Brand, Bio & Redes Sociais */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="flex flex-col sm:flex-row items-start sm:items-center gap-4 group inline-flex" aria-label="Voltar para a página inicial">
              <img
                src="/assets/logo/logo-daniel-paulo-sem-brilho-512.png"
                alt="Logotipo de Daniel Paulo, Psicanalista e Terapeuta"
                className="w-36 sm:w-[124px] landscape:w-[124px] lg:w-[124px] h-auto aspect-square object-contain flex-shrink-0 drop-shadow-md"
                width="124"
                height="124"
                loading="lazy"
                decoding="async"
              />
              <div>
                <span className="text-xl font-bold tracking-tight text-white font-['Plus_Jakarta_Sans']">
                  {siteConfig.name}
                </span>
                <p className="text-xs tracking-wider text-[#4FD6F4] uppercase font-semibold">
                  {siteConfig.profession}
                </p>
                <p className="text-xs text-slate-400 mt-1">
                  Atendimento Clínico & Docência
                </p>
              </div>
            </Link>
            
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Atendimento psicanalítico e terapêutico pautado no acolhimento, escuta humanizada e ausência de julgamentos. Modalidades online para todo o Brasil e presencial em Jundiaí-SP.
            </p>

            {/* Social Links com animação de escala suave de 1.05x */}
            <div className="space-y-2 pt-1">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block font-['Plus_Jakarta_Sans']">
                Redes Sociais Oficiais
              </span>
              <div className="flex flex-wrap items-center gap-2.5">
                {siteConfig.social.instagram && (
                  <a
                    href={siteConfig.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-[#0e1e4a] hover:bg-[#4FD6F4] hover:text-[#081331] text-slate-300 flex items-center justify-center transition-all duration-300 ease-out hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#4FD6F4]"
                    aria-label="Perfil do Instagram de Daniel Paulo"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                )}
                {siteConfig.social.linkedin && (
                  <a
                    href={siteConfig.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-[#0e1e4a] hover:bg-[#4FD6F4] hover:text-[#081331] text-slate-300 flex items-center justify-center transition-all duration-300 ease-out hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#4FD6F4]"
                    aria-label="Perfil do LinkedIn de Daniel Paulo"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                )}
                {siteConfig.social.facebook && (
                  <a
                    href={siteConfig.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-[#0e1e4a] hover:bg-[#4FD6F4] hover:text-[#081331] text-slate-300 flex items-center justify-center transition-all duration-300 ease-out hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#4FD6F4]"
                    aria-label="Perfil do Facebook de Daniel Paulo"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                )}
                {siteConfig.social.tiktok && (
                  <a
                    href={siteConfig.social.tiktok}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-[#0e1e4a] hover:bg-[#4FD6F4] hover:text-[#081331] text-slate-300 flex items-center justify-center transition-all duration-300 ease-out hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#4FD6F4]"
                    aria-label="Perfil do TikTok de Daniel Paulo"
                  >
                    <TikTokIcon className="w-5 h-5" />
                  </a>
                )}
                {/* WhatsApp direct */}
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-[#0e1e4a] hover:bg-[#25D366] hover:text-white text-slate-300 flex items-center justify-center transition-all duration-300 ease-out hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#25D366]"
                  aria-label="Contato direto via WhatsApp"
                >
                  <WhatsAppIcon className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Psicanálise */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4 font-['Plus_Jakarta_Sans']">
              Psicanálise
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/psicanalise" className="hover:text-[#4FD6F4] transition-colors">
                  Visão Geral
                </Link>
              </li>
              <li>
                <Link to="/psicanalise/o-que-e-psicanalise" className="hover:text-[#4FD6F4] transition-colors">
                  O que é Psicanálise
                </Link>
              </li>
              <li>
                <Link to="/psicanalise/como-funciona-a-primeira-sessao" className="hover:text-[#4FD6F4] transition-colors">
                  A Primeira Sessão
                </Link>
              </li>
              <li>
                <Link to="/psicanalise/atendimento-online" className="hover:text-[#4FD6F4] transition-colors">
                  Atendimento Online
                </Link>
              </li>
              <li>
                <Link to="/psicanalise/atendimento-presencial-em-jundiai" className="hover:text-[#4FD6F4] transition-colors">
                  Atendimento em Jundiaí
                </Link>
              </li>
              <li>
                <Link to="/psicanalise/perguntas-frequentes" className="hover:text-[#4FD6F4] transition-colors">
                  Perguntas Frequentes
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Serviços e Atuação */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4 font-['Plus_Jakarta_Sans']">
              Serviços & Ensino
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/servicos" className="hover:text-[#4FD6F4] transition-colors">
                  Todos os Serviços
                </Link>
              </li>
              <li>
                <Link to="/servicos/orientacao-familiar" className="hover:text-[#4FD6F4] transition-colors">
                  Orientação Familiar
                </Link>
              </li>
              <li>
                <Link to="/servicos/acompanhante-terapeutico" className="hover:text-[#4FD6F4] transition-colors">
                  Acompanhante Terapêutico
                </Link>
              </li>
              <li>
                <Link to="/palestras-e-treinamentos" className="hover:text-[#4FD6F4] transition-colors">
                  Palestras & Treinamentos
                </Link>
              </li>
              <li>
                <Link to="/professor" className="hover:text-[#4FD6F4] transition-colors">
                  Atuação Docente
                </Link>
              </li>
              <li>
                <Link to="/psicanalista-em-jundiai" className="hover:text-[#4FD6F4] transition-colors text-[#4FD6F4]/90">
                  Psicanalista em Jundiaí
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Institucional & Conteúdo */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4 font-['Plus_Jakarta_Sans']">
              Institucional
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/sobre" className="hover:text-[#4FD6F4] transition-colors">
                  Sobre Daniel Paulo
                </Link>
              </li>
              <li>
                <Link to="/sobre/trajetoria" className="hover:text-[#4FD6F4] transition-colors">
                  Trajetória Profissional
                </Link>
              </li>
              <li>
                <Link to="/sobre/formacao-e-certificados" className="hover:text-[#4FD6F4] transition-colors">
                  Formação & Certificados
                </Link>
              </li>
              <li>
                <Link to="/terapia-e-autoconhecimento" className="hover:text-[#4FD6F4] transition-colors">
                  Autoconhecimento
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-[#4FD6F4] transition-colors">
                  Artigos & Blog
                </Link>
              </li>
              <li>
                <Link to="/contato" className="hover:text-[#4FD6F4] transition-colors">
                  Fale Conosco
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Contato & Políticas */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4 font-['Plus_Jakarta_Sans']">
              Contato & Legal
            </h3>
            
            <div className="space-y-3 text-xs text-slate-300">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2.5 hover:text-[#4FD6F4] transition-colors group"
                aria-label="Chamar no WhatsApp"
              >
                <Phone className="w-4 h-4 text-[#4FD6F4] shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <div>
                  <span className="block font-semibold text-white group-hover:text-[#4FD6F4]">
                    {siteConfig.whatsappFormatted}
                  </span>
                  <span className="text-[11px] text-slate-400">Atendimento via WhatsApp</span>
                </div>
              </a>

              <div className="flex items-start gap-2.5 text-slate-300">
                <MapPin className="w-4 h-4 text-[#4FD6F4] shrink-0 mt-0.5" />
                <div>
                  <span className="block font-semibold text-white">
                    {siteConfig.city}, {siteConfig.state}
                  </span>
                  <span className="text-[11px] text-slate-400">Presencial & Online</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 text-slate-300">
                <Clock className="w-4 h-4 text-[#4FD6F4] shrink-0 mt-0.5" />
                <div>
                  <span className="block font-semibold text-white">Segunda a Sexta</span>
                  <span className="text-[11px] text-slate-400">Agendamento prévio</span>
                </div>
              </div>
            </div>

            {/* Links rápidos para Políticas e Privacidade */}
            <div className="pt-2 border-t border-[#122456] space-y-2">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 block font-['Plus_Jakarta_Sans']">
                Políticas e Privacidade
              </span>
              <ul className="space-y-1.5 text-xs">
                <li>
                  <Link
                    to="/politica-de-privacidade"
                    className="flex items-center gap-1.5 text-slate-300 hover:text-[#4FD6F4] transition-colors"
                  >
                    <ShieldCheck className="w-3.5 h-3.5 text-[#4FD6F4]" />
                    <span>Política de Privacidade (LGPD)</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/termos-de-uso"
                    className="flex items-center gap-1.5 text-slate-300 hover:text-[#4FD6F4] transition-colors"
                  >
                    <FileText className="w-3.5 h-3.5 text-[#4FD6F4]" />
                    <span>Termos de Uso</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/mapa-do-site"
                    className="flex items-center gap-1.5 text-slate-300 hover:text-[#4FD6F4] transition-colors"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-[#4FD6F4]" />
                    <span>Mapa do Site</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

        </div>

        {/* Bottom copyright and legal disclosures */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="space-y-1 text-center md:text-left">
            <p>
              © {currentYear} Daniel Paulo. Todos os direitos reservados.
            </p>
            <p className="text-slate-500">
              Controlador dos dados: {siteConfig.fullName}. Atendimento ético e confidencial em conformidade com a LGPD.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6">
            <Link to="/politica-de-privacidade" className="hover:text-[#4FD6F4] transition-colors">
              Política de Privacidade
            </Link>
            <Link to="/termos-de-uso" className="hover:text-[#4FD6F4] transition-colors">
              Termos de Uso
            </Link>
            <Link to="/mapa-do-site" className="hover:text-[#4FD6F4] transition-colors">
              Mapa do Site
            </Link>
          </div>
        </div>

        {/* Créditos de desenvolvimento — ēloSites */}
        <div className="mt-8 pt-6 border-t border-[#122456]/60 flex flex-col sm:flex-row items-center justify-center gap-2 text-xs text-slate-400 text-center">
          <div className="inline-flex items-center justify-center gap-2">
            <span className="font-medium tracking-wide uppercase text-slate-400">
              CRIADO E DESENVOLVIDO POR
            </span>
            <a
              href="https://elosites.ia.br"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#4FD6F4] rounded px-1 py-0.5"
              aria-label="Acessar o site oficial da ēloSites (abre em nova aba)"
              title="ēloSites — O melhor site pelo melhor preço"
            >
              <img
                src="/assets/logo/logo-elosites.webp"
                alt="ēloSites"
                className="h-5 sm:h-5.5 w-auto aspect-[640/158] object-contain brightness-125 hover:brightness-150 transition-all"
                width="640"
                height="158"
                loading="lazy"
                decoding="async"
              />
            </a>
          </div>
          <span className="font-medium tracking-wide uppercase text-slate-400">
            O MELHOR SITE PELO MELHOR PREÇO
          </span>
        </div>

      </div>
    </footer>
  );
};
