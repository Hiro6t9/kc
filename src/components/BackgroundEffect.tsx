
import React from 'react';
import { cn } from '@/lib/utils';

interface BackgroundEffectProps {
  className?: string;
}

const BackgroundEffect = ({ className }: BackgroundEffectProps) => {
  return (
    <div className={cn("fixed inset-0 -z-10 overflow-hidden", className)}>
      {/* Main dark background */}
      <div className="absolute inset-0 bg-black"></div>
      
      {/* Server rack blur in top right */}
      <div className="absolute top-0 right-0 w-full md:w-1/2 h-1/2 opacity-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2234&auto=format&fit=crop')] bg-cover bg-center blur-xl"></div>
      </div>
      
      {/* Server room blur in bottom left */}
      <div className="absolute bottom-0 left-0 w-full md:w-1/2 h-1/2 opacity-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center blur-xl"></div>
      </div>
      
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      
      {/* Gradient vignette */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-transparent to-black"></div>
    </div>
  );
};

export default BackgroundEffect;
