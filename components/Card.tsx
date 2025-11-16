'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function Card({ children, className = '', delay = 0 }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -4 }}
      className={`bg-surface rounded-[var(--radius-xl)] p-6 sm:p-8 shadow-[var(--shadow-card)] hover:shadow-lg transition-all duration-200 ${className}`}
    >
      {children}
    </motion.div>
  );
}

