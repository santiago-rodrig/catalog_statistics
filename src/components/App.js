// src/components/App.js
import React from 'react';
import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';
import Home from './Home';
import Navbar from './Navbar';
import Company from './Company';

const Component = () => (
  <Router>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/:symbol" component={Company} />
    </Switch>
  </Router>
);

export default Component;
