import React from "react";
import ProductSlider from "../../ProductSlider";
import "./home.css";
import { Navbar1 } from "./navbar1";
import front from "../../assets/images/Home.png";
import { Trust } from "../../components/trust";
import bed from "../../assets/icons/bed.png";
import sofa from "../../assets/icons/sofa.png";
import wardobe from "../../assets/icons/wardobe.png";
import chair from "../../assets/icons/chair.png";
import diningtable from "../../assets/icons/diningtable.png";
import lcd from "../../assets/icons/lcd.png";

import comfort from "../../assets/images/comfort.jpg";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="home">
      <div className="home-div1">
        <img src={front} />
      </div>
      <div className="up-div">
        <Navbar1 />
        <div className="dis">
          <p className="dis-para">
          For your dream home
          </p>
          <Link to="/shop" className='link'><span className='nav-li shop'> <button>Shop Now</button></span></Link>
          
        </div>
      </div>
      <div className="home-div2">
        <h1 className="home-div2-heading">OUR <span className="pro">PRODUCT</span> CATEGORIES</h1>
        <div className="icons">
        
          <div className="sep">
          <Link to="/shop" className='link'>
          <img src={bed} />
          </Link>
          <span className="cat-name"> BEDS </span>
          </div>
          
          <div className="sep">
          <Link to="/shop" className='link'>
          <img src={sofa} />
          </Link>
          <span className="cat-name"> SOFA </span>
          </div>
          <div className="sep">
          <Link to="/shop" className='link'>
          <img src={wardobe} />
          </Link>
          <span className="cat-name"> WARDOBES </span>
          </div>
        </div>
        <div className="icons">
          <div className="sep">
          <Link to="/shop" className='link'>
            <img src={chair} />
            </Link>
            <span className="cat-name"> CHAIRS </span>
            </div>
            <div className="sep">

            <Link to="/shop" className='link'>
            <img src={diningtable} />
            </Link>
            <span className="cat-name"> DINING TABLES </span>
            </div>
            <div className="sep">
            <Link to="/shop" className='link'>
            <img src={lcd} />
            </Link>
            <span className="cat-name"> LCD </span>
            </div>
          </div>
      </div>
      <div className="home-div3">
      <ProductSlider />
      </div>
      <div className="home-div4">
        <div className="image">
          <img src={comfort} />
        </div>
        <div className="desc">
          Your <span className="comfort">COMFORT</span> is Our Choice.
        </div>
      </div>
      <Trust />
    </div>
  );
};
