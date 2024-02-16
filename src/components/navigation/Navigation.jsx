import React from 'react';
import './navigation.css';
import geeshau from "../../assets/Geeshau-logo.png"

export const Navigation = () => {
  return (
    <header className='container'>
      <a href="#" className='nav__logo'>Geeshau</a>

      <div className="nav__menu" id='nav-menu'>
        <ul className="nav__list">
          <li className="nav__item">
            <a href="#" className='nav__link'>
              <span className='icon'></span>
              <span className="nav__name">Home</span>
            </a>
          </li>

          <li className="nav__item">
            <a href="#" className='nav__link'>
              <span className='icon'></span>
              <span className="nav__name">Home</span>
            </a>
          </li>

          <li className="nav__item">
            <a href="#" className='nav__link'>
              <span className='icon'></span>
              <span className="nav__name">Home</span>
            </a>
          </li>

          <li className="nav__item">
            <a href="#" className='nav__link'>
              <span className='icon'></span>
              <span className="nav__name">Home</span>
            </a>
          </li>

          <li className="nav__item">
            <a href="#" className='nav__link'>
              <span className='icon'></span>
              <span className="nav__name">Home</span>
            </a>
          </li>

          <li className="nav__item">
            <a href="#" className='nav__link'>
            <span className='icon'></span>
              <span className="nav__name">Home</span>
            </a>
          </li>
        </ul>
      </div>

      <img src={geeshau} alt="" className='nav__img'/>
      
    </header>
  );
};
