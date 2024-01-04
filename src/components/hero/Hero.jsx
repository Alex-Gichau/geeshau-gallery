import React from 'react';
import './hero.css';
import logo from "../../assets/Geeshau-logo.png";
import banner from "../../assets/sample.JPG";
import productsData from "./productsData.json";

export const Hero = () => {
  return (
    <div className='hero-container'>
      <div className="hero-banner">
        <div className="banner-wrapper">
        <img src={banner} alt="" />
        </div>
      </div>

      <div className="products">
        <div className="product-container">
          {productsData.map((productsData) => (
            <li className="product-item" key={productsData.itemCode}>
                <img src='../../assets/sample.JPG' alt=''/>
              <p className="item-name">{productsData.products}</p>
              <p className="product-description">{productsData.description}</p>
              <p className="charges">{productsData.sellingPrice}</p>
              <p className="product-code">{productsData.itemCode}</p>
              <button>Order Now</button>
            </li>
          ))}          

          </div>
        </div>
      </div>
  );
};
