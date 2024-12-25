import React, { useState } from 'react';
import { useCurrency } from '../../contexts/CurrencyContext';

interface PriceAdjusterProps {
  initialPrice: number;
  onPriceChange: (price: number) => void;
}

export default function PriceAdjuster({ initialPrice, onPriceChange }: PriceAdjusterProps) {
  const { currency } = useCurrency();
  const [price, setPrice] = useState(initialPrice);

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPrice = parseInt(e.target.value) || 0;
    setPrice(newPrice);
    onPriceChange(newPrice);
  };

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-300">
        Adjust Price ({currency})
      </label>
      <input
        type="number"
        value={price}
        onChange={handlePriceChange}
        min="0"
        step="1"
        className="w-full px-4 py-2 bg-black/50 border border-violet-500/20 rounded-lg text-white"
      />
    </div>
  );
}