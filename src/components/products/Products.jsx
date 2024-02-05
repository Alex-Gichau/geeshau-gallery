import React, { useState } from 'react';
import { Link } from "react-router-dom"
import './products.css';
import productsData from "./productsData.json";
// import { Footer } from '../footer/Footer';
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

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
    <Slider {...settings}>
      {productsData.map((productsData) => (
        <Link to={`/${productsData.itemCode}`} key={productsData.itemCode} className='product-link-wrapper'>
          <li className="product-card">
            <div className="product-img" />
            <div className="product-title-container">
              <p className="product-charge">{productsData.sellingPrice}</p>
              <p className="item-name">{productsData.products}</p>
            </div>
            <p className="product-description">{productsData.description}</p>
            <div className="card-footer">
              <p className="date">2 days ago</p>
              <ul className="format">
                <li className="format-type">JPG</li>
                <li className="format-type">PNG</li>
                <li className="format-type">PDF</li>
              </ul>
            </div>
          </li>
        </Link>
      ))}
    </Slider>
  );
};
