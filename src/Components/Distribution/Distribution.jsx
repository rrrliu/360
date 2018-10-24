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
import firebase from '../../firebase/firebase';
import { crew } from '../Dashboard/Dashboard';

export default class Distribution extends Component {

    constructor(props){
        super(props);
        this.updateValP = this.updateValP.bind(this);
        this.updateValI = this.updateValI.bind(this);
        this.updateValE = this.updateValE.bind(this);
        this.updateValC = this.updateValC.bind(this);
        let counts = [];
        for(var i = 0; i < crew.length; i++) {
            counts.push(0);
        }
        this.state = {
            pCount: counts.slice(),
            iCount: counts.slice(),
            eCount: counts.slice(),
            cCount: counts.slice(),
            step: 5,
            cap: 120
        };
        this.sliderContainers = [<SliderContainer crew={crew} updateVal={this.updateValP} step={this.state.step} counts={this.state.pCount}/>,
            <SliderContainer crew={crew} updateVal={this.updateValI} step={this.state.step} counts={this.state.iCount}/>,
            <SliderContainer crew={crew} updateVal={this.updateValE} step={this.state.step} counts={this.state.eCount}/>,
            <SliderContainer crew={crew} updateVal={this.updateValC} step={this.state.step} counts={this.state.cCount}/>];

    }

    updateValP = function(amount, index){
        let newPCount = this.state.pCount.slice();
        if (this.state.pCount.reduce((a, b) => a+b, 0) + amount > this.state.cap || this.state.pCount[index] + amount < 0) {
            return
        } else {
            newPCount[index] += amount;
        }
        this.sliderContainers[0] = <SliderContainer crew={crew} updateVal={this.updateValP} step={this.state.step} counts={newPCount}/>;
        this.setState({pCount: newPCount});
    };
    updateValI = function(amount, index){
        let newICount = this.state.iCount.slice();
        if (this.state.iCount.reduce((a, b) => a+b, 0) + amount > this.state.cap || this.state.iCount[index] + amount < 0) {
            return
        } else {
            newICount[index] += amount;
        }
        this.sliderContainers[1] = <SliderContainer crew={crew} updateVal={this.updateValI} step={this.state.step} counts={newICount}/>;
        this.setState({iCount: newICount})
    };
    updateValE = function(amount, index){
        let newECount = this.state.eCount.slice();
        if (this.state.eCount.reduce((a, b) => a+b, 0) + amount > this.state.cap || this.state.eCount[index] + amount < 0) {
            return
        } else {
            newECount[index] += amount;
        }
        this.sliderContainers[2] = <SliderContainer crew={crew} updateVal={this.updateValE} step={this.state.step} counts={newECount}/>;
        this.setState({eCount: newECount})
    };
    updateValC = function(amount, index){
        let newCCount = this.state.cCount.slice();
        if (this.state.cCount.reduce((a, b) => a+b, 0) + amount > this.state.cap || this.state.cCount[index] + amount < 0) {
            return
        } else {
            newCCount[index] += amount;
        }
        this.sliderContainers[3] = <SliderContainer crew={crew} updateVal={this.updateValC} step={this.state.step} counts={newCCount}/>;
        this.setState({cCount: newCCount})
    };

    render() {
        return (
            <MuiThemeProvider theme={this.props.theme}>
                <AppBar position="sticky" color="secondary">
                    <Toolbar>
                        <Typography variant="h6" color="inherit" className='headerText'>
                            Distribution
                        </Typography>
                    </Toolbar>
                </AppBar>
                <div className='pageInstructions'>
                    <Typography align='center' variant='title'>Ahoy! There are 120 pieces of gold for each of the following categories. Distribute them amongst your crew as you see fit.</Typography>
                </div>
                <Card className="category">
                    <CardContent>
                        <Typography className='categoryTitle' gutterBottom>
                            Presence
                        </Typography>
                        <Typography className='categorySubtitle'>
                            How often is each crew member present during the meetings? How engaged are they during the
                            meetings?
                        </Typography>
                        {this.sliderContainers[0]}
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
                        {this.sliderContainers[1]}
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
                        {this.sliderContainers[2]}
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
                        {this.sliderContainers[3]}
                    </CardContent>
                </Card>
                <NavLink to="/" className="backNav" onClick={this.addData.bind(this)}><NavButton
                    nav='< Exit'/></NavLink>
                <NavLink to="/give" className="nextNav" onClick={this.addData.bind(this)}><NavButton
                    nav='Next >'/></NavLink>
            </MuiThemeProvider>
        );
    }

    addData() {
        const db = firebase.firestore();
        db.settings({
            timestampsInSnapshots: true
        })
        for (var i=0; i<crew.length; i++){
            let mate={};
            mate[crew[i]]=[];
            // for (var j=0; j<this.state.counts.length; j++){
            //     mate[crew[i]].push(this.state.counts[j][i]);
            // }
            mate[crew[i]].push(this.state.pCount[i]);
            mate[crew[i]].push(this.state.iCount[i]);
            mate[crew[i]].push(this.state.eCount[i]);
            mate[crew[i]].push(this.state.cCount[i]);
            db.collection("distr").add({
                mate    
            });     
            
        }
        
    }
}