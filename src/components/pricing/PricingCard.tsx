import React from 'react';
import { Check } from 'lucide-react';
import type { PricingPlan } from '../../types/pricing';
import { useCurrency } from '../../contexts/CurrencyContext';
import { siteConfig } from '../../config/siteConfig';

interface PricingCardProps {
  plan: PricingPlan;
}

export default function PricingCard({ plan }: PricingCardProps) {
  const { formatPrice } = useCurrency();
  
  const handleGetStarted = () => {
    const message = encodeURIComponent(`Hi, I'm interested in the ${plan.name} plan (${formatPrice(plan.price)})`);
    window.open(`https://wa.me/${siteConfig.contact.whatsapp}?text=${message}`, '_blank');
  };

  return (
    <div className="bg-black/50 backdrop-blur-sm rounded-lg shadow-xl p-8 hover:scale-105 transition-transform border border-violet-500/20">
      <h3 className="text-2xl font-bold text-center mb-4 text-white">{plan.name}</h3>
      <div className="text-center mb-6">
        <span className="text-4xl font-bold text-violet-500">{formatPrice(plan.price)}</span>
        <span className="text-gray-400">/project</span>
      </div>
      <ul className="space-y-4 mb-8">
        {plan.features.map((feature, idx) => (
          <li key={idx} className="flex items-center text-gray-300">
            <Check className="w-5 h-5 text-violet-500 mr-2" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <button 
        className="w-full bg-violet-600 hover:bg-violet-700 text-white py-3 rounded-lg transition-colors"
        onClick={handleGetStarted}
      >
        Get Started
      </button>
    </div>
  );
}