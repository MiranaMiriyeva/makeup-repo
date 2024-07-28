import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <header>
        <img className="header-icon"  src="../assets/img/transparent-icon.png" alt="" />
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div >
        <FontAwesomeIcon className="shopping-icon" icon={faCartShopping} /> 
          <button>GET A QUOTE</button>
          </div>
      </header>
    </div>
  );
};

export default Header;
