export interface ImageType {
  id: string;
  src: string;
  alt: string;
  region: string;
  tags: string[];
  type: 'desktop' | 'mobile';
}