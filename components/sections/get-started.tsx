"use client";

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

const steps = [
  {
    icon: <MessageSquare className="h-6 w-6" />,
    title: "Contact Us",
    description:
      "Share your organization's requirements including number of cities, admin needs, and research goals.",
  },
  {
    icon: <UserCog className="h-6 w-6" />,
    title: "Admin Setup",
    description:
      "Receive admin accounts for each city and get started with the ConnectGate app.",
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "User Management",
    description:
      "Invite team members and create user accounts with appropriate access levels.",
  },
  {
    icon: <FolderKanban className="h-6 w-6" />,
    title: "Group Creation",
    description:
      "Organize users into groups based on roles and research requirements.",
  },
  {
    icon: <FileQuestion className="h-6 w-6" />,
    title: "Survey Management",
    description:
      "Create and distribute surveys to specific groups, ensuring targeted research.",
  },
  {
    icon: <Rocket className="h-6 w-6" />,
    title: "Research Journey",
    description:
      "Begin your research journey with streamlined processes and real-time insights.",
  },
];

export default function GetStarted() {
  const handleScrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="get-started" className="py-24 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Get Started</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Follow these steps to begin your research journey with ConnectGate
            and transform how your organization manages research.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full relative group hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="absolute -top-3 -left-3 bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <div className="rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button size="lg" className="gap-2" onClick={handleScrollToContact}>
            <MessageSquare className="h-5 w-5" />
            Contact Us to Begin
          </Button>
        </motion.div>
      </div>
    </section>
  );
}





// "use client"

// import { motion } from "framer-motion"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent } from "@/components/ui/card"
// import { 
//   MessageSquare, 
//   UserCog, 
//   Users, 
//   FolderKanban,
//   FileQuestion,
//   Rocket
// } from "lucide-react"

// const steps = [
//   {
//     icon: <MessageSquare className="h-6 w-6" />,
//     title: "Contact Us",
//     description: "Share your organization's requirements including number of cities, admin needs, and research goals."
//   },
//   {
//     icon: <UserCog className="h-6 w-6" />,
//     title: "Admin Setup",
//     description: "Receive admin accounts for each city and get started with the ConnectGate app."
//   },
//   {
//     icon: <Users className="h-6 w-6" />,
//     title: "User Management",
//     description: "Invite team members and create user accounts with appropriate access levels."
//   },
//   {
//     icon: <FolderKanban className="h-6 w-6" />,
//     title: "Group Creation",
//     description: "Organize users into groups based on roles and research requirements."
//   },
//   {
//     icon: <FileQuestion className="h-6 w-6" />,
//     title: "Survey Management",
//     description: "Create and distribute surveys to specific groups, ensuring targeted research."
//   },
//   {
//     icon: <Rocket className="h-6 w-6" />,
//     title: "Research Journey",
//     description: "Begin your research journey with streamlined processes and real-time insights."
//   }
// ]

// export default function GetStarted() {
//   return (
//     <section id="get-started" className="py-24 bg-muted/50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-3xl font-bold mb-4">Get Started</h2>
//           <p className="text-muted-foreground max-w-2xl mx-auto">
//             Follow these steps to begin your research journey with ConnectGate and transform how your organization manages research.
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {steps.map((step, index) => (
//             <motion.div
//               key={step.title}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               viewport={{ once: true }}
//             >
//               <Card className="h-full relative group hover:shadow-lg transition-shadow">
//                 <CardContent className="pt-6">
//                   <div className="absolute -top-3 -left-3 bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold">
//                     {index + 1}
//                   </div>
//                   <div className="rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
//                     {step.icon}
//                   </div>
//                   <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
//                   <p className="text-muted-foreground">{step.description}</p>
//                 </CardContent>
//               </Card>
//             </motion.div>
//           ))}
//         </div>

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 0.4 }}
//           viewport={{ once: true }}
//           className="text-center mt-12"
//         >
//           <Button size="lg" className="gap-2">
//             <MessageSquare className="h-5 w-5" />
//             Contact Us to Begin
//           </Button>
//         </motion.div>
//       </div>
//     </section>
//   )
// }