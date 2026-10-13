import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const LOCATIONS_DATA = [
  { top: "40%", left: "30%", name: "Palm Jumeirah", value: "+12.5% YoY" },
  { top: "60%", left: "55%", name: "Downtown Dubai", value: "+15.2% YoY" },
  { top: "30%", left: "70%", name: "Emirates Hills", value: "+10.1% YoY" },
  { top: "80%", left: "40%", name: "Dubai Marina", value: "+14.8% YoY" }
];

export default function InteractiveMap() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative h-[120vh] bg-luxury-990 overflow-hidden flex items-center justify-center"
    >
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-luxury-990 via-transparent to-luxury-990 pointer-events-none" />
      <div className="absolute inset-0 z-10 bg-luxury-990/60 mix-blend-multiply pointer-events-none" />

      <motion.div
        style={{ scale, opacity }}
        className="relative w-[120vw] h-[120vh] max-w-[2000px] max-h-[1200px]"
      >
        <img
          src="https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?q=80&w=2500&auto=format&fit=crop"
          alt="Dubai Abstract Map"
          className="w-full h-full object-cover grayscale opacity-40 brightness-75 contrast-125"
        />

        {LOCATIONS_DATA.map((loc, idx) => (
          <div
            key={idx}
            className="absolute z-20 group"
            style={{ top: loc.top, left: loc.left }}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gold-500/20 rounded-full animate-ping opacity-75" />
              <div className="relative w-4 h-4 bg-gold-400 rounded-full shadow-[0_0_15px_rgba(212,175,55,1)]" />

              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-48 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="bg-luxury-950/90 backdrop-blur-md border border-gold-500/30 p-4 rounded-sm text-center transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h4 className="text-white font-serif text-lg mb-1">{loc.name}</h4>
                  <div className="text-gold-500 text-sm font-medium tracking-wide">
                    {loc.value}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </motion.div>

      <div className="absolute z-30 bottom-20 left-6 md:left-24 max-w-lg">
        <span className="text-gold-500 tracking-[0.3em] text-xs md:text-sm uppercase font-semibold mb-4 block">
          Strategic Hotspots
        </span>
        <h2 className="font-serif text-4xl md:text-6xl text-white mb-6 leading-tight">
          Map Your <br /> Investment.
        </h2>
        <p className="text-white/60 text-lg font-light leading-relaxed">
          Explore prime real estate zones offering the highest yields and capital appreciation exclusively curated for your portfolio.
        </p>
      </div>
    </section>
  );
}
