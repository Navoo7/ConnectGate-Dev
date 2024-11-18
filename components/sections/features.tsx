"use client";

import { NetworkPattern } from "@/components/sections/hero/network-pattern";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { BarChart3, FileQuestion, Image as ImageIcon, Shield, UserCog, Zap } from "lucide-react";


const features = [
  { icon: <UserCog className="h-6 w-6" />, title: "User Management", description: "Comprehensive tools for managing user accounts and permissions." },
  { icon: <FileQuestion className="h-6 w-6" />, title: "Survey Creation", description: "Create engaging surveys with our intuitive question builder." },
  { icon: <ImageIcon className="h-6 w-6" />, title: "Image Support", description: "Enhance surveys with image integration capabilities." },
  { icon: <BarChart3 className="h-6 w-6" />, title: "Real-time Analytics", description: "Monitor and analyze responses in real-time." },
  { icon: <Shield className="h-6 w-6" />, title: "Secure Data", description: "Enterprise-grade security for your research data." },
  { icon: <Zap className="h-6 w-6" />, title: "Fast Performance", description: "Lightning-fast performance for seamless research operations." },
];

export default function Features() {
  return (
    <section id="features" className="py-24 relative overflow-hidden">
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
          <h2 className="text-3xl font-bold mb-4">Powerful Features</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover the tools that make ConnectGate the perfect platform for your research needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
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
  );
}







// "use client"

// import { motion } from "framer-motion"
// import { Card, CardContent } from "@/components/ui/card"
// import {
//   UserCog,
//   FileQuestion,
//   Image as ImageIcon,
//   BarChart3,
//   Shield,
//   Zap
// } from "lucide-react"

// const features = [
//   {
//     icon: <UserCog className="h-6 w-6" />,
//     title: "User Management",
//     description: "Comprehensive tools for managing user accounts and permissions."
//   },
//   {
//     icon: <FileQuestion className="h-6 w-6" />,
//     title: "Survey Creation",
//     description: "Create engaging surveys with our intuitive question builder."
//   },
//   {
//     icon: <ImageIcon className="h-6 w-6" />,
//     title: "Image Support",
//     description: "Enhance surveys with image integration capabilities."
//   },
//   {
//     icon: <BarChart3 className="h-6 w-6" />,
//     title: "Real-time Analytics",
//     description: "Monitor and analyze responses in real-time."
//   },
//   {
//     icon: <Shield className="h-6 w-6" />,
//     title: "Secure Data",
//     description: "Enterprise-grade security for your research data."
//   },
//   {
//     icon: <Zap className="h-6 w-6" />,
//     title: "Fast Performance",
//     description: "Lightning-fast performance for seamless research operations."
//   }
// ]

// export default function Features() {
//   return (
//     <section id="features" className="py-24">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-3xl font-bold mb-4">Powerful Features</h2>
//           <p className="text-muted-foreground max-w-2xl mx-auto">
//             Discover the tools that make ConnectGate the perfect platform for your research needs.
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {features.map((feature, index) => (
//             <motion.div
//               key={feature.title}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               viewport={{ once: true }}
//             >
//               <Card className="h-full hover:shadow-lg transition-shadow">
//                 <CardContent className="pt-6">
//                   <div className="rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center mb-4">
//                     {feature.icon}
//                   </div>
//                   <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
//                   <p className="text-muted-foreground">{feature.description}</p>
//                 </CardContent>
//               </Card>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }