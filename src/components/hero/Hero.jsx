import React from 'react'
import "./hero.css"
// import heroImag1 from "../../assets/hero.jpeg"
// import heroImage from "../../assets/ai image.jpeg"
import heroImage from "../../assets/ai image 2.jpeg"
import heroImage3 from "../../assets/ai image 3.jpeg"
import ReactCountup from "react-countup"

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
          <div className="counters">
            <span className="counter">
              <p><ReactCountup end={821} duration={3} delay={1} className='counter-value'/>+</p>
              <p>Orders Completed</p></span>
            <span className="counter"><p><ReactCountup end={112} duration={2} delay={1} className='counter-value'/>+</p><p>Our Clients</p></span>
            <span className="counter"><p><ReactCountup end={88} duration={3} delay={1} className='counter-value'/>+</p><p>Our Products</p></span>
          </div>
        </div>
        <div className="hero-img">
          <img src={heroImage} alt="Hero" />
        </div>
      </div>
    </header>
  )
}