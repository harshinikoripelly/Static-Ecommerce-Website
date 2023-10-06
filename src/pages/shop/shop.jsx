import React , { useState } from 'react'
import './shop.css'
import { PRODUCTS } from '../../products'
import { Product } from './product'
import { Trust } from '../../components/trust'

import { Top } from '../../components/top'

export const Shop = () => {
  const [category,setCategory] = useState("ALL")
  return (
    <>
    <Top />
    <div className='shop'>
      <div className='categories'>
        <button value="ALL" onClick={(e)=>setCategory(e.target.value)}>ALL</button>
        <button value="BEDS" onClick={(e)=>setCategory(e.target.value)}>BEDS</button>
        <button value="SOFASETS" onClick={(e)=>setCategory(e.target.value)}>SOFASETS</button>
        <button value="WARDOBES" onClick={(e)=>setCategory(e.target.value)}>WARDOBES</button>
        <button value="LCD" onClick={(e)=>setCategory(e.target.value)}>LCD</button>
      </div>
      <div className='products'>
            {PRODUCTS.map((product) =>{
              if(category === "ALL") {
                return <Product key={product.id} data={product} />
              }
              else if(product.Category === category){
                return <Product key={product.id} data={product} />
              }   
            })}
      </div>
      <Trust />
    </div>
    </>
  )
}

