import React from 'react'

import {Route, Routes} from 'react-router-dom'
import Home from '../AllPages/Home'
import Login from '../AllPages/Login'
import Cart from '../AllPages/Cart'
import Rbxsubscription from '../AllPages/Rbxsubscription'
import Payments from '../AllPages/Payments'
import Product from '../AllPages/Product'
import SignUp from '../AllPages/Signup'
import { useSelector } from 'react-redux';
import OTP from '../AllPages/Otp'
function AllRouters() {


  return (

    
  <Routes>
<Route path='/' element={<Home/>}/>
<Route path= '/signup' element={<SignUp />} />
<Route path='/login' element={<Login/>}/>
<Route path='/otp' element={<OTP/>}/>
<Route path='/cart' element={<Cart/>}/>
<Route path='/rbx' element={<Rbxsubscription/>}/>
<Route path='/payment' element={<Payments/>}/>
<Route path='/product' element={<Product/>}/>

  </Routes>
  )
}

export default AllRouters