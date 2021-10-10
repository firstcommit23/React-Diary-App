import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';

// import loadable from '@loadable/component';
// const MainPage = loadable(() => import('./pages/MainPage'));
// const WritePage = loadable(() => import('./pages/Write/Write'));

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={MainPage}></Route>
            </Switch>
        </Router>
    );
}

export default App;
