import { ImageType } from '../../types/image';

import image41 from '../../assets/desktop/newyork/DSCF2927.jpg';
import image42 from '../../assets/desktop/newyork/DSCF2930.jpg';
import image43 from '../../assets/desktop/newyork/DSCF3238.jpg';
import image44 from '../../assets/desktop/newyork/DSCF3283.jpg';
import image45 from '../../assets/desktop/newyork/DSCF3557.jpg';
import image46 from '../../assets/desktop/newyork/DSCF3756.jpg';

const newYorkDesktop: ImageType[] = [
  {
    id: '41',
    src: image41,
    alt: "Skyline view of New York City with the Empire State Building at the center.",
    region: "New York",
    tags: ["skyline", "empire state building", "cityscape", "new york"],
    type: "desktop"
  },
  {
    id: '42',
    src: image42,
    alt: "View of Central Park surrounded by skyscrapers from above.",
    region: "New York",
    tags: ["central park", "skyscrapers", "cityscape", "new york"],
    type: "desktop"
  },
  {
    id: '43',
    src: image43,
    alt: "Evening cityscape of New York City with lit-up buildings.",
    region: "New York",
    tags: ["evening", "cityscape", "lights", "new york"],
    type: "desktop"
  },
  {
    id: '44',
    src: image44,
    alt: "New York City at sunset with a focus on tall buildings.",
    region: "New York",
    tags: ["sunset", "buildings", "cityscape", "new york"],
    type: "desktop"
  },
  {
    id: '45',
    src: image45,
    alt: "Lower Manhattan skyline viewed across the Hudson River.",
    region: "New York",
    tags: ["lower manhattan", "skyline", "hudson river", "new york"],
    type: "desktop"
  },
  {
    id: '46',
    src: image46,
    alt: "Brooklyn Bridge with the New York City skyline in the background.",
    region: "New York",
    tags: ["brooklyn bridge", "skyline", "new york"],
    type: "desktop"
  }
];

export default newYorkDesktop;
