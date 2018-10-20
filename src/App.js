import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Distribution from './Distribution/Distribution'
import PropTypes from 'prop-types';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className= "App">
        <Router>
          <Switch>
          <Route exact path="/distribution" component= {Distribution} />
          </Switch>
        </Router>
      </div>
  
    );
  }
  
}
export default App;