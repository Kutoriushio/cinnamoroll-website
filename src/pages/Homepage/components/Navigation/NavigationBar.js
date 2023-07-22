import React, { useEffect } from "react";
import { useState } from "react";
import logo from "../../../../images/logo.png";
import cartIcon from "../../../../images/cart_icon.svg";
import searchIcon from "../../../../images/search_icon.svg";
import { Link } from "react-router-dom";
import "./NavigationBar.css";

export default function NavigationBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  // check if the window is scrolled, if so, change the navigation bar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    }; // remove the eventListner
  }, []); // use empty array to run only once

  return (
    <>
      <div className={`placeholder ${isScrolled ? "" : "hidden"}`}></div>
      <div className={`navigation ${isScrolled ? "is-nav-scrolled" : ""}`}>
        <div className="logo">
          <Link to="/">
            <img alt="logo" src={logo} />
          </Link>
        </div>
        <ul className="navigation-menu">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/introduce">About</Link>
          </li>
          <li>
            <Link to="/gallery">Gallery</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
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
    </>
  );
}
