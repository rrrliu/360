import React, { Component } from 'react'
import PropTypes from 'prop-types'
import firebase from '../../firebase';

export default class Slider extends Component {
  
    constructor(props) {
      super(props);
      this.state = {
        step: props.initialStep,
        count: props.initialCount
      };
    }    

    increment() {
        this.setState({count: this.state.count + this.state.step});
        this.addData();
    }
    
    decrement() {
        this.setState({count: this.state.count - this.state.step});
        this.addData();
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
            <div className="member">
                <Result result={this.state.count} />
                <Button onClick={() => this.decrement()}>-</Button>        
                <Button onClick={() => this.increment()}>+</Button>
            </div>
        )
    }

    addData() {
        // Firebase stuff
        const db = firebase.firestore();
        db.settings({
            timestampsInSnapshots: true
        })
        const userRef = db.collection("users").add({
            test: this.state.count
        })
    }
    
}

// Properties
Slider.propTypes = {
    initialCount: PropTypes.number
};

Slider.defaultProps = {
    initialStep: 5,
    initialCount: 0
};

// Components
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
