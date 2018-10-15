import React, { Component } from 'react';
import logo from './logo.svg';
import GivePage from './feedback/GivePage';
import ReviewPage from './feedback/ReviewPage';
import './App.css';
import Dashboard from './Components/Dashboard.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Dashboard />
      </div>
    );
  }
}

export default App;
