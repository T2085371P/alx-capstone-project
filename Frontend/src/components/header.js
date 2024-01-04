import React from 'react'
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

const Header = () => {
    return (
      <div>
              <nav className="navbar navbar-expand-lg navbar-light fixed-top">
      <div className="container">
        <Link className="navbar-brand" to={'/'}>
        VATAD CBT Center
        </Link>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to={'/sign-in'}>
                Examiner
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={'/contact-us'}>
                Contact Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={'/about-us'}>
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={'/sign-up'}>
                Sign up
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
      </div>
  );
};

export default Header;
