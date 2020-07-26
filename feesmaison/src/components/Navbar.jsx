import React from 'react';
import {Link} from 'react-router-dom';
import '../CSS/Navbar.css';

// Barre de navigation avec logo et liens vers differentes page

function Navbar() {
  return (
    <div className="navbar">
      <ul className="navbar-list">
        <li className="list">
          <img src="https://zupimages.net/up/20/30/823v.png" alt="logo" className="logo" /> 
        </li> 
        <li className="list">
          <Link to="/" className="link-nav" style={{ textDecoration: 'none' }}>
            <p>Accueil</p>
          </Link>
        </li>
        <li className="list">
          <Link to="/contact" className="link-nav" style={{ textDecoration: 'none' }}>
            <p>Contact</p>
          </Link>
        </li>
        <li className="list">
          <Link to="/espace-creatrice" className="link-nav" style={{ textDecoration: 'none' }}>
            <p>Espace créatrice</p>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;