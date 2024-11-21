"use client";

import Link from "next/link";
import { NetworkPattern } from "@/components/sections/hero/network-pattern";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import { useLanguage } from "@/components/providers/language-provider";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-background border-t relative overflow-hidden">
      <NetworkPattern />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t("footer.company.title")}</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/about" 
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t("footer.company.about")}
                </Link>
              </li>
              <li>
                <Link 
                  href="/blog" 
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t("footer.company.blog")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t("footer.support.title")}</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/help" 
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t("footer.support.help")}
                </Link>
              </li>
              <li>
                <Link 
                  href="/docs" 
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t("footer.support.documentation")}
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t("footer.support.contact")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t("footer.legal.title")}</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/privacy" 
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t("footer.legal.privacy")}
                </Link>
              </li>
              <li>
                <Link 
                  href="/terms" 
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t("footer.legal.terms")}
                </Link>
              </li>
              <li>
                <Link 
                  href="/security" 
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t("footer.legal.security")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t("footer.social.title")}</h3>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" asChild>
                <a 
                  href="https://github.com/Navoo7" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a 
                  href="https://www.linkedin.com/in/navid-h-a2775b20a" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a 
                  href="mailto:navidhishyar.73@aol.com"
                  aria-label="Email"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border">
          <p className="text-center text-sm text-muted-foreground">
            {new Date().getFullYear()} ConnectGate. {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  );
}