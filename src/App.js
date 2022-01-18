import React, {useState, useEffect} from 'react';
import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import Product from './Components/Product';



function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Product />
      <About />
      <Contact />
    </div>
  );
}

export default App;
