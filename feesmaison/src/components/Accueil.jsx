import React, { Component } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
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
        <div>
          <Navbar />
        </div>         
        <h2>Découvrez nos produits ...</h2>
          <div className="container-carte">
            <div className="carte-produit">
              <h3>{this.state.name}</h3>
              <img src={this.state.photo} alt={this.state.name} />
              <p>{this.state.category}</p>
            </div>
          <div className="carte-produit">
            <h3>Doudou et balle de préhension</h3>
            <img src="https://zupimages.net/up/20/30/w484.jpg" alt="doudou vert" className="carte-img"/>
          </div>
          <div className="carte-produit">
            <h3>Meuble coloré</h3>
            <img src="https://zupimages.net/up/20/30/5z61.jpg" alt="meucle colore" className="carte-img" />
          </div>
          <div className="carte-produit">
            <h3>Fauteuil rénové</h3>
            <img src="https://zupimages.net/up/20/30/bmsj.jpg" alt="fauteuil" className="carte-img"/>
          </div>
          <div className="carte-produit">
            <h3>Cotons démaquillants</h3>
            <img src="https://zupimages.net/up/20/30/h2il.jpg" alt="cotons démaquillants" className="carte-img"/>
          </div>
          </div>
        <div>
          <Footer />
        </div> 
      </div>
    )
  }
}

export default Accueil;


// 1 select pour la categorie
// 1 select pour la créatrice