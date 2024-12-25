import React, { useState, useCallback } from 'react';
import { Play, X } from 'lucide-react';
import type { PortfolioItem } from '../types/portfolio';
import { motion, AnimatePresence } from 'framer-motion';

interface PortfolioCardProps {
  item: PortfolioItem;
}

export default function PortfolioCard({ item }: PortfolioCardProps) {
  const [showModal, setShowModal] = useState(false);

  const handleClick = useCallback(() => {
    setShowModal(true);
  }, []);

  return (
    <>
      <motion.div 
        className="group relative overflow-hidden rounded-lg cursor-pointer will-change-transform"
        onClick={handleClick}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
      >
        <img 
          src={item.thumbnail}
          alt={item.title}
          className="w-full h-64 object-cover transition-transform group-hover:scale-110"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <div className="text-center">
            <Play className="w-12 h-12 mx-auto mb-4 text-violet-500" />
            <h3 className="text-xl font-bold text-white">{item.title}</h3>
            <p className="text-gray-300">{item.category}</p>
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {showModal && (
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
                className="absolute -top-12 right-0 text-white hover:text-violet-500 transition-colors"
                onClick={() => setShowModal(false)}
              >
                <X className="w-8 h-8" />
              </button>
              
              <div className="bg-black rounded-lg overflow-hidden">
                <video 
                  className="w-full aspect-video"
                  controls
                  playsInline
                  src={item.videoUrl}
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}