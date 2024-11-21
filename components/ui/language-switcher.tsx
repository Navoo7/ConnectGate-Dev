'use client';

import React from 'react';
import { useLanguage } from '@/components/providers/language-provider';
import { Button } from './button';

export function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();

  const toggleLanguage = () => {
    const newLocale = locale === 'en' ? 'ar' : 'en';
    setLocale(newLocale);
  };

  return (
    <Button
      variant="outline"
      onClick={toggleLanguage}
      className="fixed bottom-4 right-4 z-50"
    >
      {locale === 'en' ? 'العربية' : 'English'}
    </Button>
  );
}
