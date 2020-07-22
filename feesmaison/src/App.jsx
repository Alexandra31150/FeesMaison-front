import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import PageCreatrice from './components/PageCreatrice';
import ContactPage from './components/ContactPage';
import Footer from './components/Footer';

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
          <Switch>
            <Navbar />
            <Route path="/" exact>
              {/* <Accueil
                name={this.state.name}
                category={this.state.category}
                photo={this.state.photo}
                price={this.state.price}
                description={this.state.description}
              /> */}
              <Footer />
            </Route>
            <Route path="/espace-creatrice" exact>
              <PageCreatrice />
            </Route>
            <Route path="/contact" exact>
              <ContactPage /> {' '}
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}



export default App;
