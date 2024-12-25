import React from 'react';
import Timeline from './Timeline';
import AnimatedSection from './AnimatedSection';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-black text-white pt-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(139,92,246,0.15)_0%,_rgba(0,0,0,1)_100%)]" />
      <div className="container mx-auto px-4 py-16 relative">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <AnimatedSection>
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Craft Your <span className="text-violet-500">Vision</span>
              </h1>
              <p className="text-xl text-gray-400">
                Transform your ideas into stunning visual experiences with professional After Effects expertise.
              </p>
              <div className="space-x-4">
                <a href="#portfolio" className="bg-violet-600 hover:bg-violet-700 text-white px-6 py-3 rounded-lg inline-block transition-colors">
                  View My Work
                </a>
                <a href="#contact" className="border border-violet-500 text-violet-500 hover:bg-violet-600 hover:text-white px-6 py-3 rounded-lg inline-block transition-all">
                  Get in Touch
                </a>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="space-y-8">
              <Timeline />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}