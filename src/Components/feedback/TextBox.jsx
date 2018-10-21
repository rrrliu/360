import React, { Component } from 'react';

export default class TextBox extends Component {
    render() {
        return (
            <div>
                <p>Enter your feedback for {this.props.name}:</p>
                <textarea className="answer" placeholder="Type your answer here..." />
            </div>
        )
    }
}