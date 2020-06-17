// src/components/App.js
import React from 'react';
import {
  BrowserRouter as Router, Link, Route, Switch,
} from 'react-router-dom';
import Home from './Home';
import Company from './Company';

const Component = () => (
  <Router>
    <nav>
      <div><Link to="/">Home</Link></div>
      <div><Link to="/AAPL">Apple Company</Link></div>
    </nav>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/:symbol" component={Company} />
    </Switch>
  </Router>
);

export default Component;
