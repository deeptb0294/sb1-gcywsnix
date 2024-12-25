import { Routes, Route } from 'react-router-dom';
import { CurrencyProvider } from './contexts/CurrencyContext';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import PortfolioCategory from './pages/PortfolioCategory';
import Pricing from './pages/Pricing';
import Marketplace from './pages/Marketplace';
import Contact from './pages/Contact';

export default function App() {
  return (
    <CurrencyProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio/:category" element={<PortfolioCategory />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </CurrencyProvider>
  );
}