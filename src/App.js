import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Products from './components/Products';
import { Routes, Route, Link } from "react-router-dom";
import ProductsInfo from './components/ProductsInfo';

function App() {
  return (
    <div className="App h-screen ">
      <Navbar/>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<Products/>} />
        <Route path="products/:id" element={<ProductsInfo/>} />
      </Routes>
    </div>
  );
}

export default App;
