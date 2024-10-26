import { ImageType } from '../types/image';

// Import all images from the assets directory
import dolomites1 from '../assets/mobile/dolomites-village.jpg';
import dolomites2 from '../assets/mobile/dolomites-lake-reflection.jpg';
import dolomites3 from '../assets/mobile/dolomites-boats.jpg';
import forestImage from '../assets/mobile/pine-tree.jpg';
import mountainLakeImage from '../assets/mobile/sorapis-lake.jpg';
import churchTowerImage from '../assets/mobile/church-tower.jpg';

export const images: ImageType[] = [
  
  {
    id: '5',
    src: dolomites1,
    alt: "Alpine village in the Dolomites",
    region: "Dolomites",
    tags: ["dolomites", "mountains", "village", "alps", "landscape"],
    type: "mobile"
  },
  {
    id: '6',
    src: dolomites2,
    alt: "Mountain lake reflection in the Dolomites",
    region: "Dolomites",
    tags: ["dolomites", "mountains", "lake", "reflection", "forest"],
    type: "mobile"
  },
  {
    id: '7',
    src: dolomites3,
    alt: "Wooden boats on Lago di Braies",
    region: "Dolomites",
    tags: ["dolomites", "mountains", "lake", "boats", "reflection"],
    type: "mobile"
  },
  {
    id: '8',
    src: forestImage,
    alt: "Green pine tree with blue flowers in a forest",
    region: "Dolomites",
    tags: ["nature", "forest", "pine tree", "blue flowers", "greenery"],
    type: "mobile"
},
 {
  id: '9',
  src: mountainLakeImage,
  alt: "Mountain peak with turquoise lake at the base",
  region: "Dolomites",
  tags: ["mountains", "lake", "nature", "turquoise water", "snow"],
  type: "mobile"
},
{
  id: '10',
  src: churchTowerImage,
  alt: "Church tower with green spire against a clear blue sky",
  region: "Tirol",
  tags: ["alps","church", "tower", "architecture", "spire", "blue sky"],
  type: "mobile"
}
];