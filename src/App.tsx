import React from 'react';
import Scales from './Pages/Scales';
import Home from './Pages/Home';
import Calendar from './Pages/Calendar';
import GlobalStyle from './Components/Core/GlobalStyle';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export default () => (
    <>
        <GlobalStyle />
        <Router>
            <Switch>
                <Route exact path='/'>
                    <Home />
                </Route>
                <Route path='/about'>
                    <Scales />
                </Route>
                <Route path='/users'>
                    <Calendar />
                </Route>
            </Switch>
        </Router>
    </>
);
