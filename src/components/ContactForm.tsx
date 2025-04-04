
import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Mail } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent",
        description: "Thank you for contacting us. We'll get back to you soon!",
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="glass-card w-full max-w-lg mx-auto p-6 animate-on-scroll opacity-0">
      <div className="flex items-center gap-2 mb-6">
        <Mail className="h-6 w-6 text-krinix-accent" />
        <h3 className="text-xl font-semibold">Contact Us</h3>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            required
            className="bg-krinix-bg/50 border-krinix-border text-krinix-text"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="your-email@example.com"
            required
            className="bg-krinix-bg/50 border-krinix-border text-krinix-text"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="subject">Subject</Label>
          <Input
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="What is this regarding?"
            required
            className="bg-krinix-bg/50 border-krinix-border text-krinix-text"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="message">Message</Label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your message..."
            required
            rows={4}
            className="w-full p-2 rounded-md bg-krinix-bg/50 border border-krinix-border text-krinix-text resize-none focus:outline-none focus:ring-2 focus:ring-krinix-accent"
          />
        </div>
        
        <div className="pt-2">
          <Button 
            type="submit" 
            disabled={loading}
            className="w-full bg-krinix-accent hover:bg-krinix-hover text-white transition-colors"
          >
            {loading ? "Sending..." : "Send Message"}
          </Button>
          <p className="text-xs text-krinix-muted mt-2 text-center">
            or email us directly at <a href="mailto:support@krinixcloud.host" className="text-krinix-accent hover:underline">support@krinixcloud.host</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
