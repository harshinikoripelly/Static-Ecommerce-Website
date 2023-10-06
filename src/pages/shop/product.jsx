import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { ShopContext } from '../../context/shop-context';
import "./shop.css";

export const Product = (props) => {
    const { id, Name , Image, Price} = props.data;
    const {addToCart , cartItems} = useContext(ShopContext)

    const navigate = useNavigate()

    const cartItemAmount = cartItems[id]
  return (
    <div className='product' onClick={()=> navigate('/details', {state : {data : props.data}})}>
      <div className='product-image'>
      <img className='product-img' src={Image} />
      </div>
      {/* <div className='overlay'>
        <div className='content'>
          <div class="button" onClick={()=> addToCart(id)}> ADD TO CART </div>
          <p>${Price}</p>
          </div>
      </div> */}
      
      <div className='description'>
        <p>
            <b>{Name}</b>
        </p>
      </div>
    </div>
  )
}

