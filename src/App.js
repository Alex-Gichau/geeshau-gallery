import React from 'react'
import './App.css';
import { Sidebar } from "./components/sidebar/Sidebar";
import { Magicnav } from './components/magicNav/Magicnav';
import { Footer } from "./components/footer/Footer";
import { Hero } from './components/hero/Hero';
import { Header } from './components/header/Header';
import { Testimonials } from './components/testimonials/Testimonials';
import { Navigation } from './components/navigation/Navigation';

const App = () => {
  return (
    <>
    <div className='grid-container'>
      {/* <div className='grid-item-1'><Header/></div> */}
      <div className='grid-item-1'><Navigation/></div>
      <div className='grid-item-2'><Sidebar/></div>
      <div className='grid-item-3'><Hero/></div>
      {/* <div className='grid-item-4'><Testimonials/></div> */}
      <div className='grid-item-5'><Footer/></div>
      </div>
    </>
  );
}

export default App;
