import React from "react";
import "./trust.css";

import quality from '../assets/icons/quality.png'
import price from '../assets/icons/price.png'
import heart from '../assets/icons/heart.png'

export const Trust = () => {
  return (
    <div className="trust">
      <div className="categ">
        <div className="categ-img">
          <img src={quality} />
        </div>
        <h1 className="categ-heading">High Quality</h1>
      </div>
      <div className="categ">
      <div className="categ-img">
          <img src={price} />
        </div>
        <h1 className="categ-heading">Fair Price</h1>
      </div>
      <div className="categ last">
        <div className="categ-img">
          <img src={heart} />
        </div>
        <h1 className="categ-heading">Customer Satisfaction</h1>
      </div>
    </div>
  );
};
