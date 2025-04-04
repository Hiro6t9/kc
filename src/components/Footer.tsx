
import React from 'react';
import { Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-8 px-4 mt-12 text-center">
      <div className="max-w-7xl mx-auto relative overflow-hidden glass-card p-6 animate-on-scroll opacity-0">
        {/* Animated background effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-krinix-accent/5 to-transparent w-[200%] animate-slide-gradient"></div>
        
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-krinix-light flex flex-col md:flex-row items-center gap-2 md:gap-4">
            <span>© {currentYear} KrinixCloud</span>
            <span className="hidden md:inline">•</span>
            <span>Premium Cloud Infrastructure</span>
          </p>
          
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4 text-krinix-accent" />
            <a
              href="mailto:support@krinixcloud.host"
              className="text-krinix-light hover:text-krinix-accent transition-colors"
            >
              support@krinixcloud.host
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
