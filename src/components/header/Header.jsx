import React from 'react';
import './header.css';

import image1 from '../../assets/pen.svg';
import { Pagination } from 'swiper/modules';
import { Swiper,SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

const slides = [
  {
    name1: 'Designs for Social Media',
    image1: image1,
    items1: [
      'Posters',
      'Banners',
      'YouTube',
      'Webinar branding',
      'Posters',
      'Banners',
      'YouTube',
      'Webinar',
    ],
  },
  {
    name2: 'Designs for Print',
    image2: image1,
    items2: [
      'Posters',
      'Banners',
      'YouTube',
      'Webinar branding',
      'Posters',
      'Banners',
      'YouTube',
      'Webinar',
    ],
  },
  {
    name3: 'Designs for UI/UX',
    image3: image1,
    items3: [
      'Posters',
      'Banners',
      'YouTube',
      'Webinar branding',
      'Posters',
      'Banners',
      'YouTube',
      'Webinar',
    ],
  },
];

export const Header = () => {
  return (
    <div>
      
    </div>
    
  )
};
