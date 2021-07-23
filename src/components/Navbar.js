/** @format */

import React from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";

function Navbar() {
  return (
    <>
      <div className="navbar-container">
        <div className="logo">
          <Link to="/">
            <i className="fab fa-accusoft"></i>
          </Link>
        </div>

        <div className="nav-el">
          <Link to="/">Home </Link>
          <Link to="/about">About</Link>
          <Link to="/playGames">Play Games</Link>
          <Link to="/sign-up">SIGN UP </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
