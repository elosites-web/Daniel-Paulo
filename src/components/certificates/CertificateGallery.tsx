import React, { useState, useEffect, useRef } from 'react';
import { verifiedFormations, VerifiedFormation, FormationType } from '../../data/verifiedFormations';
import { X, ZoomIn, ChevronLeft, ChevronRight, Award, GraduationCap, BookOpen } from 'lucide-react';

export const CertificateGallery: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<VerifiedFormation | null>(null);
  const [filter, setFilter] = useState<FormationType | 'all'>('all');
  const triggerRefMap = useRef<Map<string, HTMLButtonElement>>(new Map());
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Filter items
  const filteredCerts = filter === 'all'
    ? verifiedFormations
    : verifiedFormations.filter(c => c.type === filter);

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (!selectedCert) return;

    // Focus close button on open
    setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 50);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key === 'ArrowRight') {
        navigateCert('next');
      } else if (e.key === 'ArrowLeft') {
        navigateCert('prev');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedCert]);

  const closeLightbox = () => {
    const certId = selectedCert?.id;
    setSelectedCert(null);
    if (certId && triggerRefMap.current.has(certId)) {
      triggerRefMap.current.get(certId)?.focus();
    }
  };

  const navigateCert = (direction: 'next' | 'prev') => {
    if (!selectedCert) return;
    const currentIndex = filteredCerts.findIndex(c => c.id === selectedCert.id);
    if (currentIndex === -1) return;

    if (direction === 'next') {
      const nextIndex = (currentIndex + 1) % filteredCerts.length;
      setSelectedCert(filteredCerts[nextIndex]);
    } else {
      const prevIndex = (currentIndex - 1 + filteredCerts.length) % filteredCerts.length;
      setSelectedCert(filteredCerts[prevIndex]);
    }
  };

  return (
    <div className="space-y-8">
      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3" role="tablist" aria-label="Filtrar certificados">
        <button
          type="button"
          onClick={() => setFilter('all')}
          className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
            filter === 'all'
              ? 'bg-[#4FD6F4] text-[#081331] shadow-lg shadow-[#4FD6F4]/20'
              : 'bg-[#0e1e4a] text-slate-300 hover:text-white hover:bg-[#162c66]'
          }`}
          role="tab"
          aria-selected={filter === 'all'}
        >
          Todos os 7 Comprovantes ({verifiedFormations.length})
        </button>

        <button
          type="button"
          onClick={() => setFilter('pos-graduacao')}
          className={`px-4 py-2 rounded-xl text-sm font-medium transition-all flex items-center gap-1.5 ${
            filter === 'pos-graduacao'
              ? 'bg-[#4FD6F4] text-[#081331] shadow-lg shadow-[#4FD6F4]/20'
              : 'bg-[#0e1e4a] text-slate-300 hover:text-white hover:bg-[#162c66]'
          }`}
          role="tab"
          aria-selected={filter === 'pos-graduacao'}
        >
          <GraduationCap className="w-4 h-4" />
          <span>Pós-Graduações (3)</span>
        </button>

        <button
          type="button"
          onClick={() => setFilter('extensao')}
          className={`px-4 py-2 rounded-xl text-sm font-medium transition-all flex items-center gap-1.5 ${
            filter === 'extensao'
              ? 'bg-[#4FD6F4] text-[#081331] shadow-lg shadow-[#4FD6F4]/20'
              : 'bg-[#0e1e4a] text-slate-300 hover:text-white hover:bg-[#162c66]'
          }`}
          role="tab"
          aria-selected={filter === 'extensao'}
        >
          <BookOpen className="w-4 h-4" />
          <span>Extensões (2)</span>
        </button>

        <button
          type="button"
          onClick={() => setFilter('desenvolvimento')}
          className={`px-4 py-2 rounded-xl text-sm font-medium transition-all flex items-center gap-1.5 ${
            filter === 'desenvolvimento'
              ? 'bg-[#4FD6F4] text-[#081331] shadow-lg shadow-[#4FD6F4]/20'
              : 'bg-[#0e1e4a] text-slate-300 hover:text-white hover:bg-[#162c66]'
          }`}
          role="tab"
          aria-selected={filter === 'desenvolvimento'}
        >
          <Award className="w-4 h-4" />
          <span>Capacitações (2)</span>
        </button>
      </div>

      {/* Grid of Verified Certificates */}
      <div
        className={`grid grid-cols-1 md:grid-cols-2 ${
          filteredCerts.length === 2 ? 'lg:grid-cols-2 lg:max-w-4xl lg:mx-auto' : 'lg:grid-cols-3'
        } gap-6`}
      >
        {filteredCerts.map((cert, index) => {
          const isLastSingleItemLg = filteredCerts.length % 3 === 1 && index === filteredCerts.length - 1;
          const isLastSingleItemMd = filteredCerts.length % 2 === 1 && index === filteredCerts.length - 1;

          const centeringClasses = [
            isLastSingleItemMd ? 'md:col-span-2 md:max-w-md md:w-full md:mx-auto' : '',
            isLastSingleItemLg ? 'lg:col-span-1 lg:col-start-2 lg:max-w-none' : '',
          ]
            .filter(Boolean)
            .join(' ');

          return (
            <div
              key={cert.id}
              className={`group relative bg-[#0e1e4a]/70 border border-[#1e3878] rounded-2xl overflow-hidden hover:border-[#4FD6F4]/50 transition-all duration-300 flex flex-col hover:shadow-2xl hover:shadow-[#4FD6F4]/5 ${centeringClasses}`}
            >
            {/* Certificate image preview button */}
            <button
              type="button"
              ref={(el) => {
                if (el) triggerRefMap.current.set(cert.id, el);
                else triggerRefMap.current.delete(cert.id);
              }}
              onClick={() => setSelectedCert(cert)}
              className="relative aspect-[4/3] w-full overflow-hidden bg-[#060e24] cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#4FD6F4]"
              aria-label={`Visualizar certificado ampliado de ${cert.title}`}
            >
              <img
                src={cert.image}
                alt={`Certificado oficial de ${cert.title} emitido por ${cert.institution}`}
                className="w-full h-full object-cover object-top aspect-[4/3] transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
                decoding="async"
                width="400"
                height="300"
              />
              <div className="absolute inset-0 bg-[#081331]/30 group-hover:bg-[#081331]/10 transition-colors flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity px-3 py-1.5 rounded-lg bg-[#081331]/80 text-[#4FD6F4] text-xs font-semibold backdrop-blur-sm flex items-center gap-1.5 shadow-lg border border-[#4FD6F4]/30">
                  <ZoomIn className="w-4 h-4" />
                  <span>Ampliar Comprovante</span>
                </span>
              </div>
            </button>

            {/* Certificate details */}
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="inline-block text-[11px] font-semibold tracking-wider text-[#4FD6F4] uppercase bg-[#122456] px-2.5 py-0.5 rounded-full">
                    {cert.typeLabel}
                  </span>
                  <span className="text-xs font-medium text-slate-400">
                    {cert.year}
                  </span>
                </div>
                <h3 className="text-base font-bold text-white group-hover:text-[#4FD6F4] transition-colors leading-snug">
                  {cert.title}
                </h3>
                <p className="text-xs text-[#8ea5c8] mt-1 font-medium">
                  Instituição: <span className="text-slate-300">{cert.institution}</span>
                </p>
                {cert.description && (
                  <p className="text-xs text-slate-400 mt-2.5 leading-relaxed">
                    {cert.description}
                  </p>
                )}
              </div>

              <div className="mt-4 pt-3 border-t border-[#1e3878]/60 flex items-center justify-between text-xs text-emerald-400">
                <span className="flex items-center gap-1 font-medium">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  Documento validado
                </span>
                <button
                  type="button"
                  onClick={() => setSelectedCert(cert)}
                  className="text-[#4FD6F4] hover:underline font-semibold"
                >
                  Ver Detalhes
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>

      {/* Accessible Lightbox Modal */}
      {selectedCert && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="cert-dialog-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
          onClick={closeLightbox}
        >
          <div
            className="relative max-w-4xl w-full bg-[#0b183d] border border-[#1e3878] rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 sm:p-5 border-b border-[#1e3878] bg-[#081331]">
              <div>
                <span className="text-xs font-semibold text-[#4FD6F4] uppercase tracking-wider">
                  {selectedCert.typeLabel} — {selectedCert.year}
                </span>
                <h2 id="cert-dialog-title" className="text-lg sm:text-xl font-bold text-white mt-0.5 font-['Plus_Jakarta_Sans']">
                  {selectedCert.title}
                </h2>
                <p className="text-xs text-slate-400">
                  Emitido por {selectedCert.institution}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => navigateCert('prev')}
                  className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-[#122456] focus:outline-none focus:ring-2 focus:ring-[#4FD6F4]"
                  aria-label="Certificado anterior"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={() => navigateCert('next')}
                  className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-[#122456] focus:outline-none focus:ring-2 focus:ring-[#4FD6F4]"
                  aria-label="Próximo certificado"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  ref={closeButtonRef}
                  onClick={closeLightbox}
                  className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-[#122456] focus:outline-none focus:ring-2 focus:ring-[#4FD6F4]"
                  aria-label="Fechar visualização ampliada"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Modal Body: Image */}
            <div className="flex-1 overflow-auto p-4 sm:p-6 bg-[#040a1b] flex items-center justify-center">
              <img
                src={selectedCert.image}
                alt={`Visualização ampliada do certificado de ${selectedCert.title}`}
                className="max-h-[65vh] w-auto aspect-[4/3] object-contain rounded-lg shadow-lg border border-[#162c66]"
                loading="lazy"
                decoding="async"
                width="800"
                height="600"
              />
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-[#081331] border-t border-[#1e3878] text-xs text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-3">
              <p>
                Documento de conclusão acadêmica com dados pessoais protegidos em respeito à LGPD.
              </p>
              <div className="flex items-center gap-4 text-slate-500">
                <span>Pressione <strong>ESC</strong> para fechar</span>
                <span>Navegue com <strong>←</strong> e <strong>→</strong></span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
