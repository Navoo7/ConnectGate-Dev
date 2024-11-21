"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Beaker, Users, LineChart } from "lucide-react"
import { useLanguage } from "@/components/providers/language-provider"

const features = [
  {
    icon: <Beaker className="h-6 w-6" />,
    titleKey: "about.features.research.title",
    descriptionKey: "about.features.research.description"
  },
  {
    icon: <Users className="h-6 w-6" />,
    titleKey: "about.features.participant.title",
    descriptionKey: "about.features.participant.description"
  },
  {
    icon: <LineChart className="h-6 w-6" />,
    titleKey: "about.features.analytics.title",
    descriptionKey: "about.features.analytics.description"
  }
]

export default function About() {
  const { t, locale } = useLanguage();

  return (
    <motion.section
      key={locale}
      id="about"
      className="py-24 bg-muted/50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">{t('about.title')}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t('about.description')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
  )
}