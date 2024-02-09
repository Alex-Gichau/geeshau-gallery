import React from 'react'
import "./home.css"
import { Navigation } from "../../components/navigation/Navigation"
import { Hero } from "../../components/hero/Hero"
import { Orders } from '../../components/feedback/Feedback'
import { Footer } from "../../components/footer/Footer"
import { Products } from '../../components/products/Products'
import { ProductCard } from '../../assets/productCard/ProductCard'

export const Home = () => {
  return (
    <div className='home-container'>
      <Navigation/>
      <Hero/>
      <Orders/>
      <Products/>
      {/* <Footer/> */}
    </div>
  )
}
