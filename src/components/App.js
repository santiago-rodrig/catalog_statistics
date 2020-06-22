// src/components/App.js
import React from 'react';
import {
  BrowserRouter as Router, Route, Switch, useLocation,
} from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Home from './Home';
import Navbar from './Navbar';
import Company from './Company';
import styles from './Company.module.css';
import reducer from '../reducers';

const store = createStore(reducer);

const ErrorComponent = () => (
  <div style={{ marginTop: '6rem' }} className="container">
    <div className={styles.error_component}>
      <h1 style={{ marginBottom: '4rem' }}>
        404 over here,
        {' '}
        <strong>
          {useLocation().pathname}
        </strong>
        {' '}
        is not a recognized URL
      </h1>
      <iframe title="not found" src="https://giphy.com/embed/9J7tdYltWyXIY" width="330" height="304" frameBorder="0" className="giphy-embed" allowFullScreen />
      <p><a href="https://giphy.com/gifs/internet-google-chrone-9J7tdYltWyXIY">via GIPHY</a></p>
    </div>
  </div>
);

const Component = () => (
  <Provider store={store}>
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/:symbol" component={Company} />
        <Route path="*" component={ErrorComponent} />
      </Switch>
    </Router>
  </Provider>
);

export default Component;
