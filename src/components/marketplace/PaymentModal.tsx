import React, { useState } from 'react';
import { X, ExternalLink } from 'lucide-react';
import type { MarketplaceItem } from '../../types/marketplace';
import { motion } from 'framer-motion';

interface PaymentModalProps {
  item: MarketplaceItem;
  onClose: () => void;
}

export default function PaymentModal({ item, onClose }: PaymentModalProps) {
  const [transactionId, setTransactionId] = useState('');
  const [verifying, setVerifying] = useState(false);

  const handlePayment = () => {
    const paypalUrl = `https://paypal.me/exportsaep/${item.price}?country.x=IN&locale.x=en_GB`;
    window.open(paypalUrl, '_blank');
  };

  const verifyPayment = async () => {
    setVerifying(true);
    // Here you would implement payment verification logic
    // For now, we'll just simulate it
    await new Promise(resolve => setTimeout(resolve, 1500));
    setVerifying(false);
    // If verification successful, provide download access
  };

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
        <p className="text-gray-400 mb-6">Complete your purchase to get instant access</p>

        <div className="space-y-4">
          <button
            onClick={handlePayment}
            className="w-full bg-violet-600 hover:bg-violet-700 text-white py-3 rounded-lg flex items-center justify-center space-x-2"
          >
            <span>Pay ₹{item.price} with PayPal</span>
            <ExternalLink className="w-5 h-5" />
          </button>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-700"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-gray-900 text-gray-400">After payment</span>
            </div>
          </div>

          <div className="space-y-2">
            <input
              type="text"
              value={transactionId}
              onChange={(e) => setTransactionId(e.target.value)}
              placeholder="Enter PayPal Transaction ID"
              className="w-full px-4 py-2 bg-black/50 border border-violet-500/20 rounded-lg text-white"
            />
            <button
              onClick={verifyPayment}
              disabled={!transactionId || verifying}
              className="w-full bg-violet-600/50 hover:bg-violet-700 disabled:opacity-50 text-white py-2 rounded-lg"
            >
              {verifying ? 'Verifying...' : 'Verify Payment'}
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}