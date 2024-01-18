import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { Sidebar } from "./components/sidebar/Sidebar";
// import { Magicnav } from './components/magicNav/Magicnav';
// import { Footer } from "./components/footer/Footer";
import { Hero } from './components/hero/Hero';
import { ProductDetails } from './components/productDetails/ProductDetails';
// import { Header } from './components/header/Header';
// import { Testimonials } from './components/testimonials/Testimonials';
// import { Navigation } from './components/navigation/Navigation';
// import { Ratings } from "./components/testimonials/Ratings"

const App = () => {
  return (
    <BrowserRouter>
        <Routes className='grid-container'>
          {/* <div className='grid-item-1'><Header/></div> */}
          {/* <div className='grid-item-1'><Navigation/></div> */}
          {/* <div className='grid-item-2'><Sidebar/></div> */}
          <Route className='grid-item-3'path='/' element={<Hero/>}/>
          <Route path='/:productItemCode' element={<ProductDetails/>}/>
          {/* <div className='grid-item-4'><Ratings/></div> */}
          {/* <div className='grid-item-5'><Footer/></div> */}
        </Routes>
    </BrowserRouter>
  );
};

export default App;
