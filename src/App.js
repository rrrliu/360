import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GivePage from './feedback/GivePage';
import ReviewPage from './feedback/ReviewPage';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" />
            <Route exact path="/give" component={GivePage} />
            <Route exact path="/review" component={ReviewPage} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
