import React from 'react'
import './StoreCard.css'
function StoreCard({name,pride,url_1}) {
    console.log(name,pride,url_1);


 
  return (
    <div className="container">
    <div className="card">
        <div className="imgBx">
            <img src={url_1} alt="nike-air-shoe"/>
        </div>

        <div className="contentBx">

            <h2>{name}</h2>

            

            
            <a href="#">Buy Now</a>
        </div>

    </div>
</div>
  )
}

export default StoreCard