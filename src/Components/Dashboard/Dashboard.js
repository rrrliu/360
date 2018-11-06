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
import {withStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {NavLink} from 'react-router-dom';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
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

export let crew = [];
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
        findTeam(username);
        console.log(crew);
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
    teams.forEach(team => {
        if (team.includes(name)) {
            let team_cp = team.slice();
            let index = team_cp.indexOf(name);
            team_cp.splice(index, 1);
            crew = team_cp;
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
        let weekList = ["Week 9", "Week 10", "Week 11", "Week 12", "Week 13", "Week 14", "Week 15"].map(function(key) {
            // return <NavLink to="/record" className="weekLink">
                return <Button disabled className='weekButton'>{key}</Button>
            {/*</NavLink>*/}
        });

        return (
        <div className='background' background="map.jpg">
            <Button id="signout-button">Sign Out</Button>
            <h1 className='dashHeader'> {login()} Hi, <strong id="name"></strong>! </h1>
            <div className={classes.root}>
                <div className="dd-button">
                    <NavLink to="/distribution" className='weekLink'>
                        <Button
                            id="embark-button"
                            // buttonRef={node => {
                            //     this.anchorEl = node;
                            // }}
                            // aria-owns={open ? 'menu-list-grow' : null}
                            // aria-haspopup="true"
                            // onClick={this.handleToggle}
                        >
                            Embark
                        </Button>
                    </NavLink>
                    <div className='buttonContainer'>
                        <NavLink to="/record" className="weekLink">
                            <Button className='weekButton'>Test Week</Button>
                        </NavLink>
                        {weekList}
                    </div>
                    {/*<Popper open={open} anchorEl={this.anchorEl} transition disablePortal>*/}
                        {/*{({TransitionProps, placement}) => (*/}
                            {/*<Grow*/}
                                {/*{...TransitionProps}*/}
                                {/*id="menu-list-grow"*/}
                                {/*style={{transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom'}}*/}
                            {/*>*/}
                                {/*<Paper>*/}
                                    {/*<ClickAwayListener onClickAway={this.handleClose}>*/}
                                        {/*<MenuList>*/}
                                            {/*<NavLink to="/distribution" className='weekLink'><MenuItem*/}
                                                {/*onClick={this.handleClose}>Week 8</MenuItem></NavLink>*/}
                                            {/*<NavLink to="/record" className='weekLink'><MenuItem*/}
                                                {/*onClick={this.handleClose}>Week 9</MenuItem></NavLink>*/}
                                            {/*<NavLink to="/record" className='weekLink'><MenuItem*/}
                                                {/*onClick={this.handleClose}>Week 10</MenuItem></NavLink>*/}
                                            {/*<NavLink to="/record" className='weekLink'><MenuItem*/}
                                                {/*onClick={this.handleClose}>Week 11</MenuItem></NavLink>*/}
                                            {/*<NavLink to="/record" className='weekLink'><MenuItem*/}
                                                {/*onClick={this.handleClose}>Week 12</MenuItem></NavLink>*/}
                                            {/*<NavLink to="/record" className='weekLink'><MenuItem*/}
                                                {/*onClick={this.handleClose}>Week 13</MenuItem></NavLink>*/}
                                            {/*<NavLink to="/record" className='weekLink'><MenuItem*/}
                                                {/*onClick={this.handleClose}>Week 14</MenuItem></NavLink>*/}
                                            {/*<NavLink to="/record" className='weekLink'><MenuItem*/}
                                                {/*onClick={this.handleClose}>Week 15</MenuItem></NavLink>*/}
                                        {/*</MenuList>*/}
                                    {/*</ClickAwayListener>*/}
                                {/*</Paper>*/}
                            {/*</Grow>*/}
                        {/*)}*/}
                    {/*</Popper>*/}
                </div>
            </div>
        </div>

        );
    }
}

NewDashboard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NewDashboard);