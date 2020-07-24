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
        <h2>A propos de nous ...</h2>
        <p>Bonjour à tous !</p>
        <p>La couture, le bricolage, la restauration de mobilier, ... , c'est une histoire de famille chez nous.</p>
        <p>Fées Maison est un site qui regroupe nos créations.</p>
        <p>Si certaines vous plaisent, ou si vous souhaitez des renseignements n'hésitez pas à nous contacter, nous vous répondrons avec grand plaisir</p>
      </div>
      <div className="silhouette">
        <div className="fee1">
          <img src="https://cdn.pixabay.com/photo/2017/09/16/01/20/creature-2754294_960_720.png" alt="fée Marylène" />
          <span>Marylène</span>
        </div>
        <div className="fee2">
          <img src="https://cdn.pixabay.com/photo/2016/04/11/07/35/fee-1321466_960_720.png" alt="fée Chrystelle" />
          <span>Chrystelle</span>
        </div>
        <div className="fee3">
          <img src="https://cdn.pixabay.com/photo/2017/09/26/18/06/faery-2789592_960_720.png" alt="fée Valérie" />
          <span>Valérie</span>
        </div>
      </div>
      <div>
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
          <input type="submit" id="submitBtn" value="Envoyer" class="bouton" />
        </form>
      </div>
      <div className="texte-fin-contact">
        <p>A très bientôt !</p>
      </div>

    </div>
  );
}

export default ContactPage;