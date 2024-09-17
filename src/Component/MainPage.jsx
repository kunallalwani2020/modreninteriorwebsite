import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/css/style.css";
// import user from "../assets/images/user.svg";
// import cart from "../assets/images/cart.svg";
import "../assets/css/tiny-slider.css";
import "../assets/scss/style.scss";
import "../assets/scss/style.scss";
import product1 from "../assets/images/product-1.png";
import product2 from "../assets/images/product-2.png";
import product3 from "../assets/images/product-3.png";
import cross from "../assets/images/cross.svg";
import "../assets/scss/style.scss";
import beg from "../assets/images/bag.svg";
import truck from "../assets/images/truck.svg";
import returns from "../assets/images/return.svg";
import support from "../assets/images/support.svg";
import whychooseusimg from "../assets/images/why-choose-us-img.jpg";
import grid1 from "../assets/images/img-grid-1.jpg";
import grid2 from "../assets/images/img-grid-2.jpg";
import grid3 from "../assets/images/img-grid-3.jpg";
import post1 from "../assets/images/post-1.jpg";
import post2 from "../assets/images/post-2.jpg";
import post3 from "../assets/images/post-3.jpg";
import { useDispatch } from "react-redux";
import Data from "./product_data.json";
function MainPage() {
  const dispatch = useDispatch();

  return (
    <>
      {" "}
      <div class="product-section">
        <div class="container">
          <div class="row">
            {/* <!-- Start Column 1 --> */}
            <div class="col-md-12 col-lg-3 mb-5 mb-lg-0">
              <h2 class="mb-4 section-title">
                Crafted with excellent material.
              </h2>
              <p class="mb-4">
                Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
                velit. Aliquam vulputate velit imperdiet dolor tempor tristique.{" "}
              </p>
              <p>
                <Link to="/shop" class="btn">
                  Explore
                </Link>
              </p>
            </div>
            {/* <!-- End Column 1 -->

          <!-- Start Column 2 --> */}
            <div class="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
              <Link to="/shop" class="product-item">
                <img src={product1} class="img-fluid product-thumbnail" />
                <h3 class="product-title">Nordic Chair</h3>
                <strong class="product-price">$50.00</strong>

                <span class="icon-cross">
                  <img src={cross} class="img-fluid" />
                </span>
              </Link>
            </div>
            {/* <!-- End Column 2 -->

          <!-- Start Column 3 --> */}
            <div class="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
              <a class="product-item" href="cart.html">
                <img src={product2} class="img-fluid product-thumbnail" />
                <h3 class="product-title">Kruzo Aero Chair</h3>
                <strong class="product-price">$78.00</strong>

                <span class="icon-cross">
                  <img src={cross} class="img-fluid" />
                </span>
              </a>
            </div>
            {/* <!-- End Column 3 -->

          <!-- Start Column 4 --> */}
            <div class="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
              <a class="product-item" href="cart.html">
                <img src={product3} class="img-fluid product-thumbnail" />
                <h3 class="product-title">Ergonomic Chair</h3>
                <strong class="product-price">$43.00</strong>

                <span class="icon-cross">
                  <img src={cross} class="img-fluid" />
                </span>
              </a>
            </div>
            {/* <!-- End Column 4 --> */}
          </div>
        </div>
      </div>
      {/* <!-- Start Why Choose Us Section --> */}
      <div class="why-choose-section">
        <div class="container">
          <div class="row justify-content-between">
            <div class="col-lg-6">
              <h2 class="section-title">Why Choose Us</h2>
              <p>
                Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
                velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
              </p>

              <div class="row my-5">
                <div class="col-6 col-md-6">
                  <div class="feature">
                    <div class="icon">
                      <img src={truck} alt="Image" class="imf-fluid" />
                    </div>
                    <h3>Fast &amp; Free Shipping</h3>
                    <p>
                      Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                      aliquet velit. Aliquam vulputate.
                    </p>
                  </div>
                </div>

                <div class="col-6 col-md-6">
                  <div class="feature">
                    <div class="icon">
                      <img src={beg} alt="Image" class="imf-fluid" />
                    </div>
                    <h3>Easy to Shop</h3>
                    <p>
                      Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                      aliquet velit. Aliquam vulputate.
                    </p>
                  </div>
                </div>

                <div class="col-6 col-md-6">
                  <div class="feature">
                    <div class="icon">
                      <img src={support} alt="Image" class="imf-fluid" />
                    </div>
                    <h3>24/7 Support</h3>
                    <p>
                      Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                      aliquet velit. Aliquam vulputate.
                    </p>
                  </div>
                </div>

                <div class="col-6 col-md-6">
                  <div class="feature">
                    <div class="icon">
                      <img src={returns} alt="Image" class="imf-fluid" />
                    </div>
                    <h3>Hassle Free Returns</h3>
                    <p>
                      Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                      aliquet velit. Aliquam vulputate.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-5">
              <div class="img-wrap">
                <img src={whychooseusimg} alt="Image" class="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Why Choose Us Section --> */}
      {/* Start We Help Section */}
      <div className="we-help-section">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-7 mb-5 mb-lg-0">
              <div className="imgs-grid">
                <div className="grid grid-1">
                  <img src={grid1} alt="Untree.co" />
                </div>
                <div className="grid grid-2">
                  <img src={grid2} alt="Untree.co" />
                </div>
                <div className="grid grid-3">
                  <img src={grid3} alt="Untree.co" />
                </div>
              </div>
            </div>
            <div className="col-lg-5 ps-lg-5">
              <h2 className="section-title mb-4">
                We Help You Make Modern Interior Design
              </h2>
              <p>
                Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio
                quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam
                vulputate velit imperdiet dolor tempor tristique. Pellentesque
                habitant morbi tristique senectus et netus et malesuada
              </p>
              <ul className="list-unstyled custom-list my-4">
                <li>Donec vitae odio quis nisl dapibus malesuada</li>
                <li>Donec vitae odio quis nisl dapibus malesuada</li>
                <li>Donec vitae odio quis nisl dapibus malesuada</li>
                <li>Donec vitae odio quis nisl dapibus malesuada</li>
              </ul>
              <p>
                <a herf="#" className="btn">
                  Explore
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* End We Help Section */}
      {/* Start Popular Product */}
      <div className="popular-product">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0">
              <div className="product-item-sm d-flex">
                <div className="thumbnail">
                  <img src={product1} alt="Image" className="img-fluid" />
                </div>
                <div className="pt-3">
                  <h3>Nordic Chair</h3>
                  <p>
                    Donec facilisis quam ut purus rutrum lobortis. Donec vitae
                    odio{" "}
                  </p>
                  <p>
                    <a href="#">Read More</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0">
              <div className="product-item-sm d-flex">
                <div className="thumbnail">
                  <img src={product2} alt="Image" className="img-fluid" />
                </div>
                <div className="pt-3">
                  <h3>Kruzo Aero Chair</h3>
                  <p>
                    Donec facilisis quam ut purus rutrum lobortis. Donec vitae
                    odio{" "}
                  </p>
                  <p>
                    <a href="#">Read More</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0">
              <div className="product-item-sm d-flex">
                <div className="thumbnail">
                  <img src={product3} alt="Image" className="img-fluid" />
                </div>
                <div className="pt-3">
                  <h3>Ergonomic Chair</h3>
                  <p>
                    Donec facilisis quam ut purus rutrum lobortis. Donec vitae
                    odio{" "}
                  </p>
                  <p>
                    <a href="#">Read More</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Popular Product */}
      {/* Start testimonial */}
      {/* <CarouselComponent /> */}
      {/* End testimonial */}
      <>
        {/* Start Blog Section */}
        <div className="blog-section">
          <div className="container">
            <div className="row mb-5">
              <div className="col-md-6">
                <h2 className="section-title">Recent Blog</h2>
              </div>
              <div className="col-md-6 text-start text-md-end">
                <a href="#" className="more">
                  View All Posts
                </a>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-sm-6 col-md-4 mb-4 mb-md-0">
                <div className="post-entry">
                  <a href="#" className="post-thumbnail">
                    <img src={post1} alt="Image" className="img-fluid" />
                  </a>
                  <div className="post-content-entry">
                    <h3>
                      <a href="#">First Time Home Owner Ideas</a>
                    </h3>
                    <div className="meta">
                      <span>
                        by <a href="#">Kristin Watson</a>
                      </span>{" "}
                      <span>
                        on <a href="#">Dec 19, 2021</a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-4 mb-4 mb-md-0">
                <div className="post-entry">
                  <a href="#" className="post-thumbnail">
                    <img src={post2} alt="Image" className="img-fluid" />
                  </a>
                  <div className="post-content-entry">
                    <h3>
                      <a href="#">How To Keep Your Furniture Clean</a>
                    </h3>
                    <div className="meta">
                      <span>
                        by <a href="#">Robert Fox</a>
                      </span>{" "}
                      <span>
                        on <a href="#">Dec 15, 2021</a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-4 mb-4 mb-md-0">
                <div className="post-entry">
                  <a href="#" className="post-thumbnail">
                    <img src={post3} alt="Image" className="img-fluid" />
                  </a>
                  <div className="post-content-entry">
                    <h3>
                      <a href="#">Small Space Furniture Apartment Ideas</a>
                    </h3>
                    <div className="meta">
                      <span>
                        by <a href="#">Kristin Watson</a>
                      </span>{" "}
                      <span>
                        on <a href="#">Dec 12, 2021</a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Blog Section */}
      </>
    </>
  );
}

export default MainPage;
