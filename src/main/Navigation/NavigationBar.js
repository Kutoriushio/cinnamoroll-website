import React from "react";
import logo from "../../images/logo.png";
import cartIcon from "../../images/cart_icon.svg";
import searchIcon from "../../images/search_icon.svg";
import "./NavigationBar.css";

export default function NavigationBar() {
  return (
    <div className="navigation">
      <div className="logo">
        <a href="#">
          <img alt="logo" src={logo} />
        </a>
      </div>
      <ul className="navigation-menu">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Gallery</a>
        </li>
        <li>
          <a href="#">Shop</a>
        </li>
      </ul>
      <div className="searchbar">
        <img className="search-icon" alt="search-icon" src={searchIcon} />
        <input className="search-input" placeholder="Search cinamoroll..." />
        <a href="#">
          <img className="cart-icon" alt="cart-icon" src={cartIcon} />
        </a>
      </div>
      <div className="authentication">
        <a href="#">
          <div className="button-sign">Sign up</div>
        </a>
        <a href="#">
          <div className="button-sign">Sign in</div>
        </a>
      </div>
    </div>
  );
}
