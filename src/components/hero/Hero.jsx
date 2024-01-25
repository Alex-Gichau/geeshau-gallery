import React from 'react'
import "./hero.css"

export const Hero = () => {
  return (
    <header className='main-container'>
      <div className='hero-wrapper'>
        <div className="hero-title">
          <h4>#1 Best Social Media Designs</h4>
          <h1>The New Age of Design is With Us</h1>
          <p className="hero-details">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut iste harum est laborum, sit aspernatur ad rem possimus saepe officia, veniam non error id perferendis nisi. Perferendis voluptatem molestiae vero.</p>
          <div className="buttons-container">
            <input type="button" className='explore-btn'
              name='Explore Artwork' />
            <input type="button" className='aboutus-btn' name='About Us' />
          </div>
        </div>
        <div className="hero-img"></div>
        </div>
    </header>
  )
}