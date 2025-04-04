
import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { Menu, X } from 'lucide-react';

interface NavLink {
  name: string;
  url: string;
}

const navLinks: NavLink[] = [
  { name: 'Discord', url: 'https://discord.gg/krinixcloud' },
  { name: 'YouTube', url: 'https://srv.youtube' },
  { name: 'Panel', url: 'https://panel.krinixcloud.host' },
  { name: 'Dashboard', url: 'https://dash.krinixcloud.host' },
];

interface HeaderProps {
  className?: string;
}

const Header = ({ className }: HeaderProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={cn(
      "fixed top-0 left-0 w-full py-6 px-4 md:px-8 z-50 transition-all duration-300 page-reveal-item", 
      scrolled ? "bg-krinix-bg/80 backdrop-blur-lg shadow-lg" : "bg-transparent",
      className
    )}>
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <button 
              onClick={toggleMenu} 
              className="text-krinix-text hover:text-krinix-accent transition-colors mr-4 md:mr-8 focus:outline-none"
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tighter text-krinix-accent">
              KrinixCloud
            </h1>
          </div>
          
          <nav className="hidden md:flex flex-wrap justify-center gap-4 md:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-krinix-text hover:text-krinix-accent transition-colors duration-200 font-medium"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>

        {/* Mobile menu */}
        <div className={`${menuOpen ? 'max-h-64' : 'max-h-0'} overflow-hidden transition-all duration-300 ease-in-out mt-4 md:hidden`}>
          <div className="flex flex-col space-y-4 py-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-krinix-text hover:text-krinix-accent transition-colors duration-200 font-medium"
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
