import React from 'react';

function Navbar() {
  return (
    <div className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          WEST<span>COAST</span>
          <span>CLEFT</span>
        </div>
        <ul className="nav-links">
          <li>Home</li>
          <li>About</li>
        </ul>
        <div className="nav-contact">
          <div>Westcoastcleft@gmail.com</div>
          <div>541-408-1777</div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
