import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, MapPin, Bed, Maximize2 } from 'lucide-react';
import Button from '../components/Button';

const PROPERTIES_DATA = [
  {
    id: 1,
    title: "Palm Jumeirah Signature Villa",
    location: "Palm Jumeirah",
    price: "$12.5M",
    beds: 6,
    sqft: "12,000",
    type: "Villa",
    image: "/images/palm-villa.png"
  },
  {
    id: 2,
    title: "Burj Khalifa Penthouse",
    location: "Downtown Dubai",
    price: "$8.2M",
    beds: 4,
    sqft: "8,500",
    type: "Apartment",
    image: "/images/burj-penthouse.png"
  },
  {
    id: 3,
    title: "Emirates Hills Mansion",
    location: "Emirates Hills",
    price: "$25M",
    beds: 8,
    sqft: "22,000",
    type: "Villa",
    image: "/images/emirates-mansion.png"
  },
  {
    id: 4,
    title: "Dubai Marina Skyloft",
    location: "Dubai Marina",
    price: "$4.1M",
    beds: 3,
    sqft: "4,200",
    type: "Apartment",
    image: "/images/marina-sunset.jpg"
  },
  {
    id: 5,
    title: "Port de La Mer Residence",
    location: "Jumeirah",
    price: "$2.8M",
    beds: 2,
    sqft: "1,800",
    type: "Apartment",
    image: "/images/luxury-balcony.jpg"
  },
  {
    id: 6,
    title: "Al Barari Green Estate",
    location: "Al Barari",
    price: "$9.5M",
    beds: 5,
    sqft: "9,000",
    type: "Villa",
    image: "/images/downtown-apt.png"
  }
];

function PropertyCard({ prop }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5 }}
      className="group"
    >
      <div className="relative aspect-[4/5] overflow-hidden rounded-sm mb-6">
        <img
          src={prop.image}
          alt={prop.title}
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
        />
        <div className="absolute top-6 left-6">
          <span className="bg-luxury-990/80 backdrop-blur-md text-gold-500 px-4 py-1.5 text-[10px] uppercase tracking-widest font-bold border border-gold-500/30">
            {prop.type}
          </span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-luxury-990 via-transparent to-transparent opacity-0 group-hover:opacity-80 transition-opacity flex flex-col justify-end p-8">
          <Button variant="primary" className="w-full text-xs uppercase tracking-widest">
            Request Details
          </Button>
        </div>
      </div>

      <div>
        <div className="flex items-center text-gold-500 text-[10px] uppercase tracking-widest mb-2">
          <MapPin size={12} className="mr-2" />
          {prop.location}
        </div>
        <h3 className="text-white text-2xl font-serif mb-4 group-hover:text-gold-500 transition-colors">
          {prop.title}
        </h3>
        <div className="flex items-center space-x-6 text-white/40 text-xs">
          <div className="flex items-center">
            <Bed size={14} className="mr-2" />
            {prop.beds} Beds
          </div>
          <div className="flex items-center">
            <Maximize2 size={14} className="mr-2" />
            {prop.sqft} Sq.Ft
          </div>
          <div className="ml-auto text-white font-medium tracking-widest">
            {prop.price}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Properties() {
  const [selectedType, setSelectedType] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProperties = PROPERTIES_DATA.filter((prop) => {
    const matchesType = selectedType === "All" || prop.type === selectedType;
    const matchesSearch =
      prop.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prop.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesType && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-luxury-990 pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-20">
          <span className="text-gold-500 tracking-[0.4em] text-xs uppercase font-semibold mb-4 block">
            The Portfolio
          </span>
          <h1 className="font-serif text-5xl md:text-7xl text-white mb-8">
            Curated <br />
            <span className="text-gold-500 italic">Dubai Masterpieces.</span>
          </h1>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-16 bg-white/5 p-4 rounded-sm border border-white/10 backdrop-blur-md">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" size={18} />
            <input
              type="text"
              placeholder="Search location, project..."
              className="w-full bg-transparent border-b border-white/5 py-2 pl-12 pr-4 text-white focus:outline-none focus:border-gold-500 transition-colors"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="flex space-x-2 w-full md:w-auto overflow-x-auto hide-scrollbar">
            {["All", "Villa", "Apartment"].map((type) => (
              <button
                key={type}
                onClick={() => setSelectedType(type)}
                className={`px-8 py-2 text-[10px] uppercase tracking-widest transition-all ${
                  selectedType === type
                    ? "bg-gold-500 text-luxury-990 font-bold"
                    : "bg-white/5 text-white/60 hover:bg-white/10"
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <AnimatePresence mode="popLayout">
            {filteredProperties.map((prop) => (
              <PropertyCard key={prop.id} prop={prop} />
            ))}
          </AnimatePresence>
        </div>

        {filteredProperties.length === 0 && (
          <div className="text-center py-20">
            <p className="text-white/40 text-lg">
              No properties found matching your criteria.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
