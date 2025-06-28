import React from 'react'
import "./hero.css"
import heroImage from "../../assets/hero.png"
import {Buttons} from "../../assets/buttons/Buttons"

export const Hero = () => {
  return (
    <header className='main-container'>
      <div className='hero-wrapper'>
        <div className="hero-title">
          <h1 className='hero-text'>The New Age of Design With Geeshau Art</h1>
          <p className="hero-details">Geeshau Art is a graphics design and branding agency that seamlessly blends creativity and innovation to bring your ideas to life.<b>We specialize in creating unique and memorable designs tailored to your business needs.</b></p>
          <div className="buttons-container">
            <Buttons />
          </div>
        </div>
        <div className="hero-img">
          <img src={heroImage} alt="Hero" />
          </div>
      </div>
    </header>
  )
}