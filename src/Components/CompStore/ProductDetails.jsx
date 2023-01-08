import React from 'react'
import './ProductDetail.css'
import StoreNav from './StoreNav'
function ProductDetails() {
  return (
    <>
<StoreNav/>
    <div className="card">
    <div className="left">
      <img src="https://www.dropbox.com/s/e928cht0h5crcn4/shoe.png?raw=1" alt="shoe"/>
      <i className="fa fa-long-arrow-left"></i>
      <i className="fa fa-long-arrow-right"></i>
    </div>
    <div className="right">
      <div className="product-info">
        <div className="product-name">
        
         
        </div>
        <div className="details">
          <h3>Winter Collection</h3>
          <h2>Men Black Sneakers</h2>
          <h4><span > ₹</span>150</h4>
          <h4 className="dis"><span className="fa fa-dollar"></span>200</h4>
        </div>
        <ul>
          <li>SIZE</li>
          <li className="bg">S</li>
          <li className="bg">M</li>
          <li className="bg">L</li>
         
        </ul>
        <ul>
          <li>COLOR</li>
          <li className="yellow" ></li>
          <li className="black"></li>
          <li className="blue"></li>
        </ul>
        <span className="foot"><i className="fa fa-shopping-bag"></i>Buy Now</span>
        <span className="foot"><i classNameName="fa fa-shopping-cart"></i>Add TO Cart</span>
      </div>
    </div>
  </div>
  </>
  )
}

export default ProductDetails