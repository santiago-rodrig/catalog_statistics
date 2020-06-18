// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import 'normalize.css';
import '@fortawesome/fontawesome-free/js/all';
import '@fortawesome/fontawesome-free/css/all.css';
import './index.css';
import App from './components/App';
import reducer from './reducers';

const store = createStore(reducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
