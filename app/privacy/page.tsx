"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, Phone, ArrowLeft } from "lucide-react";
import { useLanguage } from "@/components/providers/language-provider";
import { useNavigation } from "@/hooks/use-navigation";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

export default function PrivacyPolicy() {
  const { t } = useLanguage();
  const { goBack } = useNavigation();

  const sections = [
    {
      title: t("privacy.sections.interpretation.title"),
      content: t("privacy.sections.interpretation.content")
    },
    {
      title: t("privacy.sections.personalData.title"),
      content: t("privacy.sections.personalData.content")
    },
    {
      title: t("privacy.sections.dataUse.title"),
      content: t("privacy.sections.dataUse.content")
    },
    {
      title: t("privacy.sections.dataSharing.title"),
      content: t("privacy.sections.dataSharing.content")
    },
    {
      title: t("privacy.sections.dataRetention.title"),
      content: t("privacy.sections.dataRetention.content")
    }
  ];

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex justify-start mb-6">
          <Button onClick={goBack} variant="ghost" size="sm" className="hover:bg-accent/50">
            <ArrowLeft className="h-5 w-5" />
          </Button>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <h1 className="text-3xl font-bold text-center mb-2">
            {t("privacy.title")}
          </h1>
          <p className="text-muted-foreground text-center mb-6">
            {t("privacy.lastUpdated")}: 2024-01-15
          </p>
          <p className="text-muted-foreground mb-8">
            {t("privacy.description")}
          </p>

          <Accordion type="single" collapsible className="w-full">
            {sections.map((section, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {section.title}
                </AccordionTrigger>
                <AccordionContent className="whitespace-pre-line text-muted-foreground">
                  {section.content}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-12 border-t pt-8">
            <h2 className="text-2xl font-semibold mb-4">
              {t("privacy.contact.title")}
            </h2>
            <p className="text-muted-foreground mb-8">
              {t("privacy.contact.description")}
            </p>
            <div className="flex flex-col sm:flex-row items-start gap-6 mt-2">
              <Link 
                href="mailto:support@connectgate.com"
                className="flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-lg hover:bg-accent/20 transition-colors group"
              >
                <Mail className="h-4 w-4 text-primary group-hover:text-primary/80" />
                <span className="text-foreground text-sm">support@connectgate.com</span>
              </Link>
              <Link 
                href="tel:+964750000000"
                className="flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-lg hover:bg-accent/20 transition-colors group"
              >
                <Phone className="h-4 w-4 text-primary group-hover:text-primary/80" />
                <span className="text-foreground text-sm">+964 750 000 0000</span>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}