import React from 'react'
import frontImg from '../images/front-img.png'
import lastImg from '../images/last-img.png'
import '../App.css'
function Home() {
    return(
        <>
         <div className='home-div' >
            <img className='front-img' src={frontImg} />
         </div>
         <div className='home-div'>
            <h1>OUR PRODUCT CATEGORIES</h1>
         </div>
         <div className='home-div home-cards'>
            <div className='card'>
                CARD
            </div>
            <div className='card'>
                CARD
            </div>
            <div className='card'>
                CARD
            </div>
         </div>
         <div className='home-div'>
         <img className='last-img' src={lastImg} />
         </div>
        </>
    )
}

export default Home;