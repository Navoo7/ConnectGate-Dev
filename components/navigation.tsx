"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { useLanguage } from "@/components/providers/language-provider";
import { useHeaderNavigation } from "@/hooks/use-header-navigation";
import { cn } from "@/lib/utils";

type Locale = 'en' | 'ar' | 'ckb';

const Navigation = () => {
  const { theme, setTheme } = useTheme();
  const { t, locale, setLocale } = useLanguage();
  const { handleNavigation, activeHash } = useHeaderNavigation({ offset: 80 });
  const [isMounted, setIsMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const navItems = [
    { label: t("navigation.home"), href: "#hero" },
    { label: t("navigation.about"), href: "#about" },
    { label: t("navigation.features"), href: "#features" },
    { label: t("navigation.mockup"), href: "#mockup" },
    { label: t("navigation.contact"), href: "#contact" },
    { label: t("navigation.getStarted"), href: "#get-started" },
  ];

  const handleNavClick = (href: string, e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
    }
    setIsOpen(false);
    
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    handleNavigation(href);
  };

  const handleThemeChange = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const handleLanguageChange = (newLocale: Locale) => {
    setLocale(newLocale);
  };

  if (!isMounted) {
    return null;
  }

  return (
    <nav
      className={cn(
        "fixed top-0 w-full",
        "bg-background/10 backdrop-blur-md supports-[backdrop-filter]:bg-background/5",
        "dark:bg-background/20 dark:supports-[backdrop-filter]:bg-background/15",
        "border-b border-border/[0.08]",
        "after:absolute after:inset-0 after:bg-gradient-to-b after:from-primary/[0.08] after:to-transparent after:opacity-50 after:-z-10",
        "before:absolute before:inset-0 before:bg-gradient-to-r before:from-primary/[0.03] before:via-transparent before:to-primary/[0.03] before:opacity-70 before:-z-10",
        "z-50"
      )}
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <a 
              href="#hero"
              onClick={(e) => handleNavClick("#hero", e)}
              className={cn(
                "text-2xl font-bold",
                "bg-clip-text text-transparent",
                "bg-gradient-to-r from-primary via-primary/90 to-primary",
                "hover:opacity-80 transition-opacity",
                "block",
              )}
            >
              ConnectGate
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <nav className={cn("hidden lg:flex gap-8")}>
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(item.href, e)}
                  className={cn(
                    "text-sm font-medium transition-colors relative",
                    "hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-opacity-50 rounded-md",
                    "after:absolute after:inset-x-0 after:bottom-0 after:h-[2px] after:rounded-full",
                    "after:bg-primary/0 hover:after:bg-primary/10",
                    "after:transition-all after:duration-300",
                    activeHash === item.href && "text-primary after:bg-primary/20"
                  )}
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <Button
              variant="ghost"
              size="icon"
              className={cn(
                "hover:bg-transparent dark:hover:bg-transparent",
                "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-opacity-50"
              )}
              onClick={handleThemeChange}
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-muted-foreground/90" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-muted-foreground/90" />
              <span className="sr-only">{t("theme.toggle")}</span>
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div className="flex md:hidden items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              className="w-8 h-8 hover:bg-transparent"
              onClick={handleThemeChange}
            >
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-muted-foreground/70" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-muted-foreground/70" />
            </Button>
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="w-8 h-8 hover:bg-transparent"
                >
                  <Menu className="h-4 w-4 text-muted-foreground/70 hover:text-primary/70 transition-colors duration-200" />
                </Button>
              </SheetTrigger>
              <SheetContent 
                side={locale === 'ar' || locale === 'ckb' ? 'left' : 'right'}
                className={cn(
                  "fixed inset-0 w-full !max-w-full md:!max-w-[400px]",
                  "bg-background/75 dark:bg-background/70",
                  "before:fixed before:inset-0 before:backdrop-blur-sm before:pointer-events-none",
                  "border-none shadow-lg",
                  "p-6",
                  "isolate",
                  "data-[state=open]:animate-in data-[state=closed]:animate-out",
                  locale === 'ar' || locale === 'ckb' 
                    ? "data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left"
                    : "data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right",
                )}
              >
                <SheetHeader className="relative border-b border-border/5 pb-4 z-10">
                  <SheetTitle className="sr-only">Menu</SheetTitle>
                 
                  <a
                    href="#hero"
                    onClick={(e) => handleNavClick("#hero", e)}
                    className={cn(
                      "text-2xl font-bold",
                      "bg-clip-text text-transparent",
                      "bg-gradient-to-r from-primary via-primary/90 to-primary",
                      "hover:opacity-80 transition-opacity",
                      "block",
                      locale === 'ar' || locale === 'ckb' ? "text-right" : "text-left",
                    )}
                  >
                    ConnectGate
                  </a>
                </SheetHeader>

                {/* Navigation Links */}
                <div className="mt-8 space-y-1.5 relative z-10">
                  {navItems.map((item) => (
                    <SheetClose asChild key={item.href}>
                      <a
                        href={item.href}
                        onClick={(e) => handleNavClick(item.href, e)}
                        className={cn(
                          "flex items-center w-full px-3 py-2.5",
                          "text-base font-medium",
                          "text-foreground/90 transition-all duration-200",
                          "hover:text-primary hover:bg-primary/5",
                          "rounded-md",
                          locale === 'ar' || locale === 'ckb' ? "text-right" : "text-left",
                          activeHash === item.href && "text-primary bg-primary/5"
                        )}
                      >
                        {item.label}
                      </a>
                    </SheetClose>
                  ))}
                </div>

                {/* Settings Section */}
                <div className="absolute bottom-6 left-0 right-0 px-6 space-y-3 z-10">
                  {/* Theme Toggle */}
                  <button
                    onClick={handleThemeChange}
                    className={cn(
                      "flex items-center justify-between w-full",
                      "px-4 py-2.5 rounded-lg",
                      "bg-white/40 dark:bg-black/20",
                      "border border-border/10",
                      "shadow-sm",
                      "transition-all duration-200",
                      "group"
                    )}
                  >
                    <span className="text-sm font-medium text-foreground/90">
                      {theme === 'light' ? 'Light Mode' : 'Dark Mode'}
                    </span>
                    <div className="w-8 h-8 flex items-center justify-center">
                      <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-black/90 dark:text-white/90" />
                      <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-black/90 dark:text-white/90" />
                    </div>
                  </button>

                  {/* Language Selection */}
                  <div className={cn(
                    "px-2 py-2 rounded-lg",
                    "bg-white/40 dark:bg-black/20",
                    "border border-border/10",
                    "shadow-sm",
                    "!text-left" // Force LTR for language section
                  )}>
                    <div className="flex   py-4 items-center justify-between mb-0.5">
                      <span className="text-sm font-medium text-foreground/120">
                        Language
                      </span>
                    </div>
                    <div className="flex flex-row gap-1.5" style={{ direction: 'ltr' }}>
                      <button
                        className={cn(
                          "h-9 px-3 text-sm font-medium flex-1 rounded-md",
                          "transition-all duration-200",
                          "border border-border/10",
                          locale === 'en' 
                            ? "bg-foreground text-background shadow-sm hover:bg-foreground/90"
                            : "bg-white/50 dark:bg-white/5 text-foreground/90 hover:bg-white/70 dark:hover:bg-white/10"
                        )}
                        onClick={() => handleLanguageChange('en')}
                      >
                        En
                      </button>
                      <button
                        className={cn(
                          "h-9 px-3 text-sm font-medium flex-1 rounded-md",
                          "transition-all duration-200",
                          "border border-border/10",
                          locale === 'ar'
                            ? "bg-foreground text-background shadow-sm hover:bg-foreground/90"
                            : "bg-white/50 dark:bg-white/5 text-foreground/90 hover:bg-white/70 dark:hover:bg-white/10"
                        )}
                        onClick={() => handleLanguageChange('ar')}
                      >
                        عر
                      </button>
                      <button
                        className={cn(
                          "h-9 px-3 text-sm font-medium flex-1 rounded-md",
                          "transition-all duration-200",
                          "border border-border/10",
                          locale === 'ckb'
                            ? "bg-foreground text-background shadow-sm hover:bg-foreground/90"
                            : "bg-white/50 dark:bg-white/5 text-foreground/90 hover:bg-white/70 dark:hover:bg-white/10"
                        )}
                        onClick={() => handleLanguageChange('ckb')}
                      >
                        کو
                      </button>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;