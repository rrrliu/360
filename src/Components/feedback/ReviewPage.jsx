import React, { Component } from 'react';
import Feedback from './Feedback';

export default class ReviewPage extends Component {
    render() {
        return (
            <div className="reviewContainer">
            <form action="POST">
                <Feedback text='[REDACTED] was the worst person I have ever met in my eighteen years of life.' />
				<input type="submit" value="Submit"/>
            </form>
            </div>
        )
    }
}