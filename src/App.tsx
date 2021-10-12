import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';

import loadable from '@loadable/component';
const WritePage = loadable(() => import('./pages/WritePage'));
const DetailPage = loadable(() => import('./pages/DetailPage'));

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={MainPage}></Route>
                <Route exact path="/write" component={WritePage}></Route>
                <Route exact path="/diary/:id" component={DetailPage}></Route>
            </Switch>
        </Router>
    );
}

export default App;
