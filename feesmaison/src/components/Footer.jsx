import React from 'react';
// import {Link} from 'react-router-dom';
import '../CSS/Footer.css';
// import PageCreatrice from './PageCreatrice';

// Footer simple avec lien vers l'espace créatrice

function Footer() {
  return (
    <div className="footer">
      <ul className="footer-list">
        <li className="made">
        Made with ♡ by Alexandra P.
        </li>
        <li className="espace-crea"> 
          Espace créatrice
        </li>
      </ul>
    </div>
  );
}

export default Footer;
