import React from "react";
import logo from "../images/logo.png";
import cartIcon from "../images/cart_icon.svg";
import searchIcon from "../images/search_icon.svg";
import "./NavigationBar.css";

export default function NavigationBar() {
  return (
    <div className="navigation">
      <div className="logo">
        <img alt="logo" src={logo} />
      </div>
      <ul className="navigation-menu">
        <li>Home</li>
        <li>Shop</li>
        <li>Recommanded</li>
        <li>About</li>
      </ul>
      <div className="searchbar">
        <img className="search-icon" alt="search-icon" src={searchIcon} />
        <input className="search-input" placeholder="Search cinamoroll..." />
        <img className="cart-icon" alt="cart-icon" src={cartIcon} />
      </div>
      <div className="authentication">
        <li>Sign up</li>
        <li>Sign in</li>
      </div>
    </div>
  );
}
