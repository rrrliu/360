import React, { Component } from 'react';
import './Distribution.css';
import Slider from './Slider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import SliderContainer from './SliderContainer'
import {NavLink} from "react-router-dom";
import NavButton from "../NavButton/NavButton";

const teammates = ['Harish', 'Isabelle', 'Andrew', 'Richard'];

export default class Distribution extends Component{
    render() {
        return (
            <MuiThemeProvider theme={this.props.theme}>
                <AppBar position="sticky" color="primary">
                    <Toolbar>
                        <Typography variant="h6" color="inherit" className='headerText'>
                            Distribution
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Typography align='center' variant='title' className='pageInstructions'>Ahoy! There are 120 pieces of eight for each of the following categories. Distribute them amongst your crew as you see fit.</Typography>
                <Card className="category">
                    <CardContent>
                        <Typography className='categoryTitle' gutterBottom>
                            Presence
                        </Typography>
                        <Typography className='categorySubtitle'>
                            How often is each crew member present during the meetings? How engaged are they during the
                            meetings?
                        </Typography>
                        <SliderContainer teammates={teammates}/>
                    </CardContent>
                </Card>
                <Card className="category">
                    <CardContent>
                        <Typography className='categoryTitle' gutterBottom>
                            Insight
                        </Typography>
                        <Typography className='categorySubtitle'>
                            How much does each crew member understand the project and the ideas of others? How well do they
                            offer suggestions?
                        </Typography>
                        <SliderContainer teammates={teammates}/>
                    </CardContent>
                </Card>
                <Card className="category">
                    <CardContent>
                        <Typography className='categoryTitle' gutterBottom>
                            Efficiency
                        </Typography>
                        <Typography className='categorySubtitle'>
                            How much time does each crew member commit to the project? How much do they get done in that
                            time?
                        </Typography>
                        <SliderContainer teammates={teammates}/>
                    </CardContent>
                </Card>
                <Card className="category">
                    <CardContent>
                        <Typography className='categoryTitle' gutterBottom>
                            Creativity
                        </Typography>
                        <Typography className='categorySubtitle'>
                            To what extent does each crew member offer new ideas? How often do they propose new approaches
                            to the same problems?
                        </Typography>
                        <SliderContainer teammates={teammates}/>
                    </CardContent>
                </Card>
                <NavLink to="/" className="backNav" /*onClick={this.addData.bind(this)}*/><NavButton
                    nav='< Exit'/></NavLink>
                <NavLink to="/semantics" className="nextNav" /*onClick={this.addData.bind(this)}*/><NavButton
                    nav='Next >'/></NavLink>
            </MuiThemeProvider>
        );
    }
}