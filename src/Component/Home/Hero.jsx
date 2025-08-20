import React from 'react'
import { NavLink } from 'react-router-dom'

function Hero() {
  return (
    <div className="relative">
      <img 
        src="/bgimage.jpg" 
        className="w-full h-[60vh] sm:h-[80vh] md:h-screen object-cover" 
        alt="Luxury Home"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black/40 space-y-4">
        <h1 className="text-7xl font-bold font-['Cormorant_Garamond']">Luxury Home</h1>
        <p className="text-xl font-['Cormorant_Garamond']">Discover premium collections at the best price</p>
        <NavLink to='/products' className="bg-white text-black px-6 py-2 rounded-lg transform transition duration-300 hover:scale-105 hover:bg-gray-300">
         Explore the collections
        </NavLink>

      </div>
    </div>
  )
}

export default Hero

