import React from "react";
import "./style.css";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Contact from './pages/Contact';
import About from './pages/About';
import Navbar from './Navbar';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>      
      </BrowserRouter>
    </div>
  );
}
