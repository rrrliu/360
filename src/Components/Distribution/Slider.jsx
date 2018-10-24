import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import firebase from '../../firebase/firebase';
import Typography from '@material-ui/core/Typography';
import './Slider.css';

export default class Slider extends Component {

    constructor(props){
        super(props);
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }

    increment() {
        this.props.updateVal(this.props.step, this.props.index);
    }
    
    decrement() {
        this.props.updateVal(-1*this.props.step, this.props.index);
    }

    render() {
        return (
            <div className="member">
                <Typography align='center' className='sliderName'>{this.props.teammate}</Typography>
                <Result result={this.props.count} className="result" />
                <Button className='distButton' variant='outlined' onClick={() => this.decrement()}>-</Button>
                <Button className='distButton' variant='outlined' onClick={() => this.increment()}>+</Button>
            </div>
        )
    }
    
}

const Result = ({result}) => (
    <div className="result">{result}</div>
);
