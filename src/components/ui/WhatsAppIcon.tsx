import React from 'react';

interface WhatsAppIconProps {
  className?: string;
  'aria-hidden'?: boolean | 'true' | 'false';
}

/**
 * Logotipo oficial do WhatsApp em formato SVG vetorial limpo (silhueta única oficial sem balão duplo),
 * estilizado dinamicamente via currentColor para respeitar a identidade visual de cada botão e tema.
 */
export const WhatsAppIcon: React.FC<WhatsAppIconProps> = ({
  className = 'w-4 h-4',
  'aria-hidden': ariaHidden = true,
}) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={`shrink-0 ${className}`}
    aria-hidden={ariaHidden}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 001.533 5.305L2 22l4.832-1.267a9.982 9.982 0 005.18 1.436h.005c5.505 0 9.988-4.478 9.989-9.985 0-2.669-1.039-5.176-2.927-7.062A9.92 9.92 0 0012.012 2zm5.46 12.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"
    />
  </svg>
);
