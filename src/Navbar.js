import React from 'react';

export default function Navbar() {
  return (
    <section id="navbar">
      <div id="logo-name" className="navbar-col-left">
        {' '}
        <h2 id="logo-name"> Alperen Atik </h2>
        <p id="logo-subname"> Developer Portfolio Website </p>
      </div>

      <div id="nav-wrapper" className="navbar-col-right">
        <ul>
          <div className="nav-items">
            <li>
              {' '}
              <i className="fas fa-id-card" />
              Summary
            </li>
          </div>
          <div className="nav-items">
            <li>
              {' '}
              <i className="fas fa-store" />
              Portfolio
            </li>
          </div>
          <div className="nav-items">
            <li>
              <i className="fas fa-globe" />
              Contact
            </li>
          </div>
        </ul>
      </div>
    </section>
  );
}
