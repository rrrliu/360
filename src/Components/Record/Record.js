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
import ListItem from "@material-ui/core/ListItem/ListItem";
import ListItemText from "@material-ui/core/ListItemText/ListItemText";


export default function Record(props) {

    let week = Object.keys(props.feedbackList).filter(function(key) {
        return props.feedbackList[key]['string'] == props.week
    });
    console.log(week)

    let feedbackCards = Object.keys(props.feedbackList[week]['weekFeedbacks']).map(function(key){
        return <Card className="feedbackCard">
            <CardContent>
                <Typography component="p">
                    {props.feedbackList[week]['weekFeedbacks'][key]}
                </Typography>
            </CardContent>
        </Card>
    })

    return (
        <MuiThemeProvider theme={props.theme}>
            <AppBar position="sticky" color="primary">
                <Toolbar>
                    <Typography variant="h6" color="inherit">
                        Record
                    </Typography>
                </Toolbar>
            </AppBar>
            {feedbackCards}
        </MuiThemeProvider>
    );
}
