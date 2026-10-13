import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '../utils/cn';

export default function Logo({ className, variant = "nav" }) {
  const heights = {
    nav: "h-10 md:h-12",
    hero: "h-32 md:h-48 lg:h-64",
    footer: "h-16 md:h-20"
  };

  return (
    <Link to="/" className={cn("flex flex-col items-center group", className)}>
      <div className={cn("relative transition-all duration-500 group-hover:scale-105", heights[variant])}>
        <img
          src="/images/logo-transparent.png"
          alt="Raajika Properties"
          className="h-full w-auto object-contain drop-shadow-2xl"
        />
        {variant === "hero" && (
          <div className="absolute inset-0 bg-gold-500/20 blur-3xl rounded-full -z-10 animate-pulse" />
        )}
      </div>
    </Link>
  );
}
