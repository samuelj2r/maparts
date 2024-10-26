import { useState, useEffect } from 'react';
import { ImageType } from '../types/image';
import { images } from '../data/images';

export const useImages = (deviceType: 'desktop' | 'mobile') => {
  const [filteredImages, setFilteredImages] = useState<ImageType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const filtered = images.filter(image => image.type === deviceType);
    setFilteredImages(filtered);
    setLoading(false);
  }, [deviceType]);

  return { images: filteredImages, loading };
};