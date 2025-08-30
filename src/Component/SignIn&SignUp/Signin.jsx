import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import * as Yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const schema=Yup.object({
  name:Yup.string().required("Enter user name"),
  password:Yup.string().required("Enter password")
})

function Signin() {
  // const[user,setUser]=useState()
  const navigate=useNavigate()

  const {handleSubmit,register,formState:{errors}}=useForm({resolver:yupResolver(schema)})

  useEffect(()=>{
    const users=localStorage.getItem("users")
    // console.log(users); 
  })

  const onsubmit=(LoginUser)=>{
    const UserList=JSON.parse(localStorage.getItem("users")) || []
    
    const update=UserList.find((users)=>users.name===LoginUser.name && users.password===LoginUser.password)
    console.log(update);
    
    if(update){
      localStorage.setItem("logined",JSON.stringify(update))
     Swal.fire({
  title: "Login Successful",
  text: "Welcome back!",
  icon: "success",
  showConfirmButton: false,
  timer: 1500
});

  setTimeout(() => {
    navigate('/products')
  }, 1500); }
    else{
   Swal.fire({
  title: "Error!",
  text: "Invalid username or password",
  icon: "error",
  confirmButtonText: "Try Again"
});
;}}

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Sign In</h1>
  
        <form className="space-y-5" onSubmit={handleSubmit(onsubmit)}>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Username
            <input  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
              placeholder="Enter your username" {...register("name")} />
              <p className="text-red-600 text-xs mt-1">{errors.name?errors.name?.message:""}</p>
            </label>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password
            <input type="password" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
              placeholder="Enter your password" {...register("password")} />
              <p className="text-red-600 text-xs mt-1">{errors.name?errors.password?.message:""}</p>
            </label>
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
