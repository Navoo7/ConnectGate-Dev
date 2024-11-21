"use client";

import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/components/providers/language-provider";
import { useNavigation } from "@/hooks/use-navigation";

const ContactPage = () => {
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
            <h1 className="text-3xl font-bold mb-6">{t("contact.title")}</h1>
          </motion.div>

          <motion.div variants={item}>
            <div className="bg-card rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-semibold mb-2">{t("contact.email")}</h2>
                  <a 
                    href="mailto:info@connectgate.com"
                    className="text-primary hover:underline"
                  >
                    info@connectgate.com
                  </a>
                </div>
                <div>
                  <h2 className="text-xl font-semibold mb-2">{t("contact.phone")}</h2>
                  <a 
                    href="tel:+964 750 444 4444"
                    className="text-primary hover:underline"
                  >
                    +964 750 444 4444
                  </a>
                </div>
                <div>
                  <h2 className="text-xl font-semibold mb-2">{t("contact.office")}</h2>
                  <p className="text-muted-foreground">
                    123 Research Avenue, Innovation City
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={item}>
            <div className="bg-card rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <h2 className="text-xl font-semibold mb-4">{t("contact.faq.title")}</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium">{t("contact.faq.questions.getStarted.question")}</h3>
                  <p className="text-muted-foreground mt-1">
                    {t("contact.faq.questions.getStarted.answer")}
                  </p>
                </div>
                <div>
                  <h3 className="font-medium">{t("contact.faq.questions.security.question")}</h3>
                  <p className="text-muted-foreground mt-1">
                    {t("contact.faq.questions.security.answer")}
                  </p>
                </div>
                <div>
                  <h3 className="font-medium">{t("contact.faq.questions.cities.question")}</h3>
                  <p className="text-muted-foreground mt-1">
                    {t("contact.faq.questions.cities.answer")}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;
