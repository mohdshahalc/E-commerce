import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './Component/NavBar/NavBar'
import React from "react";
import { Routes,Route,useLocation } from 'react-router-dom'
import Home from './Component/Home/Home'
import Account from './Component/Account/Account'
import Signin from './Component/SignIn&SignUp/Signin'
import Footer from './Component/Home/Footer'
import Signup from './Component/SignIn&SignUp/Signup'
import Products from './Component/Products/Products'
import ProductDetails from './Component/Products/ProductDetails'
import Cart from './Component/Account/Cart'



function App() {
  const [count, setCount] = useState(0)
   const location = useLocation();
   
   

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='' element={<Home/>} />
        <Route path='account' element={<Account/>} />
        <Route path='cart' element={<Cart/>} />
        <Route path='products' element={<Products />} />
         <Route path='ProductDetails/:pID' element={<ProductDetails />} />
         <Route path='cart' element={<Cart />} />
        
        <Route path='signin' element={<Signin/>} />
        <Route path='signup' element={<Signup />}/>
      </Routes>

      {location.pathname !== '/cart' &&  <Footer />}
     
    </>
  )
}

export default App
