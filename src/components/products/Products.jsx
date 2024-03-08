import React, { useState } from 'react';
import { Link } from "react-router-dom"
import './products.css';
import productsData from "./productsData.json";
// import { Footer } from '../footer/Footer';
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { ProductCard } from '../../assets/productCard/ProductCard';

export const Products = () => {

  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    centerPadding: "60px"
  };

  return (
    // <Slider {...settings}>
      <div className='card-wrapper'>
        {productsData.map((productsData) => (
          <ProductCard key={productsData.itemCode} productsData={productsData}/>
        ))}
        </div>
    // </Slider>
  );
};
