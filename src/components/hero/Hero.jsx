import React from 'react';
import './hero.css';
import logo from "../../assets/Geeshau-logo.png"

import { Swiper,SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverFlow, Pagination, Navigation } from 'swiper';

export const Hero = () => {
  return (
    <div className='header'>
      <div className="header-container">
        <div className="header-left">
          
          {/* <h4>THE BEST IN THE MARKET</h4>
          <h1>Take Your Brand to the Next Level</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, quam ipsa? Facere, voluptatum quisquam. Enim assumenda vel, placeat commodi cupiditate maxime animi repellendus iure asperiores explicabo! Minus nemo iure consequatur?</p> */}

          <div className="container">
            <h1 className="heading">Gallery Pictures</h1>
            <Swiper>
              <SwiperSlide
              effect={'coverflow'}
              grabcursor={true}
              centeredSlides={true}
              loop={true}
              slidesPerView={'auto'}
              coverflowEffect={{
                rotate:0,
                stretch:0,
                depth:100,
                modifier:2.5,
              }} 
              pagination={{el:'.swiper-pagination', clickable:true}}
              navigation={{
                nextEl:'swiper-button-next',
                prevEl:'swiper-button-prev',
                clickable:'true',
              }}
              module={[EffectCoverFlow, Pagination, Navigation]}
              className='swiper-container'
              >
                <img src={logo} alt="logo"/>
              </SwiperSlide>

              <SwiperSlide>
                <img src={logo} alt="logo"/>
              </SwiperSlide>

              <SwiperSlide>
                <img src={logo} alt="logo"/>
              </SwiperSlide>

              <SwiperSlide>
                <img src={logo} alt="logo"/>
              </SwiperSlide>

              <SwiperSlide>
                <img src={logo} alt="logo"/>
              </SwiperSlide>

              <div className="slider-controller">
                <div className="swiper-button-prev slider-arrow">
                  <ion-icon name="arrow-back-outline"></ion-icon>
                </div>
                <div className="swiper-button-next slider-arrow">
                  <ion-icon name="arrow-forward-outline"></ion-icon>
                </div>

                <div className="swiper-pagination"></div>

              </div>

            </Swiper>
          </div>
          

        </div>
      </div>

      <div className="header-right">
        <div className="circle"></div>
        <div className="header-img">
          {/* <img src={logo} alt="" /> */}
        </div>
      </div>

    </div>
  );
};
