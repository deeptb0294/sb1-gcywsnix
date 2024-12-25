import React from 'react';
import Header from '../components/Header';
import Pricing from '../components/Pricing';
import { motion } from 'framer-motion';

export default function PricingPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-black"
    >
      <Header />
      <div className="pt-24">
        <Pricing />
      </div>
    </motion.div>
  );
}