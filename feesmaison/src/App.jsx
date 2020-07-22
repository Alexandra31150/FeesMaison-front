import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import ContactPage from './components/ContactPage';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ContactPage />
      <p className="made">Made with ♡ by Alexandra P.</p>
    </div>
  );
}

export default App;
