"use client";

import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/components/providers/language-provider";
import { useNavigation } from "@/hooks/use-navigation";

const HelpCenterPage = () => {
  const { t } = useLanguage();
  const navigation = useNavigation();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-muted/30 pt-20 pb-20">
      <div className="max-w-3xl mx-auto p-6">
        <Button
          onClick={() => navigation.goBack()}
          variant="ghost"
          className="mb-6"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          {t("common.back")}
        </Button>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-6"
        >
          <motion.div variants={item}>
            <h1 className="text-3xl font-bold mb-6">{t("help.title")}</h1>
          </motion.div>

          <motion.div variants={item}>
            <div className="bg-card rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <h2 className="text-xl font-semibold mb-3">{t("help.gettingStarted.title")}</h2>
              <p className="text-muted-foreground mb-4">{t("help.gettingStarted.description")}</p>
              <div className="space-y-4">
                {["account", "projects", "research", "collaboration"].map((topic) => (
                  <div key={topic} className="bg-primary/5 rounded-lg p-4">
                    <h3 className="font-medium mb-2">{t(`help.gettingStarted.topics.${topic}.title`)}</h3>
                    <p className="text-sm text-muted-foreground">{t(`help.gettingStarted.topics.${topic}.content`)}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div variants={item}>
            <div className="bg-card rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <h2 className="text-xl font-semibold mb-3">{t("help.faq.title")}</h2>
              <div className="space-y-4">
                {["general", "technical", "billing", "support"].map((category) => (
                  <div key={category} className="bg-primary/5 rounded-lg p-4">
                    <h3 className="font-medium mb-2">{t(`help.faq.categories.${category}.title`)}</h3>
                    <p className="text-sm text-muted-foreground">{t(`help.faq.categories.${category}.content`)}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div variants={item}>
            <div className="bg-card rounded-lg p-6 shadow-sm space-y-4">
              <h2 className="text-xl font-semibold mb-4">{t("contact.title")}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-primary/10 rounded-lg p-4">
                  <h3 className="font-medium mb-2">{t("contact.email")}</h3>
                  <a 
                    href="mailto:navidhishyar.73@aol.com"
                    className="text-primary hover:underline"
                  >
                    navidhishyar.73@aol.com
                  </a>
                </div>
                <div className="bg-primary/10 rounded-lg p-4">
                  <h3 className="font-medium mb-2">{t("contact.phone")}</h3>
                  <a 
                    href="tel:+964 750 730 9891"
                    className="text-primary hover:underline"
                  >
                    +964 750 730 9891
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default HelpCenterPage;