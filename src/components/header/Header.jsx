import React from 'react';
import './header.css';


import image1 from '../../assets/Geeshau-logo.png';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

const slides = [
  {
    name: 'Social Media Designs',
    image: image1,
    items: [
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
    name: 'Social Media Designs',
    image: image1,
    items: [
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
    name: 'Social Media Designs',
    image: image1,
    items: [
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
          <div className='dropdown'>
            <button>Skills</button>
            <div className='menu'>
              <Swiper
                modules={[Pagination]}
                slidesPerView={1}
                pagination={{ clickable: true }}
              >
                {slides?.map((slide) => (
                  <SwiperSlide key={slide.name}>
                    <img src={slide.image1} />
                    <div>
                      <h2>{slide.name}</h2>
                      <div className='links'>
                        {slide.items?.map((item) => (
                          <span>(item)</span>
                        ))}
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
          <a href='#'>About</a>
          <a href='#'>Contact</a>
        </div>
      </nav>
    </div>
  );
};
