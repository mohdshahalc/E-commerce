import React from 'react'
import { NavLink } from 'react-router-dom'

function Signin() {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
      
      
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
        
        
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Sign In</h1>
        
       
        <form className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Username
            </label>
            <input type="text" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
              placeholder="Enter your username" required/>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input type="password" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
              placeholder="Enter your password" required/>
          </div>

          <button type="submit" className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition duration-300">
            Sign In
          </button>
        </form>

        
        <p className="text-sm text-gray-600 text-center mt-6">
          Don’t have an account?{" "}
          <NavLink to="/signup" className="text-green-600 font-medium hover:underline">
            Sign Up
          </NavLink>
        </p>
      </div>
    </div>
  )
}

export default Signin
