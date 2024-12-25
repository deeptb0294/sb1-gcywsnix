import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import Header from '../components/Header';
import { portfolioCategories } from '../config/portfolioConfig';
import { portfolioItems } from '../config/portfolioItems';
import PortfolioCard from '../components/PortfolioCard';
import FadeInView from '../components/animations/FadeInView';

export default function PortfolioCategory() {
  const { category } = useParams();
  const categoryData = portfolioCategories.find(c => c.id === category);
  const videos = portfolioItems[category || ''] || [];

  if (!categoryData) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen bg-black"
    >
      <Header />
      <div className="pt-24 pb-20 container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <Link 
            to="/"
            className="inline-flex items-center text-violet-500 hover:text-violet-400"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
        </div>

        <FadeInView>
          <h1 className="text-4xl font-bold text-white mb-8">
            {categoryData.title}
          </h1>
        </FadeInView>

        <div className="grid md:grid-cols-2 gap-8">
          {videos.map((video, index) => (
            <FadeInView key={video.id} delay={index * 0.1}>
              <PortfolioCard item={video} />
            </FadeInView>
          ))}
        </div>
      </div>
    </motion.div>
  );
}