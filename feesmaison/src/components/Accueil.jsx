import React, { Component } from 'react';
import axios from 'axios';
import '../CSS/Accueil.css';

class Accueil extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name:'',
      category:'',
      photo:'',
    };
    this.getProduct = this.getProduct.bind(this);
  }

  componentDidMount() {
    this.getProduct();
  }

  getProduct() {
    axios
      .get('/product')
      .then(response => response.data)
      .then(product => {
        this.setState({
          name: product.name,
          category: product.category,
          photo: product.photo,
        })
      })
  }

  render() {
    return (
      <div className="accueil-global">        
        <h2 className="titre-acc">Découvrez ci-dessous une partie de nos articles faits maison ...</h2>
          <div className="container-carte">
            {/* <div className="carte-produit">
              <h3>{this.state.name}</h3>
              <img src={this.state.photo} alt={this.state.name} />
              <p>Catégorie : {this.state.category}</p>
            </div> */}
          <div className="carte-produit">
            <h3 className="titre-carte">Doudou et balle de préhension</h3>
            <img src="https://zupimages.net/up/20/30/w484.jpg" alt="doudou vert" className="carte-img"/>
            <p className="textecategorie">Catégorie : Autre</p>
          </div>
          <div className="carte-produit">
            <h3 className="titre-carte">Meuble coloré</h3>
            <img src="https://zupimages.net/up/20/30/5z61.jpg" alt="meucle colore" className="carte-img" />
            <p className="textecategorie">Catégorie : Meuble</p>
          </div>
          <div className="carte-produit">
            <h3 className="titre-carte">Fauteuil rénové</h3>
            <img src="https://zupimages.net/up/20/30/bmsj.jpg" alt="fauteuil" className="carte-img"/>
            <p className="textecategorie">Catégorie : Meuble</p>
          </div>
          <div className="carte-produit">
            <h3 className="titre-carte">Cotons démaquillants</h3>
            <img src="https://zupimages.net/up/20/30/h2il.jpg" alt="cotons démaquillants" className="carte-img"/>
            <p className="textecategorie">Catégorie : Autre</p>
          </div>
          <div className="carte-produit">
            <h3 className="titre-carte">Sac à main</h3>
            <img src="https://zupimages.net/up/20/30/lz4k.jpg" alt="sac a main" className="carte-img"/>
            <p className="textecategorie">Catégorie : Accessoire</p>
          </div>
          <div className="carte-produit">
            <h3 className="titre-carte">Doudou éléphant</h3>
            <img src="https://zupimages.net/up/20/30/npam.jpg" alt="doudou elephant" className="carte-img"/>
            <p className="textecategorie">Catégorie : Autre</p>
          </div>
          </div>
      </div>
    )
  }
}

export default Accueil;
