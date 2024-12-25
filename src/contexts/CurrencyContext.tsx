import React, { createContext, useContext, useState, useEffect } from 'react';

type Currency = 'INR' | 'USD';

interface CurrencyContextType {
  currency: Currency;
  setCurrency: (currency: Currency) => void;
  formatPrice: (amount: number) => string;
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

export function CurrencyProvider({ children }: { children: React.ReactNode }) {
  const [currency, setCurrency] = useState<Currency>(() => {
    const saved = localStorage.getItem('preferredCurrency');
    return (saved === 'USD' || saved === 'INR') ? saved : 'INR';
  });

  useEffect(() => {
    localStorage.setItem('preferredCurrency', currency);
  }, [currency]);

  const formatPrice = (amount: number): string => {
    if (currency === 'USD') {
      const usdAmount = amount / 85; // Approximate conversion rate
      return `$${usdAmount.toFixed(2)}`;
    }
    return `₹${amount.toLocaleString('en-IN')}`;
  };

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency, formatPrice }}>
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency() {
  const context = useContext(CurrencyContext);
  if (context === undefined) {
    throw new Error('useCurrency must be used within a CurrencyProvider');
  }
  return context;
}