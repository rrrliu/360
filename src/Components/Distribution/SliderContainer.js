import React, { Component } from 'react'
import Slider from './Slider'
import Distribution from './Distribution';

export default class SliderContainer extends Component{

    constructor(props) {
        super(props);
        this.updateVal = this.updateVal.bind(this);
        let counts = [];
        for(var i = 0; i < this.props.teammates.length; i++) {
            counts.push(0);
        };
        this.state = {
            counts: counts,
            step: 5,
            cap: 120
        }
    }
    overflow = 0;

    handleCounts = (newCounts) => {
        console.log(this.props)
        this.props.onRetrieveData(newCounts);            
    }

    updateVal = function(amount, index){
        let newCounts = this.state.counts.slice();
        if (this.state.counts.reduce((a, b) => a+b, 0) + amount > this.state.cap || this.state.counts[index] + amount < 0) {
            // newCounts = this.state.counts.map((count, mapIndex) => {
            //     if(mapIndex == index){
            //         newBank -= amount;
            //         return count + amount;
            //     }
            //     else {
            //         newBank += amount/(this.state.counts.length - 1);
            //         return count - (amount/(this.state.counts.length - 1));
            //     }
            // })
            return
        } else {
            newCounts[index] += amount;
        }
        this.handleCounts(newCounts);
        this.setState({counts: newCounts})
    }
    
    render(){
        let sliders = this.state.counts.map((item, index) => (<Slider updateVal={this.updateVal} index={index} teammate={this.props.teammates[index]} count={item} step={this.state.step}/>));
        return (
            <div className="sliderContainer" >
                {sliders}
            </div>
        )
    }
}