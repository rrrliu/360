import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import GivePage from './Components/feedback/GivePage';
import ReviewPage from './Components/feedback/ReviewPage';
import Distribution from './Components/Distribution/Distribution'
import PropTypes from 'prop-types';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard'
import SemanticSurvey from './Components/Semantic/SemanticSurvey'
import Record from './Components/Record/Record'
import {createMuiTheme} from "@material-ui/core";
import amber from "@material-ui/core/colors/amber";
import API from './API.js'

const weeks = {
    week1: {string: "Week 1", current: false},
    week2: {string: "Week 2", current: false},
    week3: {string: "Week 3", current: false},
    week4: {string: "Week 4", current: false},
    week5: {string: "Week 5", current: false},
    week6: {string: "Week 6", current: false},
    week7: {string: "Week 7", current: false},
    week8: {string: "Week 8", current: true}
};

const appTheme = createMuiTheme({
    palette: {
        primary: amber
    }
});

let routes = [
    {
        path: '/dashboard',
        component: Dashboard,
        props:
            {
                weekList: weeks,
                theme:
                appTheme
            }
    },
    {
        path: '/semantics',
        component:
        SemanticSurvey,
        props:
            {
                theme: appTheme
            }
    },
    {
        path: '/distribution',
        component:
        Distribution,
        props:
            {
                theme: appTheme
            }
    },
    {
        path: '/give',
        component:
        GivePage,
        props:
            {
                theme: appTheme
            }
    },
    {
        path: '/review',
        component:
        ReviewPage,
        props:
            {
                theme: appTheme
            }
    },
    {
        path: '/record',
        component:
        Record,
        props:
            {
                theme: appTheme
            }
    }
];

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="logout-container">
                </div>
                <Router>
                    <Switch>
                        {routes.map(({path, component: C, props}) => (
                            <Route path={path} render={() => <C {...props}/>}/>
                        ))}
                    </Switch>
                </Router>
            </div>

        );
    }

}

export default App;