import React, { Component } from 'react';
import TextBox from './TextBox';
import { NavLink } from 'react-router-dom';

export default class GivePage extends Component {
    render() {
        return (
            <div>
                <TextBox name='Isabelle' />
                <TextBox name='Harish' />
                <TextBox name='Andrew' />
                <input type="submit" value="Submit"/>
                <NavLink to="/review" className="next-button">
                Next
                </NavLink>
            </div>
        )
    }
}