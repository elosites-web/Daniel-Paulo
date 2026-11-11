/**
 * Configuração centralizada do site institucional de Daniel Paulo.
 * Qualquer dado ausente deve ser mantido como null para não exibir blocos vazios ou fictícios na interface.
 */

export interface SiteConfig {
  name: string;
  fullName: string;
  headline: string;
  profession: string;
  city: string;
  state: string;
  country: string;
  whatsapp: string;
  whatsappFormatted: string;
  whatsappDefaultMessage: string;
  email: string | null;
  address: string | null;
  businessHours: string | null;
  prices: string | null;
  /** Domínio oficial de produção (ex: "https://danielpaulo.com.br"). Manter null até contratação */
  SITE_URL: string | null;
  social: {
    instagram: string;
    linkedin: string;
    facebook: string;
    tiktok: string;
    whatsappUrl: string;
  };
  /** Flags de visibilidade de conteúdo condicional */
  showFaithContent: boolean;
  showUnverifiedFormations: boolean;
  showEmergencyNotice: boolean;
  showEditorialReviewNotice: boolean;
  showSpeakerTopicsDraft: boolean;
}

export const siteConfig: SiteConfig = {
  name: "Daniel Paulo",
  fullName: "Daniel Paulo de Arruda Oliveira",
  headline: "Psicanalista e Terapeuta em Jundiaí-SP | Atendimento Online e Presencial",
  profession: "Psicanalista e Terapeuta",
  city: "Jundiaí",
  state: "SP",
  country: "Brasil",
  whatsapp: "5511960193062",
  whatsappFormatted: "+55 (11) 96019-3062",
  whatsappDefaultMessage: "Olá Daniel, conheci seu site institucional e gostaria de mais informações sobre o atendimento.",
  email: null,
  address: null,
  businessHours: null,
  prices: null,
  SITE_URL: null,
  social: {
    instagram: "https://www.instagram.com/danielpaulo_psicanalista/",
    linkedin: "https://linkedin.com/in/daniel-paulo-psi",
    facebook: "https://www.facebook.com/daniel.paulo.psicanalista",
    tiktok: "https://www.tiktok.com/@dani.psi.40",
    whatsappUrl: "https://wa.me/5511960193062",
  },
  showFaithContent: false,
  showUnverifiedFormations: false,
  showEmergencyNotice: false,
  showEditorialReviewNotice: true,
  showSpeakerTopicsDraft: false,
};

export function getWhatsAppUrl(customMessage?: string): string {
  const message = customMessage || siteConfig.whatsappDefaultMessage;
  return `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(message)}`;
}
