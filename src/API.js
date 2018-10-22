import React, { Component } from 'react'
import {createMuiTheme} from "@material-ui/core";
import amber from "@material-ui/core/colors/amber";
import Dashboard from "./Components/Dashboard/Dashboard";
import SemanticSurvey from "./Components/Semantic/SemanticSurvey";
import Distribution from "./Components/Distribution/Distribution";
import GivePage from "./Components/feedback/GivePage";
import ReviewPage from "./Components/feedback/ReviewPage";
import Record from "./Components/Record/Record";

export default class API {
    weeks = {
        week1: {string: "Week 1", current: false},
        week2: {string: "Week 2", current: false},
        week3: {string: "Week 3", current: false},
        week4: {string: "Week 4", current: false},
        week5: {string: "Week 5", current: false},
        week6: {string: "Week 6", current: false},
        week7: {string: "Week 7", current: false},
        week8: {string: "Week 8", current: true}
    };

    appTheme = createMuiTheme({
        palette: {
            primary: amber
        }
    });

    routes = [
        {
            path: '/dashboard',
            component: Dashboard,
            props: {
                weekList: this.weeks,
                theme: this.appTheme
            }
        },
        {
            path: '/semantics',
            component: SemanticSurvey,
            props: {theme: this.appTheme}
        },
        {
            path: '/distribution',
            component: Distribution,
            props: {theme: this.appTheme}
        },
        {
            path: '/give',
            component: GivePage,
            props: {theme: this.appTheme}
        },
        {
            path: '/review',
            component: ReviewPage,
            props: {theme: this.appTheme}
        },
        {
            path: '/record',
            component: Record,
            props: {theme: this.appTheme}
        }
    ];

}