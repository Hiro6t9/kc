
import React, { useEffect, useRef } from 'react';
import Header from '@/components/Header';
import ResourceCalculator from '@/components/ResourceCalculator';
import BackgroundEffect from '@/components/BackgroundEffect';
import Footer from '@/components/Footer';
import { ArrowDown } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';

const Index = () => {
  const calculatorRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  
  const scrollToCalculator = () => {
    calculatorRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    // Add scroll-based animations
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      
      // Add animation classes based on scroll position
      document.querySelectorAll('.animate-on-scroll').forEach((el) => {
        const element = el as HTMLElement;
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        
        if (scrollPosition > elementPosition - window.innerHeight * 0.85) {
          element.classList.add('animate-scale-in');
          element.style.opacity = '1';
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    // Trigger once on load
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col relative">
      <BackgroundEffect />
      
      <Header />
      
      <main className="flex-grow flex flex-col overflow-hidden">
        <section className="h-screen py-16 md:py-24 px-4 flex flex-col items-center justify-center">
          <div className="max-w-4xl mx-auto text-center mb-12 md:mb-20">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-slide-up">
              Cloud Infrastructure <br className="hidden md:inline" />
              for Your Needs
            </h2>
            <p className="text-lg md:text-xl text-krinix-light max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
              Estimate the perfect amount of resources for your Minecraft servers, web applications, and VPS solutions.
            </p>
            
            <div className="mt-12 animate-float cursor-pointer" onClick={scrollToCalculator}>
              <ArrowDown className="mx-auto h-8 w-8 hover:scale-110 transition-transform" />
            </div>
          </div>
        </section>
        
        <section ref={calculatorRef} className="py-16 px-4 min-h-screen flex flex-col justify-center">
          <div className="w-full px-4 md:px-8 animate-on-scroll opacity-0" style={{ transitionDelay: '0.2s' }}>
            <ResourceCalculator />
          </div>
        </section>
        
        <section ref={featuresRef} className="py-16 px-4 min-h-screen flex flex-col justify-center">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center animate-on-scroll opacity-0">
              Why Choose KrinixCloud?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="glass-card p-8 animate-on-scroll opacity-0" style={{ transitionDelay: '0.2s' }}>
                <h3 className="text-2xl font-bold mb-4">High-Performance Servers</h3>
                <p className="text-krinix-light">
                  Our infrastructure is built on enterprise-grade hardware, providing low-latency connections and high availability for all your services.
                </p>
              </div>
              
              <div className="glass-card p-8 animate-on-scroll opacity-0" style={{ transitionDelay: '0.4s' }}>
                <h3 className="text-2xl font-bold mb-4">24/7 Technical Support</h3>
                <p className="text-krinix-light">
                  Our team of experts is available around the clock to help you with any technical issues or questions you might have.
                </p>
              </div>
              
              <div className="glass-card p-8 animate-on-scroll opacity-0" style={{ transitionDelay: '0.6s' }}>
                <h3 className="text-2xl font-bold mb-4">Scalable Solutions</h3>
                <p className="text-krinix-light">
                  Easily scale your resources up or down as your needs change. Only pay for what you actually need.
                </p>
              </div>
              
              <div className="glass-card p-8 animate-on-scroll opacity-0" style={{ transitionDelay: '0.8s' }}>
                <h3 className="text-2xl font-bold mb-4">DDoS Protection</h3>
                <p className="text-krinix-light">
                  Our advanced protection systems keep your services online even during malicious attacks.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
