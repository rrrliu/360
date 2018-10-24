import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Adjective from './Adjective.jsx';
import './SemanticSurvey.css';
import NavButton from '../NavButton/NavButton'
import firebase from '../../firebase/firebase';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';


const names= ["Harish", "Isabelle", "Betty"];

export default class SemanticSurvey extends Component {
    state = {
        tasks: [
            {name:"diligent",category:"wip", label: 0},
            {name:"responsive", category:"wip", label: 1},
            {name:"hardworking", category:"wip", label: 2},
            {name:"efficient", category:"wip",  label: 3},
            {name:"productive",category:"wip",  label: 4},
            {name:"creative",category:"wip",  label: 5},
            {name:"innovative",category:"wip",  label: 6},
            {name:"dedicated",category:"wip",  label: 7}
        ]
    };

    onDragStart = (ev, id) => {
        console.log('dragstart:',id);
        ev.dataTransfer.setData("id", id);
    }

    onDragOver = (ev) => {
        ev.preventDefault();
    }

    labelCounter=8;

    onDrop = (ev, cat) => {
        let counter=0;
        for (var i =0; i < this.state.tasks.length; i++){
            if (this.state.tasks[i].category == cat){
                counter++;
            }
        }
        if (counter <5 || cat== "wip"){
            let id = ev.dataTransfer.getData("id");
        
                let toAdd = 0;
                let tasks = this.state.tasks.filter((task) => {
                    if (task.label == id && task.category != cat) {
                        this.labelCounter ++;
                        console.log(task.category, cat)
                        if(cat != "wip"){
                            toAdd = {name: task.name, category: cat, label: this.labelCounter};
                            if (task.category != "wip"){
                                return
                            }
                        } if (task.category != "wip" && cat == "wip") { console.log('im here!!')
                            return false;
                        }
                    }
                    return task;
                });
                if (toAdd !== 0) {
                    tasks.push(toAdd);
                }
                console.log(tasks)
        
                this.setState({
                    ...this.state,
                    tasks
                });
        }
                
            }

        // createChests(t){
        //     let chests=[];
        //     for (var i=0; i<names.length; i++){
        //         chests.push(<div className="person-container"
        //         onDragOver={(e)=>this.onDragOver(e)}
        //         onDrop={(e)=>this.onDrop(e, names[i])}>
        //         <span className="task-header">{names[i]}</span>
        //         {t.names[i]}
        //     </div>)
    
        //     }
        //     return chests
        // }
        
