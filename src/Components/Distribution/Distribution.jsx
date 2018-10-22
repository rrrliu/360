import React, { Component } from 'react';
import './Distribution.css';
import Slider from './Slider';

class Distribution extends Component {
  

  render() {
    return (
      <div className="counter">
        <div className="category">
          <h1>Presence</h1>
          <Slider />
          <Slider />
          <Slider />
        </div>
        <div className="category">
          <h1>Insight</h1>
          <Slider />
          <Slider />
          <Slider />
        </div>
        <div className="category">
          <h1>Efficiency</h1>
          <Slider />
          <Slider />
          <Slider />
        </div>
        <div className="category">
          <h1>Creativity</h1>
          <Slider />
          <Slider />
          <Slider />
        </div>
        <div className="category">
          <h1>Quality</h1>
          <Slider />
          <Slider />
          <Slider />
        </div>
      </div>
   );    
  }
}

export default Distribution;