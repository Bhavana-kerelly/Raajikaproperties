import React from 'react';
import { motion } from 'framer-motion';
import Button from '../Button';

const FEATURED_PROPERTIES = [
  {
    id: 1,
    title: "Palm Jumeirah Signature Villas",
    stats: ["6 Beds", "12,000 Sq.Ft", "Private Beach"],
    image: "/images/palm-villa.png"
  },
  {
    id: 2,
    title: "Downtown Burj Penthouses",
    stats: ["4 Beds", "8,500 Sq.Ft", "Skyline Views"],
    image: "/images/burj-penthouse.png"
  },
  {
    id: 3,
    title: "Emirates Hills Estates",
    stats: ["8 Beds", "25,000 Sq.Ft", "Golf Course View"],
    image: "/images/emirates-mansion.png"
  }
];

function FeaturedPropertyCard({ property, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 w-full h-full">
        <motion.div
          className="absolute inset-0 bg-black/40 z-10"
          whileHover={{ backgroundColor: "rgba(0,0,0,0.2)" }}
          transition={{ duration: 0.5 }}
        />
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-20 w-full max-w-7xl px-6 md:px-12 flex flex-col md:flex-row justify-between items-end md:items-center">
        <div className="text-left w-full md:w-1/2">
          <div className="flex space-x-6 mb-6">
            {property.stats.map((stat, i) => (
              <span
                key={i}
                className="text-xs uppercase tracking-widest text-gold-500 font-medium"
              >
                {stat}
              </span>
            ))}
          </div>
          <h3 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white leading-tight mb-8">
            {property.title}
          </h3>
          <Button variant="glass">Request Details</Button>
        </div>
      </div>
    </motion.div>
  );
}

export default function FeaturedProperties() {
  return (
    <section id="properties" className="bg-luxury-990 py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-20 text-center">
        <h2 className="font-serif text-4xl md:text-6xl text-white mb-6">
          Exclusive Portfolio
        </h2>
        <p className="text-white/60 text-lg max-w-2xl mx-auto">
          Discover a curated selection of Dubai's most prestigious addresses, available only to our elite clientele.
        </p>
      </div>

      <div className="flex flex-col">
        {FEATURED_PROPERTIES.map((prop, idx) => (
          <FeaturedPropertyCard key={prop.id} property={prop} index={idx} />
        ))}
      </div>

      <div className="w-full flex justify-center mt-32">
        <Button variant="outline" className="w-[300px]">
          View All Properties
        </Button>
      </div>
    </section>
  );
}
