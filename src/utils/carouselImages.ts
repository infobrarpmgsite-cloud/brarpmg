import { StaticImageData } from 'next/image';

// Import carousel images
import carousel2 from '@/assets/images/carousel/2.jpg';
import carousel3 from '@/assets/images/carousel/3.jpg';
import carousel4 from '@/assets/images/carousel/4.jpg';
import carousel5 from '@/assets/images/carousel/5.jpg';
import carousel6 from '@/assets/images/carousel/6.jpg';
import carousel7 from '@/assets/images/carousel/7.jpg';
import carousel8 from '@/assets/images/carousel/8.jpg';
import carousel9 from '@/assets/images/carousel/9.jpg';
import carousel10 from '@/assets/images/carousel/10.jpg';
import carousel11 from '@/assets/images/carousel/11.jpg';
import carousel12 from '@/assets/images/carousel/12.jpg';
import carousel13 from '@/assets/images/carousel/13.jpg';
import carousel14 from '@/assets/images/carousel/14.jpg';
import carousel15 from '@/assets/images/carousel/15.jpg';
import carousel16 from '@/assets/images/carousel/16.jpg';

// Collect all carousel images into an array
const allCarouselImages: StaticImageData[] = [
    carousel2, carousel3, carousel4, carousel5, carousel6,
    carousel7, carousel8, carousel9, carousel10, carousel11, carousel12,
    carousel13, carousel14, carousel15, carousel16,
];

// Export function to get carousel images
export function getCarouselImages(): StaticImageData[] {
    return allCarouselImages;
}

// Export the total count for reference
export const TOTAL_CAROUSEL_IMAGE_COUNT = allCarouselImages.length;
