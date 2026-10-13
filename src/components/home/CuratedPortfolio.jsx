import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const CURATED_PORTFOLIO_ITEMS = [
  {
    title: "Waterfront Luxury Villas",
    location: "Palm Jumeirah",
    image: "/images/palm-villa.png",
    caption: "The ultimate address in the Arabian Gulf."
  },
  {
    title: "Dubai Marina Skyline",
    location: "Marina District",
    image: "/images/marina-sunset.jpg",
    caption: "High-yield investment in the heart of action."
  },
  {
    title: "Desert Luxury Resorts",
    location: "Al Marmoom",
    image: "/images/emirates-mansion.png",
    caption: "Modernity meets timeless desert tranquility."
  },
  {
    title: "Yacht Lifestyle",
    location: "Port de La Mer",
    image: "/images/luxury-balcony.jpg",
    caption: "Seamless integration of sea and city."
  },
  {
    title: "Golden Sunset Architecture",
    location: "Downtown Dubai",
    image: "/images/downtown-apt.png",
    caption: "World-class design bathed in eternal light."
  }
];

function PortfolioCard({ item, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 50 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="relative flex-shrink-0 w-[300px] md:w-[450px] aspect-[4/5] overflow-hidden group cursor-pointer"
    >
      <div className="absolute inset-0 z-0">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-luxury-990 via-luxury-990/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
      </div>

      <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12 z-10">
        <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          <span className="text-gold-500 text-xs tracking-widest uppercase mb-2 block">
            {item.location}
          </span>
          <h3 className="text-2xl md:text-3xl font-serif text-white mb-4">
            {item.title}
          </h3>
          <p className="text-white/60 text-sm md:text-base font-light opacity-0 group-hover:opacity-100 transition-opacity duration-700">
            {item.caption}
          </p>
        </div>
      </div>

      <div className="absolute inset-0 border border-white/5 group-hover:border-gold-500/30 transition-colors duration-500" />
      <div className="absolute bottom-0 left-0 h-[2px] bg-gold-500 w-0 group-hover:w-full transition-all duration-700" />
    </motion.div>
  );
}

export default function CuratedPortfolio() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]);

  return (
    <section ref={containerRef} className="relative h-[300vh] bg-luxury-990 overflow-hidden">
      <div className="sticky top-0 h-screen flex flex-col justify-center">
        <div className="px-6 md:px-24 mb-12">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-gold-500 tracking-[0.4em] text-xs uppercase font-semibold mb-4 block"
          >
            Curated Excellence
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="font-serif text-4xl md:text-6xl text-white max-w-2xl"
          >
            Trusted By The World's <br />
            <span className="text-gold-500 italic">Elite Investors.</span>
          </motion.h2>
        </div>

        <motion.div style={{ x }} className="flex gap-8 px-6 md:px-24">
          {CURATED_PORTFOLIO_ITEMS.map((item, index) => (
            <PortfolioCard key={index} item={item} index={index} />
          ))}
        </motion.div>

        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-gold-500/10 rounded-full blur-[120px] pointer-events-none" />
      </div>
    </section>
  );
}
