import React, { Component } from 'react';
import './App.css';

import Nav from './components/Nav.js';
import HomeHero from './components/HomeHero.js';
import Card from './components/Card.js';

import zuke from "./assets/hero-zuke.png"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav/>
        <HomeHero/>
        {/* <Card description="The Music Network" title="Zuke Music" background={zuke}/> */}
      </div>
    );
  }
}

export default App;
