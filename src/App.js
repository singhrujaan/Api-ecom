import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Products from './components/Products';
import { Routes, Route, Link } from "react-router-dom";
import ProductsInfo from './components/ProductsInfo';
import CartItems from './components/CartItems';
import Slider from './components/Slider';
import i18n from "i18next";
import { useTranslation, initReactI18next, Trans } from "react-i18next";
import translationsEn from './translation/en/enLanguage'
import translationsNep from './translation/nep/nepLanguage'

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: { translation: translationsEn },
      fr: { translation: translationsNep },
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: { escapeValue: false },
  });
function App() {
  
  const onChange = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <div className="App h-screen overflow-x-hidden">
      <Navbar onChange={onChange}/>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<Products/>} />
        <Route path="products/:id" element={<ProductsInfo/>} />
        <Route path="cart" element={<CartItems/>} />
        <Route path="favItems" element={<Slider/>} />
      </Routes>
    </div>
  );
}

export default App;
