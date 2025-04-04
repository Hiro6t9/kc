
import React from 'react';
import { MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';

const DiscordEmbed = () => {
  return (
    <div className="glass-card w-full max-w-lg mx-auto p-6 animate-on-scroll opacity-0">
      <div className="flex items-center gap-2 mb-6">
        <MessageSquare className="h-6 w-6 text-krinix-accent" />
        <h3 className="text-xl font-semibold">Join Our Discord</h3>
      </div>
      
      <div className="bg-[#2f3136] rounded-lg p-4 mb-4">
        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 rounded-full bg-krinix-accent flex items-center justify-center text-white font-bold">
            KC
          </div>
          <div className="flex-1">
            <h4 className="text-white font-semibold">KrinixCloud</h4>
            <p className="text-gray-300 text-sm">
              Join our growing community for support, updates, and special offers!
            </p>
            <div className="mt-2 text-xs text-gray-400">
              <span>1,250+ members</span>
              <span className="mx-2">•</span>
              <span>50+ online</span>
            </div>
          </div>
        </div>
      </div>
      
      <Button 
        className="w-full bg-[#5865F2] hover:bg-[#4752c4] text-white"
        onClick={() => window.open('https://discord.gg/krinixcloud', '_blank')}
      >
        <MessageSquare className="w-5 h-5 mr-2" />
        Join Discord Server
      </Button>
    </div>
  );
};

export default DiscordEmbed;
