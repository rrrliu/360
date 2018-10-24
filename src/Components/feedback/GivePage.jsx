import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import './GivePage.css'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import {NavLink} from "react-router-dom";
import NavButton from "../NavButton/NavButton";
import { crew } from '../Dashboard/Dashboard';

export default class GivePage extends Component {
    qualList = crew.map((name) => {
        return <Card className='feedbackTextContainer'>
            <CardContent>
                <Typography className='feedbackTextTitle' gutterBottom>
                    Feedback for {name}
                </Typography>
                <TextField multiline variant='outlined' label='Message' margin='normal'
                           className='feedbackText'/>
            </CardContent>
        </Card>
    });
    render() {
        return (
            <MuiThemeProvider theme={this.props.theme}>
                <AppBar position="sticky" color="secondary">
                    <Toolbar>
                        <Typography variant="h6" color="inherit" className='headerText'>
                            Qualitative Feedback
                        </Typography>
                    </Toolbar>
                </AppBar>
                <div className='pageInstructions'>
                    <Typography align='center' variant='title'>
                        <p>Captain! Write out some comments for your crew members with regard to what they do well, and how they could improve.</p>
                        You can use sentences, bullet points, etc., as long as you be specific&mdash;this will be graded!
                    </Typography>
                </div>
                <form className='giveFeedback'>
                    {this.qualList}
                </form>
                <NavLink to="/distribution" className="backNav" /*onClick={this.addData.bind(this)}*/><NavButton
                    nav='< Back'/></NavLink>
                <NavLink to="/semantics" className="nextNav" /*onClick={this.addData.bind(this)}*/><NavButton
                    nav='Next >'/></NavLink>
            </MuiThemeProvider>
        )
    }
}