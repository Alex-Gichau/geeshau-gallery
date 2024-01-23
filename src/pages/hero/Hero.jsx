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
        <div className="search-bar"></div>
          {productsData.map((productsData) => (
            <Link to={`/${productsData.itemCode}`} key={productsData.itemCode} className='product-link-wrapper'>
              <li className="product-card">
                <div className="product-img"/>
                <div className="product-title-container">
                  <p className="product-code">{productsData.itemCode}</p>
                  <p className="item-name">{productsData.products}</p>
                </div>
                <p className="product-description">{productsData.description}</p>
                <hr />
                <div className="card-footer">
                  <p className="charges">{productsData.sellingPrice}</p>
                  <ul className="format">
                    <li className="format-type">{productsData.formats - 1}</li>
                    <li className="format-type">{productsData.formats - 2}</li>
                    <li className="format-type">{productsData.formats - 3}</li>
                    <li className="format-type">3Hours</li>
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
