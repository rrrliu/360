import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GivePage from './Components/feedback/GivePage';
import ReviewPage from './Components/feedback/ReviewPage';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard'
import SemanticSurvey from './Components/Semantic/SemanticSurvey'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" />
            <Route exact path="/give" component={GivePage} />
            <Route exact path="/review" component={ReviewPage} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path= "/semantics" component={SemanticSurvey} />
          </Switch>
        </Router>

      </div>
    );
  }
}

export default App;