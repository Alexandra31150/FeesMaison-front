import React from 'react';
import {Link} from 'react-router-dom';
// import './Navbar.css';

function Navbar() {
  return (
    <div>
      <ul className="navbar">
        <li>
          Accueil
        </li>
        <li>
          Créatrices
        </li><li>
          Contact
        </li>
      </ul>
    </div>
  );
}

export default Navbar;