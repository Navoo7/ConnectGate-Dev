"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/components/providers/language-provider";
import { useProjects } from "@/hooks/use-projects";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Loading } from "@/components/ui/loading";
import { cn } from "@/lib/utils";

export default function Projects() {
  const { t, locale } = useLanguage();
  const { images, loading, error } = useProjects();

  const isRTL = locale === 'ar' || locale === 'ckb';
  // Use NRT font for Kurdish
  const fontClass = locale === 'ar' ? 'font-arabic' : locale === 'ckb' ? 'font-nrt' : '';

  console.log('Projects component state:', { 
    loading, 
    error,
    projects: images.projects,
  });

  if (loading) {
    console.log('Projects component is loading...');
    return (
      <motion.section
        key={locale}
        id="projects"
        className="py-24"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        dir="ltr"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="w-full">
              <div className="flex flex-col items-center justify-center text-center">
                <h2 
                  className={`text-4xl font-bold mb-4 ${locale === 'ckb' ? 'font-nrt' : locale === 'ar' ? 'font-noto-arabic' : ''}`}
                >
                  {t('projects.title')}
                </h2>
                <p 
                  className={`text-xl text-gray-600 mb-8 ${locale === 'ckb' ? 'font-nrt' : locale === 'ar' ? 'font-noto-arabic' : ''}`}
                >
                  {t('projects.description')}
                </p>
              </div>
            </div>
          </motion.div>

          <div className="w-full max-w-4xl mx-auto">
            <Carousel opts={{ direction: 'ltr' }}>
              <CarouselContent>
                <CarouselItem className="relative aspect-video rounded-lg overflow-hidden bg-muted border border-border">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Loading size="lg" variant="dots" />
                  </div>
                </CarouselItem>
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </motion.section>
    );
  }

  // Make sure we have project images
  if (!Array.isArray(images.projects) || images.projects.length === 0) {
    console.log('No project images available:', images.projects);
    return null;
  }

  console.log('Rendering projects with images:', images.projects);

  return (
    <motion.section
      key={locale}
      id="projects"
      className="py-24"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      dir="ltr"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="w-full">
            <div className="flex flex-col items-center justify-center text-center">
              <h2 
                className={`text-4xl font-bold mb-4 ${locale === 'ckb' ? 'font-nrt' : locale === 'ar' ? 'font-noto-arabic' : ''}`}
              >
                {t('projects.title')}
              </h2>
              <p 
                className={`text-xl text-gray-600 mb-8 ${locale === 'ckb' ? 'font-nrt' : locale === 'ar' ? 'font-noto-arabic' : ''}`}
              >
                {t('projects.description')}
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-4xl mx-auto"
        >
          <Carousel opts={{ direction: 'ltr' }} className="w-full">
            <CarouselContent>
              {images.projects.map((url, index) => (
                <CarouselItem key={url}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative aspect-video rounded-lg overflow-hidden bg-muted border border-border hover:shadow-lg transition-all duration-300"
                    dir="ltr"
                  >
                    <Image
                      src={url}
                      alt={t(`projects.titles.${['modern', 'sleek', 'elegant'][index]}`) || `Project ${index + 1}`}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                      priority={index === 0}
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                      <h3 
                        className={cn("text-white text-xl font-semibold mb-2", fontClass)}
                        dir={isRTL ? "rtl" : "ltr"}
                      >
                        {t(`projects.titles.${['modern', 'sleek', 'elegant'][index]}`) || `Project ${index + 1}`}
                      </h3>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </motion.div>
      </div>
    </motion.section>
  );
}
