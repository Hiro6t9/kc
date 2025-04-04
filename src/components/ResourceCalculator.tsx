
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Slider } from "@/components/ui/slider";
import { calculateResources } from '@/utils/calculator';
import ResourceDisplay from '@/components/ResourceDisplay';

type ServerType = 'minecraft' | 'web' | 'vps';

interface CalculatorInputs {
  players?: number;
  plugins?: number;
  traffic?: number;
  storage?: number;
  applications?: number;
  databases?: number;
  type: ServerType;
}

const ResourceCalculator = () => {
  const [inputs, setInputs] = useState<CalculatorInputs>({
    players: 10,
    plugins: 5,
    traffic: 500,
    storage: 10,
    applications: 2,
    databases: 1,
    type: 'minecraft'
  });

  const [resources, setResources] = useState({
    ram: 0,
    cpu: 0,
    storage: 0
  });

  useEffect(() => {
    const results = calculateResources(inputs);
    setResources(results);
  }, [inputs]);

  const handleTabChange = (value: string) => {
    setInputs(prev => ({ ...prev, type: value as ServerType }));
  };

  const handleSliderChange = (name: keyof CalculatorInputs, value: number[]) => {
    setInputs(prev => ({ ...prev, [name]: value[0] }));
  };

  return (
    <Card className="w-full max-w-4xl mx-auto bg-black/40 backdrop-blur-md border border-krinix-border">
      <CardHeader>
        <CardTitle className="text-2xl md:text-3xl text-center">Resource Calculator</CardTitle>
        <CardDescription className="text-center text-krinix-light">
          Estimate the server resources you need based on your requirements
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="minecraft" onValueChange={handleTabChange} className="w-full">
          <TabsList className="grid grid-cols-3 mb-8">
            <TabsTrigger value="minecraft">Minecraft Server</TabsTrigger>
            <TabsTrigger value="web">Web Server</TabsTrigger>
            <TabsTrigger value="vps">VPS</TabsTrigger>
          </TabsList>
          
          <TabsContent value="minecraft" className="space-y-6">
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm font-medium">Players: {inputs.players}</label>
                </div>
                <Slider
                  value={[inputs.players || 10]}
                  min={1}
                  max={100}
                  step={1}
                  onValueChange={(value) => handleSliderChange('players', value)}
                />
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm font-medium">Plugins/Mods: {inputs.plugins}</label>
                </div>
                <Slider
                  value={[inputs.plugins || 5]}
                  min={0}
                  max={50}
                  step={1}
                  onValueChange={(value) => handleSliderChange('plugins', value)}
                />
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm font-medium">Storage (GB): {inputs.storage}</label>
                </div>
                <Slider
                  value={[inputs.storage || 10]}
                  min={5}
                  max={100}
                  step={5}
                  onValueChange={(value) => handleSliderChange('storage', value)}
                />
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="web" className="space-y-6">
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm font-medium">Monthly Traffic (GB): {inputs.traffic}</label>
                </div>
                <Slider
                  value={[inputs.traffic || 500]}
                  min={100}
                  max={10000}
                  step={100}
                  onValueChange={(value) => handleSliderChange('traffic', value)}
                />
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm font-medium">Applications: {inputs.applications}</label>
                </div>
                <Slider
                  value={[inputs.applications || 2]}
                  min={1}
                  max={20}
                  step={1}
                  onValueChange={(value) => handleSliderChange('applications', value)}
                />
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm font-medium">Databases: {inputs.databases}</label>
                </div>
                <Slider
                  value={[inputs.databases || 1]}
                  min={0}
                  max={10}
                  step={1}
                  onValueChange={(value) => handleSliderChange('databases', value)}
                />
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm font-medium">Storage (GB): {inputs.storage}</label>
                </div>
                <Slider
                  value={[inputs.storage || 10]}
                  min={5}
                  max={500}
                  step={5}
                  onValueChange={(value) => handleSliderChange('storage', value)}
                />
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="vps" className="space-y-6">
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm font-medium">Applications: {inputs.applications}</label>
                </div>
                <Slider
                  value={[inputs.applications || 2]}
                  min={1}
                  max={20}
                  step={1}
                  onValueChange={(value) => handleSliderChange('applications', value)}
                />
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm font-medium">Databases: {inputs.databases}</label>
                </div>
                <Slider
                  value={[inputs.databases || 1]}
                  min={0}
                  max={10}
                  step={1}
                  onValueChange={(value) => handleSliderChange('databases', value)}
                />
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm font-medium">Monthly Traffic (GB): {inputs.traffic}</label>
                </div>
                <Slider
                  value={[inputs.traffic || 500]}
                  min={100}
                  max={10000}
                  step={100}
                  onValueChange={(value) => handleSliderChange('traffic', value)}
                />
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm font-medium">Storage (GB): {inputs.storage}</label>
                </div>
                <Slider
                  value={[inputs.storage || 10]}
                  min={5}
                  max={1000}
                  step={5}
                  onValueChange={(value) => handleSliderChange('storage', value)}
                />
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter>
        <ResourceDisplay resources={resources} />
      </CardFooter>
    </Card>
  );
};

export default ResourceCalculator;
