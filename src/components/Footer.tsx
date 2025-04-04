
import React from 'react';
import { Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-12 px-4 mt-16 text-center relative overflow-hidden">
      {/* Animated background effect */}
      <div className="absolute inset-0 bg-gradient-to-tr from-krinix-accent/20 to-transparent opacity-50"></div>
      
      <div className="max-w-7xl mx-auto relative">
        <div className="glass-card p-8 transform transition-all duration-700 hover:translate-y-[-5px]">
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-sm text-krinix-light flex flex-col md:flex-row items-center gap-4">
              <div className="flex items-center space-x-2">
                <Heart className="h-4 w-4 text-krinix-accent animate-pulse-subtle" />
                <span>© {currentYear} KrinixCloud</span>
              </div>
              <span className="hidden md:inline text-krinix-accent">•</span>
              <span>Premium Cloud Infrastructure</span>
            </div>
            
            <div className="flex items-center gap-3 transition-all duration-300 group p-2 rounded-full hover:bg-krinix-accent/10">
              <Mail className="h-5 w-5 text-krinix-accent group-hover:scale-110 transition-transform" />
              <a
                href="mailto:support@krinixcloud.host"
                className="text-krinix-light hover:text-krinix-accent transition-all duration-300"
              >
                support@krinixcloud.host
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
