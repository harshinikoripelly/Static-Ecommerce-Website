import React from 'react'
import { useContext } from 'react';
import { ShopContext } from '../../context/shop-context';

export const CartItem = (props) => {
  const { id,Name,Image,Description,Dimension,MaterialType,LiftType,Size,Finishing,Colour,Price,Category} = props.data;
  const {addToCart , cartItems, removeFromCart , updateCart} = useContext(ShopContext)
  return (
    <div className='cartItem'>
      <img src={Image} />
      <div className='description'>
        <p>
            <b>{Name}</b>
        </p>
        <p>${Price}</p>
        <div className='countHandler'>
            <button onClick={() => removeFromCart(id)}> - </button>
            <input value={cartItems[id]} onChange={(e) => updateCart(Number(e.target.value),id)  }/>
            <button onClick={() => addToCart(id)}> + </button>
        </div>
      </div>

    </div>
  )
}


