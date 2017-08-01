import React from 'react';
import { Router, Route } from 'react-router';

import About from './components/About/About';
import App from './components/App/App'

const Routes = (props) => (
    <Router {...props}>
        <Route path="/about" component={ About } />
        <Route path="/" component={ App } />
    </Router>
);

export default Routes;