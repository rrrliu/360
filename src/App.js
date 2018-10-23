import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import GivePage from './Components/feedback/GivePage';
import ReviewPage from './Components/feedback/ReviewPage';
import Distribution from './Components/Distribution/Distribution';
import NewDashboard from './Components/NewDashboard/NewDashboard';
import PropTypes from 'prop-types';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard'
import SemanticSurvey from './Components/Semantic/SemanticSurvey'
import Record from './Components/Record/Record'
import {createMuiTheme} from "@material-ui/core";
import grey from "@material-ui/core/colors/grey";
import amber from "@material-ui/core/colors/amber";
import API from './API.js'
import Confirmation from './Components/confirmation/Confirmation';

const feedbacks = {
    week1: {string: "Week 8", current: true, weekFeedbacks: {
            feedback1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            feedback2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            feedback3: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
            },
    week2: {string: "Week 9", current: false, weekFeedbacks: {
            feedback1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            feedback2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            feedback3: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
            },
    week3: {string: "Week 10", current: false, weekFeedbacks: {
            feedback1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            feedback2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            feedback3: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
        },
    week4: {string: "Week 11", current: false, weekFeedbacks: {
            feedback1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            feedback2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            feedback3: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
            },
    week5: {string: "Week 12", current: false,weekFeedbacks: {
            feedback1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            feedback2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            feedback3: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
            },
    week6: {string: "Week 13", current: false, weekFeedbacks: {
            feedback1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            feedback2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            feedback3: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
            },
    week7: {string: "Week 14", current: false,weekFeedbacks: {
            feedback1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            feedback2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            feedback3: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
            },
    week8: {string: "Week 15", current: false, weekFeedbacks: {
            feedback1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            feedback2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            feedback3: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
            },
};

const appTheme = createMuiTheme({
    palette: {
        primary: {
            main: amber[700]
        },
        secondary: {
            main: grey[800]
        }
    }
});

let routes = [
    {
        path: '/',
        component: Dashboard,
        props:
            {
                weekList: feedbacks,
                theme:
                appTheme
            }
    },
    {
        path: '/semantics',
        component: SemanticSurvey,
        props:
            {
                theme: appTheme
            }
    },
    {
        path: '/distribution',
        component: Distribution,
        props:
            {
                theme: appTheme
            }
    },
    {
        path: '/give',
        component: GivePage,
        props:
            {
                theme: appTheme
            }
    },
    {
        path: '/review',
        component: ReviewPage,
        props:
            {
                theme: appTheme
            }
    },
    {
        path: '/record',
        component: Record,
        props:
            {
                theme: appTheme,
                feedbackList: feedbacks,
                week: feedbacks['week1']['string']
            }
    },
    {
        path: '/confirm',
        component: Confirmation,
        props:
            {
                theme: appTheme,
                feedbackList: feedbacks,
                week: feedbacks['week1']['string']
            }
    },
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
                          <Route exact path={path} render={() => <C {...props}/>}/>
                        ))}
                        {/*<Route exact path="/test" component={NewDashboard}/>*/}
                    </Switch>
                </Router>
            </div>

        );
    }

}

export default App;