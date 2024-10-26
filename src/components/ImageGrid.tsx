import { useState, useEffect, useRef, useCallback } from 'react';
import ImageCard from './ImageCard';
import { ImageType } from '../types/image';

interface ImageGridProps {
  images: ImageType[];
  loading: boolean;
  deviceType: 'desktop' | 'mobile';
}

const IMAGES_PER_PAGE = 9;

const ImageGrid = ({ images, loading, deviceType }: ImageGridProps) => {
  const [displayedImages, setDisplayedImages] = useState<ImageType[]>([]);
  const [page, setPage] = useState(1);
  const loader = useRef(null);

  const loadMore = useCallback(() => {
    const start = 0;
    const end = page * IMAGES_PER_PAGE;
    setDisplayedImages(images.slice(start, end));
  }, [images, page]);

  useEffect(() => {
    loadMore();
  }, [loadMore, images]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const first = entries[0];
        if (first.isIntersecting && displayedImages.length < images.length) {
          setPage((prevPage) => prevPage + 1);
        }
      },
      { threshold: 1.0 }
    );

    const currentLoader = loader.current;
    if (currentLoader) {
      observer.observe(currentLoader);
    }

    return () => {
      if (currentLoader) {
        observer.unobserve(currentLoader);
      }
    };
  }, [displayedImages.length, images.length]);

  const gridClass = deviceType === 'desktop'
    ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
    : 'grid-cols-1 md:grid-cols-3 lg:grid-cols-3';

  if (loading) {
    return (
      <div className="text-center text-gray-400 py-12">
        <p>Loading images...</p>
      </div>
    );
  }

  if (displayedImages.length === 0) {
    return (
      <div className="text-center text-gray-400 py-12">
        <p>No images found matching your search.</p>
      </div>
    );
  }

  return (
    <>
      <div className={`grid ${gridClass} gap-6`}>
        {displayedImages.map((image) => (
          <ImageCard
            key={image.id}
            src={image.src}
            alt={image.alt}
            region={image.region}
            tags={image.tags}
            type={image.type}
          />
        ))}
      </div>
      <div ref={loader} className="h-10 w-full" />
    </>
  );
};

export default ImageGrid;