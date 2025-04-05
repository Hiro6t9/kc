
import React from 'react';
import { MessageSquare } from 'lucide-react';

const DiscordEmbed = () => {
  return (
    <div className="discord-embed glass-card rounded-xl p-6 hover:shadow-lg transition-all duration-300 animate-fade-in hover:translate-y-[-5px]">
      <div className="flex items-center gap-3 mb-4">
        <MessageSquare className="h-6 w-6 text-krinix-accent" />
        <h3 className="text-xl font-semibold text-krinix-light">Join Our Discord Community</h3>
      </div>
      <p className="text-sm text-krinix-light/90 mb-4">
        Connect with other users, get support, and stay updated on the latest KrinixCloud news.
      </p>
      <a 
        href="https://discord.gg/krinixcloud" 
        target="_blank" 
        rel="noopener noreferrer"
        className="inline-block bg-krinix-accent/20 hover:bg-krinix-accent/40 text-krinix-accent py-2 px-4 rounded-lg transition-all duration-300 border border-krinix-accent/30 hover:border-krinix-accent/60"
      >
        Join Discord
      </a>
    </div>
  );
};

export default DiscordEmbed;
