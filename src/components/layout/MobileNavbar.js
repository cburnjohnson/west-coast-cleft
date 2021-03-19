import React from 'react';
import { Link } from 'gatsby';
import '../../styles/navbar.css';

const MobileNavbar = () => {
  return (
    <nav className="mobile-navbar">
      <div id="menuToggle">
        <input type="checkbox" />

        <span></span>
        <span></span>
        <span></span>

        <ul id="menu">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <a href="mailto:westcoastcleft@gmail.com">
              westcoastcleft@gmail.com
            </a>
          </li>
          <li>
            <a href="tel:541-408-1777">541-408-1777</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default MobileNavbar;
