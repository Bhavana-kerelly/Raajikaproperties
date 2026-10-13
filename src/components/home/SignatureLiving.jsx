import React from 'react';
import { motion } from 'framer-motion';

export default function SignatureLiving() {
  return (
    <section id="lifestyle" className="relative bg-luxury-990 py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-16">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="w-full md:w-1/2"
        >
          <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white leading-none mb-8 relative z-20">
            The Standard <br />
            <span className="text-gold-500 italic">Redefined.</span>
          </h2>
          <p className="text-white/60 text-lg max-w-md font-light leading-relaxed">
            Experience a lifestyle without compromise. Wake up to panoramic Arabian Gulf views, dine at Michelin-starred restaurants, and enjoy world-class infrastructure—all with absolute security and privacy.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-full md:w-1/2 relative h-[600px]"
        >
          <div className="absolute top-0 right-0 w-3/4 h-[400px] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1546412414-8035e1776c9a?q=80&w=1500&auto=format&fit=crop"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              alt="Dubai Lifestyle"
            />
          </div>
          <div className="absolute bottom-0 left-0 w-2/3 h-[350px] border-4 border-luxury-990 overflow-hidden z-10">
            <img
              src="https://images.unsplash.com/photo-1610647752706-3bb12232b3ab?q=80&w=1500&auto=format&fit=crop"
              className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-1000"
              alt="Luxury Car"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
