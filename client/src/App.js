import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import NavBar from './com'

class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <NavBar/>>
        <Switch>

        </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
