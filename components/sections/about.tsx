"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Beaker, Users, LineChart } from "lucide-react"

const features = [
  {
    icon: <Beaker className="h-6 w-6" />,
    title: "Research Management",
    description: "Streamline your research process with powerful management tools and intuitive interfaces."
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Participant Engagement",
    description: "Connect with participants seamlessly and gather valuable insights through interactive surveys."
  },
  {
    icon: <LineChart className="h-6 w-6" />,
    title: "Data Analytics",
    description: "Transform research data into actionable insights with advanced analytics capabilities."
  }
]

export default function About() {
  return (
    <section id="about" className="py-24 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">About ConnectGate</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            ConnectGate is a revolutionary platform designed to transform how organizations manage research processes and engage with participants.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardContent className="pt-6">
                  <div className="rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}