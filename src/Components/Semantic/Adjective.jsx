import React, { Component } from 'react';
import coin from './coin.png';
import './Adjective.css';

class Adjective extends Component {
  render() {
    const {label} = this.props;
    return (
      <div onDragStart={this.props.onDragStart} className="draggable">
        <img src= {coin}/>
        {label}

      </div>
    );
  }
}

export default Adjective;