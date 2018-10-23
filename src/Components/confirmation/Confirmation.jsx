import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import './Confirmation.css';
import { Typography } from '@material-ui/core';

export default class Confirmation extends Component {
    render() {
        return (
            <div className="confirm-container">
                <Card className="feedbackCard">
                    <CardContent>
                        <Typography className='categoryTitle' gutterBottom>
                            Aye, ye done!
                        </Typography>
                        <svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                            <circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none"/>
                            <path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
                        </svg>
                        <Typography className='categorySubtitle' gutterBottom>
                           Journey complete. Set your sails for next week.
                        </Typography>
                        <p></p>
                        <a href="/" id="signout">Dashboard</a>
                    </CardContent>
                </Card>
            </div>
        )
    }
}