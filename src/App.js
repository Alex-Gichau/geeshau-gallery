import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { Sidebar } from "./components/sidebar/Sidebar";
// import { Magicnav } from './components/magicNav/Magicnav';
// import { Footer } from "./components/footer/Footer";
import { Hero } from './pages/hero/Hero';
import { ProductDetails } from './pages/productDetails/ProductDetails';
// import { Header } from './components/header/Header';
// import { Testimonials } from './components/testimonials/Testimonials';
// import { Navigation } from './components/navigation/Navigation';
// import { Ratings } from "./components/testimonials/Ratings"

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Hero/>}/>
          <Route path='/:productItemCode' element={<ProductDetails/>}/>
        </Routes>
    </BrowserRouter>
  );
};

export default App;
