import React from 'react';
import {Link} from 'react-router-dom';
// import './Navbar.css';

function Navbar() {
  return (
    <div>
      <ul className="navbar">
        <li>
        <Link to="/" className="link-nav" style={{ textDecoration: 'none' }}>
          Accueil
        </Link>
        <Link to="contact" className="link-nav" style={{ textDecoration: 'none' }}>
          Contact
        </Link>
        <Link to="creatrice" className="link-nav" style={{ textDecoration: 'none' }}>
          Créatrices
        </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;