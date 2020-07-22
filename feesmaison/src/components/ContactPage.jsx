import React from 'react';
import Navbar from './Navbar';

function ContactPage() {
  return (
    <div className="global">
      <div>
        <Navbar />
      </div>
      <div className="texte-contact">
        <h2>A propos de nous ...</h2>
        <p>Bonjour à tous !</p>
        <p>La couture, le bricolage, la restauration de mobilier, ... , c'est une histoire de famille chez nous.</p>
        <p>Fées Maison est un site qui regroupe nos créations.</p>
        <p>Si certaines vous plaisent, ou si vous souhaitez des renseignements n'hésitez pas à nous contacter, nous vous répondrons avec grand plaisir</p>
      </div>
      <div className="silhouette">
        <p>images des 3 fées cliquables</p>
      </div>
      <div className="texte-fin-contact">
        <p>A très bientôt !</p>
      </div>

    </div>
  );
}

export default ContactPage;