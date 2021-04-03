import React from 'react';
import {Router, withRouter, Switch, Route} from 'react-router-dom';
import { createBrowserHistory } from "history";
import HomePage from '../homepage/HomePage';

export const history = createBrowserHistory();

const Root = () => (
    <Switch>
        <Route exact path="/" component={HomePage}/>
    </Switch>
)

export const AppWithRouter = withRouter(Root)

const Main = () => (
    <Router history={history}>
        <AppWithRouter/>
    </Router>
)
    
export default Main;