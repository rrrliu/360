import React, { Component } from 'react';
import Button from '@material-ui/core/Button'


export default class NavButton extends Component {
    render(){
        return (
            <Button variant="contained" color="primary" className='nextButton'>{this.props.nav}</Button>
        )
    }
}