import React from 'react';
import { X } from 'lucide-react';
import { pricingPlans } from '../config/pricingConfig';
import PaymentForm from './payment/PaymentForm';

interface PaymentModalProps {
  planId: string;
  onClose: () => void;
}

export default function PaymentModal({ planId, onClose }: PaymentModalProps) {
  const plan = pricingPlans.find(p => p.id === planId);
  
  if (!plan) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="relative bg-gray-900 rounded-lg max-w-md w-full p-6 border border-violet-500/20">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          <X className="w-6 h-6" />
        </button>
        
        <h3 className="text-2xl font-bold text-white mb-4">
          {plan.name} Plan - ${plan.price}
        </h3>
        
        <PaymentForm plan={plan} onClose={onClose} />
      </div>
    </div>
  );
}