    render() {
        var tasks={};
        if (names.length == 3){
            tasks = {
                wip: [],
                isabelle: [],
                harish: [],
                andrew: [],
            }
        }

        else if (names.length == 4){
            tasks = {
                wip: [],
                isabelle: [],
                harish: [],
                andrew: [],
                richard: []
            }
        }
        
        this.state.tasks.forEach ((t) => {
            tasks[t.category].push(
                <Adjective label= {t.name} key={t.name}
                onDragStart = {(e) => {
                    console.log('dragged')
                    this.onDragStart(e, t.label)
                }
                }
                draggable
                className="draggable"/>
            );
        });

        if (names.length==4){return (
            <MuiThemeProvider theme={this.props.theme}>
                <AppBar position="sticky" color="primary">
                    <Toolbar>
                        <Typography variant="h6" color="inherit" className="dashTitle">
                            Semantic Evaluation
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Typography align='center' variant='title' className='pageInstructions'>More loot! Hand up to 5 golden coins to each of your crew members.</Typography>
                <div className="container-drag">
                    <div className="wip"
                         onDragOver={(e)=>this.onDragOver(e)}
                         onDrop={(e)=>{this.onDrop(e, "wip")}}>
                        {tasks.wip}
                    </div>
                    <div className= "chest-containers">
                    {/* {this.createChests(tasks)} */}
                        <div className="four-container"
                             onDragOver={(e)=>this.onDragOver(e)}
                             onDrop={(e)=>this.onDrop(e, "harish")}>
                            <Typography className='chestTitle' gutterBottom>{names[0]}</Typography>
                            {tasks.harish}
                        </div>
                        <div className="four-container"
                             onDragOver={(e)=>this.onDragOver(e)}
                             onDrop={(e)=>this.onDrop(e, "isabelle")}>
                            <Typography className='chestTitle' gutterBottom>{names[1]}</Typography>
                            {tasks.isabelle}
                        </div>
                        <div className="four-container"
                             onDragOver={(e)=>this.onDragOver(e)}
                             onDrop={(e)=>this.onDrop(e, "andrew")}>
                            <Typography className='chestTitle' gutterBottom>{names[2]}</Typography>
                            {tasks.andrew}
                        </div>
                        <div className="four-container"
                             onDragOver={(e)=>this.onDragOver(e)}
                             onDrop={(e)=>this.onDrop(e, "richard")}>
                            <Typography className='chestTitle' gutterBottom>{names[3]}</Typography>
                            {tasks.richard}
                        </div>
                    </div>
                </div>
                <NavLink to="/distribution" className="backNav" onClick= {this.addData.bind(this)}><NavButton nav='< Back'/></NavLink>
                <NavLink to="/give" className="nextNav" onClick= {this.addData.bind(this)}><NavButton nav='Next >'/></NavLink>
            </MuiThemeProvider>
        )};
        if (names.length==3){ return (
        <MuiThemeProvider theme={this.props.theme}>
            <AppBar position="sticky" color="primary">
                <Toolbar>
                    <Typography variant="h6" color="inherit" className="dashTitle headerText">
                        Semantic Evaluation
                    </Typography>
                </Toolbar>
            </AppBar>
            <Typography align='center' variant='title' className='pageInstructions'>More loot! Hand up to 5 golden coins to each of your crew members.</Typography>
            <div className="container-drag">
                <div className="wip"
                     onDragOver={(e)=>this.onDragOver(e)}
                     onDrop={(e)=>{this.onDrop(e, "wip")}}>
                    {tasks.wip}
                </div>
                <div className= "chest-containers">
                {/* {this.createChests(tasks)} */}
                    <div className="three-container"
                         onDragOver={(e)=>this.onDragOver(e)}
                         onDrop={(e)=>this.onDrop(e, "harish")}>
                        <Typography className='chestTitle' gutterBottom>{names[0]}</Typography>
                        {tasks.harish}
                    </div>
                    <div className="three-container"
                         onDragOver={(e)=>this.onDragOver(e)}
                         onDrop={(e)=>this.onDrop(e, "isabelle")}>
                        <Typography className='chestTitle' gutterBottom>{names[1]}</Typography>
                        {tasks.isabelle}
                    </div>
                    <div className="three-container"
                         onDragOver={(e)=>this.onDragOver(e)}
                         onDrop={(e)=>this.onDrop(e, "andrew")}>
                        <Typography className='chestTitle' gutterBottom>{names[2]}</Typography>
                        {tasks.andrew} 
                    </div>
                </div>
            </div>
            <NavLink to="/distribution" className="backNav" onClick= {this.addData.bind(this)}><NavButton nav='< Back'/></NavLink>
            <NavLink to="/give" className="nextNav" onClick= {this.addData.bind(this)}><NavButton nav='Next >'/></NavLink>
        </MuiThemeProvider>
    )};
    }

    addData() {
        const db = firebase.firestore();
        db.settings({
            timestampsInSnapshots: true
        })
        var tasks = {}
        for (var i=0; i<names.length; i++){
            tasks[names[i]]=[];
        }
        this.state.tasks.forEach ((t) => {
            if(t.category != "wip") {
                tasks[t.category].push(
                    t.name
                );
            }
        });
        console.log(tasks)
        db.collection("test").add(
            tasks
        );
    }
}
