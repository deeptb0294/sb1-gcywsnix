import React, { useState } from 'react';
import type { PricingPlan } from '../../config/pricingConfig';
import { siteConfig } from '../../config/siteConfig';

interface PaymentFormProps {
  plan: PricingPlan;
  onClose: () => void;
}

export default function PaymentForm({ plan, onClose }: PaymentFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    cardNumber: '',
    expiry: '',
    cvc: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the payment processing
    console.log('Processing payment for:', plan.name, 'with data:', formData);
    onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-1">
          Full Name
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 bg-black/50 border border-violet-500/20 rounded-lg text-white focus:ring-2 focus:ring-violet-500 focus:border-transparent"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-1">
          Email
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 bg-black/50 border border-violet-500/20 rounded-lg text-white focus:ring-2 focus:ring-violet-500 focus:border-transparent"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-1">
          Card Number
        </label>
        <input
          type="text"
          name="cardNumber"
          value={formData.cardNumber}
          onChange={handleChange}
          required
          pattern="[0-9]{16}"
          maxLength={16}
          placeholder="1234 5678 9012 3456"
          className="w-full px-4 py-2 bg-black/50 border border-violet-500/20 rounded-lg text-white focus:ring-2 focus:ring-violet-500 focus:border-transparent"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">
            Expiry Date
          </label>
          <input
            type="text"
            name="expiry"
            value={formData.expiry}
            onChange={handleChange}
            required
            pattern="(0[1-9]|1[0-2])\/([0-9]{2})"
            placeholder="MM/YY"
            maxLength={5}
            className="w-full px-4 py-2 bg-black/50 border border-violet-500/20 rounded-lg text-white focus:ring-2 focus:ring-violet-500 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">
            CVC
          </label>
          <input
            type="text"
            name="cvc"
            value={formData.cvc}
            onChange={handleChange}
            required
            pattern="[0-9]{3,4}"
            maxLength={4}
            className="w-full px-4 py-2 bg-black/50 border border-violet-500/20 rounded-lg text-white focus:ring-2 focus:ring-violet-500 focus:border-transparent"
          />
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-violet-600 hover:bg-violet-700 text-white py-3 rounded-lg transition-colors mt-6"
      >
        Pay {siteConfig.pricing.currency}{plan.price.toLocaleString('en-IN')}
      </button>
    </form>
  );
}