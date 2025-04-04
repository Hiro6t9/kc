
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface BackgroundEffectProps {
  className?: string;
}

const BackgroundEffect = ({ className }: BackgroundEffectProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };

    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const parallaxIntensity = 15;
  const serverRackTransform = `translate(${mousePosition.x * -parallaxIntensity}px, ${mousePosition.y * -parallaxIntensity}px)`;
  const serverRoomTransform = `translate(${mousePosition.x * parallaxIntensity}px, ${mousePosition.y * parallaxIntensity}px)`;
  
  // Calculate opacity based on scroll position
  const baseOpacity = 0.2;
  const scrollOpacityBoost = Math.min(scrollPosition / 1000, 0.1);

  return (
    <div className={cn("fixed inset-0 -z-10 overflow-hidden", className)}>
      {/* Main dark background */}
      <div className="absolute inset-0 bg-black"></div>
      
      {/* Server rack blur in top right with parallax effect */}
      <div 
        className="absolute top-0 right-0 w-full md:w-1/2 h-1/2 opacity-20 overflow-hidden transition-transform duration-1000 ease-out"
        style={{ transform: serverRackTransform }}
      >
        <div 
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2234&auto=format&fit=crop')] bg-cover bg-center blur-xl"
          style={{ opacity: baseOpacity + scrollOpacityBoost }}
        ></div>
      </div>
      
      {/* Server room blur in bottom left with parallax effect */}
      <div 
        className="absolute bottom-0 left-0 w-full md:w-1/2 h-1/2 opacity-20 overflow-hidden transition-transform duration-1000 ease-out"
        style={{ transform: serverRoomTransform }}
      >
        <div 
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center blur-xl"
          style={{ opacity: baseOpacity + scrollOpacityBoost }}
        ></div>
      </div>
      
      {/* Animated Grid overlay */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] transition-transform duration-1000 ease-out"
        style={{ transform: `translateY(${scrollPosition * 0.1}px)` }}
      ></div>
      
      {/* Gradient vignette with subtle pulse animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-transparent to-black animate-pulse-subtle"></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 15 }).map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-white/10 animate-float"
            style={{
              width: Math.random() * 4 + 2 + 'px',
              height: Math.random() * 4 + 2 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              animationDelay: Math.random() * 5 + 's',
              animationDuration: Math.random() * 10 + 10 + 's',
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default BackgroundEffect;
