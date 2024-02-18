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
          <h4 className='hero-hashtag'><b>#1</b> Best Social Media Designs</h4>
          <h1 className='hero-text'>The New Age of Design With Geeshau Art</h1>
          <p className="hero-details">Geeshau Art is a graphics design and branding agency that seamlessly blends creativity and innovation to bring your ideas to life.<b>We specialize in creating unique and memorable designs tailored to your business needs.</b></p>
          <div className="buttons-container">
            <input type="button" className='explore-btn'
              value='EXPLORE GALLERY' />
            <input type="button" className='aboutus-btn' value='ABOUT US'/>
          </div>
          <div className="counters">
            <span className="counter">
              <p><ReactCountup end={900} duration={4} delay={1} className='counter-value'/>+</p>
              <p>Orders Completed</p></span>
            <span className="counter"><p><ReactCountup end={112} duration={4} delay={1} className='counter-value'/>+</p><p>Our Clients</p></span>
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