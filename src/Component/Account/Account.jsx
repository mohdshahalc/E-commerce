import { Timer } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import { MdAccountCircle } from "react-icons/md";
import { NavLink, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';

function Account() {
  const [loged,setLoged]=useState(false)
    const[user,Setusers]=useState([])
  const navigate=useNavigate()
  

useEffect(()=>{
  const check=JSON.parse(localStorage.getItem("logined"))
  if(check){
     setLoged(true)
    Setusers(check)
  }},[])

const handleSignOut=()=>{
  swal({
  title: "Are you sure?",
  text: " Are you sure you want to log out?",
  icon: "warning",
  buttons: true,
  dangerMode: true,})
.then((willDelete) => {
  if (willDelete) {
    swal(" You have been logged out successfully. See you soon!", {
      icon: "success",buttons:false,timer:1000});
     localStorage.removeItem("logined")
     setLoged(false)
  }
});  
}

  return (
    <div>
   
     {loged?(
     <div className="max-w-5xl mx-auto min-h-screen flex items-center justify-center p-6 bg-gray-100 my-3">
  <div className="w-full bg-white shadow-lg rounded-2xl p-8 space-y-8 text-center">
    <div>
      <MdAccountCircle size={120} className="mx-auto text-black-600" />
      <h1 className="mt-4 text-3xl font-semibold text-gray-800">{user.name}</h1>
    </div>

   
    <div className="grid grid-cols-2 gap-6">
      <div className="p-6 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition">
        <p className="text-2xl font-bold text-gray-800">12</p>
        <p className="text-gray-600">View Orders</p>
      </div>
      <div className="p-6 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition" onClick={()=>navigate('/cart')}>
        <p className="text-2xl font-bold text-gray-800">{user.cart.length}</p>
        <p className="text-gray-600">Cart Items</p>
      </div>
      <div className="p-6 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition" onClick={()=>navigate('/wishlist')}>
        <p className="text-2xl font-bold text-gray-800">{user.wishlist.length}</p>
        <p className="text-gray-600">Wishlist</p>
      </div>
      <div className="p-6 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition">
        <p className="text-2xl font-bold text-gray-800">120</p>
        <p className="text-gray-600">Reward Points</p>
      </div>
    </div>

    
    <div className="space-y-3 text-left">
      <p className="text-gray-700">
        <span className="font-semibold">Email:</span> {user.email}
      </p>
      <p className="text-gray-700">
        <span className="font-semibold">Phone:</span> {user.phone}
      </p>
    </div>

    
    <div>
      <button onClick={handleSignOut} className="px-8 py-3 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition">
        Log Out
      </button>
    </div>
    </div>
  </div>):( <div className="flex flex-col items-center justify-center py-16 h-screen">
    <p className="text-gray-500 text-lg sm:text-xl mb-4"> Please log in to continue</p>
    <NavLink to="/signin" className="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 transition font-medium">Sign In</NavLink>
  </div>)}
    
    
  
</div>

  )
}

export default Account
