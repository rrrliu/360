import React, { Component } from 'react';
import TextBox from './TextBox';

export default class GivePage extends Component {
    render() {
        return (
            <div>
                <TextBox name='Isabelle' />
                <TextBox name='Harish' />
                <TextBox name='Andrew' />
            </div>
        )
    }
}