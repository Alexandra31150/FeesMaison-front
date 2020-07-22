import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import ContactPage from './components/ContactPage';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ContactPage />
      <Footer />
    </div>
  );
}

export default App;
