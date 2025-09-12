import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Vieworder() {
        const[order,setOrder]=useState([])
        const navigate=useNavigate()
    useEffect(()=>{
      const user=JSON.parse(localStorage.getItem("logined"))  
      setOrder(user.order)
    },[])
  return (
   <div className="min-h-screen max-w-3xl mx-auto px-4 pt-4">
  {order.length==0?(
    <div>
      <h1>You order nothing</h1>
      <button onClick={()=>navigate('products')}>shop now</button>
    </div>
  ):(
    order.map((item,i)=>(
      <div key={i} className="mb-8  bg-gray-200 px-4 py-2 rounded-xl shadow-md max-h-[500px] overflow-y-auto">
        <h2 className="text-xl font-bold text-gray-900 mb-1">Order {i + 1}</h2>

        <div className="flex flex-col  lg:flex-row gap-4">
          {/* Left: Order Items */}
          <div className="bg-white rounded-lg  shadow p-3 space-y-3 max-h-[400px] overflow-y-auto">
            {item.items.map((product, index) => (
              <div key={product.id} className="flex items-center border border-gray-200 rounded-lg p-2 hover:shadow-md transition">
                <div className="w-20 h-20 flex-shrink-0 overflow-hidden rounded-md">
                  <img src={product.image_path} alt={product.name} className="w-full h-full object-cover" />
                </div>
                <div className="ml-3 flex flex-col">
                  <h3 className="text-base font-semibold text-gray-800">Item {index + 1}: {product.name}</h3>
                  <p className="text-gray-400  text-sm">${product.price}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Address */}
          <div className="w-full lg:w-1/3 bg-white rounded-lg shadow p-3 flex flex-col gap-2 max-h-[400px] overflow-y-auto">
            <h3 className="text-lg font-semibold text-gray-800 ">Shipping Address</h3>
            <p className="text-gray-600"><span className="font-medium">Type:</span> {item.address.type}</p>
            <p className="text-gray-600"><span className="font-medium">Address:</span> {item.address.city},{item.address.state}</p>
            {/* <p className="text-gray-600"><span className="font-medium">State:</span> {item.address.state}</p> */}
            <p className="text-gray-600"><span className="font-medium">Phone:</span> {item.address.number}</p>
            <p className="text-black font-medium mt-2">Status: <span className="text-black font-semibold bg-yellow-400 px-2 py-1 rounded">Pending</span></p>
          </div>
        </div>
      </div>
    ))
  )}
</div>

  )
}

export default Vieworder
