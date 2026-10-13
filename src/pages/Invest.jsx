import React from 'react';
import { motion } from 'framer-motion';
import { Percent, TrendingUp, Globe, Shield } from 'lucide-react';
import WhyInvest from '../components/home/WhyInvest';
import InteractiveMap from '../components/home/InteractiveMap';

function InvestPerkCard({ icon, title, desc }) {
  return (
    <div className="p-10 bg-white/5 border border-white/5 hover:border-gold-500/30 transition-all group">
      <div className="text-gold-500 mb-6 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-white text-xl font-medium mb-3">{title}</h3>
      <p className="text-white/40 text-sm font-light leading-relaxed">{desc}</p>
    </div>
  );
}

function YieldBar({ label, value, color }) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center text-xs tracking-widest uppercase">
        <span className="text-white/60">{label}</span>
        <span className="text-white">{value}%</span>
      </div>
      <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${(value / 10) * 100}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className={`h-full ${color}`}
        />
      </div>
    </div>
  );
}

export default function Invest() {
  return (
    <div className="bg-luxury-990">
      <div className="pt-32 px-6 md:px-12 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-24"
        >
          <span className="text-gold-500 tracking-[0.4em] text-xs uppercase font-semibold mb-4 block">
            Wealth Creation
          </span>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white mb-8">
            The World's Safest <br />
            <span className="text-gold-500 italic">Investment Haven.</span>
          </h1>
          <p className="text-white/60 text-lg md:text-xl font-light max-w-3xl mx-auto leading-relaxed">
            Dubai offers a unique ecosystem for Indian investors: 0% tax on gains, stable currency pegged to USD, and world-class infrastructure.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
          <InvestPerkCard
            icon={<Percent size={32} />}
            title="0% Tax"
            desc="No capital gains or income tax on property investments."
          />
          <InvestPerkCard
            icon={<TrendingUp size={32} />}
            title="8-10% Yields"
            desc="Consistent high rental income compared to global cities."
          />
          <InvestPerkCard
            icon={<Globe size={32} />}
            title="Golden Visa"
            desc="Secure long-term residency for your entire family."
          />
          <InvestPerkCard
            icon={<Shield size={32} />}
            title="Regulated Market"
            desc="Protected by strict DLD (Dubai Land Dept) laws."
          />
        </div>
      </div>

      <WhyInvest />
      <InteractiveMap />

      <section className="py-32 px-6 md:px-12 bg-white/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="font-serif text-4xl md:text-6xl text-white mb-8">
                Yield Comparison
              </h2>
              <p className="text-white/60 text-lg font-light mb-12">
                Why Mumbai, London, or New York investors are shifting capital to Dubai. The numbers speak for themselves.
              </p>
              <div className="space-y-6">
                <YieldBar label="Dubai" value={9} color="bg-gold-500" />
                <YieldBar label="London" value={3.2} color="bg-white/20" />
                <YieldBar label="Mumbai" value={2.5} color="bg-white/20" />
                <YieldBar label="New York" value={3.5} color="bg-white/20" />
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?q=80&w=1200&auto=format&fit=crop"
                className="w-full rounded-sm shadow-2xl brightness-75 grayscale hover:grayscale-0 transition-all duration-1000"
                alt="Investment Analysis"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center bg-luxury-990/90 backdrop-blur-md p-8 border border-gold-500/30">
                <span className="text-gold-500 text-5xl font-serif block mb-2">3X</span>
                <span className="text-white text-xs tracking-widest uppercase">
                  Higher Returns
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
