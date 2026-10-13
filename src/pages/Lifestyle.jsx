import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '../components/Button';

const LIFESTYLE_ITEMS = [
  {
    title: "The Blue Ocean",
    desc: "Private beaches and world-class yacht clubs at your doorstep.",
    image: "/images/marina-sunset.jpg"
  },
  {
    title: "Culinary Masterpieces",
    desc: "Dine at Michelin-starred establishments with world-renowned chefs.",
    image: "/images/downtown-apt.png"
  },
  {
    title: "Aviation & Supercars",
    desc: "Seamless travel with private jet terminals and open desert highways.",
    image: "/images/palm-villa.png"
  },
  {
    title: "Unrivaled Architecture",
    desc: "Live surrounded by modern wonders that challenge engineering.",
    image: "/images/burj-penthouse.png"
  }
];

function LifestyleCard({ title, desc }) {
  return (
    <div className="text-center p-12 bg-white/5 border border-white/5 hover:border-gold-500/30 transition-all">
      <h3 className="text-white text-2xl font-serif mb-4">{title}</h3>
      <p className="text-white/40 text-sm font-light leading-relaxed">{desc}</p>
    </div>
  );
}

export default function Lifestyle() {
  return (
    <div className="bg-luxury-990 pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-32 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <span className="text-gold-500 tracking-[0.4em] text-xs uppercase font-semibold mb-4 block">
              The Experience
            </span>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white mb-8 leading-tight">
              Live Beyond <br />
              <span className="text-gold-500 italic">Expectations.</span>
            </h1>
            <p className="text-white/60 text-lg md:text-xl font-light leading-relaxed mb-10 max-w-lg">
              Dubai is not just a destination; it's a statement of success. A city where every sunrise brings a new perspective on luxury and every sunset celebrates a lifestyle without limits.
            </p>
            <Link to="/talk">
              <Button variant="primary">Experience The Lifestyle</Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="relative"
          >
            <div className="aspect-[3/4] overflow-hidden rounded-sm">
              <img
                src="/images/luxury-balcony.jpg"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                alt="Dubai Lifestyle"
              />
            </div>
            <div className="absolute top-1/2 -right-12 -translate-y-1/2 hidden lg:block">
              <div className="bg-gold-500 p-12 text-luxury-990">
                <span className="text-4xl font-serif block italic">
                  "Unmatched"
                </span>
                <span className="text-xs tracking-[0.3em] uppercase font-bold">
                  Standard of Living
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-32">
          {LIFESTYLE_ITEMS.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative aspect-video overflow-hidden rounded-sm"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 brightness-50 group-hover:brightness-75"
              />
              <div className="absolute inset-0 p-10 flex flex-col justify-end">
                <h3 className="text-white text-3xl font-serif mb-4 group-hover:text-gold-500 transition-colors">
                  {item.title}
                </h3>
                <p className="text-white/60 text-lg font-light max-w-sm group-hover:text-white transition-colors">
                  {item.desc}
                </p>
              </div>
              <div className="absolute top-0 right-0 p-10 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-12 h-12 border border-gold-500/50 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-gold-500 rounded-full animate-ping" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto mb-32"
        >
          <h2 className="font-serif text-3xl md:text-5xl text-white leading-relaxed italic">
            "Dubai is the only city in the world where you can ski in the morning, lounge on a beach in the afternoon, and dine in the sky by night."
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <LifestyleCard
            title="Wellness & Spa"
            desc="World-class rejuvenation centers inspired by ancient traditions and modern science."
          />
          <LifestyleCard
            title="Golf & Leisure"
            desc="PGA-standard courses designed by legends, overlooking iconic skylines."
          />
          <LifestyleCard
            title="Fine Dining"
            desc="A melting pot of global flavors with the highest concentration of celebrity chefs."
          />
        </div>
      </div>
    </div>
  );
}
