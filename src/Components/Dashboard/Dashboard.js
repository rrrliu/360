import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import amber from '@material-ui/core/colors/amber'
import './Dashboard.css'

const theme = createMuiTheme({
    palette: {
        primary: amber
    }
});

const weeks = {
    week1: {string: "Week 1", current: false},
    week2: {string: "Week 2", current: false},
    week3: {string: "Week 3", current: false},
    week4: {string: "Week 4", current: false},
    week5: {string: "Week 5", current: false},
    week6: {string: "Week 6", current: false},
    week7: {string: "Week 7", current: false},
    week8: {string: "Week 8", current: true}
};

class Dashboard extends Component {
    render(){
        let weekList = Object.keys(weeks).map(function(key) {
            if (!(weeks[key]['current'])) {
                return <ListItem button>
                    <ListItemText primary={weeks[key]['string']}/>
                </ListItem>;
            }
            else {
                return <ListItem>
                    <ListItemText primary={weeks[key]['string']}/>
                </ListItem>
            }
        });
        return (
            <MuiThemeProvider theme={theme}>
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
}

export default Dashboard