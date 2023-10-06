import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo1.png'
import cart from "../assets/icons/shopping-cart.png"
import "./top.css"

export const Top= () => {
  return (
    <div className='navbar1'>
      <div className='logo1'>
        <img src={logo} />
      </div>
      <div className='links1'>
        <ul>
          <li><Link to="/" className='link'><span className='nav-li1'> Home </span></Link></li>
          <li><Link to="/shop" className='link'><span className='nav-li1'> Shop </span></Link></li>
          <li><Link to="/about" className='link'><span className='nav-li1'> About Us</span></Link></li>
          <li><Link to="/contact" className='link'><span className='nav-li1'> Contact Us</span></Link></li>
          <li><Link to="/cart" className='link'><span className='nav-li1'> Cart <img className='cart-img' src={cart} /> </span></Link> </li>
        </ul>  
            {/* <ShoppingCart size={32} />  */}
      </div>
    </div>
  )
}

