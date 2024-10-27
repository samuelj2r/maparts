import React from 'react';
import { ImageIcon, Monitor, Smartphone } from 'lucide-react';
import { useImages } from '../hooks/useImages';

interface HeaderProps {
  deviceType: 'desktop' | 'mobile';
  onDeviceChange: (device: 'desktop' | 'mobile') => void;
  selectedregion: string | null;
  onregionSelect: (region: string | null) => void;
}

const Header = ({ deviceType, onDeviceChange, selectedregion, onregionSelect }: HeaderProps) => {
  const { images } = useImages(deviceType);
  
  // Get unique regions
  const regions = Array.from(new Set(images.map(img => img.region))).sort();

  return (
    <header className="bg-[#0a0b0d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex justify-between items-center mb-4">
        <div className="flex items-center space-x-3">
  <img src="/src/assets/logo-maparts-v2.png" alt="Maparts Logo" className="h-8 w-8" />
  <h1 className="text-2xl font-bold text-white">Maparts</h1>
</div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 bg-[#1f2128] rounded-lg p-1">
              <button
                onClick={() => onDeviceChange('desktop')}
                className={`flex items-center space-x-2 px-3 py-2 rounded-md transition-colors ${
                  deviceType === 'desktop'
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                <Monitor className="h-4 w-4" />
                <span className="text-sm">Desktop</span>
              </button>
              <button
                onClick={() => onDeviceChange('mobile')}
                className={`flex items-center space-x-2 px-3 py-2 rounded-md transition-colors ${
                  deviceType === 'mobile'
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                <Smartphone className="h-4 w-4" />
                <span className="text-sm">Mobile</span>
              </button>
            </div>
          </div>
        </div>
        <nav className="w-full">
          <ul className="flex justify-center space-x-8 flex-wrap gap-y-2">
            <li>
              <button
                onClick={() => onregionSelect(null)}
                className={`text-sm uppercase tracking-wider transition-colors ${
                  selectedregion === null
                    ? 'text-blue-400'
                    : 'text-gray-300 hover:text-blue-400'
                }`}
              >
                Home
              </button>
            </li>
            {regions.map((region) => (
              <li key={region}>
                <button
                  onClick={() => onregionSelect(region)}
                  className={`text-sm uppercase tracking-wider transition-colors ${
                    selectedregion === region
                      ? 'text-blue-400'
                      : 'text-gray-300 hover:text-blue-400'
                  }`}
                >
                  {region}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;