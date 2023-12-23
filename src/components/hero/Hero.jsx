import React from 'react'
import "./hero.css";

export const Hero = () => {
  return (
    <div className='hero-wrapper'>
      <ul className="slider">
        <li className="item">
          <div className="content">
            <h2 className="title">Lossless Youths</h2>
            <p className="description">This is a picture that will morph into the background then switch to other features of the website</p>
            <button>Read More</button>
          </div>
        </li>
        <li className="item">
          <div className="content">
            <h2 className="title">Lossless Youths</h2>
            <p className="description">This is a picture that will morph into the background then switch to other features of the website</p>
            <button>Read More</button>
          </div>
        </li>
        <li className="item">
          <div className="content">
            <h2 className="title">Lossless Youths</h2>
            <p className="description">This is a picture that will morph into the background then switch to other features of the website</p>
            <button>Read More</button>
          </div>
        </li>
        <li className="item">
          <div className="content">
            <h2 className="title">Lossless Youths</h2>
            <p className="description">This is a picture that will morph into the background then switch to other features of the website</p>
            <button>Read More</button>
          </div>
        </li>
      </ul>
      <nav className="nav">
        <ion-icon className="prev"><span className='material-symbols-outlined'>Arrow_Back_iOS</span></ion-icon>
        <ion-icon className="prev"><span className='material-symbols-outlined'>Arrow_Forward_iOS</span></ion-icon>
      </nav>
    </div>
  )
}