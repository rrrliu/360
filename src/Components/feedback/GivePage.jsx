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

const teammates = ['harish', 'isabelle', 'andrew', 'richard'];

export default class GivePage extends Component{
    qualList = teammates.map((name) => {
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
                <AppBar position="sticky" color="primary">
                    <Toolbar>
                        <Typography variant="h6" color="inherit" className='headerText'>
                            Qualitative Feedback
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Typography align='center' variant='title' className='pageInstructions'>Write out some comments for your teammates with regard to what they do well, and how they could improve. Be specific (this will get graded)!</Typography>
                <form className='giveFeedback'>
                    {this.qualList}
                </form>
                <NavLink to="/semantics" className="backNav" /*onClick={this.addData.bind(this)}*/><NavButton
                    nav='< Back'/></NavLink>
                <NavLink to="/review" className="nextNav" /*onClick={this.addData.bind(this)}*/><NavButton
                    nav='Next >'/></NavLink>
            </MuiThemeProvider>
        )
    }
}