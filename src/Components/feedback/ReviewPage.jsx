import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Card from "@material-ui/core/Card/Card";
import CardContent from "@material-ui/core/CardContent/CardContent";
import Typography from "@material-ui/core/Typography/Typography";
import TextField from "@material-ui/core/TextField/TextField";
import './ReivewPage.css'
import {NavLink} from "react-router-dom";
import NavButton from "../NavButton/NavButton";

export default class ReviewPage extends Component{
    render() {
        return (
            <MuiThemeProvider theme={this.props.theme}>
                <AppBar position="sticky" color="primary">
                    <Toolbar>
                        <Typography variant="h6" color="inherit" className='headerText'>
                            Feedback Review
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Typography align='center' variant='title' className='pageInstructions'>Please rate the following feedback:</Typography>
                <div className='reviewContainer'>
                    <Card className='feedbackReviewContainer'>
                        <CardContent>
                            <TextField multiline variant='outlined' disabled
                                       value="REDACTED is the dumbest teammate I've ever had, please move me."
                                       margin='normal' className='feedbackReview'/>
                            <div className="demo">
                                <div className="ratingControl">
                                    <input type="radio" id="rating-5" name="rating" value="5"/>
                                    <label
                                        className="ratingControl-stars ratingControl-stars--5"
                                        htmlFor="rating-5"
                                    >
                                    </label>
                                    <input type="radio" id="rating-45" name="rating" value="4.5"/>
                                    <label
                                        className="ratingControl-stars ratingControl-stars--45 ratingControl-stars--half"
                                        htmlFor="rating-45"
                                    >
                                    </label>
                                    <input type="radio" id="rating-4" name="rating" value="4"/>

                                    <label
                                        className="ratingControl-stars ratingControl-stars--4"
                                        htmlFor="rating-4"
                                    >
                                    </label>
                                    <input type="radio" id="rating-35" name="rating" value="3.5"/>
                                    <label
                                        className="ratingControl-stars ratingControl-stars--35 ratingControl-stars--half"
                                        htmlFor="rating-35"
                                    >
                                    </label>
                                    <input type="radio" id="rating-3" name="rating" value="3"/>
                                    <label
                                        className="ratingControl-stars ratingControl-stars--3"
                                        htmlFor="rating-3"
                                    >
                                    </label>
                                    <input type="radio" id="rating-25" name="rating" value="2.5"/>
                                    <label
                                        className="ratingControl-stars ratingControl-stars--25 ratingControl-stars--half"
                                        htmlFor="rating-25"
                                    >
                                    </label>
                                    <input type="radio" id="rating-2" name="rating" value="2"/>
                                    <label
                                        className="ratingControl-stars ratingControl-stars--2"
                                        htmlFor="rating-2"
                                    >
                                    </label>
                                    <input type="radio" id="rating-15" name="rating" value="1.5"/>
                                    <label
                                        className="ratingControl-stars ratingControl-stars--15 ratingControl-stars--half"
                                        htmlFor="rating-15"
                                    >
                                    </label>
                                    <input type="radio" id="rating-1" name="rating" value="1"/>
                                    <label
                                        className="ratingControl-stars ratingControl-stars--1"
                                        htmlFor="rating-1"
                                    >
                                    </label>
                                    <input type="radio" id="rating-05" name="rating" value="0.5"/>
                                    <label
                                        className="ratingControl-stars ratingControl-stars--05 ratingControl-stars--half"
                                        htmlFor="rating-05"
                                    >
                                    </label>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
                <NavLink to="/give" className="backNav" /*onClick={this.addData.bind(this)}*/><NavButton
                    nav='< Back'/></NavLink>
                <NavLink to="/confirm" className="nextNav" /*onClick={this.addData.bind(this)}*/><NavButton nav='Submit'/></NavLink>
            </MuiThemeProvider>
        )
    }
}