import React from 'react';
import { useNavigate } from 'react-router-dom';
import { portfolioCategories } from '../config/portfolioConfig';
import { motion } from 'framer-motion';

export default function Portfolio() {
  const navigate = useNavigate();

  return (
    <section id="portfolio" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12"
        >
          My Creative Works
        </motion.h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {portfolioCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1 }}
              className="cursor-pointer transform hover:scale-105 duration-300"
              onClick={() => navigate(`/portfolio/${category.id}`)}
            >
              <div className="relative overflow-hidden rounded-lg aspect-video will-change-transform">
                <img 
                  src={category.thumbnail}
                  alt={category.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                  <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}