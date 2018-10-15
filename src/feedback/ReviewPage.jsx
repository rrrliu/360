import React, { Component } from 'react';
import Feedback from './Feedback';

export default class ReviewPage extends Component {
    render() {
        return (
            <div>
                <Feedback text='[REDACTED] was the worst person I have ever met in my eighteen years of life.' />
                <Feedback text='[REDACTED] was a great teammate and always got the job done.' />
				<input type="submit" value="Submit"/>
            </div>
        )
    }
}