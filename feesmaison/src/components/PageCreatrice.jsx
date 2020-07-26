import React, { Component } from 'react';
import axios from 'axios';
import '../CSS/PageCreatrice.css';

// Permet aux creatrices de poster un produit

class ProductForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name:'',
      category:'',
      photo:'',
      price:'',
      description:''
    };
    this.onChange = this.onChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  submitForm(e) {
    e.preventDefault();
    const url = '/product';
    axios
      .post(url, this.state)
      .then(res => res.data)
      .then(res => {
        alert(`Le produit a été ajoutée avec succès`);
      })
      .catch(event => {
        console.log(event);
        alert(`Erreur lors de l'ajout du produit`);
      });
  }

  render() {
    const {
      name,
      category,
      photo,
      price,
      description
    } = this.state;
    return (
      <div className="ProductForm container-admin">
        <h2 className="titre-crea">Espace créatrice</h2>
        <form onSubmit={this.submitForm}>
          <fieldset>
            <legend className="legende">Ajouter un produit</legend>
            <div className="form-data">
              <label htmlFor="name">Nom du produit</label>
              <input className="creaform" type="text" name="name" onChange={this.onChange} value={name} />
            </div>
            <div className="form-data">
              <label htmlFor="category">Catégorie</label>
              <select className="creaform" type="submit" name="category" onChange={this.onChange} value={category}>
                <option valeur=""> </option>
                <option valeur="Meuble">Meuble</option>
                <option valeur="Vêtement enfant">Vêtement enfant</option>
                <option valeur="Vêtement adulte">Vêtement adulte</option>
                <option valeur="Accessoire">Accessoire</option>
                <option valeur="Autre">Autre</option>
              </select>
            </div>
            <div className="form-data">
              <label htmlFor="photo">URL photo</label>
              <input className="creaform" type="url" name="photo" onChange={this.onChange} value={photo} />
            </div>
            <div className="form-data">
              <label htmlFor="price">Prix</label>
              <input className="creaform" type="number" name="price" onChange={this.onChange} value={price} />
            </div>
            <div className="form-data">
              <label htmlFor="description">Description</label>
              <input className="creaform" type="text" name="description" onChange={this.onChange} value={description} />
            </div>
            <hr />
            <div className="form-data">
              <input type="submit" value="Envoyer" />
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default ProductForm;
