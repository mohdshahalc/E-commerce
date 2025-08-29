import React, { useEffect, useState } from 'react'
import { FaSearch } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

function Products() {
      const[products,setProducts]=useState([])
      const[search,setSearch]=useState("")
      const navigate=useNavigate()

    useEffect(()=>{
        fetch(`https://furniture-api.fly.dev/v1/products?limit=20`)
  .then(response => response.json())
  .then(data => setProducts(data.data))
  .catch(error => console.error('Error:', error));
},[])
   const filteredProducts = products.filter((item) =>
  item.name.toLowerCase().includes((search ?? "").toLowerCase()));

// useEffect(() => {
//   if (products.length === 0) {
//     fetch("https://furniture-api.fly.dev/v1/products?limit=20")
//       .then((res) => res.json())
//       .then((data) => {
//         setProducts(data.data);
//         localStorage.setItem("products", JSON.stringify(data.data));
//       })
//       .catch(console.error);
//   }
// }, []);




    if (products.length === 0) {
  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {Array.from({ length: 8 }).map((_, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col relative"
            style={{ animationDelay: `${idx * 0.1}s` }}
          >
            {/* Image placeholder */}
            <div className="relative w-full h-60 overflow-hidden">
              <div className="absolute inset-0 bg-gray-200 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer"></div>
              </div>
              <div className="absolute inset-0 bg-white/10 backdrop-blur-sm animate-glow"></div>
            </div>

            {/* Text placeholders */}
            <div className="p-4 flex flex-col gap-2 flex-grow">
              <div className="h-6 bg-gray-300 rounded w-3/4 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-300 via-gray-400 to-gray-300 animate-shimmer"></div>
              </div>
              <div className="h-4 bg-gray-300 rounded w-full relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-300 via-gray-400 to-gray-300 animate-shimmer"></div>
              </div>
              <div className="h-4 bg-gray-300 rounded w-5/6 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-300 via-gray-400 to-gray-300 animate-shimmer"></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style>
        {`
          /* Shimmer animation */
          @keyframes shimmer {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }
          .animate-shimmer {
            animation: shimmer 1.5s infinite;
            background-size: 200% 100%;
          }

          /* Subtle glow overlay */
          @keyframes glow {
            0%, 100% { opacity: 0.2; }
            50% { opacity: 0.5; }
          }
          .animate-glow {
            animation: glow 1.5s infinite;
          }

          /* Staggered card fade-in */
          @keyframes fadeInUp {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          div[style*="animationDelay"] {
            animation: fadeInUp 0.8s forwards;
          }
        `}
      </style>
    </div>
  );
}


  return (
   
  <div className="max-w-7xl mx-auto px-6 py-10 min-h-screen">

<div className="mb-6 flex items-center justify-between gap-2 sm:gap-4 flex-nowrap">
  {/* Search Box */}
  <div className="relative flex-1 min-w-[150px]">
    <input 
      type="text" value={search} onChange={(e)=>setSearch(e.target.value)}
      placeholder="Search products..."
      className="w-full pl-3 pr-10 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm sm:text-base"
    />
    <button className="absolute right-2 top-1/2 -translate-y-1/2 text-white bg-indigo-600 p-1.5 sm:p-2 rounded-md hover:bg-indigo-700 transition">
      <FaSearch />
    </button>
  </div>

  {/* Filter + Sort */}
  <div className="flex gap-2 sm:gap-3 shrink-0">
    <button className="px-2.5 sm:px-4 py-1.5 sm:py-2 text-sm sm:text-base border rounded-lg text-gray-700 hover:bg-gray-100 transition">
      Filter
    </button>
    <button className="px-2.5 sm:px-4 py-1.5 sm:py-2 text-sm sm:text-base border rounded-lg text-gray-700 hover:bg-gray-100 transition">
      Sort
    </button>
  </div>
</div>






  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
    {filteredProducts.map((item, key) => (
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
