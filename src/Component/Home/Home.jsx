import React from 'react'
import Hero from './Hero'

import { GiSofa } from "react-icons/gi";
import { MdOutlineDesignServices } from "react-icons/md";
import { FaTruckFast } from "react-icons/fa6";
import { BiSupport } from "react-icons/bi";


function Home() {
  return (
    <div>
      <Hero />

      <div className="max-w-7xl h-[30rem] mx-auto  relative m-6 px-4 sm:px-6 py-6 rounded-lg shadow-lg overflow-hidden">
        <img 
          src="/Sofa.png" 
          className="w-full h-full object-fill rounded-lg" 
          alt="sofa" />

        <div className="absolute inset-0 flex flex-col items-start justify-center text-left pl-15 text-black">
     <h2 className="text-5xl text-white md:text-6xl font-bold mb-4 drop-shadow-lg tracking-wide font-['Cormorant_Garamond']">
     Living Room</h2>

    <p className="mb-6 max-w-md text-lg md:text-xl text-gray-200 leading-relaxed drop-shadow font-['Cormorant_Garamond']">
    Transform your living room into a sanctuary of style and warmth. 
    Discover timeless furniture and curated décor designed to inspire 
    comfort and sophistication in every corner of your home.</p>

          <button className="bg-white text-black px-6 py-2 rounded-lg transform transition duration-300 hover:scale-105 hover:bg-gray-300">
             Explore Living Room
          </button>

        </div>
      </div>


<section className="py-16 bg-gray-50">
  <div className="max-w-7xl mx-auto px-6 text-center">
    <h2 className="text-4xl md:text-5xl font-bold mb-12 font-['Cormorant_Garamond'] text-gray-800">
      Why Choose Nestero?
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
      
      <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition hover:-translate-y-1 duration-300 text-center">
        <GiSofa className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
        <h1 className="text-xl font-semibold mb-2">Premium Quality Materials</h1>
        <p className="text-gray-600 text-sm">
          Crafted with durable and sustainable materials for long-lasting comfort.  
          Strict quality checks ensure the best for your home.
        </p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition hover:-translate-y-1 duration-300 text-center">
        <MdOutlineDesignServices className="w-12 h-12 text-purple-600 mx-auto mb-4" />
        <h1 className="text-xl font-semibold mb-2">Modern & Timeless Designs</h1>
        <p className="text-gray-600 text-sm">
          From cozy living rooms to elegant décor, we bring global-inspired designs  
          that balance style with everyday comfort.
        </p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition hover:-translate-y-1 duration-300 text-center">
        <FaTruckFast className="w-12 h-12 text-green-600 mx-auto mb-4" />
        <h1 className="text-xl font-semibold mb-2">Fast & Reliable Delivery</h1>
        <p className="text-gray-600 text-sm">
          Safe and on-time delivery with easy tracking.  
          Hassle-free logistics for worry-free shopping.
        </p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition hover:-translate-y-1 duration-300 text-center">
        <BiSupport className="w-12 h-12 text-blue-600 mx-auto mb-4" />
        <h1 className="text-xl font-semibold mb-2">Customer-First Support</h1>
        <p className="text-gray-600 text-sm">
          Our team is here for queries, returns, and styling advice.  
          We build trust and lasting relationships with our customers.
        </p>
      </div>

    </div>
  </div>
</section>

      
    </div>
  )
}


export default Home
