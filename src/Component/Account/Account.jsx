
import React, { useEffect, useState } from 'react'
import { MdAccountCircle } from "react-icons/md";
import { NavLink, useNavigate } from 'react-router-dom';
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { GoGift } from "react-icons/go";




import Swal from 'sweetalert2';

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
  Swal.fire({
  title: "Are you sure?",
  text: "Are you sure you want to log out?",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, log out!"
}).then((result) => {
  if (result.isConfirmed) {
    Swal.fire({
      title: "Logged out!",
      text: "You have been logged out successfully. See you soon!",
      icon: "success",
      showConfirmButton: false,  
      timer: 2000 });
      localStorage.removeItem("logined")
      setLoged(false)
       window.location.reload();
  }
});

}

  return (
   <div>
  {loged ? (
    <div className="max-w-5xl mx-auto min-h-screen flex items-center justify-center px-6 bg-gray-50 my-3 rounded-xl shadow-lg">
      <div className="w-full bg-white shadow-xl rounded-2xl p-8 space-y-8 text-center">
       
        <div>
          <MdAccountCircle size={120} className="mx-auto text-gray-700" />
          <h1 className="mt-4 text-4xl font-semibold text-gray-800">{user.name}</h1>
        </div>

        {/* Dashboard Grid */}
      <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
  {/* Order Card */}
  <div
    className="p-6 bg-gray-200 rounded-xl shadow-md hover:shadow-lg transition transform hover:scale-105 duration-300 ease-in-out"
    onClick={() => navigate('vieworder')}
  >
    <p className="text-3xl font-bold text-gray-800">{user.order.length}</p>
    <p className="text-gray-600 flex items-center justify-center">
      <TbTruckDelivery className="mr-2" />
      View Orders
    </p>
  </div>

  {/* Cart Card */}
  <div
    className="p-6 bg-gray-200 rounded-xl shadow-md hover:shadow-lg transition transform hover:scale-105 duration-300 ease-in-out"
    onClick={() => navigate('/cart')}
  >
    <p className="text-3xl font-bold text-gray-800">{user.cart.length}</p>
    <p className="text-gray-600 flex items-center justify-center">
      <IoCartOutline className="mr-2" />
      Cart Items
    </p>
  </div>

  {/* Wishlist Card */}
  <div
    className="p-6 bg-gray-200 rounded-xl shadow-md hover:shadow-lg transition transform hover:scale-105 duration-300 ease-in-out"
    onClick={() => navigate('/wishlist')}
  >
    <p className="text-3xl font-bold text-gray-800">{user.wishlist.length}</p>
    <p className="text-gray-600 flex items-center justify-center">
      <FaRegHeart className="mr-2" />
      Wishlist
    </p>
  </div>

  {/* Reward Points Card */}
  <div
    className="p-6 bg-gray-200 rounded-xl shadow-md hover:shadow-lg transition transform hover:scale-105 duration-300 ease-in-out"
  >
    <p className="text-3xl font-bold text-gray-800">120</p>
    <p className="text-gray-600 flex items-center justify-center">
      <GoGift className="mr-2" />
      Reward Points
    </p>
  </div>
</div>


        {/* Contact Info */}
        <div className="space-y-3 text-left">
          <p className="flex items-center text-gray-700">
            <MdEmail className="text-blue-500 mr-2 text-lg" />
            <span className="font-semibold mr-1">Email:</span> {user.email}
          </p>

          <p className="flex items-center text-gray-700">
            <FaPhoneAlt className="text-green-500 mr-2 text-lg" />
            <span className="font-semibold mr-1">Phone:</span> {user.phone}
          </p>

          <p className="flex items-center text-gray-700">
            <FaHome className="text-red-500 mr-2 text-lg" />
            <span className="font-semibold mr-1">Address:</span> {user.address}
          </p>
        </div>

        {/* Log Out Button */}
        <div>
          <button
            onClick={handleSignOut}
            className="px-8 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition duration-300 ease-in-out"
          >
            Log Out
          </button>
        </div>
      </div>
    </div>
  ) : (
    <div className="flex flex-col items-center justify-center py-16 h-screen bg-gray-50">
      <p className="text-gray-500 text-lg sm:text-xl mb-4"> Please log in to continue</p>
      <NavLink
        to="/signin"
        className="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 transition font-medium duration-300 ease-in-out"
      >
        Sign In
      </NavLink>
    </div>
  )}
</div>


  )
}

export default Account
