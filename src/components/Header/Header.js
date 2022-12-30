/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./header.css";
import logo from "../../assets/images/logo.png";
import profile from "../../assets/images/profile-header.jpg";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark static-top">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="..." height="36" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Browse
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Details
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Streams
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Profile
                  <img src={profile} alt="..." height="36" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div class="container">
        <h1 class="mt-4">Logo Nav by Start Bootstrap</h1>
        <p>
          The logo in the navbar is now a default Bootstrap feature in
          Bootstrap! Make sure to set the height of the logo within the HTML or
          using CSS. For best results, use an SVG image as your logo.
        </p>
      </div>
    </>
  );
};

export default Header;
