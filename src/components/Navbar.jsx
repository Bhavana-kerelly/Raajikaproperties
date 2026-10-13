import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

function NavLink({ to, children }) {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`transition-colors duration-300 relative group ${
        isActive ? "text-gold-500" : "text-white/70 hover:text-white"
      }`}
    >
      {children}
      <span
        className={`absolute -bottom-1 left-0 h-[1px] bg-gold-500 transition-all duration-300 ${
          isActive ? "w-full" : "w-0 group-hover:w-full"
        }`}
      />
    </Link>
  );
}

function MobileNavLink({ to, children, onClick }) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className="text-white hover:text-gold-500 transition-colors duration-300"
    >
      {children}
    </Link>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
        scrolled
          ? "bg-luxury-990/90 backdrop-blur-2xl border-white/5 py-6"
          : "bg-transparent border-transparent py-12"
      }`}
    >
      <div className="max-w-[1600px] mx-auto px-10 md:px-20 flex justify-between items-center relative">
        {/* Left Navigation Links */}
        <div className="hidden lg:flex items-center space-x-16 text-sm tracking-[0.3em] uppercase font-semibold flex-1 justify-end pr-32">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/invest">Invest</NavLink>
          <NavLink to="/properties">Properties</NavLink>
        </div>

        {/* Center Logo with shrinking scale animation */}
        <div
          className={`flex justify-center transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] absolute left-1/2 -translate-x-1/2 z-50 pointer-events-none ${
            scrolled
              ? "top-1/2 -translate-y-1/2 scale-[0.35] md:scale-[0.25]"
              : "top-0 translate-y-0 scale-[0.85] md:scale-100"
          }`}
        >
          <div className="pointer-events-auto">
            <Logo variant="hero" className="origin-top" />
          </div>
        </div>

        {/* Right Navigation Links */}
        <div className="hidden lg:flex items-center space-x-16 text-sm tracking-[0.3em] uppercase font-semibold flex-1 justify-start pl-32">
          <NavLink to="/lifestyle">Lifestyle</NavLink>
          <NavLink to="/about">About</NavLink>
          <Link
            to="/talk"
            className="text-white/70 hover:text-white transition-colors duration-300 relative group"
          >
            LET'S TALK
            <span className="absolute -bottom-1 left-0 h-[1px] bg-gold-500 transition-all duration-300 w-0 group-hover:w-full" />
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="lg:hidden flex items-center justify-between w-full">
          <div className="w-10" />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white p-2 focus:outline-none relative z-50"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 lg:hidden bg-luxury-990/98 backdrop-blur-2xl flex flex-col justify-center items-center"
          >
            <div className="flex flex-col space-y-8 text-center text-2xl tracking-[0.3em] uppercase font-light mt-20">
              <MobileNavLink to="/" onClick={() => setMobileMenuOpen(false)}>Home</MobileNavLink>
              <MobileNavLink to="/invest" onClick={() => setMobileMenuOpen(false)}>Invest</MobileNavLink>
              <MobileNavLink to="/properties" onClick={() => setMobileMenuOpen(false)}>Properties</MobileNavLink>
              <MobileNavLink to="/lifestyle" onClick={() => setMobileMenuOpen(false)}>Lifestyle</MobileNavLink>
              <MobileNavLink to="/about" onClick={() => setMobileMenuOpen(false)}>About</MobileNavLink>
              <MobileNavLink to="/talk" onClick={() => setMobileMenuOpen(false)}>Let's Talk</MobileNavLink>
            </div>
            <div className="absolute bottom-12 text-white/40 text-xs tracking-widest uppercase">
              Raajika Properties Dubai
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
