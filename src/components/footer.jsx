import React from 'react'
import "./footer.css"

export const Footer = () => {
  return (
    <div className='footer'>
      <div className='cat'>
        <div className='heading'>Categories</div>
          <ul className='cat-ul'>
            <li className='cat-li'>Beds</li>
            <li className='cat-li'>Sofasets</li>
            <li className='cat-li'>Wardobes</li>
            <li className='cat-li'>Lcd</li>
            <li className='cat-li'>Dining tables</li>
          </ul>
        </div>
        <div className='cat'>
        <div className='heading'>Information</div>
        
          <ul className='cat-ul'>
            <li className='cat-li'>Home</li>
            <li className='cat-li'>Products</li>
            <li className='cat-li'>About us</li>
            <li className='cat-li'>Contact us</li>
          </ul>
        </div>
        <div className='cat'>
        <div className='heading'>Get in Touch</div>
        
            Any Questions?Let us know in store at address or call us phone no
        </div>
    </div>
  )
}
