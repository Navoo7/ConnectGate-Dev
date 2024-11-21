"use client";

import { useEffect, useState } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { LanguageProvider } from "@/components/providers/language-provider";
import { LanguageSwitcher } from "@/components/language-switcher";
import { Toaster } from "@/components/ui/toaster";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

export function RootLayoutClient({ 
  children,
  className 
}: { 
  children: React.ReactNode;
  className: string;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; 
  }

  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <LanguageProvider>
        <div className={className}>
          <Navigation />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <Toaster />
          <LanguageSwitcher />
        </div>
      </LanguageProvider>
    </NextThemesProvider>
  );
}
