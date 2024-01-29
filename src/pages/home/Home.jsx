import React from 'react'
import "./home.css"
import { Navigation } from "../../components/navigation/Navigation"
import { Hero } from "../../components/hero/Hero"
import { Orders } from '../../components/customerOrders/Orders'
import { Footer } from "../../components/footer/Footer"

export const Home = () => {
  return (
    <div className='home-container'>
      <Navigation/>
      <Hero/>
      <Orders/>
      <Footer/>
    </div>
  )
}
