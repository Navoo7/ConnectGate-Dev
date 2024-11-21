/// <reference types="react" />
/// <reference types="lucide-react" />

declare module 'components/providers/language-provider' {
  export function useLanguage(): {
    locale: 'en' | 'ar';
    setLocale: (locale: 'en' | 'ar') => void;
    t: (key: string) => string;
    dir: 'ltr' | 'rtl';
  };
}

declare module 'components/ui/button' {
  import { ButtonHTMLAttributes } from 'react';

  export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'default' | 'outline' | 'ghost' | 'link';
    size?: 'default' | 'sm' | 'lg' | 'icon';
  }

  export function Button(props: ButtonProps): JSX.Element;
}
