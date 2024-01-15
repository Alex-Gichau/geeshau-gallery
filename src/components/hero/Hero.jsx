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
            <li className="product-card" key={productsData.itemCode}>
              <img src='../../assets/sample.JPG' alt='' />
              <div className="product-title-container">
                <p className="product-code">{productsData.itemCode}</p>
                <p className="item-name">{productsData.products}</p>
              </div>
              <p className="product-description">{productsData.description}</p>
              <hr/>
              <div className="card-footer">
                
                <p className="charges">Kes. {productsData.sellingPrice}</p>

                <ul className="format">
                  <li className="format-type">{productsData.formats - 1}</li>
                  <li className="format-type">{productsData.formats - 2}</li>
                  <li className="format-type">{productsData.formats - 3}</li>
                </ul>
              </div>

              <button>Order Now</button>
            </li>
          ))}

        </div>
      </div>
    </div>
  );
};
