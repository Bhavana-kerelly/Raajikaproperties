import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import Button from '../Button';

const HERO_SLIDES = [
  "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2500&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1582672060674-bc2bd808a8d5?q=80&w=2500&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1546412414-8035e1776c9a?q=80&w=2500&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1610647752706-3bb12232b3ab?q=80&w=2500&auto=format&fit=crop"
];

export default function Hero() {
  const targetRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      ref={targetRef}
      className="relative h-screen w-full overflow-hidden bg-luxury-990 flex items-center justify-center"
    >
      <motion.div style={{ scale }} className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-gradient-to-b from-luxury-990/70 via-transparent to-luxury-990 z-20" />
        <div className="absolute inset-0 bg-luxury-990/30 z-20 mix-blend-multiply" />
        <AnimatePresence mode="wait">
          <motion.img
            key={currentSlide}
            src={HERO_SLIDES[currentSlide]}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            alt="Dubai Skyline"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
        </AnimatePresence>
      </motion.div>

      {/* Ambient gradient lights */}
      <div className="absolute inset-0 z-20 opacity-40 pointer-events-none mix-blend-screen overflow-hidden">
        <motion.div
          animate={{ x: [0, 50, 0], y: [0, -30, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold-500/20 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{ x: [0, -40, 0], y: [0, 40, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gold-400/15 rounded-full blur-[150px]"
        />
      </div>

      {/* Hero Content */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-30 flex flex-col items-center text-center px-6 mt-64"
      >
        <motion.h1
          className="font-serif text-4xl md:text-6xl lg:text-7xl text-white max-w-5xl leading-[1.1] tracking-tight mt-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          Secure Your Legacy In <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 via-white to-gold-600 italic">
            Dubai's Skyline.
          </span>
        </motion.h1>

        <motion.p
          className="mt-8 text-lg md:text-xl text-white/70 max-w-2xl font-light tracking-wide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          Exclusive real estate opportunities for Indian investors. <br className="hidden md:block" />
          Tax-free returns, high yields, and world-class luxury living.
        </motion.p>

        <motion.div
          className="mt-12 flex flex-col sm:flex-row gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <Link to="/properties">
            <Button variant="primary" className="min-w-[220px]">
              Explore Properties
            </Button>
          </Link>
          <Link to="/talk">
            <Button variant="glass" className="min-w-[220px]">
              Book Investment Call
            </Button>
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center opacity-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <span className="text-[10px] uppercase tracking-[0.4em] mb-4 font-light">
          Scroll Down
        </span>
        <div className="w-[1px] h-12 bg-white/20 relative overflow-hidden">
          <motion.div
            className="w-full h-1/2 bg-gold-500"
            animate={{ top: ["-50%", "100%"] }}
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            style={{ position: "absolute" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
