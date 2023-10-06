import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Swiper , SwiperSlide } from 'swiper/react'
import {FreeMode, Autoplay} from 'swiper'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/autoplay'

import ProductCard from './components/card'


import img1 from './assets/beds/ARMOUR 1 (7872).png'
import img2 from './assets/beds/CS 4 (7872).png'
import img3 from './assets/sofa/CEDAR 3 SEATER.png'
import img4 from './assets/sofa/CORAL L SHAPE.png'
import img5 from './assets/sofa/KAZO L SHAPE.png'
import img6 from './assets/beds/DELONIX (7860).png'
import img7 from './assets/sofa/RINGO L SHAPE.png'
import img8 from './assets/beds/DEZIRE (7872).png'
import img9 from './assets/sofa/MAC L SHAPE.png'
import img10 from './assets/sofa/MARCO L SHAPE.png'
import img11 from './assets/beds/ERTIGA (7860).png'
import img12 from './assets/sofa/PICASO L SHAPE.png'
import img13 from './assets/beds/GLANZA (7872).png'
import img14 from './assets/beds/SWIFT (7872).png'
import img15 from './assets/sofa/MAHAL L SHAPE.png'








const ProductSlider = () => {
  return (
    <div className='container py-4 px-4 justify-content-center'>
      <Swiper
        freeMode={true}
        grabCursor={true}
        modules={[FreeMode,Autoplay]}
        className='mySwiper'
        slidesPerView={5}
        spaceBetween={30}
        autoplay={{delay : 1000}}
        breakpoints={{
            0: {
                slidesPerView: 1,
                spaceBetween: 10
            },
            480: {
                slidesPerView: 2,
                spaceBetween: 10
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 15
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 15
            },
            1280: {
                slidesPerView: 3,
                spaceBetween: 30
            },
        }}
      >
        <SwiperSlide>
            <ProductCard data={{imgSrc: img1,title: "varebv",price:"fuivrg"}}/>
        </SwiperSlide>
        <SwiperSlide>
            <ProductCard data={{imgSrc: img2,title: "varebv",price:"fuivrg"}}/>
        </SwiperSlide>
        <SwiperSlide>
            <ProductCard data={{imgSrc: img3,title: "varebv",price:"fuivrg"}}/>
        </SwiperSlide>
        <SwiperSlide>
            <ProductCard data={{imgSrc: img4,title: "varebv",price:"fuivrg"}}/>
        </SwiperSlide>
        <SwiperSlide>
            <ProductCard data={{imgSrc: img5,title: "varebv",price:"fuivrg"}}/>
        </SwiperSlide>
        <SwiperSlide>
            <ProductCard data={{imgSrc: img6,title: "varebv",price:"fuivrg"}}/>
        </SwiperSlide>
        <SwiperSlide>
            <ProductCard data={{imgSrc: img7,title: "varebv",price:"fuivrg"}}/>
        </SwiperSlide>
        <SwiperSlide>
            <ProductCard data={{imgSrc: img8,title: "varebv",price:"fuivrg"}}/>
        </SwiperSlide>
        <SwiperSlide>
            <ProductCard data={{imgSrc: img9,title: "varebv",price:"fuivrg"}}/>
        </SwiperSlide>
        <SwiperSlide>
            <ProductCard data={{imgSrc: img10,title: "varebv",price:"fuivrg"}}/>
        </SwiperSlide>
        <SwiperSlide>
            <ProductCard data={{imgSrc: img11,title: "varebv",price:"fuivrg"}}/>
        </SwiperSlide>
        <SwiperSlide>
            <ProductCard data={{imgSrc: img12,title: "varebv",price:"fuivrg"}}/>
        </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default ProductSlider
