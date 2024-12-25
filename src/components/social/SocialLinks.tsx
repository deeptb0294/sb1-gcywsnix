import React from 'react';
import { Instagram, MessageCircle } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';

export default function SocialLinks() {
  const openWhatsApp = () => {
    window.open(`https://wa.me/${siteConfig.contact.whatsapp}`, '_blank');
  };

  return (
    <div className="flex space-x-4 pt-4">
      <a 
        href={siteConfig.contact.instagram}
        target="_blank"
        rel="noopener noreferrer"
        className="text-violet-500 hover:text-violet-400 transition-colors"
      >
        <Instagram className="w-6 h-6" />
      </a>
      <button
        onClick={openWhatsApp}
        className="text-violet-500 hover:text-violet-400 transition-colors"
      >
        <MessageCircle className="w-6 h-6" />
      </button>
    </div>
  );
}