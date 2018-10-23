import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Adjective from './Adjective.jsx';
import './SemanticSurvey.css';
import firebase from '../../firebase.js';

const names= ["harish", "isabelle", "andrew"];

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
        var tasks = {
            wip: [],
        }
        
        for (var i=0; i<names.length; i++){
            tasks[names[i]]=[];
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
            <div>
            <div className="container-drag">
                <h2 className="header">Please assign adjectives to your teammates (up to 5)!</h2>
                <div className="wip"
                     onDragOver={(e)=>this.onDragOver(e)}
                     onDrop={(e)=>{this.onDrop(e, "wip")}}>
                    <span className="task-header">WIP</span>
                    {tasks.wip}
                </div>
                <div className= "chest-containers">
                {/* {this.createChests(tasks)} */}
                    <div className="four-container"
                         onDragOver={(e)=>this.onDragOver(e)}
                         onDrop={(e)=>this.onDrop(e, "harish")}>
                        <span className="task-header">{names[0]}</span>
                        {tasks.harish}
                    </div>
                    <div className="four-container"
                         onDragOver={(e)=>this.onDragOver(e)}
                         onDrop={(e)=>this.onDrop(e, "isabelle")}>
                        <span className="task-header">{names[1]}</span>
                        {tasks.isabelle}
                    </div>
                    <div className="four-container"
                         onDragOver={(e)=>this.onDragOver(e)}
                         onDrop={(e)=>this.onDrop(e, "andrew")}>
                        <span className="task-header">{names[2]}</span>
                        {tasks.andrew} 
                    </div>
                    <div className="four-container"
                         onDragOver={(e)=>this.onDragOver(e)}
                         onDrop={(e)=>this.onDrop(e, "richard")}>
                        <span className="task-header">{names[3]}</span>
                        {tasks.richard} 
                    </div>
                </div>
                


            </div>
            <NavLink to="/give" className= "next-button"> Next </NavLink>
            </div>
        )};
        if (names.length==3){ return (
        <div>
            <div className="container-drag">
                <h2 className="header">Please assign adjectives to your teammates (up to 5)!</h2>
                <div className="wip"
                     onDragOver={(e)=>this.onDragOver(e)}
                     onDrop={(e)=>{this.onDrop(e, "wip")}}>
                    <span className="task-header">WIP</span>
                    {tasks.wip}
                </div>
                <div className= "chest-containers">
                {/* {this.createChests(tasks)} */}
                    <div className="three-container"
                         onDragOver={(e)=>this.onDragOver(e)}
                         onDrop={(e)=>this.onDrop(e, "harish")}>
                        <span className="task-header">{names[0]}</span>
                        {tasks.harish}
                    </div>
                    <div className="three-container"
                         onDragOver={(e)=>this.onDragOver(e)}
                         onDrop={(e)=>this.onDrop(e, "isabelle")}>
                        <span className="task-header">{names[1]}</span>
                        {tasks.isabelle}
                    </div>
                    <div className="three-container"
                         onDragOver={(e)=>this.onDragOver(e)}
                         onDrop={(e)=>this.onDrop(e, "andrew")}>
                        <span className="task-header">{names[2]}</span>
                        {tasks.andrew} 
                    </div>

            </div>
            <NavLink to="/give" className= "next-button" onClick= {this.addData.bind(this)}> Next </NavLink>
            </div>
        </div>
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
