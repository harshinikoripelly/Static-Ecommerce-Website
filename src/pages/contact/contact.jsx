import React from 'react'
import "./contact.css";
import image from "./last-img.png";
import { Top } from '../../components/top';

import pic5 from '../../assets/shopimages/pic6.jpg'
import pic12 from '../../assets/shopimages/pic12.jpg'

export const Contact = () => {
  return (
    <>
    <Top />
    <div className="contact">
    <div className="contact-desc">
      <div className="contact-img">
        <img src={pic5} alt="contact" />
      </div>
        <div className="contact-para">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic quae
          ipsum vel dolorum porro aspernatur aperiam ipsa quia nostrum,
          assumenda voluptates. Eveniet quasi quidem error accusantium.
          Laudantium non unde hic? Delectus in, libero perspiciatis reiciendis
          quis amet animi eaque consectetur, nemo accusamus velit voluptas
          asperiores id inventore sint beatae repellendus. Sunt, tempora?
        </div>
        </div>
        <div className='form'>
        <div className='contact-form'>
            <input type="text" placeholder='Name' />
            <div className='details' >
            <input type="email" placeholder='Email' />
            <input type="text" placeholder='Mobile Number'/>
            </div>
            <input className='message' type="text" placeholder='Message' />
            <button>Submit</button>
        </div>
        </div>
      
      <div className='lastimg'>
        <img src={pic12} />
      </div>
    </div>
    </>
  )
}

