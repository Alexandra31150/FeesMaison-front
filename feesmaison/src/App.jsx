import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import PageCreatrice from './components/PageCreatrice';
import ContactPage from './components/ContactPage';
import Footer from './components/Footer';
import Accueil from './components/Accueil';
import PageProduit from './components/PageProduit'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name:'',
      category:'',
      photo:'',
      price:'',
      description:''
    };
    this.handleDivCategory = this.handleDivCategory.bind(this);
  }

  handleDivCategory = event => {
    this.setState({
      category: event.currentTarget.dataset.div_name
    });
  };

  render() {
    return (
      <div className="App">
        <Router>

            <Route path="/" exact>
              <Navbar />
              <Accueil
                name={this.state.name}
                category={this.state.category}
                photo={this.state.photo}
                description={this.state.description}
              />
              <Footer />
            </Route>

            <Route path="/page-produit" component={PageProduit} >
              <Navbar />
              <PageProduit />
              <Footer />
            </Route>


            <Route path="/espace-creatrice" component={PageCreatrice}>
              <Navbar />
              <PageCreatrice />
              <Footer />
            </Route>
              
            <Route path="/contact" component={ContactPage} >
              <Navbar />
              <ContactPage />
              <Footer />
            </Route>

        </Router>
      </div>
    );
  }
}



export default App;
