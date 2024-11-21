"use client";

import { motion } from "framer-motion";

const loadingVariants = {
  animate: {
    scale: [1, 1.2, 1],
    rotate: [0, 360],
    borderRadius: ["50%", "30%", "50%"],
  },
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

const pulseVariants = {
  animate: {
    scale: [1, 1.1, 1],
    opacity: [0.5, 1, 0.5],
  },
  transition: {
    duration: 1.5,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

const textVariants = {
  animate: {
    opacity: [0.7, 1, 0.7],
  },
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

export default function Loading() {
  return (
    <motion.div 
      className="fixed inset-0 bg-gradient-to-b from-background to-background/95 backdrop-blur-sm flex items-center justify-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative flex items-center justify-center w-48 h-48">
        {/* Outer ring */}
        <motion.div
          className="absolute w-48 h-48 border-4 border-primary/30 rounded-full"
          animate={loadingVariants.animate}
          transition={loadingVariants.transition}
        />
        
        {/* Inner ring */}
        <motion.div
          className="absolute w-36 h-36 border-4 border-primary/50 rounded-full"
          animate={loadingVariants.animate}
          transition={{
            ...loadingVariants.transition,
            delay: 0.2,
          }}
        />

        {/* Center content */}
        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-center gap-2 pointer-events-none"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <motion.span 
            className="text-base font-medium tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-primary/90 via-primary to-primary/90 whitespace-nowrap"
            animate={textVariants.animate}
            transition={textVariants.transition}
          >
            ConnectGate
          </motion.span>
          
          {/* Loading dots */}
          <div className="flex gap-1">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-1 h-1 rounded-full bg-primary/80"
                animate={pulseVariants.animate}
                transition={{
                  ...pulseVariants.transition,
                  delay: i * 0.2,
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}