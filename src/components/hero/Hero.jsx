import React from 'react'
import "./hero.css"
import heroImage from "../../assets/hero.jpeg"

export const Hero = () => {
  return (
    <header className='main-container'>
      <div className='hero-wrapper'>
        <div className="hero-title">
          <h4 className='hero-hashtag'>#1 Best Social Media Designs</h4>
          <h1 className='hero-text'>The New Age of Design With Geeshau Art</h1>
          <p className="hero-details">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut iste harum est laborum, sit aspernatur ad rem possimus saepe officia, veniam non error id perferendis nisi. Perferendis voluptatem molestiae vero.</p>
          <div className="buttons-container">
            <input type="button" className='explore-btn'
              value='Explore Artwork' />
            <input type="button" className='aboutus-btn' value='About Us'/>
          </div>
        </div>
        <div className="hero-img">
          <img src={heroImage} alt="Hero" />
        </div>
      </div>
    </header>
  )
}