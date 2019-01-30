import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import LandingPage from './components/LandingPage'
import UserHome from './components/Users/UserHome'
import SingleUserPage from './components/Users/SingleUserPage';
import SingleRestaurant from './components/Restaurants/SingleRestaurant';



class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/users" component={UserHome}/>
        <Route exact path="/users/:userId" component={SingleUserPage}/>
        <Route exact path="/restaurants/:restaurantId" component={SingleRestaurant} />
        </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
