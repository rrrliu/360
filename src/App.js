import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import logo from './logo.svg';
import GivePage from './feedback/GivePage';
import ReviewPage from './feedback/ReviewPage';
import Semantic from './Semantic/SemanticSurvey';
import './App.css';
import Dashboard from './Components/Dashboard.js'
import AppDragDrop from './AppDragDrop.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="logout-container">
          {/*<Semantic />*/}
        </div>

          <Router>
              <Switch>
                  <Route exact path= "/semantics" component={AppDragDrop} />
                  <Route exact path="/dashboard" component={Dashboard} />
              </Switch>
          </Router>
      </div>
    );
  }
}

export default App;