import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Distribution.css';

class Distribution extends Component {
  constructor(properties) {
    super(properties);
    this.state = {
      step: properties.initialStep,
      count: properties.initialCount
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
          <div className="member">
            <Result result={count} />
            
            <Button onClick={() => this.decrement()}>-</Button>        
            <Button onClick={() => this.increment()}>+</Button>
             
          </div>
          <div className="member">
            <Result result={count} />
            
            <Button onClick={() => this.decrement()}>-</Button>        
            <Button onClick={() => this.increment()}>+</Button>
            
          </div>
          <div className="member">
            <Result result={count} />
            
            <Button onClick={() => this.decrement()}>-</Button>        
            <Button onClick={() => this.increment()}>+</Button>
            
          </div>
        </div>
        <div className="category">
          <h1>Insight</h1>
          <div className="member">
            <Result result={count} />
            
            <Button onClick={() => this.decrement()}>-</Button>        
            <Button onClick={() => this.increment()}>+</Button>
             
          </div>
          <div className="member">
            <Result result={count} />
            
            <Button onClick={() => this.decrement()}>-</Button>        
            <Button onClick={() => this.increment()}>+</Button>
            
          </div>
          <div className="member">
            <Result result={count} />
            
            <Button onClick={() => this.decrement()}>-</Button>        
            <Button onClick={() => this.increment()}>+</Button>
            
          </div>
        </div>
        <div className="category">
          <h1>Efficiency</h1>
          <div className="member">
            <Result result={count} />
            
            <Button onClick={() => this.decrement()}>-</Button>        
            <Button onClick={() => this.increment()}>+</Button>
             
          </div>
          <div className="member">
            <Result result={count} />
            
            <Button onClick={() => this.decrement()}>-</Button>        
            <Button onClick={() => this.increment()}>+</Button>
            
          </div>
          <div className="member">
            <Result result={count} />
            
            <Button onClick={() => this.decrement()}>-</Button>        
            <Button onClick={() => this.increment()}>+</Button>
          </div>
        </div>
        <div className="category">
          <h1>Creativity</h1>
          <div className="member">
            <Result result={count} />
            
            <Button onClick={() => this.decrement()}>-</Button>        
            <Button onClick={() => this.increment()}>+</Button>
             
          </div>
          <div className="member">
            <Result result={count} />
            
            <Button onClick={() => this.decrement()}>-</Button>        
            <Button onClick={() => this.increment()}>+</Button>
            
          </div>
          <div className="member">
            <Result result={count} />
            
            <Button onClick={() => this.decrement()}>-</Button>        
            <Button onClick={() => this.increment()}>+</Button>
            
          </div>
        </div>
        <div className="category">
          <h1>Quality</h1>
          <div className="member">
            <Result result={count} />
            
            <Button onClick={() => this.decrement()}>-</Button>        
            <Button onClick={() => this.increment()}>+</Button>
             
          </div>
          <div className="member">
            <Result result={count} />
            
            <Button onClick={() => this.decrement()}>-</Button>        
            <Button onClick={() => this.increment()}>+</Button>
            
          </div>
          <div className="member">
            <Result result={count} />
            
            <Button onClick={() => this.decrement()}>-</Button>        
            <Button onClick={() => this.increment()}>+</Button>
            
          </div>
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

const Result = ({result}) => (
  <div className="result">{result}</div>
);

const Reset = ({reset}) => (
  <div className="reset" onClick={reset}>x</div>
);

const Button = ({onClick, children}) => (
  <button onClick={onClick}> {children} </button>
);

const InputBox = ({value, update}) => (
  <div>
    <input type="number" value={value} onChange={update} />
  </div> 
);

export default Distribution;