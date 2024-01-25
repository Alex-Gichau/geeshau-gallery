import React from 'react'
import "./home.css"
import { Navigation } from "../../components/navigation/Navigation"
import { Hero } from "../../components/hero/Hero"

export const Home = () => {
  return (
    <div className='home-container'>
      {/* <Navigation/> */}
      <Hero/>
    </div>
  );
} ;
