import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import './GivePage.css'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

export default class Feedback extends Component {
    render() {
        return (
            <div>
                <Card className='feedbackReviewContainer'>
                    <CardContent>
                        <Typography className='feedbackReviewTitle' gutterBottom>
                            Please rate the following feedback
                        </Typography>
                        <TextField multiline variant='outlined' disabled value={this.props.text} margin='normal' className='feedbackReview'/>
                    </CardContent>
                </Card>
                <div className="">
                    <div className="demo">
                        <div className="ratingControl">
                        <input type="radio" id="rating-5" name="rating" value="5" />
                        <label
                            className="ratingControl-stars ratingControl-stars--5"
                            htmlFor="rating-5"
                        >
                            5.0
                        </label>
                        <input type="radio" id="rating-45" name="rating" value="4.5" />

                        <label
                            className="ratingControl-stars ratingControl-stars--45 ratingControl-stars--half"
                            htmlFor="rating-45"
                        >
                            4.5
                        </label>
                        <input type="radio" id="rating-4" name="rating" value="4" />

                        <label
                            className="ratingControl-stars ratingControl-stars--4"
                            htmlFor="rating-4"
                        >
                            4.0
                        </label>
                        <input type="radio" id="rating-35" name="rating" value="3.5" />
                        <label
                            className="ratingControl-stars ratingControl-stars--35 ratingControl-stars--half"
                            htmlFor="rating-35"
                        >
                            3.5
                        </label>
                        <input type="radio" id="rating-3" name="rating" value="3" />
                        <label
                            className="ratingControl-stars ratingControl-stars--3"
                            htmlFor="rating-3"
                        >
                            3.0
                        </label>
                        <input type="radio" id="rating-25" name="rating" value="2.5" />
                        <label
                            className="ratingControl-stars ratingControl-stars--25 ratingControl-stars--half"
                            htmlFor="rating-25"
                        >
                            2.5
                        </label>
                        <input type="radio" id="rating-2" name="rating" value="2" />
                        <label
                            className="ratingControl-stars ratingControl-stars--2"
                            htmlFor="rating-2"
                        >
                            2.0
                        </label>
                        <input type="radio" id="rating-15" name="rating" value="1.5" />
                        <label
                            className="ratingControl-stars ratingControl-stars--15 ratingControl-stars--half"
                            htmlFor="rating-15"
                        >
                            1.5
                        </label>
                        <input type="radio" id="rating-1" name="rating" value="1" />
                        <label
                            className="ratingControl-stars ratingControl-stars--1"
                            htmlFor="rating-1"
                        >
                            1.0
                        </label>
                        <input type="radio" id="rating-05" name="rating" value="0.5" />
                        <label
                            className="ratingControl-stars ratingControl-stars--05 ratingControl-stars--half"
                            htmlFor="rating-05"
                        >
                            0.5
                        </label>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}