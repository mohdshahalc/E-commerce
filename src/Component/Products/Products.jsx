import React, { useEffect, useState } from 'react'
import { FaSearch } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

function Products() {
      const[product,setProducts]=useState([])
      const[search,setSearch]=useState("")
      const navigate=useNavigate()

    useEffect(()=>{
        fetch(`https://furniture-api.fly.dev/v1/products?limit=20`)
  .then(response => response.json())
  .then(data => {console.log(data.data);
  
     setProducts(data.data)})
  .catch(error => console.error('Error:', error));

    },[])
  return (
   
  <div className="max-w-7xl mx-auto px-6 py-10">
   

  <div className="mb-6 flex justify-center">
  <div className="relative w-full sm:w-1/2">
    {/* Input */}
    <input
      type="text"
      placeholder="Search products..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="w-full pl-4 pr-12 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"/>

    <button className="absolute right-2 top-1/2 -translate-y-1/2 text-white bg-indigo-600 p-2 rounded-md hover:bg-indigo-700 transition">
      <FaSearch />
    </button>
  </div>
</div>




  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
    {product.map((item, key) => (
      <div key={key} className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden flex flex-col"
      onClick={()=>navigate(`/ProductDetails/${item.id}`)} >

<div className="w-full h-60 overflow-hidden rounded-t-2xl">
  <img src={item.image_path} alt={item.name} className="w-full h-full object-cover hover:scale-105 transition duration-300"/>
</div>

        <div className="p-4 flex flex-col flex-grow">
          <h3 className="text-lg font-semibold text-gray-800 mb-1 truncate">{item.name}</h3>
          <p className="text-sm text-gray-600 line-clamp-2 flex-grow">{item.description}</p>
         <div className="mt-3 flex items-center">
  <h5 className="text-lg font-semibold text-gray-500 line-through">
    ${item.price}
  </h5>
  <h5 className="ml-2 text-xl font-bold text-indigo-600">
    ${(item.price * 0.8).toFixed(2)}
  </h5>
</div>

        </div>
      </div>
    ))}
  </div>
</div>


  )
}


export default Products
