import React, { useState } from "react";
import utils from "../../../utils";
import "./style.css";

const ProductDetails = () => {
  const [selectedImage, setSelectedImage] = useState(1);
  return (
    <div>
      <nav class="navbar">
        <div class="nav">
          <img src={utils.allImage.darkLogo} class="brand-logo" alt="" />
          <div class="nav-items">
            <div class="search">
              <input
                type="text"
                class="search-box"
                placeholder="search brand, product"
              />
              <button class="search-btn">search</button>
            </div>
            <a href="#">
              <img src={utils.allImage.user} alt="" />
            </a>
            <a href="#">
              <img src={utils.allImage.cart} alt="" />
            </a>
          </div>
        </div>
      </nav>
      <ul class="links-container">
        <li class="link-item">
          <a href="#" class="link">
            home
          </a>
        </li>
        <li class="link-item">
          <a href="#" class="link">
            women
          </a>
        </li>
        <li class="link-item">
          <a href="#" class="link">
            men
          </a>
        </li>
        <li class="link-item">
          <a href="#" class="link">
            kids
          </a>
        </li>
        <li class="link-item">
          <a href="#" class="link">
            accessories
          </a>
        </li>
      </ul>
      <div className="product-details">
        <div
          className={
            selectedImage == 1
              ? "image-slider"
              : selectedImage == 2
              ? "image-slider image-slider-2"
              : selectedImage == 3
              ? "image-slider image-slider-3"
              : "image-slider image-slider-4"
          }
        >
          <div className="product-images">
            <img
              onClick={() => {
                setSelectedImage(1);
              }}
              src={utils.allImage.productImage1}
              className={selectedImage == 1 ? "active" : ""}
            />
            <img
              onClick={() => setSelectedImage(2)}
              src={utils.allImage.productImage2}
              className={selectedImage == 2 ? "active" : ""}
            />
            <img
              onClick={() => setSelectedImage(3)}
              src={utils.allImage.productImage3}
              className={selectedImage == 3 ? "active" : ""}
            />
            <img
              onClick={() => setSelectedImage(4)}
              src={utils.allImage.productImage4}
              className={selectedImage == 4 ? "active" : ""}
            />
          </div>
        </div>
        <div class="details">
          <h2 class="product-brand">calvin klein</h2>
          <p class="product-short-des">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </p>
          <span class="product-price">$99</span>
          <span class="product-actual-price">$200</span>
          <span class="product-discount">( 50% off )</span>
          <p class="product-sub-heading">select size</p>
          <input
            type="radio"
            name="size"
            value="s"
            checked
            hidden
            id="s-size"
          />
          <label for="s-size" class="size-radio-btn check">
            s
          </label>
          <input type="radio" name="size" value="m" hidden id="m-size" />
          <label for="m-size" class="size-radio-btn">
            m
          </label>
          <input type="radio" name="size" value="l" hidden id="l-size" />
          <label for="l-size" class="size-radio-btn">
            l
          </label>
          <input type="radio" name="size" value="xl" hidden id="xl-size" />
          <label for="xl-size" class="size-radio-btn">
            xl
          </label>
          <input type="radio" name="size" value="xxl" hidden id="xxl-size" />
          <label for="xxl-size" class="size-radio-btn">
            xxl
          </label>
          <button class="btn cart-btn">add to cart</button>
          <button class="btn">add to wishlist</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
