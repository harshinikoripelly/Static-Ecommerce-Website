import React from 'react'
import { Link } from 'react-router-dom'
import "./navbar1.css"
import logo from '../../assets/logo.png'
import cart from '../../assets/icons/shopping-cart.png'

export const Navbar1 = () => {
  return (
    <>
    <div className='navbar'>
      <div className='logo'>
        <img src={logo} />
      </div>
      <div className='links'>
        <ul>
          <li><Link to="/" className='link'><span className='nav-li'> Home </span></Link></li>
          <li>
            <Link to="/shop" className='link'><span className='nav-li shop'> Shop </span></Link>
          </li>

          <li><Link to="/about" className='link'><span className='nav-li'> About Us</span></Link></li>
          <li><Link to="/contact" className='link'><span className='nav-li'> Contact Us</span></Link></li>
          <li><Link to="/cart" className='link'><span className='nav-li'> Cart <img className='cart-img' src={cart} /> </span></Link> </li>
        </ul>  
            {/* <ShoppingCart size={32} />  */}
      </div>
    </div>
    {/* <div className='nav-cat'>
              cat
        </div> */}
        </>
  )
}

