import { useState, useEffect, useRef } from 'react';
import { Download, Tag as TagIcon, XCircle, ExternalLink, MapPin } from 'lucide-react';

interface ImageCardProps {
  src: string;
  alt: string;
  region: string;
  tags: string[];
  type: string;
  onTagClick: (tag: string) => void;
  onRegionClick: (region: string) => void;
}

const ImageCard = ({ src, alt, region, tags, type, onTagClick, onRegionClick }: ImageCardProps) => {
  const [imageError, setImageError] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageSize, setImageSize] = useState({ width: 0, height: 0 });

  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (isModalOpen && imageRef.current) {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        setImageSize({ width: img.width, height: img.height });
      };
    }
  }, [isModalOpen, src]);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = src;
    link.download = alt.toLowerCase().replace(/\s+/g, '-');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleOpenInNewWindow = () => {
    window.open(src, '_blank');
  };

  const handleImageError = () => {
    setImageError(true);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleBackgroundClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  const handleTagClick = (tag: string) => {
    onTagClick(tag);
    closeModal();
  };

  const handleRegionClick = (region: string) => {
    onRegionClick(region);
    closeModal();
  };

  return (
    <>
      <div 
        className="group relative overflow-hidden rounded-lg shadow-md transition-transform hover:scale-[1.03] bg-[#0a0b0d] border border-[#1f2128] cursor-pointer" 
        onClick={openModal}  // Mover el evento onClick aquí para asegurar que se registre
      >
        {!imageError ? (
          <img
            src={src}
            alt={alt}
            className="w-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
            style={type === 'desktop' ? { height: '250px' } : { height: '550px' }}
            loading="lazy"
            onError={handleImageError}
          />
        ) : (
          <div className="w-full h-[400px] flex items-center justify-center bg-[#1f2128] text-gray-400">
            Image unavailable
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <div className="flex flex-wrap gap-2 mb-3">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  onClick={(e) => { e.stopPropagation(); onTagClick(tag); }} // Evitar abrir el modal al hacer clic en tags
                  className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 cursor-pointer hover:bg-blue-200"
                >
                  <TagIcon className="w-3 h-3 mr-1" />
                  {tag}
                </span>
              ))}
            </div>
            <div 
              onClick={(e) => { e.stopPropagation(); onRegionClick(region); }} // Evitar abrir el modal al hacer clic en la región
              className="flex items-center text-sm font-semibold text-white cursor-pointer hover:text-blue-400 mb-2"
            >
              <MapPin className="h-4 w-4 mr-1 text-blue-500" />
              <span>{region}</span>
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90"
          onClick={handleBackgroundClick}
        >
          <div className="relative p-6 bg-[#1f1f1f] rounded-lg shadow-xl max-w-4xl w-full mx-4">
            <div className="flex justify-between items-start mb-4">
              <div className="flex flex-wrap items-center gap-3">
                <div 
                  onClick={() => handleRegionClick(region)} 
                  className="flex items-center text-sm font-semibold text-white cursor-pointer hover:text-blue-400"
                >
                  <MapPin className="h-4 w-4 mr-1 text-blue-500" />
                  <span>{region}</span>
                </div>
                {tags.map((tag, index) => (
                  <span
                    key={index}
                    onClick={() => handleTagClick(tag)}
                    className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 cursor-pointer hover:bg-blue-200"
                  >
                    <TagIcon className="w-3 h-3 mr-1" />
                    {tag}
                  </span>
                ))}
              </div>
              <button
                onClick={closeModal}
                className="text-white hover:text-gray-300 transition-colors"
              >
                <XCircle className="h-8 w-8" />
              </button>
            </div>
            <img
              ref={imageRef}
              src={src}
              alt={alt}
              className="w-full max-h-[60vh] object-contain rounded-lg mb-4"
            />
            <p className="text-gray-400 text-sm text-center mb-4">
              {imageSize.width} x {imageSize.height} pixels
            </p>
            <div className="flex justify-center mt-6 space-x-4">
              <button
                onClick={handleDownload}
                className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-full text-sm transition-colors shadow-md"
              >
                <Download className="h-5 w-5" />
                <span>Download Image</span>
              </button>
              <button
                onClick={handleOpenInNewWindow}
                className="flex items-center space-x-2 bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-full text-sm transition-colors shadow-md"
              >
                <ExternalLink className="h-5 w-5" />
                <span>Open in New Window</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ImageCard;
