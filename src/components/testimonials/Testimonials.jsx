import React from 'react'
import './testimonials.css'
import { Swiper, SwiperSlide } from 'react';

export const Testimonials = () => {
  return (
    <Swiper
      slidesPerView={3}
      breakpoints={{ 768: { slidesPerView: 4 } }}
      on={{
        slideChange: () => console.log('slide changed'),
        progress: (s, progress) => console.log(`progress is ${progress}`),
      }}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
    </Swiper>
  )
}