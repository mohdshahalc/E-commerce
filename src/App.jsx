import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './Component/NavBar/NavBar'
import React from "react";
import { Routes,Route } from 'react-router-dom'
import Home from './Component/Home/Home'
import Account from './Component/Account/Account'
import Cart from './Component/Cart/Cart'
import Signin from './Component/SignIn&SignUp/Signin'
import Footer from './Component/Home/Footer'
import Signup from './Component/SignIn&SignUp/Signup'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='' element={<Home/>} />
        <Route path='account' element={<Account/>} />
        <Route path='cart' element={<Cart/>} />
        <Route path='signin' element={<Signin/>} />
        <Route path='signup' element={<Signup />}/>
      </Routes>
      <Footer />
    </>
  )
}

export default App
