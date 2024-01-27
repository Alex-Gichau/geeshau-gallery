import React, { useState } from 'react';
import { Link } from "react-router-dom"
import './products.css';
import productsData from "./productsData.json";
import { Footer } from '../../components/footer/Footer';

export const Products = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredProducts = productsData.filter((product) => product.products.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className='hero-container'>
      <div className="hero-banner">
        <div className="banner-wrapper">
        </div>
      </div>

      <div className="products">
        <div className="product-container">
        <div className="search-bar">
          <h2 className="search-title">
            What Do You Need
          </h2>
          <input type='text' placeholder='Type to Search' value={searchTerm} onChange={handleSearch} className='search-input'/>

        </div>
        {filteredProducts.map((productsData) => (
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
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  );
};
