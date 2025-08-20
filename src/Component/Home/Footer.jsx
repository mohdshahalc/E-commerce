import React from 'react'

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Flex container */}
        <div className="flex flex-col md:flex-row md:justify-between gap-8">
          
          {/* About */}
          <div className="md:w-1/3">
            <h1 className="text-2xl font-bold mb-3">Nestero</h1>
            <p className="text-sm text-gray-300">
              Nestero is your one-stop destination for stylish and affordable home & living essentials. 
              From modern furniture and cozy bedding to elegant kitchenware and décor, we bring quality and comfort to every corner of your home. 
              Shop with confidence and transform your space today.
            </p>
          </div>

          {/* Customer Support */}
          <div>
            <h1 className="text-lg font-semibold mb-3">Customer Support</h1>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline hover:text-gray-300">Contact Us</a></li>
              <li><a href="#" className="hover:underline hover:text-gray-300">FAQs</a></li>
              <li><a href="#" className="hover:underline hover:text-gray-300">Shipping & Delivery</a></li>
              <li><a href="#" className="hover:underline hover:text-gray-300">Returns & Refunds</a></li>
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h1 className="text-lg font-semibold mb-3">Policies</h1>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline hover:text-gray-300">Privacy Policy</a></li>
              <li><a href="#" className="hover:underline hover:text-gray-300">Terms & Conditions</a></li>
              <li><a href="#" className="hover:underline hover:text-gray-300">Refund Policy</a></li>
            </ul>
          </div>

          {/* Contact & Socials */}
          <div>
            <h1 className="text-lg font-semibold mb-3">Contact Info</h1>
            <ul className="space-y-2 text-sm">
              <li>Nestero@gmail.com</li>
              <li>+0496 225566</li>
              <li>India</li>
            </ul>

            {/* Social Icons */}
            <div className="mt-6">
              <h1 className="text-lg font-semibold mb-3">Stay Connected</h1>
              <div className="flex space-x-4 text-xl">
                <a href="#"><i className="fa-brands fa-instagram hover:text-pink-500"></i></a>
                <a href="#"><i className="fa-brands fa-facebook hover:text-blue-500"></i></a>
                <a href="#"><i className="fa-brands fa-pinterest hover:text-red-500"></i></a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center  text-gray-400 text-sm">
          © 2025 Nestero. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
