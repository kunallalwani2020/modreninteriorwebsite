import React from "react";
import { NavLink } from "react-router-dom";
import "../assets/css/style.css";
import user from "../assets/images/user.svg";
import cart from "../assets/images/cart.svg";
import "../assets/css/tiny-slider.css";
import "../assets/scss/style.scss";
import Hero from "./Hero";

import { useSelector } from "react-redux";
function Header() {
  const cartItemCount = useSelector((state) => state.cart.products); // You can dynamically update this with Redux, Context API, etc.

  return (
    <>
      <nav
        className="custom-navbar navbar navbar-expand-md navbar-dark bg-dark"
        aria-label="Furni navigation bar"
      >
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            Furni<span>.</span>
          </NavLink>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsFurni"
            aria-controls="navbarsFurni"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarsFurni">
            <ul className="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
              <li className="nav-item">
                <NavLink to="/" className="nav-link" activeClassName="active">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/shop"
                  className="nav-link"
                  activeClassName="active"
                >
                  Shop
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/about"
                  className="nav-link"
                  activeClassName="active"
                >
                  About us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/services"
                  className="nav-link"
                  activeClassName="active"
                >
                  Services
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/blog"
                  className="nav-link"
                  activeClassName="active"
                >
                  Blog
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/contact"
                  className="nav-link"
                  activeClassName="active"
                >
                  Contact us
                </NavLink>
              </li>
            </ul>

            <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
              <li>
                <NavLink to="/profile" className="nav-link">
                  <img src={user} alt="User" />
                </NavLink>
              </li>
              <li className="nav-item cart-icon">
                <NavLink to="/cart" className="nav-link position-relative">
                  <img src={cart} alt="Cart" />
                  <span className="cart-count badge rounded-pill bg-danger position-absolute top-2 start-90 translate-middle">
                    {cartItemCount.length}
                  </span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Hero />
    </>
  );
}

export default Header;
