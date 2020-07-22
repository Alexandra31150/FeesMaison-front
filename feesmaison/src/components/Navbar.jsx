import React from 'react';
// import {Link} from 'react-router-dom';
import '../CSS/Navbar.css';

function Navbar() {
  return (
    <div className="navbar">
      <ul className="navbar-list">
        <li className="list">
          <img src="https://zupimages.net/up/20/30/823v.png" alt="logo" className="logo" /> 
        </li> 
        <li className="list">
          Accueil
        </li>
        <li className="list">
          Créatrices
        </li>
        <li className="list">
          Contact
        </li>
      </ul>
    </div>
  );
}

export default Navbar;