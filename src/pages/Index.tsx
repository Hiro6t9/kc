
import React from 'react';
import Header from '@/components/Header';
import ResourceCalculator from '@/components/ResourceCalculator';
import BackgroundEffect from '@/components/BackgroundEffect';
import Footer from '@/components/Footer';
import { ArrowDown } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col relative">
      <BackgroundEffect />
      
      <Header />
      
      <main className="flex-grow flex flex-col">
        <section className="py-16 md:py-24 px-4 flex-1 flex flex-col items-center justify-center">
          <div className="max-w-4xl mx-auto text-center mb-12 md:mb-20">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in">
              Cloud Infrastructure <br className="hidden md:inline" />
              for Your Needs
            </h2>
            <p className="text-lg md:text-xl text-krinix-light max-w-3xl mx-auto animate-fade-in">
              Estimate the perfect amount of resources for your Minecraft servers, web applications, and VPS solutions.
            </p>
            
            <div className="mt-12 animate-pulse-subtle">
              <ArrowDown className="mx-auto h-8 w-8" />
            </div>
          </div>
          
          <div className="w-full px-4 md:px-8 animate-fade-in">
            <ResourceCalculator />
          </div>
        </section>
        
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="glass-card p-8 animate-fade-in">
                <h3 className="text-2xl font-bold mb-4">High-Performance Servers</h3>
                <p className="text-krinix-light">
                  Our infrastructure is built on enterprise-grade hardware, providing low-latency connections and high availability for all your services.
                </p>
              </div>
              
              <div className="glass-card p-8 animate-fade-in">
                <h3 className="text-2xl font-bold mb-4">24/7 Technical Support</h3>
                <p className="text-krinix-light">
                  Our team of experts is available around the clock to help you with any technical issues or questions you might have.
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
