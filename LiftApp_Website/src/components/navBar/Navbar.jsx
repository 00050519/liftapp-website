import React, { useState } from "react";
import LiftAppLogo from '../../assets/logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar  fixed-top navbar-expand-lg bg-light shadow">
      <div className="container-fluid">
        <a className="navbar-brand d-flex flex-row align-items-center" href="#">
          <img src={LiftAppLogo} alt="Logo" width="40" height="40" className="d-inline-block align-text-top me-3"/>
          Lift App
        </a>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleMenu}
          aria-expanded={isMenuOpen ? "true" : "false"}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`}>
          <ul className={`navbar-nav ${isMenuOpen ? "me-auto" : "ms-auto"} mb-2 mb-lg-0`}>
            <li className="nav-item me-3">
              <a className="nav-link active" aria-current="page" href="#offerSection">
                Home
              </a>
            </li>
            <li className="nav-item me-3">
              <a className="nav-link" href="#featuresSection">
                Features
              </a>
            </li>
            <li className="nav-item me-5">
              <a className="nav-link" href="#aboutSection">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="btn btn-success" href="#">
                Download
              </a>
            </li>
          </ul>
    
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
