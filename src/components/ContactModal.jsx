import { useEffect } from 'react';
import { useLanguage } from '../i18n/LanguageContext.jsx';
import { useContactModal } from '../context/ContactModalContext.jsx';

export default function ContactModal() {
  const { t } = useLanguage();
  const { isOpen, itemKey, itemName, closeModal, whatsappHref, callHref } = useContactModal();

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') closeModal();
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [closeModal]);

  const handleFormLink = () => {
    closeModal();
    if (itemKey && itemName) {
      const details = document.getElementById('f-details');
      if (details) details.value = `${t('modal.prefillPrefix')} ${itemName}`;
    }
    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
    window.setTimeout(() => document.getElementById('f-name')?.focus({ preventScroll: true }), 400);
  };

  return (
    <div
      className={`fixed inset-0 z-[2000] flex items-center justify-center bg-[#0a2540]/55 p-5 backdrop-blur-sm transition-opacity duration-[250ms] ${
        isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
      }`}
      onClick={(e) => {
        if (e.target === e.currentTarget) closeModal();
      }}
      role="presentation"
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="contactModalTitle"
        className={`relative w-full max-w-sm rounded-2xl bg-white p-7 pt-8 text-center shadow-2xl transition-transform duration-[250ms] ${
          isOpen ? 'translate-y-0 scale-100' : 'translate-y-5 scale-95'
        }`}
      >
        <button
          type="button"
          onClick={closeModal}
          aria-label="Cerrar"
          className="absolute right-3 top-2.5 p-1.5 text-2xl leading-none text-gray-400 hover:text-gray-600"
        >
          &times;
        </button>

        <div className="mx-auto mb-3.5 flex h-14 w-14 items-center justify-center rounded-full bg-light-blue text-2xl text-primary">
          <i className="fa-solid fa-comments"></i>
        </div>

        <h3 id="contactModalTitle" className="mb-1.5 text-xl font-bold text-primary">
          {t('modal.title')}
        </h3>
        {itemName && <p className="mb-[18px] text-sm font-semibold text-gray-600">{itemName}</p>}

        <div className="mb-3.5 flex flex-col gap-3">
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2.5 rounded-lg bg-[#25d366] py-3.5 text-base font-bold text-white transition-transform hover:-translate-y-0.5 hover:shadow-lg"
          >
            <i className="fa-brands fa-whatsapp text-lg"></i> {t('modal.whatsapp')}
          </a>
          <a
            href={callHref}
            className="flex items-center justify-center gap-2.5 rounded-lg bg-primary py-3.5 text-base font-bold text-white transition-transform hover:-translate-y-0.5 hover:shadow-lg"
          >
            <i className="fa-solid fa-phone text-lg"></i> {t('modal.call')}
          </a>
        </div>

        <button type="button" onClick={handleFormLink} className="text-sm text-accent underline">
          {t('modal.formLink')}
        </button>
      </div>
    </div>
  );
}
