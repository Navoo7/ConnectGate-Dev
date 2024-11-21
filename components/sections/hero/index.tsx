"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";
import { NetworkPattern } from "./network-pattern";
import { useLanguage } from "@/components/providers/language-provider";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

const FeatureBadge = ({
  icon,
  titleKey,
  theme,
}: {
  icon: string;
  titleKey: string;
  theme: string;
}) => {
  const { t } = useLanguage();
  
  return (
    <motion.div
      className={cn(
        "flex items-center gap-3 px-3 py-1 rounded-md shadow-sm text-sm font-medium",
        theme === "dark"
          ? "bg-gray-900 text-gray-100 hover:bg-gray-700"
          : "bg-gray-100 text-gray-800 hover:bg-gray-200"
      )}
      style={{
        height: "32px",
        minWidth: "120px",
      }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <Image
        src={icon}
        alt={t(titleKey)}
        width={14}
        height={14}
        className="object-contain"
      />
      <span>{t(titleKey)}</span>
    </motion.div>
  );
};

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();
  const { t, locale } = useLanguage();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const features = [
    {
      icon:
        theme === "dark"
          ? "/icons/usermanagement-white.svg"
          : "/icons/usermanagement-black.svg",
      titleKey: "hero.features.userManagement",
    },
    {
      icon: theme === "dark" ? "/icons/analysis-white.svg" : "/icons/analysis-black.svg",
      titleKey: "hero.features.analytics",
    },
    {
      icon: theme === "dark" ? "/icons/search-white.svg" : "/icons/search-black.svg",
      titleKey: "hero.features.research",
    },
    {
      icon: theme === "dark" ? "/icons/survey-white.svg" : "/icons/survey-black.svg",
      titleKey: "hero.features.surveys",
    },
    {
      icon:
        theme === "dark"
          ? "/icons/collaborate-white.svg"
          : "/icons/collaborate-black.svg",
      titleKey: "hero.features.collaboration",
    },
  ];

  const handleAndroidClick = (e: React.MouseEvent) => {
    e.preventDefault();
    toast.info("Coming Soon!", {
      description: "Our Android app will be available on Google Play Store soon. Stay tuned!",
    });
  };

  return (
    <motion.section
      id="hero"
      key={locale} // Add key to force re-render on language change
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden pt-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Network pattern */}
      <NetworkPattern />

      {/* Hero content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        {/* Responsive Hero Heading */}
        <h1 className={cn(
          "text-3xl sm:text-5xl lg:text-6xl font-bold mb-6",
          locale === "ckb" && [
            "font-nrt",
            "leading-[2.4]",
            "tracking-wide",
            "py-2",
            "overflow-visible",
            "min-h-[90px]",
            "flex items-center justify-center",
            "text-right"
          ],
          locale === "ar" && [
            "font-arabic",
            "leading-[2.2]",
            "tracking-wide",
            "flex items-center justify-center",
            "min-h-[90px]",
            "text-center"
          ]
        )}
        style={{
          ...(locale === "ckb" && {
            lineHeight: "1.0",
            paddingBottom: "0.05em",
            paddingTop: "0.25em",
            height: "auto",
            minHeight: "90px",
            direction: "rtl"
          }),
          ...(locale === "ar" && {
            lineHeight: "1.0",
            paddingBottom: "0.05em",
            paddingTop: "0.25em",
            height: "auto",
            minHeight: "90px",
            direction: "rtl",
            textAlign: "center"
          })
        }}
        >
          <span className={cn(
            "block w-full",
            locale === "ckb" && [
              "transform -translate-y-1",
              "relative",
              "text-center"
            ],
            locale === "ar" && [
              "relative",
              "text-center"
            ]
          )}>
            {t('hero.title')}
          </span>
        </h1>

        {/* Responsive Subtext */}
        <p className={cn(
          "text-sm sm:text-base lg:text-lg text-muted-foreground mb-10 max-w-2xl mx-auto",
          locale === "ckb" && [
            "font-nrt",
            "leading-[2.2]",
            "tracking-wide",
            "py-1",
            "text-right"
          ],
          locale === "ar" && [
            "font-arabic",
            "leading-[2]",
            "tracking-wide",
            "text-center",
            "py-1"
          ]
        )}
        style={{
          ...(locale === "ckb" && {
            lineHeight: "2.2",
            direction: "rtl",
            textAlign: "center"
          }),
          ...(locale === "ar" && {
            lineHeight: "2",
            direction: "rtl",
            textAlign: "center"
          })
        }}
        >
          {t('hero.description')}
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
          {/* iOS Button */}
          <a
            href="https://apps.apple.com/iq/app/connectgate/id6503262935"
            target="_blank"
            rel="noopener noreferrer"
            className="group w-full sm:w-auto"
          >
            <Button
              size="lg"
              className="w-full sm:w-auto flex items-center justify-center gap-2 group relative overflow-hidden hover:scale-105 transition-transform px-6 py-3 text-sm"
            >
              <div className="relative w-5 h-5 mr-2">
                <Image
                  src={
                    theme === "dark"
                      ? "/icons/apple-black.svg"
                      : "/icons/apple-white.svg"
                  }
                  alt="Apple Logo"
                  fill
                  className="object-contain transition-transform group-hover:scale-110"
                  unoptimized
                  priority
                />
              </div>
              <span className="whitespace-nowrap">{t('hero.downloadIOS')}</span>
            </Button>
          </a>

          {/* Android Button */}
          <div className="group w-full sm:w-auto">
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto flex items-center justify-center gap-2 group relative overflow-hidden hover:scale-105 transition-transform px-6 py-3 text-sm"
              onClick={handleAndroidClick}
            >
              <div className="relative w-5 h-5 mr-2">
                <Image
                  src={
                    theme === "dark"
                      ? "/icons/android-white.svg"
                      : "/icons/android-black.svg"
                  }
                  alt="Android Logo"
                  fill
                  className="object-contain transition-transform group-hover:scale-110"
                  unoptimized
                  priority
                />
              </div>
              <span className="whitespace-nowrap">{t('hero.downloadAndroid')}</span>
            </Button>
          </div>
        </div>

        {/* Feature Badges */}
        <div className="flex flex-wrap justify-center gap-4 mt-12">
          {features.map((feature, index) => (
            <FeatureBadge
              key={index}
              icon={feature.icon}
              titleKey={feature.titleKey}
              theme={theme || "light"}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
}