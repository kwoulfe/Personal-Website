import React from 'react';
import './Nav.css';

const Nav = () => (
  <nav
    className="navbar-fixed navbar-expand-lg"
    style={{ backgroundColor: 'transparent' }}
  >
    <ul className="navbar-nav nav-left">
      <li className="nav-item">
        <a className="nav-link" id="name" href="/">
          Kevin Woulfe
        </a>
      </li>
    </ul>
    <ul className="navbar-nav nav-right">
      <li className="nav-item">
        <a className="nav-link" href="/about">
          About
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/work">
          Work
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/contact">
          Contact
        </a>
      </li>
    </ul>
  </nav>
);

export default Nav;
