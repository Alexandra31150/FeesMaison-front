import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import PageCreatrice from './components/PageCreatrice';
import ContactPage from './components/ContactPage';
import Footer from './components/Footer';
import Accueil from './components/Accueil';

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
            {/* <Navbar /> */}
            {/* <PageCreatrice /> */}
            <ContactPage />

            {/* <Route path="/" exact>
              <Accueil
                name={this.state.name}
                category={this.state.category}
                photo={this.state.photo}
                price={this.state.price}
                description={this.state.description}
              />
            </Route> */}
            <Route path="/espace-creatrice" component={PageCreatrice} />
              
            <Route path="/contact" component={ContactPage} />

            <Footer />
          </Switch>
        </Router>
      </div>
    );
  }
}



export default App;
