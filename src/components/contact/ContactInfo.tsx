import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';
import SocialLinks from './SocialLinks';

export default function ContactInfo() {
  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold text-white">Let's Create Something Amazing</h3>
      <p className="text-gray-400">
        Have a project in mind? Reach out to discuss how we can bring your vision to life.
      </p>
      <div className="space-y-4">
        <div className="flex items-center">
          <Mail className="w-6 h-6 text-violet-500 mr-4" />
          <span className="text-white">{siteConfig.contact.email}</span>
        </div>
        <div className="flex items-center">
          <Phone className="w-6 h-6 text-violet-500 mr-4" />
          <span className="text-white">{siteConfig.contact.phone}</span>
        </div>
        <div className="flex items-center">
          <MapPin className="w-6 h-6 text-violet-500 mr-4" />
          <span className="text-white">{siteConfig.contact.location}</span>
        </div>
      </div>
      <SocialLinks />
    </div>
  );
}