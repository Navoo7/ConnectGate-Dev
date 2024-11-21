"use client";

import * as React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  FileQuestion,
  FolderKanban,
  MessageSquare,
  Rocket,
  UserCog,
  Users,
} from "lucide-react";
import { useLanguage } from "@/components/providers/language-provider";
import { useHeaderNavigation } from "@/hooks/use-header-navigation";

const steps = [
  {
    icon: <MessageSquare className="h-6 w-6" />,
    titleKey: "getStarted.steps.contact.title",
    descriptionKey: "getStarted.steps.contact.description",
  },
  {
    icon: <UserCog className="h-6 w-6" />,
    titleKey: "getStarted.steps.adminSetup.title",
    descriptionKey: "getStarted.steps.adminSetup.description",
  },
  {
    icon: <Users className="h-6 w-6" />,
    titleKey: "getStarted.steps.userManagement.title",
    descriptionKey: "getStarted.steps.userManagement.description",
  },
  {
    icon: <FolderKanban className="h-6 w-6" />,
    titleKey: "getStarted.steps.groupCreation.title",
    descriptionKey: "getStarted.steps.groupCreation.description",
  },
  {
    icon: <FileQuestion className="h-6 w-6" />,
    titleKey: "getStarted.steps.surveyManagement.title",
    descriptionKey: "getStarted.steps.surveyManagement.description",
  },
  {
    icon: <Rocket className="h-6 w-6" />,
    titleKey: "getStarted.steps.researchJourney.title",
    descriptionKey: "getStarted.steps.researchJourney.description",
  },
];

export default function GetStarted() {
  const { t, locale } = useLanguage();
  const { handleNavigation } = useHeaderNavigation({ offset: 80 });

  const handleStartNowClick = () => {
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      const offset = 80; // Height of the fixed header
      const elementPosition = contactSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      handleNavigation("#contact");
    }
  };

  return (
    <motion.section
      id="get-started"
      key={locale}
      className="py-24 bg-muted/50"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('getStarted.title')}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t('getStarted.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <Card 
              key={index} 
              className="hover:shadow-lg transition-all duration-300 ease-in-out"
            >
              <CardContent className="p-6 flex flex-col items-start">
                <div className="mb-4 text-primary">
                  {step.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  {t(step.titleKey)}
                </h3>
                <p className="text-muted-foreground">
                  {t(step.descriptionKey)}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg" 
            onClick={handleStartNowClick}
            className="mx-auto bg-primary text-primary-foreground hover:bg-primary/90"
          >
            {t('getStarted.cta')}
          </Button>
        </div>
      </div>
    </motion.section>
  );
}