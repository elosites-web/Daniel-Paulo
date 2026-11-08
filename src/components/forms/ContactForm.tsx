import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../../config/siteConfig';
import { CheckCircle, AlertCircle, ExternalLink } from 'lucide-react';
import { WhatsAppIcon } from '../ui/WhatsAppIcon';

interface FormData {
  name: string;
  contactMethod: string;
  interest: string;
  message: string;
  consent: boolean;
}

interface FormErrors {
  name?: string;
  contactMethod?: string;
  message?: string;
  consent?: string;
}

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    contactMethod: '',
    interest: 'Atendimento Psicanalítico',
    message: '',
    consent: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isRedirecting, setIsRedirecting] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Por favor, informe seu nome.';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'O nome deve ter pelo menos 2 caracteres.';
    }

    if (!formData.contactMethod.trim()) {
      newErrors.contactMethod = 'Informe um número de telefone ou WhatsApp para retorno.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Escreva uma mensagem breve sobre sua dúvida ou interesse.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'A mensagem deve ter pelo menos 10 caracteres.';
    }

    if (!formData.consent) {
      newErrors.consent = 'É necessário concordar com a Política de Privacidade para prosseguir.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsRedirecting(true);

    // Build the formatted message to send voluntarily via WhatsApp
    const messageLines = [
      `*Contato via Site Institucional*`,
      `*Nome:* ${formData.name.trim()}`,
      `*Telefone/WhatsApp de retorno:* ${formData.contactMethod.trim()}`,
      `*Área de Interesse:* ${formData.interest}`,
      `*Mensagem:*`,
      formData.message.trim(),
    ];

    const fullMessage = messageLines.join('\n\n');
    const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(fullMessage)}`;

    // Open WhatsApp in a new tab/window
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

    setTimeout(() => {
      setIsRedirecting(false);
    }, 2000);
  };

  return (
    <div className="bg-[#0b183d] border border-[#1e3878] rounded-2xl p-6 sm:p-8 shadow-xl">
      <div className="mb-6">
        <h3 className="text-xl sm:text-2xl font-bold text-white font-['Plus_Jakarta_Sans']">
          Iniciar Conversa com Daniel Paulo
        </h3>
        <p className="text-sm text-slate-300 mt-1 leading-relaxed">
          Preencha os campos abaixo para gerar sua mensagem inicial e abrir diretamente no WhatsApp.
        </p>
      </div>

      <form onSubmit={handleSubmit} noValidate className="space-y-5">
        {/* Nome */}
        <div>
          <label htmlFor="contact-name" className="block text-sm font-medium text-slate-200 mb-1.5">
            Seu Nome <span className="text-[#4FD6F4]" aria-hidden="true">*</span>
          </label>
          <input
            id="contact-name"
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className={`w-full px-4 py-3 rounded-xl bg-[#081331] text-white border text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-[#4FD6F4] ${
              errors.name ? 'border-rose-500' : 'border-[#1e3878]'
            }`}
            placeholder="Como prefere ser chamado(a)?"
            autoComplete="name"
            aria-required="true"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? 'name-error' : undefined}
          />
          {errors.name && (
            <p id="name-error" className="text-xs text-rose-400 mt-1 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>{errors.name}</span>
            </p>
          )}
        </div>

        {/* Telefone / WhatsApp */}
        <div>
          <label htmlFor="contact-method" className="block text-sm font-medium text-slate-200 mb-1.5">
            Seu Telefone ou WhatsApp <span className="text-[#4FD6F4]" aria-hidden="true">*</span>
          </label>
          <input
            id="contact-method"
            type="tel"
            value={formData.contactMethod}
            onChange={(e) => setFormData({ ...formData, contactMethod: e.target.value })}
            className={`w-full px-4 py-3 rounded-xl bg-[#081331] text-white border text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-[#4FD6F4] ${
              errors.contactMethod ? 'border-rose-500' : 'border-[#1e3878]'
            }`}
            placeholder="(11) 99999-9999"
            autoComplete="tel"
            aria-required="true"
            aria-invalid={Boolean(errors.contactMethod)}
            aria-describedby={errors.contactMethod ? 'method-error' : undefined}
          />
          {errors.contactMethod && (
            <p id="method-error" className="text-xs text-rose-400 mt-1 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>{errors.contactMethod}</span>
            </p>
          )}
        </div>

        {/* Área de Interesse */}
        <div>
          <label htmlFor="contact-interest" className="block text-sm font-medium text-slate-200 mb-1.5">
            Área de Interesse
          </label>
          <select
            id="contact-interest"
            value={formData.interest}
            onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-[#081331] text-white border border-[#1e3878] text-sm focus:outline-none focus:ring-2 focus:ring-[#4FD6F4]"
          >
            <option value="Atendimento Psicanalítico">Atendimento Psicanalítico (Online ou Presencial)</option>
            <option value="Orientação Familiar">Orientação Familiar</option>
            <option value="Acompanhante Terapêutico">Acompanhante Terapêutico (AT)</option>
            <option value="Análise Comportamental">Análise Comportamental</option>
            <option value="Consultoria Online">Consultoria Online</option>
            <option value="Palestras e Treinamentos">Palestras e Treinamentos Corporativos / Escolares</option>
            <option value="Outro assunto">Outro assunto</option>
          </select>
        </div>

        {/* Mensagem */}
        <div>
          <label htmlFor="contact-message" className="block text-sm font-medium text-slate-200 mb-1.5">
            Mensagem ou Dúvida <span className="text-[#4FD6F4]" aria-hidden="true">*</span>
          </label>
          <textarea
            id="contact-message"
            rows={4}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className={`w-full px-4 py-3 rounded-xl bg-[#081331] text-white border text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-[#4FD6F4] ${
              errors.message ? 'border-rose-500' : 'border-[#1e3878]'
            }`}
            placeholder="Conte brevemente sobre o que você procura..."
            aria-required="true"
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? 'message-error' : undefined}
          />
          {errors.message && (
            <p id="message-error" className="text-xs text-rose-400 mt-1 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>{errors.message}</span>
            </p>
          )}
        </div>

        {/* Checkbox de Consentimento LGPD */}
        <div className="pt-1">
          <label className="flex items-start gap-3 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={formData.consent}
              onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
              className="mt-1 w-4 h-4 rounded text-[#4FD6F4] bg-[#081331] border-[#1e3878] focus:ring-[#4FD6F4] focus:ring-offset-[#081331]"
              aria-required="true"
            />
            <span className="text-xs text-slate-300 leading-relaxed">
              Concordo em fornecer voluntariamente estes dados para contato via WhatsApp, conforme os termos da{' '}
              <Link to="/politica-de-privacidade" className="text-[#4FD6F4] hover:underline" target="_blank" rel="noopener noreferrer">
                Política de Privacidade
              </Link>.
            </span>
          </label>
          {errors.consent && (
            <p className="text-xs text-rose-400 mt-1.5 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>{errors.consent}</span>
            </p>
          )}
        </div>

        {/* Botão de Envio */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={isRedirecting}
            className="w-full py-3.5 px-6 rounded-xl font-bold bg-[#4FD6F4] text-[#081331] hover:bg-[#36c5e5] transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#4FD6F4]/15 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4FD6F4] focus:ring-offset-[#081331]"
          >
            {isRedirecting ? (
              <span>Abrindo o WhatsApp...</span>
            ) : (
              <>
                <WhatsAppIcon className="w-5 h-5" />
                <span>Prosseguir no WhatsApp</span>
                <ExternalLink className="w-4 h-4 ml-1 opacity-70" />
              </>
            )}
          </button>
        </div>

        {/* Aviso de funcionamento transparente */}
        <div className="pt-2 text-center text-xs text-slate-400 flex items-center justify-center gap-1.5">
          <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
          <span>Ao clicar, o WhatsApp será aberto com sua mensagem pronta para confirmação de envio.</span>
        </div>
      </form>
    </div>
  );
};
