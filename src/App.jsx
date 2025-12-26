import React from 'react'
import { Routes, Route } from 'react-router-dom'

//pages

import Home from "./pages/Home"
import Products from "./pages/Products"
import Cart from "./pages/Cart"
import Payment from "./pages/Payment"
import Login from "./pages/auth/Login"
import Signup from "./pages/auth/Signup"


// Layout

import MainLayout from "./layout/MainLayout"

export default function App() {
  return (
    
      <MainLayout>
        <Routes>
          <Route path="/" element = {<Home />} />
          <Route path="/products" element = {<Products />} />
          <Route path="/cart" element = {<Cart />} />
          <Route path="/payment" element = {<Payment />} />
          <Route path="/login" element = {<Login />} />
          <Route path="/signup" element = {<Signup />} />
        </Routes>
      </MainLayout>
    
  )
  }
