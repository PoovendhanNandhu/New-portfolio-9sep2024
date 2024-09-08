import React, { useState, useEffect } from "react";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home  from '../src/components/Home';
import About from '../src/components/About';
// import LayoutCards from '../src/components/portfolio';
import Portfolio from "./components/portfolio";
import Navbar from './components/Navbar';
import Error from "./components/404";
import Contact from "./components/Contact";

function App() {
  
  return (
    <>
      <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio/>} />
          <Route path="/contact" element={<Contact/>} />

          {/* make a 404 error route */}
          <Route path="*" element={<Error/>} />
          


          {/* Add more routes as needed */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
