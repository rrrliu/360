import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import firebase from '../../firebase';

export default class Slider extends Component {

    constructor(props){
        super(props);
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }

    increment() {
        this.props.updateVal(this.props.step, this.props.index);
        this.addData();
    }
    
    decrement() {
        this.props.updateVal(-1*this.props.step, this.props.index);
        this.addData();
    }

    render() {
        return (
            <div className="member">
                <Result result={this.props.count} />
                <Button className='distButton' variant='outlined' onClick={() => this.decrement()}>-</Button>
                <Button className='distButton' variant='outlined' onClick={() => this.increment()}>+</Button>
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

const Result = ({result}) => (
    <div className="result">{result}</div>
);
