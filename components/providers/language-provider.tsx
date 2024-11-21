'use client';

import React, { 
  createContext, 
  useState, 
  useContext, 
  useEffect, 
  ReactNode 
} from 'react';
import en from '@/lib/translations/en.json';
import ar from '@/lib/translations/ar.json';
import ckb from '@/lib/translations/ckb.json';

type Locale = 'en' | 'ar' | 'ckb';
type Translations = Record<string, any>;

const translations: Record<Locale, Translations> = {
  en,
  ar,
  ckb,
};

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
  dir: 'ltr' | 'rtl';
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>('en');

  useEffect(() => {
    const savedLocale = localStorage.getItem('locale') as Locale;
    if (savedLocale && ['en', 'ar', 'ckb'].includes(savedLocale)) {
      setLocale(savedLocale);
    }
  }, []);

  const changeLocale = (newLocale: Locale) => {
    localStorage.setItem('locale', newLocale);
    setLocale(newLocale);
    document.documentElement.lang = newLocale;
    document.documentElement.dir = ['ar', 'ckb'].includes(newLocale) ? 'rtl' : 'ltr';
  };

  const t = (key: string) => {
    const keys = key.split('.');
    let value: any = translations[locale];
    
    for (const k of keys) {
      if (value && typeof value === 'object') {
        value = value[k];
      } else {
        return key; // Return original key if translation not found
      }
    }
    
    return value as string || key;
  };

  const contextValue: LanguageContextType = {
    locale,
    setLocale: changeLocale,
    t,
    dir: ['ar', 'ckb'].includes(locale) ? 'rtl' : 'ltr',
  };

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
