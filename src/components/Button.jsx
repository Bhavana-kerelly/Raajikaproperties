import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../utils/cn';

export default function Button({ variant = "primary", className, children, ...props }) {
  const base = "relative overflow-hidden inline-flex items-center justify-center font-medium tracking-wide transition-all duration-300 px-8 py-4";
  const variants = {
    primary: "bg-gradient-to-r from-gold-500 to-gold-400 text-luxury-990 hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]",
    outline: "border border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-luxury-990",
    glass: "bg-white/5 backdrop-blur-md border border-white/10 text-white hover:bg-white/10"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(base, variants[variant], className)}
      {...props}
    >
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
}
