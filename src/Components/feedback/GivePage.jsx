import React, { Component } from 'react';
import TextBox from './TextBox';

export default class GivePage extends Component {
    render() {
        return (
            <div>
                <form action="POST">
                    <TextBox name='Isabelle' />
                    <TextBox name='Harish' />
                    <TextBox name='Andrew' />
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        )
    }
}