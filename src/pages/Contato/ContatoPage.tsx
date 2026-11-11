import React from 'react';
import { SeoHead } from '../../components/seo/SeoHead';
import { Breadcrumbs } from '../../components/breadcrumbs/Breadcrumbs';
import { ContactForm } from '../../components/forms/ContactForm';
import { siteConfig, getWhatsAppUrl } from '../../config/siteConfig';
import { MapPin, Instagram, Linkedin, ShieldCheck, Clock } from 'lucide-react';
import { WhatsAppIcon } from '../../components/ui/WhatsAppIcon';

export const ContatoPage: React.FC = () => {
  return (
    <>
      <SeoHead
        title="Contato | Daniel Paulo - Psicanalista e Terapeuta"
        description="Fale diretamente com Daniel Paulo pelo WhatsApp (+55 11 96019-3062) ou formulário. Atendimento psicanalítico acolhedor, online e presencial em Jundiaí-SP."
        canonicalPath="/contato"
        breadcrumbs={[
          { name: 'Contato', url: '/contato' }
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 space-y-12">
        
        <Breadcrumbs items={[{ label: 'Contato' }]} />

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-semibold tracking-wider text-[#4FD6F4] uppercase">
            Canais Oficiais
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-['Plus_Jakarta_Sans']">
            Fale com Daniel Paulo
          </h1>
          <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed">
            Um canal direto e acolhedor para tirar dúvidas, consultar disponibilidades e agendar sua primeira conversa.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Info & Social */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Primary WhatsApp Card */}
            <div id="whatsapp" className="p-7 rounded-3xl bg-[#0e1e4a]/80 border border-[#1e3878] space-y-4 shadow-xl">
              <div className="w-12 h-12 rounded-2xl bg-[#25D366]/20 text-[#25D366] flex items-center justify-center">
                <WhatsAppIcon className="w-6 h-6 fill-current" />
              </div>
              <h2 className="text-xl font-bold text-white font-['Plus_Jakarta_Sans']">
                WhatsApp Oficial
              </h2>
              <p className="text-sm text-slate-300 font-light leading-relaxed">
                O canal mais rápido para contato direto e agendamento de sessões com Daniel Paulo.
              </p>
              <div className="pt-1">
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 text-lg font-bold text-[#4FD6F4] hover:text-[#36c5e5] group"
                >
                  <WhatsAppIcon className="w-5 h-5 text-[#25D366] group-hover:scale-110 transition-transform" />
                  <span>{siteConfig.whatsappFormatted}</span>
                </a>
              </div>
            </div>

            {/* Location & Modalities */}
            <div id="localizacao" className="p-7 rounded-3xl bg-[#0e1e4a]/60 border border-[#1e3878] space-y-4">
              <div className="w-10 h-10 rounded-xl bg-[#122456] text-[#4FD6F4] flex items-center justify-center">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white font-['Plus_Jakarta_Sans']">
                Atendimento Presencial e Online
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed font-light">
                <strong>Presencial:</strong> Em espaço reservado na cidade de <strong>Jundiaí-SP</strong> (endereço e orientações alinhados individualmente).
              </p>
              <p className="text-sm text-slate-300 leading-relaxed font-light">
                <strong>Online:</strong> Atendimento online.
              </p>
            </div>

            {/* Social Networks */}
            <div className="p-7 rounded-3xl bg-[#0e1e4a]/60 border border-[#1e3878] space-y-4">
              <h3 className="text-base font-bold text-white font-['Plus_Jakarta_Sans']">
                Redes Sociais Oficiais
              </h3>
              <div className="space-y-3 text-sm">
                {siteConfig.social.instagram && (
                  <a
                    href={siteConfig.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-slate-300 hover:text-[#4FD6F4] transition-colors group"
                  >
                    <Instagram className="w-5 h-5 text-[#4FD6F4] transition-transform duration-300 ease-out group-hover:scale-105" />
                    <span>@danielpaulo_psicanalista</span>
                  </a>
                )}
                {siteConfig.social.linkedin && (
                  <a
                    href={siteConfig.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-slate-300 hover:text-[#4FD6F4] transition-colors group"
                  >
                    <Linkedin className="w-5 h-5 text-[#4FD6F4] transition-transform duration-300 ease-out group-hover:scale-105" />
                    <span>LinkedIn / Daniel Paulo</span>
                  </a>
                )}
              </div>
            </div>

            {/* Privacy note */}
            <div className="p-4 rounded-xl bg-[#081331] border border-[#162c66] flex items-center gap-2.5 text-xs text-slate-400">
              <ShieldCheck className="w-4 h-4 text-[#4FD6F4] flex-shrink-0" />
              <span>Seus dados são transmitidos com sigilo diretamente para o WhatsApp de Daniel Paulo.</span>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div id="formulario" className="lg:col-span-7">
            <ContactForm />
          </div>

        </div>

      </div>
    </>
  );
};
