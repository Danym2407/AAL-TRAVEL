import { useLanguage } from '../i18n/LanguageContext.jsx';

const LANGS = ['es', 'en', 'fr'];

export default function Header() {
  const { lang, setLang } = useLanguage();

  return (
    <header className="sticky top-0 z-50 bg-white px-4 py-3 shadow-sm sm:px-5">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <a href="#" className="flex items-center gap-2 text-lg font-bold text-primary">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent text-xs font-bold text-white">
            AAL
          </span>
          <span>AAL Travel</span>
        </a>

        <div
          role="group"
          aria-label="Idioma / Language / Langue"
          className="flex gap-1 rounded-full bg-light-blue p-1"
        >
          {LANGS.map((code) => (
            <button
              key={code}
              type="button"
              onClick={() => setLang(code)}
              aria-pressed={lang === code}
              className={`rounded-full px-3 py-1.5 text-xs font-semibold transition-colors ${
                lang === code ? 'bg-primary text-white' : 'text-primary hover:bg-white/60'
              }`}
            >
              {code.toUpperCase()}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}
