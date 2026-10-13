import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, Users, TrendingUp } from 'lucide-react';

const MILESTONES_DATA = [
  {
    year: "2015",
    title: "The Inception",
    description: "Raajika Properties was founded in Dubai with a vision to bridge the gap for elite Indian investors."
  },
  {
    year: "2018",
    title: "$500M Milestone",
    description: "Successfully advised on over half a billion dollars in residential acquisitions across Palm Jumeirah."
  },
  {
    year: "2021",
    title: "Institutional Expansion",
    description: "Opened our dedicated DIFC advisory office catering to ultra-high-net-worth family offices."
  },
  {
    year: "2024",
    title: "The Future of Luxury",
    description: "Leading the charge in sustainable and tech-integrated luxury real estate investments."
  }
];

function ValueCard({ icon, title, desc }) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="text-gold-500 mb-6 p-4 bg-white/5 rounded-full">
        {icon}
      </div>
      <h4 className="text-white text-lg font-medium mb-2 uppercase tracking-widest">
        {title}
      </h4>
      <p className="text-white/40 text-sm font-light">
        {desc}
      </p>
    </div>
  );
}

export default function About() {
  return (
    <div className="min-h-screen bg-luxury-990 pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <span className="text-gold-500 tracking-[0.4em] text-xs uppercase font-semibold mb-4 block">
              Our Heritage
            </span>
            <h1 className="font-serif text-5xl md:text-7xl text-white mb-8 leading-tight">
              A Legacy Of <br />
              <span className="text-gold-500 italic">Unrivaled Trust.</span>
            </h1>
            <p className="text-white/60 text-lg font-light leading-relaxed mb-6">
              Founded on the principles of discretion, excellence, and profound market insight, Raajika Properties has emerged as the premier advisory for the Indian elite seeking a foothold in Dubai's dynamic landscape.
            </p>
            <p className="text-white/60 text-lg font-light leading-relaxed">
              We don't just sell properties; we secure legacies. Our deep-rooted connections with Dubai's master developers ensure our clients receive first-mover advantage and access to off-market inventory.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="relative h-[600px]"
          >
            <img
              src="/images/burj-heritage.png"
              className="w-full h-full object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-1000"
              alt="Burj Khalifa Legacy"
            />
            <div className="absolute -bottom-10 -left-10 bg-gold-500 p-12 hidden md:block">
              <span className="text-luxury-990 text-6xl font-serif block mb-2">
                10+
              </span>
              <span className="text-luxury-990 text-xs tracking-widest uppercase font-bold">
                Years of Excellence
              </span>
            </div>
          </motion.div>
        </div>

        {/* Founder Section */}
        <div className="bg-white/5 border border-white/10 p-12 md:p-24 rounded-sm mb-32 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/10 blur-[100px] -z-10" />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-center">
            <div className="lg:col-span-1">
              <img
                src="/images/founder.png"
                className="w-full aspect-[4/5] object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-1000"
                alt="Founder Ravi Kumar Manda"
              />
            </div>
            <div className="lg:col-span-2">
              <span className="text-gold-500 tracking-[0.4em] text-xs uppercase font-semibold mb-4 block">
                About Founder
              </span>
              <h2 className="text-3xl md:text-5xl font-serif text-white mb-6">
                Ravi Kumar Manda
              </h2>
              <p className="text-gold-500 text-sm font-medium mb-8 uppercase tracking-[0.2em] leading-relaxed">
                Global NRI Business Strategist | Entertainment Visionary | Investment Network Specialist
              </p>
              <div className="space-y-6 text-white/60 text-lg font-light leading-relaxed">
                <p>
                  Founder & Managing Director of RaviMelodies Pvt Ltd with 14+ years of experience in entertainment, celebrity events, international networking, and business strategy.
                </p>
                <p>
                  RKM has built strong relationships with Indian celebrities, global business leaders, and 2 Lakh+ NRI connections worldwide, creating opportunities across real estate, media, branding, investments, and international business collaborations.
                </p>
                <p>
                  His expertise in global networking and investor relations makes him a valuable force in connecting premium Dubai real estate opportunities with Indian and NRI investors worldwide.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Journey / Milestones */}
        <div className="mb-32">
          <div className="text-center mb-20">
            <span className="text-gold-500 tracking-[0.4em] text-xs uppercase font-semibold mb-4 block">
              Our Journey
            </span>
            <h2 className="font-serif text-4xl md:text-6xl text-white">
              Milestones Of Success
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {MILESTONES_DATA.map((milestone, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white/5 p-8 border border-white/5 hover:border-gold-500/30 transition-all group"
              >
                <span className="text-gold-500 text-4xl font-serif mb-6 block group-hover:scale-110 transition-transform">
                  {milestone.year}
                </span>
                <h3 className="text-white text-xl font-medium mb-4">
                  {milestone.title}
                </h3>
                <p className="text-white/40 text-sm font-light leading-relaxed">
                  {milestone.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <ValueCard
            icon={<Award size={32} />}
            title="Market Leaders"
            desc="Ranked Top 5 for Indian investments in UAE."
          />
          <ValueCard
            icon={<ShieldCheck size={32} />}
            title="Full Transparency"
            desc="Direct developer pricing with zero commissions."
          />
          <ValueCard
            icon={<Users size={32} />}
            title="Elite Network"
            desc="Access to private pre-launches and VIP events."
          />
          <ValueCard
            icon={<TrendingUp size={32} />}
            title="High ROI Focus"
            desc="Strategic advice focused on capital growth."
          />
        </div>
      </div>
    </div>
  );
}
