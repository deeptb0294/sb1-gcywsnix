import React, { useState } from 'react';
import { X } from 'lucide-react';
import type { MarketplaceItem } from '../../types/marketplace';
import { motion } from 'framer-motion';
import { useCurrency } from '../../contexts/CurrencyContext';
import { coupons } from '../../config/couponConfig';
import PriceAdjuster from './PriceAdjuster';

interface CouponModalProps {
  item: MarketplaceItem;
  onClose: () => void;
}

export default function CouponModal({ item, onClose }: CouponModalProps) {
  const [couponCode, setCouponCode] = useState('');
  const { currency, formatPrice } = useCurrency();
  const [adjustedPrice, setAdjustedPrice] = useState(item.price);
  
  const handlePayment = () => {
    const finalPrice = applyCoupon(adjustedPrice, couponCode);
    const paypalUrl = `https://paypal.me/exportsaep/${finalPrice}?country.x=IN&locale.x=en_GB`;
    window.open(paypalUrl, '_blank');
    onClose();
  };

  const applyCoupon = (price: number, code: string): number => {
    const coupon = coupons[code.toUpperCase()];
    return coupon ? price * (1 - coupon.discount) : price;
  };

  const activeCoupon = coupons[couponCode.toUpperCase()];
  const finalPrice = applyCoupon(adjustedPrice, couponCode);

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="relative bg-gray-900 rounded-lg max-w-md w-full p-6 border border-violet-500/20"
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          <X className="w-6 h-6" />
        </button>

        <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
        
        <div className="space-y-6">
          <PriceAdjuster
            initialPrice={item.price}
            onPriceChange={setAdjustedPrice}
          />

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300">
              Coupon Code
            </label>
            <input
              type="text"
              value={couponCode}
              onChange={(e) => setCouponCode(e.target.value.toUpperCase())}
              placeholder="Enter coupon code"
              className="w-full px-4 py-2 bg-black/50 border border-violet-500/20 rounded-lg text-white"
            />
            {activeCoupon && (
              <p className="text-sm text-violet-400">
                {activeCoupon.description} ({activeCoupon.discount * 100}% off)
              </p>
            )}
          </div>

          <div className="space-y-1 text-sm">
            <div className="flex justify-between text-gray-400">
              <span>Original Price:</span>
              <span>{formatPrice(adjustedPrice)}</span>
            </div>
            {activeCoupon && (
              <div className="flex justify-between text-violet-400">
                <span>Discount:</span>
                <span>-{activeCoupon.discount * 100}%</span>
              </div>
            )}
            <div className="flex justify-between text-lg font-bold text-white pt-2 border-t border-gray-700">
              <span>Final Price:</span>
              <span>{formatPrice(finalPrice)}</span>
            </div>
          </div>

          <button
            onClick={handlePayment}
            className="w-full bg-violet-600 hover:bg-violet-700 text-white py-3 rounded-lg flex items-center justify-center space-x-2"
          >
            <span>Proceed to Payment</span>
          </button>
        </div>
      </motion.div>
    </div>
  );
}