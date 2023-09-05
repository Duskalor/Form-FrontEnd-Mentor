import product1 from '../assets/images/image-product-1.jpg';
import product2 from '../assets/images/image-product-2.jpg';
import product3 from '../assets/images/image-product-3.jpg';
import product4 from '../assets/images/image-product-4.jpg';
import thumbnail1 from '../assets/images/image-product-1-thumbnail.jpg';
import thumbnail2 from '../assets/images/image-product-2-thumbnail.jpg';
import thumbnail3 from '../assets/images/image-product-3-thumbnail.jpg';
import thumbnail4 from '../assets/images/image-product-4-thumbnail.jpg';

export const imagesToSee = [
  { id: 1, image: product1 },
  { id: 2, image: product2 },
  { id: 3, image: product3 },
  { id: 4, image: product4 },
];

export const imagesThumbnail = [
  { id: 1, image: thumbnail1 },
  { id: 2, image: thumbnail2 },
  { id: 3, image: thumbnail3 },
  { id: 4, image: thumbnail4 },
];

export const products = [
  {
    id: 1,
    image: imagesToSee,
    Thumbnail: imagesThumbnail,
    title: 'Fall Limited Edition Sneakers',
    price: 125,
    count: 0,
  },
];
