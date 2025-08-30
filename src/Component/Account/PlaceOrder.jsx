import React, { useEffect } from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

   const schema = Yup.object({
     name: Yup.string().min(3, " Name must be at least 3 characters").required("Name is required"),
     type: Yup.string(),
     landmark: Yup.string().required("landmark is required"),
     city: Yup.string().required("city is required"),
     state: Yup.string().required("state is required"),
     number: Yup.number().typeError(" Phone must be a number").required("Phone number is required"),
     payment:Yup.string().required("payment method")
   });

function PlaceOrder(){
    const navigate=useNavigate()
    useEffect(()=>{
     const data=JSON.parse(localStorage.getItem("logined"))
     console.log(data);
     
    },[])

    const {handleSubmit,register,formState:{errors}}=useForm({resolver:yupResolver(schema)})
   const onsubmit=(data)=>{
    const user=JSON.parse(localStorage.getItem("logined"))
    const cartItems=user.cart
    const newOrder = {
           items: cartItems, 
           address: data };
    user.order.push(newOrder)
    user.cart=[]
    localStorage.setItem("logined",JSON.stringify(user))
     const users=JSON.parse(localStorage.getItem("users"))
     const update=users.map((item)=>item.email==user.email?user:item)
     localStorage.setItem("users",JSON.stringify(update))
      Swal.fire({
       title: "Thank you!",
       text: "Your Order placed",
       icon: "success",
     }).then(()=>navigate('/products'))
   }

   const user=JSON.parse(localStorage.getItem("logined"))

  return (
  <div className="min-h-screen flex items-start justify-center bg-gray-100 py-6">
  <div className="w-full max-w-5xl bg-white shadow-lg rounded-xl p-6 flex flex-col lg:flex-row gap-8">
    
    {/* Left Side: Form */}
    <form className="w-2/3 space-y-4" onSubmit={handleSubmit(onsubmit)}>
      <h2 className="text-2xl font-bold text-gray-800 text-center">Place Your Order</h2>

      <div>
        <label className="block text-sm font-medium text-gray-600">Full Name</label>
        <input type="text" placeholder="Enter your name" className="mt-1 w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-400 focus:outline-none" {...register("name")} />
           <p className="text-red-600 text-xs mt-1">{errors.name?.message}</p>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-600">Address Type</label>
        <select className="mt-1 w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"  {...register("type")}>
          <option>Home</option>
          <option>Work</option>
        </select>
           <p className="text-red-600 text-xs mt-1">{errors.type?.message}</p>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-600" >Landmark</label>
        <input type="text" placeholder="Enter landmark" className="mt-1 w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-400 focus:outline-none" {...register("landmark")} />
           <p className="text-red-600 text-xs mt-1">{errors.landmark?.message}</p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-600" >City</label>
          <input {...register("city")} type="text" placeholder="Enter city" className="mt-1 w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-400 focus:outline-none" />
           <p className="text-red-600 text-xs mt-1">{errors.city?.message}</p>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-600" >State</label>
          <input {...register("state")} type="text" placeholder="Enter state" className="mt-1 w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-400 focus:outline-none" />
          <p className="text-red-600 text-xs mt-1">{errors.state?.message}</p>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-600">Phone Number</label>
        <input  {...register("number")} type="tel" placeholder="Enter your phone number" className="mt-1 w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"  />
        <p className="text-red-600 text-xs mt-1">{errors.number?.message}</p>
      </div>

      <div>
        <span className="block text-sm font-bold text-gray-800 mb-1">Payment Method</span>
        <div className="space-y-2">
          <label className="flex items-center space-x-2">
            <input type="radio" name="payment" value="cash on delivery" className="text-blue-600" {...register("payment")}  />
            <span>Cash on Delivery</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="radio" name="payment" value="card" className="text-blue-600" {...register("payment")} />
            <span>Credit/Debit Card</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="radio" name="payment" value="upi" className="text-blue-600" {...register("payment")} />
            <span>UPI</span>
          </label>
          <p className="text-red-600 text-xs mt-1">{errors.payment?.message}</p>
        </div>
      </div>

      <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 rounded-lg shadow-md transition">
        Place Order
      </button>
    </form>

    {/* Right Side: Order Summary */}
    <div className="w-1/3 border-l pl-6 space-y-4">
      <h3 className="text-xl font-bold text-gray-800">Order Summary</h3>
      <div className="space-y-2 text-gray-700">
         </div>
        
        <div className="flex justify-between">
          <span>Item Price</span>
          <span>₹1500</span>
        </div>
        <div className="flex justify-between">
          <span>Discount</span>
          <span className="text-green-600">-₹200</span>
        </div>
        <div className="flex justify-between  font-medium">
          <span>Total Item</span>
          <span>4</span>
        </div>
        <div className="flex justify-between font-bold border-t pt-2">
          <span>Total</span>
          <span>₹1300</span>
        </div>
      </div>
    </div>

  </div>


  )
}

export default PlaceOrder
