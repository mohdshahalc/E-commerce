import React, { useEffect, useState } from 'react'
import { useLocation,NavLink, useNavigate } from 'react-router-dom'

function Wishlist() {
  const [items,setItems]=useState([])
    const navigate=useNavigate()
    const location=useLocation()
    const data=location.state?.data

    useEffect(()=>{
     const data=JSON.parse(localStorage.getItem("wishlist")) || []
     setItems(data)
    },[])

    useEffect(()=>{
      if(data){
       const stored=JSON.parse(localStorage.getItem("wishlist")) || []
       const exsits=stored.some((item)=> item.id===data.id)
       if(!exsits){
        const updated=[...stored,data]
        localStorage.setItem("wishlist",JSON.stringify(updated))
        setItems(updated)
       }
        else{
           setItems(stored)
        }
      }
    },[data])

    const deleteItem=(id)=>{
    const store=JSON.parse(localStorage.getItem("wishlist")) || []
     const update=store.filter((item)=>item.id !== id)
     localStorage.setItem("wishlist",JSON.stringify(update))
     setItems(update)
    }
    
  return (
  <div className="min-h-screen flex  justify-center bg-gray-100 px-4 py-6 sm:px-6 lg:px-8">
  <div className="max-w-5xl w-full mx-auto">
    {
      items.length===0?(
        <div className="flex flex-col items-center justify-center py-16">
          <p className="text-gray-500 text-lg sm:text-xl mb-4 text-center">Your wishlist is empty 🛒</p>
          <NavLink 
            to="/products" 
            className="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 transition font-medium text-sm sm:text-base"
          >
            Shop Now
          </NavLink>
        </div>
      ):
      items.map((item,i)=>(

       <div
  key={i}
  className="flex flex-col sm:flex-row sm:items-center sm:justify-between 
             bg-white shadow-md rounded-lg py-4 mb-4 sm:p-6 lg:p-8
             items-center text-center sm:text-left"
>
  <div className="w-full sm:w-32 md:w-40 h-32 sm:h-28 md:h-32 flex-shrink-0 overflow-hidden rounded-md mx-auto sm:mx-0 mb-4 sm:mb-0">
    <img src={item.image_path} alt={item.name} className="w-full h-full object-cover" />
  </div>  

  <div className="flex flex-col flex-grow sm:px-4 w-full items-center sm:items-start">
    <h1 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800 mb-1">
      {item.name}
    </h1>
    {/* <h4 className="text-sm sm:text-base text-gray-600">{item.description}</h4> */}
    <p className="text-indigo-600 font-bold text-sm sm:text-base md:text-lg mt-1">
      ${item.discount_price}
    </p>
    <p className="text-gray-500 line-through text-xs sm:text-sm md:text-base">
      ${item.price}
    </p>   

    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-3 w-full gap-3">
      <div className="flex justify-center sm:justify-start text-xs sm:text-sm md:text-base text-green-600 font-medium gap-2 sm:gap-4">
        <span>You Saved</span>
        <span>${(item.price - item.discount_price).toFixed(2)}</span>
      </div>

      <div className="flex justify-center sm:justify-end gap-3 sm:gap-6">
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 sm:px-6 sm:py-2 rounded-md transition-colors text-sm sm:text-base">
          Add to cart
        </button>
        <button onClick={()=>deleteItem(item.id)} className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 sm:px-6 sm:py-2 rounded-md transition-colors text-sm sm:text-base">
          Remove
        </button>
      </div>
    </div>
  </div>
</div>

      ))
    }
  </div>
</div>


  )
}

export default Wishlist
