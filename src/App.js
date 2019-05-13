import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import NavViewController from './components/NavViewController.js';
import Footer from './components/Footer.js';
import HomePage from './pages/HomePage.js';
import NotFoundPage from './pages/NotFoundPage.js';
import MePage from './pages/MePage.js';
import ZukeProjectPage from './pages/projects/ZukeProjectPage.js';

class App extends Component {
  render() {
    return (
      <Router>
        <div style={{color: "white"}}>
          <NavViewController/>

          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/(me|about)" component={MePage} />
            <Route path="/(zuke-music|zuke)" component={ZukeProjectPage} />
            <Route component={NotFoundPage} />
          </Switch>
          
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
