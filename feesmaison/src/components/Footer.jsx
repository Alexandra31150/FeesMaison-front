import React from 'react';
import {Link} from 'react-router-dom';
import '../CSS/Footer.css';
import PageCreatrice from './PageCreatrice';

function Footer() {
  return (
    <div className="footer">
      <ul className="footer-list">
        <li className="made">
        Made with ♡ by Alexandra P.
        </li>
        <li className="espace-crea"> 
        <Link to="espace-creatrice" className="link-nav" style={{ textDecoration: 'none' }}>
          <a href={PageCreatrice}>Espace créatrice</a>
        </Link>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
