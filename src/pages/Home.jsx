import React from 'react';
import Hero from '../components/home/Hero';
import WhyInvest from '../components/home/WhyInvest';
import FeaturedProperties from '../components/home/FeaturedProperties';
import InteractiveMap from '../components/home/InteractiveMap';
import CuratedPortfolio from '../components/home/CuratedPortfolio';
import SignatureLiving from '../components/home/SignatureLiving';
import CallToAction from '../components/home/CallToAction';

export default function Home() {
  return (
    <>
      <Hero />
      <WhyInvest />
      <FeaturedProperties />
      <InteractiveMap />
      <CuratedPortfolio />
      <SignatureLiving />
      <CallToAction />
    </>
  );
}
