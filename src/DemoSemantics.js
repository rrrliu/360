// import React, { Component } from 'react';
// import { NavLink } from 'react-router-dom';
// // import Adjective from './Adjective.jsx';
// import './DemoSemantics.css';


// export default class DemoSemantics extends Component {
//     state = {
//         tasks: [
//             {name:"diligent",category:"wip", label: 0},
//             {name:"responsive", category:"wip", label: 1},
//             {name:"hardworking", category:"wip", label: 2},
//             {name:"efficient", category:"wip",  label: 3},
//             {name:"productive",category:"wip",  label: 4},
//             {name:"creative",category:"wip",  label: 5},
//             {name:"innovative",category:"wip",  label: 6},
//             {name:"dedicated",category:"wip",  label: 7},
//             {name:"enthusiastic",category:"wip",  label: 8},
//         ]
//     }

//     onDragStart = (ev, id) => {
//         console.log('dragstart:',id);
//         ev.dataTransfer.setData("id", id);
//     }

//     onDragOver = (ev) => {
//         ev.preventDefault();
//     }

//     labelCounter = 9;

//     onDrop = (ev, cat) => {
//         let id = ev.dataTransfer.getData("id");

//         let toAdd = 0;
//         let tasks = this.state.tasks.filter((task) => {
//             if (task.label == id) {
//                 this.labelCounter ++;
//                 if(cat != "wip"){
//                     toAdd = {name: task.name, category: "wip", label: this.labelCounter};
//                 } else if (task.category != "wip") {
//                     return
//                 }
//                 task.category = cat;
//             }
//             return task;
//         });
//         if (toAdd !== 0) {
//             tasks.push(toAdd);
//         }
//         console.log(tasks)

//         this.setState({
//             ...this.state,
//             tasks
//         });
//     }

//     render() {
//         var tasks = {
//             wip: [],
//             harish: [],
//             isabelle: [],
//             andrew: []
//         }
        
//         this.state.tasks.forEach ((t) => {
//             //console.log(t.name);
//             tasks[t.category].push(
//                 // <Adjective label= {t.name} key={t.name}
//                 // onDragStart = {(e) => this.onDragStart(e, t.label)}
//                 // draggable
//                 // className="draggable"/>

//             <img image={coin} key={t.name}
//                     onDragStart = {(e) => this.onDragStart(e, t.label)}
//                     draggable
//                     className="draggable"
//             />
//             );
//         });

//         return (
//             <div>
//             <div className="container-drag">
//                 <h2 className="header">Please assign adjectives to your teammates (up to 5)!</h2>
//                 <div className="wip"
//                      onDragOver={(e)=>this.onDragOver(e)}
//                      onDrop={(e)=>{this.onDrop(e, "wip")}}>
//                     <span className="task-header">WIP</span>
//                     {tasks.wip}
//                 </div>
//                 <div className= "chest-containers">
//                     <div className="harish-container"
//                          onDragOver={(e)=>this.onDragOver(e)}
//                          onDrop={(e)=>this.onDrop(e, "harish")}>
//                         <span className="task-header">HARISH</span>
//                         {tasks.harish}
//                     </div>
//                     <div className="isabelle-container"
//                          onDragOver={(e)=>this.onDragOver(e)}
//                          on={(e)=>this.onDrop(e, "isabelle")}>
//                         <span className="task-header">ISABELLE</span>
//                         {tasks.isabelle}
//                     </div>
//                     <div className="andrew-container"
//                          onDragOver={(e)=>this.onDragOver(e)}
//                          onDrop={(e)=>this.onDrop(e, "andrew")}>
//                         <span className="task-header">ANDREW</span>
//                         {tasks.andrew}
//                     </div>
//                 </div>
                


//             </div>
//             <NavLink to="/give" className= "next-button"> Next </NavLink>
//             </div>
//         );
//     }
// }