import React, { Component } from 'react';
import './SemanticSurvey.css';

export default class SemanticSurvey extends Component {
    state = {
        tasks: [
            {name:"diligent",category:"wip", bgcolor: "yellow", label: 0},
            {name:"responsive", category:"andrew", bgcolor:"pink", label: 1},
            {name:"hardworking", category:"andrew", bgcolor:"pink", label: 2},
            {name:"efficient", category:"harish", bgcolor:"skyblue", label: 3},
            {name:"productive",category:"isabelle", bgcolor: "yellow", label: 4}
        ]
    }

    onDragStart = (ev, id) => {
        console.log('dragstart:',id);
        ev.dataTransfer.setData("id", id);
    }

    onDragOver = (ev) => {
        ev.preventDefault();
    }

    labelCounter = 4;

    onDrop = (ev, cat) => {
        let id = ev.dataTransfer.getData("id");

        let toAdd = 0;
        let tasks = this.state.tasks.filter((task) => {
            if (task.label == id) {
                this.labelCounter ++;
                if(cat != "wip"){
                    toAdd = {name: task.name, category: "wip", bgcolor: task.bgcolor, label: this.labelCounter};
                } else if (task.category != "wip") {
                    return
                }
                task.category = cat;
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

    render() {
        var tasks = {
            wip: [],
            harish: [],
            isabelle: [],
            andrew: []
        }

        this.state.tasks.forEach ((t) => {
            tasks[t.category].push(
                <div key={t.name}
                     onDragStart = {(e) => this.onDragStart(e, t.label)}
                     draggable
                     className="draggable"
                     style = {{backgroundColor: t.bgcolor}}
                >
                    {t.name}
                </div>
            );
        });

        return (
            <div className="container-drag">
                <h2 className="header">Please assign adjectives to your teammates!</h2>
                <div className="wip"
                     onDragOver={(e)=>this.onDragOver(e)}
                     onDrop={(e)=>{this.onDrop(e, "wip")}}>
                    <span className="task-header">WIP</span>
                    {tasks.wip}
                </div>
                <div className= "chest-containers">
                    <div className="harish-container"
                         onDragOver={(e)=>this.onDragOver(e)}
                         onDrop={(e)=>this.onDrop(e, "harish")}>
                        <span className="task-header">HARISH</span>
                        {tasks.harish}
                    </div>
                    <div className="isabelle-container"
                         onDragOver={(e)=>this.onDragOver(e)}
                         onDrop={(e)=>this.onDrop(e, "isabelle")}>
                        <span className="task-header">ISABELLE</span>
                        {tasks.isabelle}
                    </div>
                    <div className="andrew-container"
                         onDragOver={(e)=>this.onDragOver(e)}
                         onDrop={(e)=>this.onDrop(e, "andrew")}>
                        <span className="task-header">ANDREW</span>
                        {tasks.andrew}
                    </div>
                </div>


            </div>
        );
    }
}