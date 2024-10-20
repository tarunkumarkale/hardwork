import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contact from './FOLDER/Contact.jsx';
import Type from './FOLDER/TYPE.jsx';
import About from './FOLDER/About.jsx';
import Home from './FOLDER/Home.jsx';
import Navbar from './FOLDER/Navbar.jsx';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About   name='heoo tjahdfljhdfklj'/>} /> {/* Corrected paths */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/type" element={<Type />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
