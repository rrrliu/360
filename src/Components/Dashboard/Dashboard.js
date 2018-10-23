import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { NavLink } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import amber from '@material-ui/core/colors/amber'
import './Dashboard.css'
import { NavLink } from 'react-router-dom'
import App from '../../App'



export default function Dashboard(props) {

    let weekList = Object.keys(props.weekList).map(function(key) {
        if (!(props.weekList[key]['current'])) {
            return <NavLink to="/record" className="weekLink" onClick={() => App.routes[5]['props']['week'] = props.weekList[key]['string']}>
                <ListItem button>
                    <ListItemText primary={props.weekList[key]['string']}/>
                </ListItem>
            </NavLink>
        }
        else {
            return <NavLink to="/distribution" className="weekLink">
                <ListItem button>
                    <ListItemText primary={props.weekList[key]['string']}/>
                </ListItem>
            </NavLink>
        }
    });

    return (
        <MuiThemeProvider theme={props.theme}>
            <AppBar position="sticky" color="primary">
                <Toolbar>
                    <Typography variant="h6" color="inherit">
                        Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <List>
                {weekList}
            </List>
        </MuiThemeProvider>
    );
}
