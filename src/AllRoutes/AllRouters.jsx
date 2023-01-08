import React from 'react'

import { Route, Routes } from 'react-router-dom'

import Home from '../AllPages/Home'
import Login from '../AllPages/Login'
import Cart from '../AllPages/Cart'
import Rbxsubscription from '../AllPages/Rbxsubscription'
import Payments from '../AllPages/Payments'
import Product from '../AllPages/Product'
import SignUp from '../AllPages/Signup'
import OTP from '../AllPages/Otp'

import BookingRelated from '../Components/RbxSubscription/BookingRelated'
import ServiceRelated from '../Components/RbxSubscription/ServiceRelated'
import VehicleRelated from '../Components/RbxSubscription/VehicleRelated'
import Storeproduct from '../AllPages/Storeproduct'

function AllRouters() {


  return (

    <Routes>


      <Route path='/' element={<Home />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/login' element={<Login />} />
      <Route path='/otp' element={<OTP />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/rbx' element={<Rbxsubscription />}>
        <Route path='bookingrelated' element={<BookingRelated />} />
        <Route path='servicerelated' element={<ServiceRelated />} />
        <Route path='vehiclerelated' element={<VehicleRelated />} />
      </Route>
      <Route path='/payment' element={<Payments />} />
      <Route path='/services' element={<Product />} />
      <Route path='/store/product' element={<Storeproduct />} />


    </Routes>

  )
}

export default AllRouters