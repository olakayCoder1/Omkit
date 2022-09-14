import React, { useEffect, useState } from "react";
import {BrowserRouter as Router , Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Header from './components/header/Header';
import HomePage from "./pages/HomePage";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import hero from './assets/heroBg.png'
import Footer from "./components/Footer";
import AllProducts from "./pages/AllProducts";
import Carts from "./components/carts/Carts";


function App() {


  const [ showCart , setShowCart ] = useState(false)

  function handleCartShow(){
    setShowCart(!showCart)
  }

  return (
    <AnimatePresence exitBeforeEnter>
      <Router>
      <div className="w-screen   text-gray-700  bg-center bg-cover bg-no-repeat flex flex-col bg-gray-300 font-noto">
      {/* <div className="w-screen   text-gray-700  bg-center bg-cover bg-no-repeat flex flex-col bg-gray-300 font-noto"> */}
      {/* <div className="w-screen  h-full text-gray-700  bg-center bg-cover bg-no-repeat flex flex-col bg-gray-300 bg-blend-overlay font-noto" style={{ backgroundImage : `url(${hero})`}}> */}
      <Header toggleCart={showCart} setToggleCart={handleCartShow} />
      <main className="mt-14 md:mt-20 px-3 md:px-16 py-4 w-full">
        <Routes>
          <Route path="" element={<HomePage />} />
          <Route path="/the" element={<AllProducts />} />
        </Routes>
      </main>
      <Carts toggleCart={showCart} setToggleCart={handleCartShow}/>
      <Footer />
      </div>
      </Router>
    </AnimatePresence>
  );
}

export default App;
