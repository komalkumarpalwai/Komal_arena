// src/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
function Navbar() {
  return (
   
    <nav className="flex justify-between items-center bg-white p-4 ">
   <a href="/">  <img src="logo.jpg" alt="" srcset="" className='w-32 h-24 ml-24 mt-8' /></a>
     <Link
        to="/contact"
        className="text-lg text-gray-800 border border-gray-300 rounded-full px-4 py-2 transition duration-300 ease-in-out contact mr-24 mt-8"
      >
        Say Hello
      </Link>
    </nav>
  );
}

export default Navbar;
