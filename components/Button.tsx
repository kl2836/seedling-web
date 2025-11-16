'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  href?: string;
  disabled?: boolean;
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  type = 'button',
  className = '',
  href,
  disabled = false,
}: ButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center whitespace-nowrap rounded-xl font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50';
  
  const variantClasses = {
    primary: 'bg-[#16a34a] text-white shadow-sm hover:bg-emerald-600 hover:shadow-md focus-visible:ring-emerald-600',
    secondary: 'bg-surface text-ink border-2 border-brand hover:bg-brand hover:text-white focus-visible:ring-brand',
    outline: 'bg-transparent text-ink border-2 border-border hover:border-brand hover:text-brand focus-visible:ring-brand',
  };
  
  const sizeClasses = {
    sm: 'h-9 px-4 text-sm',
    md: 'h-11 px-5 py-3 text-base',
    lg: 'h-14 px-8 text-lg rounded-2xl',
  };

  const button = (
    <motion.button
      whileHover={disabled ? {} : variant === 'primary' ? {} : { scale: 1.02 }}
      whileTap={disabled ? {} : { scale: 0.98 }}
      type={href ? undefined : type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
    >
      {children}
    </motion.button>
  );

  if (href) {
    return (
      <motion.a
        whileHover={variant === 'primary' ? {} : { scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        href={href}
        className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className} no-underline`}
      >
        {children}
      </motion.a>
    );
  }

  return button;
}

