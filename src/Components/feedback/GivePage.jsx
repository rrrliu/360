import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import './GivePage.css'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

export default function GivePage(props){
    return (
        <MuiThemeProvider theme={props.theme}>
            <AppBar position="sticky" color="primary">
                <Toolbar>
                    <Typography variant="h6" color="inherit">
                        Qualitative Feedback
                    </Typography>
                </Toolbar>
            </AppBar>
            <form className='giveFeedback'>
                <Card className='feedbackTextContainer'>
                    <CardContent>
                        <Typography className='feedbackTextTitle' gutterBottom>
                            Feedback for Isabelle
                        </Typography>
                        <TextField multiline variant='outlined' label='Message' margin='normal' className='feedbackText'/>
                    </CardContent>
                </Card>
                <Card className='feedbackTextContainer'>
                    <CardContent>
                        <Typography className='feedbackTextTitle' gutterBottom>
                            Feedback for Harish
                        </Typography>
                        <TextField multiline variant='outlined' label='Message' margin='normal' className='feedbackText'/>
                    </CardContent>
                </Card>
                <Card className='feedbackTextContainer'>
                    <CardContent>
                        <Typography className='feedbackTextTitle' gutterBottom>
                            Feedback for Andrew
                        </Typography>
                        <TextField multiline variant='outlined' label='Message' margin='normal' className='feedbackText'/>
                    </CardContent>
                </Card>
            </form>
        </MuiThemeProvider>
    )
}