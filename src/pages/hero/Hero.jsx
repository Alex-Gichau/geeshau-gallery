import React from 'react';
import { Link } from "react-router-dom"
import './hero.css';
import productsData from "./productsData.json";

export const Hero = () => {
  return (
    <div className='hero-container'>
      <div className="hero-banner">
        <div className="banner-wrapper">
        </div>
      </div>

      <div className="products">
        <div className="product-container">
        <div className="search-bar">

        </div>
          {productsData.map((productsData) => (
            <Link to={`/${productsData.itemCode}`} key={productsData.itemCode} className='product-link-wrapper'>
              <li className="product-card">
                <div className="product-img"/>
                <div className="product-title-container">
                  <p className="product-charge">{productsData.sellingPrice}</p>
                  <p className="item-name">{productsData.products}</p>
                </div>
                <p className="product-description">{productsData.description}</p>
                {/* <hr /> */}
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
          )
          )}

        </div>
      </div>
    </div>
  );
};
