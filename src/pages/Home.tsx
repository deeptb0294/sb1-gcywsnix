import React from 'react';
import Header from '../components/Header';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import Portfolio from '../components/Portfolio';
import Marketplace from '../components/Marketplace';
import Pricing from '../components/Pricing';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <div className="bg-black">
      <Header />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <Hero />
        <Portfolio />
        <Marketplace />
        <Pricing />
        <Contact />
      </motion.div>
    </div>
  );
}