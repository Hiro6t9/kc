
import React from 'react';
import { MessageSquare, Users, UserPlus } from 'lucide-react';
import { Button } from '@/components/ui/button';

const DiscordEmbed = () => {
  return (
    <div className="glass-card w-full max-w-lg mx-auto p-8 animate-on-scroll opacity-0 transition-all duration-500 hover:shadow-[0_0_30px_rgba(204,204,255,0.2)] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-krinix-accent/10 blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-krinix-accent/5 blur-3xl"></div>
      
      <div className="relative">
        <div className="flex items-center gap-3 mb-8">
          <div className="bg-krinix-accent/20 p-2 rounded-full">
            <MessageSquare className="h-6 w-6 text-krinix-accent" />
          </div>
          <h3 className="text-xl font-semibold text-krinix-light">Join Our Community</h3>
        </div>
        
        <div className="bg-[#2B2B35] rounded-xl p-6 mb-6 transition-all duration-300 hover:shadow-lg border border-krinix-accent/20 transform hover:scale-[1.02]">
          <div className="flex items-start space-x-4">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-krinix-accent to-krinix-muted flex items-center justify-center text-krinix-bg font-bold text-lg transition-transform duration-300 hover:scale-105 shadow-lg">
              KC
            </div>
            <div className="flex-1">
              <h4 className="text-krinix-light font-semibold text-lg">KrinixCloud</h4>
              <p className="text-krinix-light/80 my-2">
                Join our growing community for support, updates, and special offers!
              </p>
              <div className="mt-3 flex items-center gap-4 text-sm text-krinix-accent/70">
                <div className="flex items-center gap-1">
                  <Users className="h-4 w-4" />
                  <span>1,250+ members</span>
                </div>
                <div className="flex items-center gap-1">
                  <UserPlus className="h-4 w-4" />
                  <span>50+ online</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <Button 
          className="w-full bg-krinix-accent hover:bg-krinix-hover text-krinix-bg transition-all duration-300 rounded-xl font-medium py-6 shadow-lg hover:shadow-xl"
          onClick={() => window.open('https://discord.gg/krinixcloud', '_blank')}
        >
          <MessageSquare className="w-5 h-5 mr-2" />
          Join Discord Server
        </Button>
      </div>
    </div>
  );
};

export default DiscordEmbed;
