import React from 'react';
import { X } from 'lucide-react';
import type { MarketplaceItem } from '../../types/marketplace';
import { motion, AnimatePresence } from 'framer-motion';

interface PreviewModalProps {
  item: MarketplaceItem;
  onClose: () => void;
}

export default function PreviewModal({ item, onClose }: PreviewModalProps) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          className="relative w-full max-w-4xl"
        >
          <button 
            onClick={onClose}
            className="absolute -top-12 right-0 text-white hover:text-violet-500 transition-colors"
          >
            <X className="w-8 h-8" />
          </button>
          
          <div className="bg-black rounded-lg overflow-hidden">
            <video 
              className="w-full aspect-video"
              controls
              playsInline
              src={item.previewUrl}
            />
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}