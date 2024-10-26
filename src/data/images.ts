import { ImageType } from '../types/image';


//DESKTOP
import alpsDesktop from './desktop/alps-desktop';
import japanDesktop from './desktop/japan-desktop';
import icelandDesktop from './desktop/iceland-desktop';



import alpsMobile from './mobile/alps-mobile';

export const images: ImageType[] = [
 ...alpsDesktop,
 ...japanDesktop,
 ...icelandDesktop,
 ...alpsMobile
];