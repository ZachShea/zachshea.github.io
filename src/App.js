import React, { Component } from 'react';
import './App.css';
import Card from './components/Card.js';

import zuke from "./assets/hero-zuke.png"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Card description="The Music Network" title="Zuke Music" background={zuke}/>
      </div>
    );
  }
}

export default App;
