import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Distribution.css';
import Slider from './Slider';

class Distribution extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      step: props.initialStep,
      count: props.initialCount
    };
  }
  
  increment() {
      this.setState({count: this.state.count + this.state.step});
  }
  
  decrement() {
      this.setState({count: this.state.count - this.state.step});
  }

  update(e) {
      this.setState({
          step: parseInt(e.target.value, 10) || 0
      })
  }

  reset(e) {
      this.setState({count: 0});
  }

  render() {
    const { count, step } = this.state
    return (
      <div className="counter">
        <div className="category">
          <h1>Presence</h1>
          <Slider count={count} step={step} />
          <Slider count={count} step={step} />
          <Slider count={count} step={step} />
        </div>
        <div className="category">
          <h1>Insight</h1>
          <Slider count={count} step={step} />
          <Slider count={count} step={step} />
          <Slider count={count} step={step} />
        </div>
        <div className="category">
          <h1>Efficiency</h1>
          <Slider count={count} step={step} />
          <Slider count={count} step={step} />
          <Slider count={count} step={step} />
        </div>
        <div className="category">
          <h1>Creativity</h1>
          <Slider count={count} step={step} />
          <Slider count={count} step={step} />
          <Slider count={count} step={step} />
        </div>
        <div className="category">
          <h1>Quality</h1>
          <Slider count={count} step={step} />
          <Slider count={count} step={step} />
          <Slider count={count} step={step} />
        </div>
      </div>
   );    
  }
}

// Properties
Distribution.propTypes = {
  initialCount: PropTypes.number
};

Distribution.defaultProps = {
  initialStep: 5,
  initialCount: 0
};

export default Distribution;