import React from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import SpinningGlobe from '../3d/SpinningGlobe';

export default function Hero() {
  return (
    <section className="h-screen relative">
      <div className="absolute inset-0">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <SpinningGlobe />
          <OrbitControls enableZoom={false} />
        </Canvas>
      </div>
      
      <div className="relative z-10 h-full flex items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-white"
        >
          <h1 className="text-6xl font-bold mb-6">Creative Portfolio</h1>
          <p className="text-xl text-gray-300 mb-8">Bringing ideas to life through 3D visualization</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-violet-600 px-8 py-3 rounded-full text-lg font-medium hover:bg-violet-700 transition-colors"
          >
            Explore Work
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}