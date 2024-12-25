import React from 'react';
import { pricingPlans } from '../config/pricingConfig';
import PricingCard from './pricing/PricingCard';
import FadeInView from './animations/FadeInView';

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <FadeInView>
          <h2 className="text-4xl font-bold text-center mb-12 text-white">
            Pricing Plans
          </h2>
        </FadeInView>
        
        <div className="grid md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <FadeInView key={plan.id} delay={index * 0.1}>
              <PricingCard plan={plan} />
            </FadeInView>
          ))}
        </div>
      </div>
    </section>
  );
}