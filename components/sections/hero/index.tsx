"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";
import { NetworkPattern } from "./network-pattern";

const FeatureBadge = ({
  icon,
  title,
  theme,
}: {
  icon: string;
  title: string;
  theme: string;
}) => (
  <motion.div
    className={`flex items-center gap-3 px-3 py-1 rounded-md shadow-sm text-sm font-medium ${
      theme === "dark"
        ? "bg-gray-900 text-gray-100 hover:bg-gray-700"
        : "bg-gray-100 text-gray-800 hover:bg-gray-200"
    } transition-all duration-300`}
    style={{
      height: "32px",
      minWidth: "120px",
    }}
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6, ease: "easeInOut" }}
  >
    <Image
      src={icon}
      alt={title}
      width={14}
      height={14}
      className="object-contain"
    />
    <span>{title}</span>
  </motion.div>
);

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const features = [
    {
      icon:
        theme === "dark"
          ? "usermanagement-white.svg"
          : "usermanagement-black.svg",
      title: "User Management",
    },
    {
      icon: theme === "dark" ? "analysis-white.svg" : "analysis-black.svg",
      title: "Analytics",
    },
    {
      icon: theme === "dark" ? "search-white.svg" : "search-black.svg",
      title: "Research",
    },
    {
      icon: theme === "dark" ? "survey-white.svg" : "survey-black.svg",
      title: "Surveys",
    },
    {
      icon:
        theme === "dark"
          ? "collaborate-white.svg"
          : "collaborate-black.svg",
      title: "Collaboration",
    },
  ];

  return (
    <motion.section
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden pt-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid-foreground/[0.02]" />
      <div className="absolute inset-0 flex items-center justify-center bg-background/80 backdrop-blur-[2px]" />

      {/* Network pattern */}
      <NetworkPattern />

      {/* Hero content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        {/* Responsive Hero Heading */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80">
          Connect. Research. Discover.
        </h1>

        {/* Responsive Subtext */}
        <p className="text-sm sm:text-base lg:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Streamline your research process with ConnectGate. The modern platform
          for efficient research management and participant engagement.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
          {/* iOS Button */}
          <a
            href="https://apps.apple.com/iq/app/connectgate/id6503262935"
            target="_blank"
            rel="noopener noreferrer"
            className="group w-full sm:w-auto"
          >
            <Button
              size="lg"
              className="w-full sm:w-auto gap-2 group relative overflow-hidden hover:scale-105 transition-transform px-6 py-3 text-sm"
            >
              <div className="relative w-5 h-5 mr-2">
                <Image
                  src={
                    theme === "dark"
                      ? "apple-black.svg"
                      : "apple-white.svg"
                  }
                  alt="Apple Logo"
                  fill
                  className="object-contain transition-transform group-hover:scale-110"
                  unoptimized
                  priority
                />
              </div>
              Download for iOS
            </Button>
          </a>

          {/* Android Button */}
          <a
            href="https://play.google.com/store/apps/details?id=com.connectgate.app"
            target="_blank"
            rel="noopener noreferrer"
            className="group w-full sm:w-auto"
          >
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto gap-2 group relative overflow-hidden hover:scale-105 transition-transform px-6 py-3 text-sm"
            >
              <div className="relative w-5 h-5 mr-2">
                <Image
                  src={
                    theme === "dark"
                      ? "android-white.svg"
                      : "android-black.svg"
                  }
                  alt="Android Logo"
                  fill
                  className="object-contain transition-transform group-hover:scale-110"
                  unoptimized
                  priority
                />
              </div>
              Download for Android
            </Button>
          </a>
        </div>

        {/* Feature Badges */}
        <div className="flex flex-wrap justify-center gap-4 mt-12">
          {features.map((feature, index) => (
            <FeatureBadge
              key={index}
              icon={feature.icon}
              title={feature.title}
              theme={theme || "light"}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
}

































































































// "use client";

// import { Button } from "@/components/ui/button";
// import { motion } from "framer-motion";
// import { useTheme } from "next-themes";
// import Image from "next/image";
// import { useEffect, useState } from "react";
// import { NetworkPattern } from "./network-pattern";

// const FeatureBadge = ({
//   icon,
//   title,
//   theme,
// }: {
//   icon: string;
//   title: string;
//   theme: string;
// }) => (
//   <motion.div
//     className={`flex items-center gap-3 px-3 py-1 rounded-md shadow-sm text-sm font-medium ${
//       theme === "dark"
//         ? "bg-gray-900 text-gray-100 hover:bg-gray-700"
//         : "bg-gray-100 text-gray-800 hover:bg-gray-200"
//     } transition-all duration-300`}
//     style={{
//       height: "32px",
//       minWidth: "120px",
//     }}
//     initial={{ opacity: 0, scale: 0.8 }}
//     animate={{ opacity: 1, scale: 1 }}
//     transition={{ duration: 0.6, ease: "easeInOut" }}
//   >
//     <Image
//       src={icon}
//       alt={title}
//       width={14}
//       height={14}
//       className="object-contain"
//     />
//     <span>{title}</span>
//   </motion.div>
// );

// export default function Hero() {
//   const [mounted, setMounted] = useState(false);
//   const { theme } = useTheme();

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   if (!mounted) {
//     return null;
//   }

//   const features = [
//     {
//       icon:
//         theme === "dark"
//           ? "usermanagement-white.svg"
//           : "usermanagement-black.svg",
//       title: "User Management",
//     },
//     {
//       icon: theme === "dark" ?  "analysis-white.svg":"analysis-black.svg",
//       title: "Analytics",
//     },
//     {
//       icon: theme === "dark" ? "search-white.svg" : "search-black.svg",
//       title: "Research",
//     },
//     {
//       icon: theme === "dark" ? "survey-white.svg" : "survey-black.svg",
//       title: "Surveys",
//     },
//     {
//       icon:
//         theme === "dark"
//           ? "collaborate-white.svg"
//           : "collaborate-black.svg",
//       title: "Collaboration",
//     },
//   ];

//   return (
//     <motion.section
//       className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden pt-16"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 1 }}
//     >
//       {/* Background effects */}
//       <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid-foreground/[0.02]" />
//       <div className="absolute inset-0 flex items-center justify-center bg-background/80 backdrop-blur-[2px]" />

//       {/* Network pattern */}
//       <NetworkPattern />

//       {/* Hero content */}
//       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
//         <h1 className="text-4xl sm:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80">
//           Connect. Research. Discover.
//         </h1>
//         <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
//           Streamline your research process with ConnectGate. The modern platform
//           for efficient research management and participant engagement.
//         </p>

//         {/* Buttons */}
//         <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
//         <a
//             href="https://apps.apple.com/iq/app/connectgate/id6503262935" // Add the actual App Store URL here
//             target="_blank"
//             rel="noopener noreferrer"
//             className="group"
//           >
//             <Button
//               size="lg"
//               className="gap-2 group relative overflow-hidden hover:scale-105 transition-transform"
//             >
//               <div className="relative w-5 h-5 mr-2">
//                 <Image
//                   src={
//                     theme === "dark"
//                       ? "apple-black.svg"
//                       : "apple-white.svg"
//                   }
//                   alt="Apple Logo"
//                   fill
//                   className="object-contain transition-transform group-hover:scale-110"
//                   unoptimized
//                   priority
//                 />
//               </div>
//               Download for iOS
//             </Button>
//           </a>
//           <Button
//             size="lg"
//             variant="outline"
//             className="gap-2 group relative overflow-hidden hover:scale-105 transition-transform"
//           >
//             <div className="relative w-5 h-5 mr-2">
//               <Image
//                 src={
//                   theme === "dark"
//                     ? "android-white.svg"
//                     : "android-black.svg"
//                 }
//                 alt="Android Logo"
//                 fill
//                 className="object-contain transition-transform group-hover:scale-110"
//                 unoptimized
//                 priority
//               />
//             </div>
//             Download for Android
//           </Button>
//         </div>

//         {/* Feature Badges */}
//         <div className="flex flex-wrap justify-center gap-4 mt-12">
//           {features.map((feature, index) => (
//             <FeatureBadge
//               key={index}
//               icon={feature.icon}
//               title={feature.title}
//               theme={theme || "light"}
//             />
//           ))}
//         </div>
//       </div>
//     </motion.section>
//   );
// }

 