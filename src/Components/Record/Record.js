import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import amber from '@material-ui/core/colors/amber'
import "./Record.css"
import { NavLink } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';


export default function Record(props) {
    return (
        <MuiThemeProvider theme={props.theme}>
            <AppBar position="sticky" color="primary">
                <Toolbar>
                    <Typography variant="h6" color="inherit">
                        Record
                    </Typography>
                </Toolbar>
            </AppBar>
            <Card className="feedbackCard">
                <CardContent>
                    <Typography component="p">
                        well meaning and kindly.
                        <br />
                        {'"a benevolent smile"'}
                    </Typography>
                </CardContent>
            </Card>
        </MuiThemeProvider>
    );
}
