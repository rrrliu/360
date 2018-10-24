import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import red from '@material-ui/core/colors/red';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { NavLink } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import amber from '@material-ui/core/colors/amber'
import './Dashboard.css';
import config from '../../firebase/firebase';
import firebase from '../../firebase/firebase';
import App from '../../App';

const teams = [
    ['Richard L', 'Harish P', 'Isabelle Z', 'Andrew K'],
    ['Austin S', 'Ethan M', 'Elliot L', 'Hannah V', 'Ryan C'],
    ['Vincent W', 'Aadhrik K', 'Ashvin D', 'Manav R'],
    ['Luofei C', 'Francis I', 'Chelsea L', 'Vikram S', 'David S'],
    ['Michael T', 'Nikhil K', 'Prangan T', 'Jahnvi D', 'Diego G'],
    ['Neha H', 'Nishi K', 'Dev O', 'Michael M', 'Birks S'],
    ['Matthew H', 'Jaiveer S', 'Shiyuan G', 'Kelly H', 'Alexander M'],
    ['Julius V', 'Amy G', 'Rimika B', 'Sravya B'],
    ['Ayush J', 'Daniel J', 'Erel S', 'Kai C', 'Rishma M'],
    ['Anika R', 'Sean L', 'Alara G', 'Quin E', 'Deven N'],
    ['Charlie F', 'Chaitanya G', 'Rahul C', 'Neha N', 'Alfonso S'],
]

let crew = [];
let username;

const styles = theme => ({
    root: {
      display: 'flex',
    },
    paper: {
      marginRight: theme.spacing.unit * 2,
    },
  });
  

function login() {
    function newLoginHappened(user) {
      if (user) {
        displayContent(user);
        username = getName(user);
        crew = findTeam(username);
      } else {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithRedirect(provider);
      }
    }
    firebase.auth().onAuthStateChanged(newLoginHappened);
}

function displayContent(user) {
    const firstName = user.displayName.split(' ')[0];
    document.getElementById("name").innerHTML = firstName;
    document.getElementById("signout-button").addEventListener('click', e => {
        firebase.auth().signOut();
    });
}

function findTeam(name) {
    console.log(name);
    teams.forEach(team => {
        if (team.includes(name)) {
            let team_cp = team.slice();
            let index = team_cp.indexOf(name);
            team_cp.splice(index, index + 1);
            console.log(team_cp);
            return team_cp;
        }
    })
}

function getName(user) { // returns first name and last initial
    let splitName = user.displayName.split(' ');
    return splitName[0] + ' ' + splitName[1][0];
}

class NewDashboard extends React.Component {
    state = {
        open: false,
        crew: []
      };
    
      handleToggle = () => {
        this.setState(state => ({ open: !state.open }));
      };
    
      handleClose = event => {

        if (this.anchorEl.contains(event.target)) {
            
        //   return <NavLink to="/record">Week 8</NavLink>;
        }
    
        this.setState({ open: false });
      };

      componentDidMount() {
        this.setState({crew: crew});
      }
    
      render() {
        const { classes } = this.props;
        const { open } = this.state;
        // let weekList = Object.keys(this.props.weekList).map(function(key) {
        //     if (!(this.props.weekList[key]['current'])) {
        //         return <NavLink to="/record" className="weekLink" onClick={() => App.routes[5]['props']['week'] = this.props.weekList[key]['string']}>
        //             <ListItem button>
        //                 <ListItemText primary={this.props.weekList[key]['string']}/>
        //             </ListItem>
        //         </NavLink>
        //     }
        //     else {
        //         return <NavLink to="/distribution" className="weekLink">
        //             <ListItem button>
        //                 <ListItemText primary={this.props.weekList[key]['string']}/>
        //             </ListItem>
        //         </NavLink>
        //     }
        // });

    return (
        <body background="map.jpg">
                <Button id="signout-button">Sign Out</Button>
                <div className= "first-header">
                <h1 className='headerText'> { login() }
                    Hi, <strong id="name"></strong>!</h1>

        <div className={classes.root}>
        <div className= "dd-button">
          <Button
            id="embark-button"
            buttonRef={node => {
              this.anchorEl = node;
            }}
            aria-owns={open ? 'menu-list-grow' : null}
            aria-haspopup="true"
            onClick={this.handleToggle}
          >
            Embark.
          </Button>
          <Popper open={open} anchorEl={this.anchorEl} transition disablePortal>
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                id="menu-list-grow"
                style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={this.handleClose}>
                    <MenuList>
                      <MenuItem onClick={this.handleClose}><NavLink to="/distribution">Week 8</NavLink></MenuItem>
                      <MenuItem onClick={this.handleClose}><NavLink to="/record">Week 9</NavLink></MenuItem>
                      <MenuItem onClick={this.handleClose}><NavLink to="/record">Week 10</NavLink></MenuItem>
                      <MenuItem onClick={this.handleClose}><NavLink to="/record">Week 11</NavLink></MenuItem>
                      <MenuItem onClick={this.handleClose}><NavLink to="/record">Week 12</NavLink></MenuItem>
                      <MenuItem onClick={this.handleClose}><NavLink to="/record">Week 13</NavLink></MenuItem>
                      <MenuItem onClick={this.handleClose}><NavLink to="/record">Week 14</NavLink></MenuItem>
                      <MenuItem onClick={this.handleClose}><NavLink to="/record">Week 15</NavLink></MenuItem>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
          </div>
        </div>
      </div>
        </body>
        
    );
}
}

NewDashboard.propTypes = {
    classes: PropTypes.object.isRequired,
  };  

export default withStyles(styles)(NewDashboard);