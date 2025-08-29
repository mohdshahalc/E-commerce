import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';

function ProductDetails() {
  const [data, setData] = useState(null);
  const { pID } = useParams();
  const navigate = useNavigate();
 

  useEffect(() => {
    fetch(`https://furniture-api.fly.dev/v1/products?limit=10`)
      .then(response => response.json())
      .then(res => {
        const item = res.data.find((search) => search.id === pID)
        setData(item);
      })
      .catch(error => console.error('Error:', error));
  }, [pID]);

  const loginUser=JSON.parse(localStorage.getItem("logined")) 
  const cartButton=loginUser && data?loginUser.cart?.some((item)=>item.id==data.id):false

  const handleCart=(data)=>{
      const loginUser=JSON.parse(localStorage.getItem("logined")) 
    if(!loginUser){
       swal("Oops!", "You can’t add this item without logging in.", {buttons: ["No", "Login"],})
       .then((yes)=>{
     if (yes) {
      navigate("/signin");
    }}) 
  return;  }
  const exits=loginUser.cart.some((item)=>item.id==data.id)
  if(!exits){
    loginUser.cart.push(data)
  localStorage.setItem("logined",JSON.stringify(loginUser))
  const users=JSON.parse(localStorage.getItem("users"))
  const update=users.map((item)=>item.password==loginUser.password?loginUser:item)
  localStorage.setItem("users",JSON.stringify(update))
  swal({text: "Item added to cart!",icon: "success",buttons: false,timer: 2500})}}

  const handleWishlist=(data)=>{
   const loginUser=JSON.parse(localStorage.getItem("logined"))
   if(!loginUser){
       swal("Oops!", "You can’t add this item without logging in.", {buttons: ["No", "Login"],})
       .then((yes)=>{
     if (yes) {
      navigate("/signin");
    }}) 
   

   

  return;  }
    const exits=loginUser.wishlist.some((item)=>item.id===data.id)
    if(!exits){
      loginUser.wishlist.push(data)
      localStorage.setItem("logined",JSON.stringify(loginUser))
      const users=JSON.parse(localStorage.getItem("users"))
      const update=users.map((user)=>user.password==loginUser.password?loginUser:user)
      localStorage.setItem("users",JSON.stringify(update))
        swal({text: "Item added to wishlist!",icon: "success",buttons: false,timer: 2500})}}


  if (!data) {
    return (<div className="flex items-center justify-center h-screen bg-gray-50">
      <p className="text-lg font-medium text-gray-500 animate-pulse"> Loading product... </p>
    </div>)}

  return (
    <div className="max-w-2xl mx-auto p-4">
      {/* Back Button */}
      <button 
        onClick={() => navigate(`/products`)} 
        className="mb-4 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition"
      >
        ← Back
      </button>

      <div className="bg-white rounded-2xl shadow-md p-5">
        
        {/* Full Image */}
        <div className="w-full overflow-hidden rounded-lg bg-gray-50 flex justify-center items-center">
          <img 
            src={data.image_path} 
            alt={data.name} 
            className="w-full max-h-[400px] object-contain" 
          />
        </div>

        {/* Content */}
        <div className="mt-6 flex flex-col">
          <h1 className="text-2xl font-bold text-gray-800">{data.name}</h1>
          <p className="text-base text-gray-600 mt-3">{data.description}</p>
          <p className="text-sm text-indigo-500 font-medium mt-2">{data.category}</p>

          {/* Prices */}
          <div className="mt-4 flex items-center space-x-3">
            <h3 className="text-lg font-semibold text-gray-500 line-through">
              ${data.price}
            </h3>
            <h4 className="text-xl font-bold text-indigo-600">
              ${data.discount_price}
            </h4>
          </div>

          {/* Extra Details */}
          <div className="mt-5 text-sm text-gray-600 space-y-1">
            <p><span className="font-medium">Weight:</span> {data.weight} kg</p>
            <p><span className="font-medium">Wood:</span> {data.wood_type}</p>
            <p><span className="font-medium">Dimensions:</span> 
              {data.dimensions.depth} x {data.dimensions.width} x {data.dimensions.height} cm
            </p>
          </div>

          {/* Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <button onClick={()=>{cartButton?navigate('/cart'):handleCart(data)}} className="flex-1 px-6 py-3 text-lg font-medium text-white bg-indigo-600 rounded-xl hover:bg-indigo-700 transition">
             {cartButton?"Go to Cart":" Add to Cart"}
            </button>
            <button onClick={()=>wishlist(data)} className="flex-1 px-6 py-3 text-lg font-medium text-indigo-600 border border-indigo-600 rounded-xl hover:bg-indigo-50 transition">
              Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails;
