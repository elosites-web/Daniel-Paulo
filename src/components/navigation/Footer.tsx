import React from 'react';
import { Link } from 'react-router-dom';
import { siteConfig, getWhatsAppUrl } from '../../config/siteConfig';
import { Instagram, Linkedin, MapPin, AlertCircle } from 'lucide-react';
import { WhatsAppIcon } from '../ui/WhatsAppIcon';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050d24] text-slate-300 border-t border-[#122456] pt-16 pb-12 transition-colors">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#122456]">
          
          {/* Column 1: Brand & Bio */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-3 group inline-flex" aria-label="Voltar para a página inicial">
              <img
                src="/assets/logo/logo-daniel-paulo-brilho-256.png"
                alt="Logotipo de Daniel Paulo"
                className="w-12 h-12 object-contain"
                width="48"
                height="48"
                loading="lazy"
              />
              <div>
                <span className="text-xl font-bold tracking-tight text-white font-['Plus_Jakarta_Sans']">
                  {siteConfig.name}
                </span>
                <p className="text-xs tracking-wider text-[#4FD6F4] uppercase font-semibold">
                  {siteConfig.profession}
                </p>
              </div>
            </Link>
            
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Atendimento psicanalítico e terapêutico pautado no acolhimento, escuta humanizada e ausência de julgamentos. Modalidades online e presencial em Jundiaí-SP. Docência e palestras de desenvolvimento humano.
            </p>

            <div className="flex items-center gap-2 text-sm text-[#8ea5c8]">
              <MapPin className="w-4 h-4 text-[#4FD6F4]" />
              <span>{siteConfig.city}, {siteConfig.state} — Brasil</span>
            </div>

            {/* Social Links (only confirmed URLs) */}
            <div className="flex items-center gap-3 pt-2">
              {siteConfig.social.instagram && (
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-[#0e1e4a] hover:bg-[#4FD6F4] hover:text-[#081331] text-slate-300 flex items-center justify-center transition-all focus:outline-none focus:ring-2 focus:ring-[#4FD6F4]"
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
                  className="w-10 h-10 rounded-lg bg-[#0e1e4a] hover:bg-[#4FD6F4] hover:text-[#081331] text-slate-300 flex items-center justify-center transition-all focus:outline-none focus:ring-2 focus:ring-[#4FD6F4]"
                  aria-label="Perfil do LinkedIn de Daniel Paulo"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              )}
              {/* WhatsApp direct */}
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-[#0e1e4a] hover:bg-[#25D366] hover:text-white text-slate-300 flex items-center justify-center transition-all focus:outline-none focus:ring-2 focus:ring-[#25D366]"
                aria-label="Contato direto via WhatsApp"
              >
                <WhatsAppIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Psicanálise */}
          <div>
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
          <div>
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

          {/* Column 4: Institucional & Legal */}
          <div>
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
                  Formação
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
              <li>
                <Link to="/mapa-do-site" className="hover:text-[#4FD6F4] transition-colors">
                  Mapa do Site
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright and legal disclosures */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="space-y-1 text-center md:text-left">
            <p>
              © {currentYear} Daniel Paulo. Todos os direitos reservados.
            </p>
            <p className="text-slate-600">
              Controlador dos dados: Daniel Paulo de Arruda Oliveira. Atendimento ético e confidencial.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6">
            <Link to="/politica-de-privacidade" className="hover:text-slate-400 transition-colors">
              Política de Privacidade
            </Link>
            <Link to="/termos-de-uso" className="hover:text-slate-400 transition-colors">
              Termos de Uso
            </Link>
            <Link to="/mapa-do-site" className="hover:text-slate-400 transition-colors">
              Mapa do Site
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
};
