import React from 'react';
import ContactInfo from './contact/ContactInfo';
import FadeInView from './animations/FadeInView';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <FadeInView>
          <h2 className="text-4xl font-bold text-center mb-12 text-white">
            Get in Touch
          </h2>
        </FadeInView>
        
        <FadeInView delay={0.2}>
          <div className="max-w-2xl mx-auto">
            <ContactInfo />
          </div>
        </FadeInView>
      </div>
    </section>
  );
}