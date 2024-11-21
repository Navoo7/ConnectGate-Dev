'use client';

import { useLanguage } from "@/components/providers/language-provider";
import { Button } from "./button";
import { Globe } from "lucide-react";

export function LanguageToggle() {
  const { locale, setLocale } = useLanguage();

  const toggleLanguage = () => {
    const newLocale = locale === 'en' ? 'ar' : 'en';
    setLocale(newLocale);
  };

  return (
    <Button 
      variant="ghost" 
      size="icon" 
      onClick={toggleLanguage}
      className="flex items-center justify-center"
    >
      <Globe className="h-5 w-5" />
      <span className="sr-only">
        {locale === 'en' ? 'Switch to Arabic' : 'Switch to English'}
      </span>
    </Button>
  );
}
