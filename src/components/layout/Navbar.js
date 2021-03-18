import React from 'react';
import { Link } from 'gatsby';

function Navbar() {
  return (
    <div className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <Link to="/">
            WEST<span>COAST</span>
            <span>CLEFT</span>
          </Link>
        </div>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
        <div className="nav-contact">
          <div>
            <a href="mailto:westcoastcleft@gmail.com">
              westcoastcleft@gmail.com
            </a>
          </div>
          <div>
            <a href="tel:541-408-1777">541-408-1777</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
