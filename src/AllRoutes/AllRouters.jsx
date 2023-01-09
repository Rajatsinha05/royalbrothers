import React from "react";

import { Route, Routes, Navigate} from 'react-router-dom'
import Home from '../AllPages/Home'
import Login from '../AllPages/Login'
import Cart from '../AllPages/Cart'
import Rbxsubscription from '../AllPages/Rbxsubscription'
import Payments from '../AllPages/Payments'
import Product from '../AllPages/Product'
import SignUp from '../AllPages/Signup'
import OTP from '../AllPages/Otp'
import NavBar from '../Components/NavBar'

import BookingRelated from '../Components/RbxSubscription/BookingRelated'
import ServiceRelated from '../Components/RbxSubscription/ServiceRelated'
import VehicleRelated from '../Components/RbxSubscription/VehicleRelated'
import Storeproduct from '../AllPages/Storeproduct'
import SingleProduct from '../AllPages/SingleProduct'
import Profile from '../Components/Profile/Profile'


function AllRouters() {
  return (
    <>
 
    
    <Routes>

      <Route path='/' element={<Home />} />
      <Route path='/:city' element={<Home />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/login' element={<Login />} />
      <Route path='/otp' element={<OTP />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/rbx' element={<Rbxsubscription />}>
        <Route path='' element={<Navigate to='bookingrelated'/>}/>
        <Route path='bookingrelated' element={<BookingRelated />} />
        <Route path='servicerelated' element={<ServiceRelated />} />
        <Route path='vehiclerelated' element={<VehicleRelated />} />
      </Route>
      <Route path='/payment' element={<Payments />} />
      <Route path='/services' element={<Product />} />
      <Route path='/store/products' element={<Storeproduct />} />
      <Route path='/product/:id' element={<SingleProduct />} />
      <Route path='/profile' element={<Profile />} />
    </Routes>

    </>

  )
}

export default AllRouters;
