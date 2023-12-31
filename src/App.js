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
      {/* <Sidebar/> */}
      {/* <Header/> */}
      {/* <Navigation/> */}
      {/* <Testimonials/> */}
      {/* <Magicnav/> */}
      {/* <Footer/> */}
      <Hero/>
    </>
  );
}

export default App;
