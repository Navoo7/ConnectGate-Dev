import { useState, useEffect } from 'react';
import en from '@/lib/translations/en.json';
import ar from '@/lib/translations/ar.json';
import { Translations } from '@/types/translations';

type Locale = 'en' | 'ar';

const translations: Record<Locale, Translations> = {
  en,
  ar,
};

// This hook is deprecated. Use useLanguage from language-provider instead.
export const useTranslation = () => {
  throw new Error('useTranslation is deprecated. Use useLanguage from @/components/providers/language-provider instead.');
};
