// src/reducers/index.js
import { combineReducers } from 'redux';
import companiesReducer from './companies';
import exchangeFilterReducer from './exchangeFilter';
import minimumFilterReducer from './minimumFilter';

const reducer = combineReducers({
  companies: companiesReducer,
  exchangeFilter: exchangeFilterReducer,
  minimumFilter: minimumFilterReducer,
});

export default reducer;
