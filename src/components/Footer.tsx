
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-8 px-4 mt-12 text-center">
      <div className="max-w-7xl mx-auto relative overflow-hidden glass-card p-6 animate-on-scroll opacity-0">
        {/* Animated background effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent w-[200%] animate-slide-gradient"></div>
        
        <p className="text-sm text-krinix-light relative z-10 flex flex-col md:flex-row items-center justify-center gap-4">
          <span>© {currentYear} KrinixCloud</span>
          <span className="hidden md:inline">•</span>
          <span>Premium Cloud Infrastructure</span>
          <span className="hidden md:inline">•</span>
          <span>All rights reserved.</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
