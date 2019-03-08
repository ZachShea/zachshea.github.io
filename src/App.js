import React, { Component } from 'react';

import NavViewController from './components/NavViewController.js';
import HomeHero from './components/HomeHero.js';
import Projects from './components/Projects.js';
import Visuals from './components/Visuals.js';
import Music from  './components/Music.js';
import Footer from  './components/Footer.js';

class App extends Component {
  render() {
    return (
      <div style={{color: "white"}}>
        <NavViewController/>
        <HomeHero/>
        <Projects/>
        {/* <Visuals/>
        <Music/> */}
        <Footer/>
      </div>
    );
  }
}

export default App;
