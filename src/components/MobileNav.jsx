import { useLanguage } from '../i18n/LanguageContext.jsx';
import { useContactModal } from '../context/ContactModalContext.jsx';

export default function MobileNav() {
  const { t } = useLanguage();
  const { openModal } = useContactModal();

  const scrollTo = (id) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <nav className="fixed bottom-0 left-0 z-[1000] flex w-full justify-around border-t border-gray-100 bg-white py-2.5 shadow-[0_-2px_10px_rgba(0,0,0,0.05)] md:hidden">
      <button
        type="button"
        onClick={() => scrollTo('#top')}
        className="flex flex-col items-center text-[0.7rem] text-gray-500"
      >
        <i className="fa-solid fa-compass mb-0.5 text-lg"></i>
        {t('nav.explore')}
      </button>
      <button
        type="button"
        onClick={() => scrollTo('#contacto')}
        className="flex flex-col items-center text-[0.7rem] text-gray-500"
      >
        <i className="fa-solid fa-sliders mb-0.5 text-lg"></i>
        {t('nav.custom')}
      </button>
      <button
        type="button"
        onClick={() => openModal()}
        className="flex flex-col items-center text-[0.7rem] text-gray-500"
      >
        <i className="fa-solid fa-headset mb-0.5 text-lg"></i>
        {t('nav.support')}
      </button>
    </nav>
  );
}
