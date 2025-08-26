import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

import swal from 'sweetalert';




const schema = Yup.object({
  name: Yup.string().min(3, " Name must be at least 3 characters").required("Name is required"),
  email: Yup.string().email("Invalid email format").required("Email is required"),
  phone: Yup.number().typeError(" Phone must be a number").required("Phone number is required"),
  password: Yup.string().min(6, "Password must be 6 characters").required("Password is required"),
  confirmPassword: Yup.string() .oneOf([Yup.ref("password"), null], "Passwords must match").required("Confirm password is required"),
});


function Signup() {
  const [users,Setusers]=useState([])
  const {handleSubmit,register,formState:{errors},reset}=useForm({resolver:yupResolver(schema),criteriaMode: "firstError"   })
  
  const onsubmit=(data)=>{
    const User=JSON.parse(localStorage.getItem("users")) || []
    const update=[...User,data]
    Setusers(update)
    localStorage.setItem("users",JSON.stringify(update))
    reset();
   swal("Welcome to Nestro!", "You registered successfully!", "success");
  }
  console.log(users);
  
  
  return (
    <div className="flex justify-center items-center bg-gray-100 h-screen">
      
      
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
        
       
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Sign Up
        </h1>

        <form className="space-y-5" onSubmit={handleSubmit(onsubmit)}>
          
         
          <div>
  <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
  <input
    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
    placeholder="Enter your name"
    {...register("name")}
  />
  {errors.name && (
    <p className="text-red-600 text-xs mt-1">{errors.name.message}</p>
  )}
</div>


          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
              placeholder="Enter your email"  {...register("email")} />
                             <p className="text-red-600 text-xs mt-1">{errors.email?.message}</p>

          </div>

         
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
            <input  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
              placeholder="Enter your phone number" {...register("phone")} />
                             <p  className="text-red-600 text-xs mt-1">{errors.phone?.message}</p>

          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input type="password" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
              placeholder="Enter your password" {...register("password")} />
                             <p  className="text-red-600 text-xs mt-1">{errors.password?.message}</p>

          </div>
         
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
            <input type="password" 
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"placeholder="Re-enter your password" 
              {...register("confirmPassword")}/>
                             <p  className="text-red-600 text-xs mt-1">{errors.confirmPassword?.message}</p>

          </div>

          
          <button type="submit" className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition duration-300">
            Create Account</button>
        </form>

       <p className="text-sm text-gray-600 text-center mt-6">
  Already have an account?{" "}
  <NavLink  to="/signin" className="text-green-600 font-medium hover:underline">Sign In </NavLink>
 
</p>

        
      </div>
    </div>
  )
}

export default Signup
