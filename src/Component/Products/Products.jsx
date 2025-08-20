import React, { useEffect, useState } from 'react'

function Products() {
      const[product,setProducts]=useState([])

    useEffect(()=>{
        fetch(`https://furniture-api.fly.dev/v1/products?limit=10`)
  .then(response => response.json())
  .then(data =>  setProducts(data.data))
  .catch(error => console.error('Error:', error));

    },[])
  return (
   
  <div className="max-w-7xl mx-auto px-6 py-10">
  <h2 className="text-2xl font-bold text-gray-800 mb-8">Our Products</h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
    {product.map((item, key) => (
      <div 
        key={key} 
        className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden flex flex-col">

        {/* <div className="w-full h-48 overflow-hidden">
  <img src={item.image_path} alt={item.name} className="w-full h-auto rounded-t-2xl"/>

</div> */}

<div className="w-full h-60 overflow-hidden rounded-t-2xl">
  <img 
    src={item.image_path} 
    alt={item.name} 
    className="w-full h-full object-cover hover:scale-105 transition duration-300"
/>
</div>


        {/* Content */}
        <div className="p-4 flex flex-col flex-grow">
          <h3 className="text-lg font-semibold text-gray-800 mb-1 truncate">
            {item.name}
          </h3>
          <p className="text-sm text-gray-600 line-clamp-2 flex-grow">
            {item.description}
          </p>
          <div className="mt-3 flex items-center justify-between">
            <h5 className="text-xl font-bold text-indigo-600">${item.price}</h5>
            <button className="px-3 py-1 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>


  )
}

export default Products
