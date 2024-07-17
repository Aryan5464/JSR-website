import React from "react";
import products from "./Product.json";

import "./ProductItems.css";

import Navbar from "../Navbar/Navbar";
import Carousal from "../Carousal/Carousal";

function ProductItems({ data }) {
  return (
    <div className="product-container">
      <Navbar></Navbar>
      <div className="main">
        <h3 className="product-itme-heading" style={{marginBottom: 8}}>
          <span>{data.title[0]}</span>
          {data.title.slice(1)}
        </h3>

        <div className="discription-part2">
          <p className="product-item-discription" style={{paddingTop: 40}}>{data.discription}</p>
          <div className="image">
            {/* <img src={data.imag[0].image1} alt="error" /> */}
            <video src="video/pc.mp4" style={{ gap: 13 }} autoPlay muted loop height={300} width={300}></video>
          </div>
        </div>

        <div className="gallery">
          <div className="gallery-heading">
            <span>G</span>allery
          </div>

          <div className="image-part">
            {data.imag.map((e, i) => {
              const { image1 } = e;
              return (
                <div className="image-div">
                  <img src={image1} alt="error" key={i} />
                </div>
              );
            })}
            {/* <div className="image-div">
            <img src={images} alt="" />
          </div>
          <div className="image-div">
            <img src={images} alt="" />
          </div>
          <div className="image-div">
            <img src={images} alt="" />
          </div>
          <div className="image-div">
            <img src={images} alt="" />
          </div>
          <div className="image-div">
            <img src={images} alt="" />
          </div>
          <div className="image-div">
            <img src={images} alt="" />
          </div>
          <div className="image-div">
            <img src={images} alt="" />
          </div> */}
          </div>
        </div>
      </div>
      <Carousal></Carousal>
    </div>
  );
}

export default ProductItems;
