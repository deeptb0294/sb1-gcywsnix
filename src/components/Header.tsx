import React, { useState } from 'react';
import { Box } from 'lucide-react';
import { Link } from 'react-router-dom';
import FollowerCount from './social/FollowerCount';
import { useCurrency } from '../contexts/CurrencyContext';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { currency, setCurrency } = useCurrency();

  const openPayPal = () => {
    window.open('https://paypal.me/exportsaep?country.x=IN&locale.x=en_GB', '_blank');
  };

  return (
    <header className="fixed w-full bg-black/95 text-white z-50 backdrop-blur-sm py-2">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Box className="w-6 h-6 text-violet-500 animate-pulse" />
            <div>
              <span className="text-xl font-bold text-violet-500">Exports.Aep</span>
              <FollowerCount />
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => setCurrency('INR')}
                className={`${currency === 'INR' ? 'text-violet-500' : 'text-gray-400'} hover:text-violet-500 transition-colors`}
              >
                ₹ INR
              </button>
              <span className="text-gray-600">|</span>
              <button 
                onClick={() => setCurrency('USD')}
                className={`${currency === 'USD' ? 'text-violet-500' : 'text-gray-400'} hover:text-violet-500 transition-colors`}
              >
                $ USD
              </button>
            </div>
            <nav className="flex items-center space-x-8">
              <Link to="/" className="hover:text-violet-500 transition-colors">Home</Link>
              <Link to="/portfolio" className="hover:text-violet-500 transition-colors">Portfolio</Link>
              <Link to="/pricing" className="hover:text-violet-500 transition-colors">Pricing</Link>
              <Link to="/marketplace" className="hover:text-violet-500 transition-colors">Marketplace</Link>
              <Link to="/contact" className="hover:text-violet-500 transition-colors">Contact</Link>
              <button 
                onClick={openPayPal}
                className="text-violet-500 hover:text-violet-400 transition-colors"
              >
                Donate
              </button>
            </nav>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Box className="w-6 h-6" />
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <div className="flex justify-center space-x-4 mb-4">
              <button 
                onClick={() => setCurrency('INR')}
                className={`${currency === 'INR' ? 'text-violet-500' : 'text-gray-400'}`}
              >
                ₹ INR
              </button>
              <span className="text-gray-600">|</span>
              <button 
                onClick={() => setCurrency('USD')}
                className={`${currency === 'USD' ? 'text-violet-500' : 'text-gray-400'}`}
              >
                $ USD
              </button>
            </div>
            <Link to="/" className="block hover:text-violet-500">Home</Link>
            <Link to="/portfolio" className="block hover:text-violet-500">Portfolio</Link>
            <Link to="/pricing" className="block hover:text-violet-500">Pricing</Link>
            <Link to="/marketplace" className="block hover:text-violet-500">Marketplace</Link>
            <Link to="/contact" className="block hover:text-violet-500">Contact</Link>
            <button 
              onClick={openPayPal}
              className="block text-violet-500 hover:text-violet-400"
            >
              Donate
            </button>
          </div>
        )}
      </div>
    </header>
  );
}