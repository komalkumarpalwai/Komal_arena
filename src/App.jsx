// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import Body from './components/Body';
function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<Body />
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
