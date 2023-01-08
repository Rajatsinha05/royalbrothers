import React from 'react'

import {Route, Routes} from 'react-router-dom'
import Home from '../AllPages/Home'
import Login from '../AllPages/Login'
import Cart from '../AllPages/Cart'
import Rbxsubscription from '../AllPages/Rbxsubscription'
import Payments from '../AllPages/Payments'
import Product from '../AllPages/Product'
import BookingRelated from '../Components/RbxSubscription/BookingRelated'
import ServiceRelated from '../Components/RbxSubscription/ServiceRelated'
import VehicleRelated from '../Components/RbxSubscription/VehicleRelated'
function AllRouters() {
  return (
  <Routes>
<Route path='/' element={<Home/>}/>

<Route path='/login' element={<Login/>}/>
<Route path='/cart' element={<Cart/>}/>
<Route path='/rbx' element={<Rbxsubscription/>}>
  <Route path='bookingrelated' element={<BookingRelated />} />
  <Route path='servicerelated' element={<ServiceRelated />} />
  <Route path='vehiclerelated' element={<VehicleRelated />} />
</Route>
<Route path='/payment' element={<Payments/>}/>
<Route path='/product' element={<Product/>}/>

  </Routes>
  )
}

export default AllRouters