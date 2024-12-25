import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { marketplaceItems } from '../config/marketplaceConfig';
import MarketplaceItem from './marketplace/MarketplaceItem';

export default function Marketplace() {
  // Only show first 3 items in homepage
  const previewItems = marketplaceItems.slice(0, 3);

  return (
    <section id="marketplace" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Templates & Presets
          </h2>
          <p className="text-gray-400">
            Professional After Effects templates and presets to enhance your workflow
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {previewItems.map((item) => (
            <MarketplaceItem key={item.id} item={item} />
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/marketplace"
            className="inline-flex items-center space-x-2 bg-violet-600 hover:bg-violet-700 text-white px-6 py-3 rounded-lg transition-colors"
          >
            <span>View All Templates & Presets</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}