import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, ShoppingCart } from 'lucide-react';
import type { MarketplaceItem } from '../../types/marketplace';
import PreviewModal from './PreviewModal';
import CouponModal from './CouponModal';
import { useCurrency } from '../../contexts/CurrencyContext';

interface MarketplaceItemProps {
  item: MarketplaceItem;
}

export default function MarketplaceItem({ item }: MarketplaceItemProps) {
  const [showPreview, setShowPreview] = useState(false);
  const [showCoupon, setShowCoupon] = useState(false);
  const { formatPrice, currency } = useCurrency();

  const handlePurchase = () => {
    setShowCoupon(true);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-gray-900 rounded-lg overflow-hidden"
      >
        <div className="relative aspect-video">
          <img
            src={item.thumbnail}
            alt={item.title}
            className="w-full h-full object-cover"
            loading="lazy"
            decoding="async"
          />
          <button
            onClick={() => setShowPreview(true)}
            className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 hover:opacity-100 transition-opacity"
          >
            <Play className="w-12 h-12 text-violet-500" />
          </button>
        </div>
        
        <div className="p-4">
          <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
          <p className="text-gray-400 mb-4">{item.description}</p>
          
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-violet-500">{formatPrice(item.price)}</span>
            <button
              onClick={handlePurchase}
              className="flex items-center space-x-2 bg-violet-600 hover:bg-violet-700 text-white px-4 py-2 rounded-lg transition-colors"
            >
              <ShoppingCart className="w-5 h-5" />
              <span>Buy Now</span>
            </button>
          </div>
        </div>
      </motion.div>

      {showPreview && (
        <PreviewModal
          item={item}
          onClose={() => setShowPreview(false)}
        />
      )}

      {showCoupon && (
        <CouponModal
          item={item}
          onClose={() => setShowCoupon(false)}
          currency={currency}
        />
      )}
    </>
  );
}