import React from "react";
import "../assets/css/style.css";
import couch from "../assets/images/couch.png";
import "../assets/css/tiny-slider.css";
import "../assets/scss/style.scss";
import { useLocation } from "react-router-dom";
function Hero() {
  const location = useLocation();
  const currentPage =
    location.pathname === "/" ? "home" : location.pathname.substring(1);

  return (
    <>
      {" "}
      <div class="hero">
        <div class="container">
          <div class="row justify-content-between">
            <div class="col-lg-5">
              <div class="intro-excerpt">
                {currentPage === "home" && (
                  <h1>
                    Modern Interior <span clsas="d-block">Design Studio</span>
                  </h1>
                )}{" "}
                {currentPage === "about" && <h1>About Us</h1>}
                {currentPage === "shop" && <h1>Shop </h1>}
                {currentPage === "services" && <h1>Services</h1>}
                {currentPage === "blog" && <h1>Blog</h1>}
                {currentPage === "contact" && <h1>Contact Us</h1>}
                {currentPage === "cart" && <h1>Cart</h1>}
                <p class="mb-4">
                  Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                  aliquet velit. Aliquam vulputate velit imperdiet dolor tempor
                  tristique.
                </p>
                <p>
                  <a href="" class="btn btn-secondary me-2">
                    Shop Now
                  </a>
                  <a href="#" class="btn btn-white-outline">
                    Explore
                  </a>
                </p>
              </div>
            </div>
            <div class="col-lg-7">
              <div class="hero-img-wrap">
                <img src={couch} class="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
