"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/components/providers/language-provider";
import { useProjects } from "@/hooks/use-projects";
import { Loading } from "@/components/ui/loading";
import { NetworkPattern } from "@/components/sections/hero/network-pattern";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function Mockup() {
  const { t } = useLanguage();
  const { images, loading } = useProjects();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (images.mockup.length > 1) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.mockup.length);
      }, 3000);
    }

    return () => clearInterval(interval);
  }, [images.mockup]);

  if (loading) {
    return (
      <section id="mockup" className="py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative mx-auto w-[300px] h-[600px] flex items-center justify-center bg-muted/50 rounded-[3rem] border border-border">
            <Loading size="lg" variant="dots" />
          </div>
        </div>
      </section>
    );
  }

  if (!images.mockup.length) {
    console.log('No mockup images found');
    return null;
  }

  console.log('Rendering mockup with images:', images.mockup);

  return (
    <section id="mockup" className="py-24 overflow-hidden relative">
      {/* Network pattern background */}
      <NetworkPattern />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">
            {t("mockups.title")}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t("mockups.description")}
          </p>
        </motion.div>

        <div className="relative">
          {/* Mockup Frame */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative mx-auto w-[300px] h-[600px] rounded-[3rem] border-8 border-foreground/10 bg-background shadow-xl overflow-hidden z-20"
          >
            {/* iPhone Top Bar */}
            <div className="absolute top-0 inset-x-0 h-6 bg-foreground/5 z-30">
              <div className="absolute top-1 left-1/2 -translate-x-1/2 w-20 h-4 bg-foreground/10 rounded-full" />
            </div>

            {/* Image Display with Fade Blur Animation */}
            <div
              className="relative w-full h-full overflow-hidden"
              onClick={() =>
                setCurrentIndex((prevIndex) => (prevIndex + 1) % images.mockup.length)
              }
            >
              {images.mockup.map((url, index) => (
                <motion.div
                  key={url}
                  className={`absolute inset-0 ${
                    index === currentIndex ? "z-10" : "z-0"
                  }`}
                  initial={{ opacity: 0, filter: "blur(10px)" }}
                  animate={{
                    opacity: index === currentIndex ? 1 : 0,
                    filter: index === currentIndex ? "blur(0px)" : "blur(10px)",
                  }}
                  transition={{ duration: 1 }}
                >
                  <Image
                    src={url}
                    alt={t("mockups.device1")}
                    fill
                    className="object-cover"
                    unoptimized
                    priority={index === 0}
                  />
                </motion.div>
              ))}
            </div>

            {/* Bottom Bar */}
            <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-32 h-1 bg-foreground/20 rounded-full z-30" />
          </motion.div>

          {/* Cards */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="absolute top-1/4 -left-4 md:left-1/4 z-30"
          >
            <Card className="p-4 w-48 shadow-lg bg-black text-white border border-gray-700">
              <p className="font-medium">{t("mockups.card1.title")}</p>
              <p className="text-sm text-gray-300">{t("mockups.card1.description")}</p>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="absolute bottom-1/4 -right-4 md:right-1/4 z-30"
          >
            <Card className="p-4 w-48 shadow-lg bg-black text-white border border-gray-700">
              <p className="font-medium">{t("mockups.card2.title")}</p>
              <p className="text-sm text-gray-300">{t("mockups.card2.description")}</p>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}