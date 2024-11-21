"use client";

import { NetworkPattern } from "@/components/sections/hero/network-pattern";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { BarChart3, FileQuestion, Image as ImageIcon, Shield, UserCog, Zap } from "lucide-react";
import { useLanguage } from "@/components/providers/language-provider";

const features = [
  { 
    icon: <UserCog className="h-6 w-6" />, 
    titleKey: "features.list.userManagement.title", 
    descriptionKey: "features.list.userManagement.description" 
  },
  { 
    icon: <FileQuestion className="h-6 w-6" />, 
    titleKey: "features.list.surveyCreation.title", 
    descriptionKey: "features.list.surveyCreation.description" 
  },
  { 
    icon: <ImageIcon className="h-6 w-6" />, 
    titleKey: "features.list.imageSupport.title", 
    descriptionKey: "features.list.imageSupport.description" 
  },
  { 
    icon: <BarChart3 className="h-6 w-6" />, 
    titleKey: "features.list.analytics.title", 
    descriptionKey: "features.list.analytics.description" 
  },
  { 
    icon: <Shield className="h-6 w-6" />, 
    titleKey: "features.list.security.title", 
    descriptionKey: "features.list.security.description" 
  },
  { 
    icon: <Zap className="h-6 w-6" />, 
    titleKey: "features.list.performance.title", 
    descriptionKey: "features.list.performance.description" 
  },
];

export default function Features() {
  const { t, locale } = useLanguage();

  return (
    <motion.section
      key={locale}
      id="features"
      className="py-24 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
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
          <h2 className="text-3xl font-bold mb-4">{t('features.title')}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t('features.description')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.titleKey}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4 text-primary">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{t(feature.titleKey)}</h3>
                  <p className="text-muted-foreground">{t(feature.descriptionKey)}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}