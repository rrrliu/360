import React, { Component } from 'react';
import Button from '@material-ui/core/Button'


export default class NextButton extends Component {
    render(){
        return (
            <Button variant='contained' color='primary' className='nextButton'>Next</Button>
        )
    }
}