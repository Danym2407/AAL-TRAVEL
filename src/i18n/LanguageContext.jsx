import { createContext, useCallback, useContext, useMemo, useState } from 'react';
import { dict } from './dict.js';

const LanguageContext = createContext(null);

function getPath(obj, path) {
  return path.split('.').reduce((o, k) => (o && o[k] !== undefined ? o[k] : null), obj);
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('es');

  const t = useCallback(
    (path) => {
      const val = getPath(dict[lang], path);
      return val === null ? path : val;
    },
    [lang]
  );

  const value = useMemo(() => ({ lang, setLang, t }), [lang, t]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within a LanguageProvider');
  return ctx;
}
