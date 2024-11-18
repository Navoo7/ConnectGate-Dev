"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";
import { NetworkPattern } from "./network-pattern";

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <motion.section
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Background grid and overlay */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid-foreground/[0.02]" />
      <div className="absolute inset-0 flex items-center justify-center bg-background/80 backdrop-blur-[2px] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

      {/* Network pattern */}
      <NetworkPattern />

      {/* Hero content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            type: "spring",
            stiffness: 100,
          }}
        >
          <h1 className="text-4xl sm:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80">
            Connect. Research. Discover.
          </h1>
          {/* Add vertical spacing */}
          <p className="text-xl text-muted-foreground mb-8 mt-6 max-w-2xl mx-auto">
            Streamline your research process with ConnectGate. The modern
            platform for efficient research management and participant
            engagement.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
            {/* iOS Button */}
            <a
              href="https://apps.apple.com/iq/app/connectgate/id6503262935"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <Button
                size="lg"
                className="w-full sm:w-auto px-8 py-4 text-lg font-medium gap-2 group relative overflow-hidden hover:scale-105 transition-transform"
              >
                <div className="relative w-5 h-5 mr-2">
                  <Image
                    src={
                      theme === "dark"
                        ? "/apple-logo-white.svg"
                        : "/apple-logo-black.svg"
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
              className="group"
            >
              <Button
                size="lg"
                className="w-full sm:w-auto px-8 py-4 text-lg font-medium gap-2 group relative overflow-hidden hover:scale-105 transition-transform"
              >
                <div className="relative w-5 h-5 mr-2">
                  <Image
                    src={
                      theme === "dark"
                        ? "/android-logo-white.svg"
                        : "/android-logo-black.svg"
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
        </motion.div>
      </div>
    </motion.section>
  );
}

















// // components/sections/hero/hero.tsx
// "use client";

// import { Button } from "@/components/ui/button";
// import { motion } from "framer-motion";
// import { useTheme } from "next-themes";
// import Image from "next/image";
// import { useEffect, useState } from "react";
// import { NetworkPattern } from "./network-pattern";

// export default function Hero() {
//   const [mounted, setMounted] = useState(false);
//   const { theme } = useTheme();

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   if (!mounted) {
//     return null;
//   }

//   return (
//     <motion.section
//       className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 1 }}
//     >
//       {/* Background grid and overlay */}
//       <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid-foreground/[0.02]" />
//       <div className="absolute inset-0 flex items-center justify-center bg-background/80 backdrop-blur-[2px] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

//       {/* Network pattern */}
//       <NetworkPattern />

//       {/* Hero content */}
//       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center z-10"> {/* Added z-10 to ensure content is above the canvas */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{
//             duration: 0.8,
//             type: "spring",
//             stiffness: 100,
//           }}
//         >
//           <h1 className="text-4xl sm:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80">
//             Connect. Research. Discover.
//           </h1>
//           <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
//             Streamline your research process with ConnectGate. The modern
//             platform for efficient research management and participant
//             engagement.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <Button
//               size="lg"
//               className="gap-2 group relative overflow-hidden hover:scale-105 transition-transform"
//             >
//               <div className="relative w-5 h-5 mr-2">
//                 <Image
//                   src={
//                     theme === "dark"
//                       ? "/apple-logo-white.svg"
//                       : "/apple-logo-black.svg"
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
//             <Button
//               size="lg"
//               variant="outline"
//               className="gap-2 group relative overflow-hidden hover:scale-105 transition-transform"
//             >
//               <div className="relative w-5 h-5 mr-2">
//                 <Image
//                   src={
//                     theme === "dark"
//                       ? "/android-logo-white.svg"
//                       : "/android-logo-black.svg"
//                   }
//                   alt="Android Logo"
//                   fill
//                   className="object-contain transition-transform group-hover:scale-110"
//                   unoptimized
//                   priority
//                 />
//               </div>
//               Download for Android
//             </Button>
//           </div>
//         </motion.div>
//       </div>
//     </motion.section>
//   );
// }





 