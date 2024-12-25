import React from 'react';
import Header from '../components/Header';
import Portfolio from '../components/Portfolio';
import { motion } from 'framer-motion';

export default function PortfolioPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-black"
    >
      <Header />
      <div className="pt-24">
        <Portfolio />
      </div>
    </motion.div>
  );
}