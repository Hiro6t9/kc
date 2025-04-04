
interface CalculatorInputs {
  players?: number;
  plugins?: number;
  traffic?: number;
  storage?: number;
  applications?: number;
  databases?: number;
  type: 'minecraft' | 'web' | 'vps';
}

interface Resources {
  ram: number;
  cpu: number;
  storage: number;
}

export const calculateResources = (inputs: CalculatorInputs): Resources => {
  let ram = 0;
  let cpu = 0;
  let storage = 0;

  switch (inputs.type) {
    case 'minecraft':
      // Calculate RAM: base + players + plugins
      ram = 1 + (inputs.players || 0) * 0.1 + (inputs.plugins || 0) * 0.2;
      ram = Math.max(2, Math.ceil(ram)); // Minimum 2GB RAM

      // Calculate CPU: base + players + plugins
      cpu = 1 + (inputs.players || 0) * 0.05 + (inputs.plugins || 0) * 0.05;
      cpu = Math.max(1, Math.ceil(cpu)); // Minimum 1 core

      // Calculate Storage: base + plugins + world size
      storage = (inputs.storage || 10); // Base storage provided by user
      break;

    case 'web':
      // Calculate RAM: base + traffic + applications + databases
      ram = 1 + (inputs.traffic || 0) * 0.0005 + (inputs.applications || 0) * 0.5 + (inputs.databases || 0) * 0.5;
      ram = Math.max(1, Math.ceil(ram)); // Minimum 1GB RAM

      // Calculate CPU: base + traffic + applications
      cpu = 1 + (inputs.traffic || 0) * 0.0001 + (inputs.applications || 0) * 0.25 + (inputs.databases || 0) * 0.25;
      cpu = Math.max(1, Math.ceil(cpu)); // Minimum 1 core

      // Calculate Storage: base + applications + databases
      storage = (inputs.storage || 10); // Base storage provided by user
      break;

    case 'vps':
      // Calculate RAM: base + applications + databases + traffic
      ram = 1 + (inputs.applications || 0) * 1 + (inputs.databases || 0) * 0.5 + (inputs.traffic || 0) * 0.0001;
      ram = Math.max(2, Math.ceil(ram)); // Minimum 2GB RAM

      // Calculate CPU: base + applications + databases
      cpu = 1 + (inputs.applications || 0) * 0.5 + (inputs.databases || 0) * 0.25;
      cpu = Math.max(1, Math.ceil(cpu)); // Minimum 1 core

      // Calculate Storage: base + applications + databases
      storage = (inputs.storage || 20); // Base storage provided by user
      break;

    default:
      break;
  }

  return {
    ram: Math.ceil(ram),
    cpu: Math.ceil(cpu),
    storage: Math.ceil(storage)
  };
};
