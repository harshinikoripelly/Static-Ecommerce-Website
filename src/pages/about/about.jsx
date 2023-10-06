import React from "react";
import "./about.css";
import image from "./last-img.png";
import { Top } from "../../components/top";

import pic10 from "../../assets/shopimages/pic10.jpg"
import pic4 from "../../assets/shopimages/pic4.jpg"
import pic16 from "../../assets/shopimages/pic16.jpg"


export const About = () => {
  return (
    <>
    <Top />
    <div className="about">
      <div className="about-div">
      <div className="about-img">
        <img src={pic16} alt="about" />
      </div>
      <div className="about-desc">
        <h1 className="about-heading">Heading</h1>
        <p className="about-para">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic quae
          ipsum vel dolorum porro aspernatur aperiam ipsa quia nostrum,
          assumenda voluptates. Eveniet quasi quidem error accusantium.
          Laudantium non unde hic? Delectus in, libero perspiciatis reiciendis

        </p>
      </div>
      </div>
      <div className="about-div color-change">
      <div className="about-desc">
        <h1 className="about-heading">Heading</h1>
        <p className="about-para">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic quae
          ipsum vel dolorum porro aspernatur aperiam ipsa quia nostrum,
          assumenda voluptates. Eveniet quasi quidem error accusantium.
          Laudantium non unde hic? Delectus in, libero perspiciatis reiciendis

        </p>
      </div>
      <div className="about-img">
        <img src={pic10} alt="about" />
      </div>
      </div>
      <div className="about-div">
      <div className="about-img">
        <img src={pic4} alt="about" />
      </div>
      <div className="about-desc">
        <h1 className="about-heading">Heading</h1>
        <p className="about-para">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic quae
          ipsum vel dolorum porro aspernatur aperiam ipsa quia nostrum,
          assumenda voluptates. Eveniet quasi quidem error accusantium.
          Laudantium non unde hic? Delectus in, libero perspiciatis reiciendis

        </p>
      </div>
      </div>
      
    </div>
    </>
  );
};
