import React from 'react';
import Navbar from './Navbar';
import '../CSS/ContactPage.css';

// Page de contact avec les créatrices

function ContactPage() {
  return (
    <div className="global">
      <div>
        <Navbar />
      </div>
      <div className="texte-contact">
        <h2 className="titre-contact">A propos de nous ...</h2>
        <p>La couture, le bricolage, la restauration de mobilier, ... , c'est une histoire de famille chez nous.</p>
        <p>Fées Maison est un site qui regroupe nos créations.</p>
        <p>Si certaines vous plaisent, ou si vous souhaitez des renseignements n'hésitez pas à nous contacter, nous vous répondrons avec grand plaisir</p>
      </div>
      <div className="silhouette">
        <div className="fee1">
          <img src="https://zupimages.net/up/20/30/bari.png" alt="fée Marylène" />
          <span className="prenom">Marylène</span>
        </div>
        <div className="fee2">
          <img src="https://zupimages.net/up/20/30/2tvr.png" alt="fée Chrystelle" />
          <span className="prenom">Chrystelle</span>
        </div>
        <div className="fee3">
          <img src="https://zupimages.net/up/20/30/0xy4.png" alt="fée Valérie" />
          <span className="prenom">Valérie</span>
        </div>
      </div>
      <div className="box">
        <h1 className="titrecontact">Contactez-nous</h1>
        <form id="contact">
          <div>
            <input type="text" id="name" name="Nom" required=""/>
            <label>Name</label>
          </div>
          <div>
            <input type="email" id="" name="Email" required/>
            <label>Email</label>
          </div>
          <div>
            <textarea name="Message" required></textarea>
            <label>Message</label>
          </div>
          <input type="submit" id="submitBtn" value="Envoyer" className="bouton" />
        </form>
      </div>
    </div>
  );
}

export default ContactPage;