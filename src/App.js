import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import NavViewController from './components/NavViewController.js';
import Footer from './components/Footer.js';
import HomePage from './pages/HomePage.js';
import MePage from './pages/MePage.js';

class App extends Component {
  render() {
    return (
      <Router>
        <div style={{color: "white"}}>
          <NavViewController/>

          <Route path="/" exact component={HomePage} />
          <Route path="/me" component={MePage} />
          
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
