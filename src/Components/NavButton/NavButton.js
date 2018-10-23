import React, { Component } from 'react';
import Button from '@material-ui/core/Button'
import './NavButton.css'

export default class NavButton extends Component {
    render(){
        return (
            <Button variant="contained" color="primary" className='navButton'>{this.props.nav}</Button>
        )
    }
}