import React from 'react';
import Navbar from '/Navbar';

function ContactPage() {
  return (
    <div className="global">
      <div className="navbar-contact">
        <Navbar />
      </div>
      <div className="texte-contact">
        <h2>A propos de nous ...</h2>
        <p>Bonjour à tous !</p>
        <p>La couture, le bricolage, la restauration de mobilier, ... , c'est une histoire de famille chez nous. Voici donc un site qui repertorie nos créations. Si certaines vous plaisent, n'hésitez pas à nous contacter, nous vous répondrons avec grand plaisir</p>
      </div>
      <div className="silhouette">
        <p>images des 3 fées</p>
      </div>
      <div className="texte-fin-contact">
        <p>A très bientôt !</p>
      </div>

    </div>
  );
}

export default ContactPage;