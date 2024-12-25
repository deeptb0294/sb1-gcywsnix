import React from 'react';
import { motion } from 'framer-motion';
import MarketplaceItem from '../components/marketplace/MarketplaceItem';
import { marketplaceItems } from '../config/marketplaceConfig';
import Header from '../components/Header';

export default function MarketplacePage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-black"
    >
      <Header />
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-white mb-12 text-center"
          >
            Templates & Presets
          </motion.h1>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {marketplaceItems.map((item, index) => (
              <MarketplaceItem key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}