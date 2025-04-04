
import React from 'react';
import { cn } from "@/lib/utils";

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
  return (
    <header className={cn("w-full py-6 px-4 md:px-8 animate-fade-in z-10", className)}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">
              KrinixCloud
            </h1>
          </div>
          
          <nav className="flex flex-wrap justify-center gap-4 md:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-krinix-text hover:text-krinix-light transition-colors duration-200 font-medium"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
