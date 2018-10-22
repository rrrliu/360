import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './Components/Login/Login';
import GivePage from './Components/feedback/GivePage';
import ReviewPage from './Components/feedback/ReviewPage';
import Distribution from './Distribution/Distribution'
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard'
import SemanticSurvey from './Components/Semantic/SemanticSurvey'

class App extends Component {
  render() {
    return (
      <div className="App">
          <Login />
        <div>
          <Router>
            <Switch>
              <Route exact path="/dashboard" component={Dashboard} />
              <Route exact path= "/semantics" component={SemanticSurvey} />
              <Route exact path="/" />
              <Route exact path="/distribution" component= {Distribution} />
              <Route exact path="/give" component={GivePage} />
              <Route exact path="/review" component={ReviewPage} />
            </Switch>
          </Router>
        </div>
      </div>
  
    );
  }
  
}
export default App;