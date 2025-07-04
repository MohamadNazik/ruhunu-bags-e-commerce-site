import React, { useState } from "react";
import "./NavBar.css";

import logo from "../Assets/icons/Bag.png";
import cart_icon from "../Assets/icons/cart_icon.png";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [menu, setMenu] = useState("home");

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" id="logo" />
        <p>RUHUNU BAGS CENTER</p>
      </div>
      <ul className="nav-menu">
        <li
          onClick={() => {
            setMenu("home");
          }}
        >
          <Link className="links" to="/">
            Home
          </Link>
          {menu === "home" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("products");
          }}
        >
          <Link className="links" to="/products">
            Products
          </Link>
          {menu === "products" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("contact");
          }}
        >
          <Link className="links" to="/contact">
            Contact
          </Link>
          {menu === "contact" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link className="links" to="/login">
          <button>Login</button>
        </Link>

        <Link className="links" to="/cart">
          <img src={cart_icon} alt="" />
        </Link>
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
};

export default NavBar;
