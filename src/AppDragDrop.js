import React, { Component } from 'react';
import './App.css';

export default class AppDragDrop extends Component {
    state = {
        tasks: [
            {name:"diligent",category:"wip", bgcolor: "yellow"},
            {name:"responsive", category:"andrew", bgcolor:"pink"},
            {name:"hardworking", category:"andrew", bgcolor:"pink"},
            {name:"efficient", category:"harish", bgcolor:"skyblue"},
            {name:"productive",category:"isabelle", bgcolor: "yellow"}
          ]
    }

    onDragStart = (ev, id) => {
        console.log('dragstart:',id);
        ev.dataTransfer.setData("id", id);
    }

    onDragOver = (ev) => {
        ev.preventDefault();
    }

    onDrop = (ev, cat) => {
       let id = ev.dataTransfer.getData("id");
       
       let tasks = this.state.tasks.filter((task) => {
           if (task.name == id) {
               task.category = cat;
           }
           return task;
       });

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
                    onDragStart = {(e) => this.onDragStart(e, t.name)}
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