import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { Sidebar } from "./components/sidebar/Sidebar";
// import { Magicnav } from './components/magicNav/Magicnav';
// import { Footer } from "./components/footer/Footer";
import { Home } from './pages/home/Home';
import { Products } from "./pages/products/Products";
import { ProductDetails } from "./pages/productDetails/ProductDetails";
// import { Header } from './components/header/Header';
// import { Testimonials } from './components/testimonials/Testimonials';
// import { Navigation } from './components/navigation/Navigation';
// import { Ratings } from "./components/testimonials/Ratings"

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/products' element={<Products/>}/>
          <Route path='/:productItemCode' element={<ProductDetails/>}/>
        </Routes>
    </BrowserRouter>
  );
};

export default App;
