import React from "react";
import logo from "../../images/logo.png";
import cartIcon from "../../images/cart_icon.svg";
import searchIcon from "../../images/search_icon.svg";
import "./NavigationBar.css";

export default function NavigationBar() {
  return (
    <div className="navigation">
      <div className="logo">
        <img alt="logo" src={logo} />
      </div>
      <ul className="navigation-menu">
        <li>
          <div>Home</div>
        </li>
        <li>
          <div>About</div>
        </li>
        <li>
          <div>Gallery</div>
        </li>
        <li>
          <div>Shop</div>
        </li>
      </ul>
      <div className="searchbar">
        <img className="search-icon" alt="search-icon" src={searchIcon} />
        <input className="search-input" placeholder="Search cinamoroll..." />
        <img className="cart-icon" alt="cart-icon" src={cartIcon} />
      </div>
      <div className="authentication">
        <div className="button-sign">Sign up</div>
        <div className="button-sign">Sign in</div>
      </div>
    </div>
  );
}
