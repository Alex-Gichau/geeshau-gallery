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
    <div className='header-wrapper'>
      <nav>
        <img src={image1} />
        <div className='nav-items'>
          <a href='#'>Portfolio</a>
          <a href='#'>About</a>
          <a href='#'>Contact</a>

          <div className='dropdown'>
            <button>What we design</button>
            <div className='menu'>
              <Swiper
                modules={[Pagination]}
                navigation
                loop
                slidesPerView={1}
                pagination={{ clickable: true }}
              >
                {slides?.map((slide) => (
                  <SwiperSlide key={slide.name1}>
                    <img src={slide.image1} />
                    <div>
                      <h2>{slide.name1}</h2>
                      <div className='links'>
                        {slide.items1?.map((items1) => (
                          <span>(items1)</span>
                        ))}
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
