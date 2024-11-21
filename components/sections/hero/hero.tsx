"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";
import { NetworkPattern } from "./network-pattern";
import { useLanguage } from "@/components/providers/language-provider";
import { cn } from "@/lib/utils";

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();
  const { t, locale, dir } = useLanguage();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const isRTL = locale === "ar" || locale === "ckb";
  const fontClass = locale === "ckb" ? "font-nrt" : locale === "ar" ? "font-arabic" : "";

  return (
    <motion.section
      className={cn(
        "min-h-screen flex items-center justify-center relative pt-24",
        isRTL ? "text-right" : "text-left",
        "overflow-visible"
      )}
      key={locale}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      dir={dir}
    >
      {/* Background grid and overlay */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid-foreground/[0.02]" />
      <div className="absolute inset-0 flex items-center justify-center bg-background/80 backdrop-blur-[2px] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

      {/* Network pattern */}
      <NetworkPattern />

      {/* Hero content */}
      <div className="container relative z-10">
        <motion.div
          className={cn(
            "max-w-3xl mx-auto text-center space-y-8",
            "relative z-10",
            "overflow-visible"
          )}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h1
            className={cn(
              "text-4xl md:text-6xl font-bold",
              fontClass,
              isRTL && [
                locale === "ckb" ? "leading-[2.8] font-nrt" : "leading-[2.4]",
                "tracking-wider",
                "py-4",
                "overflow-visible",
                "min-h-[100px]",
                "flex items-center justify-center",
                "mx-auto",
                "relative"
              ]
            )}
            style={{
              ...(isRTL && {
                lineHeight: locale === "ckb" ? "2.8" : "2.4",
                paddingBottom: "0.5em",
                paddingTop: "0.5em",
                height: "auto",
                minHeight: "100px",
                letterSpacing: "0.025em",
                marginTop: "-0.5em"
              })
            }}
          >
            <span className={cn(
              "block relative",
              isRTL && [
                "px-4",
                locale === "ckb" && "transform -translate-y-1"
              ]
            )}>
              {t('hero.title')}
            </span>
          </h1>
          <p
            className={cn(
              "text-xl text-muted-foreground",
              fontClass,
              isRTL && [
                "leading-[2.2]",
                "tracking-wide",
                "py-2",
                "overflow-visible"
              ]
            )}
            style={{
              ...(isRTL && {
                lineHeight: locale === "ckb" ? "2.4" : "2.2",
                paddingBottom: "0.3em",
                paddingTop: "0.3em"
              })
            }}
          >
            {t('hero.description')}
          </p>
        </motion.div>

        <motion.div
          className={cn(
            "flex flex-col sm:flex-row items-center justify-center gap-6 mt-12",
            "relative z-10",
            "overflow-visible"
          )}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Button 
            size="lg"
            className={cn(
              "text-lg px-12 h-auto",
              fontClass,
              isRTL && [
                "min-h-[72px]",
                "leading-[2.4]",
                "tracking-wide",
                "text-[17px]",
                "py-6",
                "overflow-visible"
              ],
              "w-full sm:w-auto"
            )}
            style={{
              ...(isRTL && {
                lineHeight: locale === "ckb" ? "2.6" : "2.4",
                paddingTop: "1.25rem",
                paddingBottom: "1.25rem"
              })
            }}
          >
            <span className={cn(
              "block py-2",
              isRTL && [
                "relative",
                locale === "ckb" ? "top-[6px]" : "top-[4px]",
                "overflow-visible"
              ]
            )}>
              {t('hero.getStarted')}
            </span>
          </Button>
          <Button 
            size="lg"
            variant="outline"
            className={cn(
              "text-lg px-12 h-auto",
              fontClass,
              isRTL && [
                "min-h-[72px]",
                "leading-[2.4]",
                "tracking-wide",
                "text-[17px]",
                "py-6",
                "overflow-visible"
              ],
              "w-full sm:w-auto"
            )}
            style={{
              ...(isRTL && {
                lineHeight: locale === "ckb" ? "2.6" : "2.4",
                paddingTop: "1.25rem",
                paddingBottom: "1.25rem"
              })
            }}
          >
            <span className={cn(
              "block py-2",
              isRTL && [
                "relative",
                locale === "ckb" ? "top-[6px]" : "top-[4px]",
                "overflow-visible"
              ]
            )}>
              {t('hero.learnMore')}
            </span>
          </Button>
        </motion.div>

        {/* Trusted by */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            type: "spring",
            stiffness: 100,
            delay: 0.4,
          }}
          className="mt-16"
        >
          <p className={cn(
            "text-sm text-muted-foreground",
            fontClass,
            isRTL && [
              "leading-[2.2]",
              "tracking-wide",
              "py-1",
              "overflow-visible"
            ]
          )}
          style={{
            ...(isRTL && {
              lineHeight: locale === "ckb" ? "2.4" : "2.2",
              paddingBottom: "0.2em",
              paddingTop: "0.2em"
            })
          }}
          >
            {t('hero.trusted')}
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}