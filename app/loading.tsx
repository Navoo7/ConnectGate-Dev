"use client";

import { motion } from "framer-motion";

export default function Loading() {
  return (
    <motion.div 
      className="fixed inset-0 bg-background flex items-center justify-center z-50"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative">
        <motion.div
          className="w-48 h-48 border-4 border-primary rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 360],
            borderRadius: ["50%", "30%", "50%"],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <span className="text-xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
            ConnectGate
          </span>
        </motion.div>
      </div>
    </motion.div>
  );
}