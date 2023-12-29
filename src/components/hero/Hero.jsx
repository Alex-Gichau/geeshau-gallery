import React from 'react';
import './hero.css';
import logo from "../../assets/Geeshau-logo.png"

export const Hero = () => {
  return (
    <div className='header'>
      <div className="header-container">
        <div className="header-left">
          <h4>THE BEST IN THE MARKET</h4>
          <h1>Take Your Brand to the Next Level</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, quam ipsa? Facere, voluptatum quisquam. Enim assumenda vel, placeat commodi cupiditate maxime animi repellendus iure asperiores explicabo! Minus nemo iure consequatur?</p>
        </div>
      </div>

      <div className="header-right">
        <div className="circle"></div>
        <div className="header-img">
          <img src={logo} alt="" />
        </div>
      </div>

    </div>
  );
};
