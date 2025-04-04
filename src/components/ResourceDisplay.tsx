
import React from 'react';
import { Server, Database, HardDrive } from 'lucide-react';

interface Resources {
  ram: number;
  cpu: number;
  storage: number;
}

interface ResourceDisplayProps {
  resources: Resources;
}

const ResourceDisplay = ({ resources }: ResourceDisplayProps) => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="glass-card p-6 text-center flex flex-col items-center justify-center group transition-all duration-300 hover:translate-y-[-5px]">
        <div className="relative">
          <div className="absolute inset-0 bg-krinix-accent/20 rounded-full blur-xl transform scale-75 group-hover:scale-100 transition-all duration-500"></div>
          <Server className="h-12 w-12 mb-3 text-krinix-accent relative z-10 group-hover:text-white transition-colors duration-300" />
        </div>
        <h3 className="text-lg font-medium mt-2">RAM</h3>
        <p className="text-4xl font-bold mt-2 transition-all duration-300 group-hover:scale-110 text-krinix-light">{resources.ram} GB</p>
      </div>
      
      <div className="glass-card p-6 text-center flex flex-col items-center justify-center group transition-all duration-300 hover:translate-y-[-5px]">
        <div className="relative">
          <div className="absolute inset-0 bg-krinix-accent/20 rounded-full blur-xl transform scale-75 group-hover:scale-100 transition-all duration-500"></div>
          <Database className="h-12 w-12 mb-3 text-krinix-accent relative z-10 group-hover:text-white transition-colors duration-300" />
        </div>
        <h3 className="text-lg font-medium mt-2">CPU</h3>
        <p className="text-4xl font-bold mt-2 transition-all duration-300 group-hover:scale-110 text-krinix-light">{resources.cpu} Cores</p>
      </div>
      
      <div className="glass-card p-6 text-center flex flex-col items-center justify-center group transition-all duration-300 hover:translate-y-[-5px]">
        <div className="relative">
          <div className="absolute inset-0 bg-krinix-accent/20 rounded-full blur-xl transform scale-75 group-hover:scale-100 transition-all duration-500"></div>
          <HardDrive className="h-12 w-12 mb-3 text-krinix-accent relative z-10 group-hover:text-white transition-colors duration-300" />
        </div>
        <h3 className="text-lg font-medium mt-2">Storage</h3>
        <p className="text-4xl font-bold mt-2 transition-all duration-300 group-hover:scale-110 text-krinix-light">{resources.storage} GB</p>
      </div>
    </div>
  );
};

export default ResourceDisplay;
