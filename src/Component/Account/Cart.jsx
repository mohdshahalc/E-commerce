import React, { useEffect, useState } from "react";
import { useLocation,NavLink } from "react-router-dom";
import { MdDeleteOutline } from "react-icons/md";

function Cart() {
  const [items, setItems] = useState([]);
  const [count, setCount] = useState(1);
  
  
  

  useEffect(() => {
  const stored = JSON.parse(localStorage.getItem("logined")) || [];
  
  console.log(stored.cart);
  setItems(stored.cart);
  
}, []);



const deleteItem=(id)=>{
   const store=JSON.parse(localStorage.getItem("logined")) || []
    const update=store.cart.filter((item)=>item.id !== id)
    localStorage.setItem("logined",JSON.stringify(update));
    // localStorage.setItem("users",JSON.stringify(update));
    setItems(update)
}


  return (
    <div className="bg-gray-50 py-6 min-h-screen pb-60 sm:pb-56">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-xl sm:text-2xl font-semibold mb-6 text-gray-800">Your Cart </h1>

        {items.length === 0 ? (
             <div className="flex flex-col items-center justify-center py-16">
    <p className="text-gray-500 text-lg sm:text-xl mb-4">Your cart is empty 🛒</p>
    <NavLink to="/products" className="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 transition font-medium">Shop Now</NavLink>
  </div>
          
        ) : (
          items.map((item) => (
            <div key={item.name} className="flex flex-col sm:flex-row sm:items-center sm:justify-between bg-white shadow-md rounded-lg p-4 mb-4">
             
              <div className="w-full sm:w-28 h-32 sm:h-24 flex-shrink-0 overflow-hidden rounded-md mx-auto sm:mx-0 mb-4 sm:mb-0">
                <img src={item.image_path} alt={item.name} className="w-full h-full object-cover" />
              </div>

             
              <div className="flex flex-col flex-grow sm:px-4 w-full">
                <h1 className="text-base sm:text-lg font-semibold text-gray-800 mb-1">{item.name}</h1>
                <p className="text-indigo-600 font-bold text-sm sm:text-base">${item.discount_price}</p>
                <p className="text-gray-500 line-through text-xs sm:text-sm">${item.price}</p>

                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 mt-3 w-full">
                
                  <div className="flex items-center gap-3">
                    <button onClick={() => setCount((p) => p + 1)} className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 text-sm">+</button>
                    <p className="text-gray-700 font-medium">{count}</p>
                    <button onClick={() => (count > 1 ? setCount((p) => p - 1) : 1)}className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 text-sm">-</button>
                  </div>

                  <p className="font-medium text-gray-800 text-sm sm:text-base">${item.price * count}</p>

                  <button onClick={()=>deleteItem(item.id)} className="sm:ml-auto"><MdDeleteOutline className="text-red-500 w-6 h-6 hover:text-red-700" /></button>

                  <div className="flex justify-between text-xs sm:text-sm text-green-600 font-medium gap-2 sm:gap-4">
                    <span>You Saved</span>
                    <span>${((count * item.price) - (count * item.discount_price)).toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}

        
        {items.length > 0 && (
  <div className="fixed bottom-0 left-0 w-full bg-white border-t shadow-lg z-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
      <h1 className="text-base sm:text-lg font-semibold mb-3 text-gray-800">Summary</h1>

      <div className="flex justify-between text-gray-700 mb-2 text-sm sm:text-base">
        <span>Sub Items</span>
        <span>{items.length}</span>
      </div>

      <div className="flex justify-between font-bold text-indigo-600 text-lg sm:text-xl mb-1">
        <span>Final Total</span>
        <span>${items.price}</span>
      </div>

      <div className="flex justify-between text-green-600 font-medium text-xs sm:text-sm mb-3">
        <span>You Saved</span>
        <span>$100</span>
      </div>

      <button className="w-full px-4 sm:px-6 py-2 sm:py-3 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition text-sm sm:text-base">
        Place your order
      </button>
    </div>
  </div>
)}

      </div>
    </div>
  );
}

export default Cart;
