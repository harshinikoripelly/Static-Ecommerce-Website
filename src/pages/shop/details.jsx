import React from 'react'
import { useLocation } from 'react-router-dom'
import "./details.css"
import { Top } from '../../components/top';

export const Details = (props) => {
  const location = useLocation();
  console.log(location.state.data)
  const { id,Name,Image,Description,Dimension,MaterialType,LiftType,Size,Finishing,Colour,Category} = location.state.data;
  return (
    <>
    <Top />
    <div className='details'>
      <div className='detail-image'>
          <img src={Image} />
      </div>
      <div className='detail-desc'>
        <ul className='details-ul'>
          <li className='details-li'><span className='heading'>Name : </span><span>{Name}</span></li>
          <li className='details-li'><span className='heading'>Description : </span><span>{Description}</span></li>
          <li className='details-li'><span className='heading'>Dimension (L x W x H) </span><span>{Dimension}</span></li>
          <li className='details-li'><span className='heading'>Material Type : </span><span>{MaterialType}</span></li>
          <li className='details-li'><span className='heading'>LiftType : </span><span>{LiftType}</span></li>
          <li className='details-li'><span className='heading'>Size : </span><span>{Size}</span></li>
          <li className='details-li'><span className='heading'>Finishing : </span><span>{Finishing}</span></li>
          <li className='details-li'><span className='heading'>Colour : </span><span>{Colour}</span></li>
        </ul>
      </div>
    </div>
    </>
  )
}

