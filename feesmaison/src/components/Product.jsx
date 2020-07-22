import React, { Component } from 'react';
import axios from 'axios';

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productslist: []
    };
  }

  componentDidMount() {
    axios
      .get('/productList')
      .then(response => response.data)
      .then(productlist => {
        this.setState({
          productslist: productlist.results
        });
      });
  }

  render() {
    const { productslist } = this.state;
    return (
      <div className="monitorContainer">
        <h2>Liste des produits</h2>

        <table className="productMonitor">
          <tr>
            <th className="titleTab">Indice produit</th>
            <th className="titleTab">Url photo</th>
            <th className="titleTab">Nom du produit</th>
            <th className="titleTab">Catégorie</th>
            <th className="titleTab">Prix</th>
            <th className="titleTab">Description</th>
          </tr>
          {productslist.map(productlist => (
            <tr className="sectionTab">
              <td className="product" key={productlist.id}>
                {productlist.id}
              </td>
              <td className="product" key={productlist.id}>
                {productlist.photo}
              </td>
              <td className="product" key={productlist.id}>
                {productlist.name}
              </td>
              <td className="product" key={productlist.id}>
                {productlist.category}
              </td>
              <td className="product" key={productlist.id}>
                {productlist.price}
              </td>
              <td className="product" key={productlist.id}>
                {productlist.description}
              </td>
            </tr>
          ))}
        </table>
      </div>
    );
  }
}

export default Product;
