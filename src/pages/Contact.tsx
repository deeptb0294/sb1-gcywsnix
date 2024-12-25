import React from 'react';
import Header from '../components/Header';
import Contact from '../components/Contact';
import { motion } from 'framer-motion';

export default function ContactPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-black"
    >
      <Header />
      <div className="pt-24">
        <Contact />
      </div>
    </motion.div>
  );
}