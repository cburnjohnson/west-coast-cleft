import React from 'react';

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
          <a href="#">
            <li>Home</li>
          </a>
          <a href="#">
            <li>About</li>
          </a>
          <a href="#">
            <li>Westcoastcleft@gmail.com</li>
          </a>
          <a href="#">
            <li>541-408-1777</li>
          </a>
        </ul>
      </div>
    </nav>
  );
};

export default MobileNavbar;
