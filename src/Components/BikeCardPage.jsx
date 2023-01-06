import React from 'react'
import './BikeCardPage.css'
import AutoComplete from './AutoComplete'


function BikeCard({img,name,price}) {


console.log(price)

  return (
    <div id="card">
      <span className='zero_dp'><span><img src="https://d36g7qg6pk2cm7.cloudfront.net/assets/zero-deposit-8bf3350f651efc75cb1e263459707c81cdd271347d2ba925cd2eb740243474d5.png" alt="logo" />   </span> <span>Zero deposit</span></span>
    
    <h3 id="name">{name}</h3>
     
<div  className='product_img'>
<img src={img} alt={name}/>
</div>
   

<p className='avail_at'>Available at</p>
{/* <div id="auto">

<AutoComplete/>

</div> */}

<div className='time_date'>

<div className='pick_date'>
  <span>10:00 am</span>
  <span>
05 Jan 2023</span>
</div>
<div>
  <div className='pick_to'>
    to
  </div>
</div>
<div className='pick_date'>
<span>12:00 pm</span>
  <span>
05 Jan 2023</span>
</div>

</div>

     <div id="pricebox">

<span className='price_include'> 
  
  <span>
₹ {price}
  </span>
  <span>
  (80 km included)
  
  </span>
  
  
   </span>
<button className="button-37">Book</button>



     </div>
    
    </div>
  )
}

export default BikeCard