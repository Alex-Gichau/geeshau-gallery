import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/home/Home';
import { Browse } from './pages/browse/Browse';
import { ProductDetails } from "./pages/productDetails/ProductDetails";

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/browse' element={<Browse/>}/>
          <Route path='/:productItemCode' element={<ProductDetails/>}/>
        </Routes>
    </BrowserRouter>
  );
};

export default App;
