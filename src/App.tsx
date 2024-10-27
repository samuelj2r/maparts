import { useState } from 'react';
import Header from './components/Header';
import ImageGrid from './components/ImageGrid';
import SearchBar from './components/SearchBar';
import { useImages } from './hooks/useImages';

const App = () => {
  const [deviceType, setDeviceType] = useState<'desktop' | 'mobile'>('desktop');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedregion, setSelectedregion] = useState<string | null>(null);
  const { images, loading } = useImages(deviceType);

  const handleTagClick = (tag: string) => {
    setSearchQuery(tag);
    setSelectedregion(null); // Limpiar filtro de región si se hace clic en un tag
  };

  const handleRegionClick = (region: string) => {
    setSelectedregion(region);
    setSearchQuery(''); // Limpiar la búsqueda si se selecciona una región
  };

  const filteredImages = images.filter((image) => {
    const matchesSearch = !searchQuery.trim() || 
      image.alt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      image.region.toLowerCase().includes(searchQuery.toLowerCase()) ||
      image.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesregion = !selectedregion || image.region === selectedregion;

    return matchesSearch && matchesregion;
  });

  return (
    <div className="min-h-screen bg-[#0a0b0d]">
      <Header 
        deviceType={deviceType} 
        onDeviceChange={setDeviceType}
        selectedregion={selectedregion}
        onregionSelect={setSelectedregion}
      />
      <SearchBar searchQuery={searchQuery} onSearchChange={setSearchQuery} />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <ImageGrid 
          images={filteredImages} 
          loading={loading} 
          deviceType={deviceType} 
          onTagClick={handleTagClick}
          onRegionClick={handleRegionClick}
        />
      </main>
    </div>
  );
};

export default App;
