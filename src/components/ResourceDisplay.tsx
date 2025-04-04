
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
      <div className="glass-card p-4 text-center flex flex-col items-center justify-center">
        <Server className="h-10 w-10 mb-2 text-krinix-light" />
        <h3 className="text-lg font-medium">RAM</h3>
        <p className="text-3xl font-bold">{resources.ram} GB</p>
      </div>
      
      <div className="glass-card p-4 text-center flex flex-col items-center justify-center">
        <Database className="h-10 w-10 mb-2 text-krinix-light" />
        <h3 className="text-lg font-medium">CPU</h3>
        <p className="text-3xl font-bold">{resources.cpu} Cores</p>
      </div>
      
      <div className="glass-card p-4 text-center flex flex-col items-center justify-center">
        <HardDrive className="h-10 w-10 mb-2 text-krinix-light" />
        <h3 className="text-lg font-medium">Storage</h3>
        <p className="text-3xl font-bold">{resources.storage} GB</p>
      </div>
    </div>
  );
};

export default ResourceDisplay;
