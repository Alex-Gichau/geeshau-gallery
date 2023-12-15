import React from 'react'
import './App.css';
import { Sidebar } from "./components/sidebar/Sidebar";
import { Magicnav } from './components/magicNav/Magicnav';
import { Footer } from "./components/footer/Footer";
import { Hero } from './components/hero/Hero';

const App = () => {
  return (
    <>
      <Sidebar/>
      <Magicnav/>
      <Footer/>
      <Hero/>
    </>
  );
}

export default App;
