"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import Loading from "./loading";
import { useEffect, useState } from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500); // Show loading screen for 2.5 seconds

    return () => clearTimeout(timer);
  }, [pathname]); // Reset loading state on route change

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <Loading key="loading" />
      ) : (
        <motion.div
          key={pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}