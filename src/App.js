import React, { Component } from 'react';

import NavViewController from './components/NavViewController.js';
import Footer from './components/Footer.js';
import HomePage from './pages/HomePage.js';
import MePage from './pages/MePage.js';

class App extends Component {
  render() {
    return (
      <div style={{color: "white"}}>
        <NavViewController/>
        <HomePage/>
        <Footer/>
      </div>
    );
  }
}

export default App;
