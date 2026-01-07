import React from 'react';
import Hero from '../components/Hero';
import LogoTicker from '../components/LogoTicker';
import Features from '../components/Features';
import BentoGrid from '../components/BentoGrid';

import Pricing from '../components/Pricing';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Hero />
      <LogoTicker />
      <Features />
      <BentoGrid />
      {/* <Pricing /> */}
     
    </>
  );
};

export default Home;