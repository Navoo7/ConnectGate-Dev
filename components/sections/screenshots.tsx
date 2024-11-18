"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useScreenshots } from "@/hooks/use-screenshots";
import { Skeleton } from "@/components/ui/skeleton";

const screenshotTitles = [
  "Data Analytics",
  "Research Management",
  "User Engagement"
];

export default function Screenshots() {
  const { screenshots, loading } = useScreenshots();

  return (
    <section id="screenshots" className="py-24 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">App Screenshots</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Take a visual tour of ConnectGate's powerful features and intuitive interface.
          </p>
        </motion.div>

        {loading ? (
          <div className="w-full max-w-4xl mx-auto">
            <Skeleton className="w-full aspect-video rounded-lg" />
          </div>
        ) : (
          <Carousel className="w-full max-w-4xl mx-auto">
            <CarouselContent>
              {screenshots.screenshots.map((screenshot, index) => (
                <CarouselItem key={index}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="relative aspect-video rounded-lg overflow-hidden"
                  >
                    <Image
                      src={screenshot}
                      alt={`ConnectGate ${screenshotTitles[index]}`}
                      fill
                      className="object-cover"
                      priority={index === 0}
                      unoptimized
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                      <p className="text-white text-center font-medium">
                        {screenshotTitles[index]}
                      </p>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        )}
      </div>
    </section>
  );
}