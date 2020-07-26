import React, { Component } from 'react';
//vimport axios from 'axios';
import '../CSS/PageProduit.css';

class ProductPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name:'',
      category:'',
      photo:'',
      price:'',
      description:''
    }
  }
  
  render() {
    return (
      <div className="produit-global">
        <h2 className="titre-produit">Doudou et balle de préhension</h2>
        <div className="catego">
          <p>Catégorie: Autre</p>
        </div>
        <div className="img-produit">
          <img src="https://zupimages.net/up/20/30/w484.jpg" alt="doudou vert" className="produit-img"/>
        </div>
        <div className="texte-description">
          <p className="description">Doudou fait en coton</p>
          <p className="description">Balle de préhension idéale pour la motricité des petits</p>
        </div>
        <div className="texte-price">
          <p className="prix">30 €</p>
        </div>
      </div>
    )
  }
}

export default ProductPage;
