'use client';

import { motion } from 'framer-motion';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export default function SectionTitle({ title, subtitle, className = '' }: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`text-center ${className}`}
    >
      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-ink mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg sm:text-xl text-muted max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}

