import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { ReactLenis } from 'lenis/react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PageTransition from './components/PageTransition';

import Home from './pages/Home';
import Invest from './pages/Invest';
import Properties from './pages/Properties';
import Lifestyle from './pages/Lifestyle';
import About from './pages/About';
import Talk from './pages/Talk';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <ReactLenis root options={{ smoothWheel: true, lerp: 0.05 }}>
        <main className="bg-luxury-990 text-luxury-100 min-h-screen selection:bg-gold-500 selection:text-black font-sans">
          <Navbar />
          <PageTransition>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/invest" element={<Invest />} />
              <Route path="/properties" element={<Properties />} />
              <Route path="/lifestyle" element={<Lifestyle />} />
              <Route path="/about" element={<About />} />
              <Route path="/talk" element={<Talk />} />
            </Routes>
          </PageTransition>
          <Footer />
        </main>
      </ReactLenis>
    </BrowserRouter>
  );
}
