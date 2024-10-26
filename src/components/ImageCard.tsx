import { useState } from 'react';
import { Download, Tag } from 'lucide-react';

interface ImageCardProps {
  src: string;
  alt: string;
  region: string;
  tags: string[];
}

const ImageCard = ({ src, alt, region, tags }: ImageCardProps) => {
  const [imageError, setImageError] = useState(false);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = src;
    link.download = alt.toLowerCase().replace(/\s+/g, '-');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div className="group relative overflow-hidden rounded-lg shadow-xl transition-transform hover:scale-[1.02] bg-[#0a0b0d] border border-[#1f2128]">
      {!imageError ? (
        <img
          src={src}
          alt={alt}
          className="w-full object-cover opacity-85 group-hover:opacity-100 transition-opacity"
          //style={{ height: '400px' }}
          loading="lazy"
          onError={handleImageError}
        />
      ) : (
        <div className="w-full h-[400px] flex items-center justify-center bg-[#1f2128] text-gray-400">
          Image unavailable
        </div>
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0b0d]/95 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <div className="flex flex-wrap gap-2 mb-3">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
              >
                <Tag className="w-3 h-3 mr-1" />
                {tag}
              </span>
            ))}
          </div>
          <p className="text-gray-300 text-sm mb-2"> {region}</p>
          <button
            onClick={handleDownload}
            className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-full text-sm transition-colors"
          >
            <Download className="h-4 w-4" />
            <span>Download</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;