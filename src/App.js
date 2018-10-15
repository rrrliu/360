import React, { Component } from 'react';
import Semantic from './Semantic/SemanticSurvey';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="logout-container">
          <Semantic />
        </div>
      </div>
    );
  }
}

export default App;