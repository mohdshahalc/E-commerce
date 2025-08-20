import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../../App.css';
import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        
      
        <h1 className="text-4xl font-bold">Nestero</h1>

      
        <div className="hidden md:flex items-center ml-40 gap-6">
          <NavLink to="/" className="hover:text-green-400">Home</NavLink>
          <NavLink to='/products' className="hover:text-green-400">Shop</NavLink>
          <NavLink to="/account" className="hover:text-green-400">Account</NavLink>
        </div>

      
        <div className="flex items-center gap-6">
         
          <NavLink to="/wishlist" className="relative group">
            <FaRegHeart className="text-2xl text-gray-300 transition-colors duration-300 group-hover:text-red-500" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-medium px-1.5 py-0.5 rounded-full">2</span>
          </NavLink>

          
          <NavLink to="/cart" className="relative group">
            <IoCartOutline className="text-3xl text-gray-300 transition-colors duration-300 group-hover:text-green-500" />
            <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs font-medium px-1.5 py-0.5 rounded-full">3</span>
          </NavLink>
        </div>

       
        <div className="hidden md:block">
          <NavLink to="/signin" className="px-4 py-2 bg-green-600 rounded hover:bg-green-700">Login</NavLink>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black px-4 pb-4 space-y-2">
          <NavLink to="/" className="block w-full px-4 py-2 hover:bg-gray-800 rounded">Home</NavLink>
          <NavLink className="block w-full px-4 py-2 hover:bg-gray-800 rounded">Shop</NavLink>
          <NavLink to="/account" className="block w-full px-4 py-2 hover:bg-gray-800 rounded">Account</NavLink>
          <NavLink to="/signin" className="block w-full px-4 py-2 bg-green-600 rounded hover:bg-green-700">Login</NavLink>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
