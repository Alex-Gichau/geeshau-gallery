import React from 'react'
import "./hero.css"

export const Hero = () => {
  return (
    <div className='hero-wrapper'>
      <div className="hero-title">
        <h1>The New Age of</h1>
        <h1>Design</h1>
        <h1>is with Us</h1>
        <div className="buttons-container">
          <input type="button" className='explore-btn'
            name='Explore Artwork' />
          <input type="button" className='aboutus-btn' name='About Us' />
        </div>
      </div>
      <div className="hero-img">
      </div>
    </div>
  )
}