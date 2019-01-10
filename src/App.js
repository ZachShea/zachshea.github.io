import React, { Component } from 'react';

import Nav from './components/Nav.js';
import HomeHero from './components/HomeHero.js';
import Projects from './components/Projects.js';
import Visuals from './components/Visuals.js';
import Music from  './components/Music.js';
import Footer from  './components/Footer.js';

class App extends Component {
  render() {
    return (
      <div style={{color: "white"}}>
        <Nav/>
        <HomeHero/>
        <Projects/>
        <Visuals/>
        <Music/>
        <Footer/>
      </div>
    );
  }
}

export default App;
