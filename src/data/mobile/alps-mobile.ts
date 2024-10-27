import { ImageType } from '../../types/image';

// Import all images from the assets directory
import dolomites1 from '../../assets/mobile/alps/dolomites-village.jpg';
import dolomites2 from '../../assets/mobile/alps/dolomites-lake-reflection.jpg';
import dolomites3 from '../../assets/mobile/alps/dolomites-boats.jpg';
import forestImage from '../../assets/mobile/alps/pine-tree.jpg';
import mountainLakeImage from '../../assets/mobile/alps/sorapis-lake.jpg';
import churchTowerImage from '../../assets/mobile/alps/church-tower.jpg';


export const alpsMobile: ImageType[] = [
  
  {
    id: '21',
    src: dolomites1,
    alt: "Alpine village in the Dolomites",
    region: "Alps",
    tags: ["dolomites", "mountains", "village", "alps", "landscape"],
    type: "mobile"
  },
  {
    id: '22',
    src: dolomites2,
    alt: "Mountain lake reflection in the Dolomites",
    region: "Alps",
    tags: ["dolomites", "mountains", "lake", "reflection", "forest"],
    type: "mobile"
  },
  {
    id: '23',
    src: dolomites3,
    alt: "Wooden boats on Lago di Braies",
    region: "Alps",
    tags: ["dolomites", "mountains", "lake", "boats", "reflection"],
    type: "mobile"
  },
  {
    id: '24',
    src: forestImage,
    alt: "Green pine tree with blue flowers in a forest",
    region: "Alps",
    tags: ["nature", "forest", "pine tree", "blue flowers", "greenery"],
    type: "mobile"
},
 {
  id: '25',
  src: mountainLakeImage,
  alt: "Mountain peak with turquoise lake at the base",
  region: "Alps",
  tags: ["mountains", "lake", "nature", "turquoise water", "snow"],
  type: "mobile"
},
{
  id: '26',
  src: churchTowerImage,
  alt: "Church tower with green spire against a clear blue sky",
  region: "Alps",
  tags: ["alps","church", "tower", "architecture", "spire", "blue sky"],
  type: "mobile"
}
];

export default alpsMobile;