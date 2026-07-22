// Bilingual (EN/IT) content context — the pattern powering convertleads.pro's
// language toggle. Genericized from src/contexts/LanguageContext.tsx: same
// structure, business copy stripped out and replaced with placeholder keys.
//
// Usage: wrap your app in <LanguageProvider>, then call useLanguage() anywhere
// to get `t(key)` and the current `lang` + a `setLang` toggle.

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

export type Lang = 'en' | 'it';

type Dict = Record<string, { en: string; it: string }>;

// Replace with your own keys. Convention used on convertleads.pro:
// '<section>.<field>', e.g. 'hero.subtitle', 'cta.heading1'.
export const translations: Dict = {
  'nav.home': { en: 'Home', it: 'Home' },
  'hero.heading': { en: 'Your headline here', it: 'Il tuo titolo qui' },
  'cta.button': { en: 'Get in touch', it: 'Contattami' },
};

type LanguageContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: keyof typeof translations) => string;
};

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

const STORAGE_KEY = 'preferred-lang';

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    if (typeof window === 'undefined') return 'en';
    return (localStorage.getItem(STORAGE_KEY) as Lang) || 'en';
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, lang);
  }, [lang]);

  const setLang = (next: Lang) => setLangState(next);

  const t = (key: keyof typeof translations) => translations[key]?.[lang] ?? String(key);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within a LanguageProvider');
  return ctx;
}
