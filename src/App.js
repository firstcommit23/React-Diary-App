import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import loadable from '@loadable/component';

const ListPage = loadable(() => import('./pages/List'));
// const WritePage = loadable(() => import('./pages/Write/Write'));

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={ListPage}></Route>
            </Switch>
        </Router>
    );
}

export default App;
