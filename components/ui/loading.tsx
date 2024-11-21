'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface LoadingProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'dots';
}

export function Loading({ className, size = 'md', variant = 'default' }: LoadingProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
  };

  if (variant === 'dots') {
    return (
      <div className={cn('flex items-center justify-center gap-2', className)}>
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className={cn(
              'rounded-full bg-primary',
              size === 'sm' && 'w-1.5 h-1.5',
              size === 'md' && 'w-2 h-2',
              size === 'lg' && 'w-3 h-3'
            )}
            initial={{ scale: 0.8, opacity: 0.4 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 0.5,
              repeat: Infinity,
              repeatType: 'reverse',
              delay: i * 0.2,
            }}
          />
        ))}
      </div>
    );
  }

  return (
    <div className={cn('flex items-center justify-center', className)}>
      <motion.div
        className={cn(
          'border-4 border-primary/30 border-t-primary rounded-full',
          sizeClasses[size]
        )}
        animate={{ rotate: 360 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
    </div>
  );
}
