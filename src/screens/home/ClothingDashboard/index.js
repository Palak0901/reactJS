import React from "react";
import utils from "../../../utils";
import "./style.css";

const ClothingDashboard = () => {
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
      <div class="hero-section">
        <div class="content">
          <img src={utils.allImage.lightLogo} class="logo" />
          <p class="sub-heading">best fashion collection of all time</p>
        </div>
      </div>
      <div className="product">
        <label className="product-category">Best selling</label>
        <div className="product-container">
          <div className="product-card">
            <div className="product-image">
              <label className="discount-tag">50% off</label>
              <img src={utils.allImage.card1} className="product-thumb" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClothingDashboard;
