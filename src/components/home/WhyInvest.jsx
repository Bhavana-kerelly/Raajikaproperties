import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const WHY_INVEST_STATS = [
  {
    value: "0%",
    label: "Capital Gains Tax",
    description: "Maximize your returns with zero tax on property appreciation."
  },
  {
    value: "8-10%",
    label: "High Annual ROI",
    description: "One of the highest rental yields compared to London, NY, or Mumbai."
  },
  {
    value: "10 Yrs",
    label: "Golden Visa",
    description: "Secure your family's future with long-term residency."
  },
  {
    value: "No. 1",
    label: "Safest City",
    description: "Unmatched security and stable governance for your investment."
  }
];

export default function WhyInvest() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <section ref={containerRef} className="relative h-[400vh] bg-luxury-950">
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        <div className="absolute top-24 md:top-32 left-6 md:left-24 z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="font-serif text-4xl md:text-6xl lg:text-7xl text-white"
          >
            Why Indians Invest In <br />{" "}
            <span className="text-gold-500 italic">Dubai.</span>
          </motion.h2>
        </div>

        <motion.div
          style={{ x }}
          className="flex gap-8 md:gap-16 pl-6 md:pl-24 pr-[50vw] mt-32 md:mt-48 w-max"
        >
          {WHY_INVEST_STATS.map((stat, index) => (
            <div key={index} className="w-[300px] md:w-[450px] flex-shrink-0 group relative p-1">
              <div className="h-full bg-white/5 backdrop-blur-md border border-white/10 p-8 md:p-12 transition-colors duration-500 group-hover:bg-white/10 group-hover:border-gold-500/50 flex flex-col justify-end min-h-[400px]">
                <div className="text-gold-500 text-6xl md:text-8xl font-serif font-light mb-6 transition-transform duration-500 group-hover:-translate-y-4">
                  {stat.value}
                </div>
                <h3 className="text-2xl md:text-3xl font-medium text-white mb-4">
                  {stat.label}
                </h3>
                <p className="text-white/60 text-lg">
                  {stat.description}
                </p>
                <div className="absolute top-8 right-8 text-white/10 text-9xl font-sans font-bold leading-none select-none">
                  0{index + 1}
                </div>
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gold-500 transition-all duration-700 group-hover:w-full" />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
