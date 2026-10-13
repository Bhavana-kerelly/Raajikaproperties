import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '../Button';

export default function CallToAction() {
  return (
    <section className="relative h-screen bg-luxury-990 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[200px] bg-gold-500/20 rounded-[100%] blur-[120px] pointer-events-none" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white leading-tight mb-8">
            Your Dubai Legacy <br /> Starts{" "}
            <span className="text-gold-500 italic">Here.</span>
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light"
        >
          Connect with our private investment advisors for a confidential consultation and access to off-market inventory.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto"
        >
          <Link to="/talk">
            <Button variant="primary" className="py-5 px-10 text-lg">
              Schedule Consultation
            </Button>
          </Link>
          <Link to="/properties">
            <Button variant="glass" className="py-5 px-10 text-lg">
              Request Portfolio
            </Button>
          </Link>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-0 left-0 h-1 bg-gold-500 w-full"
        initial={{ x: "-100%" }}
        whileInView={{ x: "0%" }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
      />
    </section>
  );
}
