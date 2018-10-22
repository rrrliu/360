import React, { Component } from 'react'

export default class Slider extends Component {
    
    render() {
        return (
            <div className="member">
                <Result result={this.props.count} />
                <Button onClick={() => this.decrement()}>-</Button>        
                <Button onClick={() => this.increment()}>+</Button>
            </div>
        )
    }
    
}

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