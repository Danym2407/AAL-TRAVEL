import { useLanguage } from '../i18n/LanguageContext.jsx';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#0a2540] px-5 py-8 text-center text-sm text-gray-400">
      <p className="mb-2.5">
        <strong className="text-gray-300">AAL Travel</strong> - License: Ajman NuVentures Centre Free Zone
      </p>
      <p>
        &copy; 2026 AAL Travel. {t('footer.rights')} |{' '}
        <a href="#" className="underline">
          {t('footer.terms')}
        </a>{' '}
        |{' '}
        <a href="#" className="underline">
          {t('footer.privacy')}
        </a>
      </p>
    </footer>
  );
}
